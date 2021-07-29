
- npm install knex
- npm install knex -g
- knex init
- npm i mysql2
### UNSIGNED
- é um atributo opcional para inteiros no MySQL usado para definir apenas números positivos.
- npx knex migrate:up
  > 
- npx knex migrate:rollback
  > 
- knex migrate:make location
- knex migrate:up 20210704181821_modelo.js

### CRIANDO SEEDS
- knex seed:make users
- knex seed:run

- knex migrate:rollback

### docker run -d -p 80:80 -v $(pwd):/usr/local/apache2/htdocs/ --name container-index --rm httpd

### docker run -d -p 3000:3000 --name container-locadora -v $(pwd):/home/node/app --rm imglocadora

### docker run -d -p 80:80 -v /y:/projects/apche-test:/usr/local/apache2/htdocs/ --name container-index --rm httpd

- docker run -d -p 3000:3000 --name container-backend -v /y:/projects/Locacao/backend:/home/node/app --rm  backend


## INSTALAÇÔES
- npm install sucrase --save-dev
- npm run dev:server

## Referências
- [Páginas ejs](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-pt)
- [path](https://www.geeksforgeeks.org/node-js-path-resolve-method/)
- [path doc](https://nodejs.org/api/path.html)
- [git Andre](https://github.com/andresgois/Formacao-node)
- [EJS](https://ejs.co/#install)