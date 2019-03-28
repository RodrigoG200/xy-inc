# xy-inc

Segue em anexo projeto do Desafio Back End com proposito de desenvolver um sistema de GPS para consulta de 
pontos de interesse (POis) previamente registradas em um banco de dados em um distancia maxima de 10m da coordenada 
de referencia.


Esse projeto foi desenvolvido em node.js utilizando o postman como banco de dados para cadastrar as POis.

Ao abrir o Postman seguir os seguintes passos:

1- Colocar na url > localhost:3000/destinationPoint
2- Mudaro seletor de GET para POST.
3- Nesse ponto esta preparado para casdastrar cada POi individualmente

3.1- Utilizar a linha de codigo abaixo e clicar em SEND para adicionar a POI

{
	"NomePoi": "Lanchonete",
	"cordX": "27",
	"cordY": "12"
}

Lembrando que isto vale apenas para uma POi, sendo nescessario repetir o procedimento para cada POi que deseja adicionar.

POis:

{
	"NomePoi": "Posto",
	"cordX": "31",
	"cordY": "18"
}

{
	"NomePoi": "Joalheria",
	"cordX": "15",
	"cordY": "12"
}

{
	"NomePoi": "Floricultura",
	"cordX": "19",
	"cordY": "21"
}

{
	"NomePoi": "Pub",
	"cordX": "12",
	"cordY": "8"
}

{
	"NomePoi": "Supermercado",
	"cordX": "23",
	"cordY": "6"
}

{
	"NomePoi": "Churrascaria",
	"cordX": "28",
	"cordY": "2"
}

List POIs(POST): localhost:3000/getPoints

Proximity(POST): localhost:3000/proximidade

{
	"cordX": "20",
	"cordY": "10"
}

Apos incluir todas as POis basta navegar ate a pasta do projeto pelo terminal e executar os seguintes comandos.

1-npm install
2-node app.js

Ja no navegador setar na URL http://localhost:3000, inserir as coordenadas de entrada, e clicar no botao consultar.

Sendo assim recebera os pois correspondetes a menos de 10m de distancia das coordenadas de entrada.


