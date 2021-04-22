import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { FormBuilder } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  sendForm = this.formBuilder.group({ name: '', password: '' });
  callComponent: EventEmitter<any> = new EventEmitter();
  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.postService.login(
      this.sendForm.value.name,
      this.sendForm.value.password
    );
    this.sendForm.reset();
  }

  ngOnInit(): void {}
}
