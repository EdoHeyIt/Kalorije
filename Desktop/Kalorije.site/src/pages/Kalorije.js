import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Kalorije.scss";
import HomePhoto from "../img/HomePhoto.jpg";
import MuiButton from "../components/MuiButton";
import KalorijeOpis from "../img/KalorijeOpis.jpg";
import KalorijeFood from "../img/KalorijeFood.jpg";

function Kalorije() {
  return (
    <div className="HomePage">
      <div className="Home">
        <div className="HomeText">
          <h1>
            SAZNAJ SVE O KALORIJAMA<br></br>I ZDRAVOM ŽIVOTU
          </h1>
          <p>
            Pokrenite <span className="darkText">NAŠE KALKULATORE</span> i
            <br></br> saznajte sve potrebno da
            <br></br>
            dovedete vaše tijelo u <br></br> željenu formu
          </p>
          <MuiButton component={"Opis"} />
        </div>
        <div className="HomePhoto">
          <img src={HomePhoto} alt="HomePhoto" />
        </div>
      </div>
      <div className="Opis">
        <h2>Sta su Kalorije?</h2>
        <p>
          Kada govorimo o prehrani, kalorije su energija oslobođena iz hrane
          tijekom procesa razgradnje. Sva energija koja je potrebna našem
          organizmu, osigurava se unosom hrane, a broj kalorija u hrani pokazuje
          koliko potencijalne energije hrana posjeduje. Kalorija u hrani je
          zapravo kilokalorija ili 1000 kalorija, ali se u uobičajenom govoru
          koristi samo kalorija umjesto kilokalorija.
          <b>
            &nbsp;Koliko dnevno trebate unijeti kalorija ovisi o veličini vašeg
            tijela i o razini dnevne aktivnosti
          </b>
          . Da provjerite koliko vase tijelo trosi kalorija dnevno u stanju
          mirovanja pokrenite nas
          <NavLink to="/Bmr" className="textLink">
            &nbsp;Bmr&nbsp;
          </NavLink>
          kalkulator.
        </p>
        <img src={KalorijeOpis} alt="Apples" />
        <p>
          Za ženu prosječne težine i prosječne aktivnosti dnevna potrošnja
          kalorija je oko 2000 do 2500 kcal. Za muškarca prosječne težine i
          prosječne aktivnosti dnevna potrošnja kalorija je 2500 do 3000. Na
          etiketama nutritivnih vrijednosti mnogih proizvoda možete primjetiti
          nekoliko glavnih parametara koji se uvijek ističu, a to su{" "}
          <b>proteini, masti i ugljeni hidrati</b>. Ove tri stavke su glavni
          izvori energije. Ostali parametri kao što su voda, vlakna, nesvarljive
          tvari, minerali i vitamini ne učestvuju u stvaranju energije. Svaka
          namirnica ili jelo ima određenu kombinaciju, uglavnom ova tri prva
          izvora i daju određeni broj kalorija, odnosno određenu količinu
          energije.
        </p>
      </div>
      <div className="Ishrana">
        <h2>Ishrana</h2>
        <p>
          Koliko god se trudili da potrošite sve unesene kalorije, mnogo je
          bitnije <b>porijeklo tih kalorija</b>. Ono što treba izbjegavati su
          prazne kalorije. Prazne kalorije su one koje pružaju energiju, ali
          jako malo <b>nutritivne vrijednosti</b>. Zato izbjegavajte sve vrste
          dodatih šećera i masti ukoliko ih vidite na deklaraciji proizvoda.
          Uglavnom ne sadrže vlakna, amino kiseline, antioksidanse, hranljive
          minerale ili vitamine. Njih unosimo uglavnom konzumirajuci{" "}
          <b>šećer, nezdrave masti i alkohol</b>. Zbog svega navedenog lahko je
          shvatiti da su prazne kalorije glavni uzrok gojaznosti u modernom
          dobu. Jedan od načina procjene uhranjenosti je
          <NavLink to="/Bmi" className="textLink">
            &nbsp;Bmi&nbsp;
          </NavLink>
          kalkulator.
        </p>
        <img src={KalorijeFood} alt="Vegetables" />
        <p>
          Zdrava ishrana je jedan od preduslova{" "}
          <b>uspješnog i zdravog mršavljena</b>, svaka druga zdrava aktivnost
          neće dati rezultate ukoliko paralelno sa njima ne vodite računa o tome
          šta jedete. Provjerite koliko koja
          <NavLink to="/Aktivnosti" className="textLink">
            &nbsp;aktivnost&nbsp;
          </NavLink>
          trosi kalorija ali ono što donosi najbolje rezultate mršavljenja,
          jeste <b>kombinacija zdrave ishrane i treniranja</b>. Jedite puno voća
          i povrća, proteina, cjelovitih žitarica i zdravih masti. Isto tako
          unošenje mnogo vode u organizam važan je dio održavanja optimalne
          tjelesne težine i prehrane bogate hranjivim tvarima.{" "}
          <b>Zdrava ishrana je baza zdravog života!</b>
        </p>
      </div>
    </div>
  );
}
export default Kalorije;
