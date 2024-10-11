# 소셜링크 정리 웹페이지 구현 프로젝트 1차 고도화

협업페이지: [노션 페이지 바로가기](https://print-ilikepenguin.notion.site/11682d67d3ef80b9aaadc9125e48317e?pvs=4)

## 목차

-   [📌 서비스 소개](#-서비스-소개)
-   [⏱ 개발 기간](#-개발-기간)
-   [👥 팀 소개](#-팀-소개)
-   [📄 개발컨벤션](#-개발-컨벤션)

## 서비스 소개

### **프로젝트 이름**

**소셜링크 정리 웹페이지 IN MY LINK 1차 고도화 🎃**

### 페르소나

20~40대 여성

### 기존과 달라진 점

-   **회원가입/로그인** 페이지 추가
-   **UI 디자인** 업데이트

### **목표**

링크 관리 서비스를 제공하는 플랫폼은 많지만, 사용자 맞춤형 디자인 제공과 직관적인 UI/UX 측면에서는 여전히 한계가 존재합니다.

사용자는 다양한 배경 스킨과 컬러 옵션을 선택해 자신만의 스타일을 적용할 수 있으며, 손쉽게 소셜 링크를 추가하고 관리할 수 있는 기능을 제공합니다.

또한, **회원가입/로그인 기능**을 새롭게 추가하여 사용자 맞춤형 기능을 강화했으며, **실시간 데이터 바인딩**과 **API 연동**을 통해 동적인 화면 업데이트를 지원합니다. 성능 최적화와 일관된 UI를 통해 사용자들에게 빠르고 쾌적한 경험을 제공하는 것을 목표로 하고 있습니다.

## 개발 기간

-   2024.10.07 ~ 2024.11.01 (4주)

### 👥 팀 소개

<table align="center">
  <tr align="center">
    <td style="min-width: 250px;">
      <a href="https://github.com/printilikepenguin">
        <b>김현지</b>
      </a>
    </td>
    <td style="min-width: 250px;">
      <a href="https://github.com/aksen123">
        <b>박민욱</b>
      </a>
    </td>
  </tr>
  <tr align="center">
    <td style="min-width: 250px;">
      <img src="https://avatars.githubusercontent.com/u/139518223?v=4" width="100">
    </td>
    <td style="min-width: 250px;">
      <img src="https://avatars.githubusercontent.com/u/126546293?v=4" width="100">
    </td>
  </tr>
  <tr align="center">
    <td>
      <b>Frontend</b>
      <br>퍼블리싱
      <br>관리페이지-일정/이벤트/구분선<br/>
    </td>
    <td>
      <b>Frontend</b><br>퍼블리싱<br>관리페이지-첫화면<br/>
    </td>
  </tr>
  <tr align="center">
    <td style="min-width: 250px;">
      <a href="https://github.com/">
        <b>이동진</b>
      </a>
    </td>
    <td style="min-width: 250px;">
      <a href="https://github.com/cod3prod">
        <b>조아론</b> 팀리더
      </a>
    </td>
  </tr>
  <tr align="center">
    <td style="min-width: 250px;">
      <img src="https://avatars.githubusercontent.com/u/143502381?v=4" width="100">
    </td>
    <td style="min-width: 250px;">
      <img src="https://avatars.githubusercontent.com/u/172338053?v=4" width="100">
    </td>
  </tr>
  <tr align="center">
    <td>
      <b>Frontend</b><br>퍼블리싱<br>회원페이지-로그인/로그아웃/가입<br/>
    </td>
    <td>
      <b>Frontend</b><br>퍼블리싱<br>관리페이지-이미지/영상/텍스트/링크<br/>
    </td>
  </tr>
</table>

## 개발 컨벤션

[개발 컨벤션](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)

## 코드 스타일

-   파일 및 폴더명: kebab-case
-   컴포넌트명: PascalCase
-   함수명: camelCase
-   컴포넌트: export default function
-   css: kebab-case (모듈타입)
-   변수선언: camelCase

## Git 컨벤션

### 규칙

-   `feat` : 새로운 기능 추가
-   `fix` : 버그 수정
-   `docs` : 문서 수정
-   `style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
-   `refactor` : 코드 리펙토링
-   `test` : 테스트 코드, 리펙토링 테스트 코드 추가
-   `chore` : 빌드 업무 수정, 패키지 매니저 수정
-   `refactor` : 코드 리팩토링 및 기능 고도화
-   `design` : UI 관련 코드 추가 및 수정

### 제목

-   제목은 코드의 변경 사항에 대해 짧은 요약을 나타냄
-   영어로 작성하지 말고 한글로 작성할 것.
-   ‘고침’, ‘추가’, ‘변경’ 등 명령조로 시작
-   ex) Feat : 추가 get data api 함수

### 본문

1. 선택사항 (본문은 꼭 작성 안해도 됨)
2. 부연설명이 필요하거나 커밋의 이유를 설명할 경우
3. 본문 내용은 어떻게 변경했는지보다, **무엇을 변경했는지** or **왜 변경했는지**
4. 제목과 구분되기 위해 공백 한 줄을 띄워서 작성

## 브랜치 컨벤션

main

┕ feature/<issue>

### 예시

-   `feature/add-user-profile`
-   `feature/improve-search-functionality`

### 적용 방법

1. 로컬에서 작업 브랜치 생성

2. commit and push

    ```powershell
    git commit -m "Feat : 변경 navigation 텍스트"
    git push origin feature/navigaiton
    ```

3. Pull requests

    PR 컨벤션

    - 제목은 commit 그대로(사실 상관 없음)
    - [PR 컨벤션](https://www.notion.so/PR-11682d67d3ef81058799d12795cf6e37?pvs=21) 에 있는 템플릿 그대로 사용 (이미지는 선택 사항)

4. 코드 리뷰 이후 merge
