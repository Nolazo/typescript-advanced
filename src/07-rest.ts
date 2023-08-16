import { User, ROLES } from './01-enums'

const currentUser: User = {
  username: 'nolox',
  role: ROLES.ADMIN
}

//rest params
export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}
//lo bkn es que puedo añadir la cantidad de roles que quiera comparar
//de esta forma no tengo que hacer un if por cada parametro que quiera comparar
const response = checkRole(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER)
console.log(response)
