import React from "react";
import "./App.css";

function Feito(props) {
  if (props.done) {
    return (<img alt="Ìcone quadrado preenchido representando: item marcado." src="./assets/marked.png"></img>);
  
  } else{
    return (
      <img alt="Ìcone quadrado vazio representando: item desmarcado." src="./assets/unmarked.png"></img>
    );}
}

function AbleToDelete(props) {
  if (props.done) {
    return(<img alt="Ìcone quadrado preenchido representando: item marcado." src="./assets/IconDeleteItem.png"></img>); 
  } 
  else {
    return (
      <img alt="Ìcone quadrado preenchido representando: item marcado." src="./assets/IconDeleteItem.png"></img>
    );
  }
}

function Lista(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.key} className={item.done? "done":""}>
          <button onClick={() => { props.onMarked(item); }}>
            <Feito done={item.done}></Feito>
          </button> 
          {item.text}
          <button className={item.done? "":"display-none"} onClick={() => { props.onDeletedItem(item); }}>
            <AbleToDelete done={item.done}></AbleToDelete>
          </button> 
        </li>
      ))}
    </ul>
  );
}

export default Lista;
