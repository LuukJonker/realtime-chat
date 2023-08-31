import app from './config'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const storage = getStorage(app)

export const uploadProfilePicture = async (file: File, id: string) => {
  const storageRef = ref(storage, `profilePictures/${id}`)
  const result = await uploadBytes(storageRef, file)
  const url = await getDownloadURL(result.ref)
  return url
}

export default storage
