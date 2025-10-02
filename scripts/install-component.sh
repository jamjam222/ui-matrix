#!/bin/bash
# UI 컴포넌트 설치 스크립트 (Linux/Mac)
# 사용법: ./scripts/install-component.sh <library> <component>
# 예시: ./scripts/install-component.sh shadcn button

set -e

# 인자 확인
if [ $# -ne 2 ]; then
    echo "사용법: $0 <library> <component>"
    echo "지원 라이브러리: shadcn, aceternity, magicui, originui"
    exit 1
fi

LIBRARY=$1
COMPONENT=$2

# 라이브러리 유효성 검사
case $LIBRARY in
    shadcn|aceternity|magicui|originui)
        ;;
    *)
        echo "오류: 지원하지 않는 라이브러리입니다: $LIBRARY"
        echo "지원 라이브러리: shadcn, aceternity, magicui, originui"
        exit 1
        ;;
esac

# 설정 파일 매핑
declare -A CONFIG_FILES=(
    ["shadcn"]="components.shadcn.json"
    ["aceternity"]="components.aceternity.json"
    ["magicui"]="components.magicui.json"
    ["originui"]="components.originui.json"
)

# CLI 명령어 매핑
declare -A CLI_COMMANDS=(
    ["shadcn"]="npx shadcn@latest add"
    ["aceternity"]="npx shadcn@latest add https://ui.aceternity.com/registry/"
    ["magicui"]="npx shadcn@latest add @magicui/"
    ["originui"]="npx shadcn@latest add https://originui.com/r/"
)

CONFIG_FILE=${CONFIG_FILES[$LIBRARY]}
CLI_COMMAND=${CLI_COMMANDS[$LIBRARY]}

echo "=== UI Matrix 컴포넌트 설치 ==="
echo "라이브러리: $LIBRARY"
echo "컴포넌트: $COMPONENT"
echo "설정 파일: $CONFIG_FILE"
echo ""

# 설정 파일 존재 확인
if [ ! -f "$CONFIG_FILE" ]; then
    echo "오류: $CONFIG_FILE 파일을 찾을 수 없습니다."
    exit 1
fi

# 임시로 components.json 백업
BACKUP_EXISTS=false
if [ -f "components.json" ]; then
    cp components.json components.json.backup
    BACKUP_EXISTS=true
    echo "기존 components.json 백업 완료"
fi

# 라이브러리별 설정 파일을 components.json으로 복사
cp "$CONFIG_FILE" components.json
echo "$CONFIG_FILE -> components.json 복사 완료"

# 컴포넌트 설치
echo ""
echo "컴포넌트 설치 중..."

# 정리 함수
cleanup() {
    if [ "$BACKUP_EXISTS" = true ]; then
        mv components.json.backup components.json
        echo "components.json 복원 완료"
    else
        rm -f components.json
        echo "임시 components.json 삭제 완료"
    fi
}

# 트랩 설정 (오류 발생 시에도 정리)
trap cleanup EXIT

# 라이브러리별 명령어 생성
if [ "$LIBRARY" = "magicui" ]; then
    # Magic UI: @magicui/ 접두사
    FULL_COMMAND="$CLI_COMMAND$COMPONENT"
elif [ "$LIBRARY" = "originui" ]; then
    # Origin UI: URL 형식 (comp-XX.json)
    FULL_COMMAND="$CLI_COMMAND$COMPONENT.json"
elif [ "$LIBRARY" = "aceternity" ]; then
    # Aceternity UI: URL 형식 (component-name.json)
    FULL_COMMAND="$CLI_COMMAND$COMPONENT.json"
else
    # 기본: 공백으로 구분
    FULL_COMMAND="$CLI_COMMAND $COMPONENT"
fi

echo "실행: $FULL_COMMAND"
eval $FULL_COMMAND

echo ""
echo "=== 설치 완료 ==="
echo "컴포넌트 위치: src/components/$LIBRARY/"
