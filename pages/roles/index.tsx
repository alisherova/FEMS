import React from 'react';
import {RolesPage} from 'app';
import withAuth from "utils/guard";

const Roles = () => {
    return <RolesPage/>
}

export default withAuth(Roles);