# Duk

Laravel 개발자를 위한 로컬 디버깅 도구입니다.

## 설치

[Releases](https://github.com/johyunduk/duk/releases) 페이지에서 운영체제에 맞는 파일을 다운로드하세요.

- macOS: `.dmg`
- Windows: `.exe`

## 사용법

1. Duk 앱을 실행합니다.
2. Laravel 프로젝트에 [duk-php](https://github.com/johyunduk/duk-php) 패키지를 설치합니다.
3. 코드에서 `duk()`를 호출하면 앱에 실시간으로 표시됩니다.

## macOS 실행 시 보안 경고

Apple 공증이 없어 처음 실행 시 경고가 뜰 수 있습니다. 아래 방법으로 해결하세요.

```bash
xattr -cr /Applications/debugger.app
```

또는 시스템 설정 → 개인정보 보호 및 보안 → "확인 없이 열기"

## 포트

앱은 기본적으로 **23517** 포트에서 수신 대기합니다.
