import { GlobalSearchSharedService } from './../shared-services/global-search-shared.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { EventsList } from '../common/events-list';
import { AnalyticsParams } from '../common/analytics-params';
import { AnalyticsSharedService } from './../shared-services/analytics-shared.service';
import { CommonSharedService } from './../shared-services/common-shared.service';

@Injectable({
  providedIn: 'root',
})
export class VersionCheckService {
  // this will be replaced by actual hash post-build.js
  private currentHash = '{{POST_BUILD_ENTERS_HASH_HERE}}';

  constructor(private eventslist: EventsList, private http: HttpClient, private analyticsSharedService: AnalyticsSharedService, private globalSearchSharedService: GlobalSearchSharedService, private commonSharedService: CommonSharedService, private analyticsparams: AnalyticsParams) { }

  /**
   * Checks in every set frequency the version of frontend application
   * @param url
   * @param {number} frequency - in milliseconds, defaults to 30 minutes
   */
  public initVersionCheck(url, frequency = 1000 * 60 * 30) {
    setInterval(() => {
      this.checkVersion(url);
    }, frequency);
  }

  /**
   * Will do the call and check if the hash has changed or not
   * @param url
   */
  private checkVersion(url) {
    // timestamp these requests to invalidate caches
    this.http.get(url + '?t=' + new Date().getTime()).pipe(first())
      .subscribe(
        (response: any) => {
          if (response) {
            const hash = response.hash;
            const hashChanged = this.hasHashChanged(this.currentHash, hash);

            // If new version, do something
            if (hashChanged) {

              if (response.silent_update) {
                //localStorage.removeItem('recent_locations');
                let user_settings = this.commonSharedService.getUserSettings();
                let user_info = this.commonSharedService.getUserDetails();
                if (!user_settings['category_source'] || user_settings['category_source'] != 3) {
                  this.logout();
                } else {
                  location.reload();
                }
              } else {
                localStorage.removeItem('show_update_available');
                this.globalSearchSharedService.setUpdateAvailable(true);
              }

              // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
              // for an example: location.reload();
            }
            // store the new hash so we wouldn't trigger versionChange again
            // only necessary in case you did not force refresh
            this.currentHash = hash;
          }
        },
        (err) => {
          console.error(err, 'Could not get version');
        }
      );
  }

  /**
   * Checks if hash has changed.
   * This file has the JS hash, if it is a different one than in the version.json
   * we are dealing with version change
   * @param currentHash
   * @param newHash
   * @returns {boolean}
   */
  private hasHashChanged(currentHash, newHash) {
    if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
      return false;
    }

    return currentHash !== newHash;
  }

  logout() {
    //track event start
    let options = {};
    let pageName = this.analyticsparams.pages.logout;
    options = { 'event': this.eventslist.events.logout_clicked.title, 'page_title': pageName.title, 'page_key': pageName.key };
    this.trackEvents(options);
    //end of track event
    // this.analyticsSharedService.reset();
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'https://sales.buzzboard.com/logout';
  }

  trackEvents(options = {}) {
    let event_properties = [];

    event_properties[this.eventslist.event_specific_properties.page] = options['page_title'];
    event_properties[this.eventslist.event_specific_properties.page_key] = options['page_key'];
    if (options['search_keyword'] != undefined && options['search_keyword'] != "")
      event_properties[this.eventslist.event_specific_properties.search_keyword] = options['search_keyword'];
    if (options['function_source'] != undefined && options['function_source'] != "")
      event_properties[this.eventslist.event_specific_properties.function_source] = options['function_source'];


    this.analyticsSharedService.track(options['event'], event_properties);
  }
}
