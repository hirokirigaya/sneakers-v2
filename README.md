# SneakersV2

This is a second version of one of my first projects as a front end developer, along this journey I was able to improve and refine my skills, and fulfill some dreams, one of them was to create a front end + back end application, and here I bring my first crud along with one of the first sites.

## Table of Contents

---

- [Screenshots](#screenshots)
- [Links](#links)
- [The Process](#the-process)
  - [Build With](#build-with)
  - [What we have improved](#what-i-improved-and-learned)
- [How do you clip repository](#how-do-you-clip-repository)
- [Portuguese Description](#portuguese)

---

### Screenshots

![interface-homepage](https://i.imgur.com/VDsZ6F8.png)

![Interface-homepage](https://i.imgur.com/CHQfReC.png)

![Interface-products](https://i.imgur.com/HbOqNGE.png)

![Interface-product](https://i.imgur.com/u0x3wAg.png)

---

### Links

Page: [Click Me](https://sneakers-v2.vercel.app/) <br>
Repository: [Click Me](https://github.com/hirokirigaya/sneakers-v2)<br>
Linkedin: [Click Me](https://www.linkedin.com/in/daniel-junio-0832481bb/) <br>

---

## The process

First I created the interface based on V1 sneakers, soon after the back was created and connected with the front, adding the functionalities

### Build with

- Next JS
- Node Js
- Styled Components
- Flex Box and Grid

### What I Improved and Learned

I took a small step in the back end learning some features.

```js
const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  const id = req.query.id
  const product = products.find(product => product.slug === id)

  res.json(product);

})
```

---

### How do you clip repository

```
git clone https://github.com/hirokirigaya/sneakers-v2.git

cd sneakers-v2

npm install or yarn

npm start / yarn run

```

---

# Portuguese

Essa é uma segunda versão de um dos meus primeiros projetos como desenvolvedor front end, ao longo dessa caminhada pude melhorar e refinar minhas habilidades, e realizar alguns sonhos, um deles era criar uma aplicação front end + back end, e aqui trago meu primeiro crud junto com um dos primeiros sites.

## Meu Progresso

Primeiro criei a interface baseada no sneakers V1, logo após foi feito o back e conectado com o front, adicionando as funcionalidades.

## O que eu aprendi

Dei um pequeno passo no back-end aprendendo alguns recursos.

