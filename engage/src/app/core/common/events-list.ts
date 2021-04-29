import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class EventsList {

	readonly events = {
		getstarted_clicked:
		{
			"title": "Get Started Clicked"
		},
		may_be_later_clicked:
		{
			"title": "May Be Later Clicked"
		},
		previous_clicked:
		{
			"title": "Previous Clicked"
		},
		next_clicked:
		{
			"title": "Next Clicked"
		},
		skip_this_trip_clicked:
		{
			"title": "Skip This Trip Clicked"
		},
		share_my_location_clicked:
		{
			"title": "Share My Location Clicked"
		},
		user_location_shared:
		{
			"title": "User Location Shared"
		},
		location_picked:
		{
			"title": "Location Picked"
		},
		category_selected:
		{
			"title": "Category Selected"
		},
		category_removed:
		{
			"title": "Category Removed"
		},
		product_selected:
		{
			"title": "Product Selected"
		},
		product_removed:
		{
			"title": "Product Removed"
		},
		add_your_own_product_clicked:
		{
			"title": "Add your own product Clicked"
		},
		custom_product_added:
		{
			"title": "Custom product Added"
		},
		custom_product_removed:
		{
			"title": "Custom product Removed"
		},
		take_me_to_home_clicked:
		{
			"title": "Take Me To Home Clicked"
		},
		preferences_clicked:
		{
			"title": "Preferences Clicked"
		},
		onboarding_halfway_done_button_clicked:
		{
			"title": "Onboarding Halfway Done Button Clicked"
		},
		onboarding_final_done_button_clicked:
		{
			"title": "Onboarding Final Done Button Clicked"
		},
		onboarding_maybelater_button_clicked:
		{
			"title": "Onboarding Maybelater Button Clicked"
		},
		info_icon_clicked:
		{
			"title": "Info Icon Clicked"
		},
		info_more_clicked:
		{
			"title": "Info More Clicked"
		},
		info_less_clicked:
		{
			"title": "Info Less Clicked"
		},
		info_faq_expanded:
		{
			"title": "Info FAQ Expanded"
		},
		info_faq_collapsed:
		{
			"title": "Info FAQ Collapsed"
		},
		info_question_expanded:
		{
			"title": "Info Question Expanded"
		},
		info_question_collapsed:
		{
			"title": "Info Question Collapsed"
		},
		sign_in_clicked:
		{
			"title": "Sign In Clicked"
		},
		organize_clicked:
		{
			"title": "Organize Clicked"
		},
		buzzScore_range_clicked:
		{
			"title": "BuzzScore Range Clicked"
		},
		buzzScore_range_confirmation_yes_clicked:
		{
			"title": "BuzzScore Range Confirmation Yes Clicked"
		},
		buzzScore_range_confirmation_no_clicked:
		{
			"title": "BuzzScore Range Confirmation No Clicked"
		},
		buzzScore_range_confirmation_close_clicked:
		{
			"title": "BuzzScore Range Confirmation Close Clicked"
		},
		confirmation_dont_show_again_selected:
		{
			"title": "Confirmation Don't Show Again Selected"
		},
		confirmation_dont_show_again_unselected:
		{
			"title": "Confirmation Don't Show Again Unselected"
		},
		favorite_signals_profile_count_clicked:
		{
			"title": "Favorite Signals Profile Count Clicked"
		},
		favorite_signals_profile_count_confirmation_yes_clicked:
		{
			"title": "Favorite Signals Profile Count Confirmation Yes Clicked"
		},
		favorite_signals_profile_count_confirmation_no_clicked:
		{
			"title": "Favorite Signals Profile Count Confirmation No Clicked"
		},
		favorite_signals_profile_count_confirmation_close_clicked:
		{
			"title": "Favorite Signals Profile Count Confirmation Close Clicked"
		},
		favorite_signals_more_clicked:
		{
			"title": "Favorite Signals More Clicked"
		},
		prospecting_calender_month_clicked:
		{
			"title": "Prospecting Calender Month Clicked"
		},
		prospecting_calender_more_clicked:
		{
			"title": "Prospecting Calender More Clicked"
		},
		prospecting_calender_get_propects_button_clicked:
		{
			"title": "Prospecting Calender Get Propect(s) Button Clicked"
		},
		prospecting_calender_get_propect_button_confirmation_yes_clicked:
		{
			"title": "Prospecting Calender Get Propect(s) Button Confirmation Yes Clicked"
		},
		prospecting_calender_get_propect_button_confirmation_no_clicked:
		{
			"title": "Prospecting Calender Get Propect(s) Button Confirmation No Clicked"
		},
		prospecting_calender_get_propect_button_confirmation_close_clicked:
		{
			"title": "Prospecting Calender Get Propect(s) Button  Confirmation Close Clicked"
		},
		leads_curated_see_details_clicked:
		{
			"title": "Leads Curated See Details Clicked"
		},
		leads_curated_more_clicked:
		{
			"title": "Leads Curated More Clicked"
		},
		leads_curated_ignore_clicked:
		{
			"title": "Leads Curated Ignore Clicked"
		},
		leads_curated_add_clicked:
		{
			"title": "Leads Curated Add Clicked"
		},
		leads_curated_add_button_confirmation_yes_clicked:
		{
			"title": "Leads Curated Add Button Confirmation Yes Clicked"
		},
		leads_curated_add_button_confirmation_no_clicked:
		{
			"title": "Leads Curated Add Button Confirmation No Clicked"
		},
		leads_curated_view_clicked:
		{
			"title": "Leads Curated View Clicked"
		},
		leads_curated_view_button_confirmation_yes_clicked:
		{
			"title": "Leads Curated View Button Confirmation Yes Clicked"
		},
		leads_curated_view_button_confirmation_no_clicked:
		{
			"title": "Leads Curated View Button Confirmation No Clicked"
		},
		leads_curated_confirmation_close_clicked:
		{
			"title": "Leads Curated Confirmation Close Clicked"
		},
		Leads_curated_after_added_prospect_to_your_account_button_confirmation_yes_clicked:
		{
			"title": "Leads Curated After Added Prospect to Your Account Button Confirmation Yes Clicked"
		},
		Leads_curated_after_added_prospect_to_your_account_button_confirmation_no_clicked:
		{
			"title": "Leads Curated After Added Prospect to Your Account Button Confirmation No Clicked"
		},
		leads_curated_after_added_prospect_to_your_account_confirmation_close:
		{
			"title": "Leads Curated After Added Prospect to Your Account Confirmation Close"
		},
		logout_clicked:
		{
			"title": "Logout Clicked"
		},
		settings_clicked:
		{
			"title": "Settings Clicked"
		},
		search_results_fetch_clicked:
		{
			"title": "Search Results Fetch Clicked"
		},
		clearAll_clicked:
		{
			"title": "ClearAll Clicked"
		},
		clearAll_confirmation_yes_clicked:
		{
			"title": "ClearAll Confirmation Yes Clicked"
		},
		clearAll_confirmation_no_clicked:
		{
			"title": "ClearAll Confirmation No Clicked"
		},
		clearAll_confirmation_continue_clicked:
		{
			"title": "ClearAll Confirmation Continue Clicked"
		},
		clearAll_confirmation_cancel_clicked:
		{
			"title": "ClearAll Confirmation Cancel Clicked"
		},
		clearAll_confirmation_close_clicked:
		{
			"title": "ClearAll Confirmation Close Clicked"
		},
		search_results_add_clicked:
		{
			"title": "Search Results Add Clicked"
		},
		confirmation_button_stayhere_clicked:
		{
			"title": "Confirmation Button Stayhere Clicked"
		},
		confirmation_close_clicked:
		{
			"title": "Confirmation Close Clicked"
		},
		confirmation_button_viewprofile_clicked:
		{
			"title": "Confirmation Button View Profile Clicked"
		},
		search_results_view_clicked:
		{
			"title": "Search Results View Clicked"
		},
		search_results_map_add_clicked:
		{
			"title": "Search Results Map Add Clicked"
		},
		search_results_map_view_clicked:
		{
			"title": "Search Results Map View Clicked"
		},
		map_confirmation_button_stayhere_clicked:
		{
			"title": "Map Confirmation Button Stayhere Clicked"
		},
		map_confirmation_close_clicked:
		{
			"title": "Map Confirmation Close Clicked"
		},
		map_confirmation_button_viewprofile_clicked:
		{
			"title": "Map Confirmation Button View Profile Clicked"
		},
		card_tab_clicked:
		{
			"title": "Card Tab Clicked"
		},
		map_tab_clicked:
		{
			"title": "Map Tab Clicked"
		},
		list_tab_clicked:
		{
			"title": "List Tab Clicked"
		},
		filter_less_clicked:
		{
			"title": "Filter Less Clicked"
		},
		filter_more_clicked:
		{
			"title": "Filter More Clicked"
		},
		filter_section_expanded:
		{
			"title": "Filter Section Expanded"
		},
		filter_section_collpased:
		{
			"title": "Filter Section Collpased"
		},
		radius_picked:
		{
			"title": "Radius Picked"
		},
		remote_business_yes:
		{
			"title": "Prospects_Remote-Only_Yes"
		},
		remote_business_no:
		{
			"title": "Prospects_Remote-Only_No"
		},
		radius_dropdown_clicked:
		{
			"title": "Radius Dropdown Clicked"
		},
		filter_summary_refreshed:
		{
			"title": "Filter Summary Refreshed"
		},
		operator_changed:
		{
			"title": "Operator Changed"
		},
		business_name_focused:
		{
			"title": "Business Name Focused"
		},
		business_url_focused:
		{
			"title": "Business URL Focused"
		},
		business_phone_focused:
		{
			"title": "Business Phone Focused"
		},
		business_city_focused:
		{
			"title": "Business City Focused"
		},
		business_state_focused:
		{
			"title": "Business State Focused"
		},
		business_zipcode_focused:
		{
			"title": "Business Zipcode Focused"
		},
		category_search_bar_focused:
		{
			"title": "Category Search Bar Focused"
		},
		category_select_all_clicked:
		{
			"title": "Category Select All Clicked"
		},
		category_more_clicked:
		{
			"title": "Category More Clicked"
		},
		category_less_clicked:
		{
			"title": "Category Less Clicked"
		},
		category_search_bar_clear_clicked:
		{
			"title": "Category Search Bar Clear Clicked"
		},
		facebook_likes_focused:
		{
			"title": "Facebook Likes Focused"
		},
		twitter_tweets_focused:
		{
			"title": "Twitter Tweets Focused"
		},
		twitter_followers_focused:
		{
			"title": "Twitter Followers Focused"
		},
		google_adwords_budget_focused:
		{
			"title": "Google Adwords Budget Focused"
		},
		google_adwords_traffic_focused:
		{
			"title": "Google Adwords Traffic Focused"
		},
		bing_ads_budget_focused:
		{
			"title": "Bing Ads Budget Focused"
		},
		bing_ads_traffic_focused:
		{
			"title": "Bing Ads Traffic Focused"
		},
		estimated_buzzScore_focused:
		{
			"title": "Estimated BuzzScore Focused"
		},
		emp_is_hiring_covid_impact_from:
		{
			"title": "CV_PROFILE_FILTER_Hiring_Open_Positions_Value_Entered"
		},
		emp_is_hiring_covid_impact_to:
		{
			"title": "CV_PROFILE_FILTER_Hiring_Open_Positions_Value_Entered"
		},
		filter_section_cleared:
		{
			"title": "Filter Section Cleared"
		},
		filter_element_cleared:
		{
			"title": "Filter Element Cleared"
		},
		filter_element_selected:
		{
			"title": "Filter Element Selected"
		},
		firmo_remote:
		{
			"title": "Prospects_Firmographics_Remote-Only"
		},
		filter_all_elements_selected:
		{
			"title": "Filter Element Selected All Clicked"
		},
		filter_opened:
		{
			"title": "Filter Opened"
		},
		filter_closed:
		{
			"title": "Filter Closed"
		},
		sort_by_ascending_order_clicked:
		{
			"title": "Sort By Ascending Order Clicked"
		},
		sort_by_descending_order_clicked:
		{
			"title": "Sort By Descending Order Clicked"
		},
		sort_by_dropdown_selected:
		{
			"title": "Sort By Dropdown Selected"
		},
		card_expand_clicked:
		{
			"title": "Card Expand Clicked"
		},
		card_collapsed_clicked:
		{
			"title": "Card Collapsed Clicked"
		},
		map_icon_clicked:
		{
			"title": "Map Icon Clicked"
		},
		website_clicked:
		{
			"title": "Website Clicked"
		},
		save_button_clicked:
		{
			"title": "Save Button Clicked"
		},
		save_button_popup_continue_clicked:
		{
			"title": "Save Button Popup Continue Clicked"
		},
		save_button_popup_cancel_clicked:
		{
			"title": "Save Button Popup Cancel Clicked"
		},
		save_button_popup_close_clicked:
		{
			"title": "Save Button Popup Close Clicked"
		},
		preview_clicked:
		{
			"title": "Preview Clicked"
		},
		delete_clicked:
		{
			"title": "Delete Clicked"
		},
		delete_confirmation_yes_clicked:
		{
			"title": "Delete Confirmation Yes Clicked"
		},
		delete_confirmation_no_clicked:
		{
			"title": "Delete Confirmation No Clicked"
		},
		delete_confirmation_close_clicked:
		{
			"title": "Delete Confirmation Close Clicked"
		},
		card_selected:
		{
			"title": "Card Selected"
		},
		card_unselected:
		{
			"title": "Card Unselected"
		},
		card_clicked:
		{
			"title": "Card Clicked"
		},
		title_focusedout:
		{
			"title": "Title Focusedout"
		},
		date_focused:
		{
			"title": "Date Focused"
		},
		apply_button_clicked:
		{
			"title": "Apply Button Clicked"
		},
		like_clicked:
		{
			"title": "Like  Clicked"
		},
		dislike_clicked:
		{
			"title": "Dislike Clicked"
		},
		notes_tab_clicked:
		{
			"title": "Notes Tab Clicked"
		},
		context_tab_clicked:
		{
			"title": "Context Tab Clicked"
		},
		add_notes_clicked:
		{
			"title": "Add Notes Clicked"
		},
		add_context_clicked:
		{
			"title": "Add Context Clicked"
		},
		edit_clicked:
		{
			"title": "Edit Clicked"
		},
		done_clicked:
		{
			"title": "Done Clicked"
		},
		cancel_clicked:
		{
			"title": "Cancel Clicked"
		},
		save_clicked:
		{
			"title": "Save Clicked"
		},
		reminder_date_clear_clicked:
		{
			"title": "Reminder Date Clear Clicked"
		},
		reminder_date_set_clicked:
		{
			"title": "Reminder Date Set Clicked"
		},
		reminder_date_cancel_clicked:
		{
			"title": "Reminder Date Cancel Clicked"
		},
		download_attchment_clicked:
		{
			"title": "Download Attchment Clicked"
		},
		after_edit_confirmation_leave_anyway_clicked:
		{
			"title": "After Edit Confirmation Leave Anyway Clicked"
		},
		after_edit_confirmation_save_edits_clicked:
		{
			"title": "After Edit Confirmation Save Edits Clicked"
		},
		after_edit_confirmation_close_clicked:
		{
			"title": "After Edit Confirmation Close Clicked"
		},
		email_tab_clicked:
		{
			"title": "Email Tab Clicked"
		},
		email_log_tab_clicked:
		{
			"title": "Email Log Tab Clicked"
		},
		attachments_selected:
		{
			"title": "Attachments Selected"
		},
		attachments_unselected:
		{
			"title": "Attachments Unselected"
		},
		send_button_clicked:
		{
			"title": "Send Button Clicked"
		},
		additional_info_popup_close_clicked:
		{
			"title": "Additional Information Popup Close Clicked"
		},
		download_report_popup_close_clicked:
		{
			"title": "Download Report Popup Close Clicked"
		},
		download_report_popup_cancel_clicked:
		{
			"title": "Download Report Popup Cancel Clicked"
		},
		download_report_popup_select_all_selected:
		{
			"title": "Download Report Popup Select All Selected"
		},
		download_report_popup_select_all_unselected:
		{
			"title": "Download Report Popup Select All Unselected"
		},
		download_report_popup_button_download_clicked:
		{
			"title": "Download Report Popup Button Download Clicked"
		},
		back_button_clicked:
		{
			"title": "Back Button Clicked"
		},
		my_account_tab_clicked:
		{
			"title": "My Account Tab Clicked"
		},
		my_instance_tab_clicked:
		{
			"title": "My Instance Tab Clicked"
		},
		search_focused:
		{
			"title": "Search Focused"
		},
		search_icon_clicked:
		{
			"title": "Search Icon Clicked"
		},
		user_searched:
		{
			"title": "User Searched"
		},
		card_more_clicked:
		{
			"title": "Card More Clicked"
		},
		card_less_clicked:
		{
			"title": "Card Less Clicked"
		},
		yes_button_clicked:
		{
			"title": "Yes Button Clicked"
		},
		search_text_cleared_clicked:
		{
			"title": "Search Text Cleared Clicked"
		},
		search_text_entered:
		{
			"title": "Search Text Entered"
		},
		quick_links_cleared_clicked:
		{
			"title": "Quick Links Cleared Clicked"
		},
		add_manual_button_clicked:
		{
			"title": "Add Manual Button Clicked"
		},
		see_all_button_clicked:
		{
			"title": "See All Button Clicked"
		},
		help_icon_opened_clicked:
		{
			"title": "Help Icon Opened Clicked"
		},
		help_icon_closed_clicked:
		{
			"title": "Help Icon Closed Clicked"
		},
		raise_a_ticket_clicked:
		{
			"title": "Raise a Ticket Clicked"
		},
		ticket_history_clicked:
		{
			"title": "Ticket History Clicked"
		},
		closed_icon_clicked:
		{
			"title": "Closed Icon Clicked"
		},
		details_popup_open_clicked:
		{
			"title": "Details Popup Open Clicked"
		},
		details_popup_closed_clicked:
		{
			"title": "Details Popup Closed Clicked"
		},
		upload_file_clear_clicked:
		{
			"title": "Upload File Clear Clicked"
		},
		info_close_clicked:
		{
			"title": "Info Close Clicked"
		},
		marketing_promotion_selected:
		{
			"title": "Marketing Promotion Selected"
		},
		marketing_promotion_unselected:
		{
			"title": "Marketing Promotion Unselected"
		},
		license_agree_button_clicked:
		{
			"title": "License Agree Button Clicked"
		},
		license_disagree_button_clicked:
		{
			"title": "License Disagree Button Clicked"
		},
		license_confirmation_yes_clicked:
		{
			"title": "License Confirmation Yes Clicked"
		},
		license_confirmation_no_clicked:
		{
			"title": "License Confirmation No Clicked"
		},
		clear_clicked:
		{
			"title": "Clear Clicked"
		},
		customize_profile_clicked:
		{
			"title": "Customize Profile Clicked"
		},
		checkbox_selected:
		{
			"title": "Checkbox Selected"
		},
		checkbox_unselected:
		{
			"title": "Checkbox Unselected"
		},
		confirmation_yes_clicked:
		{
			"title": "Confirmation Yes Clicked"
		},
		confirmation_no_clicked:
		{
			"title": "Confirmation No Clicked"
		},
		view_details_info_clicked:
		{
			"title": "View Details Info Clicked"
		},
		selected_tab_change:
		{
			"title": "Selected Tab Change"
		},
		instance_option_change:
		{
			"title": "Instance Option Change"
		},
		hide_details_clicked:
		{
			"title": "Hide Details Clicked"
		},
		show_details_clicked:
		{
			"title": "Show Details Clicked"
		},
		ad_metrics_clicked:
		{
			"title": "Ad Metrics Clicked"
		},
		customize_clicked:
		{
			"title": "Customize Clicked"
		},
		customize_close_clicked:
		{
			"title": "Customize Close Clicked"
		},
		left_menu_clicked:
		{
			"title": "Left Menu Clicked"
		},
		prospect_search_menu_clicked:
		{
			"title": "SMBAdvisor_Main Navigation_Prospect_Menu_Click"
		},
		assign_profiles_popup_cancel_clicked:
		{
			"title": "Assign Profiles Popup Cancel Clicked"
		},
		assign_profiles_popup_continue_clicked:
		{
			"title": "Assign Profiles Popup Continue Clicked"
		},
		notify_assign_email_selected:
		{
			"title": "Notify Assign Email  Selected"
		},
		assign_profiles_popup_assign_clicked:
		{
			"title": "Assign Profiles Popup Assign Clicked"
		},
		company_choosed:
		{
			"title": "Company Choosed"
		},
		export_csv_clicked:
		{
			"title": "Export CSV Clicked"
		},
		export_data_selected:
		{
			"title": "Export Option Selected"
		},
		export_csv_submit_clicked:
		{
			"title": "Export CSV Submit Clicked"
		},
		export_csv_cancel_clicked:
		{
			"title": "Export CSV Cancel Clicked"
		},
		export_csv_close_clicked:
		{
			"title": "Export CSV Close Clicked"
		},
		city_search_clicked:
		{
			"title": "City Search Clicked"
		},
		add_competitor_popup_closed_clicked:
		{
			"title": "Add Competitor Popup Closed Clicked"
		},
		add_manual_submit_clicked:
		{
			"title": "Add Manual Submit Clicked"
		},
		selected_list_submit_clicked:
		{
			"title": "Selected List Submit Clicked"
		},
		regenerate_clicked:
		{
			"title": "Regenerate Clicked"
		},
		regenerate_confirmation_yes_clicked:
		{
			"title": "Regenerate Confirmation Yes Clicked"
		},
		regenerate_confirmation_no_clicked:
		{
			"title": "Regenerate Confirmation No Clicked"
		},
		regenerate_confirmation_close_clicked:
		{
			"title": "Regenerate Confirmation Close Clicked"
		},
		convert_to_profile_clicked:
		{
			"title": "Convert to Profile Clicked"
		},
		reset_clicked:
		{
			"title": "Reset Clicked"
		},
		submit_button_clicked:
		{
			"title": "Submit Button Clicked"
		},
		signals_expand_clicked:
		{
			"title": "Signals Expand Clicked"
		},
		signals_collapsed_clicked:
		{
			"title": "Signals Collapsed Clicked"
		},
		expand_search_clicked:
		{
			"title": "Expand Search Clicked"
		},
		expand_search_continue_clicked:
		{
			"title": "Expand Search Continue Clicked"
		},
		expand_search_cancel_clicked:
		{
			"title": "Expand Search Cancel Clicked"
		},
		use_external_source_button_clicked:
		{
			"title": "Use External Source Button Clicked"
		},
		auto_competitor_edit_profile_clicked:
		{
			"title": "Auto Competitor Edit Profile Clicked"
		},
		feature_focus_popup_relogin_clicked:
		{
			"title": "Feature Focus Popup Relogin Clicked"
		},
		feature_focus_popup_clickhere_clicked:
		{
			"title": "Feature Focus Popup Clickhere Clicked"
		},
		feature_focus_popup_close_clicked:
		{
			"title": "Feature Focus Popup Close Clicked"
		},
		feature_focus_popup_ok_clicked:
		{
			"title": "Feature Focus Popup Ok Clicked"
		},
		download_report_popup_less_selected:
		{
			"title": "Download Report Popup Less Selected"
		},
		download_report_popup_more_selected:
		{
			"title": "Download Report Popup More Selected"
		},
		clicked_on_purchase:
		{
			"title": "Package Selection purchase button clicked"
		},
		clicked_on_purchase_yes_clicked:
		{
			"title": "Package Selection purchase Button Confirmation Yes Clicked"
		},
		clicked_on_purchase_no_clicked:
		{
			"title": "Package Selection purchase Button Confirmation No Clicked"
		},


		// Added by Akhil Kumar E (3227) on 07-06-2019 for Buzzboard Signup Process
		switch_icon_clicked: {
			"title": "Switch icon clicked"
		},
		billing_link_clicked: {
			"title": "Billing link clicked"
		},
		billing_button_clicked: {
			"title": "Billing button clicked"
		},
		add_licenses_button_clicked: {
			"title": "Add Users button clicked"
		},
		add_licenses_back_button_clicked: {
			"title": "Add Users button clicked"
		},
		upgrade_clicked: {
			"title": "Upgrade Button clicked"
		},
		change_plan_clicked: {
			"title": "Change Plan Button clicked"
		},
		user_management_clicked:
		{
			"title": "User Management Clicked"
		},
		change_card_clcked: {
			"title": "Change Credit Card Clicked"
		},
		add_card_clcked: {
			"title": "Add Credit Card Clicked"
		},
		cancel_plan_clcked: {
			"title": "Cancel Plan Clicked"
		},
		download_invoice_clcked: {
			"title": "Download Invoice Clicked"
		},
		assign_profiles_owf_popup_ok_clicked:
		{
			"title": "OWF Assign Profiles Popup OK Clicked"
		},

		billing_tab_clicked: {
			"title": "Billing Tab clicked"
		},

		stream_apitoken_tab: {
			"title": "Stream Api Token Tab Clicked"
		},
		stream_dashboard_tab: {
			"title": "Stream Dashboard Tab Clicked"
		},
		stream_billing_tab: {
			"title": "Stream Billing Tab Clicked"
		},
		add_profile_clicked: {
			"title": "Add Profile Clicked"
		},
		trending_search_click:
		{
			"title": "Trending Search Click"
		},
		click_here_clicked: {
			"title": "Click Here Clicked"
		},
		auto_update_button_clicked:
		{
			"title": "Auto Update Button clicked"
		},
		notify_me_once_button_clicked:
		{
			"title": "Notify Me Once Button clicked"
		},
		chome_got_it_clicked:
		{
			"title": "Chome Got It Clicked"
		},
		more_button_clicked:
		{
			"title": "More Button Clicked"
		},
		less_button_clicked:
		{
			"title": "Less Button Clicked"
		},
		do_not_show_this_message_for_this_search_selected:
		{
			"title": "Do Not show This Message For This Search Selected"
		},
		do_not_show_this_message_for_this_search_unselected:
		{
			"title": "Do Not show This Message For This Search Unselected"
		},
		onboarding_ok_button_clicked:
		{
			"title": "Onboarding Ok Button Clicked"
		},
		covid_info_clicked: {
			"title": "COVID-19 Info Icon Clicked"
		},
		CV_RECOMMENDATION_CARD_Location_Change: {
			"title": "CV_RECOMMENDATION_CARD_Location_Change"
		},
		CV_RECOMMENDATION_CARD_GoogleAds_Preview_Now:
		{
			"title": "CV_RECOMMENDATION_CARD_GoogleAds_Preview_Now"
		},
		CV_RECOMMENDATION_CARD_Tech_Preview_Now:
		{
			"title": "CV_RECOMMENDATION_CARD_Tech_Preview_Now"
		},
		CV_RECOMMENDATION_CARD_Find:
		{
			"title": "CV_RECOMMENDATION_CARD_Find"
		},
		ACADEMY_CARD_CV_Videos_Click_here:
		{
			"title": "ACADEMY_CARD_CV_Videos_Click_here"
		},
		ACADEMY_CARD_CV_Cheat_Sheet:
		{
			"title": "ACADEMY_CARD_CV_Cheat_Sheet"
		},
		CV_HOMEPAGE_POPUP_BLOCKER_Video_Thumbnail:
		{
			"title": "CV_HOMEPAGE_POPUP_BLOCKER_Video_Thumbnail"
		},
		CV_HOMEPAGE_POPUP_BLOCKER_Cross_Icon_Click:
		{
			"title": "CV_HOMEPAGE_POPUP_BLOCKER_Cross_Icon_Click"
		},
		CV_CATEGORY_CARD_Location_Change:
		{
			"title": "CV_CATEGORY_CARD_Location_Change"
		},
		CV_CATEGORY_CARD_Prospect_Now:
		{
			"title": "CV_CATEGORY_CARD_Prospect_Now"
		},
		CV_CATEGORY_CARD_More_Click:
		{
			"title": "CV_CATEGORY_CARD_More_Click"
		},
		CV_CATEGORY_CARD_More_Location_Change:
		{
			"title": "CV_CATEGORY_CARD_More_Location_Change"
		},
		CV_CATEGORY_CARD_Search:
		{
			"title": "CV_CATEGORY_CARD_Search"
		},
		CV_CATEGORY_CARD_SearchAll:
		{
			"title": "CV_CATEGORY_CARD_SearchAll"
		},
		CV_CATEGORY_CARD_ClearAll:
		{
			"title": "CV_CATEGORY_CARD_ClearAll"
		},
		CV_CATEGORY_CARD_Category_Selection_Check_box:
		{
			"title": "CV_CATEGORY_CARD_Category_Selection_Check_box"
		},
		CV_CATEGORY_CARD_More_Prospect_Now:
		{
			"title": "CV_CATEGORY_CARD_More_Prospect_Now"
		},
		CV_PROFILE_FILTER_MainToggle_Yes: {
			"title": "CV_PROFILE_FILTER_MainToggle_Yes"
		},
		CV_PROFILE_FILTER_MainToggle_No: {
			"title": "CV_PROFILE_FILTER_MainToggle_No"
		},
		CV_PROFILE_FILTER_Info_Icon: {
			"title": "CV_PROFILE_FILTER_Info_Icon"
		},
		CV_PROFILE_FILTER_SEM_Covid_toggle_Yes: {
			"title": "CV_PROFILE_FILTER_SEM_Covid_Toggle_Yes"
		},
		CV_PROFILE_FILTER_SEM_Covid_toggle_No: {
			"title": "CV_PROFILE_FILTER_SEM_Covid_Toggle_No"
		},
		CV_PROFILE_FILTER_SEM_Google_Ads_No: {
			"title": "CV_PROFILE_FILTER_SEM_Google_Ads_No"
		},
		CV_PROFILE_FILTER_SEM_Google_Ads_Yes: {
			"title": "CV_PROFILE_FILTER_SEM_Google_Ads_Yes"
		},
		CV_PROFILE_FILTER_SEM_info: {
			"title": "CV_PROFILE_FILTER_SEM_Info"
		},
		CV_PROFILE_FILTER_Hiring_info: {
			"title": "CV_PROFILE_FILTER_Hiring_Info"
		},
		CV_PROFILE_FILTER_Location_Info: {
			"title": "CV_PROFILE_FILTER_Location_Info"
		},
		CV_PROFILE_FILTER_Categories_Info: {
			"title": "CV_PROFILE_FILTER_Categories_Info"
		}
		,
		CV_PROFILE_FILTER_Operational_Status_info: {
			"title": "CV_PROFILE_FILTER_Operational_Status_info"
		},
		CV_PROFILE_FILTER_Technologies_Info: {
			"title": "CV_PROFILE_FILTER_Technologies_Info"
		},
		CV_PROFILE_FILTER_Hiring_Yes: {
			"title": "CV_PROFILE_FILTER_Hiring_Yes"
		},
		CV_PROFILE_FILTER_Hiring_No: {
			"title": "CV_PROFILE_FILTER_Hiring_No"
		},
		CV_PROFILE_FILTER_Operational_Status_temp_closed_Yes: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Temporarily_Closed_Yes"
		},
		CV_PROFILE_FILTER_Operational_Status_temp_closed_No: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Temporarily_Closed_No"
		},
		CV_PROFILE_FILTER_Operational_Status_dine_in_Yes: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Dine-in_Yes"
		},
		CV_PROFILE_FILTER_Operational_Status_dine_in_No: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Dine-in_No"
		},
		CV_PROFILE_FILTER_Operational_Status_delivery_Yes: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Delivery_Yes"
		},
		CV_PROFILE_FILTER_Operational_Status_delivery_No: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Delivery_No"
		},
		CV_PROFILE_FILTER_Operational_Status_take_out_Yes: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Take-out_Yes"
		},
		CV_PROFILE_FILTER_Operational_Status_take_out_No: {
			"title": "CV_PROFILE_FILTER_Operational_Status_Take-out_No"
		},
		CV_PROFILE_FILTER_Technologies_Covid_Toggle_Yes: {
			"title": "CV_PROFILE_FILTER_Technologies_Covid_Toggle_Yes"
		},
		CV_PROFILE_FILTER_Technologies_Covid_Toggle_No: {
			"title": "CV_PROFILE_FILTER_Technologies_Covid_Toggle_No"
		},
		CV_PROFILE_FILTER_location_LMMe: {
			"title": "CV_PROFILE_FILTER_location_LMMe"
		}
		,
		CV_PROFILE_FILTER_location_LMMeMa: {
			"title": "CV_PROFILE_FILTER_location_LMMeMa"
		},
		CV_PROFILE_FILTER_location_LM: {
			"title": "CV_PROFILE_FILTER_location_LM"
		},
		CV_PROFILE_FILTER_location_MMe: {
			"title": "CV_PROFILE_FILTER_location_MMe"
		},
		CV_PROFILE_FILTER_location_MMeMa: {
			"title": "CV_PROFILE_FILTER_location_MMeMa"
		},
		CV_PROFILE_FILTER_location_MeMa: {
			"title": "CV_PROFILE_FILTER_location_MeMa"
		},
		CV_PROFILE_FILTER_location_Least: {
			"title": "CV_PROFILE_FILTER_location_Least"
		},
		CV_PROFILE_FILTER_location_Minor: {
			"title": "CV_PROFILE_FILTER_location_Minor"
		},
		CV_PROFILE_FILTER_location_Medium: {
			"title": "CV_PROFILE_FILTER_location_Medium"
		},
		CV_PROFILE_FILTER_location_Major: {
			"title": "CV_PROFILE_FILTER_location_Major"
		},
		CV_PROFILE_FILTER_Find_Clicked: {
			"title": "CV_PROFILE_FILTER_Find_Clicked"
		},
		CV_PROFILE_FILTER_Technologies_Search_Box: {
			"title": "CV_PROFILE_FILTER_Technologies_Search_Box"
		},
		CV_PROFILE_FILTER_Technologies_Advanced: {
			"title": "CV_PROFILE_FILTER_Technologies_Advanced"
		},
		CV_PROFILE_FILTER_Technologies_Groups_Yes: {
			"title": "CV_PROFILE_FILTER_Technologies_Groups_Yes"
		},
		CV_PROFILE_FILTER_Technologies_Groups_No: {
			"title": "CV_PROFILE_FILTER_Technologies_Groups_No"
		},
		CV_PROFILE_FILTER_Technologies_Selection_From_Dropdown: {
			"title": "CV_PROFILE_FILTER_Technologies_Selection_From_Dropdown"
		},
		CV_PROFILE_FILTER_Technologies_Deselection_From_Dropdown: {
			"title": "CV_PROFILE_FILTER_Technologies_Deselection_From_Dropdown"
		},
		CV_PROFILE_FILTER_Categories_Growing: {
			"title": "CV_PROFILE_FILTER_Categories_Growing"
		},
		CV_PROFILE_FILTER_Categories_Declining: {
			"title": "CV_PROFILE_FILTER_Categories_Declining"
		},
		CV_PROFILE_FILTER_Categories_Others: {
			"title": "CV_PROFILE_FILTER_Categories_Others"
		},
		CV_PROFILE_FILTER_Categories_Individual_Selected: {
			"title": "CV_PROFILE_FILTER_Categories_Individual_Selected"
		},
		CV_PROFILE_FILTER_Categories_Individual_Deselected: {
			"title": "CV_PROFILE_FILTER_Categories_Individual_Deselected"
		},
		CV_PROFILE_FILTER_Categories_Search: {
			"title": "CV_PROFILE_FILTER_Categories_Search"
		},//viswa added new events for covid

		CV_SEARCH_FILTER_MainToggle_Yes: {
			"title": "CV_SEARCH_FILTER_MainToggle_Yes"
		},
		CV_SEARCH_FILTER_MainToggle_No: {
			"title": "CV_SEARCH_FILTER_MainToggle_No"
		},
		CV_SEARCH_FILTER_MainToggle_Info: {
			"title": "CV_SEARCH_FILTER_MainToggle_Info"
		},
		CV_SEARCH_FILTER_location_LMMeMa: {
			"title": "CV_SEARCH_FILTER_location_LMMeMa"
		},
		CV_SEARCH_FILTER_location_LMMe: {
			"title": "CV_SEARCH_FILTER_location_LMMe"
		},
		CV_SEARCH_FILTER_location_LM: {
			"title": "CV_SEARCH_FILTER_location_LM"
		},
		CV_SEARCH_FILTER_location_MMe: {
			"title": "CV_SEARCH_FILTER_location_MMe"
		},
		CV_SEARCH_FILTER_location_MMeMa: {
			"title": "CV_SEARCH_FILTER_location_MMeMa"
		},
		CV_SEARCH_FILTER_location_MeMa: {
			"title": "CV_SEARCH_FILTER_location_MeMa"
		},
		CV_SEARCH_FILTER_location_Least: {
			"title": "CV_SEARCH_FILTER_location_Least"
		},
		CV_SEARCH_FILTER_location_Minor: {
			"title": "CV_SEARCH_FILTER_location_Minor"
		},
		CV_SEARCH_FILTER_location_Medium: {
			"title": "CV_SEARCH_FILTER_location_Medium"
		},
		CV_SEARCH_FILTER_location_Major: {
			"title": "CV_SEARCH_FILTER_location_Major"
		},
		CV_SEARCH_FILTER_Location_Info: {
			"title": "CV_SEARCH_FILTER_Location_Info"
		},
		Filter_Categories_B2B: {
			"title": "Filter_Categories_B2B"
		},
		Filter_Categories_B2C: {
			"title": "Filter_Categories_B2C"
		},
		Filter_Categories_All: {
			"title": "Filter_Categories_All"
		},
		CV_SEARCH_FILTER_Categories_Individual_Selection: {
			"title": "CV_SEARCH_FILTER_Categories_Individual_Selection"
		},
		CV_SEARCH_FILTER_Categories_Individual_Deselection: {
			"title": "CV_SEARCH_FILTER_Categories_Individual_Deselection"
		},
		CV_SEARCH_FILTER_Categories_Growing: {
			"title": "CV_SEARCH_FILTER_Categories_Growing"
		},
		CV_SEARCH_FILTER_Categories_Declining: {
			"title": "CV_SEARCH_FILTER_Categories_Declining"
		},
		CV_SEARCH_FILTER_Categories_Others: {
			"title": "CV_SEARCH_FILTER_Categories_Others"
		},
		CV_SEARCH_FILTER_Categories_Select_All: {
			"title": "CV_SEARCH_FILTER_Categories_Select_All"
		},
		CV_SEARCH_FILTER_Categories_Clear_All: {
			"title": "CV_SEARCH_FILTER_Categories_Clear_All"
		},
		CV_SEARCH_FILTER_Categories_Info: {
			"title": "CV_SEARCH_FILTER_Categories_Info"
		},
		CV_SEARCH_FILTER_Category_Selection_Box_Individual_Selection: {
			"title": "CV_SEARCH_FILTER_Category_Selection_Box_Individual_Selection"
		},
		CV_SEARCH_FILTER_Category_Selection_Box_Individual_Deselection: {
			"title": "CV_SEARCH_FILTER_Category_Selection_Box_Individual_Deselection"
		},
		CV_SEARCH_FILTER_Category_Selection_Box_Search_Box: {
			"title": "CV_SEARCH_FILTER_Category_Selection_Box_Search_Box"
		},
		CV_SEARCH_FILTER_Category_Selection_Box_Select_All: {
			"title": "CV_SEARCH_FILTER_Category_Selection_Box_Select_All"
		},
		CV_SEARCH_FILTER_Category_Selection_Box_Clear_All: {
			"title": "CV_SEARCH_FILTER_Category_Selection_Box_Clear_All"
		},
		CV_SEARCH_FILTER_Category_Selection_Box_Info: {
			"title": "CV_SEARCH_FILTER_Category_Selection_Box_Info"
		},
		CV_SEARCH_FILTER_Operational_Status_AND: {
			"title": "CV_SEARCH_FILTER_Operational_Status_AND"
		},
		CV_SEARCH_FILTER_Operational_Status_OR: {
			"title": "CV_SEARCH_FILTER_Operational_Status_OR"
		},
		CV_SEARCH_FILTER_Operational_Status_Temporarily_Closed_Yes: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Temporarily_Closed_Yes"
		},
		CV_SEARCH_FILTER_Operational_Status_Temporarily_Closed_No: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Temporarily_Closed_No"
		}
		,
		CV_SEARCH_FILTER_Operational_Status_Dine_in_Yes: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Dine_in_Yes"
		}
		,
		CV_SEARCH_FILTER_Operational_Status_Dine_in_No: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Dine_in_No"
		},
		CV_SEARCH_FILTER_Operational_Status_Delivery_Yes: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Delivery_Yes"
		},
		CV_SEARCH_FILTER_Operational_Status_Delivery_No: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Delivery_No"
		},
		CV_SEARCH_FILTER_Operational_Status_Take_out_Yes: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Take_out_Yes"
		}, CV_SEARCH_FILTER_Operational_Status_Take_out_No: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Take_out_No"
		},
		CV_SEARCH_FILTER_Operational_Status_Info: {
			"title": "CV_SEARCH_FILTER_Operational_Status_Info"
		},
		CV_SEARCH_FILTER_Technologies_Covid_Toggle_Yes: {
			"title": "CV_SEARCH_FILTER_Technologies_Covid_Toggle_Yes"
		},
		CV_SEARCH_FILTER_Technologies_Covid_Toggle_No: {
			"title": "CV_SEARCH_FILTER_Technologies_Covid_Toggle_No"
		},
		CV_SEARCH_FILTER_Technologies_Search_Box: {
			"title": "CV_SEARCH_FILTER_Technologies_Search_Box"
		},
		CV_SEARCH_FILTER_Technologies_Selection_From_Dropdown: {
			"title": "CV_SEARCH_FILTER_Technologies_Selection_From_Dropdown"
		},
		CV_SEARCH_FILTER_Technologies_Deselection_From_Dropdown: {
			"title": "CV_SEARCH_FILTER_Technologies_Deselection_From_Dropdown"
		},
		CV_SEARCH_FILTER_Technologies_Advanced: {
			"title": "CV_SEARCH_FILTER_Technologies_Advanced"
		},
		CV_SEARCH_FILTER_Technologies_Groups_Yes: {
			"title": "CV_SEARCH_FILTER_Technologies_Groups_Yes"
		}
		, CV_SEARCH_FILTER_Technologies_Groups_No: {
			"title": "CV_SEARCH_FILTER_Technologies_Groups_No"
		},
		CV_SEARCH_FILTER_Technologies_Info: {
			"title": "CV_SEARCH_FILTER_Technologies_Info"
		},
		CV_SEARCH_FILTER_SEM_Info: {
			"title": "CV_SEARCH_FILTER_SEM_Info"
		},
		CV_SEARCH_FILTER_SEM_AND: {
			"title": "CV_SEARCH_FILTER_SEM_AND"
		},
		CV_SEARCH_FILTER_SEM_OR: {
			"title": "CV_SEARCH_FILTER_SEM_OR"
		},
		CV_SEARCH_FILTER_SEM_Covid_Toggle_Yes: {
			"title": "CV_SEARCH_FILTER_SEM_Covid_Toggle_Yes"
		},
		CV_SEARCH_FILTER_SEM_Covid_Toggle_No: {
			"title": "CV_SEARCH_FILTER_SEM_Covid_Toggle_No"
		},
		CV_SEARCH_FILTER_SEM_Google_Ads_Yes: {
			"title": "CV_SEARCH_FILTER_SEM_Google_Ads_Yes"
		},
		CV_SEARCH_FILTER_SEM_Google_Ads_No: {
			"title": "CV_SEARCH_FILTER_SEM_Google_Ads_No"
		},
		CV_SEARCH_FILTER_SEM_Budget_From: {
			"title": "CV_SEARCH_FILTER_SEM_Budget_From"
		},
		CV_SEARCH_FILTER_SEM_Budget_To: {
			"title": "CV_SEARCH_FILTER_SEM_Budget_To"
		},
		CV_SEARCH_FILTER_SEM_Traffic_From: {
			"title": "CV_SEARCH_FILTER_SEM_Traffic_From"
		},
		CV_SEARCH_FILTER_SEM_Traffic_To :{
			"title":"CV_SEARCH_FILTER_SEM_Traffic_To"
		},
		CV_SEARCH_FILTER_Find_Click :{
			"title":"CV_SEARCH_FILTER_Find_Click"
		},
		SEARCH_FILTER_Adsection_Click:{
			"title":"SEARCH_FILTER_Adsection_Click"
		},
		SEARCH_FILTER_FBAds_Toggle_Yes:{
           "title":"SEARCH_FILTER_FBAds_Toggle_Yes"
		},
		SEARCH_FILTER_FBAds_Toggle_NO:{
           "title":"SEARCH_FILTER_FBAds_Toggle_NO"
		},

		SEARCH_FILTER_Contacts_Toggle_Yes: {
			title: 'SEARCH_FILTER_Contacts_Toggle_Yes'
		},
		SEARCH_FILTER_Contacts_Linkeldin_Toggle_Yes: {
			title: 'SEARCH_FILTER_Contacts_Linkeldin_Toggle_Yes'
		},
		SEARCH_FILTER_Contacts_Email_Address_Toggle_Yes: {
			title: 'SEARCH_FILTER_Contacts_Email Address_Toggle_Yes'
		},
		SEARCH_FILTER_Contacts_Role_C_Level_Check: {
			title: 'SEARCH_FILTER_Contacts_Role_C-Level_Check'
		},
		SEARCH_FILTER_Contacts_Role_C_Level_Uncheck: {
			title: 'SEARCH_FILTER_Contacts_Role_C-Level_Uncheck'
		},
		SEARCH_FILTER_Contacts_Role_VP_Check: {
			title: 'SEARCH_FILTER_Contacts_Role_VP_Check'
		},
		SEARCH_FILTER_Contacts_Role_VP_Uncheck: {
			title: 'SEARCH_FILTER_Contacts_Role_VP_Uncheck'
		},
		SEARCH_FILTER_Contacts_Role_Director_Check: {
			title: 'SEARCH_FILTER_Contacts_Role_Director_Check'
		},
		SEARCH_FILTER_Contacts_Role_Director_Uncheck: {
			title: 'SEARCH_FILTER_Contacts_Role_Director_Uncheck'
		},
		SEARCH_FILTER_Contacts_Role_Manager_Check: {
			title: 'SEARCH_FILTER_Contacts_Role_Manager_Check'
		},
		SEARCH_FILTER_Contacts_Role_Manager_Uncheck: {
			title: 'SEARCH_FILTER_Contacts_Role_Manager_Uncheck'
		},
		SEARCH_FILTER_Contacts_Role_Owner_Co_owner_Check: {
			title: 'SEARCH_FILTER_Contacts_Role_Owner/Co-owner_Check'
		},
		SEARCH_FILTER_Contacts_Role_Owner_Co_owner_Uncheck: {
			title: 'SEARCH_FILTER_Contacts_Role_Owner/Co-owner_Uncheck'
		},
		SEARCH_FILTER_Contacts_AND: {
			title: 'SEARCH_FILTER_Contacts_AND'
		},
		SEARCH_FILTER_Contacts_OR: {
			title: 'SEARCH_FILTER_Contacts_OR'
		},

		PROFILE_FILTER_Contacts_Toggle_Yes: {
			title: 'PROFILE_FILTER_Contacts_Toggle_Yes'
		},
		PROFILE_FILTER_Contacts_Linkeldin_Toggle_Yes: {
			title: 'PROFILE_FILTER_Contacts_Linkeldin_Toggle_Yes'
		},
		PROFILE_FILTER_Contacts_Email_Address_Toggle_Yes: {
			title: 'PROFILE_FILTER_Contacts_Email Address_Toggle_Yes'
		},
		PROFILE_FILTER_Contacts_Role_C_Level_Check: {
			title: 'PROFILE_FILTER_Contacts_Role_C-Level_Check'
		},
		PROFILE_FILTER_Contacts_Role_C_Level_Uncheck: {
			title: 'PROFILE_FILTER_Contacts_Role_C-Level_Uncheck'
		},
		PROFILE_FILTER_Contacts_Role_VP_Check: {
			title: 'PROFILE_FILTER_Contacts_Role_VP_Check'
		},
		PROFILE_FILTER_Contacts_Role_VP_Uncheck: {
			title: 'PROFILE_FILTER_Contacts_Role_VP_Uncheck'
		},
		PROFILE_FILTER_Contacts_Role_Director_Check: {
			title: 'PROFILE_FILTER_Contacts_Role_Director_Check'
		},
		PROFILE_FILTER_Contacts_Role_Director_Uncheck: {
			title: 'PROFILE_FILTER_Contacts_Role_Director_Uncheck'
		},
		PROFILE_FILTER_Contacts_Role_Manager_Check: {
			title: 'PROFILE_FILTER_Contacts_Role_Manager_Check'
		},
		PROFILE_FILTER_Contacts_Role_Manager_Uncheck: {
			title: 'PROFILE_FILTER_Contacts_Role_Manager_Uncheck'
		},
		PROFILE_FILTER_Contacts_Role_Owner_Co_owner_Check: {
			title: 'PROFILE_FILTER_Contacts_Role_Owner/Co-owner_Check'
		},
		PROFILE_FILTER_Contacts_Role_Owner_Co_owner_Uncheck: {
			title: 'PROFILE_FILTER_Contacts_Role_Owner/Co-owner_Uncheck'
		},
		SearchResults_FavoriteIcon_Select: {
			title: 'SearchResults_FavoriteIcon_Select'
		},
		SearchResults_FavoriteIcon_Deselect: {
			title: 'SearchResults_FavoriteIcon_Deselect'
		},
		SearchResults_FilterPanel_FavoriteProspectsExpand: {
			title: 'SearchResults_FilterPanel_FavoriteProspectsExpand'
		},
		SearchResults_FilterPanel_FavoriteProspectsCollapse: {
			title: 'SearchResults_FilterPanel_FavoriteProspectsCollapse'
		},
		SearchResults_FilterPanel_FavoriteProspectsToggleGreen: {
			title: 'SearchResults_FilterPanel_FavoriteProspectsToggleGreen'
		},
		SearchResults_FilterPanel_FavoriteProspectsToggleRed: {
			title: 'SearchResults_FilterPanel_FavoriteProspectsToggleRed'
		},
		SearchResults_FilterPanel_FavoriteProspectsToggleRed_Apply: {
			title: 'SearchResults_FilterPanel_FavoriteProspectsToggleRed_Apply'
		},
		SearchResults_FilterPanel_FavoriteProspectsToggleGreen_Apply: {
			title: 'SearchResults_FilterPanel_FavoriteProspectsToggleGreen_Apply'
		},
		SearchResults_FavoriteProspects_AddButton: {
			title: 'SearchResults_FavoriteProspects_AddButton'
		},
		SearchFilter_Paycheck_Checked: {
			title: 'SearchFilter_Paycheck_Checked'
		},
		ProfileFilter_Paycheck_Checked: {
			title: 'ProfileFilter_Paycheck_Checked'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Expand:
		{
			title:'SMBAdvisor_Search Filter Panel_Social Expand'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Collapse:
		{
            title:'SMBAdvisor_Search Filter Panel_Social Collapse'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Toggle_Yes:
		{
            title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Toggle Yes'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Followers_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Followers_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Followers_To_Input:
		{
           title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Followers_To Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Following_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Following_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Following_To_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Following_To Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Pins_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Pins_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Pins_To_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Pins_To Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Boards_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Boards_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Yes_Boards_To_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Yes_Boards_To Input'
		},
		SMBAdvisor_Search_Applied_Filters_SMBAdvisor_Search_Applied_Filters_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_SMBAdvisor_Search Applied Filters_Cross'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Pinterest_Business_Account_Yes_Followers_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Pinterest Business Account_Yes_Followers_Cross'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Pinterest_Business_Account_Yes_Following_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Pinterest Business Account_Yes_Following_Cross'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Pinterest_Business_Account_Yes_Pins_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Pinterest Business Account_Yes_Pins_Cross'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Pinterest_Business_Account_Yes_Boards_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Pinterest Business Account_Yes_Boards_Cross'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Pinterest_Business_Account_Toggle_No:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Pinterest Business Account_Toggle No'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Toggle_Yes:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Toggle Yes'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Yes_Followers_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Yes_Followers_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Yes_Followers_To_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Yes_Followers_To Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Yes_Following_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Yes_Following_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Yes_Following_To_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Yes_Following_To Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Yes_Posts_From_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Yes_Posts_From Input'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Yes_Posts_To_Input:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Yes_Posts_To Input'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Instagram_Business_Account_Yes_Followers_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Instagram Business Account_Yes_Followers_Cross'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Instagram_Business_Account_Yes_Following_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Instagram Business Account_Yes_Following_Cross'
		},
		SMBAdvisor_Search_Applied_Filters_Social_Instagram_Business_Account_Yes_Posts_Cross:
		{
			title:'SMBAdvisor_Search Applied Filters_Social_Instagram Business Account_Yes_Posts_Cross'
		},
		SMBAdvisor_Search_Filter_Panel_Social_Instagram_Business_Account_Toggle_No:
		{
			title:'SMBAdvisor_Search Filter Panel_Social_Instagram Business Account_Toggle No'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Expand:
		{
           title: 'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Expand'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Collapse:
		{
           title: 'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Collapse'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Toggle_Yes:
		{
			title: 'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Toggle Yes'
		},
		SMBAdvisor_Profile_Filter_Panel_Social_Pinterest_Business_Account_Yes_Followers_From_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Social_Pinterest Business Account_Yes_Followers_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Followers_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Followers_To Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Following_From_Input:
		{
            title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Following_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Following_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Following_To Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Pins_From_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Pins_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Pins_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Pins_To Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Boards_From_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Boards_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Yes_Boards_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Yes_Boards_To Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Pinterest_Business_Account_Toggle_No:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Pinterest Business Account_Toggle No'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Toggle_Yes:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Toggle Yes'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Toggle_NO:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Toggle NO'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Yes_Followers_From_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Yes_Followers_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Yes_Followers_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Yes_Followers_To Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Yes_Following_From_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Yes_Following_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Yes_Following_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Yes_Following_To Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Yes_Posts_From_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Yes_Posts_From Input'
		},
		SMBAdvisor_Profile_Filter_Panel_Digital_Marketing_Signals_Social_Media_Presence_Instagram_Business_Account_Yes_Posts_To_Input:
		{
			title:'SMBAdvisor_Profile Filter Panel_Digital Marketing Signals_Social Media Presence_Instagram Business Account_Yes_Posts_To Input'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Expand:
		{
			title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Expand'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Collapse:
		{
            title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Collapse'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_Click:
		{
           title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_Click:
		{
           title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_Click'
		},//new list start
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_Click:
		{
			title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_About_this_Test_Expand_Click:
		{
           title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_About this Test_Expand_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_About_this_Test_Collapse_Click:
		{
		  title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_About this Test_Collapse_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_Why_do_we_check_for_this_Expand_Click:
		{
		title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_Why do we check for this_Expand_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_Why_do_we_check_for_this_Collapse_Click:
		{
		title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_Why do we check for this_Collapse_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_How_do_we_check_for_this_Expand_Click:
		{
		title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_How do we check for this_Expand_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_How_do_we_check_for_this_Collapse_Click:
		{
		title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_How do we check for this_Collapse_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_What_can_I_do_about_it_Expand_Click:
		{
			title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_What can I do about it_Expand_Click'
		},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_What_can_I_do_about_it_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_What can I do about it_Collapse_Click'},
        SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_More_What_can_I_do_about_it_Source_URL_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_More_What can I do about it_Source URL_Click'},
        SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_Less_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_Less_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Info_Cross_Click'},
        SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tick_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tick_Click'},
        SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_External_Link_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_External Link_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Followers_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Followers_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Followers_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Followers_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Following_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Following_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Following_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Following_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Pins_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Pins_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Pins_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Pins_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Boards_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Boards_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Boards_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Boards_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Profile_URL_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Profile URL_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Profile_URL_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Profile URL_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Profile_URL_Link_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Profile URL_Link_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_User_Name_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_User Name_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_User_Name_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_User Name_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_User_ID_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_User ID_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_User_ID_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_User ID_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Profile_Image_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Profile Image_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Profile_Image_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Profile Image_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_About_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_About_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_About_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_About_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_About_Expand_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_About_Expand_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_About_Info_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_About_Info_Collapse_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Website_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Website_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Website_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Website_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Website_Link_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Website_Link_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Country_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Country_Info_Click'},
        SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Country_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Country_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Address_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Address_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Address_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Address_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Domain_Verified_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Domain Verified_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Domain_Verified_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Domain Verified_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Is_Verified_Merchant_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Is Verified Merchant_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Pinterest_Business_Account_Tab_Is_Verified_Merchant_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Pinterest Business Account_Tab_Is Verified Merchant_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_About_this_Test_Expand_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_About this Test_Expand_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_About_this_Test_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_About this Test_Collapse_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_Why_do_we_check_for_this_Expand_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_Why do we check for this_Expand_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_Why_do_we_check_for_this_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_Why do we check for this_Collapse_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_How_do_we_check_for_this_Expand_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_How do we check for this_Expand_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_How_do_we_check_for_this_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_How do we check for this_Collapse_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_What_can_I_do_about_it_Expand_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_What can I do about it_Expand_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_What_can_I_do_about_it_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_What can I do about it_Collapse_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_More_What_can_I_do_about_it_Source_URL_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_More_What can I do about it_Source URL_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_Less_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_Less_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tick_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tick_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_External_Link_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_External Link_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Posts_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Posts_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Posts_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Posts_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Followers_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Followers_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Followers_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Followers_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Following_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Following_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Following_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Following_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Page_URL_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Page URL_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Page_URL_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Page URL_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Page_URL_Link_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Page URL_Link_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_User_Name_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_User Name_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_User_Name_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_User Name_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Business_Name_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Business Name_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Business_Name_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Business Name_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Category_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Category_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Category_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Category_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_About_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_About_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_About_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_About_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_About_Expand_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_About_Expand_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_About_Collapse_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_About_Collapse_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Website_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Website_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Website_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Website_Info_Cross_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Website_Link_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Website_Link_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Last_Post_Date_Info_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Last Post Date_Info_Click'},
		SMBAdvisor_Profile_Detailed_Social_Media_Presence_Instagram_Business_Account_Tab_Last_Post_Date_Info_Cross_Click:
		{title:'SMBAdvisor_Profile_Detailed_Social Media Presence_Instagram Business Account_Tab_Last Post Date_Info_Cross_Click'},
		Competition_Social_Media_Presence_Pinterest_Business_Account_Link_Click:
		{title:'Competition_Social Media Presence_Pinterest Business Account_Link_Click'},
		Competition_Social_Media_Presence_Pinterest_Business_Account_Competitor_1_Link_Click:
		{
			title:'Competition_Social Media Presence_Pinterest Business Account_Competitor 1_Link_Click'
		},
		Competition_Social_Media_Presence_Pinterest_Business_Account_Competitor_2_Link_Click:
		{
			title:'Competition_Social Media Presence_Pinterest Business Account_Competitor 2_Link_Click'
		},
		Competition_Social_Media_Presence_Pinterest_Business_Account_Competitor_3_Link_Click:
		{
			title:'Competition_Social Media Presence_Pinterest Business Account_Competitor 3_Link_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_About_this_Test_Expand_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_About this Test_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_About_this_Test_Collapse_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_About this Test_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_Why_do_we_check_for_this_Expand_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_Why do we check for this_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_Why_do_we_check_for_this_Collapse_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_Why do we check for this_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_How_do_we_check_for_this_Expand_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_How do we check for this_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_How_do_we_check_for_this_Collapse_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_How do we check for this_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_What_can_I_do_about_it_Expand_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_What can I do about it_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_What_can_I_do_about_it_Collapse_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_What can I do about it_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_More_What_can_I_do_about_it_Source_URL_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_More_What can I do about it_Source URL_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_Less_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_Less_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_Cross_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_Cross_Click'
		},
		Competition_Social_Media_Presence_Instagram_Business_Account_Link_Click:
		{
			title:'Competition_Social Media Presence_Instagram Business Account_Link_Click'
		},
		Competition_Social_Media_Presence_Instagram_Business_Account_Competitor_1_Link_Click:
		{
			title:'Competition_Social Media Presence_Instagram Business Account_Competitor 1_Link_Click'
		},
		Competition_Social_Media_Presence_Instagram_Business_Account_Competitor_2_Link_Click:
		{
			title:'Competition_Social Media Presence_Instagram Business Account_Competitor 2_Link_Click'
		},
		Competition_Social_Media_Presence_Instagram_Business_Account_Competitor_3_Link_Click:
		{
			title:'Competition_Social Media Presence_Instagram Business Account_Competitor 3_Link_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_What_can_I_do_about_it_Source_URL_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_What can I do about it_Source URL_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_About_this_Test_Expand_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_About this Test_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_About_this_Test_Collapse_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_About this Test_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_Why_do_we_check_for_this_Expand_Click:
		{
		title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_Why do we check for this_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_Why_do_we_check_for_this_Collapse_Click:
		{
		title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_Why do we check for this_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_How_do_we_check_for_this_Expand_Click:
		{title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_How do we check for this_Expand_Click'},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_How_do_we_check_for_this_Collapse_Click:
		{
		title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_How do we check for this_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_What_can_I_do_about_it_Expand_Click:
		{
		title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_What can I do about it_Expand_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_More_What_can_I_do_about_it_Collapse_Click:
		{
		title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_More_What can I do about it_Collapse_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_Less_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_Less_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_Cross_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_Cross_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Pinterest_Business_Account_Info_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Pinterest Business Account_Info_Click'
		},
		SMBAdvisor_Competition_Social_Media_Presence_Instagram_Business_Account_Info_Click:
		{
			title:'SMBAdvisor_Competition_Social Media Presence_Instagram Business Account_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Profile_Image_Link_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Profile Image_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Profile_Image_Competitor_1_Link_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Profile Image_Competitor 1_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Profile_Image_Competitor_2_Link_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Profile Image_Competitor 2_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Profile_Image_Competitor_3_Link_Click:
		{
            title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Profile Image_Competitor 3_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Char_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Char_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Char_Cross_Click:
		{
           title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Char_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Competitor_1_Char_Click:
		{
           title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Competitor 1_Char_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Competitor_1_Char_Cross_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Competitor 1_Char_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Competitor_2_Char_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Competitor 2_Char_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Competitor_2_Char_Cross_Click:
		{
             title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Competitor 2_Char_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Competitor_3_Char_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Competitor 3_Char_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Competitor_3_Char_Cross_Click:
		{
			title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Competitor 3_Char_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Char_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Char_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Char_Cross_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Char_Cross_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Competitor_1_Char_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Competitor 1_Char_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Competitor_1_Char_Cross_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Competitor 1_Char_Cross_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Competitor_2_Char_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Competitor 2_Char_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Competitor_2_Char_Cross_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Competitor 2_Char_Cross_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Competitor_3_Char_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Competitor 3_Char_Click'},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Competitor_3_Char_Cross_Click:
		{title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Competitor 3_Char_Cross_Click'},
		Advisor_Home_BBAcademy_MakingMoneyPlayIcon_Click:
		{
			title:'Advisor_Home_BBAcademy_MakingMoneyPlayIcon_Click'
		},
		Profiles_Multi_Select_Download :{
			title :'Profiles_Multi_Select_Download'
		},

		Profiles_Multi_Select_Select_All_Reports :{
			title :'Profiles_Multi_Select_Select_All_Reports'
		},Profiles_Multi_Select_Detailed_Profile_Reports :{
			title :'Profiles_Multi_Select_Detailed_Profile_Reports'
		},Profiles_Multi_Select_Compact_Profile_Reports :{
			title :'Profiles_Multi_Select_Compact_Profile_Reports'
		},Profiles_Multi_Select_Competition_Reports		:{
			title :'Profiles_Multi_Select_Competition_Reports'
		},Profiles_Multi_Select_Google_Ads_Reports :{
			title :'Profiles_Multi_Select_Google_Ads_Reports'
		},Profiles_Multi_Select_Download_Reports :{
			title :'Profiles_Multi_Select_Download_Reports'
		},Profiles_Multi_Select_Cancel_Download :{
			title :'Profiles_Multi_Select_Cancel_Download'
		},Profiles_Multi_Select_Close_Download :{
			title :'Profiles_Multi_Select_Close_Download'
		},Profiles_Multi_Select_Download_Ok :{
			title :'Profiles_Multi_Select_Download_Ok'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Followers_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Followers_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Followers_Info_Cross_Click:
		{
        title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Followers_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Following_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Following_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Following_Info_Cross_Click:
		{
	    title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Following_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Pins_Info_Click:
		{
        title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Pins_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Pins_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Pins_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Boards_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Boards_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Boards_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Boards_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Profile_Image_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Profile Image_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Profile_Image_Info_Cross_Click:
	    {
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Profile Image_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_About_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest About_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Domain_Verified_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Domain Verified_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Domain_Verified_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Domain Verified_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Verified_Merchant_Info_Click:
		{
         title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Verified Merchant_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Pinterest_Business_Account_Pinterest_Verified_Merchant_Info_Cross_Click:
		{
		 title:'SMBAdvisor_Competition_SMO Analysis_Pinterest Business Account_Pinterest Verified Merchant_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Posts_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Posts_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Posts_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Posts_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Followers_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Followers_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Followers_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Followers_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Following_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Following_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Following_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Following_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Page_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Page_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Page_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Page_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Page_Link_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Page_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Page_Competitor_1_Link_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Page_Competitor 1_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Page_Competitor_2_Link_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Page_Competitor 2_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Page_Competitor_3_Link_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Page_Competitor 3_Link_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_About_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram About_Info_Cross_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Last_Post_Date_Info_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Last Post Date_Info_Click'
		},
		SMBAdvisor_Competition_SMO_Analysis_Instagram_Business_Account_Instagram_Last_Post_Date_Info_Cross_Click:
		{
		title:'SMBAdvisor_Competition_SMO Analysis_Instagram Business Account_Instagram Last Post Date_Info_Cross_Click'
		},
		Advisor_Filter_Profiles_Firmographics_Remote_Only_Click:
		{
         title:'Profiles_Firmographics_Remote-Only'
		},
		/* added by sandeep */

		Advisor_Prospects_Actions_SyncToFacebook_Add_and_Sync_to_Facebook_Menu : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Add_and_Sync_to_Facebook_Menu'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Facebook_Audience_Picklist : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Facebook Audience Picklist'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Sync_Business_Email_Address_deselect : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Sync_Business_Email_Address_deselect'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Sync_Business_Email_Address_select : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Sync_Business_Email_Address_select'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Sync_Contact_Email_Address_deselect : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Sync_Contact_Email_Address_deselect'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Sync_Contact_Email_Address_select : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Sync_Contact_Email_Address_select'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Cancel_button_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Cancel_button_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Sync_button_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Sync_button_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Success_Message_Ok_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Success_Message_Ok_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Error_Message_Ok_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Error_Message_Ok_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Link_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Link_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_deselect : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_deselect'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_select : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_select'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_deselect : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_deselect'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_select : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_select'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Cancel_button_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Cancel_button_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Back_button_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Back_button_Click'
		},
		Advisor_Prospects_Actions_SyncToFacebook_Create_New_Create_and_Sync_button_Click : {
			title : 'Advisor_Prospects_Actions_SyncToFacebook_Create_New_Create_and_Sync_button_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Sync_to_Facebook_Menu : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Sync_to_Facebook_Menu'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Facebook_Audience_Picklist : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Facebook_Audience_Picklist'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Sync_Business_Email_Address_deselect : {
			title : 'Advisor_Profiles_Prospects_Actions_SyncToFacebook_Sync_Business_Email_Address_deselect'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Sync_Business_Email_Address_select : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Sync_Business_Email_Address_select'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Sync_Contact_Email_Address_deselect : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Sync_Contact_Email_Address_deselect'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Sync_Contact_Email_Address_select : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Sync_Contact_Email_Address_select'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Cancel_button_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Cancel_button_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Sync_button_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Sync_button_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Success_Message_Ok_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Success_Message_Ok_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Error_Message_Ok_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Error_Message_Ok_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Link_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Link_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_deselect : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_deselect'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_select : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Business_Email_Address_select'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_deselect : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_deselect'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_select : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Sync_Contact_Email_Address_select'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Cancel_button_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Cancel_button_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Back_button_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Back_button_Click'
		},
		Advisor_Profiles_Actions_SyncToFacebook_Create_New_Create_and_Sync_button_Click : {
			title : 'Advisor_Profiles_Actions_SyncToFacebook_Create_New_Create_and_Sync_button_Click'
		},
		Advisor_Profile_Filter_Destination_Expand_Click : {
			title : 'Advisor_Profile_Filter_Destination_Expand_Click'
		},
		Advisor_Profile_Filter_Destination_Collapse_Click : {
			title : 'Advisor_Profile_Filter_Destination_Collapse_Click'
		},
		Advisor_Profile_Filter_Facebook_Audience_Toogle_Yes : {
			title : 'Advisor_Profile_Filter_Facebook_Audience_Toogle_Yes'
		},
		Advisor_Profile_Filter_Facebook_Audience_Toogle_No : {
			title : 'Advisor_Profile_Filter_Facebook_Audience_Toogle_No'
		}
		,
		Advisor_Main_Menu_Integrations_Icon_Click : {
			title : 'Advisor_Main_Menu_Integrations_Icon_Click'
		},
		Advisor_Integrations_ZendeskSell_Tab_Click : {
			title : 'Advisor_Integrations_ZendeskSell_Tab_Click'
		},
		Advisor_Integrations_ZendeskSell_Tab_InfoText_Clickhere_Click : {
			title : 'Advisor_Integrations_ZendeskSell_Tab_InfoText_Clickhere_Click'
		},
		Advisor_Integrations_ZendeskSell_Tab_APIKey_Authenticate_Click : {
			title : 'Advisor_Integrations_ZendeskSell_Tab_APIKey_Authenticate_Click'
		},
		Click_Payment_Failed_Link :{
			title : 'Click_Payment_Failed_Link'
		},
		Click_Payment_Failed_Change_Plan_Popup :{
			title : 'Click_Payment_Failed_Change_Plan_Popup'
		},Payment_Failed_Click_Here :{
			title : 'Payment_Failed_Click_Here'
		},Suspended_User_Click_Activate :{
			title : 'Suspended_User_Click_Activate'
		},Suspended_User_Click_Change_Plan_After_Activate :{
			title : 'Suspended_User_Click_Change_Plan_After_Activate'
		},Suspended_User_Click_Update_Payment_After_Activate :{
			title : 'Suspended_User_Click_Update_Payment_After_Activate'
		},
		Click_Manage_Subscription :{
			title : 'Click_Manage_Subscription'
		},
		Advisor_SearchResults_CategoryCoverage_InfoText_CTA_Click : {
			title : 'Advisor_SearchResults_CategoryCoverage_InfoText_CTA_Click'
		},
		Advisor_SearchResults_CategoryCoverage_Tab_Click : {
			title : 'Advisor_SearchResults_CategoryCoverage_Tab_Click'
		},
		Advisor_CategoryCoverage_ExactMatch_Tab_Click : {
			title : 'Advisor_CategoryCoverage_ExactMatch_Tab_Click'
		},
		Advisor_CategoryCoverage_ExactMatch_SelectAll_Click : {
			title : 'Advisor_CategoryCoverage_ExactMatch_SelectAll_Click'
		},
		Advisor_CategoryCoverage_ExactMatch_ClearAll_Click : {
			title : 'Advisor_CategoryCoverage_ExactMatch_ClearAll_Click'
		},
		Advisor_CategoryCoverage_ExactMatch_CheckBox_Select : {
			title : 'Advisor_CategoryCoverage_ExactMatch_CheckBox_Select'
		},
		Advisor_CategoryCoverage_ExactMatch_CheckBox_DeSelect : {
			title : 'Advisor_CategoryCoverage_ExactMatch_CheckBox_DeSelect'
		},
		Advisor_CategoryCoverage_ExactMatch_ViewProspects_AllTabs_Click : {
			title : 'Advisor_CategoryCoverage_ExactMatch_ViewProspects_AllTabs_Click'
		},
		Advisor_CategoryCoverage_ExactMatch_ViewProspects_Click : {
			title : 'Advisor_CategoryCoverage_ExactMatch_ViewProspects_Click'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_Click : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_Click'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_SelectAll_Click : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_SelectAll_Click'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_ClearAll_Click : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_ClearAll_Click'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_CheckBox_Select : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_CheckBox_Select'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_CheckBox_DeSelect : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_CheckBox_DeSelect'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_ViewProspects_AllTabs_Click : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_ViewProspects_AllTabs_Click'
		},
		Advisor_CategoryCoverage_FullMatch_Tab_ViewProspects_Click : {
			title : 'Advisor_CategoryCoverage_FullMatch_Tab_ViewProspects_Click'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_Click : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_Click'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_SelectAll_Click : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_SelectAll_Click'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_ClearAll_Click : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_ClearAll_Click'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_CheckBox_Select : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_CheckBox_Select'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_CheckBox_DeSelect : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_CheckBox_DeSelect'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_ViewProspects_AllTabs_Click : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_ViewProspects_AllTabs_Click'
		},
		Advisor_CategoryCoverage_PartialMatch_Tab_ViewProspects_Click : {
			title : 'Advisor_CategoryCoverage_PartialMatch_Tab_ViewProspects_Click'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_Click : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_Click'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_SelectAll_Click : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_SelectAll_Click'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_ClearAll_Click : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_ClearAll_Click'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_CheckBox_Select : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_CheckBox_Select'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_CheckBox_DeSelect : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_CheckBox_DeSelect'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_ViewProspects_AllTabs_Click : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_ViewProspects_AllTabs_Click'
		},
		Advisor_CategoryCoverage_Synonyms_Tab_ViewProspects_Click : {
			title : 'Advisor_CategoryCoverage_Synonyms_Tab_ViewProspects_Click'
		},
		Advisor_CategoryCoverage_ViewProspects_AllTabs_PromptMessage_Yes_Click : {
			title : 'Advisor_CategoryCoverage_ViewProspects_AllTabs_PromptMessage_Yes_Click'
		},
		Advisor_CategoryCoverage_ViewProspects_AllTabs_PromptMessage_No_Click : {
			title : 'Advisor_CategoryCoverage_ViewProspects_AllTabs_PromptMessage_No_Click'
		},
		Advisor_CategoryCoverage_ViewProspects_PromptMessage_Yes_Click : {
			title : 'Advisor_CategoryCoverage_ViewProspects_PromptMessage_Yes_Click'
		},
		Advisor_CategoryCoverage_ViewProspects_PromptMessage_No_Click : {
			title : 'Advisor_CategoryCoverage_ViewProspects_PromptMessage_No_Click'
		},
		Advisor_CategoryCoverage_UniqueProspects_Toggle_On : {
			title : 'Advisor_CategoryCoverage_UniqueProspects_Toggle_On'
		},
		Advisor_CategoryCoverage_UniqueProspects_Toggle_Off : {
			title : 'Advisor_CategoryCoverage_UniqueProspects_Toggle_Off'
		},
		Advisor_CategoryCoverage_AppliedFilter_Category_InfoText_cross_click : {
			title : 'Advisor_CategoryCoverage_AppliedFilter_Category_InfoText_cross_click'
		},

// new events for ecommerce on (09-02-2021)
        Advisor_Prospect_Filter_E_commerce_E_commerceready_ToggleYes_Click:{
            title:'Advisor_Prospect_Filter_E-commerce_E-commerceready_ToggleYes_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_E_commerceready_ToggleNo_Click:{
			 title:'Advisor_Prospect_Filter_E-commerce_E-commerceready_ToggleNo_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_E_commerceready_Toggle_Neutral_Click:
		 {
			 title:'Advisor_Prospect_Filter_E-commerce_E-commerceready_Toggle_Neutral_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_E_commerceenabled_ToggleYes_Click:
		 {
			title:'Advisor_Prospect_Filter_E-commerce_E-commerceenabled_ToggleYes_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_E_commerceenabled_ToggleNo_Click:
		 {
			 title:'Advisor_Prospect_Filter_E-commerce_E-commerceenabled_ToggleNo_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_E_commerceenabled_Toggle_Neutral_Click:
		 {
			 title:'Advisor_Prospect_Filter_E-commerce_E-commerceenabled_Toggle_Neutral_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_FBshop_ToggleYes_Click:
		 {
			 title:'Advisor_Prospect_Filter_E-commerce_FBshop_ToggleYes_Click'
		 },
		 Advisor_Prospect_Filter_E_commerce_FBshop_ToggleNo_Click:
		 {
			 title:'Advisor_Prospect_Filter_E-commerce_FBshop_ToggleNo_Click'
		 },
		Advisor_Prospect_Filter_E_commerce_FBshop_Toggle_Neutral_Click:
		{
			title:'Advisor_Prospect_Filter_E-commerce_FBshop_Toggle_Neutral_Click'
		},
		Advisor_Prospect_Filter_E_commerce_AmazonSeller_ToggleYes_Click:
		{
			title:'Advisor_Prospect_Filter_E-commerce_AmazonSeller_ToggleYes_Click'
		},
		Advisor_Prospect_Filter_E_commerce_AmazonSeller_ToggleNo_Click:
		{
			title:'Advisor_Prospect_Filter_E-commerce_AmazonSeller_ToggleNo_Click'
		},
		Advisor_Prospect_Filter_E_commerce_AmazonSeller_Toggle_Neutral_Click:
		{
			title:'Advisor_Prospect_Filter_E-commerce_AmazonSeller_Toggle_Neutral_Click'
		},
		Advisor_Profile_Filter_E_commerce_E_commerceready_ToggleYes_Click:
		{
		    title:'Advisor_Profile_Filter_E-commerce_E-commerceready_ToggleYes_Click'
		},
		Advisor_Profile_Filter_E_commerce_E_commerceready_ToggleNo_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_E-commerceready_ToggleNo_Click'
		},
		Advisor_Profile_Filter_E_commerce_E_commerceready_Toggle_Neutral_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_E-commerceready_Toggle_Neutral_Click'
		},
		Advisor_Profile_Filter_E_commerce_E_commerceenabled_ToggleYes_Click:
		{
			title:'Advisor_Profile_Filter_E-commerce_E-commerceenabled_ToggleYes_Click'
		},
		Advisor_Profile_Filter_E_commerce_E_commerceenabled_ToggleNo_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_E-commerceenabled_ToggleNo_Click'
		},
		Advisor_Profile_Filter_E_commerce_E_commerceenabled_Toggle_Neutral_Click:
		{
             title:'Advisor_Profile_Filter_E-commerce_E-commerceenabled_Toggle_Neutral_Click'
		},
		Advisor_Profile_Filter_E_commerce_FBshop_ToggleYes_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_FBshop_ToggleYes_Click'
		},
		Advisor_Profile_Filter_E_commerce_FBshop_ToggleNo_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_FBshop_ToggleNo_Click'
		},
		Advisor_Profile_Filter_E_commerce_FBshop_Toggle_Neutral_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_FBshop_Toggle_Neutral_Click'
		},
		Advisor_Profile_Filter_E_commerce_AmazonSeller_ToggleYes_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_AmazonSeller_ToggleYes_Click'
		},
		Advisor_Profile_Filter_E_commerce_AmazonSeller_ToggleNo_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_AmazonSeller_ToggleNo_Click'
		},
		Advisor_Profile_Filter_E_commerce_AmazonSeller_Toggle_Neutral_Click:
		{
            title:'Advisor_Profile_Filter_E-commerce_AmazonSeller_Toggle_Neutral_Click'
		},
			// added by vamshi 3240 (02-01-2021)
		Advisor_Home_BBAcademy_InfoIcon_Click: {
			title: 'Advisor_Home_BBAcademy_InfoIcon_Click'
		},
		Advisor_Home_BBAcademy_KB_SearchIcon_Click :{
			title: 'Advisor_Home_BBAcademy_KB_SearchIcon_Click'
		},
		Advisor_Home_BBAcademy_Covid19Videos_Click :{
			title : 'Advisor_Home_BBAcademy_Covid19Videos_Click'
		},
		Advisor_Home_BBAcademy_PlayIcon_Click : {
			title :'Advisor_Home_BBAcademy_PlayIcon_Click'
		},
		Advisor_Home_BBAcademy_cheatsheetHomePage_Click : {
			title : 'Advisor_Home_BBAcademy_cheatsheetHomePage_Click'
		},
		Advisor_Home_BBAcademy_cheatsheetSearchResult_Click : {
			title : 'Advisor_Home_BBAcademy_cheatsheetSearchResult_Click'
		},
		Advisor_Home_BBAcademy_cheatsheetProfile_Click : {
			title : 'Advisor_Home_BBAcademy_cheatsheetProfile_Click'
		},
		Advisor_Home_BBAcademy_cheatsheetProfileSignals_Click : {
			title : 'Advisor_Home_BBAcademy_cheatsheetProfileSignals_Click'
		},
		Advisor_Home_BBAcademy_cheatsheetCovid19_Click : {
			title : 'Advisor_Home_BBAcademy_cheatsheetCovid19_Click'
		},
		Advisor_Home_BBAcademy_Show_Click : {
			title : 'Advisor_Home_BBAcademy_Show_Click'
		},
		Advisor_Home_BBAcademy_Hide_Click : {
			title : 'Advisor_Home_BBAcademy_Hide_Click'
		},
		Advisor_TopBar_SectionIcon_Hide_Click:{
			title : 'Advisor_TopBar_SectionIcon_Hide_Click'
		},
		Advisor_NavigationBar_HomeIcon_Click :{
			title : 'Advisor_NavigationBar_HomeIcon_Click'
		}
		,Advisor_Home_Organise_Save_Click :{
			title:'Advisor_Home_Organise_Save_Click'
		}
		,Advisor_Home_Organise_Discard_Click :{
			title:'Advisor_Home_Organise_Discard_Click'
		},Advisor_Home_BBAcademy_Refresher_QA_Sessions_InternationalNumbersLink_Click:{
			title :'Advisor_Home_BBAcademy_Refresher_Q&A_Sessions_InternationalNumbersLink_Click'
		},
		Advisor_Home_BBAcademy_Refresher_QA_Sessions_WebinarLink_Click:{
			title :'Advisor_Home_BBAcademy_Refresher_Q&A_Sessions _WebinarLink_Click'
		},Advisor_Home_Covid_19Category_Location_Click :{
			title:'Advisor_Home_Covid-19Category_Location_Click'
		}
		,Advisor_Home_Covid_19Category_ProspectNow_Click :{
			title :'Advisor_Home_Covid-19Category_ProspectNow_Click'
		},
		Advisor_Home_Covid_19Category_RedirectionWindow_Yes_Click :{
			title :'Advisor_Home_Covid-19Category_RedirectionWindow_Yes_Click'
		}
		,Advisor_Home_Covid_19Category_RedirectionWindow_No_Click :{
			title :'Advisor_Home_Covid-19Category_RedirectionWindow_No_Click'
		}
		,Advisor_Home_Covid_19Category_RedirectionWindow_Close_Click :{
			title :'Advisor_Home_Covid-19Category_RedirectionWindow_Close_Click'
		}
		,Advisor_Home_Covid_19Category_More_Click :{
			title :'Advisor_Home_Covid-19Category_More_Click'
		},
		Advisor_Home_Covid_19Category_MoreWindowClose_Click :{
			title : 'Advisor_Home_Covid-19Category_MoreWindowClose_Click'
		}

		,
		Advisor_Home_Covid_19Category_Show_Click :{
			title : 'Advisor_Home_Covid-19Category_Show_Click'
		}
		,
		Advisor_Home_Covid_19Category_MoreWindowSearchLocation_Click :{
			title : 'Advisor_Home_Covid-19Category_MoreWindowSearchLocation_Click'
		},
		Advisor_Home_Covid_19Category_Hide_Click :{
			title : 'Advisor_Home_Covid-19Category_Hide_Click'
		},
		Advisor_Home_Covid_19Recommendation_Location_Click :{
			title : 'Advisor_Home_Covid-19Recommendation_Location_Click'
		},
		Advisor_Home_Covid_19Recommendation_RedirectionWindow_No_Click :{
			title : 'Advisor_Home_Covid-19Recommendation_RedirectionWindow_No_Click'
		},
		Advisor_Home_Covid_19Recommendation_RedirectionWindow_Yes_Click :{
			title : 'Advisor_Home_Covid-19Recommendation_RedirectionWindow_Yes_Click'
		}
		,
		Advisor_Home_Covid_19Recommendation_Show_Click :{
			title : 'Advisor_Home_Covid-19Recommendation_Show_Click'
		},
		Advisor_Home_Covid_19Recommendation_Hide_Click :{
			title : 'Advisor_Home_Covid-19Recommendation_Hide_Click'
		}
		,Advisor_Home_ProspectingQuickStart_InfoIcon_Click :{
			title :'Advisor_Home_ProspectingQuickStart_InfoIcon_Click'
		}
		,Advisor_Home_ProspectingQuickStart_Show_Click :{
			title :'Advisor_Home_ProspectingQuickStart_Show_Click'
		}
		,Advisor_Home_ProspectingQuickStart_Hide_Click :{
			title :'Advisor_Home_ProspectingQuickStart_Hide_Click'
		}
		,Advisor_Home_ProspectingQuickStart_addPreferences_Click :{
			title :'Advisor_Home_ProspectingQuickStart_addPreferences_Click'
		}
		,Advisor_Home_ProspectingQuickStart_preferencesPageClose_Click :{
			title :'Advisor_Home_ProspectingQuickStart_preferencesPageClose_Click'
		}
		,Advisor_Home_ProspectingQuickStart_preferencesTab_Click :{
			title :'Advisor_Home_ProspectingQuickStart_preferencesTab_Click'
		}
		,Advisor_Home_ProspectingQuickStart_preferencesTab_marketSearch_Click :{
			title :'Advisor_Home_ProspectingQuickStart_preferencesTab_marketSearch_Click'
		},Advisor_Home_ProspectingQuickStart_preferencesTab_marketOptionRemove_Click :{
			title :'Advisor_Home_ProspectingQuickStart_preferencesTab_marketOptionRemove_Click'
		},Advisor_Home_ProspectingQuickStart_preferencesTab_marketOptionRemove_ok_Click :{
			title :'Advisor_Home_ProspectingQuickStart_preferencesTab_marketOptionRemove_ok_Click'
		},
		Advisor_Home_ProspectingQuickStart_preferencesTab_categoriesOptionRemove_ok_Click :{
			title:'Advisor_Home_ProspectingQuickStart_preferencesTab_categoriesOptionRemove_ok_Click'
		},
		Advisor_Home_ProspectingQuickStart_preferencesTab_signal_takeMeToHomePage_Click :{
			title:'Advisor_Home_ProspectingQuickStart_preferencesTab_signal_takeMeToHomePage_Click'
		}
		,
		Advisor_Home_ProspectingQuickStart_preferencesTab_competition_ToggleYes_Click :{
			title:'Advisor_Home_ProspectingQuickStart_preferencesTab_competition_ToggleYes_Click'
		},
		Advisor_Home_ProspectingQuickStart_preferencesTab_competition_ToggleNo_Click :{
			title:'Advisor_Home_ProspectingQuickStart_preferencesTab_competition_ToggleNo_Click'
		}
		,
		Advisor_Home_ProspectingQuickStart_ApiKeyTab_documentation_Click :{
			title:'Advisor_Home_ProspectingQuickStart_ApiKeyTab_documentation_Click'
		},
		Advisor_Home_ProspectingQuickStart_generateApiKeyTab_Click :{
			title :'Advisor_Home_ProspectingQuickStart_generateApiKeyTab_Click'
		},
		Advisor_Home_ProspectingPeakSalesMonth_MoreWindowClose_Click : {
			title:'Advisor_Home_ProspectingPeakSalesMonth_MoreWindowClose_Click'
		},
		Advisor_Home_ProspectingPeakSalesMonth_MoreWindowCategorySearch_Click :{
			title:'Advisor_Home_ProspectingPeakSalesMonth_MoreWindowCategorySearch_Click'
		},
		Advisor_Home_PeakSalesMonthProspecting_Show_Click :{
			title:'Advisor_Home_PeakSalesMonthProspecting_Show_Click'
		},
		Advisor_Home_PeakSalesMonthProspecting_Hide_Click :{
			title:'Advisor_Home_PeakSalesMonthProspecting_Hide_Click'
		},
		Advisor_NavigationBar_ProfileIcon_Click:{
			title : 'Advisor_NavigationBar_ProfileIcon_Click'
		},
		Advisor_Home_ProspectingQuickStart_preferencesTab_productSearch_Click :{
			title:'Advisor_Home_ProspectingQuickStart_preferencesTab_productSearch_Click'
		},
		Advisor_Profile_NewProspectTab_Click :{
			title :'Advisor_Profile_NewProspectTab_Click'
		},Advisor_Profile_NewProspect_addManually_Click :{
			title:'Advisor_Profile_NewProspect_addManually_Click'
		},
		Advisor_Profile_NewProspect_useExternalSource_checkbox_Click :{
			title:'Advisor_Profile_NewProspect_useExternalSource_checkbox_Click'
		},
		Advisor_Profile_newProspect_profileCard_checkbox_Click:{
			title :'Advisor_Profile_newProspect_profileCard_checkbox_Click'
		},
		Advisor_Profile_newProspect_profileCard_markAccuracy_positive_Click:{
			title :'Advisor_Profile_newProspect_profileCard_markAccuracy_positive_Click'
		},
		Advisor_Profile_newProspect_profileCard_markAccuracy_negative_Click :{
			title :'Advisor_Profile_newProspect_profileCard_markAccuracy_negative_Click'
		},
		Advisor_Profile_newProspect_profileCard_category_Click :{
			title:"Advisor_Profile_newProspect_profileCard_category_Click"
		},
		Advisor_Profile_newProspect_profileCard_productsRecommended_Click :{
			title :'Advisor_Profile_newProspect_profileCard_productsRecommended_Click'
		},
		Advisor_Profile_AddedProfileTab_Click :{
			title :'Advisor_Profile_AddedProfileTab_Click'
		},
		Advisor_Profile_AddedProfile_addManually_Click :{
			title :'Advisor_Profile_AddedProfile_addManually_Click'
		},
		Advisor_Profile_AddedProfile_useExternalSource_Click :{
			title:'Advisor_Profile_AddedProfile_useExternalSource_Click'
		},Advisor_Profile_AddedProfile_profileCard_checkbox_editProfile_Click:{
			title :'Advisor_Profile_AddedProfile_profileCard_checkbox_editProfile_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_checkbox_regenerateProfile_Click :{
			title :'Advisor_Profile_AddedProfile_profileCard_checkbox_regenerateProfile_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_checkbox_shareORemail_Click :{
			title :'Advisor_Profile_AddedProfile_profileCard_checkbox_shareORemail_Click'
		},

		Advisor_Profile_AddedProfile_profileCard_checkbox_archive_Click:{
			title :'Advisor_Profile_AddedProfile_profileCard_checkbox_archive_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_favouriteIcon_Click:{
			title :'Advisor_Profile_AddedProfile_profileCard_favouriteIcon_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_markAccuracy_positive_Click:{
			title:'Advisor_Profile_AddedProfile_profileCard_markAccuracy_positive_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_markAccuracy_negative_Click:{
			title:'Advisor_Profile_AddedProfile_profileCard_markAccuracy_negative_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_category_Click: {
			title: 'Advisor_Profile_AddedProfile_profileCard_category_Click'
		},
		Advisor_Profile_AddedProfile_profileCard_productsRecommended_Click: {
			title: 'Advisor_Profile_AddedProfile_profileCard_productsRecommended_Click'
		},
		Advisor_Profile_savedSearchTab_Click: {
			title: 'Advisor_Profile_savedSearchTab_Click'
		},
		Advisor_Profile_savedSearch_filter_title_Click:{
			title: 'Advisor_Profile_savedSearch_filter_title_Click'
		},
		Advisor_Profile_savedSearch_yourSearchTab_Click:{
			title:'Advisor_Profile_savedSearch_yourSearchTab_Click'
		},
		Advisor_Profile_savedSearch_covid19recommendation_Click :{
			title :'Advisor_Profile_savedSearch_covid19recommendation_Click'
		},Advisor_Profile_savedSearch_covid19recommendation_more_Click:{
			title :'Advisor_Profile_savedSearch_covid19recommendation_more_Click'
		},
		Advisor_Profile_filter_technology_search_Click :{
			title:'Advisor_Profile_filter_technology_search_Click'
		},
		Advisor_Profile_filter_technology_advanced_expand_Click:{
			title :'Advisor_Profile_filter_technology_advanced_expand_Click'
		},Advisor_Profile_filter_technology_advanced_collapse_Click :{
			title :'Advisor_Profile_filter_technology_advanced_collapse_Click'
		},
		Advisor_Profile_filter_technology_advancedOptions_toggle_Click:{
			title :'Advisor_Profile_filter_technology_advancedOptions_toggle_Click'
		},
		Advisor_Profile_filter_technology_advancedOptions_Types_checkbox_Click:{
			title :'Advisor_Profile_filter_technology_advancedOptions_Types_checkbox_Click'
		},
		Advisor_Profile_filter_archivedBusiness_options_checkbox_Click :{
title :'Advisor_Profile_filter_archivedBusiness_options_checkbox_Click'
		},
		Advisor_Profile_filter_firmographics_infoIcon_Click :{
			title :'Advisor_Profile_filter_firmographics_infoIcon_Click'
		},
		/*start bulk/batch CRM Sync by Sandeep (23/02/2021)*/

		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SuccessMessage_ActivityLog_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SuccessMessage_ActivityLog_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SuccessMessage_StayHere_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SuccessMessage_StayHere_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SuccessMessage_ViewProfiles_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SuccessMessage_ViewProfiles_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SuccessMessage_DoNotShow_ForThisSearchResult_Checkbox_Select : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SuccessMessage_DoNotShow_ForThisSearchResult_Checkbox_Select'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SuccessMessage_DoNotShow_EverAgain_Checkbox_Select : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SuccessMessage_DoNotShow_EverAgain_Checkbox_Select'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_AddAsNew_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_AddAsNew_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_Update_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_Update_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_Ignore_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_Ignore_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_AddAll_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_AddAll_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_AddAll_PromptMessage_Cancel_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_AddAll_PromptMessage_Cancel_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_AddAll_PromptMessage_Ok_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_AddAll_PromptMessage_Ok_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_UpdateAll_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_UpdateAll_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Cancel_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Cancel_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Ok_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Ok_Click'
		},
		SMBAdvisor_Search_Results_Prospect_Add_SyncToCRM_SyncAlert_CrossIcon_Click : {
			title : 'SMBAdvisor_Search Results_Prospect_Add&SyncToCRM_SyncAlert_CrossIcon_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SuccessMessage_ActivityLog_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SuccessMessage_ActivityLog_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SuccessMessage_Ok_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SuccessMessage_Ok_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAsNew_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAsNew_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_Update_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_Update_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_Ignore_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_Ignore_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAll_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAll_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAll_PromptMessage_Cancel_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAll_PromptMessage_Cancel_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAll_PromptMessage_Ok_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_AddAll_PromptMessage_Ok_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_UpdateAll_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_UpdateAll_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Cancel_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Cancel_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Ok_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_UpdateAll_PromptMessage_Ok_Click'
		},
		SMBAdvisor_Profile_SyncToCRM_SyncAlert_CrossIcon_Click : {
			title : 'SMBAdvisor_Profile_SyncToCRM_SyncAlert_CrossIcon_Click'
		},
		SMBAdvisor_Profile_DetailedPage_SyncToCRM_Click : {
			title : 'SMBAdvisor_Profile_DetailedPage_SyncToCRM_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Tab_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Tab_Click'
		},
		SMBAdvisor_SearchResults_ActivityLog_Tab_Click : {
			title : 'SMBAdvisor_SearchResults_ActivityLog_Tab_Click'
		},
		// SMBAdvisor_Profile_ActivityLog_Log_Individual_Checkbox_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_Log_Individual_Checkbox_Click'
		// },
		// SMBAdvisor_Profile_ActivityLog_Log_SelectAll_Checkbox_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_Log_SelectAll_Checkbox_Click'
		// },
		SMBAdvisor_Profile_ActivityLog_UserName_SearchField_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_UserName_SearchField_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Role_SearchField_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Role_SearchField_Click'
		},
		SMBAdvisor_Profile_ActivityLog_ReportingTo_SearchField_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_ReportingTo_SearchField_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Location_SearchField_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Location_SearchField_Click'
		},
		SMBAdvisor_Profile_ActivityLog_SearchedFor_SearchField_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_SearchedFor_SearchField_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Date_SearchField_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Date_SearchField_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Status_SearchDropDown_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Status_SearchDropDown_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Profiles_SyncedFailed_Download_Icon_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Profiles_SyncedFailed_Download_Icon_Click'
		},
		SMBAdvisor_Profile_ActivityLog_Profiles_not_Synced_to_Crm_Download_Icon_Click : {
			title : 'SMBAdvisor_Profile_ActivityLog_Profiles_not_Synced_to_Crm_Download_Icon_Click'
		},
		// SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_Click'
		// },
		// SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_FilteredReport_PromptMessage_Cancel_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_FilteredReport_PromptMessage_Cancel_Click'
		// },
		// SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_FilteredReport_PromptMessage_Download_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_FilteredReport_PromptMessage_Download_Click'
		// },
		// SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_CompleteReport_PromptMessage_Cancel_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_CompleteReport_PromptMessage_Cancel_Click'
		// },
		// SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_CompleteReport_PromptMessage_Download_Click : {
		// 	title : 'SMBAdvisor_Profile_ActivityLog_DownloadActivityReport_CompleteReport_PromptMessage_Download_Click'
		// },

		/*end bulk/batch CRM Sync by Sandeep (23/02/2021)*/

		/* added by sandeep */
				// CZ events
		Advisor_Home_ProspectingQuickStart_Banner_Yes_Click :{
			title :'Advisor_Home_ProspectingQuickStart_Banner_Yes_Click'
		},
		Advisor_Prospect_SingleCheckboxChecked_AddToProfiles_Click :{
			title :'Advisor_Prospect_SingleCheckboxChecked_AddToProfiles_Click'
		},
		Advisor_Prospect_MultipleCheckboxChecked_AddToProfiles_Click :{
			title :'Advisor_Prospect_MultipleCheckboxChecked_AddToProfiles_Click'
		},
		Advisor_import_importTab_importButton_Click :{
			title :'Advisor_import_importTab_importButton_Click'
		},
		Advisor_Settings_autoCompetition_ToggleYes_Click :{
			title:'Advisor_Settings_autoCompetition_ToggleYes_Click'
		},
		Advisor_ProfileRedirected_competition_addCompetitor_Click :{
			title:'Advisor_ProfileRedirected_competition_addCompetitor_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_Click:{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_Click'
		},
		Advisor_Profiles_CheckboxChecked_Download_Download_Click:{
			title:'Advisor_Profiles_CheckboxChecked_Download_Download_Click'
		},	Advisor_ProfileRedirected_detailed_Download_Download_Click:{
			title:'Advisor_ProfileRedirected_detailed_Download_Download_Click'
		},	Advisor_ProfileRedirected_summary_Download_Download_Click:{
			title:'Advisor_ProfileRedirected_summary_Download_Download_Click'
		},	Advisor_ProfileRedirected_competition_Download_Download_Click:{
			title:'Advisor_ProfileRedirected_competition_Download_Download_Click'
		},
		Advisor_Profile_summary_contacts_requestContact_Click:{
			title :'Advisor_Profile_summary_contacts_requestContact_Click'
		},
		Advisor_TopBar_HelpBox_RaiseTicket_Click :{
			title :'Advisor_TopBar_HelpBox_RaiseTicket_Click'
		},
		Advisor_ProfileRedirected_summary_regenerateProfile_Click :{
			title :'Advisor_ProfileRedirected_summary_regenerateProfile_Click'
		},	Advisor_ProfileRedirected_detailed_regenerateProfile_Click :{
			title :'Advisor_ProfileRedirected_detailed_regenerateProfile_Click'
		},	Advisor_ProfileRedirected_competiton_regenerateProfile_Click :{
			title :'Advisor_ProfileRedirected_competiton_regenerateProfile_Click'
		},	Advisor_ProfileRedirected_categoryInsights_regenerateProfile_Click :{
			title :'Advisor_ProfileRedirected_categoryInsights_regenerateProfile_Click'
		},	Advisor_ProfileRedirected_recommendations_regenerateProfile_Click :{
			title :'Advisor_ProfileRedirected_recommendations_regenerateProfile_Click'
		},
		Advisor_search_addedProfiles_profileClick_Detailed_Advertising_GoogleAds_shareemail_Click :{
			title :'Advisor_search_addedProfiles_profileClick_Detailed_Advertising_GoogleAds_share/email_Click'
		},Advisor_search_newProspects_view_Detailed_Advertising_GoogleAds_shareemail_Click :{
			title :'Advisor_search_newProspects_view_Detailed_Advertising_GoogleAds_share/email_Click'
		},Advisor_search_addedProfiles_profileClick_Detailed_Advertising_DisplayAds_shareemail_Click :{
			title :'Advisor_search_addedProfiles_profileClick_Detailed_Advertising_DisplayAds_share/email_Click'
		},Advisor_search_newProspects_view_Detailed_Advertising_DisplayAds_shareemail_Click :{
			title :'Advisor_search_newProspects_view_Detailed_Advertising_DisplayAds_share/email_Click'
		},Advisor_search_addedProfiles_profileClick_Detailed_Advertising_GoogleAds_download_Click :{
			title :'Advisor_search_addedProfiles_profileClick_Detailed_Advertising_GoogleAds_download_Click'
		},Advisor_search_newProspects_view_Detailed_Advertising_GoogleAds_download_Click :{
			title :'Advisor_search_newProspects_view_Detailed_Advertising_GoogleAds_download_Click'
		},Advisor_search_addedProfiles_profileClick_Detailed_Advertising_DisplayAds_download_Click :{
			title :'Advisor_search_addedProfiles_profileClick_Detailed_Advertising_DisplayAds_download_Click'
		},Advisor_search_newProspects_view_Detailed_Advertising_DisplayAds_download_Click :{
			title :'Advisor_search_newProspects_view_Detailed_Advertising_DisplayAds_download_Click'
		},
		Advisor_ProfileRedirected_summary_shareORemail_Click :{
			title :'Advisor_ProfileRedirected_summary_shareORemail_Click'
		},Advisor_ProfileRedirected_detailedTab_shareORemail_Click :{
			title :'Advisor_ProfileRedirected_detailedTab_shareORemail_Click'
		},Advisor_ProfileRedirected_competitionTab_shareORemail_Click :{
			title :'Advisor_ProfileRedirected_competitionTab_shareORemail_Click'
		},Advisor_ProfileRedirected_categoryInsightsTab_shareORemail_Click :{
			title :'Advisor_ProfileRedirected_categoryInsightsTab_shareORemail_Click'
		},Advisor_ProfileRedirected_recommendationsTab_shareORemail_Click :{
			title :'Advisor_ProfileRedirected_recommendationsTab_shareORemail_Click'
		},Advisor_ProfileRedirected_shareORemail_send_Click :{
			title :'Advisor_ProfileRedirected_shareORemail_send_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_editProfile_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_editProfile_Click'
		},
		Advisor_ProfileRedirected_recommendation_editProfile_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_editProfile_Click'
		},
		Advisor_ProfileRedirected_summary_editProfile_Click :{
			title :'Advisor_ProfileRedirected_summary_editProfile_Click'
		},Advisor_ProfileRedirected_detailed_editProfile_Click :{
			title :'Advisor_ProfileRedirected_detailed_editProfile_Click'
		},Advisor_ProfileRedirected_editProfile_done_Click :{
			title :'Advisor_ProfileRedirected_editProfile_done_Click'
		},Advisor_ProfileRedirected_summary_customize_Click :{
			title :'Advisor_ProfileRedirected_summary_customize_Click'
		},Advisor_ProfileRedirected_detailed_customize_Click :{
			title :'Advisor_ProfileRedirected_detailed_customize_Click'
		},Advisor_ProfileRedirected_customize_save_Click :{
			title :'Advisor_ProfileRedirected_customize_save_Click'
		},
		Advisor_Home_BBAcademy_RegisterNow_Click :{
			title :'Advisor_Home_BBAcademy_RegisterNow_Click'
		},
		Advisor_search_filter_find_click :{
			title :"Advisor_search_filter_find_click"
		},
		Advisor_search_filter_save_click :{
			title :"Advisor_search_filter_save_click"
		},
		//new events for summary and audi on 23-03-2021
		Advisor_Profile_summary_categoryInsights_more_Click :{
			title :'Advisor_Profile_summary_categoryInsights_more_Click'
		},
		Advisor_Profile_summary_categoryInsights_hide_Click :{
			title :'Advisor_Profile_summary_categoryInsights_hide_Click'
		},
		Advisor_Profile_summary_categoryInsights_show_Click :{
			title :'Advisor_Profile_summary_categoryInsights_show_Click'
		},Advisor_Profile_summary_categoryInsights_infoIcon_Click :{
			title :'Advisor_Profile_summary_categoryInsights_infoIcon_Click'
		},
		Advisor_Profile_summary_categoryInsights_source_Click :{
			title :'Advisor_Profile_summary_categoryInsights_source_Click'
		},
		Advisor_Profile_summary_googleReview_infoIcon_Click :{
			title :'Advisor_Profile_summary_googleReview_infoIcon_Click'
		},Advisor_Profile_summary_googleReview_hide_Click :{
			title :'Advisor_Profile_summary_googleReview_hide_Click'
		},Advisor_Profile_summary_googleReview_show_Click :{
			title :'Advisor_Profile_summary_googleReview_show_Click'
		},Advisor_Profile_summary_googleReview_review_Click :{
			title :'Advisor_Profile_summary_googleReview_review_Click'
		},Advisor_Profile_summary_recommendations_more_Click :{
			title :'Advisor_Profile_summary_recommendations_more_Click'
		},Advisor_Profile_summary_recommendations_hide_Click :{
			title :'Advisor_Profile_summary_recommendations_hide_Click'
		},
		Advisor_Profile_summary_recommendations_show_Click :{
			title :'Advisor_Profile_summary_recommendations_show_Click'
		},
		Advisor_ProfileRedirected_summaryTab_Click:
		{
			title:'Advisor_ProfileRedirected_summaryTab_Click'
		},
		Advisor_ProfileRedirected_summary_profilePic_Click:
		{
			title:'Advisor_ProfileRedirected_summary_profilePic_Click'
		},
		Advisor_ProfileRedirected_summary_download_Click:
		{
			title:'Advisor_ProfileRedirected_summary_download_Click'
		},
		Advisor_ProfileRedirected_summary_notesContext_Click:
		{
			title:'Advisor_ProfileRedirected_summary_notesContext_Click'
		},
		Advisor_ProfileRedirected_summary_favouriteIcon_Click:
		{
			title:'Advisor_ProfileRedirected_summary_favouriteIcon_Click'
		},
		Advisor_ProfileRedirected_summary_website_Click:
		{
			title:'Advisor_ProfileRedirected_summary_website_Click'
		},
		Advisor_ProfileRedirected_summary_markAccuracy_negative_Click:
		{
			title:'Advisor_ProfileRedirected_summary_markAccuracy_negative_Click'
		},
		Advisor_ProfileRedirected_summary_markAccuracy_positive_Click:
		{
			title:'Advisor_ProfileRedirected_summary_markAccuracy_positive_Click'
		},
		Advisor_Profile_summary_category_Click:
		{
			title:'Advisor_Profile_summary_category_Click'
		},
		Advisor_Profile_summary_productsRecommended_Click:
		{
			title:'Advisor_Profile_summary_productsRecommended_Click'
		},
		Advisor_Profile_summary_recentTrends_infoIcon_Click:
		{
			title:'Advisor_Profile_summary_recentTrends_infoIcon_Click'
		},
		Advisor_Profile_summary_recentTrends_hide_Click:
		{
			title:'Advisor_Profile_summary_recentTrends_hide_Click'
		},
		Advisor_Profile_summary_recentTrends_show_Click:
		{
			title:'Advisor_Profile_summary_recentTrends_show_Click'
		},
		Advisor_Profile_summary_contacts_linkedin_Click:
		{
			title:'Advisor_Profile_summary_contacts_linkedin_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_name_Click:
		{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_name_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_title_Click:
		{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_title_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_emailid_Click:
		{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_emailid_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_linkedin_Click:
		{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_linkedin_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_all_Click:
		{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_all_Click'
		},
		Advisor_Profile_summary_contacts_reportIncorrectData_submit_Click:
		{
			title:'Advisor_Profile_summary_contacts_reportIncorrectData_submit_Click'
		},
		Advisor_Profile_summary_contacts_hide_Click:
		{
			title:'Advisor_Profile_summary_contacts_hide_Click'
		},
		Advisor_Profile_summary_contacts_show_Click:
		{
			title:'Advisor_Profile_summary_contacts_show_Click'
		},
		Advisor_Profile_summary_digitalMarketing_infoIcon_Click:
		{
			title:'Advisor_Profile_summary_digitalMarketing_infoIcon_Click'
		},
		Advisor_Profile_summary_digitalMarketing_more_Click:
		{
			title:'Advisor_Profile_summary_digitalMarketing_more_Click'
		},
		Advisor_Profile_summary_digitalMarketing_viewDetailedAnalysis_Click:
		{
			title:'Advisor_Profile_summary_digitalMarketing_viewDetailedAnalysis_Click'
		},
		Advisor_Profile_summary_digitalMarketing_hide_Click:
		{
			title:'Advisor_Profile_summary_digitalMarketing_hide_Click'
		},
		Advisor_Profile_summary_digitalMarketing_show_Click:
		{
			title:'Advisor_Profile_summary_digitalMarketing_show_Click'
		},
		Advisor_Profile_summary_domainInfo_hide_Click:
		{
			title:'Advisor_Profile_summary_domainInfo_hide_Click'
		},
		Advisor_Profile_summary_domainInfo_show_Click:
		{
			title:'Advisor_Profile_summary_domainInfo_show_Click'
		},
		Advisor_Profile_summary_technology_infoIcon_Click:
		{
			title:'Advisor_Profile_summary_technology_infoIcon_Click'
		},
		Advisor_Profile_summary_technology_hide_Click:
		{
			title:'Advisor_Profile_summary_technology_hide_Click'
		},
		Advisor_Profile_summary_technology_show_Click:
		{
			title:'Advisor_Profile_summary_technology_show_Click'
		},
		Advisor_Profile_summary_competition_infoIcon_Click:
		{
			title:'Advisor_Profile_summary_competition_infoIcon_Click'
		},
		Advisor_Profile_summary_competition_hide_Click:
		{
			title:'Advisor_Profile_summary_competition_hide_Click'
		},
		Advisor_Profile_summary_competition_show_Click:
		{
			title:'Advisor_Profile_summary_competition_show_Click'
		},
		Advisor_Profile_summary_addCompetition_Click:
		{
			title:'Advisor_Profile_summary_addCompetition_Click'
		},
		Advisor_Profile_summary_recommendations_infoIcon_Click:
		{
			title:'Advisor_Profile_summary_recommendations_infoIcon_Click'
		},
		Advisor_Profile_summary_recommendations_source_Click:
		{
			title:'Advisor_Profile_summary_recommendations_source_Click'
		},
		Advisor_Profile_summary_recommendations_arrow_Click:
		{
			title:'Advisor_Profile_summary_recommendations_arrow_Click'
		},
		Advisor_Profile_summary_hr_more_Click:
		{
			title:'Advisor_Profile_summary_hr_more_Click'
		},
		Advisor_Profile_summary_hr_hide_Click:
		{
			title:'Advisor_Profile_summary_hr_hide_Click'
		},
		Advisor_Profile_summary_hr_show_Click:
		{
			title:'Advisor_Profile_summary_hr_show_Click'
		},
		Advisor_Profile_summary_communication_more_Click:
		{
			title:'Advisor_Profile_summary_communication_more_Click'
		},
		Advisor_Profile_summary_communication_hide_Click:
		{
			title:'Advisor_Profile_summary_communication_hide_Click'
		},
		Advisor_Profile_summary_communication_show_Click:
		{
			title:'Advisor_Profile_summary_communication_show_Click'
		},
		Advisor_ProfileRedirected_detailedTab_Click:
		{
			title:'Advisor_ProfileRedirected_detailedTab_Click'
		},
		Advisor_ProfileRedirected_detailed_profilePic_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_profilePic_Click'
		},
		Advisor_ProfileRedirected_detailed_shareORemail_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_shareORemail_Click'
		},
		Advisor_ProfileRedirected_detailed_download_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_download_Click'
		},
		Advisor_ProfileRedirected_detailed_customizeCard_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_customizeCard_Click'
		},
		Advisor_ProfileRedirected_detailed_notesContext_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_notesContext_Click'
		},
		Advisor_ProfileRedirected_detailed_archive_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_archive_Click'
		},
		Advisor_ProfileRedirected_detailed_favouriteIcon_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_favouriteIcon_Click'
		},
		Advisor_ProfileRedirected_detailed_website_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_website_Click'
		},
		Advisor_ProfileRedirected_detailed_expand_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_expand_Click'
		},
		Advisor_ProfileRedirected_detailed_collapse_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_collapse_Click'
		},
		Advisor_ProfileRedirected_detailed_markAccuracy_positive_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_markAccuracy_positive_Click'
		},
		Advisor_ProfileRedirected_detailed_markAccuracy_negative_Click:
		{
			title:'Advisor_ProfileRedirected_detailed_markAccuracy_negative_Click'
		},
		Advisor_Profile_detailed_category_Click:
		{
			title:'Advisor_Profile_detailed_category_Click'
		},
		Advisor_Profile_detailed_productsRecommended_Click:
		{
			title:'Advisor_Profile_detailed_productsRecommended_Click'
		},
		Advisor_Profile_detailed_digitalMarketingTab_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketingTab_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_expand_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_expand_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_collapse_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_collapse_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_Feature_InfoIcon_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_Feature_InfoIcon_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_Feature_expand_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_Feature_expand_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_Feature_collapse_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_Feature_collapse_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_signal_InfoIcon_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_signal_InfoIcon_Click'
		},
		Advisor_Profile_detailed_digitalMarketing_signal_smartlink_Click:
		{
			title:'Advisor_Profile_detailed_digitalMarketing_signal_smartlink_Click'
		},
		Advisor_Profile_detailed_hrTab_Click:
		{
			title:'Advisor_Profile_detailed_hrTab_Click'
		},
		Advisor_Profile_detailed_communicationTab_Click:
		{
			title:'Advisor_Profile_detailed_communicationTab_Click'
		},
		Advisor_Profile_summary_recentTrends_AddedDroppedTab_Click:
		{
			title:'Advisor_Profile_summary_recentTrends_AddedDroppedTab_Click'
		},
		Advisor_ProfileRedirected_summary_archive_Click:
		{
			title:'Advisor_ProfileRedirected_summary_archive_Click'
		},//new events for home advisor
		Advisor_Prospect_Filter_Local_HomeAdvisor_ToggleYes_Click:
		{
          title:'Advisor_Prospect_Filter_Local_HomeAdvisor_ToggleYes_Click'
		},
		Advisor_Prospect_Filter_Local_HomeAdvisor_ToggleNo_Click:
		{
			title:'Advisor_Prospect_Filter_Local_HomeAdvisor_ToggleNo_Click'
		},
		Advisor_Prospect_Filter_Local_HomeAdvisor_Toggle_Neutral_Click:
		{
			title:'Advisor_Prospect_Filter_Local_HomeAdvisor_Toggle_Neutral_Click'
		},
		Advisor_Profile_Filter_Local_HomeAdvisor_ToggleYes_Click:
		{
			title:'Advisor_Profile_Filter_Local_HomeAdvisor_ToggleYes_Click'
		},
		Advisor_Profile_Filter_Local_HomeAdvisor_ToggleNo_Click:
		{
			title:'Advisor_Profile_Filter_Local_HomeAdvisor_ToggleNo_Click'
		},
		Advisor_Profile_Filter_Local_HomeAdvisor_Toggle_Neutral_Click:
		{
			title:'Advisor_Profile_Filter_Local_HomeAdvisor_Toggle_Neutral_Click'
		},//end of events for home advisor
		//new events for advisor
		Advisor_Profile_detailed_LocalBusinessPresence_Listed_Click:
		{
			title:'Advisor_Profile_detailed_LocalBusinessPresence_Listed_Click'
		},
		Advisor_ProfileRedirected_competitionTab_Click:
		{
			title:'Advisor_ProfileRedirected_competitionTab_Click'
		},
		Advisor_ProfileRedirected_competition_profilePic_Click:
		{
			title:'Advisor_ProfileRedirected_competition_profilePic_Click'
		},
		Advisor_ProfileRedirected_competition_editProfile_Click:
		{
			title:'Advisor_ProfileRedirected_competition_editProfile_Click'
		},
		Advisor_ProfileRedirected_competition_regenerateProfile_Click:
		{
			title:'Advisor_ProfileRedirected_competition_regenerateProfile_Click'
		},
		Advisor_ProfileRedirected_competition_shareORemail_Click:
		{
			title:'Advisor_ProfileRedirected_competition_shareORemail_Click'
		},
		Advisor_ProfileRedirected_competition_download_Click:
		{
			title:'Advisor_ProfileRedirected_competition_download_Click'
		},
		// Advisor_ProfileRedirected_competition_addCompetitor_Click:
		// {
		// 	title:'Advisor_ProfileRedirected_competition_addCompetitor_Click'
		// },
		/*Advisor_ProfileRedirected_competition_addCompetitorWindow_location_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_location_Click'
		},
		Advisor_ProfileRedirected_competition_addCompetitorWindow_searchField_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_searchField_Click'
		},
		Advisor_ProfileRedirected_competition_addCompetitorWindow_searchIcon_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_searchIcon_Click'
		},
		Advisor_ProfileRedirected_competition_addCompetitorWindow_relevance_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_relevance_Click'
		},
		Advisor_ProfileRedirected_competition_addCompetitorWindow_profileCheckbox_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_profileCheckbox_Click'
		},*/
		Advisor_ProfileRedirected_competition_addCompetitorWindow_website_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_website_Click'
		},
		// Advisor_ProfileRedirected_competition_addCompetitorWindow_submit_Click:
		// {
		// 	title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_submit_Click'
		// }
		Advisor_ProfileRedirected_competition_addCompetitorWindow_useExternalSource_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_useExternalSource_Click'
		},
		Advisor_ProfileRedirected_competition_addCompetitorWindow_useExternalSourceCheckbox_Click:
		{
			title:'Advisor_ProfileRedirected_competition_addCompetitorWindow_useExternalSourceCheckbox_Click'
		},
		Advisor_ProfileRedirected_competition_notesContext_Click:
		{
			title:'Advisor_ProfileRedirected_competition_notesContext_Click'
		},
		Advisor_ProfileRedirected_competition_archive_Click:
		{
			title:'Advisor_ProfileRedirected_competition_archive_Click'
		},
		Advisor_ProfileRedirected_competition_favouriteIcon_Click:
		{
			title:'Advisor_ProfileRedirected_competition_favouriteIcon_Click'
		},
		Advisor_ProfileRedirected_competition_website_Click:
		{
			title:'Advisor_ProfileRedirected_competition_website_Click'
		},
		// Advisor_ProfileRedirected_competition_expand_Click:
		// {
		// 	title:'Advisor_ProfileRedirected_competition_expand_Click'
		// },
		// Advisor_ProfileRedirected_competition_collapse_Click:
		// {
		// 	title:'Advisor_ProfileRedirected_competition_collapse_Click'
		// }
		Advisor_ProfileRedirected_competition_markAccuracy_positive_Click:
		{
			title:'Advisor_ProfileRedirected_competition_markAccuracy_positive_Click'
		},
		Advisor_ProfileRedirected_competition_markAccuracy_negative_Click:
		{
			title:'Advisor_ProfileRedirected_competition_markAccuracy_negative_Click'
		},
		Advisor_Profile_competition_category_Click:
		{
			title:'Advisor_Profile_competition_category_Click'
		},
		Advisor_Profile_competition_productsRecommended_Click:
		{
			title:'Advisor_Profile_competition_productsRecommended_Click'
		},
		Advisor_Profile_competition_digitalMarketingTab_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketingTab_Click'
		},
		// Advisor_Profile_competition_digitalMarketing_SignalInfoIcon_Click:
		// {
		// 	title:'Advisor_Profile_competition_digitalMarketing_SignalInfoIcon_Click'
		// }
		Advisor_Profile_competition_digitalMarketing_Signal_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_Signal_Click'
		},
		Advisor_Profile_competition_digitalMarketing_Profile_checkbox_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_Profile_checkbox_Click'
		},
		Advisor_Profile_competition_digitalMarketing_Profile_website_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_Profile_website_Click'
		},
		Advisor_Profile_competition_digitalMarketing_Profile_regenerate_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_Profile_regenerate_Click'
		},
		Advisor_Profile_competition_digitalMarketing_CompetitorProfile_checkbox_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_CompetitorProfile_checkbox_Click'
		},
		Advisor_Profile_competition_digitalMarketing_CompetitorProfile_website_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_CompetitorProfile_website_Click'
		},
		Advisor_Profile_competition_digitalMarketing_CompetitorProfile_regenerate_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_CompetitorProfile_regenerate_Click'
		},
		Advisor_Profile_competition_digitalMarketing_CompetitorProfile_convert_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_CompetitorProfile_convert_Click'
		},
		Advisor_Profile_competition_digitalMarketing_CompetitorProfile_delete_Click:
		{
			title:'Advisor_Profile_competition_digitalMarketing_CompetitorProfile_delete_Click'
		},
		Advisor_Profile_competition_hrTab_Click:
		{
			title:'Advisor_Profile_competition_hrTab_Click'
		},
		Advisor_Profile_competition_hr_Profile_checkbox_Click:
		{
			title:'Advisor_Profile_competition_hr_Profile_checkbox_Click'
		},
		Advisor_Profile_competition_hr_Profile_website_Click:
		{
			title:'Advisor_Profile_competition_hr_Profile_website_Click'
		},
		Advisor_Profile_competition_hr_Profile_regenerate_Click:
		{
			title:'Advisor_Profile_competition_hr_Profile_regenerate_Click'
		},
		Advisor_Profile_competition_hr_CompetitorProfile_checkbox_Click:
		{
			title:'Advisor_Profile_competition_hr_CompetitorProfile_checkbox_Click'
		},
		Advisor_Profile_competition_hr_CompetitorProfile_website_Click:
		{
			title:'Advisor_Profile_competition_hr_CompetitorProfile_website_Click'
		},
		Advisor_Profile_competition_hr_CompetitorProfile_regenerate_Click:
		{
			title:'Advisor_Profile_competition_hr_CompetitorProfile_regenerate_Click'
		},
		Advisor_Profile_competition_hr_CompetitorProfile_convert_Click:
		{
			title:'Advisor_Profile_competition_hr_CompetitorProfile_convert_Click'
		},
		Advisor_Profile_competition_hr_CompetitorProfile_delete_Click:
		{
			title:'Advisor_Profile_competition_hr_CompetitorProfile_delete_Click'
		},
		Advisor_Profile_competition_communicationTab_Click:
		{
			title:'Advisor_Profile_competition_communicationTab_Click'
		},
		Advisor_Profile_competition_communication_Profile_website_Click:
		{
			title:'Advisor_Profile_competition_communication_Profile_website_Click'
		},
		Advisor_Profile_competition_communication_Profile_regenerate_Click:
		{
			title:'Advisor_Profile_competition_communication_Profile_regenerate_Click'
		},
		Advisor_Profile_competition_communication_CompetitorProfile_website_Click:
		{
			title:'Advisor_Profile_competition_communication_CompetitorProfile_website_Click'
		},
		Advisor_Profile_competition_communication_CompetitorProfile_regenerate_Click:
		{
			title:'Advisor_Profile_competition_communication_CompetitorProfile_regenerate_Click'
		},
		Advisor_Profile_competition_communication_CompetitorProfile_convert_Click:
		{
			title:'Advisor_Profile_competition_communication_CompetitorProfile_convert_Click'
		},
		Advisor_Profile_competition_communications_CompetitorProfile_delete_Click:
		{
			title:'Advisor_Profile_competition_communications_CompetitorProfile_delete_Click'
		},//advisor new events
		Advisor_ProfileRedirected_categoryInsightsTab_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsightsTab_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_profilePic_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_profilePic_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_shareORemail_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_shareORemail_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_notesContext_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_notesContext_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_archive_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_archive_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_favouriteIcon_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_favouriteIcon_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_website_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_website_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_expand_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_expand_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_collapse_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_collapse_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_markAccuracy_positive_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_markAccuracy_positive_Click'
		},
		Advisor_ProfileRedirected_categoryInsights_markAccuracy_negative_Click:
		{
			title:'Advisor_ProfileRedirected_categoryInsights_markAccuracy_negative_Click'
		},
		Advisor_Profile_categoryInsights_category_Click:
		{
			title:'Advisor_Profile_categoryInsights_category_Click'
		},
		Advisor_Profile_categoryInsights_productsRecommended_Click:
		{
			title:'Advisor_Profile_categoryInsights_productsRecommended_Click'
		},
		Advisor_Profile_categoryInsights_source_Click:
		{
			title:'Advisor_Profile_categoryInsights_source_Click'
		},
		Advisor_Profile_categoryInsights_findLocalProspect_Click:
		{
			title:'Advisor_Profile_categoryInsights_findLocalProspect_Click'
		},
		Advisor_Profile_categoryInsights_goToDigitalMarketing_Click:
		{
			title:'Advisor_Profile_categoryInsights_goToDigitalMarketing_Click'
		},
		Advisor_ProfileRedirected_recommendationTab_Click:
		{
			title:'Advisor_ProfileRedirected_recommendationTab_Click'
		},
		Advisor_ProfileRedirected_recommendation_profilePic_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_profilePic_Click'
		},
		Advisor_ProfileRedirected_recommendation_regenerateProfile_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_regenerateProfile_Click'
		},
		Advisor_ProfileRedirected_recommendation_shareORemail_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_shareORemail_Click'
		},
		Advisor_ProfileRedirected_recommendation_notesContext_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_notesContext_Click'
		},
		Advisor_ProfileRedirected_recommendation_archive_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_archive_Click'
		},
		Advisor_ProfileRedirected_recommendation_favouriteIcon_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_favouriteIcon_Click'
		},
		Advisor_ProfileRedirected_recommendation_website_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_website_Click'
		},
		Advisor_ProfileRedirected_recommendation_expand_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_expand_Click'
		},
		Advisor_ProfileRedirected_recommendation_collapse_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_collapse_Click'
		},
		Advisor_ProfileRedirected_recommendation_markAccuracy_positive_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_markAccuracy_positive_Click'
		},
		Advisor_ProfileRedirected_recommendation_markAccuracy_negative_Click:
		{
			title:'Advisor_ProfileRedirected_recommendation_markAccuracy_negative_Click'
		},
		Advisor_Profile_recommendation_category_Click:
		{
			title:'Advisor_Profile_recommendation_category_Click'
		},
		Advisor_Profile_recommendation_productsRecommended_Click:
		{
			title:'Advisor_Profile_recommendation_productsRecommended_Click'
		},
		Advisor_Profile_recommendation_source_Click:
		{
			title:'Advisor_Profile_recommendation_source_Click'
		},
		Advisor_Profile_recommendation_like_Click:
		{
			title:'Advisor_Profile_recommendation_like_Click'
		},
		Advisor_Profile_recommendation_dislike_Click:
		{
			title:'Advisor_Profile_recommendation_dislike_Click'
		},
		Advisor_Profile_recommendation_arrow_Click:
		{
			title:'Advisor_Profile_recommendation_arrow_Click'
		},
		Advisor_NavigationBar_ImportIcon_Click:
		{
			title:'Advisor_NavigationBar_ImportIcon_Click'
		},
		Advisor_import_activityLogTab_Click:
		{
			title:'Advisor_import_activityLogTab_Click'
		},
		Advisor_import_importTab_Click:
		{
			title:'Advisor_import_importTab_Click'
		},
		Advisor_import_activityLog_file_Click:
		{
			title:'Advisor_import_activityLog_file_Click'
		},
		Advisor_import_activityLog_downloadUploadedfile_Click:
		{
			title:'Advisor_import_activityLog_downloadUploadedfile_Click'
		},
		Advisor_import_activityLog_downloadErrorFile_Click:
		{
			title:'Advisor_import_activityLog_downloadErrorFile_Click'
		},
		Advisor_import_ViewactivityLogLink_Click:
		{
			title:'Advisor_import_ViewactivityLogLink_Click'
		},
		Advisor_import_chooseFile_Click:
		{
			title:'Advisor_import_chooseFile_Click'
		},
		Advisor_import_mapFields_previous_Click:
		{
			title:'Advisor_import_mapFields_previous_Click'
		},
		Advisor_import_upload_next_Click:
		{
			title:'Advisor_import_upload_next_Click'
		},
		Advisor_import_mapFields_fieldClick_Click:
		{
			title:'Advisor_import_mapFields_fieldClick_Click'
		},
		Advisor_import_import_previous_Click:
		{
			title:'Advisor_import_import_previous_Click'
		},
		Advisor_import_mapFields_next_Click:
		{
			title:'Advisor_import_mapFields_next_Click'
		},
		Advisor_import_import_next_Click:
		{
			title:'Advisor_import_import_next_Click'
		},

		Advisor_import_duplicate_previous_Click:
		{
			title:'Advisor_import_duplicate_previous_Click'
		},
		Advisor_import_duplicate_import_Click:
		{
			title:'Advisor_import_duplicate_import_Click'
		},
		Advisor_import_duplicate_doNotSync_Click:
		{
			title:'Advisor_import_duplicate_doNotSync_Click'
		},
		Advisor_import_duplicate_update_Click:
		{
			title:'Advisor_import_duplicate_update_Click'
		},
		Advisor_import_duplicate_addAsNew_Click:
		{
			title:'Advisor_import_duplicate_addAsNew_Click'
		},
		Advisor_Prospect_Filter_Lock_lock_Click :{
			title : 'Advisor_Prospect_Filter_Lock_lock_Click'
		},
		Advisor_Prospect_Filter_Lock_Unlock_Click :{
			title : 'Advisor_Prospect_Filter_Lock_Unlock_Click'
		},
		Advisor_Prospect_Filter_covid19_info_Click :{
			title :'Advisor_Prospect_Filter_covid19_info_Click'
		},
		Advisor_Prospect_Filter_locationBox_Click :{
			title :'Advisor_Prospect_Filter_locationBox_Click'
		},
		Advisor_Prospect_Filter_remoteOnly_toggleNeutral_Click :{
			title :'Advisor_Prospect_Filter_remoteOnly_toggleNeutral_Click'
		},
		Advisor_Prospect_Filter_operationalStatus_toggleNeutral_Click :{
			title :'Advisor_Prospect_Filter_operationalStatus_toggleNeutral_Click'
		},
		Advisor_Prospect_Filter_website_toggleNeutral_Click :{
			title :'Advisor_Prospect_Filter_website_toggleNeutral_Click'
		},
		Advisor_SearchIcon_Click : {
			title : 'Advisor_SearchIcon_Click'
		},
		Advisor_Search_Filter_Lock_Unlock_Click : {
			title : 'Advisor_Search_Filter_Lock_Unlock_Click'
		},Advisor_Search_Filter_Lock_lock_Click : {
			title : 'Advisor_Search_Filter_Lock_lock_Click'
		},
		Advisor_Search_Filter_covid19_info_Click :{
			title : 'Advisor_Search_Filter_covid19_info_Click'
		},
		Advisor_Search_Filter_locationBox_Click :{
			title : 'Advisor_Search_Filter_locationBox_Click'
		},
		Advisor_Search_Filter_remoteOnly_toggleNeutral_Click :{
			title :'Advisor_Search_Filter_remoteOnly_toggleNeutral_Click'
		},
		Advisor_Search_Filter_operationalStatus_toggleNeutral_Click:{
			title :'Advisor_Search_Filter_operationalStatus_toggleNeutral_Click'
		},
		Advisor_Search_Filter_category_searchBox_Click :{
			title :'Advisor_Search_Filter_category_searchBox_Click'
		},
		Advisor_Prospect_Filter_category_searchBox_Click:{
			title : 'Advisor_Prospect_Filter_category_searchBox_Click'
		},
		Advisor_Prospect_Filter_technologies_covid19_toggleYes_Click :{
			title :'Advisor_Prospect_Filter_technologies_covid19_toggleYes_Click'
		},
		Advisor_Search_Filter_technologies_toggleYes_Click :{
			title : 'Advisor_Search_Filter_technologies_toggleYes_Click'
		},
		Advisor_Search_Filter_technologies_toggleNo_Click :{
			title : 'Advisor_Search_Filter_technologies_toggleNo_Click'
		},
		Advisor_Prospect_Filter_technologies_toggleNo_Click :{
			title :'Advisor_Prospect_Filter_technologies_toggleNo_Click'
		},
		Advisor_Prospect_Filter_technologies_toggleYes_Click :{
			title :'Advisor_Prospect_Filter_technologies_toggleYes_Click'
		},
	}

	readonly event_specific_properties = {
		stage: 'stage',
		user_lat: 'user_lat',
		user_lng: 'user_lng',
		location_title: 'location_title',
		page: 'Page',
		page_key: 'page_key',
		category_id: 'category_id',
		category_title: 'category_title',
		product_id: 'product_id',
		product_title: 'product_title',
		listing_id: 'listing_id',
		competitor_id: 'competitor_id',
		is_listing_specific: 'is_listing_specific',
		section_key: 'section_key',
		element_key: 'element_key',
		question_id: 'question_id',
		question_section: 'question_section',
		username: 'username',
		card_key: 'card_key',
		score_range: 'score_range',
		profiles_count: 'profiles_count',
		is_card_expanded: 'is_card_expanded',
		is_section_expanded: 'is_section_expanded',
		element_presence: 'element_presence',
		month: 'month',
		prospect_id: 'prospect_id',
		search_query: 'search_query',
		fp_id: 'fp_id',
		score: 'score',
		radius_picked: 'radius_picked',
		current_radius: 'current_radius',
		filter_array: 'filter_array',
		operator: 'operator',
		value: 'value',
		tab: 'tab',
		search_keyword: 'search_keyword',
		search_results_count: 'search_results_count',
		from_value: 'from_value',
		to_value: 'to_value',
		element_title: 'element_title',
		sub_section_key: 'sub_section_key',
		element_id: 'element_id',
		category_classification: 'category_classification',
		selected_state: 'selected_state',
		is_selected: 'is_selected',
		section_operator: 'section_operator',
		url: 'url',
		search_title: 'search_title',
		search_desc: 'search_desc',
		saved_search_id: 'saved_search_id',
		selected_records: 'selected_records',
		gameplan_id: 'gameplan_id',
		gameplan_map_id: 'gameplan_map_id',
		record_id: 'record_id',
		attachment_name: 'attachment_name',
		attachment_key: 'attachment_key',
		attachments: 'attachments',
		subject: 'subject',
		emails: 'email(s)',
		email_subject: 'email_subject',
		page_referrer: 'page_referrer',
		instance_name: 'instance_name',
		function_source: 'function_source',
		instance_recent_searches: 'instance_recent_searches',
		recent_searches: 'recent_searches',
		top_searches: 'top_searches',
		top_searched_categories: 'top_searched_categories',
		saved_search_card: 'saved_search_card',
		instance_top_searches: 'instance_top_searches',
		instance_top_searched_categories: 'instance_top_searched_categories',
		matched_count: 'matched_count',
		view_mode: 'view_mode',
		button_type: 'button_type',
		error_rate_percentage: 'error_rate_percentage',
		element_value: 'element_value',
		partner_id: 'partner_id',
		company_id: 'company_id',
		company_name: 'company_name',
		prev_company_id: 'prev_company_id',
		prev_company_name: 'prev_company_name',
		model_type: 'model_type',
		from_date: 'from_date',
		to_date: 'to_date',
		profile_id: 'profile_id',
		sub_element_title: 'sub_element_title',
		keyword_scope: 'keyword_scope',
		location: 'location',
		priority: 'priority',

		covid_info_icon: 'covid_info_icon',
		role_value: 'role_value',
		ele_key: 'ele_key',
	}
}

