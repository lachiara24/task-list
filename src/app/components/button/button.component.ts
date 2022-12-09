import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Recibo del template parámetros para cambiar el botón
  @Input() text: string = "";
  @Input() color: string = "";
  
  // Envío al template que el botón se clickeó
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit();
  }
}
