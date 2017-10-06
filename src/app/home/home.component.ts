import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=["Nodejs","AngularJs","ReactJs"];
  model = new Employee('','',true,'male','default');
  hasCodeLangError= false;

  constructor(private formposter:FormPoster){

  }

  firstNameToUpperCase(value:string){
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
    else
      this.model.firstName=value
  }

  submitForm(form: NgForm){
    console.log(form.value)
    this.formposter.postEmployeeForm(this.model);
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