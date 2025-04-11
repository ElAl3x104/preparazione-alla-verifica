import { Component, Input } from '@angular/core';
import { Email } from '../../Email/email.models';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sent-mail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sent-mail.component.html',
  styleUrl: './sent-mail.component.css'
})
export class SentMailComponent {
  @Input() email!: Email;
  visibile = false;
  labelColor: string = 'white'
  espandi(): boolean {
    this.visibile = !this.visibile;
    return false;
  }
  speciale(): void {
    if (this.labelColor == 'yellow')
      this.labelColor = 'white'
    else
      this.labelColor = 'yellow'
  }
}
