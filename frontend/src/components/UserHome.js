import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap";
//import Logo from "../assets/img/DATAPROX_LOGO.png";
import Logo from "../assets/img/Fondo.png";

import SearchBar from "./SearchBar";

const UserHome = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Stack gap={2} className="align-items-center">
            <Image src={Logo} width="1100px" height="400px" />
            <SearchBar />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default UserHome;