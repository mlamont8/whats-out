import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import img from "../../images/poweredbytmdb.png";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <Row className="row">
        <Col md={4} sm={12} className="footerArea right">
          <Image
            responsive
            className="poweredBy black"
            style={{ paddingTop: "10px" }}
            src={img}
          />
        </Col>

        <Col md={6} sm={12} className="footerContent left">
          <span className="grey-text">
            This product uses the TMDb API but is not endorsed or certified by
            TMDb.
          </span>
          <p className="grey-text text-lighten-4" style={{ marginTop: "20px" }}>
            {" "}
            © 2017 Copyright M Lamont Taylor
          </p>
        </Col>
      </Row>
    </div>
  </footer>
);

export default Footer;
