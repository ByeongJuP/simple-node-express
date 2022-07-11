# express를 활용한 서버 구축

## npm install

- `npm init`
- `npm install express nodemon @types/express @types/node ts-node typescript`

## tsconfig edit

```json
{
  "compilerOptions":{
    ...
    "module": "commonjs"
  }
}
```

## npm run start setting

```json
{
  ...
  "scripts": {
    "start": "nodemon --watch 'src/**' --exec 'ts-node' src/server.ts",
    ...
  }
}


```
