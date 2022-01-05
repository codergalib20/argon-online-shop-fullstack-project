import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import BackgroundSlider from "react-background-slider";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { useStyles } from "../../styles/Styles";
import Pricing from "./Pricing";

const Slider = () => {
  const { homeSlideStyle, sliderContent, outlineButton, rightSlideParentBox } =
    useStyles();
  return (
    <Box>
      <BackgroundSlider
        className={homeSlideStyle}
        images={[slide1, slide2, slide3]}
        duration={2}
        transition={1}
      />
      <Box className={sliderContent}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <h1>Welcome to Arong online market</h1>
              {/* <Link to="/allProducts"> */}
              <Button className={outlineButton} variant="contained">
                More Product
              </Button>
              {/* </Link> */}
            </Grid>
            <Grid item sx={{ display: { xs: "none", lg: "flex" } }} lg={4}>
              <Box className={rightSlideParentBox}>
                <Pricing />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Slider;
