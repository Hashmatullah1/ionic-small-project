import { Component,ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/*
  Generated class for the Slider component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {

  @ViewChild(Slides) slides: Slides;

  constructor() {
  }

  changeSlide(container:HTMLElement){
    container.style.background = `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('assets/bus${this.slides.getActiveIndex()%5+1}.jpg')`;
    container.style.backgroundSize = 'cover';
  }

}
