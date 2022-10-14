import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentCategoryService } from 'src/app/services/electeic-equipment-category.service';

@Component({
  selector: 'app-updateequipmentcategory',
  templateUrl: './updateequipmentcategory.component.html',
  styleUrls: ['./updateequipmentcategory.component.css']
})
export class UpdateequipmentcategoryComponent implements OnInit {

  constructor(private updateEquipmentCategoryService: ElecteicEquipmentCategoryService) { }

  ngOnInit(): void {
  }

  equipmentCategoryForm = new FormGroup({
    equipmentcategoryid: new FormControl(""),
    equipmentcategoryname: new FormControl(""),
  });

  equipmentCategoryUpdated(){
    this.updateEquipmentCategoryService.updateEquipmentCategory([
      this.equipmentCategoryForm.value.equipmentcategoryid,
      this.equipmentCategoryForm.value.equipmentcategoryname,
    ]).subscribe()
  }
}
