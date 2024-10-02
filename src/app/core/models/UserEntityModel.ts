import { Role } from "./roleModel";

export class UserEntity {
    id!: number;
    username!: string;
    emailAddress!: string;
    password!: string;
    role!: Role;
    actif!: boolean;

}