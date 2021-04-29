import { SettingsService } from './../services/settings.service';
import { ProfileService } from './../services/profile.service';
import { DashboardService } from './../services/dashboard.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesQuerySharedService {

  public sessFilters: any = {};
  public selectedSortOption: any = {};
  public selectedSortOrder: any = {};
  public source_values = { 1: false, 2: null, 3: true };
  public element_values = { 1: 0, 2: null, 3: 1 };
  public status_list: any;
  constructor(private dashboardService: DashboardService, private profileService: ProfileService, private settingsService: SettingsService) { }

  prepareFiltersAndSorts(user_data, selectedSortOption = '', selectedSortOrder = '', searchSource = '') {
    try {
      let query = {
        filter_attrs: user_data,
        selectedSortOrder: selectedSortOrder,
        selectedSortOption: selectedSortOption,
        searchSource: searchSource
      };
      return btoa(JSON.stringify(query));
    } catch (ex) {
      return '';
    }

  }

  prepareSearchPhrase(user_data, selectedSortOption = '', selectedSortOrder = '') {

    let filterJson = {};
    let elmentsList = {};

    //On refresh make the user data from session data
    this.sessFilters = user_data;
    this.selectedSortOption = selectedSortOption;
    this.selectedSortOrder = selectedSortOrder;
    // sessFilters = this.user_data;

    let search_phrase = 'Matching profile(s) for ';
    let search_phrase_array = [];
    if (this.sessFilters.business_name != undefined && this.sessFilters.business_name != '') {
      search_phrase_array.push('<i>' + this.sessFilters.business_name + '</i>');
    }

    if ((this.sessFilters.business_url != undefined && this.sessFilters.business_url != '') || (this.sessFilters.website != undefined && this.sessFilters.website != '')) {
      search_phrase_array.push('Website <i>' + this.sessFilters.business_url + '</i>');
    }
    if (this.sessFilters.phone_no != undefined && this.sessFilters.phone_no != '') {
      search_phrase_array.push('Phone <i>' + this.sessFilters.phone_no + '</i>');
    }

    if (this.sessFilters.email != undefined && this.sessFilters.email != '') {
      search_phrase_array.push('Email <i>' + this.sessFilters.email + '</i>');
    }

    if (this.sessFilters.address != undefined && this.sessFilters.address != '') {
      search_phrase_array.push('Near <i>' + this.sessFilters.address + '</i>');
    }
    if (this.sessFilters.city != undefined && this.sessFilters.city != '') {
      search_phrase_array.push('City <i>' + this.sessFilters.city + '</i>');
    }
    if (this.sessFilters.state != undefined && this.sessFilters.state != '') {
      search_phrase_array.push('State <i>' + this.sessFilters.state + '</i>');
    }

    if (this.sessFilters.zip != undefined && this.sessFilters.zip != '') {
      search_phrase_array.push('Zip <i>' + this.sessFilters.zip + '</i>');
    }

    if (this.sessFilters.rmsid != undefined && this.sessFilters.rmsid != '') {
      search_phrase_array.push('RMSID <i>' + this.sessFilters.rmsid + '</i>');
    }
    if (this.sessFilters.elite_dealer_level != undefined && this.sessFilters.elite_dealer_level != '') {
      search_phrase_array.push('Elite Dealer Level <i>' + this.sessFilters.elite_dealer_level + '</i>');
    }
    if (this.sessFilters.brand != undefined && this.sessFilters.brand != '') {
      search_phrase_array.push('Brand <i>' + this.sessFilters.brand + '</i>');
    }

    if (this.sessFilters.critical_score != undefined && this.sessFilters.critical_score != '') {
      var Bscore = this.sessFilters.critical_score;
      var scores = Bscore.split('-');
      if (scores.length > 1) {
        if (parseInt(scores[0]) > parseInt(scores[1])) {
          Bscore = scores[1] + '-' + scores[0];
        }
      }
      search_phrase_array.push('BuzzScore range <i>' + Bscore + '</i>');
    }

    if (this.sessFilters.opportunity != undefined && this.sessFilters.opportunity != '') {
      search_phrase_array.push('Opportunity Range <i>' + this.sessFilters.opportunity + '</i>');
    }
    if (this.sessFilters.fromdate != undefined && this.sessFilters.todate != undefined) {
      search_phrase_array.push('Added between <i>' + this.formatDate(this.sessFilters.fromdate) + "</i> and <i>" + this.formatDate(this.sessFilters.todate) + '</i>');
    }
    if (this.sessFilters.is_hiring_covid_impact_from != undefined && this.sessFilters.is_hiring_covid_impact_to != undefined) {
      search_phrase_array.push('Position From <i>' + this.sessFilters.is_hiring_covid_impact_from + "</i> Position To <i>" + this.sessFilters.is_hiring_covid_impact_to+ '</i>');
    }

    if (this.sessFilters.location_from != undefined && this.sessFilters.location_to != undefined) {
      search_phrase_array.push('Location From <i>' + this.sessFilters.location_from + "</i> Location To <i>" + this.sessFilters.location_to+ '</i>');
    }


    if (this.sessFilters.archive_listing != undefined && this.sessFilters.archive_listing != false && this.sessFilters.archive_listing != null) {

      search_phrase_array.push('<i>Archived</i>');
    }

    if (typeof this.sessFilters.favorites != 'undefined' && this.sessFilters.favorites != false && this.sessFilters.favorites != 2) {
      search_phrase_array.push(((this.sessFilters.favorites == 1) ? '<i>unfavorited</i>' : '<i>favorited</i>'));
    }

    if (this.sessFilters.sf_bb != undefined && this.sessFilters.sf_bb != false && this.sessFilters.sf_bb != 2) {
      search_phrase_array.push('Salesforce <i>' + ((this.sessFilters.sf_bb == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.base_crm_bb != undefined && this.sessFilters.base_crm_bb != false && this.sessFilters.base_crm_bb != 2) {
      search_phrase_array.push('CRM <i>' + ((this.sessFilters.base_crm_bb == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.dp_public != undefined && this.sessFilters.dp_public != false && this.sessFilters.dp_public != 2) {
      search_phrase_array.push('Public <i>' + ((this.sessFilters.dp_public == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.dp_ib != undefined && this.sessFilters.dp_ib != false && this.sessFilters.dp_ib != 2) {
      search_phrase_array.push('InBound <i>' + ((this.sessFilters.dp_ib == 1) ? 'No' : 'Yes') + '</i>');
    }


    if (this.sessFilters.dp_vlc != undefined && this.sessFilters.dp_vlc != false && this.sessFilters.dp_vlc != 2) {
      search_phrase_array.push('VLP <i>' + ((this.sessFilters.dp_vlc == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.category != undefined && this.sessFilters.category != false && this.sessFilters.category != 2) {
      search_phrase_array.push('Category(s) <i>' + ((this.sessFilters.category == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.competition != undefined && this.sessFilters.competition != false && this.sessFilters.competition != 2) {
      search_phrase_array.push('Competition <i>' + ((this.sessFilters.competition == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.note != undefined && this.sessFilters.note != false && this.sessFilters.note != 2) {
      search_phrase_array.push('Notes <i>' + ((this.sessFilters.note == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.shared_profile != undefined && this.sessFilters.shared_profile != false && this.sessFilters.shared_profile != 2) {
      search_phrase_array.push('Profiles shared/sent <i>' + ((this.sessFilters.shared_profile == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.covid_profiles != undefined && this.sessFilters.covid_profiles != false && this.sessFilters.covid_profiles != 2) {
      search_phrase_array.push('Contacts <i>' + ((this.sessFilters.covid_profiles == 1) ? 'No' : 'Yes') + '</i>');
    }
    if (this.sessFilters.contacts != undefined && this.sessFilters.contacts != false && this.sessFilters.contacts != 2) {
      search_phrase_array.push('Contacts <i>' + ((this.sessFilters.contacts == 1) ? 'No' : 'Yes') + '</i>');
    }

    if (this.sessFilters.site_url != undefined && this.sessFilters.site_url != false && this.sessFilters.site_url != 2) {
      search_phrase_array.push('Website URL <i>' + ((this.sessFilters.site_url == 1) ? 'No' : 'Yes') + '</i>');
    }
    if (this.sessFilters.assigned_prospects != undefined && this.sessFilters.assigned_prospects != false && this.sessFilters.assigned_prospects != 2) {
      search_phrase_array.push('Assigned Prospects <i>' + ((this.sessFilters.assigned_prospects == 1) ? 'No' : 'Yes') + '</i>');
    }
    // operational status
    if (this.sessFilters.opr_temp_closed != undefined && this.sessFilters.opr_temp_closed != false && this.sessFilters.opr_temp_closed != 2) {
      search_phrase_array.push('Temporarily Closed <i>' + ((this.sessFilters.opr_temp_closed == 1) ? 'No' : 'Yes') + '</i>');
   }

      if (this.sessFilters.opr_dinein != undefined && this.sessFilters.opr_dinein != false && this.sessFilters.opr_dinein != 2) {
        search_phrase_array.push('Dine-in <i>' + ((this.sessFilters.opr_dinein == 1) ? 'No' : 'Yes') + '</i>');
      }

      if (this.sessFilters.opr_delivery != undefined && this.sessFilters.opr_delivery != false && this.sessFilters.opr_delivery != 2) {
        search_phrase_array.push('Delivery <i>' + ((this.sessFilters.opr_delivery == 1) ? 'No' : 'Yes') + '</i>');
      }

      if (this.sessFilters.opr_takeaway != undefined && this.sessFilters.opr_takeaway != false && this.sessFilters.opr_takeaway != 2) {
        search_phrase_array.push('Take-out <i>' + ((this.sessFilters.opr_takeaway == 1) ? 'No' : 'Yes') + '</i>');
      }

      // operational status
  // sem
  if (this.sessFilters.covid_pay_per_click != undefined && this.sessFilters.covid_pay_per_click != false && this.sessFilters.covid_pay_per_click != 2) {
    search_phrase_array.push('Google Ads <i>' + ((this.sessFilters.covid_pay_per_click == 1) ? 'No' : 'Yes') + '</i>');
  }
  if (this.sessFilters.pay_per_click != undefined && this.sessFilters.pay_per_click != false && this.sessFilters.pay_per_click != 2) {
    search_phrase_array.push('Covid Impacts <i>' + ((this.sessFilters.pay_per_click == 1) ? 'No' : 'Yes') + '</i>');
  }
  if (this.sessFilters.is_covid_technologies != undefined && this.sessFilters.is_covid_technologies != false && this.sessFilters.is_covid_technologies != 2) {
    search_phrase_array.push('Covid Impacts Tech <i>' + ((this.sessFilters.is_covid_technologies == 1) ? 'No' : 'Yes') + '</i>');
  }
  if (this.sessFilters.is_hiring_covid_impact != undefined && this.sessFilters.is_hiring_covid_impact != false && this.sessFilters.is_hiring_covid_impact != 2) {
    search_phrase_array.push('Covid Hiring <i>' + ((this.sessFilters.is_hiring_covid_impact == 1) ? 'No' : 'Yes') + '</i>');
  }
  if (this.sessFilters.hiring != undefined && this.sessFilters.hiring != false && this.sessFilters.hiring != 2) {
    search_phrase_array.push('Hiring <i>' + ((this.sessFilters.hiring == 1) ? 'No' : 'Yes') + '</i>');
  }
  // sem
  // covid meter
  if (this.sessFilters.active_cases != undefined && this.sessFilters.active_cases.length > 0) {
    search_phrase_array.push('Active Cases <i>' + this.sessFilters.active_cases + '</i>');
  }
  // if (this.sessFilters.covid != undefined ) {
  //   search_phrase_array.push('Covid <i>' + this.sessFilters.covid + '</i>');
  // }
  // covid meter

    if (this.sessFilters.status_ids != undefined && this.sessFilters.status_ids.length > 0) {
      let categories_string = '';
      this.profileService.getProspectsStatuses().subscribe(stages => {
        if (stages.data) {
          let status_incrementer = 0;
          this.sessFilters.status_ids.forEach(element => {
            let listinIndex = Object.keys(stages.data).find(k => stages.data[k].id == element);
            if (typeof listinIndex != 'undefined') {
              if (categories_string == '')
                categories_string += 'status(es) in <i>' + stages.data[listinIndex].name + '</i>';
              else
                categories_string += ', <i>' + stages.data[listinIndex].name + '</i>';
              status_incrementer++;
              if (this.sessFilters.status_ids.length == status_incrementer) {
                search_phrase_array.push(categories_string);
              }

            }
          });
        }
      });
    }


    // if (this.sessFilters.element_keys != undefined) { // && this.sessFilters.element_keys.length > 0

    //   let element_search = {};
    //   for (let key in this.sessFilters.element_keys) {
    //     if (this.element_values[this.sessFilters.element_keys[key]] != null) {
    //       element_search[key] = this.element_values[this.sessFilters.element_keys[key]];
    //     }
    //   }
    //   if (JSON.stringify(element_search) != '{}') {
    //     filterJson['element_search'] = element_search;
    //   }
    // }
    // if (this.sessFilters.tag_ids != undefined && this.sessFilters.tag_ids.length > 0) {
    //   filterJson['tag_id'] = this.sessFilters.tag_ids;
    // }

    if (this.sessFilters.category_ids != undefined && this.sessFilters.category_ids.length > 0) {
      let categories_string = '';
      this.dashboardService.get_categories('categories').subscribe(categories => {
        if (categories.data) {
          let category_incrementer = 0;
          this.sessFilters.category_ids.forEach(element => {
            let listinIndex = Object.keys(categories.data).find(k => categories.data[k].id == element);
            if (typeof listinIndex != 'undefined') {
              if (categories_string == '')
                categories_string += 'category(s) in <i>' + categories.data[listinIndex].category_name + '</i>';
              else
                categories_string += ', <i>' + categories.data[listinIndex].category_name + '</i>';
              category_incrementer++;
              if (this.sessFilters.category_ids.length == category_incrementer) {
                search_phrase_array.push(categories_string);
              }

            }
          });
        }
      });
    }
    if (this.sessFilters.propensity_ids != undefined && this.sessFilters.propensity_ids.length > 0) {
      let categories_string = '';
      this.profileService.getProspectsPropencity().subscribe((propencity: any) => {
        if (propencity.data) {
          let propencity_incrementer = 0;
          this.sessFilters.propensity_ids.forEach(element => {
            let listinIndex = Object.keys(propencity.data).find(k => propencity.data[k].id == element);
            if (typeof listinIndex != 'undefined') {
              if (categories_string == '')
                categories_string += 'Propensity(s) in <i>' + propencity.data[listinIndex].name + '</i>';
              else
                categories_string += ', <i>' + propencity.data[listinIndex].name + '</i>';
              propencity_incrementer++;
              if (this.sessFilters.propensity_ids.length == propencity_incrementer) {
                search_phrase_array.push(categories_string);
              }

            }
          });
        }
      });
    }
    if (this.sessFilters.tag_ids != undefined && this.sessFilters.tag_ids.length > 0) {
      let categories_string = '';
      this.profileService.getUserTags().subscribe((tags: any) => {
        if (tags.data) {
          let tags_incrementer = 0;
          this.sessFilters.tag_ids.forEach(element => {
            let listinIndex = Object.keys(tags.data).find(k => tags.data[k].tag_id == element);
            if (typeof listinIndex != 'undefined') {
              if (categories_string == '')
                categories_string += 'Tag(s) in <i>' + tags.data[listinIndex].tag + '</i>';
              else
                categories_string += ', <i>' + tags.data[listinIndex].tag + '</i>';
              tags_incrementer++;
              if (this.sessFilters.tag_ids.length == tags_incrementer) {
                search_phrase_array.push(categories_string);
              }

            }
          });
        }
      });
    }

    if (this.sessFilters.product_ids != undefined && this.sessFilters.product_ids.length > 0) {
      let categories_string = '';
      this.settingsService.getRecommendedProducts().subscribe(products => {
        if (products.data) {
          let products_incrementer = 0;
          this.sessFilters.product_ids.forEach(element => {
            let listinIndex = Object.keys(products.data).find(k => products.data[k].id == element);
            if (typeof listinIndex != 'undefined') {
              if (categories_string == '')
                categories_string += 'Recommended Product(s) in <i>' + products.data[listinIndex].name + '</i>';
              else
                categories_string += ', <i>' + products.data[listinIndex].name + '</i>';
              products_incrementer++;
              if (this.sessFilters.product_ids.length == products_incrementer) {
                search_phrase_array.push(categories_string);
              }

            }
          });
        }
      });
    }
    if (search_phrase_array.length > 0) {
      return search_phrase + search_phrase_array.join(", ");
    } else {
      return '';
    }

  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}
