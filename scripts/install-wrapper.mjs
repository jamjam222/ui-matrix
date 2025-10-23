#!/usr/bin/env node
/**
 * UI Matrix 컴포넌트 설치 래퍼 스크립트
 * 사용법: npm run add:shadcn button
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recursively collect file paths under a directory
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  /** @type {string[]} */
  let results = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

// 인자 파싱
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('사용법: node install-wrapper.mjs <library> [component]');
  console.error('예시: node install-wrapper.mjs shadcn button');
  process.exit(1);
}

const library = args[0];
const component = args[1];

// 지원 라이브러리 목록
const supportedLibraries = ['shadcn', 'aceternity', 'magicui', 'originui'];
if (!supportedLibraries.includes(library)) {
  console.error(`오류: 지원하지 않는 라이브러리입니다: ${library}`);
  console.error(`지원 라이브러리: ${supportedLibraries.join(', ')}`);
  process.exit(1);
}

// 컴포넌트 이름이 없으면 안내 메시지 출력
if (!component) {
  console.log(`\n=== ${library.toUpperCase()} 컴포넌트 설치 ===`);
  console.log(`사용법: npm run add:${library} <component-name>`);
  console.log(`예시: npm run add:${library} button\n`);
  
  // 라이브러리별 문서 링크
  const docLinks = {
    shadcn: 'https://ui.shadcn.com/docs/components',
    aceternity: 'https://ui.aceternity.com/components',
    magicui: 'https://magicui.design/docs/components',
    originui: 'https://originui.com/button'
  };
  
  console.log(`📚 컴포넌트 목록: ${docLinks[library]}`);
  
  if (library === 'originui') {
    console.log('💡 Origin UI는 comp-XX 형식의 ID를 사용합니다.');
    console.log('   예시: npm run add:originui comp-01');
  }
  
  console.log('');
  process.exit(0);
}

// 설정 파일 매핑
const configFiles = {
  shadcn: 'components.shadcn.json',
  aceternity: 'components.aceternity.json',
  magicui: 'components.magicui.json',
  originui: 'components.originui.json'
};

// CLI 명령어 매핑
const cliCommands = {
  shadcn: 'npx shadcn@latest add',
  aceternity: 'npx shadcn@latest add https://ui.aceternity.com/registry/',
  magicui: 'npx shadcn@latest add @magicui/',
  originui: 'npx shadcn@latest add https://originui.com/r/'
};

const configFile = configFiles[library];
const cliCommand = cliCommands[library];
const rootDir = path.resolve(__dirname, '..');
const stageDir = path.join(rootDir, 'src', 'components', 'ui');

console.log('\n=== UI Matrix 컴포넌트 설치 ===');
console.log(`라이브러리: ${library}`);
console.log(`컴포넌트: ${component}`);
console.log(`설정 파일: ${configFile}`);
console.log('');

// 설정 파일 존재 확인
const configPath = path.join(rootDir, configFile);
if (!fs.existsSync(configPath)) {
  console.error(`오류: ${configFile} 파일을 찾을 수 없습니다.`);
  process.exit(1);
}

// components.json 백업
const componentsJsonPath = path.join(rootDir, 'components.json');
const backupPath = path.join(rootDir, 'components.json.backup');
let backupExists = false;

try {
  if (fs.existsSync(componentsJsonPath)) {
    fs.copyFileSync(componentsJsonPath, backupPath);
    backupExists = true;
    console.log('✓ 기존 components.json 백업 완료');
  }

  // 라이브러리별 설정 파일을 components.json으로 복사
  fs.copyFileSync(configPath, componentsJsonPath);
  console.log(`✓ ${configFile} -> components.json 복사 완료`);

  console.log('\n컴포넌트 설치 중...\n');

  // 라이브러리별 명령어 생성
  let componentName;
  if (library === 'magicui') {
    // Magic UI: @magicui/ 접두사
    componentName = `${cliCommand}${component} -y`;
  } else if (library === 'originui') {
    // Origin UI: URL 형식 (comp-XX.json)
    componentName = `${cliCommand}${component}.json -y`;
  } else if (library === 'aceternity') {
    // Aceternity UI: URL 형식 (component-name.json)
    componentName = `${cliCommand}${component}.json -y`;
  } else {
    // 기본: 공백으로 구분
    componentName = `${cliCommand} ${component} -y`;
  }
  
  console.log(`실행: ${componentName}\n`);

  // Snapshot before install (only under src/components/ui)
  const preFiles = new Set(walk(stageDir));
  
  try {
    execSync(componentName, { 
      stdio: 'inherit',
      cwd: rootDir
    });
    console.log('\n✓ 설치 완료!');
    
    // Relocate newly created files from staging (src/components/ui) into library subfolder
    const shouldRelocate = ['magicui', 'originui', 'aceternity'].includes(library);
    if (shouldRelocate) {
      const postFilesArr = walk(stageDir);
      const newFiles = postFilesArr.filter((f) => !preFiles.has(f));

      if (newFiles.length > 0) {
        const destDir = path.join(stageDir, library);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        let movedCount = 0;
        for (const srcPath of newFiles) {
          try {
            if (fs.existsSync(srcPath) && fs.statSync(srcPath).isFile() && /\.tsx?$/.test(srcPath)) {
              const destPath = path.join(destDir, path.basename(srcPath));
              // 이미 올바른 위치라면 건너뛰기
              if (srcPath.startsWith(destDir + path.sep)) {
                continue;
              }
              // 목적지에 같은 파일이 있으면 덮어쓰기
              if (fs.existsSync(destPath)) {
                fs.unlinkSync(destPath);
              }
              fs.renameSync(srcPath, destPath);
              movedCount++;
            }
          } catch {
            // ignore individual move errors
          }
        }

        if (movedCount > 0) {
          console.log(`✓ ${movedCount}개 파일을 ${path.relative(rootDir, destDir)} 로 이동 완료`);
        }
      }
    }
  } catch (error) {
    console.error('\n✗ 설치 중 오류 발생');
    throw error;
  }

} catch (error) {
  console.error(`오류: ${error.message}`);
  process.exit(1);
} finally {
  // components.json 복원
  try {
    if (backupExists) {
      fs.copyFileSync(backupPath, componentsJsonPath);
      fs.unlinkSync(backupPath);
      console.log('✓ components.json 복원 완료');
    } else if (fs.existsSync(componentsJsonPath)) {
      fs.unlinkSync(componentsJsonPath);
      console.log('✓ 임시 components.json 삭제 완료');
    }
  } catch (error) {
    console.error(`정리 중 오류: ${error.message}`);
  }
}

console.log('\n=== 설치 완료 ===');
console.log(`📁 컴포넌트 위치: src/components/ui/${library}/\n`);
