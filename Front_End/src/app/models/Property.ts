export class Property{
    Id: number = 0;
    SellRent: number = 0;
    Name: string | null = null;
    PType: string | null = null;
    BHK: number = 0;
    FType: string | null = null;
    Price: number = 0;
    BuiltArea: number = 0;
    CarpetArea?: number;
    Address: string | null = null;
    Address2?: string;
    City: string | null = '';
    FloorNo?: string;
    TotalFloor?: string;
    RTM: number = 0;
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
