# Changelog

## 6.2.2 (2024-10-24)
* Update "Fix book process datepicker styling" styles to latest version
* Updated "Tested up to" version to 6.7
* If package in a contact form is required, don't add an empty option

## 6.2.1 (2024-09-13)
* Fix warning with Elementor book process widget
* Update Dutch translation

## 6.2.0 (2024-07-29)
* Added a book process widget for Elementor
* Improve error message when "id" is set, but empty
* Plugin now requires PHP 7.4 or higher

## 6.1.6 (2024-07-18)
* Fix for multi-day packages where the last line has no end time
* Fix wrongful error after clearing cache

## 6.1.5 (2024-07-16)
* Fix programme of multi-day package

## 6.1.4 (2024-07-15)
* Fix duration of multi-day package
* Updated "Tested up to" version to 6.6
* Plugin now requires WP 6.4 or higher

## 6.1.3 (2024-05-27)
* Show error if redirect is set but invalid
* Small technical update

## 6.1.2 (2024-05-06)
* **No functional changes compared to 6.1.1**
* Small technical updates

## 6.1.1 (2024-04-02)
* Fix issue with "Fix datepicker" styling
* Include styling fix for checkboxes/radio buttons in contact forms

## 6.1.0 (2024-03-11)
* Update "Fix book process datepicker styling" styles to latest version
* Give error when trying to show information of a package that does not exist or may not be presented on a website
* Minor admin CSS update
* Removed script for very old browsers
* Updated "Tested up to" version to 6.5
* Plugin now requires PHP 7.3 or higher
* Plugin now requires WP 6.3 or higher

## 6.0.6 (2024-02-20)
* Fix "Failed to initialize plugin" error in Elementor

## 6.0.5 (2024-01-19)
* Fixed not being able to add a contact form in classic editor

## 6.0.4 (2024-01-16)
* Remove confusing circle around today's date in a book process

## 6.0.3 (2023-12-21)
* Fix checkbox without explanation when adding book process shortcode

## 6.0.2 (2023-12-14)
* Add a few more German translations

## 6.0.1 (2023-11-27)
* Fix warning when using PHP 8.2+

## 6.0.0 (2023-11-07)
* Removed support for Composer Installers
* Updated "Tested up to" version to 6.4

## 5.5.2 (2023-08-15)
* **No functional changes compared to 5.5.1**
* Updated "Tested up to" version to 6.3
* **Deprecation notice**: we plan on removing support for Composer Installers in version 6.0 of the plugin. Please let us know if you use this to install our plugin!

## 5.5.1 (2023-06-27)
* Fix "previous/next month" not being visible in a book process when using Elementor

## 5.5.0 (2023-05-22)
* Make online booking of packages look better on narrow pages on large screens (i.e. desktop)
* Gutenberg contact form widget: properly show allowed packages
* Add option to fix BP date picker styling
* Plugin now requires PHP 7.2 or higher

## 5.4.0 (2023-05-01)
* Thank-you page list is now better split into pages and posts
* "Basic theme" is now the default instead of "No theme"
* Disabled displaying errors in WP debug mode
* Fix shortcode example for book process initial value

## 5.3.1 (2023-03-14)
* Fix GA4 events not being sent on book process thank-you page

## 5.3.0 (2023-02-27)
* Allow initial value in first widget of a book process, when the first widget is "package selection".
* Seamless online booking integration: prevent half filled months in date selection

## 5.2.2 (2023-01-30)
* Time fields in contact form was limited to steps of 5 minutes, but browser UI didn't take this into account. Time fields are no longer limited to 5 minute intervals.

## 5.2.1 (2022-11-08)
* Fix crash when using shortcodes in the wrong way

## 5.2.0 (2022-11-08)
* It is now possible to integrate multiple book processes on one page

## 5.1.8 (2022-11-07)
* Fix order of loading book process CSS, fixes specificity issues

## 5.1.7 (2022-11-01)
* Handle book process themes differently, because of an update in Recras

## 5.1.6 (2022-10-28)
* Book processes styling update

## 5.1.5 (2022-10-20)
* Book process: fix date picker button styling

## 5.1.4 (2022-10-07)
* Voucher sales no longer shows error messages inline, but after the form

## 5.1.3 (2022-08-30)
* Improve book process styling

## 5.1.2 (2022-07-25)
* Seamless online booking integration: Fix entering DD-MM-YYYY dates by hand

## 5.1.1 (2022-07-18)
* Fix old online booking in an iframe

## 5.1.0 (2022-07-05)
* "Theme for online booking" has been renamed to "Theme for Recras integrations" and now also applies to contact forms
* Fix error with online booking iframe
* Fix green buttons in blue/red themes

## 5.0.7 (2022-06-27)
* Seamless online booking integration: number of people on a package line was used as minimum quantity. This has been fixed

## 5.0.6 (2022-06-22)
* Fix crash when showing the list of vouchers for the voucher sales module

## 5.0.5 (2022-06-20)
* Fix showing a list of vouchers for the voucher sales module

## 5.0.4 (2022-06-17)
* Fix Gutenberg toggles not working in some cases

## 5.0.3 (2022-06-16)
* Fix fetching pages/posts for thank-you page in edge cases

## 5.0.2 (2022-06-13)
* Fix error when using "Image URL" of a package without image
* Add "Products" section to documentation/shortcode pages
* Fix a small documentation error on the shortcode page

## 5.0.1 (2022-05-17)
* Fix error when using "Image URL" of a product without image

## 5.0.0 (2022-05-16)
**Major release** Please read the following changes carefully:

* Seamless online booking integration:
  * Fix GA4 events
  * Support for Google Analytics v2 has been dropped
  * Support for Internet Explorer and old Edge (12-15) has been dropped
* Plugin now requires PHP 7.1 or higher

## 4.8.2 (2022-04-25)
* Book processes: update styling for empty inputs

## 4.8.1 (2022-04-04)
* Fix loading of book processes on some sites

## 4.8.0 (2022-04-04)
* Seamless online booking integration: add support for GA4
* Update themes to style the new capacity info in "product with time" blocks in a book process

## 4.7.10 (2022-03-21)
* Fetching thank-you pages is a lot faster now
* Show "Loading data" message while fetching thank-you pages

## 4.7.9 (2022-03-18)
* The changes made in 4.7.7 didn't work properly. Dropdowns now show all pages/posts.

## 4.7.8 (2022-03-17)
* Make default settings work properly

## 4.7.7 (2022-03-03)
* Dropdowns for "Thank-you page" showed 100 pages/posts. This has been increased to 250 of each.

## 4.7.6
* Not released due to an error

## 4.7.5 (2021-12-17)
* Fix page crashing when trying to show the duration of a package where the last line has no end time

## 4.7.4 (2021-12-16)
* Seamless online booking integration: change value of "BuyInProgress" events from package/template ID (bookings/vouchers, respectively) to total price

## 4.7.3 (2021-12-08)
* Fix wrong page width when using an online booking theme

## 4.7.2 (2021-12-08)
* Fix page crashing when trying to show the programme of a multi-day package where the last line has no end time
* Small styling update for book process calendar

## 4.7.1 (2021-12-03)
* Fix page crashing when trying to show the duration of a package that does not exist

## 4.7.0 (2021-11-29)
* Fix "Class not found" error when using Composer in a theme
* Update themes for use in book processes and add two new themes

## 4.6.5 (2021-11-15)
* Clearing cache didn't delete book process cache - fixed

## 4.6.4 (2021-11-03)
* Fix book process not loading when using it from a widget or custom field

## 4.6.3 (2021-10-25)
* Fix PHP 8.0 compatibility

## 4.6.2 (2021-10-15)
* Fix book process not loading when using the Gutenberg block instead of the shortcode

## 4.6.1 (2021-10-13)
* Prevent JavaScript error on pages without a book process

## 4.6.0 (2021-10-11)
* Book processes can now be integrated through the plugin!
* Seamless online booking integration: Fixed slowness after clicking required checkboxes a few times

## 4.5.1 (2021-10-06)
* Seamless online booking integration: Replace alerts with inline messages
* Seamless online booking integration: Make redirect without Mollie more robust
* Fix default selected country in contact forms

## 4.5.0 (2021-08-17)
* The "Term for number of vouchers" is now used during voucher sales

## 4.4.0 (2021-07-05)
* Add option to hide voucher sale quantity (defaults to 1)
* Add option to hide discount field during online booking
* Seamless online booking integration: pressing Enter in the amounts form sometimes broke the form

## 4.3.1 (2021-06-29)
* Seamless online booking integration: Fix discount code with prefilled date

## 4.3.0 (2021-05-27)
* Seamless online booking integration: Swedish translation is now available

## 4.2.2 (2021-04-07)
* Setting "package_list" parameter in the online booking shortcode sometimes wasn't working properly - fixed

## 4.2.1 (2021-03-24)
* Fixed default country for contact forms used during online booking

## 4.2.0 (2021-03-17)
* Add localised country list (in contact forms) when the WordPress language is set to Swedish
* Fix default country for contact forms when the WordPress language is set to one of the following: Dutch (Belgium), English (Ireland), German (Austria)

## 4.1.8 (2021-03-16)
* Fix empty package list after selecting and deselecting a package during online booking

## 4.1.7 (2021-03-08)
* Seamless online booking integration: allow dates in the past for "relation extra field"

## 4.1.6 (2021-02-18)
* Shortcode documentation: fix wrong example code & clarify option

## 4.1.5 (2021-01-20)
* Fix date picker for "extra fields date type" in a contact form

## 4.1.4 (2021-01-08)
* Seamless online booking integration: check if a discount is still valid after changing the date

## 4.1.3 (2020-12-23)
* Fix potential conflict causing Gutenberg blocks not to load

## 4.1.2 (2020-12-23)
* Fix potential conflict causing Gutenberg blocks not to load

## 4.1.1 (2020-12-14)
* Seamless online booking integration: when a list of packages to show is given, don't show all of them after resetting package selection

## 4.1.0 (2020-12-07)
* Fix potential conflict causing Gutenberg blocks not to load
* Simplify clearing the Recras cache
* Enable multiple package selection in classic (non-Gutenberg) editor

## 4.0.2 (2020-08-18)
* Fix max length of various contact form fields

## 4.0.1 (2020-08-05)
* A message has been added to online booking when the selected date no longer has available time slots. This can occur when the availability cache is enabled.

## 4.0.0 (2020-07-30)
* Allow clearing of non-required radio buttons. Since this adds a button to the list which may require styling, we consider this a breaking change.
* Required checkboxes now notify you before sending the form
* Small styling fixes for WP 5.5

## 3.6.2 (2020-06-30)
* Fix German "Voucher applied" translation during online booking

## 3.6.1 (2020-06-22)
* Auto-scrolling to online booking form didn't work properly in all cases - disabled for now
* Fix "window.ga.getAll is not a function" error in Firefox when Google Analytics integration is enabled

## 3.6.0 (2020-06-11)
* Handle extra customer fields in contact forms
* Contact forms weren't handling countries - fixed
* Clearing "package" setting in a contact form sometimes gave an error - fixed

## 3.5.1 (2020-06-09)
* Update integration library: fix checking discount codes containing "special" characters, such as `#`
* Add shortcode documentation page

## 3.5.0 (2020-05-26)
* Allow pre-filling of date and time of online booking
* Update integration library:
  - better calendar alignment on small screens
  - fix attachments not being visible initially when pre-filling amounts
* Fix a Dutch typo

## 3.4.5 (2020-05-15)
* Update integration library: prevent users submitting a form twice

## 3.4.4 (2020-05-11)
* "Thank you-pages" only showed 10 pages/posts. This has been increased to 100 of each.
* "Thank you-pages" are now shown alphabetically
* Fix potential conflict with React

## 3.4.3 (2020-05-06)
* Small styling adjustments for "Basic theme" and "Recras Blue" themes

## 3.4.2 (2020-04-24)
* Fix contact form placeholders generating invalid HTML
* Email/Telephone fields in contact forms didn't get proper field type - fixed
* Improve accessibility and styling of required field labels

## 3.4.1 (2020-04-16)
* Updated German translations, courtesy of Wiljon Bolten
* Update integration library: use minimum quantity of a line, if it is set

## 3.4.0 (2020-03-03)
* Contact forms: prevent entering a booking date in the past
* Update integration library: include amount in 'RedirectToPayment' events sent to Google Analytics

## 3.3.4 (2020-02-17)
* Update online booking library version: limit buying vouchers to 100

## 3.3.3 (2020-02-04)
* Update online booking library version: update event sending for Google Analytics integrated through Google Tag Manager

## 3.3.2 (2020-02-03)
* Update online booking library version: fix amount inputs in Firefox

## 3.3.1 (2020-01-30)
* Update online booking library version: update event sending for Google Analytics

## 3.3.0 (2020-01-23)
* Update online booking library version:
  - Don't fetch available days when no products have been selected
  - Add missing error message for minimum amount
  - Recheck vouchers when changing product amounts
  - Improve interaction (particularly on mobile)

## 3.2.2 (2020-01-07)
* Fix pre-filling amounts form

## 3.2.1 (2019-12-18)
* Update online booking library version: fix error when trying to book a product that has no material

## 3.2.0 (2019-12-09)
* Update online booking library version: show error when input is higher than allowed
* It is now possible to show a selection of packages during online booking

## 3.1.2 (2019-11-19)
* Support pre-filling package in contact forms using GET parameter "package"
* Fix layout of contact form when presented as table without labels

## 3.1.1 (2019-11-14)
* Fix whitespace in online booking/voucher sales causing problems in edge cases
* Update online booking library version: this fixes 'require X per Y' requirements (instead of just 1 per Y)
* Fix "Error: no ID set" when only having a single contact form/package/product/voucher template in Gutenberg blocks

## 3.1.0 (2019-11-12)
* Improve online booking styling in Internet Explorer
* When a contact form has a required package field, and there is only one package, pre-fill it
* Support pre-filling package in online booking using GET parameter "package"

## 3.0.3 (2019-11-11)
* Defer loading of JS polyfill & JS library
* Improve product loading & add info text when no/not all products are found

## 3.0.2 (2019-10-16)
* Fix duration and programme of some packages

## 3.0.1 (2019-10-10)
* Packages in contact forms use internal name instead of display name - fixed

## 3.0.0 (2019-10-08)
* Include widget previews for WordPress 5.3
* Online booking theme didn't set the version properly - fixed
* Update online booking library version:
  - Show discount fields straight from the start, not after entering date
  - Styling adjustment
  - Fix position of styling in the `head`, making overriding styles easier
  - Fix checking discount codes/vouchers
* Improve online booking styling in Edge
* Small online booking styling fixes/changes in both integrated themes

## 2.4.9 (2019-08-28)
* Make readme shorter and move documentation to page within WordPress
* Update online booking library version. This adds a small header to the quantity form and placeholders for its inputs
* Small styling improvements for online booking themes

## 2.4.8 (2019-07-31)
* Make plugin more robust when no Recras name has been set yet
* Small accessibility improvement

## 2.4.7 (2019-06-24)
* Make time input increase/decrease time in steps of 5 minutes
* Clarify online booking methods

## 2.4.6 (2019-05-29)
* Update online booking library version. This fixes new online booking in IE when invalid tags are used in online booking texts.
  - This shouldn't affect most people, most notably it caused problems when using the Google Analytics domain linker.

## 2.4.5 (2019-05-28)
* Fix for package duration/programme not showing in some edge cases

## 2.4.4 (2019-05-22)
* Update online booking library version. This fixes the availability check for packages with "booking size" in some edge cases

## 2.4.3 (2019-05-14)
* Fix for empty non-required "booking - package" field in contact forms

## 2.4.2 (2019-05-06)
* Not selecting a pre-filled package with new online booking was broken - fixed
* Add info messages for packages not showing up

## 2.4.1 (2019-05-06)
* Styling fix for "Recras Blue" theme
* Fix Gutenberg translations

## 2.4.0 (2019-04-30)
* Date/Time input update:
  - Localise date/time placeholders
  - Remove time picker
  - Replace date picker (saves over 110 kB, 1 DNS request, and 4 HTTP requests)
* Add some German translations
* Add ability to show voucher information

## 2.3.9 (2019-04-23)
* Update online booking library version. This fixed "customer type" fields in contact forms used during online bookings.

## 2.3.8 (2019-04-19)
* Update online booking library version:
  - Styling fix for Internet Explorer
  - Add missing maximum value for the booking size field

## 2.3.7 (2019-04-15)
* Update online booking library version. This fixes new online booking in IE.

## 2.3.6 (2019-04-12)
* Update online booking library version. This fixes the sending of Google Analytics events.

## 2.3.5 (2019-04-12)
* Fix online booking/voucher sales when using them from Advanced Custom Fields or similar solutions
* Update online booking library version:
  - Add message when entering an quantity more than the maximum of a line
  - If there is only one available timeslot for the selected date, select it automatically

## 2.3.4 (2019-03-27)
* Fix default contact form setting for Gutenberg contact form block
* Fix certain Gutenberg toggles on re-edit

## 2.3.3 (2019-03-26)
* Fix new online booking in IE

## 2.3.2 (2019-03-25)
* Package block only showed packages that were bookable online - fixed
* Voucher templates are now cached along with everything else

## 2.3.1 (2019-03-19)
* Fix missing "Start time" and "Show header" options in Package block

## 2.3.0 (2019-03-04)
* Add Google Analytics integration
* Add ability to pre-fill amounts form

## 2.2.2 (2019-02-28)
* Fix plugin on WordPress 4

## 2.2.1 (2019-02-28)
* Fix values not being set properly after opening a saved page (Gutenberg only)

## 2.2.0 (2019-02-26)
* Make plugin compatible with Gutenberg/WordPress 5+
* Update "classic editor" icons to reflect the icons used for Gutenberg blocks

## 2.1.2 (2019-01-30)
Update online booking library version. This fixes the minimum amount of "fixed programme" input fields.

## 2.1.1 (2019-01-24)
Update online booking library version. This fixes a few things with the new online booking method when you are logged in to your own Recras.

## 2.1.0 (2019-01-15)
Choose between drop-down or radio buttons for single-choice fields (customer type, package selection, gender, and single choice) in contact forms

## 2.0.7 (2019-01-08)
* "Price excl. VAT" for products is not supported anymore due to API change
* Update online booking library version:
  - Disable date selection if there are min/max amount or dependency errors
  - Fix "NaN" price when booking size input field was cleared
  - Add option to show/hide programme times preview for online bookings (hidden by default)
  - Add loading indicator when loading available time slots

## 2.0.6 (2018-11-30)
Update online booking library version:
* Don't scroll to amounts form when package is pre-selected
* Fixed attachments being shown even when "Send standard attachments" was disabled for a package
* Show console warning when you are logged in to the Recras being used

## 2.0.5 (2018-11-28)
Update online booking library version:
  * Fixed a bunch of minor bugs and inconsistencies
  * Show line price based on amount selected

## 2.0.4 (2018-11-20)
Update online booking library version

## 2.0.3 (2018-11-20)
* Voucher sales module without pre-selected template wasn't working - fixed
* Update online booking library version:
  * Implement `keuze_enkel` fields in contact form
  * Fix "NaN" price when amount input field was cleared
  * Fix "Programme amounts are invalid" error in some cases
  * Voucher sales showed templates without contact form when logged in - fixed

## 2.0.2 (2018-11-12)
Update online booking library version (check booking size lines for minimum amount)

## 2.0.1 (2018-11-09)
Fixed a problem with the previous release

## 2.0.0 (2018-11-09)
**Major release** This version might break things. Please read the following carefully:

* Added:
  - Ability to show package/product image tag (instead of bare URL and having to add `<img>` tag manually)
  - Add "Choice - single" field to contact forms
* Fixed:
  - Position of datepicker popup on mobile
  - "Customer type" selection in contact forms
* Changed: the discount and voucher fields for online bookings are now combined. This means there are some backward incompatible CSS changes. If you are **not** using an online booking theme, you might need to make some changes to your CSS when installing this version. Details on these changes can be found in the [changelog for the library](https://github.com/Recras/online-booking-js/blob/master/changelog.md#080-2018-10-29)
* Removed: `[arrangement]` and `[recras-arrangement]` shortcodes. These have been replaced by `[recras-package]` over 1.5 years ago.

## 1.15.2 (2018-10-19)
* Update online booking library version (fixes prices sometimes being shown incorrectly)

## 1.15.1 (2018-10-05)
* Update online booking library version (fixes online bookings that can only be paid afterwards)

## 1.15.0 (2018-10-01)
* Add themes for new online booking method
* Enable "Use new library" by default
* Update online booking library version:
  - Show reasons why 'Book now' button is disabled
  - Fix disabled 'Book now' button after changing date/time
  - Fixes potential race condition

## 1.14.6 (2018-09-10)
* Better loading of polyfill
* Update online booking library version (fixes minimum amount of booking size row)

## 1.14.5 (2018-07-27)
* No changes. Releasing previous version failed, trying to re-release.

## 1.14.4 (2018-07-26)
* Update online booking library version

## 1.14.3 (2018-07-17)
* Update online booking library version

## 1.14.2 (2018-07-05)
* Fix online booking library not loading properly

## 1.14.1 (2018-07-05)
* Update online booking library version

## 1.14.0 (2018-06-13)
* Add option to try out the new online booking library

## 1.13.0 (2018-06-11)
* Add voucher sales module

## 1.12.3 (2018-06-08)
* Fix contact form submission when jQuery is loaded too late

## 1.12.2 (2018-06-08)
* Show error instead of crashing when package programme is empty

## 1.12.1 (2018-06-06)
* Enable automatic resizing initially for availability calendar

## 1.12.0 (2018-04-17)
* Add option to disable automatic resizing of online booking & availability iframes

## 1.11.5 (2018-03-27)
* Fix selection of newsletters in a contact form

## 1.11.4 (2017-11-27)
* Fix 500 error, sorry about that :(

## 1.11.3 (2017-11-24)
* Add explanation why sometimes packages are not available

## 1.11.2 (2017-07-03)
* Revert iframe change from previous version - did more harm than good

## 1.11.1 (2017-06-06)
* Show more helpful errors if something goes wrong
* Fix iframe heights if there is more than one iframe on a page

## 1.11.0 (2017-05-02)
* Added `[recras-availability]` shortcode to show availability calendar
* Rename "arrangement" to "package" to reflect text change in Recras
* Deprecated `[recras-arrangement]` shortcode in favour of `[recras-package]`
* New icons for TinyMCE buttons
* Fix loading icon when submitting a contact form
* Fix empty text on submit button after submitting a contact form

## 1.10.2 (2017-03-31)
Fix detailed description of arrangements

## 1.10.1 (2017-03-31)
Fix available arrangements for a contact form

## 1.10.0 (2017-03-06)
* Don't show seconds in arrangement/product durations
* Use display name instead of internal name for arrangements

## 1.9.1 & 1.9.2 (2017-02-20)
* Fix bug with iframe height

## 1.9.0 (2017-02-20)
* Listen for height-update message

## 1.8.1.1 (2016-12-09)
* Updated "Tested up to" version to 4.7

## 1.8.1 (2016-07-19)
* Fix problem with previous version not loading

## 1.8.0 (2016-07-18)
* Add image URL and description to arrangements
* The plugin is now available on Packagist, which means you can use Composer to install the plugin.
* Various small bug fixes

## 1.7.1 (2016-07-01)
* The Settings page is now hidden if you don't have permission to see it.

## 1.7.0 (2016-04-13)
* The online booking button now allows you to pre-select an arrangement. Only arrangements that are bookable online are included.

## 1.6.1 (2016-04-08)
Fixed a bug with contact form arrangements cache

## 1.6.0 (2016-03-23)
* Simplified emptying caches and added more explanation
* Arrangements in a contact form are now sorted alphabetically
* Added workaround for dropdown placeholders

## 1.5.0 (2016-03-08)
Succesfully submitting a contact form will now empty the form afterwards

## 1.4.0 (2016-02-23)
* Add optional date/time pickers

## 1.3.4 (2016-02-02)
* Fixed redirect URL after clearing cache
* Add placeholders to textareas
* Make "Unknown" the default gender, rather than "Male"
* Fix submitting a contact form on a page that has that same form multiple times

## 1.3.3 (2016-01-11)
* Sort products alphabetically
* Move stuff from Settings to a separate Recras page in the menu

## 1.3.2 (2016-01-08)
* Lowered minimum required WP version
* Applied new classes to date/time inputs

## 1.3.1 (2016-01-08)
Fixed online booking shortcode loading a contact form instead of the booking form

## 1.3.0 (2015-12-22)
* Add caching of all external data
* Add option to use a redirect after submitting a contact form
* Remove cURL requirement (unneeded as of 1.2.1)

## 1.2.1 (2015-12-22)
* Change "keuze" on a contact form from a dropdown to checkboxes (Fixes #5)
* Bypass our own serverside submit script, use XHR instead

## 1.2.0 (2015-12-21)
* Add the following possible properties to products: `description_long`, `duration`, `image_url`, and `minimum_amount`.

## 1.1.0 (2015-12-14)
* Only show arrangements in contact form shortcode editor that belong to that contact form
* Fix some styling issues (WP 4.4 only?)
* Show error message if a contact form does not have a field for arrangements, but one is set anyway (Fixes #3)
* If an invalid arrangement is set for a contact form, show dropdown of arrangements instead of generating an invalid form

## 1.0.0 (2015-11-09)
* Add shortcode for online bookings
* Add shortcode for products
* Change the way arrangement programmes spanning multiple days are shown
* Not all arrangements are available for all contact forms - the plugin now checks if the combination is valid
* Deprecated [arrangement] shortcode in favour of [recras-arrangement]

## 0.17.1 (2015-11-03)
Rename Subdomain to Recras name

## 0.17.0 (2015-10-27)
* When not showing labels, don't show an empty `li`/`td`/`dt` element
* Allow contact form submit button text to be changed

## 0.16.1 (2015-10-27)
Fix invalid HTML when using an `ol` or `table` for the contact form

## 0.16.0 (2015-10-27)
* Don't show asterisk for required fields if labels are disabled
* Show asterisk for required fields in placeholder
* Add option for decimal separator

## 0.15.1 (2015-10-27)
Move files out of assets folder, as WordPress handles this unexpectedly

## 0.15.0 (2015-10-27)
* Add logo for plugin repository
* Fix readme

## 0.14.5 (2015-10-27)
Workaround for array constants, which are not allowed by WordPress SVN

## 0.14.4 (2015-10-23)
Add Composer autoloader to prevent users from having to install Composer

## 0.14.3 (2015-10-23)
Update arrangement duration format

## 0.14.2 (2015-10-21)
Add missing arrangement shortcode button options (duration, location)

## 0.14.1 (2015-10-21)
* Replaced icons with GPL-compatible ones
* Update readme with more information
* Hack around not being allowed to load wp-load.php
* Translation update

## 0.14.0 (2015-10-20)
Add `location` and `duration` options to arrangement shortcode

## 0.13.3 (2015-10-20)
Fix translation not being loaded

## 0.13.2 (2015-10-19)
Add options added in 0.13.0 to the editor shortcode generator button

## 0.13.1 (2015-10-19)
Refactor

## 0.13.0 (2015-10-19)
* Add option to show contact forms as lists or tables
* Add option to hide labels on contact forms
* Placeholders added on contact forms, added option to hide them

## 0.12.1 (2015-10-09)
* Minor language fix
* Update Dutch translation

## 0.12.0 (2015-10-09)
Selection of arrangement and contact form is now possible via a dropdown rather than manually entering the ID

## 0.11.0 (2015-10-09)
WordPress' editors now have a button to insert a contact form without needing to know the syntax!

## 0.10.0 (2015-10-09)
WordPress' editors now have a button to insert an arrangement without needing to know the syntax!

## 0.9.0 (2015-10-08)
* Setting the `arrangement` parameter on a contact form will select this arrangement automatically and hide the field to the user.
* Fix empty option being the last option instead of the first option on arrangement dropdowns

## 0.8.0 (2015-10-08)
If a contact form has an "arrangements" field, show all arrangements in a dropdown

## 0.7.1 (2015-10-08)
Fix translations

## 0.7.0 (2015-10-08)
* Add loading indicator when sending a contact form
* Replace contact form popups with inline text boxes
* Fix placement of error messages on pages with multiple contact forms

## 0.6.2 (2015-10-08)
Fix placement of submit button on contact forms

## 0.6.1 (2015-10-08)
Fix a typo

## 0.6.0 (2015-10-08)
Add option to disable the header of a programme

## 0.5.1 (2015-10-07)
Show notice if cURL is not installed

## 0.5.0 (2015-10-07)
Add shortcode for contact forms

## 0.4.2 (2015-10-07)
Unified CSS class names

## 0.4.1 (2015-10-07)
Proper handling of debug mode

## 0.4.0 (2015-10-06)
Add currency option, defaults to Euro (€)

## 0.3.0 (2015-10-06)
* Add Dutch translation
* Wrap output of the shortcode in `<span>`s with different classes, for styling purposes

## 0.2.1 (2015-10-06)
Don't `die()` on errors, but return error message instead

## 0.2.0 (2015-10-06)
First version!
