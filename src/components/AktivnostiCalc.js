import { React, useState } from "react";
import "../styles/AktivnostiCalc.scss";
import Select from "react-select";
import { BsArrowRepeat } from "react-icons/bs";

function AktivnostiCalc() {
  // Dobijanje vrijednosti Select odabira

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "2.5", label: "Šetanje" },
    { value: "12", label: "Trčanje" },
    { value: "8.7", label: "Vožnja bicikla" },
    {
      value: "6.1",
      label: "Aerobik",
    },
    {
      value: "9",
      label: "Plivanje",
    },
    {
      value: "6",
      label: "Dizanje tegova",
    },
    {
      value: "2.6",
      label: "Joga",
    },
    {
      value: "5",
      label: "Kružni trening",
    },
  ];
  const HandleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  // Dobijanje vrijednosti Input unosa

  const [weight, setWeight] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const HandleWeight = (e) => {
    setWeight(e.target.value);
  };

  const HandleMinutes = (e) => {
    setMinutes(e.target.value);
  };

  // Dobijanje rezultata nakon klika na dugme

  const [result, setResult] = useState("-");

  const HandleResult = () => {
    if (weight && minutes && selectedOption) {
      setResult(
        Math.round(
          Number(
            (selectedOption * 3.5 * Number(weight) * Number(minutes)) / 200
          )
        ) + ` kcal`
      );
    }
  };

  return (
    <div className="CalculatorAkt">
      <h1>KALKULATOR AKTIVNOSTI</h1>
      <div className="SelectCalc">
        <Select
          options={options}
          onChange={HandleTypeSelect}
          value={options.filter(function (option) {
            return option.value === selectedOption;
          })}
          label="Single select"
          placeholder="Aktivnosti"
        />
      </div>
      <div className="InputCalc">
        <form>
          <label>
            Težina:&nbsp;
            <input
              type="number"
              value={weight}
              min={0}
              onChange={HandleWeight}
            />
          </label>
          <label>
            Minute:&nbsp;
            <input
              type="number"
              value={minutes}
              min={0}
              onChange={HandleMinutes}
            />
          </label>
        </form>
        <button className="buttonBlue" onClick={HandleResult}>
          START
        </button>
        <p className="Result">{result}</p>
        <div className="Icon">
          <BsArrowRepeat
            size="40px"
            cursor="pointer"
            onClick={() => {
              setResult("-");
              setWeight(0);
              setMinutes(0);
              setSelectedOption("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AktivnostiCalc;
