var qs = ["Koje je vrste najviše stablo na svijetu?",
"Koji cvijet može imati promjer od 2 milimetra do 3 metra?",
"Koja je najbrže rastuća biljka na svijetu?",
"Koliko otprilike različitih vrsta jabuka postoji?",
"Koliko otprilike poznatih biljnih vrsta postoji na zemlji?",
"Koji je naziv za carstvo biljaka?",
"Koju biljku predstavlja naziv Taraxacum?",
"Kako se zovu biljke koje prevladavaju na području močvara?",
"Koliko zaštićenih biljnih vrsta nalazimo u Hrvatskoj?",
"Koji je hrvatski otok iznimno bogat rijetkim biljkama i endemima?"]

var qst = ["Koje je vrste najviše stablo na svijetu?",
"Koji cvijet može imati promjer od 2 milimetra do 3 metra?",
"Koja je najbrže rastuća biljka na svijetu?",
"Koliko otprilike različitih vrsta jabuka postoji?",
"Koliko otprilike poznatih biljnih vrsta postoji na zemlji?",
"Koji je naziv za carstvo biljaka?",
"Koju biljku predstavlja naziv Taraxacum?",
"Kako se zovu biljke koje prevladavaju na području močvara?",
"Koliko zaštićenih biljnih vrsta nalazimo u Hrvatskoj?",
"Koji je hrvatski otok iznimno bogat rijetkim biljkama i endemima?"] 

var as = ["sekvoja",
"orhideja",
"bambus",
"7000",
"300000",
"Plantae",
"maslačak",
"helofiti",
"760",
"Palagruža"]

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
		document.getElementById("fontup").innerHTML = "Biljke     -     " + (score/qst.length*100) + "%";
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


