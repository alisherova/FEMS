import React, {FC} from 'react';
import {ArrowTopSvg} from "../../elements";
import {CollapseC, PanelC} from "./style";
import {ICollapse} from "./type";

const Collapse: FC<ICollapse> = (
    {
        onChange,
        tabsList,
        bordered = false,
        positionExpand = "end",
        activeKeys = ["1"]
    }) => {

    return (
        <div>
            <CollapseC
                onChange={onChange}
                bordered={bordered}
                defaultActiveKey={activeKeys}
                expandIconPosition={positionExpand}
                expandIcon={({isActive}) => isActive
                    ? <ArrowTopSvg/>
                    : <ArrowTopSvg style={{transform: `rotate(180deg)`}}/>}>
                {tabsList?.map((tab, index) => (
                        <PanelC
                            key={index + 1}
                            header={tab.header}
                            extra={tab.getExtra()}>{tab.children}</PanelC>
                    )
                )}
            </CollapseC>
        </div>
    );
}

export default Collapse;