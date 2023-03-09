import { Customer } from "./customer";

export class Pets {
    id?: number | string;
    name?: string;
    weight?: number;
    category?: string;
    entryDate?: Date | string
    customer?: Customer
    treatments?: Treatment[];
}

export class Treatment {
    id?: number | string;
    type?: string;
    date?: Date
    status?: string;
    price?: number;
    pet?:Pets;
}