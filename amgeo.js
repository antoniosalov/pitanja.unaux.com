var qs = ["Koja je druga najduža rijeka Južne Amerike?",
"Kako se zove najviši vrh Čilea?",
"Koliko država čini kontinent Južne Amerike?",
"Koje je najviše jezero u Južnoj Americi na kojem je dopuštena plovidba?",
"Koja država Južne Amerike ima najlošiji BDP po stanovniku?",
"Koji je najveći zaljev Sjeverne Amerike?",
"Koja je najmanja država Sjeverne Amerike?",
"U koliko je zemalja Sjeverne Amerike portugalski službeni jezik?",
"Kako se zove najviši vrh Kanade?",
"Na koliko se provincija dijeli Kanada?"]

var qst = ["Koja je druga najduža rijeka Južne Amerike?",
"Kako se zove najviši vrh Čilea?",
"Koliko država čini kontinent Južne Amerike?",
"Koje je najviše jezero u Južnoj Americi na kojem je dopuštena plovidba?",
"Koja država Južne Amerike ima najlošiji BDP po stanovniku?",
"Koji je najveći zaljev Sjeverne Amerike?",
"Koja je najmanja država Sjeverne Amerike?",
"U koliko je zemalja Sjeverne Amerike portugalski službeni jezik?",
"Kako se zove najviši vrh Kanade?",
"Na koliko se provincija dijeli Kanada?"]

var as = ["Parana",
"Aconcagua",
"13",
"Titicaca",
"Bolivija",
"Meksički zaljev",
"Sveti Kristofor i Nevis",
"0",
"Mount Logan",
"10"]

var score = 0;

function show(){
	if (qs.length > 0){
		var x = Math.floor(Math.random()*qs.length);
		document.getElementById("ques").innerHTML = qs[x];
		qs.splice(x,1)

		document.getElementById("ans").disabled = false;
	}
	else{
		document.getElementById("ques").innerHTML = "Za ovu kategoriju više nema pitanja u bazi. Osvježite stranicu kako biste krenuli ispočetka ili se okušajte u nekoj od ostalih kategorija"
		document.getElementById("fontup").innerHTML = "Amerike     -     " + (score/qst.length*100) + "%";
	}
	document.getElementById("res").innerHTML = ""
}

function check(){
	var a = document.forms["input"]["ans"].value;
	cans = as[qst.indexOf(document.getElementById("ques").textContent)];

	if (a.replace(/\s/g, '').toLowerCase() == cans.replace(/\s/g, '').toLowerCase()){
		document.getElementById("res").innerHTML = "Vaš odgovor je točan"
		score += 1;
	}
	else{
		document.getElementById("res").innerHTML = "Vaš odgovor " + a + " je netočan. Točan odgoovor je " + cans;
	}
	document.getElementById("del").click();

	document.getElementById("ans").disabled = true;
}


