import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  aboutList = [
    {
      head: 'Generate more revenue from existing customers',
      text: 'Embedding financial services can more than double your revenue per user.',
    },
    {
      head: 'Acquire new customers',
      text: '85% of companies report that embedding financial services helps them to acquire new customers without increasing marketing spend.',
    },
    {
      head: 'Retain customers for longer',
      text: 'Bringing payment flows into your product improves user experience and satisfaction while axing churn.',
    },
  ];
  activeIndex = [false, false, false];
  openAccordian: boolean = false;
  toggleAccordian(index: number) {
    this.activeIndex[index] = !this.activeIndex[index];
    for (let j = 0; j < 3; j++) {
      if (index != j) {
        this.activeIndex[j] = false;
      }
    }
    this.openAccordian = !this.openAccordian;
  }
}
