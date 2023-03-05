import React from "react";
import "../styles/Bmr.scss";
import BmrHome from "../img/BmrHome.jpg";
import MuiButton from "../components/MuiButton";
import Apples from "../img/Apples.jpg";
import BmrCalc from "../components/BmrCalc";

function Bmr() {
  return (
    <div className="BmrPage">
      <div className="BmrHome">
        <div className="BmrText">
          <h1>
            OSTVARITE SVOJE <span className="SpanBmr">CILJEVE</span>
          </h1>
          <p>
            Saznaj koliko tvoje tijelo troši kalorija u stanju mirovanja i lakše
            dođi do svog cilja!
          </p>
          <MuiButton component={"OpisBmr"} />
        </div>
        <div className="BmrPhoto">
          <img src={BmrHome} alt="Bmr slika" />
        </div>
      </div>
      <div className="OpisBmr">
        <h2>Bmr</h2>
        <p>
          Stopa bazalnog metabolizma (BMR) je mjera tjelesne potrošnje energije
          u mirovanju, te određuje koliko kalorija trebate uzimati svaki dan za
          održavanje ili smanjenje tjelesne težine. Ovo je
          <b>
            &nbsp;broj kalorija koje tijelo treba za pravilno funkcioniranje
            osnovnih vitalnih funkcija
          </b>
          . U tom se stanju energija koristi samo za održavanje vitalnih organa.
          Općenito, BMR se određuje upravo radi smanjenja tjelesne težine. Za
          održavanje zdrave tjelesne težine potrebno je
          <b>&nbsp;uravnotežiti unos i potrošnju energije</b>. Jednom kada znate
          koliki je vaš BMR, održavanje ravnoteže je vrlo jednostavno.
        </p>
        <img src={Apples} alt="Bmr slika" />
        <p>
          Jednom kada znate svoj BMR,
          <b>
            &nbsp;tačno možete znati koliko kalorija sagorite tijekom dana u
            mirovanju
          </b>
          . Pomoću svog BMR-a možete odrediti koliko kalorija trebate uzeti kako
          biste postigli željenu mišićnu masu, izgubili masti ili održavali
          težinu. Jednostavno rečeno, ako znate koliko kalorija unesete i koliko
          sagorite, put do vašeg cilja bit će lakši. Pokrenite nas kalkulator i
          izračunajte vaš BMR!
        </p>
      </div>
      <BmrCalc />
    </div>
  );
}

export default Bmr;
