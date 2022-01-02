import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  dashboardMenuItems: {
    textAlign: "right",
    color: "#fff",
  },
  dashboardMenuItem: {
    color: "#fff !important",
    borderTopLeftRadius: "50px !important",
    borderBottomLeftRadius: "50px !important",
    width: "90% !important",
    marginLeft: "auto !important",
    display: "flex !important",
    alignItems: "center !important",
    fontWeight: "bold !important",
    // border: "1px solid #fff !important",
    marginTop: "0.2rem !important",
    background: `linear-gradient(to right, rgba(255,255, 255, 0.1), rgba(255,255,2, 0.1)) !important`,
  },
  dashboardMenuIcon: {
    color: "#fff !important",
    minWidth: "34px !important",
  },
  avatarBox: {
    background: "red !important",
  },
});
