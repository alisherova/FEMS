import React, {FC} from 'react';
import {Wrapper, Header} from "./style";
import {PlusSvg, Table, ThreeDotsSvg, Collapse} from "components";
import Router, {useRouter} from "next/router";

const RolesPage: FC = () => {
    const router = useRouter();
    const cols: any[] = [
        {
            Header: <Header>Name</Header>,
            accessor: 'name',
            Footer: "Name",
            Cell: (props: any) => <div>{props.value}</div>
        },
        {
            Header: <Header>Definition</Header>,
            accessor: 'definition',
            Footer: "Definition",
            Cell: (props: any) => {
                return <span className="text-wrap">{props.value}</span>
            }
        },
    ];

    const data: any[] = [
        {
            name: "Teacher",
            definition: "Lorem ipsum dolor sit amet qwerty consectetur. Sit quisque ullamcorper. Lorem ipsum dolor sit amet qwerty consectetur. Sit quisque ullamcorper"
        },
        {
            name: "Teacher",
            definition: "Lorem ipsum dolor sit amet qwerty consectetur. Sit quisque ullamcorper. Lorem ipsum dolor sit amet qwerty consectetur. Sit quisque ullamcorper"
        }
    ];

    const genExtra = () => (
        <div style={{display: "flex", alignItems: "center", gap: "35px", padding: "0 25px"}}>
            <div onClick={(event) => {
                event.stopPropagation();
            }}>
                <ThreeDotsSvg/>
            </div>
            <div onClick={(event) => {
                event.stopPropagation();
                router.push({pathname: Router.pathname, query: {'createRole': "true"}})
            }}>
                <PlusSvg/>
            </div>
        </div>
    );

    const tabsList = [
        {
            children: <Table columns={cols} data={data}/>,
            header: <h2 className="title">Roles</h2>,
            getExtra: genExtra
        }
    ];

    return (
        <Wrapper>
            <Collapse tabsList={tabsList}/>
        </Wrapper>
    )
}

export default RolesPage;
