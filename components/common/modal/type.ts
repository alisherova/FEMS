import React, {CSSProperties} from "react";
import {
    FieldValues,
    SubmitHandler,
    SubmitErrorHandler,
} from "react-hook-form";

export type TModal = {
    icon?: any;
    value?: any;
    control: any;
    errors?: any;
    open: boolean;
    label?: string;
    iconBlur?: string;
    vertical?: boolean;
    boxShadow?: string;
    handleClose: () => void;
    buttonLoading?: boolean;
    blurColor: string | null;
    cancelButtonText?: string;
    submitButtonText?: string;
    buttonStyles?: CSSProperties;
    onSubmit: (data: any) => void;
    text: string | React.ReactNode;
    textarea?: React.ReactNode;
    handleSubmit: (
        onValid: SubmitHandler<FieldValues>,
        onInvalid?: SubmitErrorHandler<FieldValues>
    ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
    type?: "password" | "input" | "textarea" | "file";
};
