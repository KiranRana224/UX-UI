import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-file-xls-upload',
  templateUrl: './file-xls-upload.component.html',
  styleUrls: ['./file-xls-upload.component.scss'],
})
export class FileXlsUploadComponent {
  data = [
    {
      currency: 'INR',
      closing_balace: 3000,
      opening_balace: 688,
      credit: 566,
      debit: 7878,
    },
    {
      currency: 'Usd',
      closing_balace: 3000,
      opening_balace: 688,
      credit: 566,
      debit: 7878,
    },
  ];

  // exportToExcel(): void {
  //   const formattedData = this.data.map((item) => ({
  //     Currency: item.currency,
  //     'Opening Balance': item.opening_balace,
  //     Credit: item.credit,
  //     Debit: item.debit,
  //     'Closing Balance': item.closing_balace,
  //   }));

  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(formattedData);
  //   const workbook: XLSX.WorkBook = {
  //     Sheets: { Sheet1: worksheet },
  //     SheetNames: ['Sheet1'],
  //   };

  //   const excelBuffer: any = XLSX.write(workbook, {
  //     bookType: 'xlsx',
  //     type: 'array',
  //   });

  //   const blob: Blob = new Blob([excelBuffer], {
  //     type: 'application/octet-stream',
  //   });
  //   FileSaver.saveAs(blob, 'balances.xlsx');
  // }

  // exportToExcel(): void {
  //   // Step 1: Format column headers
  //   const headers = [
  //     'Currency',
  //     'Opening Balance',
  //     'Credit',
  //     'Debit',
  //     'Closing Balance',
  //   ];

  //   // Step 2: Extract data rows based on order
  //   const rows = this.data.map((item) => [
  //     item.currency,
  //     item.opening_balace,
  //     item.credit,
  //     item.debit,
  //     item.closing_balace,
  //   ]);

  //   // Step 3: Transpose: rows become columns
  //   const transposed = [headers, ...rows].reduce((acc, row) => {
  //     row.forEach((cell, i) => {
  //       acc[i] = acc[i] || [];
  //       acc[i].push(cell);
  //     });
  //     return acc;
  //   }, [] as any[][]);

  //   // Step 4: Convert to worksheet and export
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(transposed);
  //   const workbook: XLSX.WorkBook = {
  //     Sheets: { Sheet1: worksheet },
  //     SheetNames: ['Sheet1'],
  //   };
  //   const excelBuffer: any = XLSX.write(workbook, {
  //     bookType: 'xlsx',
  //     type: 'array',
  //   });
  //   const blob: Blob = new Blob([excelBuffer], {
  //     type: 'application/octet-stream',
  //   });

  //   FileSaver.saveAs(blob, 'transposed-balances.xlsx');
  // }
  exportToExcel(): void {
    const rows = [
      ['Currency', ...this.data.map((d) => d.currency)],
      ['Opening Balance', ...this.data.map((d) => d.opening_balace)],
      ['Credit', ...this.data.map((d) => d.credit)],
      ['Debit', ...this.data.map((d) => d.debit)],
      ['Closing Balance', ...this.data.map((d) => d.closing_balace)],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook: XLSX.WorkBook = {
      Sheets: { Sheet1: worksheet },
      SheetNames: ['Sheet1'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const blob: Blob = new Blob([excelBuffer], {
      type: 'application/octet-stream',
    });

    FileSaver.saveAs(blob, 'balances.xlsx');
  }
}
