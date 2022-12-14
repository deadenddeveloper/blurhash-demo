import { decode, encode } from 'blurhash';

const getDataUrlFromArr = (arr: Uint8ClampedArray, w: number, h: number) => {
    if (typeof w === 'undefined' || typeof h === 'undefined') {
        w = h = Math.sqrt(arr.length / 4);
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = w;
    canvas.height = h;

    const imgData = ctx?.createImageData(w, h);
    imgData?.data.set(arr);
    ctx?.putImageData(imgData as ImageData, 0, 0);

    return canvas.toDataURL();
}

const getImgFromDataUrl = (data: string) => {
    const img = document.createElement('img');
    img.src = data;
    return img;
}

const getImgFromArr = (arr: Uint8ClampedArray, w: number, h: number) => {
    return getImgFromDataUrl(getDataUrlFromArr(arr, w, h));
}

export const blurhashToBase64 = (blurhash: string, width: number, height: number) => {
    const pixels = decode(blurhash, width, height);
    const image = getImgFromArr(pixels, width, height);
    return image.src;
}

const loadImage = async (src: string) =>
    new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = (...args) => reject(args)
        img.src = src
    })

const getImageData = (image: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context?.drawImage(image, 0, 0);
    return context?.getImageData(0, 0, image.width, image.height);
};

export const base64ToBlurhash = async (imageUrl: string) => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image as HTMLImageElement);
    return imageData ? encode(imageData.data, imageData.width, imageData.height, 4, 4) : '';
};
