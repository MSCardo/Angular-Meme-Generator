import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../post.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  sendForm = this.formBuilder.group({ name: '', password: '' });
  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.postService.register(
      this.sendForm.value.name,
      this.sendForm.value.password
    );
    this.sendForm.reset();
  }

  ngOnInit() {}
}
