import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TrimComponent } from './components/trim/trim.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'trim', component: TrimComponent },
];
