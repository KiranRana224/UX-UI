import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-indicator',
  templateUrl: './scroll-indicator.component.html',
  styleUrls: ['./scroll-indicator.component.scss'],
})
export class ScrollIndicatorComponent implements OnInit {
  scrollProgress = 0;

  constructor() {}

  ngOnInit(): void {
    // this.updateScrollProgress();
    window.onload = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
      this.updateScrollProgress(); // Update the scroll progress after page load
    };
  }
  ngAfterViewInit(): void {
    // Scroll to the top once the view is initialized
    window.scrollTo(0, 0);
    this.updateScrollProgress(); // Update scroll progress after page load
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollProgress();
  }

  // Function to calculate the scroll progress
  private updateScrollProgress() {
    const scrollPosition = window.scrollY; // Scroll position from the top
    const windowHeight = window.innerHeight; // Height of the visible area
    const docHeight = document.documentElement.scrollHeight; // Height of the entire document

    // Calculate the scroll percentage
    // this.scrollProgress = (scrollPosition / (docHeight - windowHeight)) * 100;
    if (docHeight > windowHeight) {
      this.scrollProgress = (scrollPosition / (docHeight - windowHeight)) * 100;
    } else {
      this.scrollProgress = 0; // If the document height is less than the window height, no scroll.
    }
  }
}
