import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchResultsService } from './../services/search-results.service';
import { UsersService } from './../services/users.service';
import { GlobalParams } from '../common/global-params';
import { CommonSharedService } from './common-shared.service';

@Injectable({
  providedIn: 'root'
})
export class FindProspectsQuerySharedService {

  public sessFilters: any = {};
  public mile: number = 1609.34;
  public kilometers: number = 1000;
  public categorySearch = 'category';
  public websiteSearch = 'website';
  public businessSearch = 'business_name';
  public priorityP0 = ["P0"];
  public PriorityP = ['P1'];
  Source_values = { 1: 0, 2: null, 3: 1 };
  Source_condition = { 'true': '$and', 'false': '$or' };
  fb_contacts_enable: boolean = false;
  constructor(private http: HttpClient, private globalSharedService: CommonSharedService, private globals: GlobalParams, private router: Router, private activatedRoute: ActivatedRoute, private searchresultsService: SearchResultsService, private usersService: UsersService) { }

  getDates(dateString) {
    let dates = dateString.toString().split('.')
    let date = new Date();
    if (dates.length > 1) {
      let fromDate = date.setFullYear(date.getFullYear() - parseInt(dates[0], 10))
      fromDate = new Date(fromDate).setMonth(date.getMonth() - parseInt(dates[1]))
      return fromDate
    }
    else {
      let fromDate = date.setFullYear(date.getFullYear() - parseInt(dates[0], 10))
      return fromDate
    }
  }

  public prepareFiltersAndSorts(pageNum, filter_data, selectedSortOrder, selectedSortOption, search_type = '', $limit = 0, owfPartnersList = [], covid_data: any = {}) {
    let user_details = this.globalSharedService.getUserDetails();
    let user_settings = this.globalSharedService.getUserSettings();
    let category_field = '';
    let ecom_enabled: boolean = false;
    let searchColumn = [];
    let priority = [];
    let intent = '';
    let searchLocationSource = this.globalSharedService.getLocationSource();

    let covid_areas = {
      'L1': { minValue: 0, maxValue: 501 },
      'L2': { minValue: 500, maxValue: 1001 },
      'L3': { minValue: 1000, maxValue: 3001 },
      'L4': { minValue: 3000, maxValue: 10000000 }
    }

    let owf_partner_info = this.globalSharedService.getOwfPartnerDetails();

    if (typeof user_details.ecom_filter_enabled != 'undefined' && user_details.ecom_filter_enabled) {
      ecom_enabled = true;
    }

    //console.log(filter_data)
    if (typeof filter_data['intent'] != 'undefined' && filter_data['intent']) {
      intent = filter_data.intent;
      delete filter_data['intent'];
    }

    if (user_settings['category_type'] == "google")
      category_field = 'category_ids';
    else
      category_field = user_settings['category_type'] + '_category_ids';
    // if(user_settings['category_source'] == 2)
    //   category_field = 'neustar_category_ids';
    // else if(user_settings['category_source'] == 3)
    //   category_field = 'predicted_category_ids';
    // else
    //   category_field = 'category_ids';

    let filterJson = {};
    filterJson['_query'] = {};
    filterJson['_params'] = {};
    filterJson['_params']['bs'] = this.globals.bs;
    if (typeof search_type != 'undefined' && search_type == 'filter_panel') {
      filterJson['_params']['search_expand'] = false;
    }

    if (filter_data['fp_g_contact'] && typeof filter_data['fp_g_contact'] != 'undefined') {
      let contact_info = {};
      contact_info['has_and_or'] = filter_data['fp_g_contact']['has_and_or'];
      contact_info['no_of_contacts'] = (typeof filter_data['fp_g_contact']['no_of_contacts'] != 'undefined' && filter_data['fp_g_contact']['no_of_contacts'] != '' && filter_data['fp_g_contact']['no_of_contacts'] == 3) ? true : false;
      contact_info['having_li_profile_url'] = (typeof filter_data['fp_g_contact']['having_li_profile_url'] != 'undefined' && filter_data['fp_g_contact']['having_li_profile_url'] != '' && filter_data['fp_g_contact']['having_li_profile_url'] == 3) ? true : false;
      contact_info['having_email'] = (typeof filter_data['fp_g_contact']['having_email'] != 'undefined' && filter_data['fp_g_contact']['having_email'] != '' && filter_data['fp_g_contact']['having_email'] == 3) ? true : false;
      let roles = [];
      if (filter_data['fp_g_contact']['role'] && typeof filter_data['fp_g_contact']['role'] != "undefined") {
        let role = Object.keys(filter_data['fp_g_contact']['role']);
        if (role.length) {
          for (let key in filter_data['fp_g_contact']['role']) {
            if (filter_data['fp_g_contact']['role'][key]) {
              roles.push(key);
            }
          }
          contact_info['role'] = roles;
        }
      }

      filterJson['_params']['fp_g_contact_info'] = contact_info;
    }

    filterJson['_params']['fp_g_domain'] = filter_data['fp_g_domain'];
    filterJson['_params']['search_source'] = 'advisor';
    filterJson['_params']['is_sardines'] = user_settings['is_sardines'];
    filterJson['_params']['location_source'] = searchLocationSource;
    filterJson['_params']['locations'] = [];
    filterJson['_params']['address'] = {};
    let $locations = {};
    $locations['country_code'] = (user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us';
    filterJson['_params']['listing_source'] = 'dp_public';
    filterJson['_params']['locations'][0] = $locations;
    filterJson['_params']['partner_id'] = (user_details.partner_id) ? user_details.partner_id : 0;
    filterJson['_params']['lang_name'] = 'language_en';
    filterJson['_params']['user_id'] = (user_details.id) ? user_details.id : 0;
    filterJson['_params']['region_by'] = (user_details.country_details.name) ? user_details.country_details.name : "USA";
    filterJson['_params']['demo'] = 'true';
    filterJson['_params']['address']['country_code'] = (user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us';
    //filterJson['_params']['address']['region'] = '';
    //filterJson['_params']['address']['locality'] = '';
    filterJson['_params']['limit'] = ($limit > 0) ? $limit : this.globals.profiles_per_page_limit;
    filterJson['_params']['lang'] = 'language_en';
    filterJson['_params']['page'] = pageNum;
    filterJson['_params']['country_code'] = (user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us';
    /*filterJson['fp_g_location'] = {
      "geometry": [-74.0059728, 40.7127753]
    };*/

    if (typeof filter_data.is_covid_enabled != 'undefined' && filter_data.is_covid_enabled) {
      filterJson['_params']['is_covid_enabled'] = true;
    }

    if (typeof covid_data.sem_flag != 'undefined') {
      if (covid_data.sem_flag == 3) filterJson['_params']['covid_sem_enabled'] = true;
      else filterJson['_params']['covid_sem_enabled'] = false;
    }

    if (user_details.country_details.latitude != '' && user_details.country_details.latitude != undefined && user_details.country_details.langitude != '' && user_details.country_details.langitude != undefined) {
      filterJson['_params']['place_details'] = {};
      let $geometry = {
        'location': {
          'lat': user_details.country_details.latitude,
          'lng': user_details.country_details.langitude
        }
      };
      filterJson['_params']['place_details']['geometry'] = $geometry;
    }
    filter_data["fp_g_location"]["address"].country_code = (user_details.country_details.iso_country_code) ? user_details.country_details.iso_country_code : 'us';
    this.sessFilters = filter_data;


    let final_query = {};
    final_query['$and'] = [];
    let contacts_data: any = {
      overall: {
        having_email: 'contacts_data.overall.having_email',
        having_li_profile_url: 'contacts_data.overall.having_li_profile_url',
        having_li_profile_url_or_email: 'contacts_data.overall.having_li_profile_url_or_email',
        having_li_profile_url_and_email: 'contacts_data.overall.having_li_profile_url_and_email',
        no_of_contacts: 'contacts_data.overall.no_of_contacts'
      },
      "c_level": {
        "having_email": 'contacts_data.c_level.having_email',
        "having_li_profile_url": 'contacts_data.c_level.having_li_profile_url',
        "having_li_profile_url_or_email": 'contacts_data.c_level.having_li_profile_url_or_email',
        "having_li_profile_url_and_email": 'contacts_data.c_level.having_li_profile_url_and_email',
        "no_of_contacts": 'contacts_data.c_level.no_of_contacts',
      },
      "president_level": {
        "having_email": 'contacts_data.president_level.having_email',
        "having_li_profile_url": 'contacts_data.president_level.having_li_profile_url',
        "having_li_profile_url_or_email": 'contacts_data.president_level.having_li_profile_url_or_email',
        "having_li_profile_url_and_email": 'contacts_data.president_level.having_li_profile_url_and_email',
        "no_of_contacts": 'contacts_data.president_level.no_of_contacts',
      },
      "director_level": {
        "having_email": 'contacts_data.director_level.having_email',
        "having_li_profile_url": 'contacts_data.director_level.having_li_profile_url',
        "having_li_profile_url_or_email": 'contacts_data.director_level.having_li_profile_url_or_email',
        "having_li_profile_url_and_email": 'contacts_data.director_level.having_li_profile_url_and_email',
        "no_of_contacts": 'contacts_data.director_level.no_of_contacts',
      },
      "manager_level": {
        "having_email": 'contacts_data.manager_level.having_email',
        "having_li_profile_url": 'contacts_data.manager_level.having_li_profile_url',
        "having_li_profile_url_or_email": 'contacts_data.manager_level.having_li_profile_url_or_email',
        "having_li_profile_url_and_email": 'contacts_data.manager_level.having_li_profile_url_and_email',
        "no_of_contacts": 'contacts_data.manager_level.no_of_contacts',
      },
      "owner_level": {
        "having_email": 'contacts_data.owner_level.having_email',
        "having_li_profile_url": 'contacts_data.owner_level.having_li_profile_url',
        "having_li_profile_url_or_email": 'contacts_data.owner_level.having_li_profile_url_or_email',
        "having_li_profile_url_and_email": 'contacts_data.owner_level.having_li_profile_url_and_email',
        "no_of_contacts": 'contacts_data.owner_level.no_of_contacts',
      }
    };
    for (let key in this.sessFilters) {
      //var newValue = this.sessFilters[key];
      if (key == 'fp_g_location') {



        if (this.sessFilters[key].place_id && this.sessFilters[key].place_id != undefined) {

          filterJson['_params']['place_ids'] = [this.sessFilters[key].place_id];
          filterJson['_params']['market'] = this.sessFilters[key];
        }
        else if (this.sessFilters[key].place_ids && this.sessFilters[key].place_ids != undefined) {
          filterJson['_params']['place_ids'] = this.sessFilters[key].place_ids;
        }



        if (this.sessFilters[key].fp_radius > 0) {
          /*if(this.sessFilters['fp_g_location'].geometry == undefined){
            this.sessFilters['fp_g_location'].geometry = [-74.0059728, 40.7127753];
          }*/
          let maxDistance = 0;
          //if (user_details.country_details.iso_country_code == 'gb')
          if (user_details.country_details.radius_metrics == 'km')
            maxDistance = (this.kilometers * this.sessFilters[key].fp_radius);
          else
            maxDistance = (this.mile * this.sessFilters[key].fp_radius);

          let geometry = {
            "$nearSphere": {
              "$geometry": {
                "type": "Point",
                "coordinates": this.sessFilters[key].geometry
              },
              "$maxDistance": maxDistance
            }
          }
          delete filterJson['_params'].locations;
          delete filterJson['_params'].region_by;
          filterJson['_params']['location'] = this.sessFilters[key].fp_location;
          if (searchLocationSource == 'fp') {
            filterJson['_params']['max_distance'] = maxDistance;
          } else {
            final_query['geometry'] = geometry;
          }

        } else {
          filterJson['_params']['locations'][0] = this.sessFilters[key].address;
          filterJson['_params']['region_by'] = this.sessFilters[key].fp_location;
        }
        filterJson['_params']['address'] = this.sessFilters[key].address;
        if (this.sessFilters[key].place_details != undefined)
          filterJson['_params']['place_details'] = this.sessFilters[key].place_details;
        //filterJson['_params']['country_code'] = 'us';
        if (this.sessFilters[key] && this.sessFilters[key].address && this.sessFilters[key].address['country_code']) {
          filterJson['_params']['country_code'] = this.sessFilters[key].address['country_code'].toLowerCase();
        } else if (user_details && user_details.country_details && user_details.country_details.iso_country_code) {
          filterJson['_params']['country_code'] = user_details.country_details.iso_country_code;
        }

        // && (typeof covid_data != 'undefined' && Object.keys(covid_data).length > 0 && (covid_data.count || covid_data.location_flag))
        if (this.sessFilters[key] && typeof this.sessFilters[key].fp_covid_meter != 'undefined' && this.sessFilters[key].fp_covid_meter.length > 0) {
          let least = this.sessFilters[key].fp_covid_meter[0];
          let highest = this.sessFilters[key].fp_covid_meter[this.sessFilters[key].fp_covid_meter.length - 1]
          let covid_impact_areas = {
            "$and": [{
              "active_covid_cases": {
                '$lte': covid_areas[highest].maxValue,
                '$gte': covid_areas[least].minValue
              }
            }]
          }
          final_query['$and'].push(covid_impact_areas);
          filterJson['_params']['covid_impacted_locations'] = this.sessFilters[key].fp_covid_meter;

        }
        else if (this.sessFilters[key] && typeof this.sessFilters[key].covid_meter != 'undefined' && !this.sessFilters[key].covid_meter) {
          filterJson['_params']['covid_meter_applied'] = false;
        }

        if (typeof this.sessFilters[key].address_type != 'undefined' && this.sessFilters[key].address_type != 2) {
          let condition = '$and'
          let query1 = {}
          query1[condition] = [];
          if(this.sessFilters[key].address_type == 3) {
            query1[condition].push({ 'address_type': {"$in":["cloud_first"]}});
            filterJson['_params']['remote_business'] = true;
          }
          else
            query1[condition].push({ 'address_type': {"$nin":["cloud_first"]}});

          final_query[condition].push(query1);
          filterJson['_params']['remote_profiles_from'] = key;
        }

        if (typeof this.sessFilters[key].has_unique != 'undefined' && this.sessFilters[key].has_unique) {
          filterJson['_params']['has_unique'] = this.sessFilters[key].has_unique;
          let condition = '$and'
          let query1 = {}
          query1[condition] = [];
          query1[condition].push({ 'business.duplicate_host': !this.sessFilters[key].has_unique })
          final_query[condition].push(query1);
        }

      } else if (key == 'fp_g_category' || key == 'fp_g_grade' || key == 'fp_g_primary_language' || key == 'fp_g_product' || (key == 'fp_g_sectors' && typeof user_details.has_sectors != 'undefined' && user_details.has_sectors) || key == 'fp_g_estimated_spend') {
        let inArray = [];
        let spendData = {};
        let sectorNames = JSON.parse(localStorage.getItem('sector_names'));
        //console.log(this.sessFilters[key])
        for (var subKey in this.sessFilters[key]) {
          if (this.sessFilters[key][subKey] == true) {
            if (key == 'fp_g_category' || key == 'fp_g_product') {
              if (subKey && typeof subKey != 'undefined' && subKey != 'undefined') {
                //console.log(subKey)
                inArray.push(+subKey);
              }

              if (key == 'fp_g_category' && typeof covid_data != 'undefined' && Object.keys(covid_data).length > 0) {
                if (covid_data.selected_categories_set.length > 0) {
                  filterJson['_params']['covid_category_sections'] = covid_data.selected_categories_set;
                  filterJson['_params']['covid_category_groups'] = covid_data.category_groups;
                }
                if (covid_data.removed.length > 0)
                  filterJson['_params']['covid_removed_categories'] = covid_data.removed;
              }
            }
            else if (key == 'fp_g_sectors' && typeof user_details.has_sectors != 'undefined' && user_details.has_sectors) {
              if (subKey && typeof subKey != 'undefined' && subKey != 'undefined') {
                inArray.push(sectorNames[subKey]);
              }
              if (covid_data.removed_sectors.length > 0)
                filterJson['_params']['covid_removed_sectors'] = covid_data.removed_sectors;
            }
            else if (key == 'fp_g_estimated_spend') {
              let spend = subKey.toString().split('-');
              if (spend[1] != "undefined") {
                spendData = {
                  'total_spend': {
                    '$gte': spend[0],
                    '$lte': spend[1]
                  }
                }
              } else {
                spendData = {
                  'total_spend': {
                    '$gte': spend[0]
                  }
                }
              }
              inArray.push(spendData);
            } else
              inArray.push(subKey.toLowerCase());
          }
        }
        if (key == 'fp_g_category') {
          filterJson['_params']['keyword'] = this.sessFilters[key].fp_category;
        }
        if (key == 'fp_g_sectors' && typeof this.sessFilters[key]['fp_sectors'] != 'undefined' && this.sessFilters[key]['fp_sectors'] != '' && typeof user_details.has_sectors != 'undefined' && user_details.has_sectors) {
          filterJson['_params']['sector_enabled_globally'] = true;
          let sub_key=this.sessFilters[key]['fp_sectors'];
          inArray.push(sub_key);
        }
        if (inArray.length > 0) {
          if (key == 'fp_g_category') {
            final_query[category_field] = {};
            //console.log(inArray)
            final_query[category_field]['$in'] = inArray;
            if (this.sessFilters[key].searchType != 'undefined' && this.sessFilters[key].searchType) {
              delete final_query[category_field]
            }
            filterJson['_params']['keyword'] = this.sessFilters[key].fp_category;
            //console.log(this.sessFilters[key])
            if (this.sessFilters[key].searchType != 'undefined' && this.sessFilters[key].searchType) {
              searchColumn = [this.categorySearch];
              priority = this.priorityP0;
            }
            //console.log("filterJson")
            //console.log(filterJson);
          } else if (key == 'fp_g_grade') {
            final_query['opportunity_grade'] = {};
            final_query['opportunity_grade']['$in'] = inArray;
          } else if (key == 'fp_g_product') {
            final_query['recommended_products_id'] = {};
            final_query['recommended_products_id']['$in'] = inArray;
          } else if (key == 'fp_g_sectors'  && typeof user_details.has_sectors != 'undefined' && user_details.has_sectors) {
            final_query['sector'] = {};
            final_query['sector']['$in'] = inArray;
          } else if (key == 'fp_g_estimated_spend') {
            let spendQuery = {
              "$and": [{
                "$or": inArray
              }
              ]
            }
            final_query['$and'].push(spendQuery);
          } else {
            let language = {
              "$or": [{
                "listing_language": {
                  "$in": inArray
                }
              }
              ]
            }
            final_query['$and'].push(language);
          }
        }
      }
      else if(key == 'fp_g_fav'){
        let queryFav :any
        for (var subKey in this.sessFilters[key]) {
          if(subKey == 'favorites_by'){
            if (this.sessFilters[key][subKey] == 3) {
              queryFav = {
                "$regexn": JSON.stringify(user_details.partner_id) + ',' + JSON.stringify(user_details.id) + '.*'
              }
            }
            else {
               queryFav = {
                "$regexp": JSON.stringify(user_details.partner_id) + ',' + JSON.stringify(user_details.id) + '.*'
              }
            }
          }
        }
        if(queryFav != undefined) {
          let favObject = {
            'favorites_by' :queryFav
          }
          final_query['$and'].push(favObject);
        }
      }
      else if (key == 'fp_g_technologies') {
        // let inArray = '';
        let sub_info = [];
        // console.log("**************");
        // console.log(this.sessFilters[key]);
        // console.log("**************");
        // for (var subKey in this.sessFilters[key]) {
        //   if (this.sessFilters[key][subKey] == true) {
        //     if(inArray!='')
        //     inArray+=",";
        //     inArray = inArray + subKey;
        //   }
        // }
        // if (inArray.length > 0) {
        //   final_query['technologies'] = {};
        //   console.log(inArray);
        //   final_query['technologies']['$in'] = inArray.split(',');
        let inArray = [];
        let techKey
        if (this.sessFilters[key].covid_enabled) {
          techKey = 'technologies_added_after_march_2020'
        }
        else {
          techKey = 'technologies'
        }

        if (this.sessFilters[key].in && this.sessFilters[key].in != '') {

          if (!final_query[techKey]) {
            final_query[techKey] = {};
          }
          final_query[techKey]['$in'] = this.sessFilters[key].in.split(",").map(function (item) {
            return parseInt(item, 10);
          });
        }
        if (this.sessFilters[key].nin && this.sessFilters[key].nin != '') {
          if (!final_query[techKey]) {
            final_query[techKey] = {};
          }
          final_query[techKey]['$nin'] = this.sessFilters[key].nin.split(",").map(function (item) {
            return parseInt(item, 10);
          });
        }
        // }
      } else if (key == 'fp_g_business') {
        //console.log(key)
        filterJson['_params']['keyword'] = this.sessFilters[key].fp_business;
        //console.log(this.sessFilters[key])
        // console.log(this.sessFilters)
        if (this.sessFilters[key].searchType != 'undefined' && this.sessFilters[key].searchType) {
          searchColumn = [this.businessSearch];
          priority = this.priorityP0;
        }
        if (this.sessFilters[key]['host_name'] != '' && this.sessFilters['fp_g_business']['host_name'] != undefined) {
          searchColumn = [];
        }

        if (this.sessFilters[key]['host_name'] != '' && this.sessFilters['fp_g_business']['host_name'] != undefined && this.sessFilters['fp_g_website'] == undefined) {
          let condition = '$and';
          let website = {};
          website[condition] = [];
          let query1 = {
            'host_name': this.sessFilters['fp_g_business']['host_name']
          }

          searchColumn = [];
          if (this.sessFilters[key].searchType != 'undefined' && this.sessFilters[key].searchType) {
            //priority = this.priorityP0;
          }
          website['$and'].push(query1);
          final_query['$and'].push(website);
        }

      } else if (key == 'fp_g_firmographics') {
        let website = {};
        website['$and'] = [];
        let spendData = {};
        let locationCount: any;
        let toatlSpend = [];
        for (var subKey in this.sessFilters[key]) {
          let subQuery = {};
          let inArray = [];
          for (var inKey in this.sessFilters[key][subKey]) {
            if (subKey == 'location_count_dependent') {
              if ((this.sessFilters[key][subKey]['location_count_dep'].from && this.sessFilters[key][subKey]['location_count_dep'].to) && (parseInt(this.sessFilters[key][subKey]['location_count_dep'].from) <= parseInt(this.sessFilters[key][subKey]['location_count_dep'].to))) {
                locationCount = {};
                locationCount['$and'] = [];
                locationCount['$and'].push({
                  'business_location_count': {
                    '$gte': this.sessFilters[key][subKey]['location_count_dep'].from,
                    '$lte': this.sessFilters[key][subKey]['location_count_dep'].to
                  }
                });
              }

            }
            else if (this.sessFilters[key][subKey][inKey] == true) {
              if (subKey != 'total_spend') {
                inArray.push(inKey.toLowerCase());
              } else {
                let spend = inKey.toString().split('-');
                if (spend[1] != "undefined") {
                  spendData = {
                    'total_spend': {
                      '$gte': spend[0],
                      '$lte': spend[1]
                    }
                  }
                } else {
                  spendData = {
                    'total_spend': {
                      '$gte': spend[0]
                    }
                  }
                }
                toatlSpend.push(spendData);
              }
            }
          }
          if (subKey != 'total_spend' && inArray.length > 0) {
            subQuery[subKey] = {
              "$in": inArray
            }
            website['$and'].push(subQuery);
          }

        }
        if (website['$and'].length > 0) {
          final_query['$and'].push(website);
        }

        if (typeof this.sessFilters[key].remote_business != 'undefined' && this.sessFilters[key].remote_business) {
          let condition = '$and'
          let query1 = {}
          query1[condition] = [];
          if(this.sessFilters[key].remote_business) {
            query1[condition].push({ 'address_type': {"$in":["cloud_first"]}});
            filterJson['_params']['remote_business'] = true;
          }

          final_query[condition].push(query1);
          filterJson['_params']['remote_profiles_from'] = key;
        }

        if (toatlSpend.length > 0) {
          let spendQuery = {
            "$and": [{
              "$or": toatlSpend
            }
            ]
          }
          final_query['$and'].push(spendQuery);
        }

        if (typeof locationCount != 'undefined' && locationCount) {
          final_query['$and'].push(locationCount);
        }

      } else if (key == 'fp_g_contact') {

        filterJson['_params']['fp_g_contact_data'] = this.sessFilters[key];


        let condition = '$and';
        let conditionStr = 'and';
        if (this.Source_condition[this.sessFilters[key].has_and_or] != undefined) {
          condition = this.Source_condition[this.sessFilters[key].has_and_or];
          conditionStr = condition.replace('$', '');
        }
        let contactQuery = {};
        let roleSelectionQuery = {};
        if (this.sessFilters[key].hasOwnProperty('role') && Object.keys(this.sessFilters[key]['role']).length > 0) {
          roleSelectionQuery['$or'] = [];
        }
        contactQuery[condition] = [];

        let queryObj = {
          "$gt": 0
        };
        let counter = false;
        let overAllCounter = false;
        let rolesCount = 1;
        let roleCounter = 0;

        let moreRoles = false;
        for (var subKey in this.sessFilters[key]) {
          let subQuery = {};
          if (this.Source_values[this.sessFilters[key][subKey]] != null) {
            if (Object.keys(this.sessFilters[key]).length > 0) {
              if (this.sessFilters[key].hasOwnProperty('role') && Object.keys(this.sessFilters[key]['role']).length > 0) {
                for (var inKey in this.sessFilters[key]['role']) {
                  let roleQuery = {};
                  if (this.sessFilters[key]['role'][inKey] == true) {

                    let roleObj = contacts_data[inKey];
                    let overall = contacts_data.overall;
                    if (this.sessFilters[key].hasOwnProperty('having_li_profile_url') && this.sessFilters[key].hasOwnProperty('having_email') && this.Source_values[this.sessFilters[key]['having_li_profile_url']] == 1 && this.Source_values[this.sessFilters[key]['having_email']] == 1 && !counter && !moreRoles) {
                      rolesCount++;
                      if (subKey == 'no_of_contacts' && !overAllCounter) {
                        let obj_subKey = overall[subKey]
                        roleQuery[obj_subKey] = queryObj;
                        contactQuery['$' + conditionStr].push(roleQuery);
                        roleQuery = {};
                        overAllCounter = true;
                      }

                      if (conditionStr == 'and') {
                        let obj_subKey = roleObj['having_li_profile_url_and_email'];
                        roleQuery[obj_subKey] = queryObj;
                      }
                      else {
                        let obj_subKey = roleObj['having_li_profile_url_or_email'];
                        roleQuery[obj_subKey] = queryObj;
                      }
                      if (Object.keys(this.sessFilters[key]['role']).length == 1)
                        counter = true;
                    }
                    else {
                      if (this.Source_values[this.sessFilters[key][subKey]] == 1 && !counter && !moreRoles && !counter) {
                        if (subKey == 'no_of_contacts' && !overAllCounter) {
                          let obj_subKey = overall[subKey]
                          roleQuery[obj_subKey] = queryObj;
                          contactQuery['$' + conditionStr].push(roleQuery);
                          roleQuery = {};
                          overAllCounter = true;
                        }
                        if (subKey == 'no_of_contacts') {
                          let obj_subKey = roleObj[subKey]
                          roleQuery[obj_subKey] = queryObj;
                          overAllCounter = true;
                        }
                        if (subKey == 'having_li_profile_url') {
                          let obj_subKey = roleObj[subKey]
                          roleQuery[obj_subKey] = queryObj;
                        }
                        else if (subKey == 'having_email') {
                          let obj_subKey = roleObj[subKey]
                          roleQuery[obj_subKey] = queryObj;
                        }
                      }
                    }
                  }

                  if (Object.keys(roleQuery).length > 0)
                    roleSelectionQuery['$or'].push(roleQuery);
                }

                if (roleSelectionQuery['$or'].length > 0) {
                  let sampleObj = JSON.parse(JSON.stringify(roleSelectionQuery));
                  contactQuery['$' + conditionStr].push(sampleObj);
                  roleCounter = sampleObj['$or'].length + 1;
                  roleSelectionQuery['$or'] = [];
                }

                if (rolesCount == roleCounter) moreRoles = true;

              }
              else {
                let overall = contacts_data.overall;
                if (this.sessFilters[key].hasOwnProperty('having_li_profile_url') && this.sessFilters[key].hasOwnProperty('having_email') && this.Source_values[this.sessFilters[key]['having_li_profile_url']] == 1 && this.Source_values[this.sessFilters[key]['having_email']] == 1 && !counter) {
                  if (subKey == 'no_of_contacts') {
                    let obj_subKey = overall[subKey]
                    subQuery[obj_subKey] = queryObj;
                    contactQuery[condition].push(subQuery);
                    subQuery = {};
                  }
                  if (conditionStr == 'and') {
                    let obj_subKey = overall['having_li_profile_url_and_email'];
                    subQuery[obj_subKey] = queryObj;
                  }
                  else {
                    let obj_subKey = overall['having_li_profile_url_or_email'];
                    subQuery[obj_subKey] = queryObj;
                  }
                  counter = true;
                }
                else {
                  if (this.Source_values[this.sessFilters[key][subKey]] == 1 && !counter) {
                    if (subKey == 'no_of_contacts') {
                      let obj_subKey = overall[subKey]
                      subQuery[obj_subKey] = queryObj;
                    }
                    if (subKey == 'having_li_profile_url') {
                      let obj_subKey = overall[subKey]
                      subQuery[obj_subKey] = queryObj;
                    }
                    else if (subKey == 'having_email') {
                      let obj_subKey = overall[subKey]
                      subQuery[obj_subKey] = queryObj;
                    }
                  }
                }

                if (Object.keys(subQuery).length > 0)
                  contactQuery[condition].push(subQuery);
              }
            }

          }
        }

        if (contactQuery[condition].length > 0) {
          final_query['$and'].push(contactQuery);
        }
      } else if(key == 'fp_g_commerce' && ecom_enabled) {
        let condition = '$and';
        if (this.Source_condition[this.sessFilters[key].has_and_or] != undefined)
          condition = this.Source_condition[this.sessFilters[key].has_and_or];
        let website = {};
        website[condition] = [];

        for (var subKey in this.sessFilters[key]) {
          let query = {};
          if ((subKey == 'e_commerce_ready' || subKey == 'ecom_enabled') && this.Source_values[this.sessFilters[key][subKey]] != null) {
            query[subKey] = this.Source_values[this.sessFilters[key][subKey]];
            website[condition].push(query);
          }
          else {
            let subQuery = {};
            if(Object.keys(this.sessFilters[key][subKey]).length > 0) {
              for (var inKey in this.sessFilters[key][subKey]) {
                if (this.Source_values[this.sessFilters[key][subKey][inKey]] != null) {
                  subQuery[inKey] = this.Source_values[this.sessFilters[key][subKey][inKey]];
                  website[condition].push(subQuery);
                }
                subQuery = {};
              }
            }
          }
        }

        if (website[condition].length > 0) {
          final_query['$and'].push(website);
        }

      } else {
        let condition = '$and';
        if (this.Source_condition[this.sessFilters[key].has_and_or] != undefined)
          condition = this.Source_condition[this.sessFilters[key].has_and_or];
        let website = {};
        website[condition] = [];
        if (key == 'fp_g_website' && this.sessFilters['fp_g_business'] != undefined) {
          let query1 = {};
          if (this.sessFilters['fp_g_business']['host_name'] != '' && this.sessFilters['fp_g_business']['host_name'] != undefined) {
            query1 = {
              'host_name': this.sessFilters['fp_g_business']['host_name']
            }
            website[condition].push(query1);
          }
        }

        for (var subKey in this.sessFilters[key]) {

          let query = {};
          if ((subKey == 'opportunity_score' || subKey == 'domain_age') && this.sessFilters[key][subKey] != '' && this.sessFilters[key][subKey] != undefined) {


            if (this.sessFilters[key][subKey].from != undefined) {
              if (key == 'fp_g_domain') {
                if (this.sessFilters[key][subKey].from >= 0 && this.sessFilters[key][subKey].to > 0) {
                  query[subKey] = {
                    '$gte': +this.getDates(this.sessFilters[key][subKey].to),
                    '$lte': +this.getDates(this.sessFilters[key][subKey].from)
                  }
                  filterJson['domain_data'] = this.sessFilters[key][subKey];
                }
                if (this.sessFilters['fp_g_domain'].hasOwnProperty('has_and_or')) {
                  filterJson['domain_has_and_or'] = this.sessFilters[key]['has_and_or']
                }
              }
              else if (this.sessFilters[key][subKey].from >= 0 && this.sessFilters[key][subKey].to > 0) {
                query[subKey] = {
                  '$lte': +this.sessFilters[key][subKey].to,
                  '$gte': +this.sessFilters[key][subKey].from
                }
              }
            } else {
              let score = this.sessFilters[key][subKey].toString().split('-');
              if (score.length > 1) {
                query[subKey] = {
                  "$gte": parseInt(score[0]),
                  "$lte": parseInt(score[1])
                }
              }
              else if (JSON.stringify(this.sessFilters[key][subKey]) != '{}') {
                query[subKey] = parseInt(this.sessFilters[key][subKey]);
              }
            }


          }
          if (this.Source_values[this.sessFilters[key][subKey]] != null) {
            if (subKey != 'business_website') {
              if (subKey == 'iframe_count' || subKey == 'flash_count') {
                if (this.Source_values[this.sessFilters[key][subKey]] == 1) {
                  query[subKey] = 0
                } else {
                  query[subKey] = {
                    "$gt": 0
                  }
                }
              } else if (subKey == 'h1_count') {
                if (this.Source_values[this.sessFilters[key][subKey]] == 1) {
                  query[subKey] = {
                    "$gt": 0
                  }
                } else
                  query[subKey] = 0
              }
              else if (subKey == 'manually_verified') {
                if (this.sessFilters[key][subKey] == 3) {
                  query[subKey] = {
                    "$exists": true
                  }
                }
                else {
                  query[subKey] = {
                    "$exists": false
                  }
                }
              }

              else if (subKey == 'fb_un_official') {
                if (this.sessFilters[key][subKey] == 3) {
                  query[subKey] = 0
                }
                else {
                  query[subKey] = 1
                }
              }
              // else if(subKey == 'domain_registrar') {
              //   if(this.sessFilters[key][subKey] == 3) {
              //     query[subKey] = {
              //       "$in": ["godaddy.com, llc"]
              //     }
              //   }
              //   else {
              //     query[subKey] = {
              //       "$nin": ["godaddy.com, llc"]
              //     }
              //   }
              // }
              // else if (subKey == 'favorites_by') {
              //   if (this.sessFilters[key][subKey] == 3) {
              //     query[subKey] = {
              //       "$regexn": JSON.stringify(user_details.partner_id) + ',' + JSON.stringify(user_details.id) + '.*'
              //     }
              //   }
              //   else {
              //     query[subKey] = {
              //       "$regexp": JSON.stringify(user_details.partner_id) + ',' + JSON.stringify(user_details.id) + '.*'
              //     }
              //   }
              // }
              // if (subKey == 'facebook_ads_count' && this.sessFilters[key][subKey] == 3) {
              //   // facebook_ads_count
              //   query[subKey] = {
              //     "$gt": 0
              //   }
              // }
              // else
              if (subKey == 'googleplaces_presence' && this.sessFilters[key][subKey] == 1) {
                query[subKey] = {
                  "$nin": [1]
                }
              }
              /*  else if(subKey == 'contacts_count'){
                 if(this.sessFilters[key][subKey] == 1){
                   query[subKey] = {
                     "$exists": false
                   }
                 }
                 else if(this.sessFilters[key][subKey] == 3){
                   query[subKey] = {
                     "$exists": true
                   }
                 }
               }*/
              else if (subKey == 'domain_registration_date' || subKey == 'jobs_count') {
                if (this.sessFilters[key][subKey] == 3) {
                  query[subKey] = {
                    "$gt": 0
                  }
                }
                else {
                  query[subKey] = 0
                }

              }

              else if (subKey == 'manually_verified') {
                if (this.sessFilters[key][subKey] == 3) {
                  query[subKey] = {
                    "$exists": true
                  }
                }
                else {
                  query[subKey] = {
                    "$exists": false
                  }
                }
              }

              else if (subKey == 'is_google') {
                if (this.sessFilters[key][subKey] == 3) {
                  query[subKey] = {
                    "$exists": true
                  }
                }
                else {
                  query[subKey] = {
                    "$exists": false
                  }
                }
              }
              else if (subKey == 'is_google_claimed') {
                if (this.sessFilters[key][subKey] == 3) {
                  query[subKey] = {
                    "$in": ["true"]
                  }
                }
                else {
                  query[subKey] = {
                    "$in": ["false"]
                  }
                }
              }
              else if (subKey == 'assigned_to_partner_ids') {
                if (this.sessFilters[key][subKey] == 3) {
                  if (typeof owf_partner_info != 'undefined' && owf_partner_info && owf_partner_info.length > 0) {
                    final_query[subKey] = { '$nin': owf_partner_info }
                  }
                  else {
                    final_query['assigned_to_partner_ids'] = { '$nin': owfPartnersList };
                    filterJson['owf_data'] = {};
                    filterJson['owf_data'].partners = owfPartnersList;
                  }
                }
              }
              else {
                if (key == 'fp_g_sem') {
                  if (subKey == 'adwords' && covid_data.sem_flag == 3) {
                    let temp_key = 'adwords_post_feb_2020'
                    if (this.sessFilters[key][subKey] == 3)
                      query[temp_key] = this.Source_values[this.sessFilters[key][subKey]];
                    else
                      query[temp_key] = { "$nin": [1] }
                  }
                  else if (subKey == 'facebook_ads_count') {
                    if (this.sessFilters[key][subKey] == 3)
                      query[subKey] = { "$gt": 0 };
                    else
                      query[subKey] = this.Source_values[this.sessFilters[key][subKey]];
                  }
                  else
                    query[subKey] = this.Source_values[this.sessFilters[key][subKey]];
                }
                else if(subKey != 'iframe_count' && subKey != 'flash_count' && subKey != 'fb_un_official' && subKey != 'h1_count')
                  query[subKey] = this.Source_values[this.sessFilters[key][subKey]];
              }
            } else {
              if (this.Source_values[this.sessFilters[key][subKey]] != null) {
                filterJson['_params']['website'] = this.Source_values[this.sessFilters[key][subKey]];
              }
            }
            if (this.sessFilters[key][subKey + '_dependent']) {
              let dependent = {};
              dependent['$and'] = [];
              for (var dependentKey in this.sessFilters[key][subKey + '_dependent']) {
                let subQuery = {};
                // if (dependentKey == 'host_name' && this.sessFilters[key][subKey + '_dependent'][dependentKey] != '') {
                //   query = {
                //     'host_name': this.sessFilters[key][subKey + '_dependent'][dependentKey]
                //   }
                // }else
                if (this.sessFilters[key][subKey + '_dependent'][dependentKey].from >= 0 && this.sessFilters[key][subKey + '_dependent'][dependentKey].to > 0) {
                  subQuery[dependentKey] = {
                    '$lte': +this.sessFilters[key][subKey + '_dependent'][dependentKey].to,
                    '$gte': +this.sessFilters[key][subKey + '_dependent'][dependentKey].from
                  }
                  dependent['$and'].push(subQuery);
                }
              }
              if (subKey != 'business_website') {
                if (dependent['$and'].length > 0) {
                  dependent['$and'].push(query);
                  website[condition].push(dependent);
                } else
                  website[condition].push(query);
              } else if (JSON.stringify(query) != '{}')
                website[condition].push(query);
            } else if (JSON.stringify(query) != '{}') {
              website[condition].push(query);
            }
          } else if (JSON.stringify(query) != '{}') {
            website[condition].push(query);
          }

        }
        if (website[condition].length > 0) {
          final_query['$and'].push(website);
        }
      }
    }

    if (searchColumn.length) {
      filterJson['_params']["keyword_scope"] = searchColumn;
    } else if (intent) {
      filterJson['_params']["keyword_scope"] = intent;
      filterJson['_params']["priority"] = this.priorityP0;
    }
    if (priority.length) {
      filterJson['_params']["priority"] = priority;
    }

    let searchQuery = this.activatedRoute.snapshot.queryParams["q"];
    if (searchQuery) {
      searchQuery = atob(searchQuery);
      searchQuery = JSON.parse(searchQuery);
      if (typeof searchQuery['_params'] != 'undefined' && searchQuery['_params']['keyword_scope'] != 'undefined' && searchQuery['_params']['keyword_scope']) {
        filterJson['_params']["keyword_scope"] = searchQuery['_params']['keyword_scope'];
      }
      if (typeof searchQuery['_params'] != 'undefined' && searchQuery['_params']['keyword'] != 'undefined' && searchQuery['_params']['keyword']) {
        filterJson['_params']["keyword"] = searchQuery['_params']['keyword'];
      }
      if (typeof searchQuery['_params'] != 'undefined' && searchQuery['_params']['priority'] != 'undefined' && searchQuery['_params']['priority']) {
        filterJson['_params']["priority"] = searchQuery['_params']['priority'];
      }
      if (typeof searchQuery['_params']['category_unique_toogle'] != 'undefined' && searchQuery['_params']['category_unique_toogle']) {
        filterJson['_params']['category_unique_toogle'] = searchQuery['_params']['category_unique_toogle'];
      }
    }

    /*let searchc: any = localStorage.getItem('searchc')

    if (searchc) {
      searchc = JSON.parse(atob(searchc));
      if (searchc.autoSearch) {
        if (searchc.keyword_scope) {
          filterJson['_params']["keyword_scope"] = searchc.keyword_scope;
        }
        if (searchc.priority) {
          filterJson['_params']["priority"] = searchc.priority;
        }
      }
    }*/

    filterJson['_params']['signals'] = [
      "business_name",
      "website",
      "street_address",
      "locality",
      "region",
      "postal_code",
      "business_emails",
      "business_phone_numbers",
      "opportunity_grade",
      "business_year_established",
      "revenue_site",
      "employees_size",
      "years_in_business",
      "contacts_count",
      "locations_count"
    ];
    ////console.log(final_query);
    if (final_query['$and'].length == 0)
      delete final_query['$and'];

    if (selectedSortOption != '') {
      filterJson['_params']['sort'] = {
        "by": selectedSortOption,
        "order": selectedSortOrder
      }
    }
    filterJson['_params']["category_type"] = user_settings['category_type'];

    //if(search_type != '')
    //filterJson['_params']["search_type"] = search_type;
    // console.log("=======================");
    // console.log(filterJson);

    // filterJson['_query']['assigned_to_partner_ids'] = {}

    filterJson['_query'] = final_query;
    let userInfo = this.globalSharedService.getUserDetails();

    if (userInfo != undefined && userInfo.sync_to_facebook) {

      filterJson['_params']['fb_contacts_enable'] = true
    }
    // console.log(JSON.stringify(filterJson));
    let filtersortopt = (JSON.stringify(filterJson) != '{}') ? JSON.stringify(filterJson) : '';

    return filtersortopt;
  }

  getDefaultUserMarket() {

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
    } else if (location_source == 'fp' && userInfo.country_details != undefined && userInfo.country_details.id == 2) {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'ca',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1,
        "place_id": "5caf40ef6a982"
      };
      return default_market;
    }
    else if (location_source == 'fp' && userInfo.country_details != undefined && userInfo.country_details.id == 15) {
      let default_market = {
        "address": (userInfo.country_details != undefined && userInfo.country_details.name != undefined && userInfo.country_details.name != "") ? userInfo.country_details.name : '',
        "country_code": (userInfo.country_details != undefined && userInfo.country_details.iso_country_code != undefined && userInfo.country_details.iso_country_code != "") ? userInfo.country_details.iso_country_code.toLowerCase() : 'gb',
        "geometry": (userInfo.country_details != undefined && userInfo.country_details.langitude != undefined && userInfo.country_details.langitude != "") ? [userInfo.country_details.langitude, userInfo.country_details.latitude] : '',
        "type": 1,
        "place_id": "5c3f01c75a52a"
      };
      return default_market;
    }
    else {
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
  }

  prepareFPLocationQuery(local_market) {
    if (typeof local_market.placedetails != 'undefined' && local_market.placedetails) {
      local_market = local_market.placedetails;
    }
    let address = {};
    // let location = local_market.address;
    let location = local_market.address;
    if (local_market.fp_location) {
      location = local_market.fp_location;
    }
    let geometry = [];
    let place_id;
    /*address = {
      country_code: local_market.country_code.toLowerCase()
    };*/

    if (typeof local_market.country_code != 'undefined' && local_market.country_code && local_market.country_code != "") {
      address = {
        country_code: local_market.country_code.toLowerCase()
      };
    }
    if (typeof local_market.country != 'undefined' && local_market.country && local_market.country != "") {
      address = {
        country_code: local_market.country.toLowerCase()
      };
    }

    if (typeof local_market.address.country_code != 'undefined' && local_market.address.country_code && local_market.address.country_code != "") {
      address = {
        country_code: local_market.address.country_code.toLowerCase()
      };
    }
    if (typeof local_market.fp_countries != 'undefined' && local_market.fp_countries && local_market.fp_countries != "") {
      address = {
        country_code: local_market.fp_countries.toLowerCase()
      };
    }

    if (local_market.region != undefined && local_market.region != "") {
      address['region'] = local_market.region;
    }
    else if (local_market.address.region != undefined && local_market.address.region != "") {
      address['region'] = local_market.address.region;
    }

    if (local_market.locality != undefined && local_market.locality != "") {
      address['locality'] = local_market.locality;
    } else if (local_market.address.locality != undefined && local_market.address.locality != "") {
      address['locality'] = local_market.address.locality;
    }

    if (local_market.county != undefined && local_market.county != "") {
      address['county'] = local_market.county;
    } else if (local_market.address.county != undefined && local_market.address.county != "") {
      address['county'] = local_market.address.county;
    }

    if (local_market.postal_code != undefined && local_market.postal_code != "") {
      address['postal_code'] = local_market.postal_code;
    } else if (local_market.address.postal_code != undefined && local_market.address.postal_code != "") {
      address['postal_code'] = local_market.address.postal_code;
    }

    if (local_market.geometry != undefined) {
      geometry = local_market.geometry;
    }

    if (local_market.place_details != undefined) {
      if (typeof local_market.place_details.geometry != 'undefined' && local_market.place_details.geometry) {
        geometry = [local_market.place_details.geometry.location.lng, local_market.place_details.geometry.location.lat];
      }
      if (local_market.place_details.place_id != undefined && local_market.place_details.place_id) {
        place_id = local_market.place_details.place_id;
      }
    } else if (typeof local_market.place_id != 'undefined') {
      place_id = local_market.place_id;
    }

    return {
      "address": address,
      "fp_location": location,
      "place_details": local_market.place_details,
      "place_id": place_id,
      "geometry": geometry
    };
  }


  getQueryPlaceDetails(placeDetails, address) {
    return {
      "address": (placeDetails.address_line1 != '') ? placeDetails.address_line1 : address,
      "region": placeDetails.state,
      "locality": placeDetails.city,
      "county": (placeDetails.county) ? placeDetails.county : '',
      "place_id": (placeDetails.place_id) ? placeDetails.place_id : '',
      "postal_code": (placeDetails.postal_code) ? placeDetails.postal_code : '',
      "country_code": placeDetails.country,
      "type": ((placeDetails.city != "") ? 3 : ((placeDetails.state != "") ? 2 : 1)),
      "place_details": placeDetails.place_details,
      "page_source": 2
    }
  }
  searchResultsByCategory(category_id, category_name) {
    let locationSource = this.globalSharedService.getLocationSource();
    let recentItems = this.globalSharedService.getRecentLocationSearches();
    let global_search_location_record;
    if (recentItems.length > 0 && typeof recentItems[0] != 'undefined' && recentItems[0]) {
      if (locationSource == 'fp') {
        let addressLocation = this.globalSharedService.getFPQueryPlaceDetails(recentItems[0].originalObject, recentItems[0].originalObject.description);
        this.redirectToProspectsPage(addressLocation, category_id, category_name)
      } else {
        let random_str = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.searchresultsService.getPlaceDetailsWithSessionParams(recentItems[0].originalObject.place_id, random_str).subscribe(placeDetails => {
          //console.log(placeDetails)
          let item = this.getQueryPlaceDetails(placeDetails, recentItems[0].originalObject.description);
          // }
          this.redirectToProspectsPage(item, category_id, category_name)
        });
      }

    } else {
      global_search_location_record = this.getDefaultUserMarket();
      this.redirectToProspectsPage(global_search_location_record, category_id, category_name)
    }
  }
  /*
  prepareFPLocationQuery(local_market) {
    if (typeof local_market.placedetails != 'undefined' && local_market.placedetails) {
      local_market = local_market.placedetails;
    }
    let address = {};
    // let location = local_market.address;
    let location = local_market.address;
    if (local_market.fp_location) {
      location = local_market.fp_location;
    }
    let geometry = [];
    let place_id;


    if (typeof local_market.country_code != 'undefined' && local_market.country_code && local_market.country_code != "") {
      address = {
        country_code: local_market.country_code.toLowerCase()
      };
    }
    if (typeof local_market.country != 'undefined' && local_market.country && local_market.country != "") {
      address = {
        country_code: local_market.country.toLowerCase()
      };
    }

    if (local_market.region) {
      address['region'] = local_market.region;
    }
    if (local_market.locality && local_market.locality != "") {
      address['locality'] = local_market.locality;
    }
    if (local_market.county && local_market.county != "") {
      address['county'] = local_market.county;
    }

    if (local_market.postal_code && local_market.postal_code != "") {
      address['postal_code'] = local_market.postal_code;
    }
    if (local_market.geometry != undefined) {
      geometry = local_market.geometry;
    }
    if (local_market.place_details != undefined) {
      if (typeof local_market.place_details.geometry != 'undefined' && local_market.place_details.geometry) {
        geometry = [local_market.place_details.geometry.location.lng, local_market.place_details.geometry.location.lat];
      }
      if (local_market.place_details.place_id != undefined && local_market.place_details.place_id) {
        place_id = local_market.place_details.place_id;
      }
    } else if(typeof local_market.place_id != 'undefined'){
      place_id = local_market.place_id;
    }

    return {
      "address": address,
      "fp_location": location,
      "place_details": local_market.place_details,
      "place_id": place_id,
      "geometry": geometry
    };
  }*/
  async redirectToProspectsPage(global_search_location_record, category_id, category_name) {
    let fp_query = {};
    fp_query['fp_g_business'] = [];
    fp_query['fp_g_website'] = [];
    fp_query['fp_g_business']['fp_business'] = category_name;
    fp_query['fp_g_website']['business_website'] = 3;
    fp_query['fp_g_location'] = this.prepareFPLocationQuery(global_search_location_record);
    /* if(global_search_location_record.placedetails != "" && global_search_location_record.placedetails != undefined && global_search_location_record.placedetails.fp_location !="" && global_search_location_record.placedetails.fp_location != undefined)
        fp_query['fp_g_location'] = this.prepareFPLocationQuery1(global_search_location_record);
        else
        fp_query['fp_g_location'] = this.prepareFPLocationQuery(global_search_location_record);*/

    //fp_query['fp_g_category'] = [];
    //fp_query['fp_g_category'][category_id] = true;
    //fp_query['intent'] = ['category'];
    //fp_query['fp_g_category']['fp_category'] = category_name;
    //fp_query['fp_g_category']['searchType'] = 'category';
    let userInfo = this.globalSharedService.getUserDetails();

    let queryData = this.prepareFiltersAndSorts(1, fp_query, '', 'relevance');

    if (userInfo.is_covid_user && userInfo.covid_filter_enabled) {
      fp_query['fp_g_location']['fp_covid_meter'] = await this.checkCovidImpact(queryData);
      queryData = this.prepareFiltersAndSorts(1, fp_query, '', 'relevance');
    }

    let user_details = this.globalSharedService.getUserDetails();
    if(typeof user_details.prospect_already_searched != 'undefined' && !user_details.prospect_already_searched)
      this.usersService.setFilteredData();

    this.usersService.saveUserQuery(this.utoa(queryData));

    this.router.navigate(["find-prospects"], { queryParams: { q: this.utoa(queryData)} });
  }
  // ucs-2 string to base64 encoded ascii
  utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  checkCovidImpact(fp_query) {
    fp_query = this.removeKeywordScope(fp_query)
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

  removeKeywordScope(fp_query) {
    let searchData = JSON.parse(fp_query);
    if (typeof searchData['_params']['keyword_scope'] != 'undefined' && searchData['_params']['keyword_scope'][0] == 'category') {
      delete searchData['_params']['keyword_scope'];
      delete searchData['_params']['keyword'];
    }
    else delete searchData['_params']['keyword_scope'];
    if (typeof searchData['_params']['keyword'] != 'undefined' && searchData['_params']['keyword'] != '') delete searchData['_params']['keyword'];
    if(typeof searchData != 'undefined' && searchData && typeof searchData['_query'] != 'undefined' && searchData['_query'] && searchData['_query']['$and'] && searchData['_query']['$and'][0]['$and'] && typeof searchData['_query']['$and'][0]['$and'][0]['host_name'] != 'undefined' && searchData['_query']['$and'][0]['$and'][0]['host_name'] != '') {
      if(searchData['_query']['$and'].length == 1) {
        delete searchData['_query']['$and'];
      }
    }

    return JSON.stringify(searchData);
  }

}
