import React, {ReactNode, useCallback} from "react";
import Image from "next/image";
import {useRouter} from "next/router";

import {bgColors, inter} from "styles/theme";
import {menu} from "constants/index";
import {settingConstants} from "constants/menu";
import {Divider, LogoContainer, MenuContainer, MenuTextStyled} from "./style";
import {Menu, MenuItem, Sidebar} from "components/sidebar";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "store";
import {toggleSidebar} from "store/slices/sidebar/sidebar";
import {ListSvg, StockSvg} from "../../components";

function SidebarMenu() {
    const router = useRouter();
    const isOpen = useSelector((state: IStore) => state.sidebar.isOpen);
    const dispatch = useDispatch();
    const icons = {
        stock: <StockSvg/>,
        stockLight: <StockSvg color={bgColors.white} />,
        role: <ListSvg/>,
        roleLight: <ListSvg color={bgColors.white} />,
    }
    const render = useCallback(
        (
            title: string,
            icon?: string,
            route?: string,
            index?: number
        ) => {
            const onPressMenu = (isDropDown?: boolean) => {
                dispatch(
                    toggleSidebar({
                        id: index!,
                        isOpen: isOpen?.id === index ? !isOpen?.isOpen : true,
                    })
                );
                !isDropDown && route && router.push(route);
            };
            return (
                <MenuItem
                    key={`${index}_key`}
                    onClick={() => route && router.push(route)}
                    // @ts-ignore
                    icon={router.pathname === route ? icons[`${icon}Light`] : icons[icon]}
                    active={router.pathname === route}
                >
                    <MenuTextStyled className={router.pathname !== route ? "title" : "title-light"}>{title}</MenuTextStyled>
                </MenuItem>
            );
        },
        [isOpen, router.pathname]
    );

    return (
        <Sidebar
            backgroundColor="transparent"
            className="scrollHide"
            style={{height: "100vh", fontFamily: "inter"}}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                <Menu>
                    <div>
                        <LogoContainer onClick={() => router.push("/")}>
                            <Image
                                src="/logo.svg"
                                alt="Main logo"
                                height="40"
                                width="137"
                            />
                        </LogoContainer>
                        <Divider/>
                        <MenuContainer>
                            {menu.map(({
                                           title,
                                           icon,
                                           route
                                       }, index) => {
                                return render(title, icon, route, index);
                            })}
                        </MenuContainer>
                    </div>
                </Menu>
                <Menu>
                    <div style={{marginBottom: "20px"}}>
                        {render(
                            settingConstants.title,
                            settingConstants.icon,
                            settingConstants.route,
                        )}
                    </div>
                </Menu>
            </div>
        </Sidebar>
    );
}

export default SidebarMenu;
