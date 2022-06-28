import { Box, Button, Center, PasswordInput, TextInput, Title, useMantineTheme } from '@mantine/core'
import { useForm } from '@mantine/form'
import axios from 'axios';
import React from 'react'

const RegisterPage = () => {
    const theme = useMantineTheme();
    const form = useForm({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            email2: "",
            password: "",
            password2: "",
        }
    })

    const handleSubmit = async (values: {[key: string]: string}) => {

        const userData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            username: values.username,
            password: values.password,
        }

        const res = await axios.post("/api/user", userData);
        if(res){
            console.log(res)
        } 

    }

  return (
    <Center sx={{width: "100vw", height: "100vh"}}>
        <Box sx={{width: 500, padding: theme.spacing.lg, border: `1px solid ${theme.primaryColor}`, borderRadius: theme.radius.sm   }}>
            <Box sx={{width: "100%", textAlign:"center"}}>
                <Title order={2}>Create new Account</Title>
            </Box>
            <form style={{marginTop: theme.spacing.md}} onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput placeholder="First Name" label="First Name" {...form.getInputProps("firstName")}></TextInput>
                <TextInput placeholder="Second Name" label="Second Name" {...form.getInputProps("lastName")}></TextInput>
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