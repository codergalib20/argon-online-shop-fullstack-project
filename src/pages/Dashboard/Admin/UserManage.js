import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { admins, users } from "../../../fakeData/fakeData";
import Admins from "./Admins";
import Users from "./Users";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function UserManage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <AppBar
          position="static"
          sx={{ background: "#fff", boxShadow: "none", ml: 3 }}
        >
          <Tabs
            sx={{ width: "100%", maxWidth: "500px", background: "#f5841a" }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="User manage tabs list header box"
          >
            <Tab label="Users" {...a11yProps(0)} />
            <Tab label="Admins" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <Box
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {users.map((user) => (
              <Users key={user?._id} user={user} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {admins.map((admin) => (
              <Admins key={admin?._id} admin={admin} />
            ))}
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
