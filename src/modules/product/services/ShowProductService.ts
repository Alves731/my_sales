import AppError from "@shared/errors/AppError.js";
import { productsRepositories } from "../database/repositories/ProductsRepositories.js";
import { Product } from "../database/entities/Product.js";

interface IShowProduct {
  id: string;
}

export default class ShowProductService {
  async execute({ id } : IShowProduct) : Promise<Product> {
    const product = await productsRepositories.findById(id)

    if (!product) {
      throw new AppError('Product not found.', 400);
    }

    return product
  }
}