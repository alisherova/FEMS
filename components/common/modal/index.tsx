import * as React from "react";
import {TModal} from "./type";
import {Buttons, Content, IconWrapper, Text} from "./style";
import {AntdModal, Button, Input} from "components/index";
import {bgColors} from "styles/theme";

const ActionModal = (
    {
        icon,
        text,
        open,
        type,
        label,
        errors,
        control,
        vertical,
        iconBlur,
        onSubmit,
        blurColor,
        boxShadow,
        handleClose,
        handleSubmit,
        buttonStyles,
        buttonLoading,
        cancelButtonText,
        submitButtonText,
    }: TModal) => {

    return (
        <AntdModal open={open} onCancel={handleClose} centered>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Content>
                    {icon && (
                        <IconWrapper>
                            <div className="svg">{icon}</div>
                            <div className="blur"
                                style={{backgroundColor: iconBlur ?? blurColor ?? bgColors.primary,}}/>
                        </IconWrapper>
                    )}
                    <Text>{text}</Text>
                </Content>
                {type && (
                    <Input
                        type={type}
                        label={label}
                        name="comment"
                        control={control}
                        error={errors?.comment?.message}
                    />
                )}
                <Buttons className={vertical ? "vertical" : ""}>
                    <Button
                        className="cancel"
                        onClick={handleClose}>
                        {cancelButtonText || "Cancel"}
                    </Button>
                    <Button
                        type="submit"
                        className="save"
                        buttonLoading={buttonLoading}
                        style={{
                            backgroundColor: blurColor ?? bgColors.primary,
                            boxShadow: boxShadow,
                            width: "100%",
                            ...buttonStyles,
                        }}>
                        {submitButtonText || "Delete"}
                    </Button>
                </Buttons>
            </form>
        </AntdModal>
    );
};
export default ActionModal;
