import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import auth from "api/auth";
import { setIsLoadingUser, setUser } from "store";
import { Cookies } from "react-cookie";

const cookie = new Cookies();
const UserGlobal = () => {
    const dispatch = useDispatch();

    const { isLoading, data } = useQuery(["user"], () => auth.getUser(), {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: !!cookie.get("token"),
    });

    useEffect(() => {
        dispatch(setIsLoadingUser(!cookie.get("token") ? false : isLoading));
        if (!isLoading && data?.data?.success) {
            dispatch(setUser(data?.data?.data));
        }
    }, [isLoading]);
    return null;
};

export default UserGlobal;