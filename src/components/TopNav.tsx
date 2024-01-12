import * as React from "react";
import { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import logo from "../assets/logo.svg";
import { TopNavButton } from "./TopNavButton";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { useOutsideClick } from "../commons/useOutsideClick";

export function TopNav() {
  const [drawerContent, setDrawerContent] = useState(<></>);
  const [focusedTab, setFocusedTab] = useState(<></>);
  const ref = useOutsideClick(() => {
    setDrawerContent(<></>);
  });

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      style={{ position: "fixed" }}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }} style={{ padding: "2px 10%" }}>
        <img src={logo} alt="" width={250} />
        <nav ref={ref} style={{ marginLeft: "auto", marginRight: 0 }}>
          <TopNavButton
            name="Services"
            drawerContent={<div>services</div>}
            setDrawerContent={setDrawerContent}
          />
          <TopNavButton
            name="Technologies"
            drawerContent={<></>}
            setDrawerContent={setDrawerContent}
          />
          <TopNavButton
            name="Company"
            drawerContent={<div>company</div>}
            setDrawerContent={setDrawerContent}
          />
        </nav>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
      <Divider />
      <Collapse in={true}>{drawerContent}</Collapse>
    </AppBar>
  );
}
