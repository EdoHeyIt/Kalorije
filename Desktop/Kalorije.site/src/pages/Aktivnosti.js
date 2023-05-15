import React from "react";
import "../styles/Aktivnosti.scss";
import Trening from "../img/Trening.jpg";
import AktivnostiSlika from "../img/AktivnostiSlika.jpg";
import MuiButton from "../components/MuiButton";
import AktivnostiCalc from "../components/AktivnostiCalc";

function Aktivnosti() {
  return (
    <div className="AktivnostiPage">
      <div className="AktivnostiHome">
        <div className="AktivnostiPhoto">
          <img src={AktivnostiSlika} alt="Aktivnosti slika" />
        </div>
        <div className="AktivnostiText">
          <p>
            Oduvijek te zanimalo koliko potrošiš kalorija u svojim aktivnostima?
          </p>
          <h1>
            POKRENI NAŠ <span className="SpanAkt">KALKULATOR</span> I ISPLANIRAJ
            SVOJ TRENING
          </h1>
          <MuiButton component={"OpisAktivnosti"} />
        </div>
      </div>
      <div className="OpisAktivnosti">
        <h2>Aktivnosti</h2>
        <p>
          Tjelesna aktivnost, zdravlje i kvaliteta života su blisko povezani.
          Aktivan život je u izravnoj vezi s brojnim socijalnim i psihološkim
          koristima, a povezan je i s produženim očekivanim trajanjem života
          zbog čega osobe koje se <b>redovito bave tjelesnom aktivnošću</b> žive
          duže. Osobe koje su sjedalački životni stil zamijenili aktivnim,
          iskazuju zadovoljstvo tjelesnim i psihičkim zdravljem i{" "}
          <b>boljom kvalitetom života</b>. Sjedalački način života je razlog za
          razvoj brojnih kroničnih bolesti, uključujući bolesti srca i krvnih
          žila.
        </p>
        <img src={Trening} alt="Trening slika" />
        <p>
          Stručnjaci preporučuju svakodnevno 60 ili više minuta umjerene do
          intenzivne tjelesne aktivnosti. Svaki trening ima točno određeni
          metabolički ekvivalent aktivnosti, koji u kombinaciji s tvojom
          tjelesnom težinom i vremenskim rasponom treninga čini jednačinu pomoću
          koje <b>možeš saznati potrošnju kalorija</b>. Pokreni naš kalkulator i
          saznaj koliko kalorija potrosis!
        </p>
      </div>
      <AktivnostiCalc />
    </div>
  );
}

export default Aktivnosti;
