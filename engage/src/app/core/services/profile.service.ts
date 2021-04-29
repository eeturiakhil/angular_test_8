import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {of as observableOf} from 'rxjs';
import { map } from "rxjs/operators";
import {catchError} from 'rxjs/operators/catchError';
import {throwError as observableThrowError} from 'rxjs';

import { GlobalParams } from '../common/global-params';
import { CommonSharedService } from './../shared-services/common-shared.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  token;
  options;
  //default_selected_option:any;
  selectedBblUserId: any;
  selectedGrphType: any;
  private apiURL: string;
  private openProspect:Subject<any>=new Subject();
  private prospectdone:Subject<any>=new Subject();
  private changeProspect:Subject<any>=new Subject();
   private prospectcnt:Subject<any>=new Subject();

  constructor(private globalSharedService: CommonSharedService, private http: HttpClient, private globals: GlobalParams) { this.apiURL = globals.baseAPIURL; }
  getProspectsStatuses() {
    let local_statuses = localStorage.getItem('project_statuses');
    if (local_statuses == null) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.get(this.apiURL + '/stages', _options).pipe(map(res => {
        localStorage.setItem('project_statuses', JSON.stringify(res || []));
        return res || [];
      }));
    } else {
      let res = JSON.parse(local_statuses);
      return observableOf(res);
    }
  }

  getProspectsPropencity() {
    // let local_propencity = localStorage.getItem('propencity');
    // if (local_propencity == null) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.get(this.apiURL + '/propensity', _options).pipe(map(res => {
        // localStorage.setItem('propencity', JSON.stringify(res || []));
        return res || []
      }));
    // } else {
    //   let res = JSON.parse(local_propencity);
    //   return Observable.of(res);
    // }
  }

  getProfileElements() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/auditelements', _options).pipe(map(res => res || []));
  }

  updateFavorite(prospects) {
    let params = {};
    params["data"] = prospects;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects/favorite', params, _options).pipe(map(res => res || []));
  }

  getUserTags(type='') {
    //let user_tags = localStorage.getItem('user_tags');
    //if (user_tags == null) {
    let tempapiUrl=this.apiURL + '/tags';
    if(type){
      tempapiUrl+="?type="+type;
    }
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.get(tempapiUrl, _options).pipe(map(res => {
        // localStorage.setItem('user_tags', JSON.stringify(res || []));
        return res || [];
      }));
    /*} else {
    let res = JSON.parse(user_tags);
     return Observable.of(res);
    }*/
  }

  deleteUserListingTag(tags) {
    let params = {};
    params["data"] = tags;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/untagprospect', params, _options).pipe(map(res => res || []));
  }

  getListingTags(ids: any) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/listing/tags/' + ids, _options).pipe(map(res => res || []));
  }

  addListingTags(tags) {
    let params = {};
    params["data"] = tags;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/tagprospect', params, _options).pipe(map(res => res || []));
  }
  addTags(tags) {
    let params = {};
    params["data"] = tags;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/createtag', params, _options).pipe(map(res => res || []));
  }

  ListingTagIds(tags) {
    let params = {};
    params["data"] = tags;
           let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/taglistingids', params,_options).pipe(map(res => res || []));
  }

  getUserProfileCategories() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/listing/categories', _options).pipe(map(res => res || []));
  }

  getUserMasterCategories() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/categories', _options).pipe(map(res => res || []));
  }

  getAllMasterCategories() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/master_categories', _options).pipe(map(res => res || []));
  }

  addPrimaryCategory(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/add_category', params, _options).pipe(map(res => res || []));
  }

  /* Engagement APIS */

  getEngagements(pId, type) {
    let params = { pId: pId, type: type };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/engagements_list/', params, _options);
  }

  addEngagement(params, id) {
    if (isNaN(parseInt(id))) {
      console.log('in post');
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.post(this.apiURL + '/engagements', params, _options).pipe(map(res => res || []));
    } else {
      params.id = id;
      console.log('in put');
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.post(this.apiURL + '/update_engagement', params, _options).pipe(map(res => res || []));
    }
  }

  deleteEngagement(id) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.delete(this.apiURL + '/engagement/' + id, _options).pipe(map(res => res || []));
  }
  /* Engagement APIS  Ends*/

  deleteContext(context) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.delete(this.apiURL + '/context/' + context._id, _options).pipe(map(res => res || []));
  }

  getContextList(pId) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/contexts/' + pId, _options).pipe(map(res => res || []));
  }

  addContext(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/contexts', params, _options).pipe(map(res => res || []));
  }

  updateContext(params, prospectId) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/update_context/' + prospectId, params, _options).pipe(map(res => res || []));
  }

  regenerateProfile(pId) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/regenerate_profile/' + pId, _options).pipe(map(res => res || []));
  }

  //Server end points is not there
  regenerateMultipleProfile(pIds) {
    console.log(pIds);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/regenerate_multiple_profile', pIds, _options).pipe(map(res => res || []));
  }

  syncProfile(params, crm_type) {
    console.log(crm_type);
    console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    if(crm_type == 'base') {
      return this.http.post(this.apiURL + '/sync_base_profile', params, _options).pipe(map(res => res || []));
    } else if(crm_type == 'sf') {
      return this.http.post(this.apiURL + '/sync_sf_profile', params, _options).pipe(map(res => res || []));
    }
  }

  archiveProfile(pIds) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/archive_profile/', pIds, _options).pipe(map(res => res || []));
  }

  uploadFile(params) {
    // let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/upload_file', params).pipe(map(response => response || []));
  }

  submitProfile(profile_data) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      'profile_data': profile_data
    }
    let end_proint = '/profile/create-profile';
    if (profile_data.id && profile_data.id > 0) {
      end_proint = '/profile/update-profile';
    }
    return this.http
      .post(this.apiURL + end_proint, params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getProfile(profile_id) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .get(this.apiURL + '/profile/' + profile_id, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getDisplayAdsData(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/display_ads', params, _options).pipe(map(res => res || []));
  }

  customizeGTKCards(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/customize_gtk_cards', params, _options).pipe(map(res => res || []));
  }



  getLiveData(cid, pid) {
    //this is only for one listing and one category
    let params = { data: "eyJsaXN0aW5naWQiOiIyNjE4MTk5IiwiY2F0ZWdvcnlpZCI6Ijc2MiIsImRldmljZV90eXBlIjoxLCJkaXNwbGF5X3NlY3Rpb24iOiJkZWZhdWx0IiwidXNlcl9pZCI6IjEwMDkiLCJwYXJ0bmVyX2lkIjoiMTUyIn0=" };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/get_live_data', params, _options).pipe(map(res => res || []));

  }

  getUnsubscribedDMAs() {
    let _options = this.globalSharedService.setRequestHeaders();
    //let fakeId = 12345;
    //return this.http.get(this.apiURL + '/getdmas/'+fakeId, _options).map(res => res || []);
    return this.http.get(this.apiURL + '/getdmas', _options).pipe(map(res => res || []));
  }

  subscribeDMA(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/subscribe_dma', params, _options).pipe(map(res => res || []));
  }

  downloadFile(url): Observable<Blob> {
    // let options = new RequestOptions({ responseType: ResponseContentType.Blob });
    return this.http.get(url, {responseType: 'blob'}).pipe(map((res: any) => res.blob()));
  }

  getWebsnap(prospect_id, type) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      'prospect_id': prospect_id,
      'type': type
    }
    return this.http
      .post(this.apiURL + '/profile/getwebsnap/', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getAuditElementFaqs(prospect_id, section_id, element_id) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      'prospect_id': prospect_id,
      'section_id': section_id,
      'element_id': element_id
    }
    return this.http
      .post(this.apiURL + '/profile/auditelementfaqs/', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getFile(path: string): Observable<Blob> {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    // let options = {
    //   headers: headers,
    //   responseType: 'blob'
    // }

    // let options = new RequestOptions({ responseType: ResponseContentType.Blob });
    return this.http.get(path, {responseType: 'blob'}).pipe(
      map((response: any) => <Blob>response.blob()),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getGoogleSearchDetails(searchKey, nextToken) {
    let params = {
      'nt': nextToken,
      'keyword': 'hotels near United States'
    }
    console.log("Params list");
    console.log(params);

    let _options = this.globalSharedService.setRequestHeaders();
    return this.http

      .post(this.apiURL + '/external-search-prospects-api/', params, _options).pipe(

      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getExternalSearchList(searchKey, location, source, nextToken) {
    let params = {
      'location' : location,
      'keyword': searchKey,
      'source': source,
      'nt': nextToken
    }
    console.log("Params list");
    console.log(params);

    let _options = this.globalSharedService.setRequestHeaders();
    return this.http

      .post(this.apiURL + '/externalsearch/', params, _options).pipe(

      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  insertListing(params) {
    console.log('Params list');
    console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects', params, _options).pipe(map(res => res || []));
  }

  getExternalIdDetails(reference_id) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.get(this.apiURL + '/leadsearch/' + 'CID' + '/' + reference_id, _options).pipe(map(res => res || []));
  }

  findLeadsByListing(params) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.post(this.apiURL + '/findleads', params,_options).pipe(map(res => res || []));
  }

  manageSFDeDup(params) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.post(this.apiURL + '/postsfsync', params,_options).pipe(map(res => res || []));
  }

  getAssignUsers(id = '', searchKey = '') {
    let _options = this.globalSharedService.setRequestHeaders();
    if(searchKey != '') {
      return this.http.get(this.apiURL + '/user/assignusers?user_id='+id+'&keyword='+searchKey, _options).pipe(map(res => res || []));
    } else {
      return this.http.get(this.apiURL + '/user/assignusers?user_id='+id, _options).pipe(map(res => res || []));
    }
  }

  assignProfiles(params) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/assign', params, _options).pipe(map(res => res || []));
  }

  getReports(params) {
    console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/reports/report', params, _options).pipe(map(res => res || []));
  }

  getbulkUpload(params) {
    console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/profiles/bulkupload', params, _options).pipe(map(res => res || []));
  }

  getActivityLog() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/profiles/activitylog', _options).pipe(map(res => res || []));
  }
  // Start:common request (bagesh-3217 on 09-04-2019)
  commonRequest(reqObject) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      'postData': reqObject.postData,
      'method': reqObject.method,
      'url' : reqObject.url
    }
    let end_proint = '/global_request';
    return this.http
      .post(this.apiURL + end_proint, params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }
  // End:common request (bagesh-3217 on 09-04-2019)

  //Start:Thumb Request (viswa-3213 on 29-05-19)
    getThumbUrl(reqObject) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      'postData': reqObject.postData,
      'method': reqObject.method,
      'url' : reqObject.url
    }
    let end_proint = '/global_request';
    return this.http
      .post(this.apiURL + end_proint, params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }
  //End

  listingDetailsByFpid(fpid){
     return this.http.get(this.apiURL + '/location/get_details_by_fpid?fp_id='+fpid+'&bs=' + this.globals.bs).pipe(map(res => res || []));
  }
  // Get the JSON from CSV (Nagesh-3217 on 06-08-2019)
  getjsonfromcsv(params) {
    console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/csv_to_json', params, _options).pipe(map(res => res || []));
  }
  openProspect$=this.openProspect.asObservable();
  callProspectCard(data) {
  if(data)
    {
    this.openProspect.next(data)
    }
  }
  prospectdone$=this.prospectdone.asObservable();
  prospectcompleted(data)
  {
    this.prospectdone.next(data)
  }
  prospectcnt$=this.prospectcnt.asObservable();
  fetchProspectCnt(data)
  {
   this.prospectcnt.next(data)
  }
  changeProspect$=this.changeProspect.asObservable();
  prospectChange(data)
  {
    this.changeProspect.next(data);
  }

}
