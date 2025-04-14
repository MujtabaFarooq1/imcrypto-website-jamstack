import React from "react";
import MainButton from "../MainButton";
import "./customModal.scss";

const CustomModal = ({
  children,
  isOpen,
  closeModal,
  hasCloseBtn = false,
  customCloseText = "close",
}) => {
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="customModal">
          <div className="customModal__body">
            <div>
              <div>{children}</div>
              {hasCloseBtn && (
                <button className="customModal__closeBtn" onClick={closeModal}>
                  {customCloseText}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
