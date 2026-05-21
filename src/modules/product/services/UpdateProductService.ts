import AppError from "@shared/errors/AppError.js";
import { Product } from "../database/entities/Product.js";
import { productsRepositories } from "../database/repositories/ProductsRepositories.js";

interface IUpdateProduct {
  id: string
  name: string
  price: number
  quantity: number
}

export default class UpdateProductService {
  async excute({ id, name, price, quantity } : IUpdateProduct): Promise<Product> {
    const product = await productsRepositories.findById(id);

    if (!product) {
      throw new AppError('Product not found.',400);
    }

    const productExists = await productsRepositories.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name', 409)
    }

    product.name = name
    product.price = price
    product.quantity = quantity

    await productsRepositories.save(product)

    return product
  }
}