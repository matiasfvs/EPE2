import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../info-pagina.service';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  array:[];

  constructor(public infoPaginaService:InfoPaginaService) { 
    this.infoPaginaService.getJson('../assets/data/JsonCOVID.json')
    .subscribe((res:any)=>{
      this.array=res
      console.log(res)
           
    })
  }

  ngOnInit(): void {
  }

}
