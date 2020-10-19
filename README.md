# Desafio Técnico Cielo

Frontend que consome dados de um arquivo json, com informações de lançamentos de conta.

## Demonstração da tela

![Screenshot_1](https://user-images.githubusercontent.com/19713358/96488541-8716db00-1214-11eb-8358-6f2ea6b0a25b.png)

## Sobre

O projeto é um desafio técnico da Cielo para a vaga de frontend, no qual o frontend consome dados de um json com informações de pagamentos. O desafio pede que, mostre as informações em forma de gráfico e tabela (Dashboard), de uma maneira que agregue valor.
Foi utilizado o <a href="https://angular.io/">Angular</a> na versão 10 e componentes visuais do <a href="https://material.angular.io/">Material</a> e os gráficos do <a href="https://willsoto.github.io/ng-chartist/demo/index.html">Chartist</a>.

## Frameworks e libs

- Angular - <a href="https://angular.io/">https://angular.io/</a> (Framework estrutural)
- Angular Chartist - <a href="https://willsoto.github.io/ng-chartist/demo/index.html">https://willsoto.github.io/ng-chartist/demo/index.html</a> (Gráficos)
- Angular Material - <a href="https://material.angular.io/">https://material.angular.io/</a> (Componentes para layout)
- JSON Server - <a href="https://github.com/typicode/json-server">https://github.com/typicode/json-server</a> (Para emular backend)
- NodeJs

## Rodando Projeto

- Primeiro instale (Caso não tenha instalado)

Git bash - <a href="https://gitforwindows.org/">https://gitforwindows.org/</a>

NodeJs - <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>

Angular CLI

```
npm install -g @angular/cli
```

- Clonando Repositório

```
git clone https://github.com/pcbsytem/cielo-challenge.git
```

- Rodando backend

Instalar dependencias e rodar

```
cd backend
npm i
npm start
```

- Rodando frontend

Instalar dependências e rodar

```
cd frontend
npm i
ng serve
```

- Rodando teste no frontend

```
ng test
```
