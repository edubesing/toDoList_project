import React, { useState } from "react";

function Forms(props) {
  const [text, setText] = useState("");

    function addItem(evento){
        evento.preventDefault();
        if(text){
            props.onAddItem(text);
            setText("");
        }
    }

    function handleChangeInput(evento){
        let textoAtual = evento.target.value;
        setText(textoAtual);
    }

  return (
    <form>
      <button onClick={addItem} className="">
        <img
          alt="Ìcone redondo com um operador de adição no meio representando: adionar novo item."
          src="./assets/addItem.svg"
        ></img>
      </button>
      <input onChange={handleChangeInput} value={text}></input>
    </form>
  );
}

export default Forms;
