import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() ClickAddCart:EventEmitter<any> = new EventEmitter();

  today= new Date();

  constructor() { }// se construye el componente
  ngOnchanges(){} // detecta el estado anterior y el nuevo (cambios)

  ngOnInit() { //se ejecuta cuando el componente ya fue puesto en pantalla
  }
  ngDoCheck(){// deteccion automatica de cambios a mi manera o forzada, el on changes es nativo

  }

  ngOnDestroy(){//cuando los elementos son quitados de la interfaz

  }


  addCart(){
    console.log("añadir");
    this.ClickAddCart.emit(this.product.id);
    
  }

}
