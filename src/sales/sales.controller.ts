import { Controller, Post, Body } from '@nestjs/common';
import { SaleService } from './sales.service';
import { CreateSaleDto } from '../dtos/sales/request/createSale-request.dto';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SaleService) {}

    @Post()
    async createSale(@Body() createSaleDto: CreateSaleDto) {
        return this.salesService.create(createSaleDto);
    }
}
