import { z } from 'zod'
import { user1Data } from './userData/user1Data'
import { user1Result, user1Schema } from './schemas/user1Schema'
import { user1Validate } from './validation/user1Validation'

// interface User {
//   name: string
//   age: number
//   isStudent: boolean
// }

// -----------------------THIS USER1DATA IS MOVED TO THE USER1DATA.TS FILE---------------------------

// const user1Data: User = {
//   name: 'AKM',
//   age: 12,
//   isStudent: true,
// }

// console.log(user1Data)

// -----------------------THIS USER1SCHEMA IS MOVED TO THE USER1SCHEMA.TS FILE------------------------

// const user1Schema = z.object({
//   name: z.string().min(2, 'Name cannot be less than two characters'),
//   age: z.number().min(0, 'Age cannot be a negative number'),
//   isStudent: z.boolean(),
// })

// const result = user1Schema.safeParse(user1Data)

// console.log(user1Result)

user1Validate()
