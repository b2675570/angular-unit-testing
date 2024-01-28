import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface IUser {
  username: string;
  email: string;
  password: string;
  password_match: string;
}
@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  model: IUser = {
    username: '',
    email: '',
    password: '',
    password_match: '',
  };
  @Output() save = new EventEmitter<IUser>();
  constructor() {}

  ngOnInit() {}

  submit() {
    console.table(this.model);
    this.save.emit(this.model);
  }
}
