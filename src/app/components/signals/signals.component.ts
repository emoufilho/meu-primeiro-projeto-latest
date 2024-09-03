import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})

export class SignalsComponent {

  public firstName = signal('John');
  public lastName = signal('Doe');

  public fullName = computed( () => {
    return this.firstName() + ' ' + this.lastName();
  })  

  public array = signal([1]);

  /*
    effect - raramente são necessários na maioria dos códigos, mas podem ser úteis em circustâncias específicas.

    - Registro de dados sendo exibidos e quando eles mudam, seja para análise ou como ferramenta de depuração.
    - Manter os daods sincronizados com o windows.localStorage.
    - Adicionando comportamento DOM personalizado que não pode ser expresso com sintaxe de modelo.
    - Executar renderização personalizada em um <canva>, biblioteca de gráficos ou outra biblioteca de UI de terceiros.
  */

  constructor() {
    effect(() => {
      console.log(this.firstName());
    });
  }

  public updateName() {
    return this.firstName.set('Jane'); 
  }

  public updateArray() {
    this.array.update ( (oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }

}
