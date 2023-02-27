import React, {FC} from "react";
import {ModalProps} from "antd/lib/modal";
import {StyledModal} from "./style";

interface Interface {
    padding?: string;
}

const ModalComponent: FC<ModalProps & Interface> = (
    {
        children,
        width = 340,
        padding = "0",
        ...props
    }) => {
    
    return (
        <StyledModal
            centered
            {...props}
            footer={null}
            width={width}
            padding={padding}
            closable={false}
        >
            {children}
        </StyledModal>
    );
};

export default ModalComponent;
