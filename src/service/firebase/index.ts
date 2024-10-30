import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage';
import { storage } from './firebase';
import dayjs from 'dayjs';
export async function uploadImage(image: File) {
    const timestamp = dayjs().format('YYYYMMDDHHmmss');
    const storageRef = await ref(storage, `image/${timestamp}-${image.name}`);
    const uploadImage = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(uploadImage.ref);
    return url;
}

export async function deleteImage(url: string) {
    const filePath = url.split('/o/')[1].split('?')[0].replace('%2F', '/');
    const storageRef = ref(storage, filePath);
    try {
        await deleteObject(storageRef);
        // console.log('이미지 삭제 성공');
    } catch (error) {
        console.log(error);
    }
}
