import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Hity = () => {
  return (
    <Card
      style={{
        width: "200px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card.Img
        style={{
          margin: "10px 0px",
          width: "149px",
          height: "175px",
        }}
        src="../public/hity.png"
      />
      <img
        style={{
          position: "absolute",
          right: "30px",
          top: "15px",
          width: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        src="../public/heart.svg"
        alt="error"
      />
      <Card.Body
        style={{
          paddingTop: 0,
        }}
      >
        <Card.Text
          style={{
            fontSize: "12px",
            letterSpacing: "0.28px",
            fontWeight: "500",
            margin: 0,
          }}
        >
          Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..
        </Card.Text>
        <Card.Title style={{ fontSize: "19px", fontWeight: "700" }}>
          1294 с
        </Card.Title>
        <p style={{ color: "green", margin: 0, fontSize: "12px" }}>В наличии</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="2.90193" cy="3.00002" r="2.90193" fill="#3286C2" />
          </svg>
          <span style={{ fontSize: "12px", color: "blue" }}> Комплект</span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="secondary"
            style={{
              borderRadius: "45%",
              backgroundColor: "rgba(0,0,0,0.2)",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                fill="black"
              />
            </svg>
          </Button>
          <p style={{ margin: 0 }}> 999</p>
          <Button
            variant="secondary"
            style={{
              borderRadius: "45%",
              backgroundColor: "rgba(0,0,0,0.2)",
              border: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Hity;
