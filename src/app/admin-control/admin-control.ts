import { Component } from '@angular/core';
import { Students } from './students/students';
import { Instructors } from './instructors/instructors';

@Component({
  imports: [Students, Instructors],
  selector: 'app-admin-control',
  styleUrl: './admin-control.scss',
  templateUrl: './admin-control.html',
})
export class AdminControl {}
