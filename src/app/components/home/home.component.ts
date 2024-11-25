import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = "Murilo";
  count = signal(0);

  list = ["teste1", "teste2", "teste3", "teste4"]

  teste(){
    this.count.update(value => value + 1);
    this.name = "Oi " + this.count();
  }


} 
