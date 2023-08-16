type Sizes = 'S' | 'M' | 'L' | 'XL'
//interface funciona igual que type, solo que con interface podemos heredar otras interfaces
interface Product {
  id: string
  title: string
  createdAt: Date
  stock: number
  size?: Sizes
}
