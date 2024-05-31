import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from 'src/dtos/sales/request/createSale.dto';
import { ISales } from 'src/interfaces/sales';
import { SalesService } from './sales.service';



@Controller('sales')
export class SalesController {
    constructor(private readonly SaleService: SalesService) {  }

    @Get()
    async findAll(): Promise<ISales[]> {
        return this.SaleService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ISales> {
        return this.SaleService.findOne(id);
    }

    @Post()
    async create(@Body() createSaleDto: CreateSaleDto): Promise<ISales> {
        return this.SaleService.create(createSaleDto);
    }

}
