import { AppDataSource } from '@shared/typeorm/data-source.js'
import { Product } from '../entities/Product.js'

export const productsRepositories = AppDataSource.getRepository(Product).extend({
  async findByName(name: string): Promise<Product | null> {
    return this.findOneBy({ name });
  },
  async findById(id: string): Promise<Product | null> {
    return this.findOneBy({ id });
  },
});
