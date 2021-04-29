import { Component, Renderer2 } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { UsersService } from './core/services/users.service';
import { CommonSharedService } from './core/shared-services/common-shared.service';
import { RefreshUserSettingsService } from './core/services/refresh-user-settings.service';
import { VersionCheckService } from './core/services/version-check.service';
import { GlobalParams } from './core/common/global-params';

declare var $;
declare var Appcues: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'engage';

  constructor(private renderer: Renderer2, private router: Router, private versionCheckService: VersionCheckService, private globalSharedService: CommonSharedService, private usersService: UsersService, private refreshUserSettings: RefreshUserSettingsService, private globals: GlobalParams) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // $('.overlaySec').removeClass('overlaySec');
        if (typeof Appcues != 'undefined') {
          Appcues.page();
          console.log("appcues sent");
        } else {
          console.log("appcues failed");
        }
      }
    });

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // this.versionCheckService.initVersionCheck('version.json', 1800000);
    this.versionCheckService.initVersionCheck('version.json', (1000 * 60 * 1));
    this.refreshUserSettings.refreshUserSettingsOnInterval(1000 * 60 * 6);
    let user_settings = this.globalSharedService.getUserSettings();
    if (!user_settings['category_source'] || user_settings['category_source'] != 3) {
      this.usersService.userSettings();
    }
    setInterval(() => {
      let token = localStorage.getItem('lt');
      if ((token == '' || token == null) && this.router.url != '/login' && this.router.url != '' && this.router.url != '/agreement') {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = this.globals.bb_site_url + '/logout';
      }
    }, 60000);
    this.addJsToElement('//fast.appcues.com/21520.js').onload = () => {
      console.log('Appcues loaded');
    }
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

  // @HostListener('document:click') onClick() {
  //   let token = localStorage.getItem('lt');
  //   if((token== '' || token == null) && this.router.url!='/login' && this.router.url!='' && this.router.url!='/agreement'){
  //     sessionStorage.clear();
  //     localStorage.clear();
  //     window.location.href = this.globals.baseURL+'/logout';
  //   }
  // }
}
