export const createProduct = (
  id: string | number,
  //el = true es para asignar el valor por defecto en caso de que no se incluya
  isNew: boolean = true,
  stock: number = 10
) => {
  return{
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1)
