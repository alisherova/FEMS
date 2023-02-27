import React from "react";
import Head from "next/head";
import { Grid, Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { Content, MainContainer } from "./style";
import { Header, Sidebar } from "layout";

type TProps = {
    children?: React.ReactNode;
    theme?: any;
};

function Frame(props: TProps) {
    return (
        <MainContainer>
            <Head>
                <title>FEMS</title>
            </Head>
            <ThemeProvider theme={props.theme}>
                <Grid container>
                    <Grid item className="sidebarContainer">
                        <Sidebar />
                    </Grid>
                    <Grid item className="mainBlock">
                        <Stack overflow="auto" className="childContent">
                            <Header />
                            <Content style={{ paddingTop: "72px" }}>{props.children}</Content>
                        </Stack>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MainContainer>
    );
}

export default Frame;
