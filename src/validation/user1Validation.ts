import { user1Result } from '../schemas/user1Schema'

export const user1Validate = () => {
  if (!user1Result.success) {
    console.log('success:', user1Result.success)
    console.log(user1Result.error.issues[0]?.message)
  } else {
    console.log('success:', user1Result.success)
    console.log('data:', user1Result.data)
  }
}
