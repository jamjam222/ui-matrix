const fs = require('fs');
const path = require('path');

// 파일 읽기
const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Compare 테이블 영역만 추출 (TabsContent value="compare"부터 닫는 TabsContent까지)
const compareStart = content.indexOf('<TabsContent value="compare">');
const compareEnd = content.indexOf('</TabsContent>', compareStart) + '</TabsContent>'.length;

if (compareStart === -1 || compareEnd === -1) {
  console.log('Compare 테이블을 찾을 수 없습니다.');
  process.exit(1);
}

let compareSection = content.substring(compareStart, compareEnd);
const beforeCompare = content.substring(0, compareStart);
const afterCompare = content.substring(compareEnd);

// 1. 모든 <tr>에 hover 클래스 추가 (tbody 내부만)
compareSection = compareSection.replace(
  /<tr>/g,
  '<tr className="transition-colors hover:bg-muted/30">'
);

// 2. tbody 내부의 td 태그에 클래스 추가
// 각 행의 첫 번째 td 찾기 및 수정
let lines = compareSection.split('\n');
let inTbody = false;
let tdCount = 0;
let totalTdInRow = 5; // 테이블이 5컬럼

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // tbody 시작/종료 추적
  if (line.includes('<tbody>')) {
    inTbody = true;
    continue;
  }
  if (line.includes('</tbody>')) {
    inTbody = false;
    continue;
  }
  
  if (!inTbody) continue;
  
  // tr 시작 시 카운터 리셋
  if (line.includes('<tr')) {
    tdCount = 0;
    continue;
  }
  
  // td 태그 처리
  if (line.trim().startsWith('<td>') || line.trim().startsWith('<td ')) {
    tdCount++;
    
    // 이미 className이 있는지 확인
    if (line.includes('className=')) {
      continue;
    }
    
    let className;
    if (tdCount === 1) {
      // 첫 번째 컬럼: 왼쪽 정렬, 굵게
      className = 'border-b border-r-2 border-border p-4 font-semibold text-left';
    } else if (tdCount < totalTdInRow) {
      // 중간 컬럼: 가운데 정렬
      className = 'border-b border-r-2 border-border p-4 text-center';
    } else {
      // 마지막 컬럼: 오른쪽 border 없음
      className = 'border-b border-border p-4 text-center';
    }
    
    lines[i] = line.replace('<td>', `<td className="${className}">`);
  }
}

compareSection = lines.join('\n');

// 최종 결과 조합
const finalContent = beforeCompare + compareSection + afterCompare;

// 파일 저장
fs.writeFileSync(filePath, finalContent, 'utf8');

console.log('✅ 테이블 클래스 추가 완료!');
console.log('Compare 테이블의 모든 td에 Tailwind 클래스가 추가되었습니다.');
