import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : null}>1</div>
            <div className={step >= 1 ? "active" : null}>2</div>
            <div className={step >= 2 ? "active" : null}>3</div>
          </div>
          <p className="message">
            {" "}
            Step:{step + 1} {messages[step]}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={() => {
                if (step > 0) setStep(step - 1);
              }}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={() => {
                if (step < 2) setStep(step + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
