import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from "rxjs/operators";
import {catchError} from 'rxjs/operators/catchError';
import {throwError as observableThrowError} from 'rxjs';
import {of as observableOf} from 'rxjs';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { SearchResultsService } from './search-results.service';
import { DashboardService } from './dashboard.service';
import { CommonSharedService } from './../shared-services/common-shared.service';
import { GlobalParams } from '../common/global-params';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
declare var addappcues:any;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token;
  options;
  //default_selected_option:any;
  selectedBblUserId: any;
  selectedGrphType: any;
  private apiURL: string;
  public googleCategoriesSubscriber;


  constructor(private http: HttpClient, private dashboardService: DashboardService, private globals: GlobalParams, private globalSharedService: CommonSharedService, private searchresultsService: SearchResultsService) {
    this.apiURL = globals.baseAPIURL;
  }

  private userMarketUpdate = new Subject<any>();
  userMarketUpdateParam$ = this.userMarketUpdate.asObservable();
  private userMenuUpdate = new Subject<any>();
  userMenuUpdateParam$ = this.userMenuUpdate.asObservable();

  private userMarketUpdatePreference = new Subject<any>();
  userMarketUpdatePreferenceParam$ = this.userMarketUpdatePreference.asObservable();

  authenticate(data) {
    return this.http.post(this.apiURL + '/user/login', data).pipe(map(response => response || []));
  }

  logout() {
    console.log("in logout befre");
    var requestParam = { "logout": true };
    return this.http.post(this.apiURL + '/user/logout', requestParam).pipe(map(response => {
      console.log("in logout");
      console.log(response);
      return response;
    }));
  }

  authenticateUser() {
    return this.http.get(this.apiURL + '/authorize').pipe(map(response => response || []));
  }

  getUsers() {
    return this.http.get(this.apiURL + '/users').pipe(map(res => res || []));
  }

  getProfiles() {
    return this.http.get(this.apiURL + '/test_cases').pipe(map(res => res || []));
  }

  /*
  getTestCases(pageReq = 1,perPage = 2) {
    return this.http.get(this.apiURL + '/test_cases/' + pageReq+"/"+perPage).map(res => res || []);
  }*/


  getProfilesPerUser(range) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/listing/list/' + range, _options).pipe(map(res => res || []));
  }



  getProfilesByPage(url: string) {
    //return this.http.post(this.apiURL + '/listing/data' + url).map(res => res || []);
    let _options = this.globalSharedService.setRequestHeaders();
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL + '/listing/data', { url: url }, _options).pipe(
      map(res => res || []));
  }

  updateMenuData(menu) {
    this.userMenuUpdate.next(menu);
  }

  setUserId(userId) {
    this.selectedBblUserId = userId;
    // this.selectedBblUserId = 10002;
  }
  getUserIds() {
    console.log(this.selectedBblUserId);
    return this.selectedBblUserId;
  }
  setSelectedStatus(statusType) {
    this.selectedGrphType = statusType;
  }
  getSelectedStatus() {
    return this.selectedGrphType;
  }
  getProfilesCountByStatus() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/listing/signals', _options).pipe(map(res => res || []));
  }
  getProfilesByStatus(statusType) {
    return this.http.get(this.apiURL + '/testcases/' + statusType).pipe(map(res => res || []));
  }


  getLatestData(params: any) {
    params.method = 'GET';
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/listing/list', params, _options).pipe(map(res => res || []));
    // return this.http.get(`${BASE_URL}/news?page=${page}`);
  }

  exportData(params: any) {
    params.method = 'POST';
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/exportData', params, _options).pipe(map(res => res || []));
  }

  downloadPpt(params: any) {
    params.method = 'POST';
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/profiles/downloadppt', params, _options).pipe(map(res => res || []));
  }

  getNavigationsList() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/navigations', _options).pipe(map(res => res || []));
  }

  globalSearch(options) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/globalsearch/' + options, _options).pipe(map(res => res || []));
  }

  globalSearchLog(search_items, search_type, reference_id, locations = [], function_source = '') {
    let _options = this.globalSharedService.setRequestHeaders();
    let location_source = this.globalSharedService.getLocationSource();
    var requestParam = { "data": { "search_items": search_items, "search_type": search_type, "reference_id": reference_id, "locations": locations, "function_source": function_source, "location_source": location_source } };
    return this.http.post(this.apiURL + '/globalsearch/log', requestParam, _options).pipe(map(res => res || []));
  }

  getRecentSearches(source = '') {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/globalsearch/recent?source=' + source, _options).pipe(map(res => res || []));
  }
  // setRecentLocationSearches service is to set the recent 5 locations of search(Nagesh-3217 on 11-12-2018)
  setRecentLocationSearches() {
    let source = "user";
    let location_source = this.globalSharedService.getLocationSource();
    let recent_searches_locations = [];
    let url = this.globals.mwBaseURL + '/globalsearch/recentlocations?type=' + source + '&location_source=' + location_source;
    this.dashboardService.getDataByUrl(url).subscribe((result): any => {
      let res: any = result;
      if (res.data && res.meta.count > 0) {
        recent_searches_locations = res.data;
      }
      // console.log('Locations Service:',recent_searches_locations);
      if (recent_searches_locations.length > 0) {
        localStorage.setItem('recent_locations', JSON.stringify(recent_searches_locations));
      }
    }, err => recent_searches_locations = []);

  }
  // updateRecentLocations service is to update the recent 5 locations of session variable(Nagesh-3217 on 11-12-2018)
  updateRecentLocations(locationsObj) {
    localStorage.removeItem('recent_locations');
    localStorage.setItem('recent_locations', JSON.stringify(locationsObj));
  }
  getTopSearches(source = '') {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/globalsearch/topsearches?source=' + source, _options).pipe(map(res => res || []));
  }

  getTopCategories(source = '') {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/globalsearch/topcategories?source=' + source, _options).pipe(map(res => res || []));
  }

  getPopupInfo() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/user/popups', _options).subscribe(res => {
      let popups_list: any = res || [];
      if (popups_list.data) {
        localStorage.setItem('popups_list', JSON.stringify(popups_list.data));
      }
      return res || [];
    }
    );
  }

  userMarketsSetSession() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/user/markets', _options).subscribe(res => {
      let user_markets = {};
      let resData: any = res || [];

      if (resData.user_level_markets != undefined)
        user_markets['user_level_markets'] = resData.user_level_markets;
      if (resData.partner_level_markets != undefined)
        user_markets['partner_level_markets'] = resData.partner_level_markets;
      if (resData.status == 200) {
        localStorage.setItem('user_markets', JSON.stringify(user_markets));
      }
      return res || [];
    }
    );
  }

  userSettings() {
    let _options = this.globalSharedService.setRequestHeaders();
    let product_env = (this.globalSharedService.getProductType() && this.globalSharedService.getProductType() != null) ? this.globalSharedService.getProductType() : this.globals.product_env['advisor'];
    return this.http.get(`${this.apiURL}/users/settings/${product_env}`, _options).subscribe(res => {
      let user_settings = {};
      let resData: any = res || [];
      //if (resData.status == 200) {
      user_settings = resData.data;
      localStorage.setItem('user_settings', JSON.stringify(user_settings));
      this.getFpCategories();
      //}
      return res || [];
    });
  }

  userSettingsSwitch() {
    let _options = this.globalSharedService.setRequestHeaders();
    let product_env = (this.globalSharedService.getProductType() && this.globalSharedService.getProductType() != null) ? this.globalSharedService.getProductType() : this.globals.product_env['advisor'];
    return this.http.get(`${this.apiURL}/users/settings/${product_env}`, _options).pipe(map(res => res || []));
  }

  getUserMarkets() {
    let _options = this.globalSharedService.setRequestHeaders();
    localStorage.removeItem('user_markets');
    return this.http.get(this.apiURL + '/user/markets', _options).pipe(map(res => {
      let user_markets = {};
      let resData: any = res || [];

      if (resData.user_level_markets != undefined)
        user_markets['user_level_markets'] = resData.user_level_markets;
      if (resData.partner_level_markets != undefined)
        user_markets['partner_level_markets'] = resData.partner_level_markets;
      if (resData.status == 200) {
        localStorage.setItem('user_markets', JSON.stringify(user_markets));
      }
      return res || [];
    }
    ));
  }

  getAllUserMarkets() {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.get(this.apiURL + '/user/markets', _options).pipe(map(res => {
      let user_markets = {};
      let resData: any = res || [];

      if (resData.user_level_markets != undefined)
        user_markets['user_level_markets'] = resData.user_level_markets;
      if (resData.partner_level_markets != undefined)
        user_markets['partner_level_markets'] = resData.partner_level_markets;
      if (resData.status == 200) {
        localStorage.setItem('user_markets', JSON.stringify(user_markets));
      }
      return res || [];
    }
    ));
  }

  addUserMarket(items) {
    let params = {
      data: items
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/preferredmarket', params, _options).pipe(map(res => res || []));
  }

  removeUserMarket(items) {
    let params = {
      data: items
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/removepreferredmarket', params, _options).pipe(map(res => res || []));
  }

  validateToken() {
    let _options: any = this.globalSharedService.setRequestHeadersForValidateToken();
    return this.http.get(this.apiURL + '/user/validatetoken', _options).pipe(map(response => response || []));
  }

  getSectorsData(params) {
    this.searchresultsService.getSectorsData(params).subscribe((res: any) => {
      if(res) {
        console.log('Res', JSON.stringify(res));
        if(typeof res.sectors_list != 'undefined' && res.sectors_list.length > 0) {
          let sectors_list: any = [];
          for (let index = 0; index < res.sectors_list.length; index++) {
            const element = {
              id: index,
              name: res.sectors_list[index].sector_name,
              disabled: false,
              value: false,
              show: false,
              categories: [],
              selected_categories: 0,
              types: [],
              covid_types: []
            }
            sectors_list.push(element);
          }
          let sectorNames = [];
          for (let pdD in sectors_list) {
            sectorNames[sectors_list[pdD].id] = sectors_list[pdD].name;
          }
          localStorage.setItem('sectors_data', JSON.stringify(res.sectors_list));
          localStorage.setItem('sectors_list', JSON.stringify(sectors_list));
          localStorage.setItem('sector_names', JSON.stringify(sectorNames));
        }
      }
      else {
        console.log('Res error', JSON.stringify(res));
      }
    }, (error) => {
      console.log('Error')
    })
  }

  getTechnologiesData() {
    let user_details = this.globalSharedService.getUserDetails();
    let user_settings = this.globalSharedService.getUserSettings();
    let technologyGroups = [];
    let technologiesData = [];
    let fp_params: any = {};
    fp_params['_query'] = {};
    fp_params['_query']['last_modified_date'] = 0;
    fp_params['_query']['country_code'] = (user_details && user_details.country_details && user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us'; //'us';
    fp_params['_query']['partner_id'] = (user_details.partner_id) ? user_details.partner_id : 0;
    fp_params['_query']['user_id'] = (user_details.id) ? user_details.id : 0;
    fp_params['_query']['languages'] = ['language_en'];
    fp_params['_query']["category_type"] = user_settings['category_type'];
    let params = {
      params: JSON.stringify(fp_params)
    };
    this.searchresultsService.getFpTechnologies(params).subscribe((technologies: any) => {
      let technologiesList = technologies.technologies;
      if(technologiesList.length > 0) {
        for (let vertical in technologiesList) {
          let tech = [];
          let technologyNames = [];

          technologyGroups.push(technologiesList[vertical]['vertical'])
          for (let technology in technologiesList[vertical].technologies) {
            tech.push(technologiesList[vertical].technologies[technology].tech_id);
            technologyNames.push({ id: technologiesList[vertical].technologies[technology].tech_id, name: technologiesList[vertical].technologies[technology].technology, checked: false });
          }
          let techData = {
            'vertical_id': technologiesList[vertical].vertical_id,
            'vertical': technologiesList[vertical].vertical,
            'technologies': tech,
            'technology_names': technologyNames,
            'slider_value': 2,
            'all_technologies': {},
          }
          technologiesData.push(techData);
        }
        sessionStorage.setItem('fpTechnologies', JSON.stringify(technologiesData));
      }
      else {
        console.log('Else case')
      }
    }, (error) => {
      console.log('Error')
    })

  }

  getFpCategories() {
    let user_details = this.globalSharedService.getUserDetails();
    let user_settings = this.globalSharedService.getUserSettings();
    let category_type;
    if (user_settings['category_source'] == 2 || user_settings['category_source'] == 3) {
      category_type = 'neustar';
      this.googleCategoriesSubscriber = this.dashboardService.get_categories('categories').subscribe(categories => {
        let categoriesData = categories.data;
        if (categoriesData != undefined && JSON.stringify(categoriesData) != undefined && JSON.stringify(categoriesData) != 'undefined') {
          let categorieslist = JSON.parse(JSON.stringify(categoriesData));
          localStorage.setItem('categoriesList', JSON.stringify(categorieslist));
        }
      });
    } else {
      category_type = 'google';
      let fp_params = {};
      fp_params['_query'] = {};
      fp_params['_query']['last_modified_date'] = 0;
      fp_params['_query']['country_code'] = (user_details && user_details.country_details) ? ((user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us') : 'us';
      fp_params['_query']['partner_id'] = (user_details.partner_id) ? user_details.partner_id : 0;
      fp_params['_query']['user_id'] = (user_details.id) ? user_details.id : 0;
      fp_params['_query']['languages'] = ['language_en'];
      fp_params['_query']["category_type"] = category_type;
      let params = {
        params: JSON.stringify(fp_params)
      };
      return this.http.post(this.apiURL + '/fp/categories', params).subscribe(categories => {
        let categoriesData: any = categories || [];
        let categorieslist: any;
        if (fp_params['_query']["category_type"] == 'neustar')
          categorieslist = categoriesData.categories;
        else
          categorieslist = categoriesData.public_categories;
        if (categorieslist != undefined && JSON.stringify(categorieslist) != undefined && JSON.stringify(categorieslist) != 'undefined')
          localStorage.setItem('categoriesList', JSON.stringify(categorieslist));
        return categories || [];
      });
    }

  }

  async getNewFpCategories() {
    return new Promise(async (resolve, reject) => {
    let user_details = this.globalSharedService.getUserDetails();
    let user_settings = this.globalSharedService.getUserSettings();
    let category_type;
    if (user_settings['category_source'] == 2 || user_settings['category_source'] == 3) {
      category_type = 'neustar';
      this.googleCategoriesSubscriber = this.dashboardService.get_categories('categories').subscribe(categories => {
        let categoriesData = categories.data;
        if (categoriesData != undefined && JSON.stringify(categoriesData) != undefined && JSON.stringify(categoriesData) != 'undefined') {
          let categorieslist = JSON.parse(JSON.stringify(categoriesData));
          localStorage.setItem('categoriesList', JSON.stringify(categorieslist));
          resolve(categorieslist);
        }
      });
    } else {
      category_type = 'google';
      let fp_params = {};
      fp_params['_query'] = {};
      fp_params['_query']['last_modified_date'] = 0;
      fp_params['_query']['country_code'] = (user_details && user_details.country_details) ? ((user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us') : 'us';
      fp_params['_query']['partner_id'] = (user_details.partner_id) ? user_details.partner_id : 0;
      fp_params['_query']['user_id'] = (user_details.id) ? user_details.id : 0;
      fp_params['_query']['languages'] = ['language_en'];
      fp_params['_query']["category_type"] = category_type;
      let params = {
        params: JSON.stringify(fp_params)
      };
      return this.http.post(this.apiURL + '/fp/categories', params).subscribe(categories => {
        let categoriesData: any = categories || [];
        let categorieslist: any;
        if (fp_params['_query']["category_type"] == 'neustar')
          categorieslist = categoriesData.categories;
        else
          categorieslist = categoriesData.public_categories;
        if (categorieslist != undefined && JSON.stringify(categorieslist) != undefined && JSON.stringify(categorieslist) != 'undefined')
          localStorage.setItem('categoriesList', JSON.stringify(categorieslist));
        resolve(categorieslist);
        return categories || [];
      });
    }
  });

  }

  getFpProducts() {
    let user_details = this.globalSharedService.getUserDetails();
    let fp_params = {};
    fp_params['_query'] = {};
    fp_params['_params'] = {
      user_id: user_details.id,
      partner_id: user_details.partner_id
    }
    let params = {
      params: JSON.stringify(fp_params)
    };
    return this.http.post(this.apiURL + '/fp/products', params).subscribe(products => {
      let productsData: any = products || [];
      let productslist = productsData.product_list;
      let productnames = [];
      for (let pdD in productslist) {
        productnames[productslist[pdD].id] = productslist[pdD].title;
      }
      localStorage.setItem('productList', JSON.stringify(productslist));
      localStorage.setItem('productNames', JSON.stringify(productnames));
      return products || [];
    });
  }

  getCovidCategoryNames(covidCategorySections) {
    let covidCategoryNames = [];
    for (let pdD in covidCategorySections) {
      covidCategoryNames[covidCategorySections[pdD].tag] = covidCategorySections[pdD].title;
    }
    return covidCategoryNames;
  }

  disablePopup(popup_key: string) {
    let _options = this.globalSharedService.setRequestHeaders();
    var requestParam = { "data": { "popup_key": popup_key } };
    return this.http.post(this.apiURL + '/user/disablepopups', requestParam, _options).subscribe(res => {
      return res || [];
    });
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  addkeywords(data) {
    let _options = this.globalSharedService.setRequestHeaders();

    let params = {
      "data": {
        'keyword': data.keyword,
        'feature': data.feature,
        'type_of_search': data.type_of_search
      }
    };

    return this.http.post(this.apiURL + '/searchlog/keywords', params, _options).pipe(map(res => res || []));


  }

  set_user_settings(params) {
    let _options = this.globalSharedService.setRequestHeaders();

    return this.http
      .post(this.apiURL + '/usersetting/', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }
  get_user_settings(params) {
    let _options = this.globalSharedService.setRequestHeaders();

    return this.http
      .post(this.apiURL + '/getusersetting/', params, _options).pipe(
      map(res => {
        return res || [];
      }),
      catchError((error: any) => {
        return observableThrowError(new Error(error.status));
      }),);
  }

  getUserOnboardLog() {
    let _options = this.globalSharedService.setRequestHeaders();

    return this.http.get(this.apiURL + '/getonboardlog', _options).pipe(map(res => {
      return res || [];
    }));
  }

  getOnboardLog() {
    let _options = this.globalSharedService.setRequestHeaders();

    return this.http.get(this.apiURL + '/getonboardlog', _options).subscribe(res => {
      let resData: any = res || [];
      let result = resData.data;
      if (result.length == 0) {
        if (!this.globals.bs) {
          addappcues();
        }

        let onBoardStatus = true;
        localStorage.setItem('onBoardStatus', onBoardStatus.toString());
        this.globalSharedService.setOnboard(onBoardStatus);
     }
      // else if(result[0].maybe_later == true){
      //   let onBoardStatus = true;
      //   localStorage.setItem('onBoardStatus', onBoardStatus.toString());
      //    this.globalSharedService.setOnboard(onBoardStatus);
      // }
      return res || [];
    });
  }

  getUserParameters(refresh = false) {
    let user_parameters = localStorage.getItem('user_parameters');
    if (user_parameters == null || refresh) {
      let _options = this.globalSharedService.setRequestHeaders();
      return this.http.get(this.apiURL + '/user/userparameters', _options).pipe(map(res => {
        // localStorage.setItem('user_parameters', btoa(JSON.stringify(res || [])));
        localStorage.setItem('user_parameters', btoa(unescape(encodeURIComponent(JSON.stringify(res || [])))));
        let jsonResponse = res || [];
        console.log(jsonResponse);
        return jsonResponse;
      }));
    } else {
      let res = JSON.parse(atob(user_parameters));
      console.log(res);
      return observableOf(res);
    }
  }

  addUserMarketLog(items) {
    let params = {
      data: items
    };
    console.log(params);
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/save_preferedmarkets_log', items, _options).pipe(map(res => res || []));
    // return this.http.post(this.apiURL + '/user/userpreferedmarketslog', items,_options).map(res => res || []);
  }

  agreement(data) {
    let params = {
      'data': data
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/agreement', params, _options).pipe(map(res => res || []));
  }

  setFilteredData() {
    let user_details = this.globalSharedService.getUserDetails();
    user_details.prospect_already_searched = true;
    this.globalSharedService.setUserDetails(user_details);
    let data: any = {
      value: "true",
      user_id: user_details.id,
      param: 'prospect_search'
    };
    console.log(data);
    this.updateUserData(data);

  }

  updateUserData(data) {
    this.covidPopup(data).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }

  saveUserQuery(q) {
    this.saveQueryInLocal(q).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }

  saveQueryInLocal(q = '') {
    // this.updateSearchQuery.next(q);
    let type = 'save';
    let user_details = this.globalSharedService.getUserDetails();
    let params = {
      'user_id': user_details.id,
      'search_query': q,
      'type': type
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/save_user_query', JSON.stringify(params), _options).pipe(map(res => res || []));
  }

  covidPopup(data) {
    let params = {
      'data': data
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/covid_popup', params, _options).pipe(map(res => res || []));
  }

  updateInstancePartner(data) {
    let params = {
      'data': data
    };
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/updatesessionuserinfo', params, _options).pipe(map(res => res || []));
  }

  updateUserMarket(data) {
    this.userMarketUpdate.next(data);
  }
  updateUserMarketPreferences(data) {
    this.userMarketUpdatePreference.next(data);
  }
  // getLocationsByKey is to fetch the locations (Nagesh-3217 on 04-01-2018)
  getLocationsByKey(keyword, country_code, random_str, locationtype='') {
    let _options = this.globalSharedService.setRequestHeaders();
    let userSettings: any = this.globalSharedService.getUserSettings();
    let countrycode = country_code.toLowerCase();
    let location_source = this.globalSharedService.getLocationSource();

    if (location_source == 'fp') {
      if(locationtype != '')
      return this.http.get(this.apiURL + "/location/get_locations_list?bs=" + this.globals.bs + "&is_sardines=" + userSettings['is_sardines'] + "&keyword=" + encodeURIComponent(keyword) + "&location_type="+ encodeURIComponent(locationtype) + "&country_code=" + countrycode, _options).pipe(map(res => res || []));
      else
      return this.http.get(this.apiURL + "/location/get_locations_list?bs=" + this.globals.bs + "&is_sardines=" + userSettings['is_sardines'] + "&keyword=" + encodeURIComponent(keyword) + "&country_code=" + countrycode, _options).pipe(map(res => res || []));
    } else {
      return this.http.get(this.apiURL + "/markets/keyword=" + encodeURIComponent(keyword) + "&language=en&country=" + country_code + "&platform=WEB&product=BBS&session_token=" + random_str, _options).pipe(map(res => res || []));
    }

    //*return this.http.get(this.apiURL + "/markets/keyword=" + encodeURIComponent(keyword) + "&language=en&country=" + country_code + "&platform=WEB&product=BBS&session_token="+random_str,_options).subscribe(res => {
    //console.log("Result:",res || []);
    // return res || [];
    // });*/
    //return this.http.get(this.apiURL + "/markets/keyword=" + encodeURIComponent(keyword) + "&language=en&country=" + country_code + "&platform=WEB&product=BBS&session_token="+random_str, _options).map(res => res || []);
  }

  // Signup Flow starts
  upgradePackage(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/upgradepackage', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  updateCardDetails(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/updatecard', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  contactSales(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/contactsales', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  addUserInfo(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/adduser', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  checkUserInfo(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/checkuser', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  updateUserInfo(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/updateuser', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  deleteUserInfo(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/deleteuser', JSON.stringify(data), _options).pipe(map(res => res || []));
  }
  // Signup Flow ends

  initiateOwfData(data) {
    // let params = data;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/initiateowf', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  getOwfProfilesReports(data) {
    // let params = data;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/profilelist', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  downloadActivities(data) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/download_activity_log', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  generateApiToken(data) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/generateapitoken', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  // Post the pause subscription data
  // Added by Akhil Kumar E (3227) on 16-04-2020
  postPauseDetails(data) {
    // let params = data;
    data.source = this.globals.signup_source;
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/pauseplan', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  saveRecordingDetails(data) {
    let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/user/saverecording', JSON.stringify(data), _options).pipe(map(res => res || []));
  }

  //Start: get Address By Website added by Akhil Kumar E (3227) on 11-10-2019
  getAddressByWebsite(reqObject) {
    let _options = this.globalSharedService.setRequestHeaders();
    let params = reqObject
    let end_proint = '/user/get_address_by_domain';
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

  getCovidImpactData(data) {
    // let _options = this.globalSharedService.setRequestHeaders();
    return this.http.post(this.apiURL + '/prospects/covid_meter_data', data).pipe(map(res => res || []));
    // return this.http.post(this.apiURL + '/prospects/covid_meter_data', params).map(res => res || []);
  }
  // Excel download code Added by Akhil Kumar E(3227) on 13-09-2019

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
