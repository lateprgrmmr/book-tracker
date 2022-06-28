import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const ResponsiveAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className="font-link">
                    Becca's Book Tracker
                </Toolbar>
            </Container>
        </AppBar>
    )
}