import { PathRouteProps } from "react-router-dom";

export interface Route extends PathRouteProps {
    key: string;
};