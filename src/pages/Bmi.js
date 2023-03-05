import React from "react";
import "../styles/Bmi.scss";
import MuiButton from "../components/MuiButton";
import BmiHome from "../img/BmiHome.jpg";
import Vegetables from "../img/Vegetables.jpg";
import BmiCalc from "../components/BmiCalc";

function Bmi() {
  return (
    <div className="BmiPage">
      <div className="BmiHome">
        <div className="BmiPhoto">
          <img src={BmiHome} alt="Bmi slika" />
        </div>
        <div className="BmiText">
          <p></p>
          <p>
            Pitaš se da li imaš viška kilograma? Izračunaj svoj stepen
            uhranjenosti sa našim Bmi kalkulatorom!
          </p>
          <h1>
            SAZNAJ <span className="SpanBmi">ODMAH</span>
          </h1>
          <MuiButton component={"OpisBmi"} />
        </div>
      </div>
      <div className="OpisBmi">
        <h2>Bmi</h2>
        <p>
          Indeks tjelesne mase (BMI) je jedan od&nbsp;
          <b>načina procjene uhranjenosti</b>. Vrijednosti preporučenog BMI-a
          iste su za oba spola, on iznosi od 18,5-24,9 kg/m2 prema klasifikaciji
          zdravstvene organizacije za europsko stanovništvo. Ako su vaše
          vrijednosti daleko ispod ili iznad prosjeka, svakako morate otići kod
          svog ljekara, kako biste smanjili rizik za vaše zdravlje. Što je viši
          iznad okvira urednih vrijednosti, to je veći rizik od oboljevanja od
          raznih srčanih bolesti, dijabetesa i povišenog krvnog pritiska.
        </p>
        <img src={Vegetables} alt="Bmi Slika" />
        <p>
          Sam indeks tjelesne mase <b>nije savršena mjera</b>, jer će više ili
          mišićavije osobe općenito imati viši indeks tjelesne mase, premda će
          udio masnog tkiva biti relativno nizak, tako da je pri procjeni rizika
          od razvoja bolesti povezanih s pretilošću važno uzeti u obzir i neke
          druge mjere. Izračunajte svoj BMI i otkrijte&nbsp;
          <b>vaš stepen uhranjenosti</b>.
        </p>
      </div>
      <BmiCalc />
    </div>
  );
}

export default Bmi;
