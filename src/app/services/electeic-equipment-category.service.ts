import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentCategoryService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "https://localhost:5001/api/EquipmentCategory/";

  addEquipmentCategory(equipmentcategory:any){
    
    return this.http.post(this.baseServerUrl+'addEquipmentCategory',{
      EquipmentCategoryName: equipmentcategory[0]
    },{responseType:'text'});
  }
  updateEquipmentCategory(equipmentcategory:any){
    return this.http.post(this.baseServerUrl+'updateEquipmentCategory',{
      EquipmentCategoryId: equipmentcategory[0],
      EquipmentCategoryName: equipmentcategory[1]
    },{responseType:'text'});
  }
}
