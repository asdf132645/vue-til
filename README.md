### 프로젝트 뷰 cli 설치 옵션

Vue CLI 설치 안내 페이지
뷰 CLI 버전 4.5.x 이상 쓰시는 분들은 아래 옵션으로 프로젝트를 생성해주세요 :)


프로젝트 설치 옵션
Manually select features
Babel, Linter, Unit
2.x <-- Vue 2로 하시는게 중요합니다. 아직 Vue 3는 상용 서비스에 적용하기에는 무리가 있습니다.
Prettier
Lint on Save
Jest
In dedicated config files
n


### vscode 플러그인 요약

Vetur : Vue.js 플러그인
Night Owl : 코드 하이라이팅 플러그인
Material Dark Syntax : 코드 하이라이팅 플러그인
Google Material Icon Theme : 폴더 아이콘 테마
ESLint : 자바스크립트 문법 검사 플러그인
TSLint : 타입스크립트 문법 검사 플러그인
Auto Close tag : HTML 태그 자동 닫기 플러그인
Live Server : 정적 파일을 로컬 서버에 올리고 자동 갱신해주는 플러그인


### 노드 버전 확인

node -v

### 노드 버전 변경 -> nvm

인스톨링 앤드 업데이팅 (bash로 기본셀 선택)
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

2. os에 명령어를 입력해서 nvm 으로 설치 하기위해서는 어딘가에 저장해줘야함 아래 구문을 저장해야 nvm 명령어를 os에서 알아먹음
vi-> 리눅스 편집기

vi ~/.bashrc 를 친 후에 아래코드 붙여넣기

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

입력 완료후에는 esc 눌른후 

:wq 추가한내용을 저장한다.

i를 입력시 인설트 수정가능

vi ~/.bashrc 를 다시 치면 잘저장되어있는지 확인가능

:q로 입력으로 편집종료

3.nvm -version (버전확인하기)

node -v 

### nvm 설치 명령어
nvm install 12.14.0
nvm install 10.16.3