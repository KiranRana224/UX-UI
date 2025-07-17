import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-multi-select-all',
  templateUrl: './multi-select-all.component.html',
  styleUrls: ['./multi-select-all.component.scss'],
})
export class MultiSelectAllComponent implements OnInit {
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     const apiResponse = ['steak-0', 'pizza-1', 'tacos-2'];
  //     this.selectedItemsFromParent = apiResponse;
  //   }, 1000);
  // }
  // selectedItemsFromParent: string[] = [];
  data = {
    name: 'Kiran',
    email: 'test@gmail.com',
    phone: 78678687687,
    toppings: [
      { value: 'pizza-1', viewValue: 'Pizza' },
      { value: 'tacos-2', viewValue: 'Tacos' },
      { value: 'steak-0', viewValue: 'Steak' },
    ],
  };
  formRegister!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
    this.patchData();
  }
  createForm() {
    this.formRegister = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      toppings: [''],
    });
  }

  addStudent() {
    this.formRegister.markAllAsTouched();
    console.log(this.formRegister.value);
  }
  patchData() {
    const patchToppings = this.data.toppings.map((item) => item.value);

    this.formRegister.patchValue({
      name: this.data.name,
      email: this.data.email,
      phone: this.data.phone,
      // toppings: patchToppings,
      toppings: this.data.toppings,
    });
  }
}
