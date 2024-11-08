import { IPropertyBase } from "../interfaces/IPropertyBase";

export class Property implements IPropertyBase{
    id!: number;
    sellRent!: number;
    name!: string;
    propertyType!: string;
    furnishingType!: string;
    price!: number;
    bhk!: number;
    builtArea!: number;
    city!: string;
    readyToMove!: boolean;
    photo?: string | undefined;
    estPossessionOn?: string | undefined;
    CarpetArea?: number;
    Address: string | null = null;
    Address2?: string;
    FloorNo?: string;
    TotalFloor?: string;
    AOP?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: number;
    Maintenance?: number;
    Possession?: string;
    Image?: string;
    Description?: string;
    PostedOn: string | null = null;
    PostedBy: number | null = null;
}
