// branch_offices.service.ts
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IBranchOffice } from '../interfaces/IBranchOffice';
import { CreateBranchOfficeDto} from '../dtos/branch_offices/request/CreateBranchOfficeDto';
import { UpdateBranchOfficeDto} from '../dtos/branch_offices/request/UpdateBranchOfficeDto';

@Injectable()
export class BranchOfficesService {
  constructor(
    @Inject('BRANCH_OFFICE_MODEL')
    private branchOfficeModel: Model<IBranchOffice>,
  ) {}

  async create(createBranchOfficeDto: CreateBranchOfficeDto): Promise<IBranchOffice> {
    const createdBranchOffice = new this.branchOfficeModel(createBranchOfficeDto);
    return createdBranchOffice.save();
  }

  async findAll(): Promise<IBranchOffice[]> {
    return this.branchOfficeModel.find().exec();
  }

  async findById(id: string): Promise<IBranchOffice> {
    const branchOffice = await this.branchOfficeModel.findById(id).exec();
    if (!branchOffice) {
      throw new NotFoundException('Oficina no encontrada');
    }
    return branchOffice;
  }

  async update(id: string, updateBranchOfficeDto: UpdateBranchOfficeDto): Promise<IBranchOffice> {
    const updatedBranchOffice = await this.branchOfficeModel.findByIdAndUpdate(id, updateBranchOfficeDto, { new: true }).exec();
    if (!updatedBranchOffice) {
      throw new NotFoundException('Oficina no encontrada');
    }
    return updatedBranchOffice;
  }

  async delete(id: string): Promise<void> {
    const deletedBranchOffice = await this.branchOfficeModel.findByIdAndDelete(id).exec();
    if (!deletedBranchOffice) {
      throw new NotFoundException('Oficina no encontrada');
    }
  }
}
