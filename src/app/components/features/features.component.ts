import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  gridData = [
    {
      heading: 'Cards',
      colHead1: 'Virtual cards',
      colData1:
        'Issue Mastercard virtual cards in real time and in the currency you need (currently GBP, EUR or USD). We support both one-time and multiple-use cards.',
      colImg1:'https://www.weavr.io/wp-content/uploads/2022/10/Virtual-cards.svg',
      colHead2: 'Physical cards',
      colData2:
        'Issue Mastercard contactless plastic cards to your employees or customers - bespoke to match your branding.',
      colImg2:'https://www.weavr.io/wp-content/uploads/2022/10/Physical-cards.svg'
      },
      {
        heading: 'Compliance and security',
        colHead1: 'Embeddable onboarding',
        colData1:
          "Simply style and embed our customer on-boarding widgets and we'll handle document collection and verification. ",
        colImg1:'https://www.weavr.io/wp-content/uploads/2022/10/Embeddable-onboarding.svg',
        colHead2: 'Secure UI tools',
        colData2:
          'UI components to integrate sensitive finance-data exchange into your user interface without the burden of PCI DSS security certification.',
        colImg2:'https://www.weavr.io/wp-content/uploads/2022/10/Secure-UI-tools.svg'
        },
        {
          heading: 'IBANs',
          colHead1: 'Instantly generate IBANs',
          colData1:
            "Open IBAN-enabled accounts instantly in GBP and EUR. We support both consumer and business accounts, subject to status.",
          colImg1:'https://www.weavr.io/wp-content/uploads/2022/10/Instantly-generate-IBAN.svg',
          colHead2: 'Credit transfers',
          colData2:
            'We support in-bound and out-bound credit transfers via UK Faster Payments (GBP), SEPA (EUR) and SWIFT (multiple currencies)',
          colImg2:'https://www.weavr.io/wp-content/uploads/2022/10/Credit-Transfers.svg'
          },
          {
            heading: 'Data and reporting',
            colHead1: 'Interactive data manager',
            colData1:
              "Access and interact with all the financial data your embedded-finance solution generates. Visualisation helps you find and act on the data, while avoiding back-breaking compliance burdens.",
            colImg1:'https://www.weavr.io/wp-content/uploads/2022/10/Interactive-data-manager.svg',
            colHead2: 'Transaction reporting',
            colData2:
              'Easily generate and export transaction statements to help with reporting and reconciliation. Send real-time notifications.',
            colImg2:'https://www.weavr.io/wp-content/uploads/2022/10/Transaction-Reporting.svg'
            }
  ];
}
