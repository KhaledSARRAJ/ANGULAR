import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // nom du tag html
  templateUrl: './app.component.html', // vue
  styleUrls: ['./app.component.css']   // css
})
export class AppComponent {
  title = 'Super Hero App';
  description = "Une appli qu'elle est formidable";
}
