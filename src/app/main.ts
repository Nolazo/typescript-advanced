import { addProduct } from './products/product.services'

addProduct({
  id: '1',
  title: 'Product 1',
  createdAt: new Date(),
  stock: 12,
  category: {
    id: '1',
    createdAt: new Date(),
    name: 'category 1',
  }
})
