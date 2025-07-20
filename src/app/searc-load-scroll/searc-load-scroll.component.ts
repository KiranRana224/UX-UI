import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
} from 'rxjs';

@Component({
  selector: 'app-searc-load-scroll',
  templateUrl: './searc-load-scroll.component.html',
  styleUrls: ['./searc-load-scroll.component.scss'],
})
export class SearcLoadScrollComponent {
  // @ViewChild('selectRef') selectRef!: MatSelect;

  // userControl = new FormControl();
  // users = [] as any[];
  // page = 0;
  // size = 10;
  // hasMore = true;
  // loading = false;
  // searchText = '';
  // panelScrollEle?: HTMLElement;

  // constructor(private http: HttpClient, private zone: NgZone) {}

  // ngAfterViewInit() {
  //   this.selectRef.openedChange.subscribe((opened) => {
  //     if (opened) {
  //       this.page = 0;
  //       this.users = [];
  //       this.hasMore = true;
  //       this.fetchUsers();

  //       // Wait until panel is created in view
  //       setTimeout(() => this.attachScroll());
  //     } else {
  //       this.detachScroll();
  //     }
  //   });
  // }

  // onSearchChange() {
  //   this.page = 0;
  //   this.users = [];
  //   this.hasMore = true;
  //   this.fetchUsers();
  // }

  // fetchUsers() {
  //   if (this.loading || !this.hasMore) return;
  //   this.loading = true;

  //   const params = new HttpParams()
  //     .set('page', this.page.toString())
  //     .set('size', this.size.toString())
  //     .set('search', this.searchText);

  //   this.http
  //     .get<any>('http://localhost:3000/api/users', { params })
  //     .subscribe((res: any) => {
  //       this.users.push(...res.data);
  //       this.hasMore = res.hasMore;
  //       this.loading = false;
  //       this.page++;
  //     });
  // }

  // attachScroll() {
  //   const panelEl = this.selectRef.panel?.nativeElement as HTMLElement;
  //   if (panelEl) {
  //     this.panelScrollEle = panelEl;
  //     panelEl.addEventListener('scroll', this.onScroll);
  //   }
  // }

  // onScroll = () => {
  //   if (!this.panelScrollEle || this.loading || !this.hasMore) return;
  //   const { scrollTop, scrollHeight, clientHeight } = this.panelScrollEle;
  //   if (scrollTop + clientHeight >= scrollHeight - 20) {
  //     this.zone.run(() => this.fetchUsers());
  //   }
  // };

  // detachScroll() {
  //   if (this.panelScrollEle) {
  //     this.panelScrollEle.removeEventListener('scroll', this.onScroll);
  //   }
  // }

  // ngOnDestroy() {
  //   this.detachScroll();
  // }
  @ViewChild('scrollPanel') scrollPanelRef!: ElementRef;

  searchControl = new FormControl();
  users: any[] = [];
  page = 0;
  size = 10;
  hasMore = true;
  loading = false;
  scrollSubscription?: Subscription;

  constructor(private http: HttpClient, private zone: NgZone) {}

  ngAfterViewInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((search) => {
        this.reset();
        this.fetchUsers(search || '');
        setTimeout(() => this.attachScroll(), 300);
      });
  }

  onFocus() {
    if (!this.users.length) {
      this.reset();
      this.fetchUsers('');
      setTimeout(() => this.attachScroll(), 300);
    }
  }

  fetchUsers(search: string) {
    if (this.loading || !this.hasMore) return;
    this.loading = true;

    const params = new HttpParams()
      .set('page', this.page.toString())
      .set('size', this.size.toString())
      .set('search', search);

    this.http.get<any>('http://localhost:3000/api/users', { params }).subscribe(
      (res) => {
        this.users = [...this.users, ...res.data];
        this.hasMore = res.hasMore;
        this.page++;
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }

  attachScroll() {
    if (!this.scrollPanelRef) return;
    const panel = this.scrollPanelRef.nativeElement as HTMLElement;

    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }

    this.scrollSubscription = fromEvent(panel, 'scroll').subscribe(() => {
      const { scrollTop, scrollHeight, clientHeight } = panel;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 50;

      if (atBottom && this.hasMore && !this.loading) {
        this.zone.run(() => {
          this.fetchUsers(this.searchControl.value || '');
        });
      }
    });
  }

  reset() {
    this.users = [];
    this.page = 0;
    this.hasMore = true;
    this.loading = false;
  }

  ngOnDestroy() {
    this.scrollSubscription?.unsubscribe();
  }
}
