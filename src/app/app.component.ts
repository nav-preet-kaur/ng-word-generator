import { Component } from '@angular/core';
import wordArray from '../utilities/words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  limit = 10;

  words = '';

  handleSlideChange(newLimit){
    this.limit = newLimit;
  }

  generateWords()
  {
    this.words = wordArray.slice(0, this.limit).join(' ');
  }

}
