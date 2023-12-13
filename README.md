
# Planet Ages

## Features

- **Multi-Planet Age Calculator**: Calculate a person's age on different planets based on the provided seconds and planetary information.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository:

 ```bash
  git clone https://github.com/hernanijr/planet-ages.git
  cd planet-ages
  ```

2. Running the Application
```bash
docker compose up app
```
The API should start at `http://localhost:3000`.

Planetary Age Calculation
To calculate a person's age on different planets, use the following endpoint:

- **Endpoint**: `/calculate-age`
- **Method**: `GET`
- **URL Params**: `seconds=[number]&type=[string]`
- **seconds**: Number of seconds
- **type**: Planet type (e.g., "Earth," "Venus," etc.)
- **Success Response**: `${number} Planet-years-old` 
- **Error Response**: `{
      message: 'Invalid input',
      error: 'Please provide valid seconds and planet type.',
      statusCode: 400 }`


Example:
```bash
curl http://localhost:3000/calculate-age?seconds=2500000000&type=Venus
```
**Response**:

```json
{
  48.74 Venus-years-old
}
```


3. Running the Tests
```bash
docker compose up test
```

## Stop the Container

```bash
docker-compose down
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# Um pouco sobre mim…
### 1) Como você começou no mundo da programação? Quais foram suas motivações? O que chamou sua atenção?
R: Ingressei no mundo da programação quando decidi cursar Ciência da Computação na faculdade. 
A escolha dessa área foi impulsionada pela minha gigante curiosidade em compreender o funcionamento das coisas, especialmente em relação à complexidade dos sistemas. Desde pequeno, dedicava meu tempo a explorar e modificar sites por pura curiosidade, e admito que até me divertia tentando hackear alguns joguinhos online haha.
Em resumo, minha motivação sempre foi compreender profundamente como as coisas operam e, quando possível, aprimorá-las.

### 2) Você tem algum projeto pessoal que tem trabalhado recentemente? Se sim, poderia nos contar um pouco sobre o projeto e quais tem sido seus principais desafios?

R: O projeto pessoal mais recente que vinha atuando foi o MeuPetMinhaVida, mas não tenho participado das últimas reuniões.
Basicamente a ideia é de uma plataforma que facilite adoção de pets, e que faça aproximar instituições/ongs que tratam de animais carentes e de pessoas buscando ajudar.
Os principais desafios nesse começo foi principalmente a definição de quais tecnlogias usar, de forma que tivesse amplo apoio da comunidade (grande parte dos devs tivessem skills nessas tecnologias) e que tivesse também custo gratuito, pois é um projeto filantrópico. Então participei de vários debates em escolha das tecnologias e como seria nosso MVP.
https://github.com/otaldonuness/meupetminhavida-back
https://github.com/otaldonuness/meupetminhavida-front

### 3) Para você, qual é a forma mais efetiva de aprender algo novo relacionado à programação?
R: Na minha experiência, a forma mais efetiva de aprender algo novo relacionado à programação é adotar uma abordagem prática e hands-on. Gosto de mergulhar diretamente em projetos práticos, aplicando os conceitos teóricos que estou estudando. Além disso, a colaboração com outros desenvolvedores, participação em comunidades online e a leitura de código de projetos existentes são estratégias valiosas. A prática constante, a resolução de problemas reais e a exposição a diferentes desafios são fundamentais para solidificar o aprendizado e aprimorar minhas habilidades.

### 4) Defina, na sua percepção, quais características uma pessoa deve ter para ser considerada boa desenvolvedora?

R:Na minha percepção, uma boa pessoa desenvolvedora deve possuir uma combinação de habilidades técnicas e softs kills. 
As que considero mais importantes são:

#### Hard skills:

### Habilidade Técnica: 
Deve ter um sólido conhecimento em linguagens de programação relevantes, frameworks e ferramentas. Além disso, a capacidade de aprender novas tecnologias rapidamente, entendendo padrões e o que há em comum, sabendo abstrair.

### Resolução de Problemas: 
Bons desenvolvedores são excelentes solucionadores de problemas.
Conseguem analisar desafios complexos, dividir em partes menores e encontrar soluções eficientes.

### Curiosidade e Aprendizado eterno: 
A tecnologia está em constante evolução, e um bom desenvolvedor deve ter a curiosidade e a disposição para aprender continuamente, acompanhando as últimas tendências e atualizações na área.

#### Soft skills:
### Trabalho em Equipe: 
Habilidades de colaboração são essenciais. Isso inclui a capacidade de trabalhar efetivamente em equipe, comunicar ideias de maneira clara e contribuir para um ambiente de trabalho positivo.

### Atenção aos Detalhes: 
A programação muitas vezes envolve lidar com detalhes complexos. Um bom desenvolvedor deve ser meticuloso, prestando atenção aos detalhes para garantir a qualidade do código e dos produtos finais.

### Resiliência: 
Encontrar bugs, lidar com desafios complexos e superar obstáculos são partes inevitáveis do desenvolvimento de software. Ser resiliente e capaz de enfrentar adversidades com determinação é crucial.

### Compreensão do Usuário Final: 
Um bom desenvolvedor deve ter empatia e compreensão das necessidades do usuário final.
Isso ajuda a criar soluções que realmente atendam às expectativas e facilitem a vida dos usuários.

### Boa Comunicação: 
A capacidade de comunicar efetivamente, tanto com colegas de equipe quanto com não desenvolvedores, é vital.
Isso inclui explicar ideias complexas de maneira acessível, para pessoas técnicas e não técnicas.


## License

Nest is [MIT licensed](LICENSE).
