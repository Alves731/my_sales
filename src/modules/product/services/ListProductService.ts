import { productsRepositories } from "../database/repositories/ProductsRepositories.js";
import { Product } from '../database/entities/Product.js'


export default class ListProductService {
  async execute(): Promise<Product[]> {
    const product = await productsRepositories.find();
    return product
  }
}