import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ElecteicEquipmentService } from 'src/app/services/electeic-equipment.service';
import { UserAddService } from 'src/app/services/user-add.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor(private addEquipmentService: ElecteicEquipmentService, private userAddService: UserAddService, private router: Router) { }
  equipmentCategoryList:any;
  equipmentGroupList: any;
  ngOnInit() {
    this.addEquipmentService.getAllEquipmentCategory().subscribe(equipmentCategoryList=>
      {this.equipmentCategoryList = equipmentCategoryList
    });
  }
  equipmentForm = new FormGroup({
    equipmentname: new FormControl(""),
    partid: new FormControl(""),
    equipmentgroupid: new FormControl(0),
    equipmentcategoryid: new FormControl(0)
  });
  equipmentAdded(){
    this.addEquipmentService.addEquipment([
      this.equipmentForm.value.equipmentname,
      this.equipmentForm.value.partid,
      this.equipmentForm.value.equipmentgroupid,
      this.equipmentForm.value.equipmentcategoryid
    ]).subscribe(res=>{
      if(res=="EquipmentExist"){
        alert("Equipment Already Exist");
        window.location.reload();
      }
      else{
        alert("Equipment Added Successfully");
        window.location.reload();
      }
    })
  }
  GetEquipGroupById(event:any){
     console.log(event);
     this.addEquipmentService.getEquipmentGroupByCategoryId(event).subscribe(equipmentGroupList=>{
      this.equipmentGroupList=equipmentGroupList;
     })
  }
  logOut()
  {
    this.userAddService.removeToken();
    this.router.navigateByUrl('login');
  }
}
