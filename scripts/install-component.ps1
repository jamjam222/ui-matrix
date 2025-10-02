# UI 컴포넌트 설치 스크립트
# 사용법: .\scripts\install-component.ps1 -Library shadcn -Component button

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('shadcn', 'aceternity', 'magicui', 'originui')]
    [string]$Library,
    
    [Parameter(Mandatory=$true)]
    [string]$Component
)

$ErrorActionPreference = "Stop"

# 라이브러리별 설정 파일 매핑
$configFiles = @{
    'shadcn' = 'components.shadcn.json'
    'aceternity' = 'components.aceternity.json'
    'magicui' = 'components.magicui.json'
    'originui' = 'components.originui.json'
}

# 라이브러리별 CLI 명령어 매핑
$cliCommands = @{
    'shadcn' = 'npx shadcn@latest add'
    'aceternity' = 'npx shadcn@latest add https://ui.aceternity.com/registry/'
    'magicui' = 'npx shadcn@latest add @magicui/'
    'originui' = 'npx shadcn@latest add https://originui.com/r/'
}

$configFile = $configFiles[$Library]
$cliCommand = $cliCommands[$Library]

Write-Host "=== UI Matrix 컴포넌트 설치 ===" -ForegroundColor Cyan
Write-Host "라이브러리: $Library" -ForegroundColor Yellow
Write-Host "컴포넌트: $Component" -ForegroundColor Yellow
Write-Host "설정 파일: $configFile" -ForegroundColor Yellow
Write-Host ""

# 설정 파일 존재 확인
if (-not (Test-Path $configFile)) {
    Write-Host "오류: $configFile 파일을 찾을 수 없습니다." -ForegroundColor Red
    exit 1
}

# 임시로 components.json 백업
$backupExists = Test-Path "components.json"
if ($backupExists) {
    Copy-Item "components.json" "components.json.backup" -Force
    Write-Host "기존 components.json 백업 완료" -ForegroundColor Green
}

# 라이브러리별 설정 파일을 components.json으로 복사
Copy-Item $configFile "components.json" -Force
Write-Host "$configFile -> components.json 복사 완료" -ForegroundColor Green

# 컴포넌트 설치
Write-Host ""
Write-Host "컴포넌트 설치 중..." -ForegroundColor Cyan

try {
    # 라이브러리별 명령어 생성
    if ($Library -eq 'magicui') {
        # Magic UI: @magicui/ 접두사
        $fullCommand = "$cliCommand$Component"
    } elseif ($Library -eq 'originui') {
        # Origin UI: URL 형식 (comp-XX.json)
        $fullCommand = "$cliCommand$Component.json"
    } elseif ($Library -eq 'aceternity') {
        # Aceternity UI: URL 형식 (component-name.json)
        $fullCommand = "$cliCommand$Component.json"
    } else {
        # 기본: 공백으로 구분
        $fullCommand = "$cliCommand $Component"
    }
    
    Write-Host "실행: $fullCommand" -ForegroundColor Gray
    Invoke-Expression $fullCommand
    
    Write-Host ""
    Write-Host "설치 완료!" -ForegroundColor Green
} catch {
    Write-Host "오류 발생: $_" -ForegroundColor Red
    exit 1
} finally {
    # components.json 복원
    if ($backupExists) {
        Move-Item "components.json.backup" "components.json" -Force
        Write-Host "components.json 복원 완료" -ForegroundColor Green
    } else {
        Remove-Item "components.json" -Force
        Write-Host "임시 components.json 삭제 완료" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "=== 설치 완료 ===" -ForegroundColor Cyan
Write-Host "컴포넌트 위치: src/components/$Library/" -ForegroundColor Yellow
