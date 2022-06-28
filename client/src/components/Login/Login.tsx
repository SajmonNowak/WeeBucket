import { Box, Button, PasswordInput, Stack, TextInput, Text, useMantineTheme } from "@mantine/core";
import { useForm } from '@mantine/form';
import useLandingStyles from "../../styles/Landingpage/useLandingStyles";
import React from "react";

const Login = () => {
  const { classes } = useLandingStyles();
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    }
  });

  return (
    <div className={classes.loginContainer}>
        <form onSubmit = {form.onSubmit((v) => console.log(v))}>
        <Stack p={5}>
          <TextInput placeholder="E-Mail" label="E-Mail" required {...form.getInputProps('email')}  />
          <PasswordInput placeholder="Password" label="Password" required {...form.getInputProps('password')}/>
        </Stack>
        <Box pt={theme.spacing.md} sx={{width: "100%", textAlign: "center"}}>
          <Button className={classes.button2} type="submit">Log In</Button>
          <Text variant="link" pt={theme.spacing.sm} >Register</Text>
        </Box>
      </form>
    </div>
  );
};

export default Login;
