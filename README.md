Para rodar o projeto

## Desenvolvimento

Para criar a imagem

```
docker build -t dgs-engineer-guide:latest .
```

```
docker run --init -p 5173:5173 dgs-engineer-guide:dev
```

Rodar a imagem em desenvolvimento

docker run -p 5173:5173 dgs-engineer-guide:dev

## Produção

Rodar a imagem em produção

docker run --rm -p 5173:5173 dgs-engineer-guide:latest

## Rodar com idioma especifico

npm run start -- --locale en => Inglês
npm run start -- --locale es => Espanhol
npm run start -- --locale pt => Português
