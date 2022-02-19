# Worldtrip

> Um projeto Next.js integrado ao Chakra UI

<p align="center">
  <img src="./.github/image0.png" height="400" alt="worldtrip">
</p>

## Home

A página home faz uso do hook "useBreakpointValue" do Chakra para manter a aplicação responsiva. Os componentes utilizados na Home fazem uso dessa informação através das "props" para exibir a interface de acordo com o dispositivo.

<div >
    <img align=center src="./.github/image1.png" alt="worldtrip">
    <img align=center src="./.github/image2.png" alt="worldtrip" style="margin-left: 2rem">
</div>

### Swiper

Swiper é a biblioteca utilizada para criar o "Carousel" na página Home. Os dados para o carrosel são recebidos nas propriedades da página por meio da função "getStaticProps".

## Dynamic Routes

O Next.js possibilita que as rotas da aplicação sejam construidas dinamicamente, pois o framework iniciamente realiza o pré-renderiza a página (processo conhecido como "pre-render" ou "server-side rendering (SSR)) em um ambiente Node.js, para depois carregar o javascript necessário para tornar a aplicação interativa ou "reativa", esse processo é chamado "Hydration".

Dessa forma, as páginas são geradas de forma estática automaticamente pelo Next.js quando é feito o "buid" da aplicação. Isso pode ocorrer sem precisar buscar dados externos ou o contrário. Como a aplicação consome uma fake API construida com [json-server](https://github.com/typicode/json-server), é necessário conseguir a informação das rotas que a aplicação vai ter e dos dados que serão apresentados nestas páginas. Isso é feito através da função assíncrona "getStaticPaths" e "getStaticProps" que buscam as informações necessárias da página em tempo de "build".

```js
export async function getStaticPaths() {
  const response = await fetch('http://localhost:5000/continents')
  const data = await response.json()
  const paths = data.map((cont: ContinentsObject) => {
    return { params: { slug: cont.slug } }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent = params?.slug
  const response = await fetch(
    `http://localhost:5000/continents?slug=${continent}`
  )
  const [data] = await response.json()
  return {
    props: {
      data,
    },
  }
}
```

## JSON-server

Com o JSON-server é possível construir uma fake REST API completa apenas configurando o arquivo "db.json". Nesse arquivo é configurado o recurso "Continents", no qual a aplicação Next.js o consuma e apresente os dados na interface.

Executanto a aplicação:

```bash
json-server --watch db.json --port 5000
```

```bash
npm run dev
```

## Figma

Um desafio desse projeto é construir a interface conforme foi projetado no [Figma](<https://www.figma.com/file/BE9OrakoRTn0x2zuVb1YFg/Desafio-1-M%C3%B3dulo-4-ReactJS-(Copy)>) por um designer
