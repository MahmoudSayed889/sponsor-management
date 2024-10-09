import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListViewComponent } from "./components/list-view/list-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sponsorManagement';
}
