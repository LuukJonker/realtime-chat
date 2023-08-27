import app from './config'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'

const auth = getAuth(app)

// Google Sign In
const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)

// Email and Password Sign In
export const signInWithEmailAndPasswordHandler = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
export const registerWithEmailAndPasswordHandler = (
  email: string,
  password: string,
  displayName: string,
  photoUrl: string
) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoUrl
      })

      return { user, error: null }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      return { user: null, error: { errorCode: errorCode, errorMessage: errorMessage } }
    })
}
export const logout = () => auth.signOut()

export default auth
