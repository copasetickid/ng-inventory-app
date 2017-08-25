import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class ProductDisplayComponent {
  @Input() price: number;
  constructor() { }

}
