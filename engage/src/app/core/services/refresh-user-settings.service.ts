import { Injectable } from '@angular/core';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshUserSettingsService {

  constructor(private usersService:UsersService) {}

    /**
     * Checks in every set frequency the version of frontend application
     * @param {number} frequency - in milliseconds, defaults to 30 minutes
     */
    public refreshUserSettingsOnInterval(frequency = 1000 * 60 * 30) {
        setInterval(() => {
            this.refreshUserSettings();
        }, frequency);
    }

    /**
     * Will do the call and check if the hash has changed or not
     * @param url
     */
    private refreshUserSettings() {
        this.usersService.userSettings();
    }
}
