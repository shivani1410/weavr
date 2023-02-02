import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent {
  aboutList = [
    {
      head: 'Ready-made solutions',
      text: 'Our plug-ins bring together everything you need to embed finance without having to factor in expensive build time, sourcing suppliers or managing complex processes.',
    },
    {
      head: 'No complex coding required',
      text: 'We’ve created plug-ins that are use-case specific for maximum context and we radically simplify implementation with a low-code and intuitive interface. As a result, you avoid the time, cost and testing that comes with building your own solution.',
    },
    {
      head: 'Compliance as a Service',
      text: 'There’s no need to apply for your own financial-services licence. We handle compliance, regulation and financial-data security so you can focus on what you do best - building innovation.',
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
