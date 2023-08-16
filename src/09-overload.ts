// estos seran los inputs
// Nolo => [N,o,l,o] => string => string[]
// [N,o,l,o] => Nolo => string[] => string

//sobrecarga
export function parseStr(input: string): string[]
export function parseStr(input: string[]): string

export function parseStr(input: unknown): unknown{
  if (Array.isArray(input)) {
    return input.join('')
  } else if (typeof input === 'string') {
    return input.split('')
  }
}

const resArray = parseStr('Nolo')
resArray.reverse()

const resString = parseStr(['N', 'o', 'l', 'o'])
resString.toLowerCase()

console.log(resArray)
console.log(resString)
