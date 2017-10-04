import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=["Nodejs","AngularJs","ReactJs"];
  model = new Employee('','',true,'male','default');
  hasCodeLangError= false;

  firstNameToUpperCase(value:string){
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
    else
      this.model.firstName=value
  }

  validOption(event){
    if(this.model.codelang === 'default')
      this.hasCodeLangError=true;
    else
      this.hasCodeLangError=false;
  }

}


/*
ng-untouched   ng-pristien   ng-valid
ng-touched     ng-dirty      ng-invalid
*/