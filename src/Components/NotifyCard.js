import { Box, Card, Tab, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import "../CSS/NotifyCard.css";
import NotificationsCard from "./NotificationsCard";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      width: "100%",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    width: "50%",
    color: "#a0a0a0",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    backgroundColor: "#fafafa",
    "&:focus": {
      color: "#000000",
      opacity: 1,
      backgroundColor: "#ffffff",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function NotifyCard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="notifycard" elevation="0">
      <div>
        <StyledTabs
          value={value}
          onChange={handleChange}
          className="notify__root"
          centered
        >
          <StyledTab
            style={{ borderTopRightRadius: 15 }}
            label="Notifications"
            {...a11yProps(0)}
          />
          <StyledTab
            style={{ borderTopLeftRadius: 15 }}
            label="Events"
            {...a11yProps(1)}
          />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <NotificationsCard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <NotificationsCard />
        </TabPanel>
      </div>
    </Card>
  );
}

export default NotifyCard;
