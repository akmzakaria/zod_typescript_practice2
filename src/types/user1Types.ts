import { user1Schema } from '../schemas/user1Schema'
import { z } from 'zod'

export type User = z.infer<typeof user1Schema>
