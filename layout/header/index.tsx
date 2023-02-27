import React from "react";
import {Grid, Typography} from "@mui/material";
import {Image} from "antd";
import NextImage from "next/image";
import {HeaderContainerBox, SearchInput} from "./style";
import {useSelector} from "react-redux";
import {IStore} from "store";
import {NotificationSvg} from "../../components";

const Header = () => {
    const user = useSelector((state: IStore) => state.user?.user);
    return (
        <HeaderContainerBox>
            <Grid container justifyContent="space-between">
                <Grid item sx={{display: "flex", alignItems: "center"}}>
                    <SearchInput/>
                </Grid>
                <Grid item>
                    <Grid container spacing="20px" alignItems="center">
                        <Grid item>
                            <NextImage
                                src="/header/notification.svg"
                                alt="search"
                                width="40"
                                height="40"
                            />
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Image
                                        src={'https://picsum.photos/350/350'}
                                        alt="search"
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Grid>
                                <Grid item ml="10px">
                                    <Grid container>
                                        <Grid item>
                                            <Typography className="username">
                                                {/*{user?.userProfile?.firstname +*/}
                                                {/*    " " +*/}
                                                {/*    user?.userProfile?.lastname}*/}
                                                Abror Xalilov
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            ml="10px"
                                            width="16px"
                                            height="16px"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <NextImage
                                                src="/header/rectangle.svg"
                                                alt="arrow"
                                                width="8"
                                                height="8"
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                            <Typography className="role">
                                                {/*{user?.rbacAssignment?.rbacRole?.name + ""}*/}
                                                Admin
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </HeaderContainerBox>
    );
};

export default Header;