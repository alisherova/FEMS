import {ReactNode} from "react";

export interface ICard {
    icon: ReactNode;
    title: string;
    count: number;
    color: string;
}