import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import "../styles/MuiButton.scss";

function MuiButton(props) {
  const component = props.component;
  return (
    <div className="HomeButton">
      <Link to={component} spy={true} smooth={true} offset={-30} duration={650}>
        <Button variant="contained" color="success">
          Kreni
        </Button>
      </Link>
    </div>
  );
}

export default MuiButton;
