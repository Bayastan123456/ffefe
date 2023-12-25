import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: " linear-gradient(107deg, #3186C3 6.46%, #004F86 68.08%)",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
          paddingTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{ width: "120px" }}
            src="../public/logo1.svg"
            alt="error"
          />
          <p style={{ fontSize: "14px" }}>
            Первый отечественный бренд <br /> Iskender на рынке сантехники от{" "}
            <br /> компании ОсОО «Стройдом.кг»
          </p>
          <div>
            <img src="../public/footer1.png" alt="error" />
            <img
              style={{
                backgroundColor: "black",
                padding: "10px",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
              src="../public/footer2.svg"
              alt="error"
            />
          </div>
        </div>
        <div>
          <p className="foooterP">Адреса</p>
          <ul style={{ padding: 0 }}>
            <li style={{ color: "#E0E0E0" }}>ЭлитСтрой</li>
            <li>ул. Ден-Сяопина 18/1</li>
            <li style={{ color: "#E0E0E0" }}>Баткен</li>
            <li>ул. Льва-Толстого 19</li>
            <li style={{ color: "#E0E0E0" }}>ТааТан</li>
            <li>ул. Лермонтова 6</li>
          </ul>
        </div>
        <div>
          <p className="foooterP">Компания</p>
          <ul style={{ padding: 0 }}>
            <li>Каталог</li>
            <li>Избранное</li>
            <li>Личный кабинет</li>
          </ul>
        </div>
        <div>
          <p className="foooterP">Контакты</p>
          <ul style={{ padding: 0 }}>
            <li style={{ color: "#E0E0E0" }}>Email</li>
            <li>iskender.kg@gmail.com</li>
            <li style={{ color: "#E0E0E0", marginTop: "10px" }}>Телефон</li>
            <li>+996 (500) 000-104</li>
            <li>+996 (997) 000-104</li>
            <li>+996 (222) 000-104</li>
          </ul>
          <img
            style={{ height: "29px", borderRadius: "20px" }}
            src="../public/whatsup.png"
            alt="error"
          />
        </div>
      </div>
      <hr style={{ width: "90%", margin: "100px auto 0 " }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 50px",
        }}
      >
        <span style={{ color: "rgba(0,0,0,0.5)" }}>
          © 2023 Iskender.kg - Отечественный бренд сантехники
        </span>
        <div>
          <img
            style={{ marginRight: "10px", backgroundColor: "rgba(0,0,0,0.5)" }}
            src="../public/insta.svg"
            alt="error"
          />
          <img
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            src="../public/face.svg"
            alt="error"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
