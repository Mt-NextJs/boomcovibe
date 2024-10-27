import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
export async function uploadImage(image: File) {
    const storageRef = await ref(storage, `image/${image.name}`);
    const uploadImage = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(uploadImage.ref);
    return url;
}
