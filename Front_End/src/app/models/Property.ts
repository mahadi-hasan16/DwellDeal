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
    estPossessionOn!: Date;
    carpetArea?: number;
    address: string | null = null;
    address2?: string;
    floorNo?: string;
    totalFloors?: string;
    aop?: string;
    mainEntrance?: string;
    security?: number;
    gated?: number;
    maintenance?: number;
    possession?: string;
    image?: string;
    description?: string;
    postedOn: string | null = null;
    postedBy: number | null = null;
}
