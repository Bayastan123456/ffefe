import Button from "react-bootstrap/Button";
import React from "react";

const Event = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
          alignItems: "end",
        }}
      >
        <h3>Новости</h3>
        <p style={{ color: "blue", margin: 0 }}>все</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "300px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="47"
              viewBox="0 0 99 47"
              fill="none"
            >
              <ellipse
                cx="55.5308"
                cy="-8.85143"
                rx="55.3292"
                ry="55.3292"
                fill="#D7EEFE"
              />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: "12px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="83"
              viewBox="0 0 96 83"
              fill="none"
            >
              <ellipse
                cx="39.8343"
                cy="55.712"
                rx="55.3292"
                ry="55.3292"
                fill="#D7EEFE"
              />
            </svg>
          </div>
          <div
            style={{
              width: "400px",
              height: " 181.48px",
              backgroundColor: "rgba(240, 249, 255, 1)",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <h4 style={{ fontSize: "24px" }}>-50%</h4>
              <p style={{}}>На кухонную мебель </p>
              <Button style={{ position: "relative", zIndex: 1 }}>
                <span style={{ fontSize: "11px" }}> Подробнее</span>
              </Button>
            </div>

            <img
              style={{ width: "166.104px", height: "109.757px" }}
              src="../public/event.png"
              alt="error"
            />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "300px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="47"
              viewBox="0 0 99 47"
              fill="none"
            >
              <ellipse
                cx="55.5308"
                cy="-8.85143"
                rx="55.3292"
                ry="55.3292"
                fill="#D7EEFE"
              />
            </svg>
          </div>
          <div style={{ position: "absolute", bottom: "12px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="83"
              viewBox="0 0 96 83"
              fill="none"
            >
              <ellipse
                cx="39.8343"
                cy="55.712"
                rx="55.3292"
                ry="55.3292"
                fill="#D7EEFE"
              />
            </svg>
          </div>
          <div
            style={{
              width: "400px",
              height: " 181.48px",
              backgroundColor: "rgba(240, 249, 255, 1)",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <h4 style={{ fontSize: "24px" }}>-50%</h4>
              <p style={{}}>На кухонную мебель </p>
              <Button style={{ position: "relative", zIndex: 1 }}>
                <span style={{ fontSize: "11px" }}> Подробнее</span>
              </Button>
            </div>

            <img
              style={{ width: "166.104px", height: "109.757px" }}
              src="../public/event.png"
              alt="error"
            />
          </div>
        </div>
        <div
          style={{
            width: " 400px",
            height: "181.48px",
            backgroundColor: "#ECEDF2",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Event;
