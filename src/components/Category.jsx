import React from "react";
import Card from "react-bootstrap/Card";

const Category = () => {
  const data = [
    {
      title: "Ванны",
      text: "3000 товаров",
      img: "../public/categ1.png",
      id: 1,
    },
    {
      title: "Смесители",
      text: "3000 товаров",
      img: "../public/categ2.png",
      id: 2,
    },
    {
      title: "Вытяжки для кухни",
      text: "3000 товаров",
      img: "../public/categ3.png",
      id: 3,
    },
    {
      title: "Кухонные мойки",
      text: "3000 товаров",
      img: "../public/categ4.png",
      id: 4,
    },
    {
      title: "Другие",
      text: "3000 товаров",
      img: "../public/categ5.png",
      id: 5,
    },
    {
      title: "Унитазы",
      text: "3000 товаров",
      img: "../public/categ6.png",
      id: 6,
    },
    {
      title: "Вытяжки для кухни",
      text: "3000 товаров",
      img: "../public/categ7.png",
      id: 7,
    },
    {
      title: "Умывальники",
      text: "3000 товаров",
      img: "../public/categ8.png",
      id: 8,
    },
    {
      title: "Полотенцесушители",
      text: "3000 товаров",
      img: "../public/categ9.png",
      id: 9,
    },
    {
      title: "Водонагреватели",
      text: "3000 товаров",
      img: "../public/categ10.png",
      id: 10,
    },
    {
      title: "Душевые",
      text: "3000 товаров",
      img: "../public/categ11.png",
      id: 11,
    },
    {
      title: "Водонагреватели",
      text: "3000 товаров",
      img: "../public/categ12.png",
      id: 12,
    },
    {
      title: "Водонагреватели",
      text: "3000 товаров",
      img: "../public/categ12.png",
      id: 13,
    },
    {
      title: "Полотенцесушители",
      text: "3000 товаров",
      img: "../public/categ11.png",
      id: 14,
    },
  ];

  return (
    <div style={{ marginTop: "50px" }}>
      <h3>Категории</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <div key={item.id}>
            <Card
              style={{ width: "170px", height: "170px", marginTop: "20px" }}
            >
              <Card.Body style={{ paddingBottom: 0 }}>
                <Card.Title style={{ fontSize: "14px", margin: 0 }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "12px" }}>{item.text}</Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  display: "flex",
                  flexShrink: 1,
                  maxWidth: "128px",
                  height: "125px",
                  display: "flex",
                  alignSelf: "flex-end",
                }}
                variant="top"
                src={item.img}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
