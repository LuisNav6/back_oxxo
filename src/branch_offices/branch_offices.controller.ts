import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { BranchOfficesService } from './branch_offices.service';
import { CreateBranchOfficeDto} from '../dtos/branch_offices/request/CreateBranchOfficeDto';
import { UpdateBranchOfficeDto} from '../dtos/branch_offices/request/UpdateBranchOfficeDto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('branch-offices')
@UseGuards(AuthGuard)
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
  @Roles(Role.SOPORTE)
  create(@Body() createBranchOfficeDto: CreateBranchOfficeDto) {
    return this.branchOfficesService.create(createBranchOfficeDto);
  }

  @Put(':id')
  @Roles(Role.SOPORTE)
  update(@Param('id') id: string, @Body() updateBranchOfficeDto: UpdateBranchOfficeDto) {
    return this.branchOfficesService.update(id, updateBranchOfficeDto);
  }

  @Delete(':id')
  @Roles(Role.SOPORTE)
  remove(@Param('id') id: string) {
    return this.branchOfficesService.delete(id);
  }
}