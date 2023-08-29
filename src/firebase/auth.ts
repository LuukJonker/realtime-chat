import app from './config'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { uploadProfilePicture } from './storage'
import { createUser, type UpdateUserParams } from './firestore'

const auth = getAuth(app)

export const onAuthStateChanged = (callback: (user: any) => void) => {
  return auth.onAuthStateChanged(callback)
}

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
  profilePicture: File | null
) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user

      let photoURL = undefined
      if (profilePicture) {
        // Await the upload of the profile picture, because we need the url to update the profile
        await uploadProfilePicture(profilePicture, user.uid)
          .then((url) => {
            photoURL = url
          })
          .catch((error) => {
            console.log('error handled here', error)
          })
      }

      await Promise.all([
        updateProfile(user, {
          displayName: displayName,
          photoURL
        }),
        createUser(user.uid, displayName, photoURL)
      ])

      return { user, error: null }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log('Error occurred in register', errorCode, errorMessage)

      return { user: null, error: { errorCode: errorCode, errorMessage: errorMessage } }
    })
}
export const logout = () => auth.signOut()

export default auth
