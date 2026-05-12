import { z } from 'zod'
import { user1Data } from '../userData/user1Data'

export const user1Schema = z.object({
  name: z.string().min(2, 'Name cannot be less than two characters'),
  email: z.email('enter a valid email'),
  age: z.number().min(0, 'Age cannot be a negative number'),
  isStudent: z.boolean(),
})

export const user1Result = user1Schema.safeParse(user1Data)
