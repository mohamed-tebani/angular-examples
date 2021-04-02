import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

const MIDDLE_LINE = 230;

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit {

  fullHeight = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  onPanUp(event, divSwipper): void {
    if (!this.fullHeight) {
      console.log('panup', Math.abs(event.deltaY));
      this.renderer.setStyle(divSwipper, 'height', 'calc(50% + ' + (Math.abs(event.deltaY)) + 'px)');
    }
  }

  onPanDown(event, divSwipper): void {
    if (this.fullHeight) {
      console.log('pandown', Math.abs(event.deltaY));
      this.renderer.setStyle(divSwipper, 'height', 'calc(100% - ' + (Math.abs(event.deltaY)) + 'px)');
    }
  }

  onPanEnd(event, divSwipper): void {
    console.log('panend', event);
    const isPanUp: boolean = event.deltaY < 0;
    if ((isPanUp && !this.fullHeight) || (!isPanUp && this.fullHeight)) {
      this.fullHeight = (isPanUp && (Math.abs(event.deltaY) > MIDDLE_LINE)) || (!isPanUp && !(Math.abs(event.deltaY) > MIDDLE_LINE));
      this.renderer.setStyle(divSwipper, 'height', this.fullHeight ? '100%' : '50%');
    }
  }
}
