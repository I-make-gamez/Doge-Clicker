export type User = {
    id: number;
    username: string;
    admin: boolean;
    dogecoin: number;
    clickpower: number;
    clicksper: number;
    avatar: string;
    level: number;
    exp: number;
} | undefined

export type LoginUser = {
    id: number;
    username: string;
    admin: boolean;
    password: string;
} | undefined