import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, viewChild, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})

export class TemplateVariablesComponent implements AfterViewInit {
  
  @ViewChild('name') public nameInput: any;
  @ViewChild('h2') public nameH2: any;
  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit() {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childComponent.name);
  }

}
