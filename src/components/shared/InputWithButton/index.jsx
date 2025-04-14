import React from "react";
import Button from "../../button";
import "./inputWithButton.scss";

const InputWithButton = ({
  inputType,
  inputPlaceHolder,
  buttonText,
  buttonLink,
  preIcon,
  btnIcon,
  onClick,
  prefix,
}) => {
  const inputRef = React.useRef();
  return (
    <div className="inputWithButton">
      {prefix && prefix()}
      <div className="inputWithButton__container">
        {preIcon && <img src={preIcon} alt="inputIcon" />}
        <input
          ref={inputRef}
          type={inputType}
          placeholder={inputPlaceHolder}
          onKeyDown={(e) => {
            if (e.key.toLocaleLowerCase() === "enter") {
              const funcToExecute = onClick();
              funcToExecute(inputRef.current);
            }
          }}
        />
        <Button
          onClick={() => {
            const funcToExecute = onClick();
            funcToExecute(inputRef.current);
          }}
        >
          {buttonText || <img src={btnIcon} alt="btnIcon" /> || ""}
        </Button>
      </div>
    </div>
  );
};

export default InputWithButton;
