import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ElecteicEquipmentGroupService } from 'src/app/services/electeic-equipment-group.service';

@Component({
  selector: 'app-equipment-group',
  templateUrl: './equipment-group.component.html',
  styleUrls: ['./equipment-group.component.css']
})
export class EquipmentGroupComponent implements OnInit {
  
  constructor(private addEquipmentGroupService: ElecteicEquipmentGroupService,private router: Router ) { }
  equipmentCategoryList:any;
  ngOnInit(): void {
  this.addEquipmentGroupService.getAllEquipmentCategory().subscribe(equipmentCategoryList=>
      {this.equipmentCategoryList = equipmentCategoryList
    });
  }
  equipmentGroupForm = new FormGroup({
    equipmentgroupname: new FormControl(""),
    equipmentcategoryid: new FormControl(0)
  });
  equipmentGroupAdded(){
    this.addEquipmentGroupService.addEquipmentGroup([
      this.equipmentGroupForm.value.equipmentgroupname,
      this.equipmentGroupForm.value.equipmentcategoryid
    ]).subscribe(res=>{
      if(res=="Exist"){
        alert("Equipment Group Already Exist");
        window.location.reload();
      }
      else{
        alert("Equipment Group Added");
        window.location.reload();
      }
    })
  }
}
