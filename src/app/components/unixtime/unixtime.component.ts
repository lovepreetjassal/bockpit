import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-unixtime',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './unixtime.component.html',
  styleUrl: './unixtime.component.css'
})
export class UnixtimeComponent implements OnInit {
  unixtime: number = 0
  date = "";
  time = "";
  utc = "";

  ngOnInit() {
    let date = Date.now();
    this.unixtime = date;
    this.changed();
  }

  changed() {
    let date = new Date(this.unixtime);
    this.date = date.toDateString();
    this.time = date.toTimeString();
    this.utc = date.toUTCString()
  }
}
