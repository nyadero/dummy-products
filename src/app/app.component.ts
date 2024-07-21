import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummy';

  isLoading = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.checkCssLoaded();
  }

  checkCssLoaded() {
    const links = Array.from(document.getElementsByTagName('link'));
    let loadedCount = 0;

    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount === links.length) {
        this.isLoading = false;
      }
    };

    links.forEach(link => {
      if (link.rel === 'stylesheet') {
        if (link.sheet) {
          checkLoaded();
        } else {
          this.renderer.listen(link, 'load', checkLoaded);
        }
      }
    });

    // Fallback in case some stylesheets are cached and 'load' event is not triggered
    setTimeout(() => {
      this.isLoading = false;
    }, 5000); // Adjust the timeout duration as needed
  }
}
