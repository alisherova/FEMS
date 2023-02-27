import React from 'react';
import {EmployeesPage} from 'app';
import withAuth from "utils/guard";

const Roles = () => {
    return <EmployeesPage/>
}

export default withAuth(Roles);