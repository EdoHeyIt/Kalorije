import { React, useState } from "react";
import "../styles/BmiCalc.scss";
import { BsArrowRepeat } from "react-icons/bs";

function BmiCalc() {
  // Dobijanje vrijednosti Input unosa

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const HandleHeight = (e) => {
    setHeight(e.target.value);
  };

  const HandleWeight = (e) => {
    setWeight(e.target.value);
  };

  // Dobijanje rezultata nakon klika na dugme

  const [result, setResult] = useState("-");

  const HandleResult = () => {
    if (height && weight) {
      setResult(Number(weight / ((height * height) / 10000)).toFixed(1));
    }
  };

  return (
    <div className="CalculatorBmi">
      <h1>BMI KALKULATOR</h1>
      <div className="InputCalc">
        <form>
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
            Tezina:&nbsp;
            <input
              type="number"
              value={weight}
              min={0}
              onChange={HandleWeight}
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
              setHeight(0);
              setWeight(0);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default BmiCalc;
