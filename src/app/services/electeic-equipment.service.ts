import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:5001/api/Equipment/";

  addEquipment(equipment:any){
    return this.http.post(this.baseServerUrl+'addEquipment',{
      EquipmentName: equipment[0],
      PartId: equipment[1],
      EquipmentGroupId: equipment[2],
      EquipmentCategoryId: equipment[3]
    },{responseType:'text'});
  }
  updateEquipment(equipment:any){
    return this.http.put(this.baseServerUrl+'updateEquipment',{
      EquipmentName: equipment[0],
      PartId: equipment[1],
      EquipmentGroupId: equipment[2],
      EquipmentCategoryId: equipment[3]
    },{
      responseType:'text'
    });
  }
  deleteEquipment(id:number){
    return this.http.delete(this.baseServerUrl+'deleteEquipment'+'/'+id,{
      responseType:'text'
    });
  }
  getAllEquipmentCategory(){
    return this.http.get('https://localhost:5001/api/EquipmentCategory/getEquipmentcategory');
  }
  getAllEquipment(){
    return this.http.get('https://localhost:5001/api/Equipment/getEquipment');
  }
  getEquipmentGroupByCategoryId(equipCatId:any){
    return this.http.get('https://localhost:5001/api/EquipmentGroup/getEquipmentCategoryByGroupId/'+equipCatId);
  }
}
