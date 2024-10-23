// url 확인
export const validateURL = (url: string) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

// 이미지 가로 세로 확인 (true : 가로)
export const checkImageOrientation = (url: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            const isLandscape = img.width > img.height;
            resolve(isLandscape);
        };
        img.onerror = (error) => reject(error);
    });
};
