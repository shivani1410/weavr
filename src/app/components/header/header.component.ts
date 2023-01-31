import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  sticky: boolean = false;
  ngAfterViewInit(): void {
    this.addSticky();
  }
  addSticky() {
    const sectionHero = document.querySelector('.hero')!;
    console.log(sectionHero);
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        if (!ent.isIntersecting) {
          this.sticky = true;
        } else if (ent.isIntersecting) {
          this.sticky = false;
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-300px',
      }
    );
    obs.observe(sectionHero);
  }
}
