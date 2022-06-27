import { Container, Box, Title } from "@mantine/core";
import React from "react";
import Login from "../components/Login/Login";
import useLandingStyles from "../styles/Landingpage/useLandingStyles";

const LandingPage = () => {
  const { classes } = useLandingStyles();

  return (
    <Box className={classes.landingPage}>
      <Box className={classes.landingCard}>
        <Box className={classes.leftLandingContainer}>
          <Box className={classes.titleContainer}>
          <Title order={1}>WeeBucket</Title>
          <Title order={2}> Create inspiring bucketlists with your friends</Title>
          </Box>
        </Box>
        <Box className={classes.rightLandingContainer}>
          <Box>
          <Title order={4}>
            Hello! <br /> Please Log in :)
          </Title>
          <Login />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
