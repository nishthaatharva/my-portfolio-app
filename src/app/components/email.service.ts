import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = 'service_csi3if6';
  private templateID = 'template_o6o79qw';
  private userID = 'dJQfOiE2VKnC6svCP';

  constructor() {
    emailjs.init(this.userID);
  }

  sendEmail(form: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, {
      name: form.name,
      email: form.email,
      message: form.message,
    });
  }
}
