import { Component, Input } from '@angular/core';

@Component({
  selector: 'treinamento-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() nome: string = 'Digite o seu nome:';

  ngOnInit() {
    console.log('life cycle')
  }
}
