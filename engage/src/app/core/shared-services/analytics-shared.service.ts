import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

import { CommonSharedService } from './common-shared.service';
import { GlobalParams } from '../common/global-params';
import { UsersService } from './../services/users.service';
import { environment } from 'src/environments/environment';

declare var analytics: any;
declare var mixpanel: any;
declare var window: any;
declare var document: any;
declare var screen: any;
declare var $:any;
declare var Appcues:any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsSharedService {
  intercom_user_hash: string;

  constructor(private usersService: UsersService, private globalParams: GlobalParams, private commonSharedService: CommonSharedService, private deviceService: DeviceDetectorService) {
  }

  isTrackable() {
    return (localStorage.getItem('can_track') && localStorage.getItem('can_track') == 'false') ? false : true;
  }
  identify(userID, intercomUserHash) {
    if (this.isTrackable()) {

      this.intercom_user_hash = intercomUserHash;

      let properties = Object.assign({}, this.getCommonProperties(), this.getUserAndInstanceProperties('identify'));

      if((this.hasIntercomUserHash())) {
        analytics.identify(userID, properties, { Intercom: { user_hash: this.intercom_user_hash}});
        $('body').addClass('chat-icon-enabled');
        this.setAppcuesUser(userID, properties);
      } else {
        analytics.identify(userID, properties);
        this.setAppcuesUser(userID, properties);
      }
    }

  }

  track(key, properties: any = {}) {
    if (this.isTrackable()) {
      properties.platform=this.globalParams.signup_source;
      properties = Object.assign({}, properties, this.getCommonProperties(), this.getUserAndInstanceProperties('track'));

      analytics.track(key, properties);
    }
  }

  appcuesTrack(key, properties = {}) {
    if (this.isTrackable()) {
      properties = Object.assign({}, properties, this.getCommonProperties(), this.getUserAndInstanceProperties('track'));
      Appcues.track(key, properties);
    }
  }

  page(page, properties = {}) {
    if (this.isTrackable()) {

      properties = Object.assign({}, properties, this.getCommonProperties(), this.getUserAndInstanceProperties('page'));
      analytics.page(page, properties);
    }
  }

  reset() {
    if (this.isTrackable()) {
      analytics.reset();
      if(mixpanel)
        mixpanel.reset();

      if(this.hasIntercomUserHash()) {
        window.Intercom('shutdown');
      }
    }
  }

  setAppcuesUser(userID, properties) {
    console.log('appcues identify class set');
    console.log(properties);
    Appcues.identify(userID, properties);
  }

  hasIntercomUserHash() {
    if(this.intercom_user_hash != undefined && this.intercom_user_hash != '' && this.intercom_user_hash != null)
      return true;

    return false;
  }

  getCommonProperties() {
    return Object.assign({}, this.getNetworkProperties(), this.getAppProperties(), this.getSourceProperties(), this.getBrowserProperties(), this.getPageProperties(), this.getScreenProprties(), this.getDeviceProperties());
  }

  getUserAndInstanceProperties(purpose) {
    try {
      let user_parameters = localStorage.getItem('user_parameters');
      if (user_parameters != null) {
        let user_response = JSON.parse(atob(user_parameters));
        let properties = {};
        if (purpose == 'identify') {
          user_response.data.forEach(user_element => {
            properties[user_element.label] = user_element.value;
          });
          return properties;
        } else {
          user_response.data.forEach(user_element => {
            let allowed_values = ['user_id', 'email', 'account_type', 'role', 'status', 'flag', 'instance_id', 'instance_signal', 'instance_flag', 'instance_country','parent_id'];
            if (allowed_values.indexOf(user_element.key) != -1) {
              properties[user_element.label] = user_element.value;
            }
          });
          return properties;
        }
      } else {
        return {};
      }
    } catch (ex) {
      return {};
    }
  }

  getAppProperties() {
    let app_properties = [];
    app_properties['App Version'] = this.commonSharedService.getAppVersion();
    app_properties['Platform'] = 'Web';
    app_properties['Webservice Version'] = this.globalParams.webserviceVersion;
    app_properties['Environment'] = (environment.production) ? 'Production' : 'Development';
    return app_properties;
  }

  getSourceProperties() {
    let source_properties = [];
    source_properties['Source'] = 'engage';
    return source_properties;
  }

  getBrowserProperties() {
    let device_info = this.deviceService.getDeviceInfo();
    let browser_properties = [];
    browser_properties['User Agent'] = device_info.userAgent;
    browser_properties['Browser'] = device_info.browser;
    browser_properties['Browser Version'] = device_info.browser_version;
    browser_properties['Browser Window Width'] = window.innerWidth;
    browser_properties['Browser Window Height'] = window.innerHeight;
    // browser_properties['URL'] = window.location.href;
    // browser_properties['Referrer URL'] = document.referrer;
    return browser_properties;
  }

  getPageProperties() {
    let url = window.location.href;
    let i = url.indexOf('#');
    let final_url = (i == -1) ? url : url.slice(0, i);
    let page_properties = [];
    page_properties['Page Path'] = window.location.pathname;
    page_properties['Page Referrer'] = document.referrer;
    page_properties['Page Search'] = location.search;
    page_properties['Page Title'] = document.title;
    page_properties['Page URL'] = final_url;
    return page_properties;
  }

  getScreenProprties() {
    let screen_properties = [];
    screen_properties['Screen Width'] = screen.width;
    screen_properties['Screen Height'] = screen.height;
    screen_properties['Screen Density'] = window.devicePixelRatio;
    return screen_properties;
  }

  getDeviceProperties() {
    let dateObject = new Date();
    let device_info = this.deviceService.getDeviceInfo();
    let device_properties = [];
    device_properties['OS'] = device_info.os;
    device_properties['OS Version'] = device_info.os_version;
    device_properties['Device Name'] = device_info.device;
    device_properties['Device Timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // device_properties['Device Manufacturer'] = '';
    // device_properties['Device Model'] = device_info.device;
    return device_properties;
  }

  getNetworkProperties() {
    let network_properties = [];
    network_properties['Locale'] = navigator.language;
    return network_properties;
  }
}
