# vue-til

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### eslint 설정파일 

컨트롤 + ,  설정파일 열기 

eslint 검색 후 

Eslint: Validate

찾아서 눌르기

"eslint.validate": [
        
        {
            "language" : "vue",
            "autoFix": true
        },
        {
            "language" : "javascript",
            "autoFix": true
        },
        {
            "language" : "typescript",
            "autoFix": true
        }
    ],

    "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
        },
        "eslint.workingDirectories": [
          {"mode": "auto"}
        ],

위에 내용 삽입

format on save 꼭 꺼줘야함
