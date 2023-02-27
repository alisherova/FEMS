import React, {useEffect} from "react";
import {Login} from "app";
import {useAuth} from "hooks";
import Router from "next/router";
import {Cookies} from "react-cookie";
import {Button, Result} from "antd";

const cookies = new Cookies();
const LoginPage = () => {
    const [user] = useAuth();

    useEffect(() => {
        if (!user) {
            Router.push("/leads");
        }
    }, [user]);

    if (!!user) {
        return null;
    }

    if (cookies.get("token"))
        return (
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    return <Login/>;
};

export default LoginPage;
