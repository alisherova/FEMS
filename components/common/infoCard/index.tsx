import React, {FC} from 'react';
import {CountWrapper, IconWrapper, InfoCardWrapper, TitleSite, TitleWrapper} from './style'
import {ICard} from "./type";

const InfoCard: FC<ICard> = ({icon, count, title, color}) => {
    return (
        <InfoCardWrapper>
            <IconWrapper>
                {icon}
            </IconWrapper>
            <TitleSite>
                <TitleWrapper style={{color: color}}>{title}</TitleWrapper>
                <CountWrapper>{count}</CountWrapper>
            </TitleSite>
        </InfoCardWrapper>
    )
}

export default InfoCard;