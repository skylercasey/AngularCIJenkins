import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentGroupService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "https://localhost:5001/api/EquipmentGroup/";

  addEquipmentGroup(equipmentgroup:any){
    return this.http.post(this.baseServerUrl+'addEquipmentGroup',{
      EquipmentGroupName: equipmentgroup[0],
      EquipmentCategoryId: equipmentgroup[1],
    },{responseType:'text'});
  }
  updateEquipmentGroup(equipmentgroup:any){
    return this.http.put(this.baseServerUrl+'addEquipmentGroup',{
      EquipmentGroupId: equipmentgroup[1],
      EquipmentGroupName: equipmentgroup[2],
      EquipmentCategoryId: equipmentgroup[3],
    },{responseType:'text'});
  }
  getAllEquipmentCategory(){
    return this.http.get('https://localhost:5001/api/EquipmentCategory/getEquipmentCategory');
  }
}
