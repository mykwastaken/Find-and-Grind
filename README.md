# Find and Grind
projeto-grupo3 created by GitHub Classroom

 
![Imagem1](https://github.com/IADE-PDS/findandgrind/assets/99985296/fddf8f9c-ce11-4218-ae10-4fbe1f8690a7)


# Curso de Engenharia Informática



# Projeto de Desenvolvimento de Software


# “Find & Grind”
#### “Find Your Fit, Grind Your Way to Greatness”






Alunos:

Gonçalo Alves, 20210544

Miguel Bernardo, 20211066

Roberta Santos, 20211091




https://github.com/IADE-PDS/FINDANDGRIND.git


# Introdução:

 O “Find & Grind” vem para auxiliar o seu utilizador, para que este possa ter um estilo de vida mais saudável. Com a pandemia, todas as suas restrições e confinamentos, o exercício físico foi uma das áreas mais afetadas. Com o aumento da inflação e a diminuição do poder de compra, fazer desporto em locais pagos, como um ginásio, tornou-se uma realidade inalcançável para alguns portugueses, esta WebApp visa a combater este problema.
Este site tem como objetivo localizar os locais de exercícios outdoors, chamados de WorkoutSpots. Para além de identificá-los, também descreve as PowerStations presentes no mesmo, referindo o estado das mesmas bem como um breve tutorial de correta utilização.


# Objetivos:

 O objetivo do “Find & Grind” é incentivar a utilização dos WorkoutSpots, facilitar a localização dos mesmos, o estado das máquinas presentes, bem como a correta utilização dos equipamentos.
Consiste na otimização da utilização de espaços de exercícios públicos localizados a volta da cidade de Lisboa, e visa também o bem-estar de qualquer pessoa apta para a sua utilização.


# Brainstorming:

 Para o desenvolvimento desta Web App tivemos de fazer um brainstorming para pensarmos bem nos pontos necessários para o seu bom funcionamento.


<img width="452" alt="imagem3" src="https://github.com/IADE-PDS/findandgrind/assets/99985296/192fc1bf-b6ae-4ffd-bfef-2f075d793ea6">

# Público-Alvo:

 O público-alvo desta WebApp é qualquer pessoa acima dos 16 anos, pois a partir dessa idade já existe uma certa consciência de como utilizar as máquinas de maneira correta e ordeiramente e também porque seria nesta fase que as pessoas começam a preocupar-se com a imagem, mas não têm independência financeira.

Enquadra-se também no grupo etário mais elevado, pois muitos idosos são vistos a utilizar as máquinas, sem saber a correta maneira de utilização. E para alcançar um maior público as redes sociais devem ser onde o site é mais anunciado, pois é a rede que tem maior alcance e em todas as faixas etárias, pois atualmente as pessoas mais velhas já conseguem aceder à internet com mais facilidade.


# Pesquisa de mercado:

### Kompan.com

 É uma empresa inglesa que fabrica as máquinas de exercício outdoor, e tem no seu site uma página que as localiza no Reino Unido, porem não dispõe do estado das mesmas, nem como as utilizar.

<img width="172" alt="img4" src="https://github.com/IADE-PDS/findandgrind/assets/99985296/e3c1a2c2-888d-43f9-8059-9b9b09a0f339">



# User research:

## Personas:

   Persona 1 - O Rodrigo é um rapaz de 16 anos e está na fase que começa a interessar-se por desporto, porém não pode pagar um ginásio.

   Persona 2 - A Ana é uma rapariga de 18 anos que tem muito interesse por desporto ao ar livre.

   Persona 3 - A Maria é uma senhora de 47 anos que não pode ir ao ginásio, pois não tem nenhum próximo de si, mas tem uma PowerStation no jardim ao lado de casa e gostaria de saber como utilizá-la.


## Persona Board:

<img width="436" alt="Captura de ecrã 2023-10-08 223010" src="https://github.com/IADE-PDS/findandgrind/assets/99985296/4a64a45a-295f-496e-8a34-b5459247c9ba">


# Guiões Teste:

### Guião 1 (Registo):

O utilizador que deseja registar-se na WebApp pela primeira vez deve seguir os seguintes passos:

Passo 1: Inicialização da WebApp

Passo 2: O utilizador seleciona a opção "Registar-se?"

Passo 3: O utilizador introduz os dados necessários, um username, uma password, a sua idade,peso e altura, para uma avaliação previa.

Passo 4: O utilizador pressiona o botão de “Registar”

Passo 5: E assim, cria uma conta no “Find and Grind”.


### Guião 2 (Encontrar Workout Spot):

Um utilizador pretende visualizar a localização dos Workout Spots presentes à sua volta,assumindo que já tem uma conta, o processo seria:

Passo 1: O utilizador insere o username e a password, fazendo assim o login no site. 

Passo 2: Encontra na barra de tarefas oícone “mapa”, clica no mesmo.

Passo 3: Assim aparecem os Workout Spots e as suas localizações.

Passo 4: O utilizador, assim, pode escolher a localização mais vantajosa e ver o estado da Power Station que escolheu, bem como os exercícios para a mesma.



### Guião 3 (Exercícios Disponíveis):

Um utilizador, que já usa a WebApp, pretende visualizar os métodos de utilização das máquinas presentes nos Workout Spots, assumindo que este já tem uma conta registada, oprocesso seria:

Passo 1: O utilizador faz login na sua conta “Find and Grind”.

Passo 2: Seleciona a opção mapas, e depois o Workout Spot que deseja.

Passo 3: Após a escolha do local, clica em exercícios.

Passo 4: Irá aparecer a lista das máquinas disponíveis, o estado das mesmas, e o método de utilização de cada uma.


# Enquadramento nas Unidades Curriculares:

Este é um projeto multidisciplinar, e por isso iremos utilizar a matéria dada nas outras Unidades Curriculares para a realização da nossa web app:

•	Projeto de desenvolvimento software: esta UC destina-se ao Project management;

•	Engenharia de Software: direcionamento e atualização de requesitos 

•	Segurança Informática: implementação de segurança no site

•	Sistemas Distribuídos: replicações da base de dados e dos servidores 


# Tecnologias a utilizar:

Para o desenvolvimento deste projeto será necessária a utilização de diversas tecnologias, tais como:

•	Nodejs / Express – para a criação da backend api

•	Vuejs – para a criação da frontend SPA

•	HTML/CSS/JS – para o frontend

•	PostgreSql – para a base de dados

# Arquitetura da solução:

A nossa aplicação é composta por três elementos que conferem uma estrutura solida e fiável para melhor utilização do cliente, estas três são:

•	Base de dados: utilizaremos uma base de dados, criada em PostreSQL. Que armazenará toda a informação necessária para o melhor uso da WebApp.

•	Backend API: será produzida em Nodejs/Express. Esta servirá como uma ponte entre a base de dados e o frontend para receber requests e devolver uma resposta.

•	Frontend application: será feita em Vuejs,e tem como objetivo a iteração com o utilizador

# Implementação de segurança na WebApp:

HTTPS:

•	Certifique-se de que seu site utiliza uma conexão segura HTTPS para criptografar a comunicação entre o navegador do usuário e o servidor, protegendo contra intercetação de dados.

Validação de Entrada de Usuário:

•	Valide todas as entradas de usuário para prevenir ataques de injeção de código, como SQL injection e Cross-Site Scripting (XSS).

Prevenção de CSRF:

•	Implemente mecanismos, como tokens anti-CSRF em formulários, para prevenir ataques de Cross-Site Request Forgery.

Autenticação Segura:

•	Utilize métodos robustos de autenticação, como bcrypt, para armazenar senhas com segurança. Implemente medidas como bloqueio de conta após várias tentativas de login mal sucedidas.

Atualizações e Patches:

•	Mantenha todos os componentes do sistema atualizados, incluindo sistema operacional, servidor web, banco de dados e frameworks, para corrigir vulnerabilidades de segurança.

Firewalls:

•	Configure firewalls para restringir tráfego desnecessário e proteger contra possíveis ataques.

Monitoramento de Segurança:

•	Implemente ferramentas de monitoramento para detetar atividades suspeitas.

Backup Regular:

•	Faça backup regularmente dos dados do seu website e armazene-os de forma segura para prevenir perda de dados em casos de ataques ou falhas no sistema.

Política de Senhas Fortes:

•	Exija senhas fortes dos usuários e promova práticas de segurança, como a atualização regular de senhas.

Controle de Acesso:

•	Garanta que apenas usuários autorizados tenham acesso a áreas restritas do seu website. Considere a implementação de um sistema de controle de acesso baseado em funções.

Proteção contra Injeção de SQL:

•	Utilize consultas parametrizadas ou prepared statements para evitar ataques de injeção de SQL.

Implementar essas práticas contribuirá significativamente para a segurança do seu website, protegendo contra diversas ameaças online. 

# Diagrama de Dados

<img width="495" alt="diagrama" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/19d180a0-5415-42b3-946f-c7e4d01ac649">

# Desenho da Arquitetura

<img width="557" alt="123" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/8a78158b-5acb-4a3b-bfeb-e2eef0faa4e6">


# Prototipos

## Homepage

<img width="493" alt="1" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/c4e362bc-0236-4ace-961f-6016cf989edf">


## Find Page

<img width="444" alt="find" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/de979c4f-b660-4300-b9dd-477965f14df1">


## Grind Page

<img width="494" alt="3" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/1447b05a-5fba-43ae-957f-fbf82440e9a8">


## Machine Instructions

<img width="486" alt="Imagem6" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/a1322abc-5d8e-40b5-9973-df6560e63ac3">


## Calculadora de Calorias

<img width="498" alt="Imagem7" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/e788035f-ab2c-4371-bb79-e5c6a0c95fc9">


## Awards

<img width="454" alt="8" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/acec6dc5-4928-42d3-958a-2048dd845d7a">


## Water Tracker

<img width="495" alt="Imagem9" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/fb46d2e7-e837-49ce-9917-2e6995aefb37">


## Profile

<img width="547" alt="10" src="https://github.com/IADE-PDS/projeto-grupo3/assets/99985296/c0e53f7e-f25f-41a9-8631-f10cfd4f2846">


# Conclusão:

Em resumo, a criação de uma web app que combina localização de PowerStations, planejamento de rotas, demonstrações de exercícios, acompanhamento de desempenho e calculadora de calorias oferece inúmeras oportunidades para promover um estilo de vida saudável e ativo.

Esta aplicação não facilita apenas o acesso a equipamentos de exercício ao ar livre, mas também fornece suporte abrangente para ajudar os seus utilizadores a alcançarem seus objetivos de condicionamento físico.

À medida que a tecnologia continua a desempenhar um papel central em nossa vida cotidiana, aplicações como esta têm o potencial de impactar positivamente a saúde e o fitness de um grande número de pessoas. Portanto, é importante continuar a aprimorar e a expandir o com base no feedback dos utilizadores e nas tendências emergentes no campo do fitness digital. Com dedicação contínua à melhoria e ao crescimento, esta Web App pode tornar-se uma ferramenta valiosa para promover um estilo de vida mais saudável e ativo em nossa sociedade.



