import { BadRequestException, Body, ConflictException, Controller, Get, Post } from "@nestjs/common";
import { CustomerDto } from "src/dto/create-customer.dto";
import { Customer } from "src/interfaces/customer.interface";
import { CustomerService } from "src/services/customer-service";


@Controller('customers')
export class CustomerController {

    constructor(private readonly customerService: CustomerService){}

    @Get()
    getCustomers():Customer[]{
        return this.customerService.findAll();
    }

    @Post()
    createCustomer(@Body() createCustomerDto : CustomerDto){
        this.customerService.createCustomer(createCustomerDto);
    }

}
