import { Box, Button, Center, PasswordInput, TextInput, Title, useMantineTheme } from '@mantine/core'
import { useForm } from '@mantine/form'
import { findByLabelText } from '@testing-library/react';
import React from 'react'

const RegisterPage = () => {
    const theme = useMantineTheme();
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            email2: "",
            password: "",
            password2: "",
        }
    })

  return (
    <Center sx={{width: "100vw", height: "100vh"}}>
        <Box sx={{width: 500, padding: theme.spacing.lg, border: `1px solid ${theme.primaryColor}`, borderRadius: theme.radius.sm   }}>
            <Box sx={{width: "100%", textAlign:"center"}}>
                <Title order={2}>Create new Account</Title>
            </Box>
            <form style={{marginTop: theme.spacing.md}}>
                <TextInput placeholder="Your Name" label="Name" {...form.getInputProps("name")}></TextInput>
                <TextInput placeholder="example@abc.com" label="E-Mail" {...form.getInputProps("email")}></TextInput>
                <TextInput placeholder="example@abc.com" label="Confirm Email" {...form.getInputProps("email2")}></TextInput>
                <PasswordInput placeholder="Password" label="Password" {...form.getInputProps("password")}></PasswordInput>
                <PasswordInput placeholder="Password" label="Confirm Password" {...form.getInputProps("password2")}></PasswordInput>
                <Box mt={theme.spacing.lg} sx={{width: "100%", textAlign: "center"}}>
                <Button type="submit">Register</Button>

                </Box>
            </form>
        </Box>
    </Center>
  )
}

export default RegisterPage