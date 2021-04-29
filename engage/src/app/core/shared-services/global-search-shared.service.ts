import { ProfilesQuerySharedService } from './profiles-query-shared.service';
import { FindProspectsQuerySharedService } from './find-prospects-query-shared.service';
import { UsersService } from './../services/users.service';
import { GlobalParams } from '../common/global-params';
import { CommonSharedService } from './common-shared.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

declare function unescape(s: string): string;
declare function escape(s: string): string;

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchSharedService {
  constructor(
    private http: HttpClient,
    private globalSharedService: CommonSharedService,
    private profilesQuerySharedService: ProfilesQuerySharedService,
    private router: Router,
    private findProspectsQuerySharedService: FindProspectsQuerySharedService,
    private globals: GlobalParams,
    private usersService: UsersService // (Nagesh-3217 on 27-12-2018)
  ) { }

  private globalSearch = new Subject<string>();
  globalSearchParam$ = this.globalSearch.asObservable();
  public prospectSearch = new Subject<boolean>();
  prospectSearchParam$ = this.prospectSearch.asObservable();
  private globalSearchData = new Subject<string>();
  globalSearchDataParam$ = this.globalSearchData.asObservable();
  httpList = ['http:', 'http:/', 'http://'];
  httpsList = ['https:', 'https:/', 'https://'];
  intentsList = ['category', 'business', 'url', 'sectors'];

  clearGlobalSearch() {
    this.globalSearch.next('');
  }

  clearGlobalSearchData() {
    this.globalSearchData.next('');
  }

  // Update Available Snakbar
  private updateAvailable = new Subject<boolean>();
  updateAvailableParam$ = this.updateAvailable.asObservable();

  setUpdateAvailable(data) {
    this.updateAvailable.next(data);
  }


  private searchProfile = new Subject<boolean>();
  searchProfilePopupParam$ = this.searchProfile.asObservable();

  openSearchProfilePopup(open_status) {
    this.searchProfile.next(open_status);
  }

  private searchItems = new Subject();
  searchItemsParam$ = this.searchItems.asObservable();

  setSearchItems(search_info) {
    this.searchItems.next(search_info);
  }

  private headerSearchIcon = new Subject();
  headerSearch$ = this.headerSearchIcon.asObservable();

  setSearchIconStatus(data) {
    this.headerSearchIcon.next(data);
  }

  private searchQuery = new Subject();
  searchQueryParam$ = this.searchQuery.asObservable();
  private displayFilter: BehaviorSubject<any> = new BehaviorSubject(true);

  getProspectsFilterState(): Observable<any> {
    return this.displayFilter.asObservable();
  }

  setProspectsFilterState(flag) {
    this.displayFilter.next(flag);
  }
  resetGlobalSearchStorage() {
    localStorage.removeItem('global_search_scope');
    localStorage.removeItem('global_search_elements');
    localStorage.removeItem('global_search_source');
    localStorage.removeItem('search_query');
  }

  prepareFPLocationQuery(local_market) {
    let address = {};
    if (!local_market.address && local_market.description)
      local_market.address = local_market.description;
    let location = local_market.address;
    if (local_market.fp_location) {
      location = local_market.fp_location;
    }
    let geometry = [];
    let userInfo = this.globalSharedService.getUserDetails();
    let place_id = "";
    address = {
      country_code: (local_market.country_code) ? local_market.country_code.toLowerCase() : (local_market.address && local_market.address.country_code ? local_market.address.country_code.toLowerCase() : userInfo.country_details.iso_country_code.toLowerCase())
    };

    if (local_market.region != undefined && local_market.region != "") {
      address['region'] = local_market.region;
    }
    else if (local_market.address && local_market.address.region != undefined && local_market.address.region != "") {
      address['region'] = local_market.address.region;
    }

    if (local_market.locality != undefined && local_market.locality != "") {
      address['locality'] = local_market.locality;
    } else if (local_market.address && local_market.address.locality != undefined && local_market.address.locality != "") {
      address['locality'] = local_market.address.locality;
    }

    if (local_market.county != undefined && local_market.county != "") {
      address['county'] = local_market.county;
    } else if (local_market.address && local_market.address.county != undefined && local_market.address.county != "") {
      address['county'] = local_market.address.county;
    }

    if (local_market.place_id != undefined && local_market.place_id != "") {
      address['place_id'] = local_market.place_id;
    } else if (local_market.address && local_market.address.place_id != undefined && local_market.address.place_id != "") {
      address['place_id'] = local_market.address.place_id;
    }


    if (local_market.postal_code != undefined && local_market.postal_code != "") {
      address['postal_code'] = local_market.postal_code;
    } else if (local_market.address && local_market.address.postal_code != undefined && local_market.address.postal_code != "") {
      address['postal_code'] = local_market.address.postal_code;
    }

    if (local_market.geometry != undefined) {
      geometry = local_market.geometry;
    }
    if (local_market.place_id != undefined) {
      place_id = local_market.place_id;
    }
    if (local_market.place_details != undefined && local_market.place_details.geometry != undefined) {
      geometry = [local_market.place_details.geometry.location.lng, local_market.place_details.geometry.location.lat];
    } else if (local_market.place_details != undefined && local_market.place_details.geometry == undefined) {
      geometry = local_market.place_details;
    }
    return {
      "address": address,
      "place_id": place_id,
      "fp_location": location,
      "place_details": local_market.place_details,
      "geometry": geometry
    };
  }

  getDefaultUserMarket() {
    let userInfo = this.globalSharedService.getUserDetails();

    let location_source = this.globalSharedService.getLocationSource();
    let default_market = {};

    if (location_source == 'fp' && userInfo.country_details != undefined && userInfo.country_details.id == 1) {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'us',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1,
        "place_id": "5bd80b231191e"
      };
      let markets_string = localStorage.getItem('user_markets');
      let markets_array = JSON.parse(markets_string);

      return (markets_array && markets_array.user_level_markets) ? markets_array.user_level_markets[0] : default_market;

      //return default_market;
    } else if (location_source == 'fp' && userInfo.country_details != undefined && userInfo.country_details.id == 2) {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'ca',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1,
        "place_id": "5caf40ef6a982"
      };

      let markets_string = localStorage.getItem('user_markets');
      let markets_array = JSON.parse(markets_string);

      return (markets_array && markets_array.user_level_markets) ? markets_array.user_level_markets[0] : default_market;

      // return default_market;
    } else if (location_source == 'fp' && userInfo.country_details != undefined && userInfo.country_details.id == 15) {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'gb',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1,
        "place_id": "5c3f01c75a52a"
      };

      let markets_string = localStorage.getItem('user_markets');
      let markets_array = JSON.parse(markets_string);

      return (markets_array && markets_array.user_level_markets) ? markets_array.user_level_markets[0] : default_market;
    } else {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'us',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1
      };

      let markets_string = localStorage.getItem('user_markets');
      let markets_array = JSON.parse(markets_string);

      return (markets_array && markets_array.user_level_markets) ? markets_array.user_level_markets[0] : default_market;
    }


    //return (markets_array && markets_array.user_level_markets) ? markets_array.user_level_markets[0] : ((markets_array && markets_array.partner_level_markets) ? markets_array.partner_level_markets[0] : default_market);

  }

  getCountryAsUserMarket() {
    let userInfo = this.globalSharedService.getUserDetails();
    let location_source = this.globalSharedService.getLocationSource();

    if (location_source == 'fp' && userInfo.country_details != undefined && userInfo.country_details.id == 1) {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'us',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1,
        "place_id": "5bd80b231191e"
      };
      return default_market;
    } else {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'us',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1
      };
      return default_market;
    }
  }

  getRandomReferrenceNumber(max = 6) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < max; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  goToViewProfile(element) {
    let user_query = {
      "business_name": "",
      "business_url": "",
      "phone_no": "",
      "listing_status": [1, 2],
      "product_ids": [],
      "category_ids": []
    };
    var goto_profile = false;
    let user_keyword;
    switch (element.type) {
      case 'business_name':
        goto_profile = true;
        user_query.business_name = element.name;
        break;
      case 'website':
        goto_profile = true;
        let element_name = this.globalSharedService.getHostNameFromURL(element.name);
        user_query.business_url = element_name;
        break;
      case 'category':
        goto_profile = true;
        user_query.category_ids.push(element.category_id.toString());
        break;
      case 'phone':
        goto_profile = true;
        user_query.phone_no = element.name;
        break;
      case 'product':
        goto_profile = true;
        user_query.product_ids.push(element.product_id);
        break;
    }
    if (goto_profile) {
      let queryData = this.profilesQuerySharedService.prepareFiltersAndSorts(user_query);
      let gsq = btoa(JSON.stringify(element));
      this.router.navigate(["profiles"], { queryParams: { q: queryData, gsq: gsq, rand: this.getRandomReferrenceNumber() } });
    }
  }

  async goToSearchResult(element, market = {}, flag = 1, fromSearchView = '') { //1:For Place details, 2: for Query
    let fp_query = {};
    let validate = false;
    let search_type = '';
    let sort_by = 'business_name';
    let sort_order = 'asc';
    let fp_keyword;
    let searchType = '';
    let userInfo = this.globalSharedService.getUserDetails();
    //console.log(element)
    if (typeof element != 'undefined' && element.autoSearch) {
      searchType = 'autosuggestion';
    }

    switch (element.type) {
      case 'business_name':
        search_type = 'exact';
        sort_order = '';
        //case 'custom':
        sort_by = 'relevance';
        fp_keyword = {
          "fp_g_business": {
            "fp_business": element.name,
            "searchType": searchType ? 'business_name' : ''
          },
          "fp_g_website": {
            "business_website": 3
          }
        }
        fp_query = Object.assign(fp_query, fp_keyword);
        validate = true;
        break;
      case 'keyword':

        sort_order = '';
        sort_by = 'relevance';
        fp_keyword = {
          "fp_g_business": {
            "fp_business": element.name,
          },
          "fp_g_website": {
            "business_website": 3
          }
        }
        fp_query = Object.assign(fp_query, fp_keyword);
        validate = true;
        break;
      case 'website':
        let element_name = this.globalSharedService.getHostNameFromURL(element.name);
        fp_keyword = {
          "fp_g_website": {
            "business_website": 3,
            "searchType": 'website'
            // "business_website_dependent": {
            //   "host_name": element_name
            // }
          },
          "fp_g_business": {
            "host_name": element.name,
            "searchType": searchType ? 'website' : ''
          }
        };
        fp_query = Object.assign(fp_query, fp_keyword);
        validate = true;
        search_type = 'exact';
        sort_order = 'desc';
        sort_by = 'opportunity_score';
        /*if (searchType) {
          sort_by = 'relevance';
        }*/
        break;
      case 'category':
        fp_keyword = [];
        //console.log(element)
        if (element.category_type == 'neustar') {
          let categoriesList = JSON.parse(localStorage.getItem('categoriesList'));
          var categoryIndex = Object.keys(categoriesList).find(k => categoriesList[k].id == element.category_id);
          if (categoryIndex != undefined) {
            if (categoriesList[categoryIndex].parent_id == 0) {
              let childsData = categoriesList.filter(function (item: any) {
                if (item.parent_id == element.category_id) return item;
              });
              if (childsData.length > 0) {
                for (let cat of childsData) {
                  fp_keyword[cat.id] = true;
                }
              }
            }
          }
        }
        fp_keyword[element.category_id] = true;
        fp_keyword['fp_category'] = element.name;
        fp_keyword['searchType'] = searchType ? 'category' : ''

        if (fp_query['fp_g_category']) {
          // fp_query['fp_g_category'].push(fp_keyword);
          fp_query['fp_g_category'] = Object.assign(fp_query['fp_g_category'], fp_keyword);
          fp_query['fp_g_website'] = {
            "business_website": 3,
          };
        } else {
          fp_query['fp_g_category'] = fp_keyword;
          fp_query['fp_g_website'] = {
            "business_website": 3,
          };
        }

        // fp_query = Object.assign(fp_query, fp_keyword);
        validate = true;
        sort_order = 'desc';
        //case 'custom':
        sort_by = 'opportunity_score';//'opportunity_score';
        if (typeof element.intent != 'undefined' && element.intent) {
          sort_by = 'relevance';
        }
        break;
      case 'sectors':
        fp_keyword = [];
        //console.log(element)
        fp_keyword['fp_sectors'] = element.name;
        // fp_keyword['searchType'] = searchType ? 'category' : ''

        if (fp_query['fp_g_sectors']) {
          fp_query['fp_g_sectors'] = Object.assign(fp_query['fp_g_sectors'], fp_keyword);
          fp_query['fp_g_website'] = {
            "business_website": 3,
          };
        } else {
          fp_query['fp_g_sectors'] = fp_keyword;
          fp_query['fp_g_website'] = {
            "business_website": 3,
          };
        }

        // fp_query = Object.assign(fp_query, fp_keyword);
        validate = true;
        sort_order = 'desc';
        //case 'custom':
        sort_by = 'opportunity_score';//'opportunity_score';
        if (typeof element.intent != 'undefined' && element.intent) {
          sort_by = 'relevance';
        }
        break;
      case 'product':
        fp_keyword = [];
        fp_keyword[element.product_id] = true;
        if (fp_query['fp_g_product']) {
          // fp_query['fp_g_category'].push(fp_keyword);
          fp_query['fp_g_product'] = Object.assign(fp_query['fp_g_product'], fp_keyword);
        } else {
          fp_query['fp_g_product'] = fp_keyword;
        }
        // fp_query = Object.assign(fp_query, fp_keyword);
        validate = true;
        sort_order = 'desc';
        //case 'custom':
        sort_by = 'opportunity_score';
        break;
    }

    if (validate) {
      //console.log(element)
      if (flag == 2) {
        fp_query['fp_g_location'] = this.prepareFPLocationQuery(market);
      } else if (flag == 3) {
        fp_query['fp_g_location'] = market;
      } else {
        let global_search_location_record = this.getDefaultUserMarket();
        if (market && Object.keys(market).length > 0)
          global_search_location_record = market;
        fp_query['fp_g_location'] = this.prepareFPLocationQuery(global_search_location_record);
      }
      fp_query['intent'] = (typeof element.intent != 'undefined' && element.intent && element.intent != 'sectors') ? [element.intent] : '';
      this.updateRecentLocationsObject(market); // update recent locations (Nagesh-3217 on 27-12-2018)

      let queryData = this.findProspectsQuerySharedService.prepareFiltersAndSorts(1, fp_query, sort_order, sort_by, search_type);
      if (userInfo.is_covid_user && userInfo.covid_filter_enabled) {
        fp_query['fp_g_location']['fp_covid_meter'] = await this.checkCovidImpact(queryData);
        fp_query['intent'] = typeof element.intent != 'undefined' && element.intent != 'sectors' ? [element.intent] : '';
        queryData = this.findProspectsQuerySharedService.prepareFiltersAndSorts(1, fp_query, sort_order, sort_by, search_type);
      }

      if (element.type != 'menu_click') {
        this.usersService.saveUserQuery(this.utoa(queryData));
      }

      let finalQ = JSON.parse(queryData);
      if (element.type == 'menu_click') {
        finalQ['_params']['menu_click'] = true;
      }
      finalQ = JSON.stringify(finalQ);

      let gsq = btoa(JSON.stringify(element));

      if (fromSearchView) {
        this.router.navigate(["redirectfind-prospects"], { queryParams: { q: this.utoa(finalQ), rand: this.getRandomReferrenceNumber(), request_source: 'global_search', pd: this.utoa(JSON.stringify(market)) } });
      } else {
        this.router.navigate(["redirectfind-prospects"], { queryParams: { q: this.utoa(finalQ), gsq: gsq, rand: this.getRandomReferrenceNumber(), request_source: 'global_search', pd: this.utoa(JSON.stringify(market)) } });
      }
      //this.router.navigate(["redirectfind-prospects"], { queryParams: { q: btoa(finalQ) , gsq: gsq, rand:this.getRandomReferrenceNumber(), request_source:'global_search', pd: btoa(JSON.stringify(market))} });
    }
  }

  checkCovidImpact(fp_query) {
    let params = {
      params: fp_query
    };
    return new Promise(async (resolve, reject) => {
      this.usersService.getCovidImpactData(params).subscribe((res: any) => {
        if (typeof res.impact_level_at_location != 'undefined') {
          resolve(res.impact_level_at_location);
        }
        else {
          reject(false);
        }
      }, (error) => {
        reject(false);
      })
    })
  }

  private notespopupclose = new Subject<boolean>();
  notespopupclose$ = this.notespopupclose.asObservable();

  closeNotesPopup(data: boolean) {
    this.notespopupclose.next(data);
  }

  traceIntend(keyword, searchAll = '') {
    //console.log(searchAll)
    let intentObject = this.getIntentAndKeyword(keyword, searchAll);
    //console.log(intentObject)
    if (typeof intentObject.intent != 'undefined') {
      let item = {};
      switch (intentObject.intent[0]) {
        case 'website':
          item = {
            "name": intentObject.searchString,
            "formatted_value": "<span>" + intentObject.searchString + "</span>",
            "type": "website",
            "type_title": "URL",
            "is_multiple_source": false,
            "intent": '',
            "source": [
              {
                "type": "fp",
                "title": "Find Prospects (BuzzBoard)"
              }
            ]
          };
          break;
        case 'business_name':
          item = {
            "name": intentObject.searchString,
            "formatted_value": "<span>" + intentObject.searchString + "</span>",
            "type": "business_name",
            "intent": intentObject.intent[0],
            "type_title": "Business Name",
            "is_multiple_source": false,
            "source": [
              {
                "type": "fp",
                "title": "Find Prospects (BuzzBoard)"
              }
            ]
          };
          break;
        case 'category':
          item = {
            "name": intentObject.searchString,
            "formatted_value": "<span>" + intentObject.searchString + "</span>",
            "type": "category",
            "type_title": "Category",
            "intent": intentObject.intent[0],
            "is_multiple_source": false,
            "source": [
              {
                "type": "fp",
                "title": "Find Prospects (BuzzBoard)"
              }
            ]
          };
          break;
        case 'sectors':
          item = {
            "name": intentObject.searchString,
            "formatted_value": "<span>" + intentObject.searchString + "</span>",
            "type": "sectors",
            "type_title": "Sectors",
            // "intent": "category",
            "intent": intentObject.intent[0],
            "is_multiple_source": false,
            "source": [
              {
                "type": "fp",
                "title": "Find Prospects (BuzzBoard)"
              }
            ]
          };
          break;
        default:
          item = {
            "name": intentObject.searchString,
            "formatted_value": "<span>" + intentObject.searchString + "</span>",
            "type": "keyword",
            "type_title": "Keyword",
            "is_multiple_source": false,
            "source": [
              {
                "type": "fp",
                "title": "Find Prospects (BuzzBoard)"
              }
            ]
          };
          break;
      }
      return item;
    } else if (this.checkIsWebsite(keyword)) {
      keyword = this.extractHostname(keyword);
      let item = {
        "name": keyword,
        "formatted_value": "<span>" + keyword + "</span>",
        "type": "website",
        "type_title": "URL",
        "is_multiple_source": false,
        "source": [
          {
            "type": "fp",
            "title": "Find Prospects (BuzzBoard)"
          }
        ]
      };
      return item;
    } else {
      let item = {
        "name": keyword,
        "formatted_value": "<span>" + keyword + "</span>",
        "type": "business_name",
        "type_title": "Business",
        "is_multiple_source": false,
        "source": [
          {
            "type": "fp",
            "title": "Find Prospects (BuzzBoard)"
          }
        ]
      };
      return item;
    }
  }

  checkIsWebsite(keyword) {
    // var web_keys = [
    //     "http",
    //     "www",
    //     ".co"
    // ];
    // var re = new RegExp(web_keys.join("|"), "i");
    var re = new RegExp(this.globals.websiteValidator, "gi");
    return re.test(keyword);
  }
  checkIsCategory(keyword) {

  }

  extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
    }
    else {
      hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    hostname = hostname.replace("www.", "");
    return hostname;
  }
  /**
   *
   * @param searchKeyword
   */
  getIntentAndKeyword(searchKeyword, searchAll = '') {
    let intent;
    let result = {
      intent: [],
      searchStatus: false,
      searchString: searchKeyword,
    };

    if (searchKeyword.indexOf(':') != - 1 && searchKeyword.indexOf('http:') == -1 && searchKeyword.indexOf('https:') == -1) {
      //let sptWrd = searchKeyword.split(':',);
      let arr = searchKeyword.split(':');
      let sptWrd = arr.splice(0, 1);
      sptWrd.push(arr.join(':'));
      //console.log(sptWrd)
      intent = sptWrd[0];
      intent = intent.toLowerCase().trim();
      if (this.intentsList.includes(intent)) {
        result.intent = [intent];
        if (intent == 'url') {
          result.intent = ['website'];
        }

        if (intent == 'business') {
          result.intent = ['business_name'];
        }
        let keywd = (typeof sptWrd[1] != 'undefined' && sptWrd[1]) ? sptWrd[1] : ''
        keywd = keywd.trim();
        if (intent == 'url') {
          result.intent = ['website'];
          result.searchString = this.extractHostname(keywd);
          if (result.searchString)
            if (['http:', 'http:/', 'http://', 'https:', 'https:/', 'https://'].includes(result.searchString))
              result.searchStatus = false;
            else
              result.searchStatus = true;
          /*let websiteResult = this.isWebSite(keywd);
          if (websiteResult.searchStatus) {
            result.searchStatus = websiteResult.searchStatus;
            result.searchString = unescape(encodeURIComponent(websiteResult.searchString));
          }*/
          return result;
        }
        if (keywd && keywd.length >= 1) {
          result.searchStatus = true;
          result.searchString = unescape(encodeURIComponent(keywd));
        }
        return result;
      } else {
        result.intent = ['business_name', 'category'];
        result.searchStatus = true;
        result.searchString = unescape(encodeURIComponent(searchKeyword));
        return result;
      }
    } else {
      let websiteWord = searchKeyword;
      if (websiteWord.indexOf('URL: ') != -1) {
        websiteWord = websiteWord.replace('URL: ', '');
      }
      let websiteResult = this.isWebSite(websiteWord);
      //console.log(websiteResult)
      if (websiteResult.websiteStatus) {
        result.intent = ['website'];
        if (websiteResult.searchStatus) {
          result.searchStatus = true;
          result.searchStatus = websiteResult.searchStatus;
          websiteResult.searchString = this.extractHostname(websiteResult.searchString);
          result.searchString = unescape(encodeURIComponent(websiteResult.searchString));
          //console.log(result)
        }
      } else {
        result.searchStatus = true;
        if (!searchAll) {
          result.intent = ['business_name', 'category'];
        }
        result.searchString = unescape(encodeURIComponent(searchKeyword));
      }
      return result;
    }
  }
  // updateRecentLocationsObject function is to update the recent locations session (nagesh-3217 on 27-12-2018)
  updateRecentLocationsObject(market) {
    let recentLocatonsObj = this.globalSharedService.getRecentLocationSearches();
    console.log("Selected Location")
    console.log(market);
    if (((market['fp_location'] && market['fp_location'] != '') || (market['address'] && market['address'] != '')) && (market['place_details'] && market['place_details'] != 'undefined' && market['place_details']['place_id'] && market['place_details']['place_id'] != 'undefined' && market['place_details']['place_id'] != '')) {
      let title = market['fp_location'] ? market['fp_location'] : market['address'];
      // if(recentLocatonsObj && recentLocatonsObj != undefined && recentLocatonsObj.length > 0 && recentLocatonsObj[0]['title'] != title) {
      console.log('Log Market:', market);
      let newLocationsArray: any = [];
      let newObj = {
        "description": "",
        "title": title,
        "originalObject": {
          "description": title,
          "placedetails": market,
          "id": '',
          "place_id": (typeof market['place_details'] != 'undefined' && typeof market['place_details']['place_id'] != 'undefined') ? market['place_details']['place_id'] : ""
        },
      };
      newLocationsArray.push(newObj);
      let found_index: any;
      if (recentLocatonsObj && recentLocatonsObj != undefined && recentLocatonsObj.length > 0) {
        recentLocatonsObj.forEach((item, index) => {
          if (index == 0 && item.title == title) {
            //
          }
          else {
            if ((item.originalObject.description != title) && newLocationsArray.length < 5) {
              console.log('New Object Array Length:', newLocationsArray.length);
              newLocationsArray.push(item);
            }
          }
        });
      }
      console.log('Found Index:', newLocationsArray);
      this.usersService.updateRecentLocations(newLocationsArray);
      // }
    }
  }




  /**
   * Validates whether it is website or not
   *
   * @param searchString
   */
  isWebSite(searchString) {

    let result = {
      websiteStatus: false,
      searchStatus: false,
      searchString: searchString,
      httpStatus: false,
    };

    searchString = searchString.toLowerCase().trim();

    this.checkWebsiteFormat(this.httpList, searchString, result)
    if (!result.searchStatus || !result.websiteStatus) {
      this.checkWebsiteFormat(this.httpsList, searchString, result)
    }

    let substring;

    if (!result.searchStatus) {
      substring = "www."
      if (searchString.includes(substring)) {
        var indexOf = searchString.indexOf(substring);
        if (indexOf == 0) {
          result.websiteStatus = true;
        }
        result.searchString = searchString.substring(substring.length, searchString.length);
        result.searchStatus = this.checksCharacters(searchString, substring, 1)
      }
    }
    if (!result.searchStatus) {
      let dotIndex = searchString.lastIndexOf(".");
      if (dotIndex != '-1') {
        let spaceIndex = searchString.lastIndexOf(" ");
        if (spaceIndex == '-1') {
          result.websiteStatus = true;
          if (!result.httpStatus) {
            result.searchStatus = true;
          }
          result.searchString = searchString;
        }
      }
    }

    return result;
  }

  /**
   *
   * @param list
   * @param searchString
   * @param result
   */
  checkWebsiteFormat(list, searchString, result) {
    var indexOf;//searchString = ''
    list.forEach(substring => {
      if (searchString.includes(substring) && !result.searchStatus) {
        indexOf = searchString.indexOf(substring);
        if (indexOf == 0) {
          result.websiteStatus = true;
          result.searchString = searchString.substring(substring.length, searchString.length);
          if (['http://', 'https://'].includes(substring)) {
            result.searchStatus = this.checksCharacters(searchString, substring, 1)
            let ssubstring = "www.";
            let sString = result.searchString;
            if (sString.includes(ssubstring)) {
              result.httpStatus = true;
              indexOf = sString.indexOf(ssubstring);
              if (indexOf == 0) {
                result.websiteStatus = true;
                result.searchString = sString.substring(ssubstring.length, sString.length);
                result.searchStatus = this.checksCharacters(sString, ssubstring, 1)
              } else {
                result.websiteStatus = false;
                result.searchStatus = false;
              }
            }
          }
        }
      }
    });
  }

  checksCharacters(searchString, subString, ssLength): boolean {
    var indexOf = searchString.indexOf(subString);
    if (indexOf == -1) {
      return false;
    }
    let subStringLength = subString.length;
    let characterString = searchString.substring(indexOf + subStringLength, indexOf + subStringLength + ssLength);
    if (characterString.length == ssLength) {
      return true;
    }
    return false;
  }

  // ucs-2 string to base64 encoded ascii
  utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  // base64 encoded ascii to ucs-2 string
  atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  // Function to Find Browser
  // Added by Akhil Kumar E(3227) on 01-11-2019
  findBrowser() {
    const isIEOrEdge = window.navigator.userAgent;
    let browser = ''
    if ((isIEOrEdge.indexOf("Chrome")) != -1) {
      browser = 'chrome';
      console.log('Chrome');
    }
    else if ((isIEOrEdge.indexOf("Firefox")) != -1) {
      console.log('FireFox');
      browser = 'firefox';
    }
    return browser;
  }
  setHomeProspectCardShake(data) {
    if (data != "" && data != undefined)
      localStorage.setItem('prospectShake', data);
    else
      localStorage.removeItem('prospectShake');
  }
  getHomeProspectCardShake() {
    if (localStorage.getItem('prospectShake')) {
      return localStorage.getItem('prospectShake');
    }
  }
  setHomeSignalsCardShake(data) {
    if (data != "" && data != undefined)
      localStorage.setItem('signalsShake', data);
    else
      localStorage.removeItem('signalsShake');
  }
  getHomeSignalsCardShake() {
    if (localStorage.getItem('signalsShake')) {
      return localStorage.getItem('signalsShake');
    }
  }

}
