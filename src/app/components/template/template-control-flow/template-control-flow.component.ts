import { AsyncPipe, CommonModule, NgSwitch} from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgSwitch],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {

  public isTrue = true;

  public switchCondition = "C";

  public itens: Array<{name: string}> = [{ name: "Eduardo" }];

  public loadingData$: Observable<string[]> = of ([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000));

  //Utilizando para a Diretiva For
  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({name: value});
  }

}
