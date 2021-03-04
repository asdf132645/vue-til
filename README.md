# Vue.js 학습 노트 애플리케이션

인프런 Vue.js Endgame 강의에서 다루는 애플리케이션 소스 코드입니다.

## 기술 스택

- Vue.js 2.6.10
- Vue Router
- Vuex
- Axios
- Vue Test Utils

## 개발 환경

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

💡 참고 사항 : 수업에서는 VSCode를 기준으로 설명합니다. 별도로 선호하시는 IDE가 있다면 그걸 쓰셔도 괜찮습니다 😄

## VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 뷰 확장 플러그인 : [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- 뷰 코드 스니펫 : [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등

## License & Copyright

**Copyright © 2019 Captain Pangyo**
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.


### (Code Splitting) 방법 다이나믹 임포트 웹팩 코어js에서 만든 코드

component: () => import('@/views/SignupPage.vue'),

https://webpack.js.org/guides/code-splitting/


### Vue.js 다이나믹 임포트 문서

https://vuejs.org/v2/guide/components-dynamic-async.html#ad


### 초기 진입 라우트 설정

{
      path: '/',
      redirect: '/login',
    },


### 라우터 폴백 없는페이지 반응
 {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },



### eslint 셋팅 
{
    "git.autofetch": true,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "Night Owl",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "eslint.alwaysShowStatus": true,
    "eslint.workingDirectories": [
        {
            "mode": "auto"
        }
    ],
    // ESLint
    "eslint.validate": [
    
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // don't format on save
    "editor.formatOnSave": false
}

### 서버배포시 라우터 url 설정값 확인 사이트

https://router.vuejs.org/guide/essentials/history-mode.html


### 이벤트 버블링
버튼 클릭 시 이벤트가 form 으로 올라감

### 이벤트 오작동 방지 -> prevent 붙여주기
@:submit.prevent


### 파라메터 (Parameters)

api 요청할떄 항상 체크해야하는부분



### 백틱

변수를 문자열이랑 그냥 합쳐서 뭉태기로 쓰기
`${data.username} 님이 가입되었습니다`

### 디스트럭처링(Destructuring)

const response  같은 변수 안에 데이터를 바로쓰는방법  response.data 를 분해 해서  const { data } 이렇게 축약 data.username
response를 생략하는 방법 액션함수의 커밋도 같은 방식임

### 라우터 이동 js 사용시 아래 문법사용
this.$router.push(이동할페이지인수값적기); js 이동 문법 -> <router-link to="">는 html 이동 문법 와 동일

라우터 공식 홈페이지
https://router.vuejs.org/guide/essentials/navigation.html#programmatic-navigation

###  패키지json에서 dependencies 에서는 npm run build 에서 자원이 압축이되어서 dist 에 포함되어서 들어감
devDependencies 는 npm run build에 포함되어서 들어가지 않음 말그대로 배포할떄 포함되지않음


### 타입까지 점검해주는 === 

### json 웹토큰 문서
https://jwt.io/

jwt  -> 라고 줄여서부르고 가장 많이 쓰이는 인증방식

### 토큰은 인증값
token

### 헤더속성 기본내장속성
headers:{
    Authorization: 토큰을 실어주기 f12 네트워크에 headers 에 Request Headers 에 Authorization 에 토큰을 넣을수있음
  }

### axios.interceptors 리퀘스트 등 쓸떄 axios 가아닌 아래 문법으로 대체

axios.interceptors.request.use(


### axios

CREATE - posts
POST - posts {id}
PUT - posts {id}
DELETE - posts {id}
