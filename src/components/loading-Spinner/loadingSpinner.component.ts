import { Component } from "@angular/core";

@Component({
  selector: 'app-loadingSpinner',
  template: `
  <div class="d-flex justify-content-center">
    <div class="spinner-border mySpinner" role="status">
    </div>
  </div>
`
 ,
  styles:['.mySpinner{ color:#f15a22}']
})
export class LoadingSpinnerComponent{

}