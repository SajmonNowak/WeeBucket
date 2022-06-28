import { createStyles } from "@mantine/core";


const useLandingStyles = createStyles((theme) => ({
    landingPage: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
    },
    landingCard: {
        width: 1000,
        height: 800,
        boxShadow: theme.shadows.lg,
        display: "flex",
        borderRadius: theme.radius.md,
        overflow: "hidden"
    },
    leftLandingContainer: {
        width: "60%",
        padding: theme.spacing.lg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.primaryColor,
        color: "white",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
    },
    rightLandingContainer: {
        minWidth: "250px",
        backgroundColor: "white",
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer : {
        maxWidth: 300,
        boxShadow: theme.shadows.md,
        padding: theme.spacing.md
    },
    button2: {
        marginTop: theme.spacing.sm,
        display: "block",
        width: 200,
        margin: "0 auto",
    }
}));

export default useLandingStyles;