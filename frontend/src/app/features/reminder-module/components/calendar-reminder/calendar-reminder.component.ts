import { Component, ViewChild, inject } from '@angular/core';
import { ReminderService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FormsReminderComponent } from '../forms-reminder';

@Component({
  selector: 'app-calendar-reminder',
  templateUrl: './calendar-reminder.component.html',
  styleUrls: ['./calendar-reminder.component.css']
})
export class CalendarReminderComponent {

  private reminderService = inject(ReminderService);
  private dialog = inject(MatDialog);

  public constructor(){}

  calendarOptions: CalendarOptions = {
    themeSystem: 'standard',
    initialView: 'dayGridMonth',
    locale: ptLocale,
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, ],
    headerToolbar: {
      left:'dayGridMonth,timeGridWeek,timeGridDay',
      center: 'title',
      right: 'prev,next today'
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

    dateClick: this.handleDateClick.bind(this),
    events: [  { title: 'event 1', date: '2023-11-01' , eventColor: '#378006'}]
  };

  @ViewChild('calendar') calendarComponent: FullCalendarComponent | undefined;

  handleDateClick(arg: any) {
    console.log('Argumento:',arg);
    //alert('Clicado! ' + arg.dateStr + arg);
    const dialogRef = this.dialog.open(FormsReminderComponent, {
      width: '45%'
    });
  }

}
