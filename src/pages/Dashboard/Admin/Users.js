import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Users = ({ user }) => {
  return (
    <div>
      <Accordion
        sx={{
          padding: "0.3rem 0",
          boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.4)",
          py: 0,
          mb: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: "#f5841a" }}
        >
          <Typography variant="h6" fontWeight="600">
            {user?.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "#1f155e", color: "#fff" }}>
          <Grid container spacing={3} sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="400">
                {user?.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="400">
                {user?.email}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
              <Typography variant="h6" fontWeight="400">
                <DeleteForeverIcon />
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Users;
