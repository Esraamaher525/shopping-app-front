import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enter-product',
  templateUrl: './enter-product.component.html',
  styleUrls: ['./enter-product.component.scss']
})
export class EnterProductComponent implements OnInit {
  submitted:boolean=false;
  categoryData=["kids","women","baby","men"]
  enterProduct=new FormGroup({
    category:new FormControl('',[Validators.required]),
    sizes:new FormControl('',[Validators.required]),
    colors:new FormControl('',[Validators.required]),
    priceBeforSale:new FormControl(''),
    priceAfterSale:new FormControl(''),
    type:new FormControl('',[Validators.required]),
    AvailableInStock:new FormControl('',[Validators.required]),
    hasSale:new FormControl('',[Validators.required])
  })
  sizeData = ['SM','MD','lg','xl'];
  colorsData=[];
  dropdownSettings = {};
  file:any =null;
  uploadTitle:any;
  formData = new FormData();
  colorsDataJson=[];
  constructor(private _admin:AdminService,private toastr: ToastrService,private router:Router) { }
  ngOnInit(): void { 
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
     // itemsShowLimit: 3,
      allowSearchFilter: true
    };
    //get color data
    this._admin.getJSON().subscribe(res=>{
      debugger
      this.colorsData=[];
      this.colorsDataJson=res;
      console.log(res)
      res.forEach(data => {
       this.colorsData.push(data.name);
      });

    })
  }
  get f() { return this.enterProduct.controls; }
  handleFile(ev:any){
    this.file = ev.target.files;
    for(let i=0;i<this.file.length;i++){
      this.formData.append('products', this.file[i])
    }
  
  }
  changemulti(e){
    console.log(this.enterProduct.value.sizes)
  }
  submit(){
    this.submitted=true
    if (this.enterProduct.invalid) return;
    console.log(this.enterProduct.value)
    if(this.file!=null){
      this.formData.append('category', this.enterProduct.value.category)
      this.formData.append('sizes', this.enterProduct.value.sizes)
      this.formData.append('type', this.enterProduct.value.type)
      this.formData.append('priceBeforSale', this.enterProduct.value.priceBeforSale)
      this.formData.append('priceAfterSale', this.enterProduct.value.priceAfterSale)
      this.formData.append('AvailableInStock', this.enterProduct.value.AvailableInStock)
      this.formData.append('colors',this.enterProduct.value.colors)
      this.formData.append('hasSale', this.enterProduct.value.hasSale)
      this._admin.enterProduct(this.formData).subscribe(res=>{
        console.log(res)
        this.toastr.success(res.message, 'success');
      },()=>{
      },()=>{
        this.router.navigate(['/home'])
      })

    }
  }

  ngAfterContentChecked(){
    let colorDom=document.getElementById("colors")
    let colorItems=colorDom.lastElementChild.lastElementChild.lastElementChild.getElementsByTagName('li');
    for(let i=0;i<colorItems.length;i++){
      if(colorItems[i].childNodes.length==2){
        var node = document.createElement("span");       
        node.classList.add('color-bg');  
        node.style.backgroundColor = this.colorsDataJson[i].hexa;                
        var textnode = document.createTextNode("");        
        node.appendChild(textnode);                              
        colorItems[i].appendChild(node);
      }else{
        return true;
      }
     
    }
    

  }



}
