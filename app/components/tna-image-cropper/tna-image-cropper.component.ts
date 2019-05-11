import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'tna-image-cropper',
    templateUrl: './tna-image-cropper.component.html',
    styleUrls: ['./tna-image-cropper.component.scss']
})
export class TnaImageCropperComponent implements OnInit {
    data: any;
    addingPicture = false;
    uploading = false;
    cropperSettings: CropperSettings;
    @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

    constructor(private snackBar: MdSnackBar,
                private dataService: DataService,
                private dialogRef: MdDialogRef<TnaImageCropperComponent>) {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.keepAspect = false;

        this.cropperSettings.croppedWidth = 300;
        this.cropperSettings.croppedHeight = 300;

        this.cropperSettings.rounded = true;
        this.cropperSettings.minWithRelativeToResolution = true;

        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.preserveSize = true;
        this.cropperSettings.compressRatio = 0.8;

        this.data = {};
    }

    ngOnInit() {
    }

    closeDialog() {
        this.dialogRef.close();
    }

    /**
     * Used to send image to cropper
     * @param $event
     */
    fileChangeListener($event) {
        const image = new Image();
        const file: File = $event.target.files[0];
        const myReader: FileReader = new FileReader();
        const that = this;
        this.addingPicture = true;
        myReader.onloadend = function (loadEvent: any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
            that.addingPicture = false;
        };
        myReader.readAsDataURL(file);
    }

    emitCroppedFile() {
        if (!this.data.image) {
            this.snackBar.open('No images found. Upload again.', null, { duration: 5000 });
        }
        this.uploading = true;
        this.urlToFile(this.data.image, Math.floor((Math.random() * 1000) + 1) + '.png', 'image/png')
            .then(file => {
                this.dataService.uploadAvatar(file)
                    .then(res => {
                        console.log(res);
                        this.closeDialog();
                    })
                    .catch(err => console.log(err));
            });
    }

    urlToFile(url, filename, mimeType) {
        return (fetch(url)
                .then(function (res) { return res.arrayBuffer(); })
                .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
        );
    }
}
