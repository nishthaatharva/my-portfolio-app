import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  constructor(private emailService: EmailService) {}
  name: string = 'Nishtha Mistry';
  description: string = 'Passionate Software Engineer creating innovative solutions using latest technologies.';

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.emailService.sendEmail(contactForm.value).then(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            confirmButtonColor: '#FF6B6B',
          });
          contactForm.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was an error sending your message.',
            confirmButtonColor: '#FF6B6B',
          });
          console.error(error);
        }
      );
    }
  }
}
