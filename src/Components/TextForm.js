import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    console.log("Lower Case Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared!", "success");
  };
  const handleCoClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been Removed!", "success");
  };
  const handleOnChange = (event) => {
    console.log("Handle On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   setText("New Text");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCoClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        </div>
      </div>
    </>
  );
}
