import React, {FC} from "react"
import {LeadsWrapper, InfoWrapper, Title} from "./style";
import {InfoCard, GraduationSvg, TickedSvg, NonUserSvg, AttentionSvg, Table} from "components";
import {textColors} from "styles/theme";

const LeadsPage: FC = () => {
    const columns = [
        {
            Header: 'FULL NAME',
            accessor: 'full_name',
            footer: 'FULL NAME'
        },
        {
            Header: 'SUBJECT',
            accessor: 'subject',
            footer: 'SUBJECT'
        },
    ]

    const data = [
        {
            full_name: 'FULL NAME',
            subject: 'full_name',
        },
        {
            full_name: 'FULL NAME',
            subject: 'full_name',
        },
    ]

    return (
        <LeadsWrapper>
            <Title>Leads</Title>
            <InfoWrapper>
                <InfoCard icon={<GraduationSvg/>} title={"Joined to a group"} count={10} color={textColors.secondary}/>
                <InfoCard icon={<TickedSvg/>} title={"Answered"} count={10} color={textColors.blue60}/>
                <InfoCard icon={<NonUserSvg/>} title={"Non active"} count={10} color={textColors.amber40}/>
                <InfoCard icon={<AttentionSvg/>} title={"Negative"} count={10} color={textColors.red50}/>
            </InfoWrapper>
            <div>
                <Table columns={columns} data={data}/>
            </div>
        </LeadsWrapper>
    )
}

export default LeadsPage;