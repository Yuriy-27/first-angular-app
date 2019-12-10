export class Certificate {
    id: number;
    image: string;
    title: string;
    constructor(certificateId: number, certificateTitle: string, certificateImage: string) {
        this.id = certificateId;
        this.title = certificateTitle;
        this.image = certificateImage;
    }
}
