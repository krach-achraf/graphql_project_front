import type { ICompte } from "./compte.model";
import type { Type } from "./enums/type.model";

export interface IOperation{
    id?: number;
    date?: Date;
    montant?: number;
    typeOperation?: Type;
    compte?: ICompte;
}

export class Operation implements IOperation{
    constructor(
        public id?: number,
        public date?: Date,
        public montant?: number,
        public typeOperation?: Type,
        public compte?: ICompte
    )
    {}
}