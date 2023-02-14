# portifolio-api

##

### Essa é a API que eu construí para usar no meu portifólio.

##

### o que foi usado na construção dessa API?

<ul>
  <li>CockroachDB</li>
  <li>Prisma</li>
  <li>Express</li>
  <li>TypeScript</li
</ul>

##

### Como foi estruturado o Banco de dados?

#### Ele está separado em 6 tabelas que fazem uma relação one-to-many com a tabela portifólio. E tem a tabela Contacts que faz relação one-to-many com a tabela Socials tendo assim duas tabelas principais, uma chamada portifólio com todo o conteúdo do portifólio, e a outra com informações de contato.

![2023-01-12-19-12-17](https://user-images.githubusercontent.com/103784814/212191285-0eaecb27-ac32-4a5f-92a4-60dc845b70ef.gif)

### Essa API tem no total quatro rotas, duas em português e duas em inglês.

![Capturar](https://user-images.githubusercontent.com/103784814/212193144-99a7f2c5-57c3-430f-a538-1b0a284a91c9.JPG)

#### A rota 'api/portifolio' pega todo o conteúdo do banco de dados para construir o portifólio e joga nessa rota.

![2023-01-12-19-30-48](https://user-images.githubusercontent.com/103784814/212193660-bb7a1143-e9cc-4097-a1fc-48a32752edc0.gif)

#### E a rota 'api/contact' retorna todo o conteúdo de contato.

![Capturar1212](https://user-images.githubusercontent.com/103784814/212193906-d21e4874-a7a2-4699-beb1-d9a482cc25a6.JPG)

### Resultado no Frontend: https://portifolio-hxsggsz.vercel.app/

### and that's all folks

##

### This is the API that i made to use for my portfolio.

##

### What i use to make this API?

<ul>
  <li>CockroachDB</li>
  <li>Prisma</li>
  <li>Express</li>
  <li>TypeScript</li
</ul>

##

### How it was made the Database structure?

#### It's separeted in six tables that's made a relation one-to-many with the portfolio table. The Contacts table make the same relation with the Socials table, Returning all informations to make contact with me!

![2023-01-12-19-12-17](https://user-images.githubusercontent.com/103784814/212191285-0eaecb27-ac32-4a5f-92a4-60dc845b70ef.gif)

### This APi have in total four routes, two in Portuguese and two in English.

![Capturar](https://user-images.githubusercontent.com/103784814/212193144-99a7f2c5-57c3-430f-a538-1b0a284a91c9.JPG)

#### The route 'api/portifolio-en' return all necessary content to build the portfolio.

![2023-01-12-19-41-06](https://user-images.githubusercontent.com/103784814/212195581-d051b451-47ce-4536-9068-d26555c8d753.gif)

#### And the route 'api/contact-en' return the content for contact with me.


![Captura432432423r](https://user-images.githubusercontent.com/103784814/212195756-05e8e1fe-f783-4ef3-8241-566e68d96792.JPG)

### Result on Frontend: https://portifolio-hxsggsz.vercel.app/

### and that's all folks
