import { Component, OnInit } from '@angular/core';
import { SpacexApiService} from '../_services/spacex-api.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  List :any[]=[]
  constructor(private _spacex_service:SpacexApiService) { }

  ngOnInit() {
    this.getSpaceXInfo()
  }

  getSpaceXInfo(){
this._spacex_service.getSpacexDetails(8).subscribe((res:any)=>{
  this.List = res;
})
  }
}
