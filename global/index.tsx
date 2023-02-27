import React from 'react';
import UserGlobal from "./user";
import {useRouter} from "next/router";
import CreateRoleModal from "./modals/createRoleModal";

const Index = () => {
    const router = useRouter();
    const {createRole} = router.query;

    return (
        <div>
            <UserGlobal/>
            {createRole === "true" ? <CreateRoleModal/> : null} 
        </div>
    );
};

export default Index;