import { GlobalParams } from '../common/global-params';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommonSharedService {
  request_query;
  redirectionUrl: any;
  redirection_url;
  agreement_status: number;
  private openPayment = new Subject<string>();

  private profileImage = new Subject<string>();
  private userCancel = new Subject<boolean>();

  private profileTags = new Subject<string>();
  private resultsCount = new Subject<string>();
  private segmentData = new Subject<string>();

  private presetId = new Subject<string>();
  private redirectsearchresultto = new Subject<string>();
  private getOnboard = new Subject<boolean>();
  private sharedProspect = new Subject<string>();
  private backEventClick = new Subject<string>();
  private keywordSearch = new Subject<string>();
  private createIntentLogData = new Subject<string>();

  private navEvent: Subject<any> = new Subject();
  private pauseTextEvent: Subject<any> = new Subject();
  private userListEvent: Subject<any> = new Subject();
  private cancelSubEvent: Subject<any> = new Subject();
  private cardSubEvent: Subject<any> = new Subject();
  private updateCardEvent: Subject<any> = new Subject();
  private updateDefaultProductEvent: Subject<any> = new Subject();
  private cardPaymentEvent: Subject<any> = new Subject();
  private userInfoEvent: Subject<any> = new Subject();



  private disableFilter: Subject<any> = new Subject();
  private enableFilter: Subject<any> = new Subject();
  private uniqueRecord: Subject<any> = new Subject();
  private openedSummary: Subject<any> = new Subject();
  private extendedState = new Subject<string>();
  private assignProfile = new Subject<string>();
  private showActivityLog = new Subject<boolean>();
  private showProfilesActivityLog = new Subject<boolean>();

  private getActivityLogCount = new Subject<boolean>();
  private getActivityTabStatus = new BehaviorSubject<boolean>(false);

private newPackagepopupClose = new Subject<boolean>();
  private hideSavedSearchFilter = new Subject<boolean>();


  public actionRestrictedPartner: any = [];
  constructor(private http: HttpClient, private globals: GlobalParams, private router: Router,) { }

  profileImage$ = this.profileImage.asObservable();

  resultsCount$ = this.resultsCount.asObservable();

  segmentData$ = this.segmentData.asObservable();
  presetId$ = this.presetId.asObservable();

  openPayment$ = this.openPayment.asObservable();

  profileTags$ = this.profileTags.asObservable();
  getOnboard$ = this.getOnboard.asObservable();
  userCancel$ = this.userCancel.asObservable();
  sharedProspectparams$ = this.sharedProspect.asObservable();

  redirectsearchresultto$ = this.redirectsearchresultto.asObservable();


  backButtonEventClick$ = this.backEventClick.asObservable();
  redirectToKeywordSearch$ = this.keywordSearch.asObservable();
  createIntentLogData$ = this.createIntentLogData.asObservable();

  navEvent$ = this.navEvent.asObservable();
  pauseTextEvent$ = this.pauseTextEvent.asObservable();
  userListEvent$ = this.userListEvent.asObservable();
  cancelSubEvent$ = this.cancelSubEvent.asObservable();
  cardSubEvent$ = this.cardSubEvent.asObservable();
  updateCardEvent$ = this.updateCardEvent.asObservable();
  updateDefaultProductEvent$ = this.updateDefaultProductEvent.asObservable();
  userInfoEvent$ = this.userInfoEvent.asObservable();
  cardPaymentEvent$ = this.cardPaymentEvent.asObservable();
  disableFilter$ = this.disableFilter.asObservable();
  enableFilter$ = this.enableFilter.asObservable();

  extendedState$ = this.extendedState.asObservable();

  assignProfile$ = this.assignProfile.asObservable();

  showActivityLogTab$ = this.showActivityLog.asObservable();

  showProfilesActivityLog$ = this.showProfilesActivityLog.asObservable();
  getActivityLogCount$ = this.getActivityLogCount.asObservable();
  newPackagepopupClose$ = this.newPackagepopupClose.asObservable();
  getActivityTabStatus$ = this.getActivityTabStatus.asObservable();

  hideSavedSearchFilter$ = this.hideSavedSearchFilter.asObservable();

  savedSearchFilter(data:boolean){
    this.hideSavedSearchFilter.next(data);
  }



  closeNewpackagePopup(data:boolean){
    this.newPackagepopupClose.next(data);
  }


getActivityLogCountData(data:boolean){
  this.getActivityLogCount.next(data);
}

setActivityTabStatusUpdate(data:boolean){
  this.getActivityTabStatus.next(data);
}

showAddedActivityTab(data:boolean){
  this.showProfilesActivityLog.next(data);
}


  showActivityTab(data:boolean){
    this.showActivityLog.next(data);
  }


  openUpdatePaymentPopup(data:string){
    this.openPayment.next(data);
  }

  disableLocation() {
    this.disableFilter.next();
  }

  enableLocation() {
    this.enableFilter.next();
  }

  callNavigation() {
    this.navEvent.next();
  }

  pauseUserText() {
    this.pauseTextEvent.next();
  }

  callUserList() {
    this.userListEvent.next();
  }

  logoutUser() {
    this.cancelSubEvent.next();
  }

  callCardDetails() {
    this.cardSubEvent.next();
  }
  updateCardDetails() {
    this.updateCardEvent.next();
  }

  segmentTitle(data: string) {
    this.segmentData.next(data);
  }
  presetIdData(data: string) {
    this.presetId.next(data);
  }

  updateDefaultProduct() {
    this.updateDefaultProductEvent.next();
  }

  updatePaymentFailed() {
    this.cardPaymentEvent.next();
  }

  updateUserInfo() {
    this.userInfoEvent.next();
  }

  getnewprofileinfo(data: string) {
    this.resultsCount.next(data);
  }

  userSettingsCancel(data: boolean) {
    this.userCancel.next(data);
  }


  getsearchresults(data: any) {
    this.redirectsearchresultto.next(data);
  }

  updatenewprofileimage(data: string) {
    this.profileImage.next(data);
  }

  updatenewtag(data) {
    this.profileTags.next(data);
  }

  setToken(lt) {
    let login_token = btoa(lt);
    localStorage.setItem('lt', login_token);
  }

  getToken() {
    let login_token = localStorage.getItem('lt');
    return (login_token) ? atob(login_token) : '';
  }

  getEncodedToken() {
    return localStorage.getItem('lt');
  }

  getSiteViewType() {
    //let site_view_type =  localStorage.getItem('site_view_type');
    let site_view_type = sessionStorage.getItem('site_view_type');
    return (site_view_type) ? site_view_type : 'web';
  }

  getPartnerPackageType() {
    let user_settings = this.getUserSettings();
    //return (user_settings.subscription_type) ? user_settings.subscription_type : 0;
    return (user_settings.partner_package_type) ? user_settings.partner_package_type : 0;
  }


  getWebLimitationStatus() {
    let site_View = this.getSiteViewType();
    let partner_subscription = this.getPartnerPackageType();
    if (site_View == 'iframe' || partner_subscription == 2) {
      return true;
    } else {
      return false;
    }
  }

  private searchScopeItem = new Subject();
  searchScopeItemParam$ = this.searchScopeItem.asObservable();

  updateSearchScope(item) {
    this.searchScopeItem.next(item);
  }

  setOnboard(item) {
    this.getOnboard.next(item);
  }

  setProductType(product) {
    localStorage.setItem('product_env', product);
  }

  getProductType() {
    let product = localStorage.getItem('product_env');
    return (product != '' && product != null) ? product : '';
  }

  setUserDetails(user_info) {
    let user_information = btoa(JSON.stringify(user_info));
    localStorage.setItem('user_info', user_information);
    let country_code = (user_info.country_details.iso_country_code) ? user_info.country_details.iso_country_code.toUpperCase() : 'US';
    localStorage.setItem('country_code', country_code);
  }

  getUserDetails() {
    let user_information = localStorage.getItem('user_info');
    return (user_information != '' && user_information != null) ? JSON.parse(atob(user_information)) : '';
  }

  setOwfPartnerDetails(partner) {
    let partner_info = btoa(JSON.stringify(partner));
    localStorage.setItem('owf_info', partner_info);
  }

  getOwfPartnerDetails() {
    let partner_info = localStorage.getItem('owf_info');
    return (partner_info != '' && partner_info != null) ? JSON.parse(atob(partner_info)) : '';
  }

  setOwfParentPartner(partner) {
    let partner_info = btoa(JSON.stringify(partner));
    localStorage.setItem('parent_partner', partner_info);
  }

  getOwfParentPartner() {
    let partner_info = localStorage.getItem('parent_partner');
    return (partner_info != '' && partner_info != null) ? JSON.parse(atob(partner_info)) : '';
  }

  // getRecentLocationSearches is to access recent locations in session (Nagesh-3217 on 27-12-2018)
  getRecentLocationSearches() {
    let locatons_information = localStorage.getItem('recent_locations');
    return (locatons_information != '' && locatons_information != null) ? JSON.parse(locatons_information) : [];
  }
  getCountryCode() {
    let country_code = localStorage.getItem('country_code');
    return (country_code != '' && country_code != null) ? country_code : 'US';
  }

  setTrackPageSource(page_source) {
    localStorage.setItem('track_page_source', page_source);
  }

  getTrackPageSource() {
    let page_source = localStorage.getItem('track_page_source');
    return (page_source != '' && page_source != null) ? page_source : '';
  }

  setTrackFunctionSource(function_source) {
    localStorage.setItem('track_function_source', function_source);
  }

  getTrackFunctionSource() {
    let function_source = localStorage.getItem('track_function_source');
    return (function_source != '' && function_source != null) ? function_source : '';
  }


  getUserSettings() {
    let user_settings = localStorage.getItem('user_settings');
    return (user_settings != '' && user_settings != null && user_settings != 'undefined') ? JSON.parse(user_settings) : '';
  }

  getCategoryNames(categorieslist, category_type) {
    let categoryNames = {};
    if (category_type == 'neustar' || category_type == 'predicted') {
      for (let catD in categorieslist) {
        categoryNames[categorieslist[catD].id] = new TitleCasePipe().transform(categorieslist[catD].category_name);
        // if(categorieslist[catD].children != undefined){
        //   for (let catid in categorieslist[catD].children) {
        //     categoryNames[categorieslist[catD].children[catid].id] = categorieslist[catD].children[catid].name;
        //   }
        // }
      }
    } else {
      for (let catD in categorieslist) {
        categoryNames[categorieslist[catD].category_id] = categorieslist[catD].category_name;
      }
    }
    return categoryNames;
  }


  getCovidCategoryImpacts(categorieslist, category_type) {
    let categoryImpacts = {};
    if (category_type == 'neustar' || category_type == 'predicted') {
      for (let catD in categorieslist) {
        categoryImpacts[categorieslist[catD].id] = categorieslist[catD].covid_impact_on_category
      }
    } else {
      for (let catD in categorieslist) {
        categoryImpacts[categorieslist[catD].category_id] = categorieslist[catD].covid_impact_on_category

      }
    }
    return categoryImpacts;
  }
  getCovidCategoryImpactsCompetition(categorieslist) {
    let categoryImpacts = {};

    for (let catD in categorieslist) {
      categoryImpacts[categorieslist[catD].id] = categorieslist[catD].covid_impact_on_category
    }
    return categoryImpacts;
  }

  getLocationSource() {
    let user_info = this.getUserDetails();
   // return (user_info && user_info.country_details && user_info.country_details && (user_info.country_details.id == 1)) ? 'fp' : 'google';
     return (user_info && user_info.country_details && user_info.country_details && (user_info.country_details.id == 1 || user_info.country_details.id == 15 || user_info.country_details.id == 2)) ? 'fp' : 'google';//this.globals.location_source;
  }
  // getImportMapActivity is to fetch the user map activity (Nagesh-3217 on 13-08-2019)
  getImportMapActivity() {
    let import_map_activity = localStorage.getItem('import_map_activity');
    return (import_map_activity || import_map_activity != '') ? JSON.parse(import_map_activity) : '';

  }
  // getImportBuzzFields is to fetch the Partner Fields (Nagesh-3217 on 13-08-2019)
  getImportBuzzFields() {
    let import_buzz_fields = localStorage.getItem('import_buzz_fields');
    return (import_buzz_fields || import_buzz_fields != '') ? JSON.parse(import_buzz_fields) : '';

  }
  // setImportActivity is to set the use map activity (Nagesh-3217 on 13-08-2019)
  setImportActivity(user_map_object) {
    localStorage.setItem('import_map_activity', JSON.stringify(user_map_object));
  }
  // setImportBuzzFields is to set the import buzz fields (Nagesh-3217 on 13-08-2019)
  setImportBuzzFields(import_buzz_fields) {
    localStorage.setItem('import_buzz_fields', JSON.stringify(import_buzz_fields));
  }
  getlocationMarket(localMarkets, baseURL, country_code, random_str) {
    let location_source = this.getLocationSource();
    let userSettings: any = this.getUserSettings();
    if (random_str == "") {
      random_str = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    let countrycode = country_code.toLowerCase();
    if (location_source == 'fp') {
      localMarkets.urlFormater(term => {
        return this.globals.baseAPIURL + "/location/get_locations_list?bs=" + this.globals.bs + "&is_sardines=" + userSettings['is_sardines'] + "&keyword=" + encodeURIComponent(term) + "&country_code=" + countrycode;
      });
      localMarkets.dataField("locations");
    } else {
      localMarkets.urlFormater(term => {
        return baseURL + "/markets/keyword=" + encodeURIComponent(term) + "&language=en&country=" + country_code + "&platform=WEB&product=BBS&session_token=" + random_str;
      });
      localMarkets.dataField("predictions");
    }
    var json_str = { 'localMarkets': localMarkets, 'random_str': random_str };
    return json_str;
  }

  getlocationMarketLocations(intent, baseURL, country_code, random_str) {
    let countrycode = country_code.toLowerCase();
    let location_source = this.getLocationSource();
    let userSettings: any = this.getUserSettings();
    if (location_source == 'fp') {
      return this.http.get(this.globals.baseAPIURL + "/location/get_locations_list?bs=" + this.globals.bs + "&is_sardines=" + userSettings['is_sardines'] + "&keyword=" + encodeURIComponent(intent) + "&country_code=" + countrycode).pipe(map(res => res || []))

    } else {
      return this.http.get(baseURL + "/markets/keyword=" + encodeURIComponent(intent) + "&language=en&country=" + country_code + "&platform=WEB&product=BBS&session_token=" + random_str).pipe(map(res => res || []))
    }

  }
  getCatCovergaeData(data){
    console.log(data);
    let _options = this.setRequestHeaders();
    return this.http.post(this.globals.baseAPIURL + '/owf/get_category_coverage_data', data, _options).pipe(map(res => res || []));

  }
  getCategoriesSearch(term, place) {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer 5e0a50d50229b7f0a49c2c6f814e01a9258ac927');
    // let _options = new RequestOptions({ headers: headers });
    // let data = {
    //   "keyword": term,
    //   "listing_source": "public",
    //   "country_code": "us",
    //   "category_type": "predicted",
    //   "scope": [
    //     "category"
    //   ],
    //   "size_limit": 5,
    //   "place_ids": [
    //     place
    //   ],
    //   "covid_impact_on_category": ["growing"]
    // }
    let data = {
      term: term,
      place: place
    }
    let _options = this.setRequestHeaders();
    return this.http.post(this.globals.baseAPIURL + '/user/get_categories_by_search', data, _options).pipe(map(res => res || []));

  }
  setRequestHeaders(options = []) {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('lt', this.getEncodedToken());
    // let _options = new RequestOptions({ headers: headers });
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'lt': this.getEncodedToken()
    });
    let _options = {
        headers: headers
    }
    return _options;
  }

  setRequestHeadersForValidateToken(options = []) {
    let headers = this.getCommonRequestHeaders();
    let product_env = this.getProductType();
    let params = {
      app_version: this.getAppVersion(),
      user_agent: this.getUserAgent(),
      webservices_version: this.globals.webserviceVersion,
      request_source: 'engage',
      product_env: product_env
    };
    let _options = {
      headers: headers,
      params: params
    }
    // let _options = new RequestOptions({ headers: headers, params: params });
    //let _options = new RequestOptions({ headers: headers});
    return _options;

  }
  setRequestHeadersBearerToken(options='') {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${options}`);

 //   headers.append('Authorization', `Bearer 06a40eb8-7675-3e31-9e5f-54ff4391c95e`);

    headers.append('lt', this.getEncodedToken());
    let _options = {
      headers: headers
    }
    // let _options = new RequestOptions({ headers: headers });
    return _options;
  }
  // This returns base64 encoded user agent
  getUserAgent() {

    return btoa(navigator.userAgent);

  }

  getCommonRequestHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('lt', this.getEncodedToken());
    headers.append('call_version', this.globals.webserviceVersion);

    return headers;
  }


  getHostNameFromURL(url) {
    url = url.replace('http://', '').replace('https://', '').replace('www.', '');
    let url_array = url.split("/");
    return url_array[0];
  }

  getRawPhoneNumber(phone) {
    phone = phone.replace(/[(]/g, "").replace(/[)]/g, "").replace(/[-]/g, "").replace(/[ ]/g, "").replace(/[+]/g, "");
    return phone;
  }

  setSearchScope(scope, selectedSearchOptions) {
    selectedSearchOptions.forEach(element => {
      scope = this.refineSearchScope(scope, element, 'add');
    });
    return scope;
  }
  refineSearchScope(scope, item, action) {
    let type = item.type;
    if (action == 'add') {
      switch (type) {
        case "website":
        case "business_name":
        case "phone":
          let index = scope.indexOf(type);
          if (index !== -1) {
            scope.splice(index, 1);
          }
          break;
        // case "category":
        // break;
        // case "product":
        // break;
      }
      localStorage.setItem('global_search_scope', JSON.stringify(scope));
      return scope;
    } else {
      switch (type) {
        case "website":
        case "business_name":
        case "phone":
          scope.push(type);
          break;
        // case "category":
        // break;
        // case "product":
        // break;
      }
      localStorage.setItem('global_search_scope', JSON.stringify(scope));
      return scope;
    }
  }

  getAppVersion() {
    return '5.0.249598';
  }

  getProspectData(item) {
    this.sharedProspect.next(item);
  }

  backButtonEventClick(data) {
    this.backEventClick.next(data);
  }
  redirectToKeywordSearch(data) {
    this.keywordSearch.next(data);
  }
  getActionRestrictedPartenrs() {
    // this.actionRestrictedPartner =  this.globals.action_restricted_partners;
    let userInfo = this.getUserDetails();
    //console.log('USER INFO');
    // console.log(userInfo);
    // let currentParnterId = userInfo.partner_id;
    // let restrictedPartnerExists = Object.keys(this.actionRestrictedPartner).find(k => this.actionRestrictedPartner[k] == currentParnterId);
    // let isRestrictpartner = (restrictedPartnerExists != undefined)?true:false;

    // let isRestrictpartner = userInfo.is_customize_actions_disabled;
    let isRestrictpartner = (typeof userInfo.is_customize_actions_disabled != 'undefined' && userInfo.is_customize_actions_disabled) ? userInfo.is_customize_actions_disabled : false;
    // console.log('IS RESTRICTED '+isRestrictpartner);
    return isRestrictpartner;
  }

  createIntentLog(data) {
    this.createIntentLogData.next(data);
  }

  getFPQueryPlaceDetails(placeDetails, address) {
    let addresssDetails = placeDetails;
    if (typeof placeDetails.placedetails != 'undefined' && placeDetails.placedetails != 'undefined') {
      placeDetails = placeDetails.placedetails;
    }

    let addressResponse = JSON.parse(JSON.stringify(placeDetails));
    addressResponse['type'] = ((placeDetails.locality != "") ? 3 : ((placeDetails.region != "") ? 2 : 1));
    addressResponse['place_details'] = {
      "place_id": (typeof placeDetails.place_id != 'undefined' && placeDetails.place_id != '')?placeDetails.place_id:((typeof placeDetails.place_details.place_id != 'undefined' && placeDetails.place_details.place_id != '')?placeDetails.place_details.place_id:''),
      "name": (typeof placeDetails.placedetails != 'undefined' && typeof placeDetails.placedetails.address != 'undefined') ? placeDetails.placedetails.address : placeDetails.address
    };
    if(addressResponse['place_details']["place_id"] != undefined && addressResponse['place_details']["place_id"] != "")
    {
      addressResponse["place_id"]=addressResponse['place_details']["place_id"];
    }
    addressResponse['page_source'] = 2;
    return addressResponse;
  }

  // getlocationMarket1(localMarkets,baseURL,country_code,random_str) {
  //   let location_source = this.getLocationSource();
  //   if(random_str == "")
  //   {
  //    random_str=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  //   }

  //     localMarkets.urlFormater(term => {
  //       return baseURL + "/markets/keyword=" + encodeURIComponent(term) + "&language=en&country=" + country_code + "&platform=WEB&product=BBS&session_token="+random_str;
  //     });

  //     localMarkets.dataField("predictions");

  //   var json_str={'localMarkets':localMarkets,'random_str':random_str};
  //   return json_str;
  // }
  redirectToStreamDashBoard() {
    this.router.navigate(["/stream-dashboard"], {});
  }
  redirectToDiscoverDashBoard() {
    this.router.navigate(["/discover-dashboard"], {});
  }

  goForward() {
    let userSettings: any = this.getUserSettings();
    let user_details: any = this.getUserDetails();
    if (typeof userSettings.partner_source != 'undefined' && (userSettings.partner_source == 2 || userSettings.partner_source == 3 || userSettings.partner_source == 5)) {
      this.redirectToStreamDashBoard();
    }else if (typeof userSettings.partner_source != 'undefined' && userSettings.partner_source == 7) {
      this.redirectToDiscoverDashBoard();
    } else if (typeof userSettings.partner_source != 'undefined' && userSettings.partner_source == 6) {
      sessionStorage.removeItem('bbsnd');
      sessionStorage.removeItem('fpFiltersList');
      let url = `${this.globals.bb_site_url}/${user_details.platform_type}/login`;
      window.location.href = url;
    }
    else {
      if (this.agreement_status === 0) {
        if (this.redirection_url != undefined) {
          this.router.navigate(["/agreement"], { queryParams: { redirection_url: this.redirectionUrl, q: this.request_query } });
        } else if (localStorage.getItem('v5_referrer_path') != '' && localStorage.getItem('v5_referrer_path') != null) {
          let redirect_url = localStorage.getItem('v5_referrer_path');
          //this.cookieService.delete('v5_referrer_path');
          localStorage.removeItem('v5_referrer_path');
          this.router.navigate(["/agreement"], { queryParams: { redirection_url: (redirect_url), q: this.request_query } });
        } else {
          this.router.navigate(["/agreement"]);
        }
      } else if (this.redirection_url != undefined) {
        //this.router.navigateByUrl(this.redirection_url);
        this.router.navigate([this.redirection_url], {
          queryParams: { q: this.request_query }
        });
      } else if (localStorage.getItem('v5_referrer_path') != '' && localStorage.getItem('v5_referrer_path') != null) {
        let redirect_url = localStorage.getItem('v5_referrer_path');
        //this.cookieService.delete('v5_referrer_path');
        localStorage.removeItem('v5_referrer_path');
        this.router.navigateByUrl(redirect_url);
      } else {
        this.router.navigate(["home"]);
        // let user_details = this.globalSharedService.getUserDetails();
        // this.getAdditionalInfo(user_details)
      }
    }
  }
  setExtendedState(data) {
    this.extendedState.next(data);
  }

  getGeometryLocation(latlng) {
    return this.http.get(this.globals.baseAPIURL + '/location/get_details_by_geometry?latlng=' + latlng).pipe(map(res => res || []));
  }
  prospectQuickStart(user_info = '') {
    if (user_info != "")
      localStorage.setItem('inprogress_quick_start', user_info);
    else
      localStorage.removeItem('inprogress_quick_start');
  }

  dontShowAddAlert(alert_info = '') {
    if (alert_info != "")
      localStorage.setItem('dont_show_add_alert', alert_info);
    else
      localStorage.removeItem('dont_show_add_alert');
  }
  getdontShowAddAlert() {
    let add_alert = localStorage.getItem('dont_show_add_alert');
    return (add_alert != "" && add_alert != undefined) ? add_alert : '';
  }
  gotoAssignProfile(data) {
    this.assignProfile.next(data);
  }
}
