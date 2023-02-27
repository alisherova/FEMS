import React, {useEffect, useState} from "react";
import Router from "next/router";
import {useAuth} from "hooks";

const withAuth = (WrappedComponent: any) => {
    const WithAuth = (props: any) => {
        const [loading, setLoading] = useState(true);
        const [token] = useAuth();

        useEffect(() => setLoading(false), []);

        if (loading) {
            return <div>Loading...</div>;
        }

        if (token) {
            Router.push("/login");
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    WithAuth.getInitialProps = async (ctx: any) => {
        const wrappedComponentInitialProps = WrappedComponent.getInitialProps
            ? await WrappedComponent.getInitialProps(ctx)
            : {};

        return {...wrappedComponentInitialProps};
    };

    return WithAuth;
};

export default withAuth;
