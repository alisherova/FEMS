import React from "react";
import {Box} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {Button, Input} from "components";
import {bgColors, fontWeights, textColors} from "styles/theme";
import {LoginSchema} from "validation";
import {TLoginForm} from "./type";
import auth from "api/auth";
import env from "utils/env";
import {encodeText} from "utils/cipher";
import {useAuth} from "hooks";
import {toast} from "react-toastify";
import Router from "next/router";
import {setUser} from "store";
import {useDispatch} from "react-redux";
import {FormWrapper, MainBgWrapper} from "./style";
import Image from "next/image";

const Login = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
        setError,
    } = useForm<TLoginForm>({
        resolver: yupResolver(LoginSchema),
    });
    const [_, setToken]: any = useAuth();
    const dispatch = useDispatch();
    const onSubmit = async (e: TLoginForm) => {
        try {
            const data = await auth.login(e.phoneNumber, e.password);
            Router.push("/leads");
            const result = data.data.data[0];
            const token = encodeText(`${env.key}`, result.accessToken);
            console.log(result)
            setToken(token);
            dispatch(setUser(result.profile));
            console.log(data.data.data[0]);
            toast("Success", {type: "success"});
        } catch (e: any) {
            console.log(e)
            if (e.status === 422) {
                const validationErrors = e.data.client_error.errors as any[];
                validationErrors.map((err) => {
                    setError(err.field, {message: err.message});
                });
            }
        }
    };

    return (
        <MainBgWrapper>
            <Box
                bgcolor={bgColors.transparent}
                display="flex"
                flex={1}
                height="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <FormWrapper bgColor={bgColors.white} onSubmit={handleSubmit(onSubmit)}>
                    <Image
                        alt="logo"
                        className='image'
                        width={274}
                        height={100}
                        src="/logo-big.svg"
                    />
                    <div className="box">
                        <div className="input">
                            <Input
                                label='Phone number'
                                placeholder="login"
                                name="phoneNumber"
                                control={control}
                                error={errors?.phoneNumber?.message}
                            />
                        </div>
                        <div className="input">
                            <Input
                                label="Password"
                                placeholder="password"
                                name="password"
                                htmlType="password"
                                type="password"
                                control={control}
                                error={errors?.password?.message}
                            />
                        </div>
                    </div>
                    <div className="box">
                        <Button style={{width: "100%", fontWeight: fontWeights.w500}} type="submit"
                                textColor={textColors.white}>
                            Sign in
                        </Button>
                    </div>
                </FormWrapper>
            </Box>
        </MainBgWrapper>
    );
};

export default Login;
