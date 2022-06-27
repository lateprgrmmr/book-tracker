import { Card, Grid } from "@mui/material";
import React from "react";

function ItemCard() {
    // const { classes } = props;
    return(
        <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyItems="center"
    style={{ minHeight: '100vh' }}
    >

        <Grid item xs={3}>
                <Card>
                    <p>Hello, World!</p>
            </Card>
        </Grid>
    </Grid>
    )
};

export default ItemCard;