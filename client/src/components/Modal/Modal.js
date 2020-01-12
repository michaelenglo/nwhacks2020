import React from "react";

function Modal(props) {
  return (
    <div
      className={`modal fade in ${props.show ? "active" : ""}`}
      role="dialog"
    >
      <div
        className="modal-dialog"
        style={{
          maxWidth: props.maxWidth ? props.maxWidth : "500px",
          paddingTop: "100px"
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" onClick={props.onClose} className="close">
              &times;
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            {props.buttons &&
              props.buttons.map(({ style, onclick, text, disabled }) => (
                <button
                  type="button"
                  className={`btn btn-${style}`}
                  onClick={onclick}
                  disabled={disabled || false}
                >
                  {text}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
