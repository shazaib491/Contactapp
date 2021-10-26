import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  imgUrl;
  imgArr: any[] = [];
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  constructor(private camera: Camera) {}

  getCamera() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
      })
      .then((res) => {
        this.imgUrl = "data:image/jpeg;base64," + res;
        console.log(this.imgUrl);
        this.imgArr.push({ image: this.imgUrl,
        title:"Images"
        });
        console.log(this.imgArr);
        localStorage.setItem("image", JSON.stringify(this.imgArr));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getGallery() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then((res) => {
        this.imgUrl = "data:image/jpeg;base64," + res;
        localStorage.setItem("image", JSON.parse(this.imgUrl));
      })

      .catch((e) => {
        console.log(e);
      });
  }

  // clickCamera(){
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //    }, (err) => {
  //     // Handle error
  //    });
  // }
}
