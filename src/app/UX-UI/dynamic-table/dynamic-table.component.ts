import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  reqName: string;
  totalReq: string;
  approved?: string;
  notApproved: string;
  followupRequested: string;
  pending: string;
  smeOwner: string;
  position: number;
  weight: number;
  symbol: string;
  partial: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // tslint:disable-next-line: max-line-length
  {
    position: 1,
    reqName: 'Test',
    totalReq: '1',
    approved: '20',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 2,
    reqName: 'Test',
    totalReq: '',
    approved: '10',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 3,
    reqName: 'Test',
    totalReq: '9',
    approved: '20',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 4,
    reqName: 'Test',
    totalReq: '',
    approved: '20',
    notApproved: '1345',
    followupRequested: 'Yes',
    pending: '6',
    smeOwner: 'Reena Patel',
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 5,
    reqName: 'Test',
    totalReq: '',
    approved: '',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 6,
    reqName: 'Test',
    totalReq: '',
    approved: '20',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 7,
    reqName: 'Test',
    totalReq: '',
    approved: '10',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '0',
    smeOwner: 'Reena Patel',
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 8,
    reqName: 'Test',
    totalReq: '',
    approved: '20',
    notApproved: '12',
    followupRequested: 'Yes',
    pending: '0',
    smeOwner: 'Reena Patel',
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 9,
    reqName: 'Test',
    totalReq: '',
    approved: '20',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    partial: 5,
  },
  // tslint:disable-next-line: max-line-length
  {
    position: 10,
    reqName: 'Test',
    totalReq: '',
    approved: '35',
    notApproved: '',
    followupRequested: 'Yes',
    pending: '10',
    smeOwner: 'Reena Patel',
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    partial: 5,
  },
];
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent {
  // tslint:disable-next-line:max-line-length
  restOfColumns: string[] = [
    'compYes',
    'compNo',
    'compNa',
    'compPartial',
    'stApproved',
    'stNotApproved',
    'stFollowupRequested',
    'stPending',
  ];
  // tslint:disable-next-line: max-line-length
  dataColumns: string[] = [
    'reqName',
    'totalReq',
    'compYes',
    'compNo',
    'compNa',
    'compPartial',
    'stApproved',
    'stNotApproved',
    'stFollowupRequested',
    'stPending',
    'smeowner',
  ];

  datas = [
    {
      fldName: '1',
      reqName: 'Test',
      totalReq: '2',
      compYes: 'yes',
      compNa: 'UDC',
      compPartial: '1',
      stApproved: 'No',
      stNotApproved: 'Yes',
      stFollowupRequested: '10',
      stPending: '10',
      smeowner: '20',
    },
    {
      fldName: '1',
      totalReq: '2',
      compYes: 'yes',
      compPartial: '1',
      stApproved: 'No',
      stNotApproved: 'Yes',
      stPending: '10',
      smeowner: '20',
    },
    {
      fldName: '2',
      reqName: 'Tester',
      totalReq: '2',
      compYes: 'yes',
      compNa: 'ttt',
      compPartial: '1',
      stApproved: 'No',
      stNotApproved: 'Yes',
      stFollowupRequested: '10',
      stPending: '10',
      smeowner: '20',
    },
  ];
  dataSource = this.datas;
  spans = [];

  ngOnInit(): void {
    // this.cacheSpan('fldName', (d: any) => d.fldName, data);
    // console.log(this.spans);
    // this.dataSource = data;
  }

  private getFldDetails() {}

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(
    key: string,
    accessor: { (d: any): any; (arg0: any): any },
    datatset: string | any[]
  ) {
    for (let i = 0; i < datatset.length; ) {
      let currentValue = accessor(datatset[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < datatset.length; j++) {
        if (currentValue != accessor(datatset[j])) {
          break;
        }

        count++;
      }

      // if (!this.spans[i]) {
      //   this.spans[i] = {};
      // }

      // // Store the number of similar values that were found (the span)
      // // and skip i to the next unique row.
      // this.spans[i][key] = count;
      // i += count;
    }
  }

  getRowSpan(col: any, index: any) {
    return this.spans[index] && this.spans[index][col];
  }
}
