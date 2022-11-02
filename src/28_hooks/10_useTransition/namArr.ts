import { faker } from '@faker-js/faker'

export const generateNamesArr = () => {
  const arr = Array(10000).fill('').map((item) => faker.name.fullName())                                                     
  return arr
}

export default generateNamesArr
