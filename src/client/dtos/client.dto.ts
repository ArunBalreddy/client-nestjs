import { IsString, IsNotEmpty, IsPositive, IsOptional, IsEmail, IsDate, Matches } from "class-validator";


export class CreateClientDto {

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsOptional()
    @IsPositive()
    fee: number;

    @IsOptional()
    @IsDate()
    from_date: Date;

    @IsOptional()
    @IsDate()
    to_date: Date;

    @IsNotEmpty()
    job_department_id: number;

    @IsString()
    @IsNotEmpty()
    job_code: string;


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    client_code: string;

    @IsNotEmpty()
    category_id: number;

    @IsDate()
    @IsNotEmpty()
    incorporation_date: Date;

    @IsOptional()
    @IsString()
    gstn: string;

    @IsOptional()
    @IsString()
    pan: string;

    @IsOptional()
    @IsString()
    tin: string;

    @IsOptional()
    @IsString()
    cin: string;

    @IsOptional()
    @IsString()
    website: string;


    @IsString()
    @IsNotEmpty()
    location: string;

    @IsString()
    @IsNotEmpty()
    location_type: string;

    @IsString()
    @IsNotEmpty()
    address_1: string;

    @IsString()
    @IsOptional()
    address_2: string;


    @IsNotEmpty()
    pincode: number;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    std: string;

    @IsString()
    land_line: string;

    @IsNotEmpty()
    department_id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsOptional()
    @IsString()
    middle_name: string;

    @IsNotEmpty()
    @Matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)
    mobile_number: string;

}

export class UpdateClientDto {
    @IsOptional()
    @IsPositive()
    fee: number;

    @IsOptional()
    @IsDate()
    from_date: Date;

    @IsOptional()
    @IsDate()
    to_date: Date;

    @IsOptional()
    @IsNotEmpty()
    job_department_id: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    job_code: string;


    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    client_code: string;

    @IsOptional()
    @IsNotEmpty()
    category_id: number;

    @IsOptional()
    @IsDate()
    @IsNotEmpty()
    incorporation_date: Date;

    @IsOptional()
    @IsString()
    gstn: string;

    @IsOptional()
    @IsString()
    pan: string;

    @IsOptional()
    @IsString()
    tin: string;

    @IsOptional()
    @IsString()
    cin: string;

    @IsOptional()
    @IsString()
    website: string;

    @IsOptional()
    @IsString()
    std: string;

    @IsOptional()
    @IsString()
    land_line: string;

    @IsOptional()
    @IsNotEmpty()
    department_id: number;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsOptional()
    @IsString()
    middle_name: string;

    @IsOptional()
    @IsNotEmpty()
    @Matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)
    mobile_number: string;


}

export class UpdateClientLocationDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    location: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    location_type: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    address_1: string;

    @IsOptional()
    @IsString()
    @IsOptional()
    address_2: string;

    @IsOptional()
    @IsNotEmpty()
    pincode: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    city: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    state: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    country: string;

}

