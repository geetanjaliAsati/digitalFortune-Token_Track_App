import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ListTwoToneIcon from "@mui/icons-material/ListTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import styles from "./styles.module.css";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import CompareArrowsTwoToneIcon from "@mui/icons-material/CompareArrowsTwoTone";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const links = [
    { text: "Home", url: "/", icon: <HomeTwoToneIcon /> }, // Assign the icon component
    { text: "Compare", url: "/compare", icon: <CompareArrowsTwoToneIcon /> }, // Assign the icon component
    { text: "Dashboard", url: "/dashboard", icon: <GridViewTwoToneIcon /> }, // Assign the icon component
  ];
  //b, f
  const toggleDrawer = (anchor, open) => (event) => {
    // console.log(event, "eventPrinting");
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "bottom" ? "auto" : 250,
        backgroundColor: "var(--black)",
        color: "var(--white)",
        padding: "1.5rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      {links.map((link, index) => (
        <ListItem
          key={index}
          disablePadding
          component={Link}
          to={link.url}
          className={`${styles.drawer} ${styles.links}`}
        >
          <ListItemButton>
            <ListItemIcon style={{ color: "var(--white)", fontSize: "2rem" }}>
              {link.icon} {/* Render the assigned icon component */}
            </ListItemIcon>
            <ListItemText primary={link.text} className={styles.link}/>
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  return (
    <div className={styles.drawerDiv}>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ListTwoToneIcon
              style={{ color: "var(--white)", fontSize: "1.6rem", margin: "0"}}
            />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {/* <div className={styles.drawer}>Hello</div> */}
            <div>{list(anchor)}</div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
