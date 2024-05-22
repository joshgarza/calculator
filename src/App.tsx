import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faBatteryHalf,
  faPlusMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

type Operator = "+" | "-" | "/" | "*" | "=" | "+-" | "%";

function App() {
  const [time, setTime] = useState<string>("");
  const [firstOperand, setFirstOperand] = useState<string>("0");
  const [secondOperand, setSecondOperand] = useState<string>("0");
  const [operator, setOperator] = useState<Operator>("+");
  const [display, setDisplay] = useState<string>("0");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    setTime(`${hour}:${minute}`);
  }, []);

  const handleOperation = (op: Operator) => {
    let result = 0;
    const [num1, num2] = [Number(firstOperand), Number(secondOperand)];
    console.log(num1, num2);
    switch (operator) {
      case "+":
        result = num1 + num2;
        setOperator(op);
        setFirstOperand(String(result));
        setSecondOperand("0");
        setDisplay(String(result));
        break;
      case "-":
        result = num1 - num2;
        setOperator(op);
        setFirstOperand(String(result));
        setSecondOperand("0");
        setDisplay(String(result));
        break;
      case "/":
        result = num1 / num2;
        setOperator(op);
        setFirstOperand(String(result));
        setSecondOperand("0");
        setDisplay(String(result));
        break;
      case "*":
        result = num1 * num2;
        setOperator(op);
        setFirstOperand(String(result));
        setSecondOperand("0");
        setDisplay(String(result));
        break;
      case "=":
        setFirstOperand(String(result));
        handleOperation(operator);
        console.log(num1, num2, operator);
        break;
    }

    // display equals result
    // setfirstoperand to be result
  };
  const handleNumber = (number: string | ".") => {
    if (secondOperand === "0") {
      setDisplay(number);
      setSecondOperand(number);
    } else {
      setDisplay(display + number);
      setSecondOperand(display + number);
    }
  };
  const handleClear = () => {
    setDisplay("0");
    setFirstOperand("0");
    setSecondOperand("0");
    setOperator("+");
  };

  const buttonStyling =
    "flex flex-row justify-center rounded-full h-[5rem] w-[5rem] text-3xl";
  const rowStyling = "flex flex-row justify-center p-[.3rem] gap-3";

  return (
    <div className="flex flex-col justify-between border-2 rounded-[4rem] p-7 h-128 w-100 bg-black">
      <header className="flex flex-row justify-between">
        <h6 className="font-bold">{time}</h6>
        <span className="flex flex-row justify-between w-[4.6rem]">
          <FontAwesomeIcon icon={faSignal} />
          <FontAwesomeIcon icon={faWifi} />
          <FontAwesomeIcon icon={faBatteryHalf} />
        </span>
      </header>
      <main className="flex flex-col justify-end h-[44rem]">
        <section className="flex flex-col justify-end text-right text-[4.7rem] font-extralight leading-none h-[15.5rem]">
          {display}
        </section>
        <section className="h-[28.5rem]">
          <div className={rowStyling}>
            <button
              onClick={() => handleClear()}
              className={`${buttonStyling} text-black bg-[#a5a5a5]`}
            >
              AC
            </button>
            <button
              onClick={() => handleOperation("+-")}
              className={`${buttonStyling} text-black bg-[#a5a5a5]`}
            >
              <FontAwesomeIcon icon={faPlusMinus} />
            </button>
            <button
              onClick={() => handleOperation("%")}
              className={`${buttonStyling} text-black bg-[#a5a5a5]`}
            >
              %
            </button>
            <button
              onClick={() => handleOperation("/")}
              className={`${buttonStyling} bg-[#ff9f0c]`}
            >
              /
            </button>
          </div>
          <div className={rowStyling}>
            <button
              onClick={() => handleNumber("7")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              7
            </button>
            <button
              onClick={() => handleNumber("8")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              8
            </button>
            <button
              onClick={() => handleNumber("9")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              9
            </button>
            <button
              onClick={() => handleOperation("*")}
              className={`${buttonStyling} bg-[#ff9f0c]`}
            >
              x
            </button>
          </div>
          <div className={rowStyling}>
            <button
              onClick={() => handleNumber("4")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              4
            </button>
            <button
              onClick={() => handleNumber("5")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              5
            </button>
            <button
              onClick={() => handleNumber("6")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              6
            </button>
            <button
              onClick={() => handleOperation("-")}
              className={`${buttonStyling} bg-[#ff9f0c]`}
            >
              -
            </button>
          </div>
          <div className={rowStyling}>
            <button
              onClick={() => handleNumber("1")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              1
            </button>
            <button
              onClick={() => handleNumber("2")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              2
            </button>
            <button
              onClick={() => handleNumber("3")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              3
            </button>
            <button
              onClick={() => handleOperation("+")}
              className={`${buttonStyling} bg-[#ff9f0c]`}
            >
              +
            </button>
          </div>
          <div className={rowStyling}>
            <button
              onClick={() => handleNumber("0")}
              className={
                "flex flex-row justify-start rounded-full h-[5rem] w-[20rem] text-3xl bg-[#333333]"
              }
            >
              0
            </button>
            <button
              onClick={() => handleNumber(".")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              .
            </button>
            <button
              onClick={() => handleOperation("=")}
              className={`${buttonStyling} bg-[#333333]`}
            >
              =
            </button>
          </div>
        </section>
      </main>
      <footer className="flex justify-center">
        <span className="border-2 w-32"></span>
      </footer>
    </div>
  );
}

export default App;
