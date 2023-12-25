import React from "react";

const data = [
  {
    src: "../public/skidki.png",
    text: "Скидки",
    id: 1,
  },
  {
    src: "../public/aksia.png",
    text: "Акции",
    id: 2,
  },
  {
    src: "../public/raspo.png",
    text: "Распродажа",
    id: 3,
  },
  {
    src: "../public/podarki.png",
    text: "Подарки",
    id: 4,
  },
  {
    src: "../public/podarki2.png",
    text: "Подарки",
    id: 5,
  },
];

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  circle: {
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    width: "60px",
    height: "60px",
  },
  text: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    width: "60px",
    height: "13px",
    marginTop: "5px",
  },
};

const Circle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={item.id}
        >
          <img src={item.src} alt="error" />
          {item.text}
        </div>
      ))}
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
      <div style={style.container}>
        <div style={style.circle}></div>
        <div style={style.text}></div>
      </div>
    </div>
  );
};

export default Circle;
