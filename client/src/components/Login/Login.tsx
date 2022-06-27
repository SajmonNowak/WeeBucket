import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import useLandingStyles from "../../styles/Landingpage/useLandingStyles";
import React from "react";

const Login = () => {
  const { classes } = useLandingStyles();

  return (
    <div className={classes.loginContainer}>
      <Stack p={5}>
        <TextInput placeholder="E-Mail" label="E-Mail" required  />
        <PasswordInput placeholder="Password" label="Password" required />
      </Stack>
      <Box p={10} sx={{width: "100%"}}>
        <Button className={classes.button2}>Log In</Button>
      </Box>
    </div>
  );
};

export default Login;
