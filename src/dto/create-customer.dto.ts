import {IsNumber, IsString } from "class-validator";

export class CustomerDto {
    @IsString()
    name:string;

    @IsNumber()
    age:number;

    @IsString()
    document:string;
}