import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import vg_image_2 from "../images/VG_Image_2.png";
import "./index.css";
import Image from "react-bootstrap/Image";

function SideNavContent({ ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Toggle Sidebar
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Vicky Gupta</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Image src={vg_image_2} rounded fluid />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function SideNav() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <SideNavContent key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
