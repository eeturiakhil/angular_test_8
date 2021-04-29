import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import {catchError} from 'rxjs/operators/catchError';
import {of as observableOf} from 'rxjs';
import {throwError as observableThrowError} from 'rxjs';

import { CommonSharedService } from './../shared-services/common-shared.service';
import { GlobalParams } from '../common/global-params';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private baseurl: string;
  access_token;

  constructor(private http: HttpClient, private cookieService: CookieService, private _securityService: SecurityService, private globals: GlobalParams, private globalSharedService: CommonSharedService) {
    this.access_token = this.cookieService.get('lt');
    this.baseurl = globals.baseAPIURL;
  }

  getUserProfile(id) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .get(this.baseurl + '/users/' + id, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  set_profile(id, params) {
    let _options = this.globalSharedService.setRequestHeaders();

    return this.http
      .post(this.baseurl + '/users/'+id, params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  updatepasswrod(id,params)
  {
    let _options = this.globalSharedService.setRequestHeaders();


   return this.http.post(this.baseurl + '/profile/changepassword', params, _options).pipe(map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  updateFavorite(prospects) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {};
    params["data"] = prospects;
    return this.http.post(this.baseurl + '/prospects/favorite', params, _options).pipe(map(res => res || []));
  }

  /* User Setting Preferences - Start */

  getRecommendedProducts() {
    let local_statuses = localStorage.getItem('recommended_products');
    if (local_statuses == null) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.get(this.baseurl + '/recommended_products', _options).pipe(map(res => {
        localStorage.setItem('recommended_products', JSON.stringify(res || []));
        return res || [];
      }));
    } else {
      let res = JSON.parse(local_statuses);
      return observableOf(res);
    }
  }

  // 3180: Code for manager module - Start
  getReportingUsers(id) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.baseurl + '/user/reportingusers/'+id, _options).pipe(map(res => res || []));
  }
  // 3180: Code for manager module - End

  updateProfilePreference(element_id, status) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      "data": {
        "element_id": element_id,
        "status": status
      }
    };
    return this.http.post(this.baseurl + '/settings/update-profile-preference', params, _options).pipe(map(res => res || []));
  }

  addCategoryPreference(category_id,pageSource=1) {
    let _options = this.globalSharedService.setRequestHeaders();
    let userSettings = this.globalSharedService.getUserSettings();
    let params = {
      "data": {
        "category_id": category_id,
        "category_source": userSettings['category_source'],
        "page_source":pageSource
      }
    };
    return this.http.post(this.baseurl + '/settings/add-category-preference', params, _options).pipe(map(res => res || []));
  }

  addProductPreference(product_id, source,pageSource=1) {
    let params = {
      "data": {
        "product_id": product_id,
        "source_type": source,
        "page_source":pageSource
      }
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.baseurl + '/settings/add-product-preference', params, _options).pipe(map(res => res || []));
  }

  getPreferedSignals() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.baseurl + '/settings/preferredsignals', _options).pipe(map(res => res || []));
  }

  getPreferedCategories() {
    let _options = this.globalSharedService.setRequestHeaders();
    let userSettings = this.globalSharedService.getUserSettings();
    let params = {
      "data": {
        "category_source": userSettings['category_source']
      }
    };
    return this.http.post(this.baseurl + '/settings/preferredcategories', params,_options).pipe(map(res => res || []));
  }

  getPreferedProducts() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.baseurl + '/settings/preferredproducts', _options).pipe(map(res => res || []));
  }

  getProspectingCalendar() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.baseurl + '/settings/prospectingcalendar', _options).pipe(map(res => res || []));
  }

  deletePreferenceCategory(category_id) {
    let _options = this.globalSharedService.setRequestHeaders();
    let userSettings = this.globalSharedService.getUserSettings();
    let params = {
      "data": {
        "category_id": category_id,
        "category_source": userSettings['category_source']
      }
    };
    return this.http.post(this.baseurl + '/delete_preferredcategory', params, _options).pipe(map(res => res || []));
  }

  deletePreferenceProduct(product_id) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      "data": {
        "product_id": product_id
      }
    };
    return this.http.post(this.baseurl + '/delete_preferredproduct', params, _options).pipe(map(res => res || []));
  }

  deletePreferenceMarket(market_id) {
    let params = {
      "data": {
        "market_id": market_id
      }
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.baseurl + '/delete_preferredmarket', params, _options).pipe(map(res => res || []));
  }

  deleteProspectingCalendar(category_id) {
    let params = {
      "data": {
        "category_id": category_id
      }
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.baseurl + '/delete_prospectingcalendar', params, _options).pipe(map(res => res || []));
  }

   getPendingProfiles() {
     let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.baseurl + '/profile/numberofprofilespending',_options).pipe(map(res => res || []));
  }


  addOnboardLog(data) {
    let _options = this.globalSharedService.setRequestHeaders();
    data['userAgent'] = btoa(navigator.userAgent);
    let params = {
      "data": data
    };
    return this.http.post(this.baseurl + '/users/onboardlog', params, _options).pipe(map(res => res || []));
  }

  getCustomProducts() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.baseurl + '/custompreferredproducts', _options).pipe(map(res => res || []));
  }

  createCustomProducts(product_name,status) {
    let params = {
        "product_name": product_name,
        "status":status
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.baseurl + '/save_custompreferredproducts', params, _options).pipe(map(res => res || []));
  }

  deleteCutomProduct(product_id) {
    let params = {
      "product_id": product_id
  };

  let _options = this.globalSharedService.setRequestHeaders();
  return this.http.put(this.baseurl + '/delete_custompreferredproduct/'+product_id, params, _options).pipe(map(res => res || []));
  }

  /* User Setting Preferences - End */

  /* Game Plan - Start */

  // getGamePlanData(id, source) {
  //   let params = {
  //     "data" : {
  //       "id" : id,
  //       "display_type" : "section_wise",
  //       "is_new_view": 1
  //     }
  //   };
  //   return this.http.post(this.baseurl + '/gameplan_data', params).map(res => res || []);
  // }

  // saveLikeStatus(id, status) {
  //     let params = {
  //         "data" : {
  //             "gameplan_library_id" : id,
  //             "status" : status
  //         }
  //     };
  //     return this.http.post(this.baseurl + '/saveLikeStatus', params).map(res => res || []);
  // }

  /* Game Plan - End */

}
