import { OverlayContainer } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-multi-selct-input',
  templateUrl: './multi-selct-input.component.html',
  styleUrls: ['./multi-selct-input.component.scss'],
})
export class MultiSelctInputComponent implements OnInit, AfterViewInit {
  // control = new FormControl([]);
  // options: any[] = [];

  // page = 0;
  // pageSize = 10;
  // total = 0;
  // loading = false;
  // firstLoadDone = false;

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {}

  // onOpened(opened: boolean): void {
  //   if (opened && !this.firstLoadDone) {
  //     this.page = 0;
  //     this.options = [];
  //     this.fetchOptions();
  //     this.firstLoadDone = true;
  //   }
  // }

  // onScroll(event: Event): void {
  //   const element = event.target as HTMLElement;

  //   const atBottom =
  //     element.scrollTop + element.clientHeight >= element.scrollHeight - 20;

  //   if (atBottom && !this.loading && this.options.length < this.total) {
  //     this.page++;
  //     this.fetchOptions();
  //   }
  // }

  // fetchOptions(): void {
  //   this.loading = true;

  //   this.http
  //     .get<any>(
  //       `http://localhost:3000/products?page=${this.page}&size=${this.pageSize}`
  //     )
  //     .subscribe({
  //       next: (res) => {
  //         this.options = [...this.options, ...res.products];
  //         this.total = res.total;
  //         this.loading = false;
  //       },
  //       error: () => {
  //         this.loading = false;
  //       },
  //     });
  // }

  @ViewChild('selectRef') selectRef!: MatSelect;

  selectedProducts = new FormControl([]);
  products: any[] = [];

  page = 1;
  size = 10;
  loading = false;
  allLoaded = false;
  scrollListenerAdded = false;

  overlayScrollEl: HTMLElement | null = null;
  scrollSub: Subscription | null = null;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    // Nothing here initially
  }

  onDropdownOpen(opened: boolean) {
    if (opened) {
      if (!this.products.length) {
        this.loadProducts(); // Load page 1
      }

      // Use timeout to wait until panel is rendered
      setTimeout(() => {
        const panel = document.querySelector(
          '.mat-select-panel'
        ) as HTMLElement;
        if (panel && !this.scrollListenerAdded) {
          panel.addEventListener('scroll', this.onScroll.bind(this));
          this.overlayScrollEl = panel;
          this.scrollListenerAdded = true;
        }
      }, 0);
    }
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;

    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const offsetHeight = target.offsetHeight;

    if (scrollTop + offsetHeight >= scrollHeight - 10 && !this.loading) {
      this.loadProducts(); // Load next page
    }
  }

  loadProducts() {
    if (this.loading || this.allLoaded) return;

    this.loading = true;

    this.http
      .get<any[]>(
        `http://localhost:3000/products?page=${this.page}&size=${this.size}`
      )
      .subscribe({
        next: (res) => {
          this.products = [...this.products, ...res];
          if (res.length < this.size) this.allLoaded = true;
          this.page++;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  ngOnDestroy() {
    if (this.overlayScrollEl) {
      this.overlayScrollEl.removeEventListener('scroll', this.onScroll);
    }
  }
  onOpen(opened: boolean) {
    // logic...
  }
}
