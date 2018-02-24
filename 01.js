$(document).ready(function(){
	
	$("#calcular").click(function executar(){
		 var valordig = document.getElementById("Valordig").value;
		 var fator;
		 var pacote;
		 var vip;
		 var promovalidate = "05/03/2018";
		 var itensbrinde;
		 var creditos;
		 var hfgolds;
		 if (valordig >= 10){
		 if (valordig >= 10 && valordig <= 29){
			 fator = 12;
			 pacote = "1 - x" + fator;
			 vip= "30 dias Vip Master";
			 itensbrinde="Kit Full Add Ancient(a escolha) ";
			 creditos="1000";
			 hfgolds="0";
			 }
		 
		 if (valordig >= 30 && valordig <= 69){
			fator = 13;
			pacote = "2 - x"+fator;
			vip = "60 dias Vip Master";
			 itensbrinde="Shild ou Arma Relikia v4 Full/Add Roxo + Harmony ou Socket, Kit Full/Add Roxo Ancient (a escolha), Asa lvl3 Full/Add (a escolha) ";
			 creditos="2000";
			 hfgolds="60";
			 }
			
		 if (valordig >= 70 && valordig <= 99){
			fator = 15;
			pacote = "3 - x" + fator;
			vip = "90 dias Vip Master";
			 itensbrinde="Kit Full/Add Roxo Ancient (a escolha), Set Poseidon ou Evil Hades Full/Add + Harmony, Arma V4 Full/Add Harmony + Socket(a escolha), Shild Relikia v4 Full/Add + Harmony, Fenrir Gold Full Socket + Harmony";
			 creditos="4000";
			 hfgolds="160";
			 }
			
		  if (valordig >= 100 && valordig <= 149){
			 fator = 16;
			pacote = "4 - x"+ fator;
			vip = "30 dias Vip Premium";
			 itensbrinde="Kit Full/Add Roxo Ancient (a escolha), Set Poseidon ou Evil Hades Full/Add + Harmony, Arma Poseidom ou Evil Hades Full/Add + Socket, Shild Poseidom ou Evil Hades Full/Add + Harmony,  Arma Relikia V5 Full/Add Roxo + Socket (a escolha) ou Shild Relikia V5 Full/Add Roxo + Harmony (a escolha), Fenrir Gold Full Socket, Pet Dragon Fire Full Socket";
			 creditos="6000";
			 hfgolds="220";
			 }
			 
		  if (valordig >= 150 && valordig <= 199){
			 fator = 15;
			pacote = "5 - x15";
			vip = "40 dias Vip Premium";
			 itensbrinde="Kit Full/Add Roxo Ancient (a escolha), Kit War Full/Add Roxo Ancient, Asa War Full/Add Ancient + Socket, Set Poseidon ou Evil Hades Full/Add + Harmony, Set Dragon Supreme ou Shaman Supreme Full/Add + Harmony, Arma Relikia V5 Full/Add Roxo + Socket (a escolha), Shild Relikia V5 Full/Add Roxo + Harmony (a escolha), Fenrir Gold Full Socket, Pet Dragon Fire Full Socket";
			  creditos="8000";
			 hfgolds="360";
			 }
			
		  if (valordig >= 200 && valordig <= 299){
			 fator = 18;
			pacote = "6 - x"+ fator;
			vip = "50 dias Vip Premium";
			 itensbrinde="Kit Full/Add Roxo Ancient (a escolha), Kit War Full/Add Roxo Ancient, Asa War Full/Add Ancient + Socket, Set Poseidon ou Evil Hades Full/Add + Harmony, Set Dragon Supreme ou Shaman Supreme Full/Add + Harmony, Arma Relikia V5 Full/Add Roxo + Socket (a escolha), Shild Relikia V5 Full/Add Roxo + Harmony (a escolha), Set Relikia V5 Full/Add + Hamrony, Fenrir Gold Full Socket, Pet Dragon Fire Full Socket";
			 creditos="10000";
			 hfgolds="460";
		  }
		  
			 
		   if (valordig >= 300){
			fator = 19;
		   pacote= "7 - x" + fator;
		   vip = "60 dias Vip Premium";
		   itensbrinde="All Demon Lord(Arma + Shild + Set), Asa Lv4 Full/Add + Socket, Kit Full/Add Roxo Ancient (a escolha), Kit War Full/Add Roxo Ancient, Asa War Full/Add Ancient + Socket, Set Poseidon ou Evil Hades Full/Add + Harmony, Set Dragon Supreme Full/Add + Harmony, Set Shaman Supreme Full/Add + Harmony, Arma Relikia V5 Full/Add Roxo + Socket (a escolha), Shild Relikia V5 Full/Add Roxo + Harmony (a escolha), Set Relikia V5 Full/Add + Hamrony, Fenrir Gold Full Socket, Pet Dragon Fire Full Socket";
			 creditos="12000";
			 hfgolds="640";
		   }
		   var sgolds = (valordig * fator);
		   var mensagem = ("Depositando R$" + valordig + " - Pacote " + pacote + "<br /><br /><span class='mensagem'>Receberá:<br /> </span><span class='mensagem'>Solgds: </span>" + sgolds  + "<br /><span class='mensagem'>Hfgolds: </span>" + hfgolds + "<br /><span class='mensagem'>Créditos: </span>" + creditos + "<br /><span class='mensagem'>Vip: </span>" + vip + "!!<br />" + "<span class='mensagem'>Itens Brinde: </span>" + itensbrinde + "<br /><span class='mensagem'>Promoção valida até: </span>" + promovalidate);
		document.getElementById("Valordig").value='';
		var div = document.getElementById("resp");
		div.innerHTML = mensagem;
		   
	
	}
	});
	
	
	
});
