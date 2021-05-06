# Sistema de códigos penais - Cidade Alta 💛🎮

![mockup01](https://user-images.githubusercontent.com/71772559/117219254-4a3eba00-addb-11eb-8bc9-7d2b6e41acf6.png)

## 📚 Informações sobre o projeto

* Esse sistema foi usado como método de "desafio" para mostrar as habilidades no processo seletivo do Cidade Alta. A ideia principal era desenvolver um sistema para controlar os códigos penais e para isso o usuário precisaria passar por um fluxo de autenticação e após logado, ter a possibilidade de consultar, incluir, editar e visualizar os códigos penais da Cidade Alta.

&nbsp;

## 💻 Funcionalidades do sistema

* Sistema de autenticação (Confere se os dados batem com a API) e salva os mesmos no localStorage;
* Visualização, criação, edição e remoção de códigos penais pelo painel;
* Sistema de filtros (Ativo, inativo);
* Sistema de Ordem crescente e decrescente (Valor da multa, tempo de prisão e data de criação);
* Sistema de Busca por texto;
* Uso do useCallback e useMemo para uma melhor performance;
* Design moderno, clean e responsivo;


![mock02](https://user-images.githubusercontent.com/71772559/117219857-7c9ce700-addc-11eb-862c-2132da7f72e6.png)

&nbsp;

## 🚀 Veja algumas telas em funcionamento

OBS: Os gifs estão em uma resolução/qualidade reduzida por conta dos limites do github.

# Sistema de login com verificação

<p align="center">
  <img src="https://user-images.githubusercontent.com/71772559/117221336-71978600-addf-11eb-84dc-ee61bcdfb8e5.gif" />
</p>

&nbsp;

# Criação de um novo item

<p align="center">
  <img src="https://user-images.githubusercontent.com/71772559/117369189-f5627880-ae9a-11eb-9294-28aef43156d0.gif" />
</p>

&nbsp;

# Edição e remoção de itens

<p align="center">
  <img src="https://user-images.githubusercontent.com/71772559/117220127-0056d380-addd-11eb-9ebd-d376ee957d60.gif" />
</p>

&nbsp;

# Responsividade

<p align="center">
  <img src="https://user-images.githubusercontent.com/71772559/117220258-3d22ca80-addd-11eb-9617-68e81e12cb99.gif" />
</p>

## 🛠️ Tecnologias/Ferramentas ultilizadas

* [React](https://pt-br.reactjs.org/E)
* [Redux](https://redux.js.org/)
* [Unform](https://unform.dev/)
* [Yup](https://github.com/jquense/yup)
* [Styled Components](https://styled-components.com/)
* [TypeScript](https://www.typescriptlang.org/)

&nbsp;

## 🖌️ Layout usado nesse projeto (Desenvolvido por mim)
* [Veja no Figma!](https://www.figma.com/file/jkXPoD7HU8NHdcMd4ZrGnn/Desafio-CDA?node-id=0%3A1)

&nbsp;

## 🗣 Comentários gerais (IMPORTANTE)
Esse desafio foi super interessante pra mim pois eu nunca tinha pegado o Redux para estudar "a fundo" e com esse projeto tive ânimo para adentrar nos estudos e aplicar os mesmos na prática! Eu sempre fiquei impressionado ao ver os fronts que o Cidade Alta tem pois sempre revolucionaram o universo FiveM aqui no Brasil... Deixo meus parabéns a toda equipe e tudo isso é um os motivos de eu ter me dedicado tanto a esse teste.

Deixo aqui algo muito importante, durante o desenvolvimento, mais exato na parte de lidar com a API, por estarmos usando uma Fake API, me dei a liberdade de altera um pouco os códigos para que ao usuário interagir com a criação, edição e remoção de itens, tudo ocorresse em tempo real pois notei que a Fake API não guarda as requisições POST que enviamos. Dentro do meu código, deixei comentários explicando o porque dessas alterações e juntamente a eles, o código para fazer a real chamada a API, caso o projeto seja levado pra frente! Espero que entendam e apoiem essa ideia, eu não queria deixar o teste visualmente incompleto.


&nbsp;

## ⚙️ Instalação
```
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/GBDev13/cda-codigopenal.git
```

```
# Acesse a pasta da aplicação
$ cd cda-codigopenal

# Instale as dependências
$ yarn install

# Inicie a aplicação
$ yarn start

```

&nbsp;

### 🔗 Link para o projeto online


[Clique e veja todas as funcionalidades em tempo real!](https://cda-codigopenal.vercel.app/)

&nbsp;

---

<p align="center">Feito com 💙 por Gabriel Borges</p>


