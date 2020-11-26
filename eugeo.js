var qs = ["Kako se zove najviša planina u Škotskoj?",
"Koja je najduža rijeka koja u cjelosti protječe samo Europom?",
"Kako se zove najveći poluotok na kojem se nalazi Danska?",
"Koliko država ima obalu na Crnom moru?",
"Koji je najveći otok u Sredozmenom moru?",
"Koja je najveća planina što se djelom nalazi u Pakistanu?",
"Koja je najmanja država u Aziji?",
"S koliko država graniči Kina?",
"Koja je azijska država površinom najbliže površini Kaspijskog jezera?",
"Imena koliko država u Aziji završavaju na -stan?"]

var qst = ["Kako se zove najviša planina u Škotskoj?",
"Koja je najduža rijeka koja u cjelosti protječe samo Europom?",
"Kako se zove najveći poluotok na kojem se nalazi Danska?",
"Koliko država ima obalu na Crnom moru?",
"Koji je najveći otok u Sredozmenom moru?",
"Koja je najveća planina što se djelom nalazi u Pakistanu?",
"Koja je najmanja država u Aziji?",
"S koliko država graniči Kina?",
"Koja je azijska država površinom najbliže površini Kaspijskog jezera?",
"Imena koliko država u Aziji završavaju na -stan?"]

var as = ["Ben Nevis",
"Dunav",
"Jylland",
"5",
"Sicilija",
"K2",
"Bahrein",
"14",
"Japan",
"7"]

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
		document.getElementById("fontup").innerHTML = "Euroazija     -     " + (score/qst.length*100) + "%";
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


