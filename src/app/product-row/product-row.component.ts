import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

/**
 * [Component description]
 * @param  {'app-product-row'}                {selector   [description]
 * @param  {'./product-row.component.html'}   templateUrl [description]
 * @param  {['./product-row.component.css']}} styleUrls   [description]
 * @return {[type]}                                       [description]
 *
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
