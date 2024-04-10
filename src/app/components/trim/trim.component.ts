import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-trim',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './trim.component.html',
  styleUrl: './trim.component.css'
})
export class TrimComponent {

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }
  text: any;

  triminputchange($event: Event) {
    this.clipboard.copy(this.text);
    this.copySuccess()
  }

  copySuccess() {
    this._snackBar.open(`Text trimmed and copied to clipboard!`, ``,{
      duration: 1 * 1000,
    });
  }
}
