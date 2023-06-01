import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { PolicyinfoComponent } from '../policyinfo/policyinfo.component';

@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.css']
})
export class PolicydetailsComponent implements OnInit {
  public totalpolicy: any;
  public policyfilter: any;
  p: number = 1;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.GetInsure();
  }
  @ViewChild(PolicyinfoComponent, { static: false }) PolicyInfo: PolicyinfoComponent;

  ngOnInit() {
  }
  search(searchstring: string) {
    console.log(searchstring);
    if (searchstring != "" && searchstring.length>0) {
      this.policyfilter = this.totalpolicy.filter(t => t.policyid.toString().includes(searchstring) || t.customerid.toString().includes(searchstring));
    }
    else {
      this.policyfilter = this.totalpolicy;
    }
  }

  GetInsure() {
    this.http.get('Policy/policy_Get').subscribe(result => {
      this.totalpolicy = result;
      this.policyfilter = this.totalpolicy; 
    }, error => console.error(error));
  }

  infor(id: number) {
    this.PolicyInfo.info(id);
  }
  edit(id: number) {
    //this.StateEdit.State_GET_ID(id);
  }
}
export class PolicyDetails {
  policyid: number;
  dateofpurchase: string;
  customerid: number;
  fuel: string;
  vehiclesegment: string;
  premium: number;
  bodyinjuryliablity: boolean;
  personalinjuryprotection: boolean;
  propertydamageliability: boolean;
  collision: boolean;
  comprehensive: boolean;
  customergender: string;
  customerincomegroup: string;
  customerregion: string;
  customermartialstatus: boolean;
}
