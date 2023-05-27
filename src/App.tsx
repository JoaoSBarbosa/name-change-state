import React, { ReactComponentElement, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {
  const [nome, setNome] = useState("***");
  const [lastName, setLastName] = useState("***");
  const [age, setAge] = useState("**");

  const changeName = (event: InputChangeEvent) => {
    setNome(event.target.value);
  };
  const changeLastName = (event: InputChangeEvent) => {
    setLastName(event.target.value);
  };
  const changeAge = (event: InputChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header />
      <main className="container flex-column ">
        <form>
          <div>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" value={nome} onChange={changeName} />
          </div>
          <div>
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              id="sobrenome"
              value={lastName}
              onChange={changeLastName}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="idade">Idade</label>
            <input id="idade" value={age} onChange={changeAge} type="text" />
          </div>
        </form>
        {/* <hr /> */}
        <div className="display b-1">
          Olá {nome} {lastName}, tudo bem?
          <br />
          Você tem {age} anos.
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
