import { Component } from '@angular/core';
import { Task3Component } from "../task3/task3.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [Task3Component],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

}
