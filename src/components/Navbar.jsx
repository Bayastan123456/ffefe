import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarNe() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <img
          style={{ marginLeft: "35px" }}
          src="../public/logo1.svg"
          alt="error"
        />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 df"
            style={{ maxHeight: "100px", color: "white" }}
            navbarScroll
          >
            <Button
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "10vw",
                borderRadius: "50px",
                margin: "0 20px",
              }}
            >
              <img src="../public/каталог.svg" alt="error" /> Каталог
            </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "50vw", borderRadius: "50px" }}
            />
            <div
              style={{
                margin: "0 20px",
                lineHeight: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <p style={{ fontSize: "10px", margin: "0" }}>Добро пожаловать</p>
              <p style={{ fontSize: "14px", fontWeight: 600, margin: 0 }}>
                Вход/Регистрация
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  margin: "0 10px",
                }}
              >
                <img
                  style={{ margin: "10px" }}
                  src="../public/iconRegis.svg"
                  alt="error"
                />
              </div>
              <div
                style={{
                  height: "30px",
                  width: "1px",
                  backgroundColor: "grey",
                }}
              ></div>
              <div
                style={{
                  textAlign: "center",

                  backgroundColor: "white",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  margin: "0 10px",
                }}
              >
                <img
                  style={{ margin: "10px" }}
                  src="../public/iconCart.svg"
                  alt="error"
                />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNe;
