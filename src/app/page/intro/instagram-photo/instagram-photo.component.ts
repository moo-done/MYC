import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-photo',
  templateUrl: './instagram-photo.component.html',
  styleUrls: ['./instagram-photo.component.css']
})
export class InstagramPhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly instagram_imgs1 : string[] =
    [
      'assets/introImg/instargram_img/IMG_6291%202.JPG',
      'assets/introImg/instargram_img/IMG_6282%202.JPG',
      'assets/introImg/instargram_img/IMG_6283%202.JPG',
      'assets/introImg/instargram_img/IMG_6284%202.JPG',
      'assets/introImg/instargram_img/IMG_6286%202.JPG',
    ];


  readonly instagram_imgs2 : string[] =
    [
      'assets/introImg/instargram_img/IMG_6294%202.JPG',
      'assets/introImg/instargram_img/IMG_6297%202.JPG',
      'assets/introImg/instargram_img/IMG_6298%202.JPG',
      'assets/introImg/instargram_img/IMG_6299%202.JPG',
      'assets/introImg/instargram_img/IMG_6300%202.JPG',
    ];
}
