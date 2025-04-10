import { Component, Input } from '@angular/core';
import { Email } from '../../Email/email.models';


@Component({
  selector: 'app-sent-mail',
  standalone: true,
  imports: [],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent {
  @Input() email!: Email;
}
