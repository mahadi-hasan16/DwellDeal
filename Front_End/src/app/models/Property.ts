import { IPropertyBase } from "../interfaces/IPropertyBase";

export class Property implements IPropertyBase{
    id!: number;
    sellRent!: number;
    name!: string;
    propertyTypeId!: number;
    propertyType!: string;
    bhk!: number;
    furnishingTypeId!: number;
    furnishingType!: string;
    price!: number;
    builtArea!: number;
    carpetArea?: number;
    address!: string;
    address2?: string;
    cityId!: number;
    city!: string;
    floorNo?: string;
    totalFloors?: string;
    readyToMove!: boolean;
    age?: string;
    mainEntrance?: string;
    security?: number;
    gated?: boolean;
    maintenance?: number;
    estPossessionOn!: string | null;
    photo?: string;
    description?: string;
    // photos?: Photo[];
}
