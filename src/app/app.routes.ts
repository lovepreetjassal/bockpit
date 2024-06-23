import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TrimComponent } from './components/trim/trim.component';
import { UnixtimeComponent } from './components/unixtime/unixtime.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'trim', component: TrimComponent },
    { path: 'unixtime', component: UnixtimeComponent },
];
