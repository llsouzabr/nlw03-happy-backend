# nlw03-happy Omnistack - Backend da Aplicação

Workshop Rockseat NextLevelWeek 03 (2020-10-13) - Trilha OmniStack (Avançado)

## Layout Proposto

> <https://www.notion.so/Layout-Happy-OmniStack-faac4d4d638343fe8bab627125a7557c> (Créditos RocketSeat)

---

## Bibliotecas necessárias

* express

  ```bash
  yarn add express
  yarn add @types/express -D
  ```

* typescript

  ```bash
  yarn add typescript -D
  yarn tsc --init
  ```

  * Após instalado e executar o `yarn tsc --init`, editar o arquivo `tsconfig.json`, alterando o target de '**es5**' para '**es2017**'

* ts-node-dev

  ```bash
  yarn add ts-node-dev -D
  ```

* pacotes para BD

  ```bash
  yarn add typeorm sqlite3
  ```

  * Após instalação adicionar script no packages.json

  ```json
  "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
  ```

  * Para criar uma migration: `yarn typeorm migration:create -n create_orphanages`
  * Para rodar uma migration: `yarn typeorm migration:run`
  * Para rollback: `yarn typeorm migration:revert`

* multer (para upload de imagens)

  ```bash
  yarn add multer
  yarn add @types/multer -D
  ```

---

## Linguagens

* React
* NodeJS
* TypeScript
