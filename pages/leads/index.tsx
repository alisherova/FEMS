import React from 'react';
import {LeadsPage} from 'app';
import withAuth from "utils/guard";

const Leads = () => {
    return <LeadsPage/>
}

export default withAuth(Leads);