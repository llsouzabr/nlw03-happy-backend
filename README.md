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

  * Existem dois mapas free para utilizar:
    * https://www.openstreetmap.org
    * https://www.mapbox.org => Para este mapa é necessário cadastro prévio. Após cadastro:
      * copiar o token da API
      * criar um arquivo .env na raiz do App (./web) contendo
      ```bash
      REACT_APP_MAPBOX_TOKEN=<<SEU_TOKEN_VAI_AQUI>>
      ```
      * Reiniciar a App

---

## Linguagens

* React
* NodeJS
* TypeScript
