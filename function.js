//Hauptfunktionen
function Von100In60Umrechnen(ZahlIn60){
  //Beispiel mit 16.75
    let stunden = Math.floor(ZahlIn60); // Extrahiert die ganzen Stunden (16)
    let minuten = Math.round((ZahlIn60 - stunden) * 60); // Extrahiert die Minuten (45)
    if (minuten == 60) { // Rundet auf volle Stunden auf, falls nötig
      stunden += 1;
      minuten = 0;
    }
  return ZahlIn60 = stunden + "." + (minuten < 10 ? "0" : "") + minuten;//Ausgabe 16.45
}

function von60In100Umrechnen(ZahlIn100){
  //Beispiel mit 16.45
  let stunden = Math.floor(ZahlIn100); // Extrahiert die ganzen Stunden (16)
  let minuten = Math.round((ZahlIn100 - stunden) * 100); // Extrahiert die Minuten (75)
  minuten = Math.ceil(minuten / 60 * 100); // Rundet auf die nächsten 5 Minuten auf
  if (minuten == 60) { // Rundet auf volle Stunden auf, falls noetig
    stunden += 1;
    minuten = 0;
  }
  return ZahlIn100 = (stunden + "." + (minuten < 10 ? "0" : "") + minuten); // Ausgabe: 16.75
}


//Einzelne Buttons
function wannKannIchKommen() {
  let gehen = document.querySelector("#inputgehen").value;
  gehen = von60In100Umrechnen(gehen);
  ueberstunden  = document.querySelector("#outputumrechnen").value;
  let fertigeZahl = ((parseFloat(gehen) -7.75 )+ parseFloat(ueberstunden)).toFixed(2);
  fertigeZahl = Von100In60Umrechnen(fertigeZahl);
  document.getElementById("inputkommen").value = fertigeZahl;
}

function wannKannIchGehen() {
  var ueberstunden = 0.0;
  var dummy = 7.75;
  let kommen = document.querySelector("#inputkommen").value;
  kommen = von60In100Umrechnen(kommen);
  ueberstunden  = document.querySelector("#outputumrechnen").value;
  let fertigeZahl = ((parseFloat(kommen) + parseFloat(dummy) + parseFloat(ueberstunden)).toFixed(2));
  fertigeZahl = Von100In60Umrechnen(fertigeZahl);
  document.getElementById("inputgehen").value = fertigeZahl;
}

function wieVieleUeberstundenBekommeIch() {
  let kommen = document.querySelector("#inputkommen").value;
  kommen = von60In100Umrechnen(kommen);
  let gehen = document.querySelector("#inputgehen").value;
  gehen = von60In100Umrechnen(gehen);
  var ueberstunden = 0.0;
  ueberstunden = parseFloat(gehen) - (parseFloat(kommen)) - 7.75 ;
  var roundedNumber = ueberstunden.toFixed(2);
  document.getElementById("outputumrechnen").value = roundedNumber;
}
