const jog1 = "X";
const jog2 = "0";

var jogoStart = jog1;
var gameOver = false;

startMostrador();
startTabuleiro();

function startMostrador() {
	if (gameOver) {
		return;
	}

	if (jogoStart == jog1) {
		var inicio = document.querySelectorAll("div#painel img")[0];
		inicio.setAttribute("src", "imagens/x.png");
	}
	else{
		var inicio = document.querySelectorAll("div#painel img")[0];
		inicio.setAttribute("src", "imagens/bolinha.png");		
	}
}

function startTabuleiro()
{
	var tabuleiro = document.getElementsByClassName('tab');
	for (var i = 0; i < tabuleiro.length; i++) 
	{
		tabuleiro[i].addEventListener('click', function(){
			if (gameOver) {return;}

			if (this.getElementsByTagName("img").length == 0){
				if (jogoStart == jog1) {
					this.innerHTML = "<img src= 'imagens/x.png'>";
					this.setAttribute("jogada",jog1);
					jogoStart = jog2;				
				}
				else{
					this.innerHTML = "<img src= 'imagens/bolinha.png'>";
					this.setAttribute("jogada",jog2);
					jogoStart = jog1;
				}

				startMostrador();
				verificaVencedor();
			}
		});
	}
}

function verificaVencedor(){

	var vencedor = "";

	var a1 = document.getElementById("a1").getAttribute("jogada");
	var a2 = document.getElementById("a2").getAttribute("jogada");
	var a3 = document.getElementById("a3").getAttribute("jogada");

	var b1 = document.getElementById("b1").getAttribute("jogada");
	var b2 = document.getElementById("b2").getAttribute("jogada");
	var b3 = document.getElementsById("b3").getAttribute("jogada");

	var c1 = document.getElementById("c1").getAttribute("jogada");
	var c2 = document.getElementById("c2").getAttribute("jogada");
	var c3 = document.getElementById("c3").getAttribute("jogada");


	if ((a1 == b1 && a1 == c1 && a1 !== "")|| (a1 == a2 && a1 == a3 && a1 !== "")|| (a1 == b2 && a1 == c3 && a1 !== "")){
		vencedor = a1;
	}

	else if ((b2 == b1 && b2 == b3 && b2 !== "")|| (b2 == a2 && b2 == c2 && b2 !== "")|| (b2 == a3 && b2 == c1 && b2 !== "")){
	vencedor = b2;
	}
	else if ((c3 == c2 && c3 == c1 && c3 !== "")|| (c3 == a3 && c3 == b3 && c3 !== "")|| (c3 == a3 && b2 == c1 && c3 !== "")) {
		vencedor = c3;
	}
	if (vencedor != ""){
		gameOver = true;
		alert("VENCEDOR: " + vencedor);
	}
}