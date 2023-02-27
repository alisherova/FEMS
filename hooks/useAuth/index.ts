import {useMemo} from "react";
import {useCookies} from "react-cookie";
import {useSelector} from "react-redux";
import {IStore} from "store";

export const useAuth = (): any => {
    const [_, setCookie] = useCookies(["token"]);
    const user = useSelector((state: IStore) => state.user.user);
    return useMemo(() => {
        return [user, (token: string) => setCookie("token", token)];
    }, [user]);
};
