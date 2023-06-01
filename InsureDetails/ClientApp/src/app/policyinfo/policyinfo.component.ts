import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PolicyDetails } from '../policydetails/policydetails.component';


@Component({
  selector: 'app-policyinfo',
  templateUrl: './policyinfo.component.html',
  styleUrls: ['./policyinfo.component.css']
})
export class PolicyinfoComponent implements OnInit {
  @Input() policy: any;
  policyinfo: any;
  policyid: any;
  policyupdateform: FormGroup;
  private stateID: number;
  public message: string = '';
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  }
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.Createform();
  }

  Createform() {
    this.policyupdateform = this.formBuilder.group({
      policyid: new FormControl('', [Validators.required]),
      dateofpurchase: new FormControl('', [Validators.required]),
      customerid: new FormControl('', [Validators.required]),
      fuel: new FormControl('', [Validators.required]),
      vehiclesegment: new FormControl('', [Validators.required]),
      premium: new FormControl('', [Validators.required, Validators.max(1000000)]),
      customerincomegroup: new FormControl('', [Validators.required]),
      customerregion: new FormControl('', [Validators.required]), 
      bodyinjuryliablity: new FormControl(false),
      personalinjuryprotection: new FormControl(false),
      propertydamageliability: new FormControl(false),
      collision: new FormControl(false),
      comprehensive: new FormControl(false),
      customermartialstatus: new FormControl(false)
    })
  };

  public get f() {
    return this.policyupdateform.controls;
  }

  policyupdate() {
    this.submitted = true;
    if (this.policyupdateform.valid) {
      this.policyupdateform.markAllAsTouched();
      const objpolicyupdate = new PolicyDetails();
      objpolicyupdate.policyid = this.policyupdateform.controls["policyid"].value;
      objpolicyupdate.fuel = this.policyupdateform.controls["fuel"].value;
      objpolicyupdate.vehiclesegment = this.policyupdateform.controls["vehiclesegment"].value;
      objpolicyupdate.premium = parseInt(this.policyupdateform.controls["premium"].value);
      objpolicyupdate.customerincomegroup = this.policyupdateform.controls["customerincomegroup"].value;
      objpolicyupdate.customerregion = this.policyupdateform.controls["customerregion"].value;
      //isStateUseClientData
      if (this.policyupdateform.controls["bodyinjuryliablity"].value === null || this.policyupdateform.controls["bodyinjuryliablity"].value === false) {
        objpolicyupdate.bodyinjuryliablity = false;
      }
      else if (this.policyupdateform.controls["bodyinjuryliablity"].value === true) {
        objpolicyupdate.bodyinjuryliablity = true;
      }
      //isStateUseOperator
      if (this.policyupdateform.controls["personalinjuryprotection"].value === null || this.policyupdateform.controls["personalinjuryprotection"].value === false) {
        objpolicyupdate.personalinjuryprotection = false;
      }
      else if (this.policyupdateform.controls["personalinjuryprotection"].value === true) {
        objpolicyupdate.personalinjuryprotection = true;
      }
      //isStateUseProcess
      if (this.policyupdateform.controls["propertydamageliability"].value === null || this.policyupdateform.controls["propertydamageliability"].value === false) {
        objpolicyupdate.propertydamageliability = false;
      }
      else if (this.policyupdateform.controls["propertydamageliability"].value === true) {
        objpolicyupdate.propertydamageliability = true;
      }
      
      if (this.policyupdateform.controls["collision"].value === null || this.policyupdateform.controls["collision"].value === false) {
        objpolicyupdate.collision = false;
      }
      else if (this.policyupdateform.controls["collision"].value === true) {
        objpolicyupdate.collision = true;
      }
      if (this.policyupdateform.controls["comprehensive"].value === null || this.policyupdateform.controls["comprehensive"].value === false) {
        objpolicyupdate.comprehensive = false;
      }
      else if (this.policyupdateform.controls["comprehensive"].value === true) {
        objpolicyupdate.comprehensive = true;
      }
      if (this.policyupdateform.controls["customermartialstatus"].value === null || this.policyupdateform.controls["customermartialstatus"].value === false) {
        objpolicyupdate.customermartialstatus = false;
      }
      else if (this.policyupdateform.controls["customermartialstatus"].value === true) {
        objpolicyupdate.customermartialstatus = true;
      }

      this.http.post('Policy/policy_Update', objpolicyupdate).subscribe(result => {
        let objmessage = result;
        if (objmessage == true) {
          this.clear();
          document.getElementById("btnPolicyEditclose").click();
          this.parentFun.emit();
        }
        else {
          this.message = "unable to update";
        }
      }, error => console.error(error));
    }
    else {
      this.message = "Please fill the details";
    }
  }
  info(id: number) {
    this.policyinfo = this.policy.filter(s => s.policyid == id);
    this.Createform();
    this.policyupdateform.controls["policyid"].setValue(this.policyinfo[0].policyid);
    this.policyupdateform.controls["dateofpurchase"].setValue(this.policyinfo[0].dateofpurchase);
    this.policyupdateform.controls["customerid"].setValue(this.policyinfo[0].customerid);
    this.policyupdateform.controls["fuel"].setValue(this.policyinfo[0].fuel);
    this.policyupdateform.controls["vehiclesegment"].setValue(this.policyinfo[0].vehiclesegment);

    this.policyupdateform.controls["premium"].setValue(this.policyinfo[0].premium); 
    this.policyupdateform.controls["customerincomegroup"].setValue(this.policyinfo[0].customerincomegroup);
    this.policyupdateform.controls["customerregion"].setValue(this.policyinfo[0].customerregion);
    this.policyupdateform.controls["bodyinjuryliablity"].setValue(this.policyinfo[0].bodyinjuryliablity);
    this.policyupdateform.controls["personalinjuryprotection"].setValue(this.policyinfo[0].personalinjuryprotection);

    this.policyupdateform.controls["propertydamageliability"].setValue(this.policyinfo[0].propertydamageliability);
    this.policyupdateform.controls["collision"].setValue(this.policyinfo[0].collision);
    this.policyupdateform.controls["comprehensive"].setValue(this.policyinfo[0].comprehensive);
    this.policyupdateform.controls["customermartialstatus"].setValue(this.policyinfo[0].customermartialstatus);

    document.getElementById("btnsave").setAttribute("policyid", this.policyinfo[0].policyid.toString());
  }

  clear() {
    this.policyupdateform.reset();
    this.message = "";
    this.submitted = false;
  }

  close() {
    document.getElementById("btnsave").setAttribute("policyid", "0");
    this.clear();
  }
}

