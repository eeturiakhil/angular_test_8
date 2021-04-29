import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class GlobalParams {

  readonly webserviceVersion = "v1.0";
  readonly expand_by = "false";

  // For Signup Workflow
  // public signup_source = 'local'// Local
  // public signup_source = 'v6' // V6 server
  public signup_source = 'v5' // V5 Live

  // Live
  // readonly baseAPIURL = 'https://beta.buzzboard.com:3000';
  // readonly baseAPIURL = 'https://beta1.buzzboard.com';

  readonly baseAPIURL = 'https://engageapi.buzzboard.com';
  readonly mwBaseURL = "https://mwbeta.buzzboard.com/" + this.webserviceVersion;
  readonly s3PathURL = 'https://buzzboardsales.s3.amazonaws.com';
  readonly bb_site_url = 'https://sales.buzzboard.com';
  // for chargbe bee payment failure
  readonly prospectingAPIURL = 'https://prospectingapi.buzzboard.com/' + this.webserviceVersion;

  // for chargbe bee payment failure
  //For freemium widget
  readonly fwbaseURL = 'https://freemiumwidget.buzzboard.com:6031/' + this.webserviceVersion;
  //For freemium widget
  // For V5
  readonly baseURL = this.bb_site_url + '/v5';
  readonly bs = false;
  readonly platform_type = 'v5';
  readonly default_template_key = 'smbadvisor_template_for_new_signals';
  readonly default_template_key_uk = 'smbadvisor_template_for_live_uk_user';
  readonly filters_product_type = 'smb_adv_global';
  readonly product_env: any = {
    'advisor': '1',
    'streams': '2',
    'prospector': '3',
  };
  readonly platform_type_values: any = {
    'v5': '1',
    'v6': '1',
    'v8': '3',
    'v9': '3',
  };
  public ecommerce_technologies: any = ['51', '52', '72'];
  // For V6
  // readonly baseURL = this.bb_site_url + '/v6';
  //  readonly bs = true;

  // Local
  // readonly baseAPIURL = 'http://localhost:3000';
  // readonly baseURL = 'http://localhost:4200';

  // Staging
  // readonly baseAPIURL = 'https://beta.buzzboard.com:3001';
  // readonly baseURL = 'https://beta.buzzboard.com';

  // readonly mwBaseURL = "http://internalapi.staging.buzzboard.com/" + this.webserviceVersion;
  // readonly s3PathURL = 'https://demobuzzboardsales.s3.amazonaws.com';
  // readonly bb_site_url = 'http://10.0.7.101';

  // readonly baseURL = this.bb_site_url ;

  // readonly mwBaseURL = "https://mwbeta.buzzboard.com/" + this.webserviceVersion;
  // readonly s3PathURL = 'https://demobuzzboardsales.s3.amazonaws.com';
  // readonly bb_site_url = 'https://localhost:4200';

  readonly productID = 1;
  readonly platformID = 1;
  readonly functionalityList = { 'add_profile': 1, 'find_prospect': 2, 'connect': 3, 'curated_lead': 4, 'competition': 5, 'marketing': 6, 'external': 7 };
  readonly deviceType = 3;
  readonly pusher_details = {
    key: '0ae2badffb9b57a34a55',
    user_channel: 'LIVE_PUSHER_CHANNEL_USER_',
    competitor_channel: 'LIVE_PUSHER_CHANNEL_COMPETITION',
    freemium_channel: 'FREEMIUM_VERIFY_INSTALL'
  }
  readonly chargebee_failed = {
    key: '0ae2badffb9b57a34a55',
    loader_channel: 'CHARGEBEE_PAYMENT_FAILED',
  }
  readonly pusher_loader = {
    key: '0ae2badffb9b57a34a55',
    loader_channel: 'ADD_AND_DOWNLOAD',
  }
  readonly pusher_chargeBeedetails = {
    key: '0ae2badffb9b57a34a55',
    user_channel: 'CB_SMBADVISOR_ACTIONS',
    competitor_channel: 'SMBADVISOR_REFRESH'
  }
  readonly default_category_colors = ['#AE159A', '#7515AE', '#159AAE', '#EB8202', '#464646', '#9F74CE', '#3F6EBC', '#EA5568', '#50C298', '#013E6B'];
  readonly top_category_colors = ['#154eae', '#3f6ebc', '#6a8ecb', '#94aeda', '#bfcee8'];
  readonly profiles_per_page_limit = 25;
  readonly saved_search_card_limit = 5;
  readonly add_competitors_fp_limit = 25;
  readonly no_data_found = 'No data available';
  readonly no_fp_data_found = 'Trying to fetch results from External Sources';
  // readonly graph_colors = ['#39b5f1', '#96bd3e', '#eb8202', '#e41f33', '#eeaa0b', '#426f8c', '#9f74ce', '#ea5568', '#a3e59a', '#ce9c63', '#c71525', '#961c7f', '#027b50', '#013e6b'];
  readonly graph_colors = ['#15AE75', '#154EAE', '#AE159A', '#7515AE', '#159AAE', '#426F8C', '#9F74CE', '#EB8202', '#EEAA0B', '#CE9C63', '#3F6EBC', '#EA5568', '#50C298', '#013E6B']; // new colors
  readonly score_colors = ['#d6d6d6', '#c70039', '#ff5733', '#ffc300', '#15ae75', '#0f875a'];
  readonly action_restricted_partners = [2136];
  readonly SnackBarTimeDuration = 5000;
  readonly websiteValidator = "^(?:http(s)?:\/\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\*\\+,;=.]+$";
  readonly location_source = 'google'; //google/fp

  public os_categories = [33000000, 33014000, 33012000, 66000000, 33013000, 33000018, 138000000, 66037001, 33002001, 33000066, 33009000, 138001000, 33001000, 33015000, 33000034, 33007000, 33000011, 33000010, 33000067, 33000103, 85000000, 33000096, 85001000, 33000062, 33000100, 33000002, 33000047, 138001001, 33000014, 307000000, 66022004, 33011002, 33000074, 33000022, 33000105, 59000000, 59002000, 33000125, 33000059, 33000054, 33000026, 33002008, 138002003, 33000069, 33000051, 33000057, 66039000, 66010002, 33000009, 66022005, 33000107, 33000129, 33000025, 33000037, 21000000, 33000101, 33000119, 33000075, 33000027, 66019077, 66022003, 33000028, 21006013, 33000116, 66019000, 33000070, 66019044, 33000092, 33000095, 33000104, 339000000, 339032000, 33000052, 116000014, 33000071, 33000049, 33000081, 138001004, 33000045, 85001007, 33000023, 33000017, 138003000, 33012001, 33000111, 33000079, 33000065, 33002006, 85001009, 33000056, 66012000, 33000041, 85001004];
  public covidCategories = []
  public usNationalMarket = {
    address: "USA",
    country_code: "US",
    description: "USA",
    location_type: "country",
    no_of_searches: 999,
    place_id: "5bd80b231191e",
  }
  public ukNationalMarket = {
    address: "United Kingdom",
    country_code: "UK",
    description: "United Kingdom",
    location_type: "country",
    place_id: "5c3f01c75a52a"
  }
}
