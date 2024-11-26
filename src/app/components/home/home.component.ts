import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HelloWorldService } from '../../service/hello-world.service';

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

  image = ""

  constructor(private service: HelloWorldService){
      this.service.getHelloWorld().subscribe(
          {
            next: (data)=>  {
              console.log(data)
            },
            error: (error) => {
                console.error(error)
            },
            complete: () =>{
              console.log("finalizado!")
            }
          }
    
      )
  }


  teste(){
    this.count.update(value => value + 1);
    this.name = "Oi " + this.count();
  }


} 
