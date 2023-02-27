import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import withAuth from "../utils/guard";

const CreateFormSchema = yup.object().shape({
    name: yup.array().required("Name is a required field"),
});

function Home() {
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: yupResolver(CreateFormSchema),
    });

    const onSubmit = (data: any) => {
        // console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </div>
    );
}

export default withAuth(Home)