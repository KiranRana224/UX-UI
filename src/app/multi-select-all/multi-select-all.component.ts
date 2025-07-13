import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select-all',
  templateUrl: './multi-select-all.component.html',
  styleUrls: ['./multi-select-all.component.scss'],
})
export class MultiSelectAllComponent implements OnInit {
  ngOnInit(): void {
    // this.selectedItemsFromParent = ['steak-0', 'pizza-1', 'tacos-2'];
    setTimeout(() => {
      const apiResponse = ['steak-0', 'pizza-1', 'tacos-2'];
      this.selectedItemsFromParent = apiResponse;
    }, 1000);
  }
  selectedItemsFromParent: string[] = [];

  // patchAll() {
  //   this.selectedItemsFromParent = ['steak-0', 'pizza-1', 'tacos-2'];
  // }
}
