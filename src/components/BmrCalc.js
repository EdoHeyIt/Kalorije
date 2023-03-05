import { React, useState } from "react";
import "../styles/BmrCalc.scss";
import { BsArrowRepeat } from "react-icons/bs";
import Select from "react-select";

function BmrCalc() {
  // Dobijanje vrijednosti Select odabira

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "1", label: "Muško" },
    { value: "2", label: "Žensko" },
  ];
  const HandleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };

  // Dobijanje vrijednosti Input unosa

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);

  const HandleHeight = (e) => {
    setHeight(e.target.value);
  };

  const HandleWeight = (e) => {
    setWeight(e.target.value);
  };

  const HandleAge = (e) => {
    setAge(e.target.value);
  };

  // Dobijanje rezultata nakon klika na dugme

  const [result, setResult] = useState("-");

  const HandleResult = () => {
    if (height && weight && age && Number(selectedOption) === 1) {
      setResult(
        Math.round(Number(10 * weight + 6.25 * height - 5 * age + 5)) + ` kcal`
      );
    } else if (height && weight && age && Number(selectedOption) === 2) {
      setResult(
        Math.round(Number(10 * weight + 6.25 * height - 5 * age - 161)) +
          ` kcal`
      );
    }
  };

  return (
    <div className="CalculatorBmr">
      <h1>BMR KALKULATOR</h1>
      <div className="SelectCalc">
        <Select
          options={options}
          onChange={HandleTypeSelect}
          value={options.filter(function (option) {
            return option.value === selectedOption;
          })}
          label="Single select"
          placeholder="Pol"
        />
      </div>
      <div className="InputCalc">
        <form>
          <div className="rowOne">
            <label>
              Visina:&nbsp;
              <input
                type="number"
                value={height}
                min={0}
                onChange={HandleHeight}
              />
            </label>
            <label>
              Težina:&nbsp;
              <input
                type="number"
                value={weight}
                min={0}
                onChange={HandleWeight}
              />
            </label>
          </div>
          <div>
            <label>
              Starost:&nbsp;
              <input type="number" value={age} min={0} onChange={HandleAge} />
            </label>
          </div>
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
              setHeight(0);
              setWeight(0);
              setAge(0);
              setSelectedOption("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BmrCalc;
