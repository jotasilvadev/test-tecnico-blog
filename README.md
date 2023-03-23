# Blog Teste Técnico

Projeto realizado como teste técnico.
Essa aplicação é uma front-end desenvolvida para interagir com uma API RESTful que exige posts de um blog e seus comentários, além do nome e contato dos escritores do blog.

##

Confira a aplicação: 

https://main.dsqkke435l193.amplifyapp.com/

## Funcionalidades

A exibição dos posts, realizada por um componente utilizando fetch para fazer a requisição na API. Ao clicar no icone de comentários, são exibidos os comentários e o email de quem realizou o mesmo, clicando novamente no icone de comentário, eles param de ser exibidos. Dentro do corpo dos posts, também é exibida uma imagem que vem de uma API Rest de fotos de gatos. Quando clica no nome do autor do post, é acessada a página dos escritores, e surge um botão de home no header para voltar a página inicial.

## Ferramentas utilizadas

- Next.JS - https://nextjs.org/
- Tailwind - https://tailwindcss.com/
- React.JS - https://react.dev/
- React Icons - https://react-icons.github.io/react-icons
- AWS Amplify - https://aws.amazon.com/pt/amplify/
- CATAAS - https://cataas.com/#/

## Planejamento

- Passo 1 > Criação do componente que iria dar fetch na Api fornecida.
- Passo 2 > Página inicial dos posts.
- Passo 3 > Botão de mostrar e esconder os comentários.
- Passo 4 > Página com os escritores.
- Passo 5 > Estilização dos componentes.
- Passo 6 > Componente que busca as imagens de gato para melhorar o visual dos posts.
- Passo 7 > Refatoração.
- Passo 8 > Deploy.

## Decisões tomadas no processo

- Next.js como framework.
- Tailwind como biblioteca para estilização.
- Paleta de cores Slate & Stone do Tailwind.
- Layout pensado no mobile-first.
- Uso da API Rest "cat as a service".
- Deploy na aplicação na AWS Amplify.

### Para rodar o projeto no seu computador

Clonar o repositório ou baixar o código.

Abrir o terminal e usar os comando:
- npm install
- npm run dev

![Screenshot Cat Blog](https://i.ibb.co/j4CRmxn/Whats-App-Image-2023-03-22-at-23-44-03.jpg)
