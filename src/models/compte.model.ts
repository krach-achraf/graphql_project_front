import type { IClient } from "./client.model";

export interface ICompte{
    id?: number;
    solde?: number;
    dateCreation?: number;
    typeCompte?: string;
    client?: IClient;
}

export class Compte implements ICompte{
    constructor(
        public id?: number,
        public solde?: number,
        public dateCreation?: number,
        public typeCompte?: string,
        public client?: IClient
    )
    {}
}