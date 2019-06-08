function iniciar(){
	var elemento=document.getElementById("lienzo");
	lienzo=elemento.getContext("2d");

	var degradado = lienzo.createLinearGradient(20,200,200,200);
	//var degradado = lienzo.createRadialGradient(250,150,50,250,150,300);
	degradado.addColorStop(0,"#F7FE2E");
	degradado.addColorStop(0.3,"#FF0000");
  degradado.addColorStop(0.5,"#00FF00");
  degradado.addColorStop(0.7,"#FF00FF");
  degradado.addColorStop(1,"#00FFFF");
	lienzo.fillStyle=degradado;
	lienzo.fillRect(0,0,200,200);

}

function iniciar2(){
	var elemento2=document.getElementById("lienzo2");
	lienzo2=elemento2.getContext("2d");
	var degradado2 = lienzo2.createLinearGradient(20,200,200,200);
	degradado2.addColorStop(0,"#FF0000");
  degradado2.addColorStop(0.5,"#00FF00");
  degradado2.addColorStop(1,"#FF00FF");
	lienzo2.fillStyle=degradado2;
	lienzo2.fillRect(0,0,200,200);

}

function iniciar3(){
	var elemento3=document.getElementById("lienzo3");
	lienzo3=elemento3.getContext("2d");

	//var degradado = lienzo.createLinearGradient(0,150,500,300);
	var degradado3 = lienzo3.createRadialGradient(105,100,30,100,120,140);
	degradado3.addColorStop(0,"#DF0101");
  degradado3.addColorStop(0.5,"#00FF00");
	degradado3.addColorStop(1,"#0101DF");
	lienzo3.fillStyle=degradado3;
	lienzo3.fillRect(0,0,500,300);

}

function iniciar4(){
	var elemento4=document.getElementById("lienzo4");
	lienzo4=elemento4.getContext("2d");

	//var degradado = lienzo.createLinearGradient(0,150,500,300);
	var degradado4 = lienzo4.createRadialGradient(105,100,30,100,120,140);
  degradado4.addColorStop(0,"#F7FE2E");
	degradado4.addColorStop(0.3,"#FF0000");
  degradado4.addColorStop(0.5,"#00FF00");
  degradado4.addColorStop(0.7,"#FF00FF");
  degradado4.addColorStop(1,"#00FFFF");
	lienzo4.fillStyle=degradado4;
	lienzo4.fillRect(0,0,500,300);

}

function iniciar5(){
	var elemento5=document.getElementById("lienzo5");
	lienzo5=elemento5.getContext("2d");

	var degradado5 = lienzo5.createLinearGradient(0,25,200,200);
	//var degradado = lienzo.createRadialGradient(250,150,50,250,150,300);
	degradado5.addColorStop(0,"#00FFFF");
  degradado5.addColorStop(0.5,"#FE2E64");
	degradado5.addColorStop(1,"#FF8000");
	lienzo5.fillStyle=degradado5;
	lienzo5.fillRect(0,0,200,200);

}

window.addEventListener("load",iniciar,false);
window.addEventListener("load",iniciar2,false);
window.addEventListener("load",iniciar3,false);
window.addEventListener("load",iniciar4,false);
window.addEventListener("load",iniciar5,false);
