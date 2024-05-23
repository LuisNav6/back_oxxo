import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BranchOfficesService } from './branch_offices.service';
import { CreateBranchOfficeDto} from '../dtos/branch_offices/request/CreateBranchOfficeDto';
import { UpdateBranchOfficeDto} from '../dtos/branch_offices/request/UpdateBranchOfficeDto';

@Controller('branch-offices')
export class BranchOfficesController {
  constructor(private readonly branchOfficesService: BranchOfficesService) {}

  @Get()
  findAll() {
    return this.branchOfficesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branchOfficesService.findById(id);
  }

  @Post()
  create(@Body() createBranchOfficeDto: CreateBranchOfficeDto) {
    return this.branchOfficesService.create(createBranchOfficeDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBranchOfficeDto: UpdateBranchOfficeDto) {
    return this.branchOfficesService.update(id, updateBranchOfficeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.branchOfficesService.delete(id);
  }
}