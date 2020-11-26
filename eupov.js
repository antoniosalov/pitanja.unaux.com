var qs = ["Koje je godine prije Krista ubijen Gaj Julije Cezar?",
"Sedam rimskih brežuljaka: Eksvilin, Kvirinal, Viminal, Celij, Kapitolij, Aventin i … ?",
"Kako se zvao otac Karla i Karlomana što su 768. godine podjelili Franačku?",
"Koje je godine Henrik VIII. osnovao Anglikansku crkvu?",
"Kako se zvala utvrda koja je pala 14. srpnja 1789. godine?",
"Napoleon je poražen 1813. godine u bitci kod kojega grada?",
"Kojeg je datuma 1918. godine započela Ofenziva od 100 dana?",
"Kako se zove poluotok na kojem započinje Drugi svjetski rat 1. rujna 1939. godine?",
"Kojeg je datuma 1945. godine službeno potpisana kapitulacija Japana?",
"Kojeg je datuma uvedena jedinstvena europska valuta - Euro?"]

var qst = ["Koje je godine prije Krista ubijen Gaj Julije Cezar?",
"Sedam rimskih brežuljaka: Eksvilin, Kvirinal, Viminal, Celij, Kapitolij, Aventin i … ?",
"Kako se zvao otac Karla i Karlomana što su 768. godine podjelili Franačku?",
"Koje je godine Henrik VIII. osnovao Anglikansku crkvu?",
"Kako se zvala utvrda koja je pala 14. srpnja 1789. godine?",
"Napoleon je poražen 1813. godine u bitci kod kojega grada?",
"Kojeg je datuma 1918. godine započela Ofenziva od 100 dana?",
"Kako se zove poluotok na kojem započinje Drugi svjetski rat 1. rujna 1939. godine?",
"Kojeg je datuma 1945. godine službeno potpisana kapitulacija Japana?",
"Kojeg je datuma uvedena jedinstvena europska valuta - Euro?"]


var as = ["44. godine",
"Palatin",
"Pipin Mali",
"1531. godine",
"Bastilia",
"Leipziga",
"8. kolovoza",
"Westerplatte",
"2. rujna",
"1. siječnja 2002."]

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
		document.getElementById("fontup").innerHTML = "Europska     -     " + (score/qst.length*100) + "%";
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