import React, {useEffect, useState} from 'react';
import {AntdModal} from "components";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";

const CreateRoleModal = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (router.query.createRole === "true")
            setOpen(true);
    }, [router.query]);

    const {
        handleSubmit,
        reset,
        watch,
        control,
        formState: {errors},
        register,
    } = useForm();

    const handleClose = () => {
        reset({});
        const query = router.query;
        delete query.createRole;
        router.replace({
            pathname: router.pathname,
            query: query,
        });
    };

    return (
        <AntdModal open={open} onCancel={handleClose} centered width={420}>
            Hello World
        </AntdModal>
    );
};

export default CreateRoleModal;