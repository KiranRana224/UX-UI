import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss'],
})
export class FormarrayComponent implements OnInit {
  formRegister!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formRegister = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      subject: new FormArray([new FormControl('', Validators.required)]), // Start with one subject input by default
    });
  }
  addInput() {
    const subjectArray = this.formRegister.get('subject') as FormArray;
    subjectArray.push(new FormControl('', Validators.required));
  }
  get subjectControls() {
    return (this.formRegister.get('subject') as FormArray).controls;
  }
  removeInput(index: number) {
    const subjectArray = this.formRegister.get('subject') as FormArray;
    subjectArray.removeAt(index); // Remove FormControl at the given index
  }
  addStudent() {
    this.formRegister.markAllAsTouched();
  }
}
