import { GlobalParams } from '../common/global-params';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

import { CommonSharedService } from './../shared-services/common-shared.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  token;
  options;
  //default_selected_option:any;
  selectedBblUserId: any;
  selectedGrphType: any;
  private apiURL:string;



  constructor(private http: HttpClient, private globals:GlobalParams,private globalSharedService:CommonSharedService) {
    this.apiURL = globals.baseAPIURL;
  }

  getSearchData(params) {
    return this.http.post(this.apiURL + '/prospects/fpprospects', params).pipe(map(res => res || []));
  }

  getSearchCategories(params) {
    return this.http.post(this.apiURL + '/prospects/fpcategorieslist', params).pipe(map(res => res || []));
  }

  getFpFiltersList() {
    //console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/prospects/fpfilterslist?bs=' + this.globals.bs,_options).pipe(map(res => res || []));
  }

  getFpCategories(params){
    return this.http.post(this.apiURL + '/fp/categories', params).pipe(map(res => res || []));
  }

  getFpTechnologies(params){
    return this.http.post(this.apiURL + '/fp/technologies', params).pipe(map(res => res || []));
  }

  getSectorsData(params){
    return this.http.post(this.apiURL + '/user/get_sectors_data', params).pipe(map(res => res || []));
  }

  getPlaceDetails(place_id) {
    //console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/placedetails/'+place_id,_options).pipe(map(res => res || []));
  }

  getPlaceDetailsWithSessionParams(place_id,params) {
    //console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/placedetailswithsession/'+place_id+'/'+params,_options).pipe(map(res => res || []));
  }

  insertFpListing(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects', params, _options).pipe(map(res => res || []));
  }

  insertMultipleFpListing(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects/createmany', params, _options).pipe(map(res => res || []));
  }

  bbsAddedListings(params){
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects/availbilitybyfpid', params, _options).pipe(map(res => res || []));
  }

  saveFpSearchCriteria(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/savefpsearchcriteria', params,_options).pipe(map(res => res || []));
  }

  saveFpSearchCount(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/fpsearchcountupdate', params,_options).pipe(map(res => res || []));
  }

  saveFpSearchLog(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/savefpsearchlog', params, _options).pipe(map(res => res || []));
  }

  saveIgnoreLeads(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects/ignoreleads', params, _options).pipe(map(res => res || []));
  }
  updateFavorites(params) {
    return this.http.post(this.apiURL + '/user/mark_fav', params).pipe(map(res => res || []));
  }
  SearchresultsService
   private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
