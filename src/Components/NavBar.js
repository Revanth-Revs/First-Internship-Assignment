import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import HatIcon from "@material-ui/icons/School";

const drawerWidth = 315;

/**
 * Styles
 *
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#FF6C40",
    "& *": { color: "rgba(255, 255, 255)" },
  },
  content: {
    flexGrow: 1,
    background: "#f5f5f5",
    padding: theme.spacing(3),
  },
}));

const listItemStyle = makeStyles({
  root: {
    "&$selected": {
      backgroundColor: "#FFC480",
    },
    marginBottom: 10,
  },
  selected: {},
});

function Navbars(props) {
  const pathName = useLocation().pathname;
  const { window } = props;
  const classes = useStyles();
  const listItemClass = listItemStyle();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Drawer Setup
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem
          button
          classes={{
            root: listItemClass.root,
            selected: listItemClass.selected,
          }}
          selected={pathName === "/"}
          component={Link}
          to="/"
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              style={{ fontWeight: 700, fontSize: 24, marginLeft: 10 }}
            >
              Dashboard
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          button
          classes={{
            root: listItemClass.root,
            selected: listItemClass.selected,
          }}
          component={Link}
          to="/posts"
        >
          <ListItemIcon>
            <HatIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              style={{ fontWeight: 700, fontSize: 24, marginLeft: 10 }}
            >
              Posts
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem
          button
          classes={{
            root: listItemClass.root,
            selected: listItemClass.selected,
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography
              style={{ fontWeight: 700, fontSize: 24, marginLeft: 10 }}
            >
              Ipsum
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        {/*When the window is expanded hide the temporary Navbar and show Fixed one*/}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        {/*When opened on mobile the navbar is hidden and menu option is visible*/}
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      {/*Main content on the screen */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Navbars;
