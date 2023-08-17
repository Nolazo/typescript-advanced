import { faker } from '@faker-js/faker'
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto'
import { Product } from './product.model'

export const products: Product[] = []

// el dto me servira para asignar los datos que la bd se encarga de crear de forma automatica
// ejemplo, el id, el createdAt, etc. En este caso al ser datos mock lo creamos en el addProduct
export const addProduct = (data: CreateProductDto): Product => {
  const newProduct ={
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}

// id: Product['id'] que el id este entre [] me indica el tipado, no el valor
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}

export const findProduts = (dto: FindProductDto): Product[] => {
  return products.filter(item => item.id === dto.id)
}
