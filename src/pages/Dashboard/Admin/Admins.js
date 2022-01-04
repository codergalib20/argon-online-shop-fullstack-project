import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import swal from "sweetalert";

const Admins = ({ admin, admins, setAdmins }) => {

  const deleteAdmins = (id) => {
    swal({
      title: "Are you sure for deleting?",
      text: "Once deleted, you will not be able to recover this user data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://blooming-plains-44019.herokuapp.com/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = admins.filter(
              (service) => service._id !== id
            );
            setAdmins(remaining);
          });
        swal("Poof! Your users has been deleted! from user list", {
          icon: "success",
        });
      } else {
        swal("Your user data is safe!");
      }
    });
  };



  
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
            {admin?.displayName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "#1f155e", color: "#fff" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="400">
                {admin?.displayName}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="400">
                {admin?.email}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
              <Typography onClick={()=>deleteAdmins(admin?._id)} variant="h6" fontWeight="400">
                <DeleteForeverIcon />
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Admins;
