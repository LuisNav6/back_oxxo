import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSaleDto } from 'src/dtos/sales/request/createSale.dto';
import { ISales } from 'src/interfaces/sales';


@Injectable()
export class SalesService {
    constructor(
        @Inject('SALES_MODEL')
        private SalesModel: Model<ISales>,
    ) { }

    async findAll(): Promise<ISales[]> {
        return this.SalesModel.find().exec();
    }

    async findOne(id: string): Promise<ISales> {
        return this.SalesModel.findById(id).exec();
    }

    async create(createSaleDto: CreateSaleDto): Promise<ISales> {
        const newInventory = new this.SalesModel(createSaleDto);
        return newInventory.save();
    }


}
