import {ColorModule, fa, faker} from '@faker-js/faker'

import { addProduct, updateProduct, products, findProduts } from './products/product.services'

for (let index = 0; index < 10; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['tech','sport','beauty','school'],2),
    size: faker.helpers.arrayElement(['S','M','L','XL']),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({
      min: 10,
      max: 100
    }),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products)

// uso de updateProduct
// const product = products[0]
// updateProduct(product.id, {
//   title: 'New title',
//   stock: 100,
// })


// // uso de findProduts
// findProduts({
//   stock: 10,
// })
