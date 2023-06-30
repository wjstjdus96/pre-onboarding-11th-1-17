# 원티드 프론트엔드 인턴십 - 17 팀

- 1주차 과제

---

## 실행방법

```
$ npm install
$ npm run start
```

## 프로젝트 링크

[바로가기](https://main--dynamic-stardust-16b5d1.netlify.app/)

## 개발환경

- 언어 : javascript
- 라이브러리 및 프레임워크: axios, styled-components, react-router-dom
- 배포 : netlify

## 폴더구조

```
/src/apis → api 요청 함수를 모아둔 폴더
/src/components → 페이지에 사용되는 컴포넌트를 모아둔 폴더
/src/hooks → 커스텀 훅을 모아둔 폴더
/src/pages → 각 route에 해당하는 페이지를 모아둔 폴더
/src/utils → 공통적으로 사용하는 함수를 모아둔 폴더
/src/constants → 상수를 모아둔 폴더
/src/layouts  → 페이지 레이아웃을 모아둔 폴더
```

## 기능 설명

- 회원가입
- 로그인 / 로그아웃
  - 이메일, 비밀번호 유효성 검사
- 투두리스트
  - 투두 리스트 작성
  - 투두 리스트 수정
  - 투두 리스트 삭제

## 구현 방법 - Best Practice

### API 처리

- axios를 사용하여 api 요청
- auth와 todo로 api 분리
- axios.create()를 사용해 공통 설정을 모두 넣은 인스턴트를 만들어 코드의 중복 사용을 줄임
- api url을 따로 상수로 분리해 관리가 편하도록 함

### localstorage 관리

- utils 폴더에 localStorage 관리 함수를 따로 구현
- 토큰 key를 따로 상수로 분리

### 라우팅 / 리다이렉트 처리

- 라우팅에 react-router-dom의 BrowserRouter 사용
- 리다이렉트 처리를 위해 권한을 체크하는 PrivateRouter 컴포넌트 생성
  토큰이 있을 경우 <Outlet/>을 반환하여 하위 라우트 컴포넌트를 렌더링 하는 방식
- useEffect로 리다이렉트 처리 시 존재하는 화면 깜박거림을 해결하기 위함

### 에러 처리

- try -catch 구문을 사용하여 console.log로 에러 출력
- 어떤 상황에서 에러가 나타났는지 명확히 구분하기 위해 에러 케이스를 세분화하여 각각의 에러메세지 지정
  예 ) 요청을 보내기 전 발생한 경우, 요청은 성공했지만 오류 응답을 경우 등으로 세분화

### 유효성 검사

- utils 폴더에 유효성 검사 함수 따로 분리

### Todo 데이터처리

- useState 활용하여 todoData 저장 후 활용

### 스타일링 도구

- styled component를 기본으로 사용
- 추후 필요하다면 tailwindCSS 같이 적용

### 컴포넌트 분리

- 프로젝트가 커질 경우를 대비해 단위 세분화

```
components/todo → todo를 구성하는 todoList, todoItem, addTodo
components/autoForm → 로그인과 회원가입에 공통적으로 사용되는 form
components/common → 재사용이 가능한 button과 input
```

### 실행 화면

![practiceVideo](/assets/practiceVideo.gif)
