export const API_URL = 'https://www.pre-onboarding-selection-task.shop';
export const TOKEN_KEY = 'user';

export const RES_MESSAGE = {
  SUCCESS(state) {
    return `${state}에 성공하였습니다.`;
  },
  FAIL(state) {
    return `${state}에 실패하였습니다. 다시 시도해주세요.`;
  },
};

export const SIGN_UP = '회원가입';
export const SIGN_IN = '로그인';
export const HOME = 'HOME';
export const TODO = 'TO DO';
export const SUBMIT = '제출';
export const CANCEL = '취소';
export const REVISE = '수정';
export const DELETE = '삭제';
export const ADD = '추가';

export const EMAIL_MES = 'ex) abc@naver.com';
export const PASSWORD_MES = '8자 이상 입력하세요';
export const TODO_MES = '투두를 적으십시오';
export const LOGOUT_MES = '로그아웃 되었습니다.';
export const TODO_EMPTY_MES = '할 일을 추가하십시오';
export const TODO_LOADING_MES = '로딩 중';
