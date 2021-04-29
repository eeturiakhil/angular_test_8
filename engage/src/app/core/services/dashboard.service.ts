import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators/catchError';
import {Observable, Subject, throwError as observableThrowError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from "rxjs/operators";
import {of as observableOf} from 'rxjs';

import { SecurityService } from './security.service';
import { GlobalParams } from '../common/global-params';
import { CommonSharedService } from './../shared-services/common-shared.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseurl: string;
  access_token;
  expend: any;
  invokeEvent: Subject<any> = new Subject();
  constructor(private http: HttpClient, private cookieService: CookieService, private _securityService: SecurityService, private globals: GlobalParams, private globalSharedService: CommonSharedService) {
    this.baseurl = globals.baseAPIURL;
    this.loadToken();
  }
  setExpand(expend) {
    this.expend = expend;
    // sessionStorage.setItem('listingid', this.id);
    this.invokeEvent.next(this.expend);
  }
  getExpand(expend) {
    return this.expend;
  }
  loadToken() {

    //this.access_token  = this._securityService.encodeString(atob(localStorage.getItem("access_token")),"123");
    this.access_token = this.cookieService.get('lt');


  }
  // Remove this function once we get all services form Visveshwar rao
  //Make this method accessable to all service
  /*
    encodeString(s, k) {
      var enc = "";
      var str = "";
      // make sure that input is string
      str = s.toString();
      for (var i = 0; i < s.length; i++) {
        // create block
        var a = s.charCodeAt(i);
        // bitwise XOR
        var b = a ^ k;
        enc = enc + String.fromCharCode(b);
      }
      return enc;
    }
    */

  getDashboardCardData(key, selected_tag, data = "") {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      card_type: key,
      selected_tag: selected_tag,
      access_token: this.access_token,
      from_date: (data['from_date'] != "") ? data['from_date'] : '',
      to_date: (data['to_date'] != "") ? data['to_date'] : ''
    };
    return this.http
      .post(this.baseurl + "/get_card_data", params, _options).pipe(
      map(res => res || []));
  }

  organizeCards(cardsList) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      cards_list: cardsList
    };
    return this.http
      .post(this.baseurl + "/home/organize_cards", params, _options).pipe(map(res => res || []));
  }

  // this is going to one function to request all cards data
  getDashBoardCardsData(cardName) {
    this.loadToken();
    let params = {
      card_type: cardName,
      access_token: this.access_token
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + "/get_card_data", params, _options).pipe(map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);

  }

  getBZData(url) {

    let params = {
      access_token: this.access_token,
      url: url,
      method: "GET"
    };
    let _options = this.globalSharedService.setRequestHeaders();
    //alert ("access token is " + this.access_token)
    return this.http
      .post(this.baseurl + "/getPageData", params, _options).pipe(map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getDataByUrl(url) {
    //recomended list request is not going
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + "/get_data_by_url", { "url": url }, _options).pipe(
      map(res => res || []));
  }
  getDataByAuth(url,token) {
    let _options: any = this.globalSharedService.setRequestHeadersBearerToken(token);
    console.log('_options: '+JSON.stringify(_options));
    return this.http.get(url, _options).pipe(map(response => response || []));
}
  getKnowMoreBorrellData(url, opt) {
    let _options = this.globalSharedService.setRequestHeaders();

    if (!opt) {
      var url = url.replace("default", "know_more");
      return this.http
        .post(this.baseurl + "/get_know_more_borrell", { "url": url }, _options).pipe(
        map(res => res || []));
    } else {
      let params = { "data": "eyJsaXN0aW5naWQiOiIyNjE4MTk5IiwiY2F0ZWdvcnlpZCI6Ijc2MiIsImRldmljZV90eXBlIjoxLCJkaXNwbGF5X3NlY3Rpb24iOiJrbm93X21vcmUiLCJ1c2VyX2lkIjoiMTAwOSIsInBhcnRuZXJfaWQiOiIxNTIifQ==" };
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.post(this.baseurl + '/get_live_data', params, _options).pipe(map(res => res || []));
    }

  }

  // this can be removed once home/buzzcorner service is ready
  getBuzzCornerData() {
    let params = {
      card_type: "buzzcornor",
      access_token: "063cd44cc6d1a15077d598ee12fda3a9fa9e8c61"//this.access_token
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + "/cardData", params, _options).pipe(
      map(res => res || []));
  }

  get_opportunities(cardName) {
    let params = {
      card_type: cardName,
      access_token: this.access_token
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + '/get_card_data', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        console.log(error);
        return observableThrowError(new Error(error.status));
      }),);
  }

  get_buzz_score(cardName, tag_id, data) {
    let _options = this.globalSharedService.setRequestHeaders();
    let q = (tag_id != undefined && tag_id != "") ? { "tag_id": tag_id } : "";
    let service_url = cardName;
    if (data != "" && q != "") {
      service_url += '?query=' + btoa(JSON.stringify(q)) + '&from_date=' + data['from_date'] + '&to_date=' + data['to_date'];
    } else if (q != "" && data == "") {
      service_url += '?query=' + btoa(JSON.stringify(q));
    } else if (q == "" && data != "") {
      service_url += '?from_date=' + data['from_date'] + '&to_date=' + data['to_date'];
    }
    let params = {
      end_point: service_url,
      access_token: this.access_token
    };
    return this.http
      .post(this.baseurl + '/home/buzz_score', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  gettodolist(cardName) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      card_type: cardName,
      access_token: this.access_token
    };
    return this.http
      .post(this.baseurl + '/gettodolist', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  alerts(dateRange = '') {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = {
      from_date: dateRange['from_date'],
      to_date: dateRange['to_date']
    };
    return this.http
      .post(this.baseurl + '/home/monitor', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  cards_list() {
    let product_env = (this.globalSharedService.getProductType() && this.globalSharedService.getProductType() != null) ? this.globalSharedService.getProductType() : this.globals.product_env['advisor'];
    let params = {
      access_token: this.access_token,
      product_env: product_env,
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + '/cards/list', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }
  // Start: Welcome Card Info (By Nagesh-3217 on 19-12-2018) //
  welcome_cards() {
    let params = {
      access_token: this.access_token
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + '/cards/welcomecarddetails', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }
  // End: Welcome Card Info (By Nagesh-3217 on 19-12-2018) //
  get_categories(end_point, search_key = '') {
    let local_categories = localStorage.getItem('master_categories');
    let category_value;
    if (local_categories != null) {
      category_value = JSON.parse(local_categories);
    }
    if (typeof category_value != 'undefined' && typeof category_value.data != 'undefined' && category_value.data.length > 0) {
      let res = JSON.parse(local_categories);
      return observableOf(res);
    } else {
      let user_settings = this.globalSharedService.getUserSettings();
      let params = {
        card_type: end_point,
        category_source: user_settings['category_source'],
        search_key: search_key,
        access_token: this.access_token
      };
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http
        .post(this.baseurl + '/get_categories', params, _options).pipe(
        map(res => {
          let nav = navigator.userAgent;
          let isMobile = (/\b(iPad|iPod)\b/i.test(nav));
          let iOS = this.isIOSWithSafari();
          if (!isMobile && !iOS)
            localStorage.setItem('master_categories', JSON.stringify(res || []));
          return res || [];
        }),
        catchError((error: any) => {
          return observableThrowError(new Error(error.status));
        }),);
    }

  }
  isIOSWithSafari() {
    var agent = navigator.userAgent;//'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15';
    var isSafari: any = agent.match(/Version\/[\d\.]+.*Safari/);
    var iOS: any = /iPad|iPhone|iPod|Macintosh/.test(agent);
    return (iOS && iOS != null && iOS != 'undefined' && iOS != false && isSafari && isSafari != null && isSafari != 'undefined' && isSafari != false);
  };
  getFeaturePopupContent() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .get(this.baseurl + '/user/launchinfo', _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  savePopupClickEvent(data) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http
      .post(this.baseurl + "/savePopupClickEvent", { 'data': data }, _options).pipe(
      map(res => res || []));
  }

  // getCampaignProfiles(payload) {
  //   let _options = this.globalSharedService.setRequestHeaders();
  //   return this.http
  //     .get('assets/sample_data/campaign_profiles.json')
  //     .map(res => res || []);
  //   // return this.http
  //   //   .post(this.baseurl + "/savePopupClickEvent", { 'data': payload }, _options)
  //   //   .map(res => res || []);
  // }

}
