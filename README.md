# todo-js
- 素のjavascriptで書いたTODOアプリのリポジトリです。

## プロジェクトの新規作成方法
- appコンテナを起動
```bash
make up
```
- appコンテナの稼働状況を確認
```bash
make ps
```
- appコンテナに入る
```bash
make app
```
- appコンテナ内でプロジェクトを作成
```bash
npm create parcel vanilla
```
- プロジェクト直下でGit管理したいので、競合を防止するため、`todo-js`配下に新規作成された次のファイルを削除
```bash
rm -rf .git .gitignore
```
- appコンテナ内でサーバーを起動
```bash
npm start
```

## 参考
- [Quick Start](https://parceljs.org/getting-started/webapp/#quick-start)
