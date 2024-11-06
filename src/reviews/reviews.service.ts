import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createreviewDto: Prisma.ReviewCreateInput) {
    await this.databaseService.review.create({ data: createreviewDto });
  }

  async findAll() {
    return await this.databaseService.review.findMany({});
  }

  async findOne(id: number) {
    return await this.databaseService.review.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatereviewDto: Prisma.ReviewUpdateInput) {
    return await this.databaseService.review.update({
      where: { id },
      data: updatereviewDto,
    });
  }

  async remove(id: number) {
    return await this.databaseService.review.delete({ where: { id } });
  }
}
