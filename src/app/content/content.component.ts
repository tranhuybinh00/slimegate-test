import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  images = ['../../assets/images/MicrosoftTeams-image (1).png', '../../assets/images/MicrosoftTeams-image.png'];
  items = [
    {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }, {
      src: this.images[Math.floor(Math.random() * this.images.length)],
      name: Math.floor(Math.random() * 100)
    }
  ];
}
