## Мессенджер

  SPA live чат без использования клиентских библиотек и фреймворков.
  Реализовано с помощью самописного роутера, реактивность с помощью Proxy и WebSocket 
  
## Основные моменты

- Подключён шаблонизатор - Handlebars
- Подключен сборщик - Webpack(актуальный), Parcel(использовался 1-3 спринте)
- Реализована раздача статики на Node.js
- Dockerfile
- Реализованы live сообщения с помощью WebSocket
- Реализован Store
- Покртие тестами (mocha, chai)
- Обработка XSS и DOS
- Есть декомпозиция, Event Bus и Router
- Подключил ESlint, Stylelint
- Подключён препроцессор - SCSS
- Захостил на netlify - [DEMO](https://spiffy-kheer-564f95.netlify.app/)

## Макет

[Ссылка на макет Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=1%3A103)

## Галерея
[Регистрация](https://ibb.co/g6hQrzj)
[Чат](https://ibb.co/vhHNGWR)
[Профиль](https://ibb.co/sy63GjS)

## Установка

- `npm run build-dev` — сборка стабильной версии в дев режиме,
- `npm run build-prod` — сборка стабильной версии в прод режиме,
- `npm run dev` — запуск версии для разработчика,
- `npm run start` — запуск на сервере node.js.
