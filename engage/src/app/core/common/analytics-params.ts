import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class AnalyticsParams {

	readonly pages = {
		home: {
			"key": "home",
			"title": "Home"
		},
		profiles_list: {
			"key": "profiles_list",
			"title": "Profiles"
		},
		search_see_all: {
			"key": "search_see_all",
			"title": "See All"
		},
		sync_to_fb: {
			"key": "sync_to_fb",
			"title": "Sync To Facebook"
		},
		category_coverage: {
			"key": "category_coverage",
			"title": "Category Coverage"
		},
		sync_to_crm: {
			"key": "sync_to_crm",
			"title": "Sync To CRM"
		},
		activity_log: {
			"key": "activity_log",
			"title": "Activity Log"
		},
		global_confirmation: {
			"key": "global_confirmation",
			"title": "Global Confirmation"
		},
		search: {
			"key": "search",
			"title": "Search"
		},
		search_results: {
			"key": "search_results",
			"title": "Search Results"
		},
		find_prospects:
			{
				"key": "find_prospects",
				"title": "Find Prospects"
			},
		external_search:
			{
				"key": "external_search",
				"title": "External Search"
			},
		help: {
			"key": "help",
			"title": "Help"
		},
		new_support_ticket: {
			"key": "new_support_ticket",
			"title": "Raise a Ticket"
		},
		integration:
			{
				"key": "navigation_integrations",
				"title": "Integrations"
			},
		support_ticket_list: {
			"key": "support_ticket_list",
			"title": "Support Ticket History"
		},
		user_profile: {
			"key": "user_profile",
			"title": "User Profile"
		},
		user_preferences: {
			"key": "user_preferences",
			"title": "Preferences"
		},
		profile_summary: {
			"key": "profile_summary",
			"title": "Profile Summary"
		},
		audit: {
			"key": "audit",
			"title": "Audit"
		},
		game_plan: {
			"key": "game_plan",
			"title": "Game Plan"
		},
		competition: {
			"key": "competition",
			"title": "Competition"
		},
		category_insights: {
			"key": "category_insights",
			"title": "Category Insights"
		},
		edit_listing: {
			"key": "edit_listing",
			"title": "Edit Profile"
		},
		compose_email: {
			"key": "compose_email",
			"title": "Email"
		},
		email_activity_list: {
			"key": "email_activity_list",
			"title": "Email Log"
		},
		download_dialog_page: {
			"key": "download_dialog_page",
			"title": "Download Report"
		},
		add_info_dialog_page: {
			"key": "add_info_dialog_page",
			"title": "Additional Information Report"
		},
		credit_card_info_dialog_page: {
			"key": "credit_card_info_dialog_page",
			"title": "Credit Card Information Report"
		},
		notes: {
			"key": "notes",
			"title": "Notes"
		},
		profile_context: {
			"key": "profile_context",
			"title": "Context"
		},
		add_profile_manual: {
			"key": "add_profile_manual",
			"title": "Add Profile"
		},
		mobile_websnap: {
			"key": "mobile_websnap",
			"title": "Mobile Friendly"
		},
		responsive_design: {
			"key": "responsive_design",
			"title": "Responsive Designs"
		},
		google_adwords: {
			"key": "google_adwords",
			"title": "Google Adwords"
		},
		nap_error_rate: {
			"key": "nap_error_rate",
			"title": "NAP"
		},
		external_search_results:
			{
				"key": "external_search_results",
				"title": "External Search Results"
			},
		saved_searches:
			{
				"key": "saved_searches",
				"title": "Saved Searches"
			},
		display_advertising:
			{
				"key": "display_advertising",
				"title": "Display Ads"
			},
		mobile:
			{
				"key": "mobile",
				"title": "mobile"
			},
		native:
			{
				"key": "native",
				"title": "native"
			},
		display:
			{
				"key": "display",
				"title": "display"
			},
		user_onboarding:
			{
				"key": "user_onboarding",
				"title": "User Onboarding"
			},
		caching_enabled:
			{
				"key": "caching_enabled",
				"title": "Caching Enabled"
			},
		prioritize_visible_content:
			{
				"key": "prioritize_visible_content",
				"title": "Prioritize Visible Content"
			},
		image_size_optimization:
			{
				"key": "image_size_optimization",
				"title": "Image Size Optimization"
			},
		file_compression:
			{
				"key": "file_compression",
				"title": "File Compression"
			},
		facebook_business_page_details:
			{
				"key": "facebook_business_page_details",
				"title": "Facebook Business Page"
			},
		twitter_business_account_details:
			{
				"key": "twitter_business_account_details",
				"title": "Twitter Business Account"
			},
		google_my_business_details:
			{
				"key": "google_my_business_details",
				"title": "Google My Business"
			},
		facebook_posts:
			{
				"key": "facebook_posts",
				"title": "Facebook Posts"
			},
		tweet_count:
			{
				"key": "tweet_count",
				"title": "Tweet Count"
			},
		googleplus_posts:
			{
				"key": "googleplus_posts",
				"title": "Google+ Posts"
			},
		negative:
			{
				"key": "negative",
				"title": "Negative"
			},
		neutral:
			{
				"key": "neutral",
				"title": "Neutral"
			},
		positive:
			{
				"key": "positive",
				"title": "Positive"
			},
		mentions_detail_page:
			{
				"key": "mentions_detail_page",
				"title": "Mentions Detail Page"
			},
		reviews_detail_page:
			{
				"key": "reviews_detail_page",
				"title": "Reviews Detail Page"
			},
		login:
			{
				"key": "login",
				"title": "Login"
			},
		settings:
			{
				"key": "Settings",
				"title": "settings"
			},
		logout:
			{
				"key": "Logout",
				"title": "logout"
			},
		filter_summary:
			{
				"key": "filter_summary",
				"title": "Filter Summary"
			},
		agreement:
			{
				"key": "agreement",
				"title": "Agreement"
			},
		good_to_know:
			{
				"key": "good_to_now",
				"title": "Good To Know"
			},
		add_competitor:
			{
				"key": "add_competitor",
				"title": "Add Competitor"
			},
		reports:
			{
				"key": "navigation_reports",
				"title": "Reports"
			},
		feature_focus_popup:
			{
				"key": "feature_focus_popup",
				"title": "Feature Focus Popup"
			},
		package_selection_popup:
			{
				"key": "package_selection_popup",
				"title": "Package Selection Popup"
			},	import: {
				"key": "import",
				"title": "Import"
			},

		// Added by Akhil Kumar E (3227) on 07-06-2019 for Buzzboard Signup Process
		profiles: {
			"key": "profile_page",
			"title": "Profiles"
		},
		billing: {
			"key": "billing_page",
			"title": "Advisor Billing Page"
		},
		user_management: {
			"key": "user_management",
			"title": "User Management Page"
		},
		billing_tab: {
			"key": "billing_tab",
			"title": "Stream Billing Page"
		},
		stream_dashboard: {
			"key": "stream_dashboard",
			"title": "Stream Dashboard Page"
		},
		package_selection: {
			"key": "package_selection",
			"title": "Package Selection Popup Page"
		},
		concierge:{
			"key":"concierge",
			"title":"Concierge"
		},
		pinterest_business_account:
		{
			"key": "pinterest_business_account",
			"title": "Pinterest Business Account"
		},
		instagram_business_account:
		{
			"key": "instagram_business_account",
			"title": "Instagram Business Account"
		}

	}

	readonly page_specific_properties = {
		page_key: 'page_key',
		page_referrer: 'page_referrer',
		function_source: 'function_source',
		search_query: 'search_query',
		keyword: 'keyword',
		data_source: 'data_source',
		listing_id: 'listing_id',
		saved_search_id: 'saved_search_id',
		is_listing_specific: 'is_listing_specific',
		is_contextual_export: 'is_contextual_export',
		pdf_type: 'pdf_type',
		element_presence: 'element_presence',
		ad_spend: 'ad_spend',
		error_rate_percentage: 'error_rate_percentage',
		saved_search_page: 'saved_search_page',
		saved_search_card: 'saved_search_card',
		sub_page: 'sub_page',
		competitor_id: 'competitor_id',
		element_key: 'element_key',
		section_key: 'section_key',
		page: 'Page',
		login_mode: 'login_mode',
		username: 'username',
		fb_page_url: 'fb_page_url',
		twitter_page_url: 'twitter_page_url',
		gmb_page_url: 'gmb_page_url',
		fb_posts_count: 'fb_posts_count',
		fb_likes: 'fb_likes',
		fb_checkins: 'fb_checkins',
		tweets_count: 'tweets_count',
		followers_count: 'followers_count',
		element_value: 'element_value',
		category_id: 'category_id',
		menu: 'menu',
		app_logo: 'app_logo',
		filter_array: 'filter_array',
		instance_recent_searches: 'instance_recent_searches',
		recent_searches: 'recent_searches',
		top_searches: 'top_searches',
		top_searched_categories: 'top_searched_categories',
		instance_top_searches: 'instance_top_searches',
		instance_top_searched_categories: 'instance_top_searched_categories'
	}

}
