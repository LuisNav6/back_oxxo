import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateSaleDto } from 'src/dtos/sales/request/createSale.dto';
import { ISales } from 'src/interfaces/sales';
import { SalesService } from './sales.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role.enum';


@Controller('sales')
@UseGuards(AuthGuard)
export class SalesController {
    constructor(private readonly SaleService: SalesService) {  }

    @Get()
    @Roles(Role.SOPORTE)
    async findAll(): Promise<ISales[]> {
        return this.SaleService.findAll();
    }
    @Get(':id')
    @Roles(Role.SOPORTE)
    async findOne(@Param('id') id: string): Promise<ISales> {
        return this.SaleService.findOne(id);
    }

    @Get('byBranchOffice/:branch_office_id')
    @Roles(Role.SOPORTE, Role.ADMIN)
    async findByBranchOffice(@Param('branch_office_id') branch_office_id: string): Promise<ISales[]> {
        return this.SaleService.findByBranchOffice(branch_office_id);
    }

    @Post()
    async create(@Body() createSaleDto: CreateSaleDto): Promise<ISales> {
        return this.SaleService.create(createSaleDto);
    }

}
