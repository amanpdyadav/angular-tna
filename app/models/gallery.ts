export class TnaGallery {
    owner: string;
    description: string;
    title: string;
    pictures?: [string];
    uid?: string;
}

export class TnaGalleryPicture {
    url: string;
    coverPhoto: string;
    gallery: string;
    uid?: string;
}
