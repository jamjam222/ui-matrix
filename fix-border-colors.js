const fs = require('fs');
const path = require('path');

// 파일 읽기
const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// border-border를 구체적인 색상으로 변경
content = content.replace(/border-border/g, 'border-gray-200 dark:border-gray-700');

// 파일 저장
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Border 색상 수정 완료!');
console.log('border-border → border-gray-200 dark:border-gray-700');
