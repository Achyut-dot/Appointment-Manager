import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  appointment: Appointment = {
    id: 1,
    title: 'My Name',
    date: new Date('2025-03-02')
  }

}
