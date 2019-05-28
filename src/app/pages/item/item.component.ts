import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescription } from '../../interfaces/producto-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescription;
  id: String;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { 
                
              }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      console.log(parametros.id);
      
      this.productoService.getProductos(parametros.id)
          .subscribe( (producto: ProductoDescription) => {
            this.id = parametros['id'];
            this.producto = producto;
            console.log(producto);
          })
    })
  }

}
