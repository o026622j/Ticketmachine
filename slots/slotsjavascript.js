var doing = false;
var spin = [new Audio("res"),new Audio("res"),new Audio("res"),new Audio("res"),new Audio("res"),new Audio("res"),new Audio("res")];
var coin = [new Audio("res"),new Audio("res"),new Audio("res")]
var win = new Audio("res");
var lose = new Audio("res");
var audio = false;
let status = document.getElementById("status")
var info = true;
var currentValue = 0;
let winnings = 0;
var youvewon = document.getElementById("status")
const btnGira = document.getElementById("Gira")
const textWinnings = document.getElementById("Winnings");

//event listners

//funtions

   //adding credit function
if (youvewon.length == 7) {


}

function Addcredit(){
	var  credit = document.getElementById('thisone').innerHTML;
	credit++;
	document.getElementById("thisone").innerHTML = credit;
	
	
	
}


   //spin funtion  

function doSlot(){

if (thisone.Value > "0"){
	btnGira.disabled = true
}
	else{

	btnGira.disabled = false;}

	if (doing){return null;}
	doing = true;
	var numChanges = randomInt(1,4)*7
	var numeberSlot1 = numChanges+randomInt(1,7)
	var numeberSlot2 = numChanges+2*7+randomInt(1,7)
	var numeberSlot3 = numChanges+4*7+randomInt(1,7)

	var i1 = 20;
	var i2 = 20;
	var i3 = 20;
	var sound = 1;
	status.innerHTML = "SPINNING"
	slot1 = setInterval(spin1, 5);
	slot2 = setInterval(spin2, 5);
	slot3 = setInterval(spin3, 5);

	function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			clearInterval(slot1);
			return null;
		}
		slotTile = document.getElementById("slot1");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
		
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numeberSlot3){
			coin[2].play()
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a7"){
			slotTile.className = "a0";
		}
		sound++;
		if (sound==spin.length){
			sound=0;
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	
	}

	var  credit = document.getElementById('thisone').innerHTML;
	credit--;
	document.getElementById("thisone").innerHTML = credit;
	creditscore.innerHTML = credit;
	
}

function testWin(){
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className

	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a7") ||
		(slot1 == slot3 && slot2 == "a7") ||
		(slot2 == slot3 && slot1 == "a7") ||
		(slot1 == slot2 && slot1 == "a7") ||
		(slot1 == slot3 && slot1 == "a7") ||
		(slot2 == slot3 && slot2 == "a7") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a7")){
		
			status.innerHTML = "YOU WIN!"

		win.play();
		
		
	}else{
		status.innerHTML = "YOU LOSE!"
		lose.play();
	}

	
	doing = false;

	if(status.length == 8){
		credit++;
	}
}




function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

//ref https://bit.ly/2WWSk57

