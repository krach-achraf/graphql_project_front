export interface IClient{
    id?: number;
    CNE?: string;
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    email?: string;
    address?: string | null;
    dateNaissance?: Date | null;
}

export class Client implements IClient{
    constructor(
        public id?: number,
        public CNE?: string,
        public firstname?: string,
        public lastname?: string,
        public phoneNumber?: string,
        public email?: string,
        public address?: string | null,
        public dateNaissance?: Date | null
    )
    {}
}