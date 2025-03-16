import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mutli-step-form',
  templateUrl: './mutli-step-form.component.html',
  styleUrls: ['./mutli-step-form.component.scss'],
})
export class MutliStepFormComponent {
  currentStep = 1;
  totalSteps = 3; // Total number of steps in the form

  // Step 1: Personal Info Form
  step1Form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
  });

  // Step 2: Address Info Form
  step2Form = new FormGroup({
    hno: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
  });

  // Step 3: Test Info Form
  step3Form = new FormGroup({
    testInfo: new FormControl('', [Validators.required]),
  });

  // Step Data for Display
  get step1Data() {
    return this.step1Form.value;
  }

  get step2Data() {
    return this.step2Form.value;
  }

  get step3Data() {
    return this.step3Form.value;
  }

  // Move to the next step
  nextStep() {
    if (this.currentStep === 1 && this.step1Form.valid) {
      this.currentStep = 2;
    } else if (this.currentStep === 2 && this.step2Form.valid) {
      this.currentStep = 3;
    }
  }

  // Move to the previous step
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Submit the form
  submitForm() {
    if (this.step1Form.valid && this.step2Form.valid && this.step3Form.valid) {
      console.log(
        'Form submitted',
        this.step1Data,
        this.step2Data,
        this.step3Data
      );
    }
  }

  // Calculate the progress bar width based on current step
  get progress() {
    return ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
  }

  // Get labels for each step
  get stepLabels() {
    return [
      { label: 'Personal', step: 1 },
      { label: 'Address', step: 2 },
      { label: 'Test', step: 3 },
    ];
  }
}
