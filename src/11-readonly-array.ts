// sirve para no mutar el array original, solo me permitira usar metodos que no me mutarian dicho array
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]
numbers.push(6) // no se puede hacer porque es un array de solo lectura
numbers.filter(() =>{}) // este si podria usar
