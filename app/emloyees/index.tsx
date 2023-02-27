import React, { FC } from 'react';
import { Wrapper, DetailsContainer, UserInfo, UserDetails, PermissionsWrapper, PermissionsContent } from "./styles"; 
import {PlusSvg, Table, ThreeDotsSvg, Collapse} from "components";
import Router, {useRouter} from "next/router";
import Image from "next/image";

const PermissionContent = () => {
    const permissionLabels: string[] = ["Edit tables", "Assign manager", "Change", "Edit personal data", "Change avatar"]

    return (
        <PermissionsContent>
            {/* {permissionLabels.map((btn) => {
                <button>btn</button> as HTMLButtonElement;
            })} */}
            <button>Edit tables</button>
            <button>Assign manager</button>
            <button>Change</button>
            <button>Edit personal data</button>
            <button>Change avatar</button>
        </PermissionsContent>
    )
}


const EmployeesPage: FC = () => {
    const router = useRouter();
    interface EmployeeDetails  {
        fullName: string;
        email: string;
        phoneNumber: number;
        addedDate: number | string;
        salary: number | string;
        role: string;
        organization: string;
        branch: string
    }

    const employeeDetail: EmployeeDetails = {
        fullName: "Robert Fox",
        email: "unknown",
        phoneNumber: +998991230045,
        addedDate: "15.12.2022",
        salary: "Fixed",
        role: "Manager",
        organization: "Qalandar",
        branch: "Main office"
    }

    const userInfo: {[key: string]: string} = {
        img: "/userInfoImg.png",
        username: "Robert Fox",
        userStatus: "Manager"
    }

    
    const getExtra = () => (
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
            children: <PermissionContent/>,
            header: <h2 className="title">Permissions</h2>,
            getExtra: getExtra
        }
    ];

    return (
        <Wrapper> 
            <DetailsContainer>
                <UserInfo>
                    <Image
                            alt="userImage"
                            className='image'
                            width={100}
                            height={100}
                            src={userInfo.img}
                    />
                    <p className='userName'>{userInfo.username}</p>
                    <p className='userStatus'>{userInfo.userStatus}</p>
                    <button className='userInfoBtn'>Edit</button>
                </UserInfo>
                <span className='borderSpan'></span>
                <UserDetails>
                    <p><span>full name: </span>{employeeDetail.fullName}</p>
                    <p><span>added date: </span>{employeeDetail.addedDate}</p>
                    <p><span>organization: </span>{employeeDetail.organization}</p>
                    <p><span>email: </span>{employeeDetail.email}</p>
                    <p><span>salary: </span>{employeeDetail.salary}</p>
                    <p><span>branch: </span>{employeeDetail.branch}</p>
                    <p><span>phone number: </span>{employeeDetail.phoneNumber}</p>
                    <p><span>role: </span>{employeeDetail.role}</p>
                </UserDetails>
            </DetailsContainer>
            <PermissionsWrapper>
                <Collapse tabsList={tabsList}/>
            </PermissionsWrapper>
        </Wrapper>
    )
}

export default EmployeesPage;
