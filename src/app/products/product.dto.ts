import { Product } from './product.model'

//el omit, es para omitir los valores que no seran insertados por el cliente, si no que la genera el backend
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

//el pick es lo contrario del omit, yo elijo los atributos en concreto con los que quiero trabajar
type example = Pick<Product, 'color' | 'price'>

// partial pone automaticamente todos los atributos como opcionales
// el Partial se le aplica al CreateProductDto porque ya tiene cocmo reglas que omita los
// valores que no quiero que se puedan editar (id, createdAt, updatedAt)
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//el required es lo contrario del partial, pone todos los atributos en obligarorio
type example2 = Required<Product>

//readonly pq solo necsito encontrar el valor, no modificarlo
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  // el readonly array para que no me permita usar funciones que muten al array
  readonly tags: ReadonlyArray<string>
}
