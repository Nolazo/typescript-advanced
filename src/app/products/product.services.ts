import { Product } from './product.model'

const product: Product[] = []

export const addProduct = (data: Product) => {
  product.push(data)
}
