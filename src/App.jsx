import React from "react";
import NavbarNe from "./components/Navbar";
import Category from "./components/Category";
import Circle from "./components/circle";
import Hity from "./components/Hity";
import Event from "./components/Event";
import Auksion from "./components/Auksion";
import Adress from "./components/Adress";
import Footer from "./components/Footer";

const App = () => {
  const numberOfCards = 6;

  //  массив карточек с использованием цикла
  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <Hity key={index} />
  ));
  const auksion = Array.from({ length: numberOfCards }, (_, index) => (
    <Auksion key={index} />
  ));
  return (
    <div style={{ background: "#F8FAFF" }}>
      <NavbarNe />
      <div style={{ padding: "0 50px " }}>
        <Circle />
        <Category />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
            alignItems: "end",
          }}
        >
          <h4>Хиты продаж</h4>

          <p style={{ color: "blue", margin: 0 }}>перейти в каталог</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {cards}
        </div>
        <Event />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
            alignItems: "end",
          }}
        >
          <h4>Аукционные товары</h4>
          <p style={{ color: "blue", margin: 0 }}>перейти в каталог</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {auksion}
        </div>
        <Adress />
      </div>
      <Footer />
    </div>
  );
};

export default App;
