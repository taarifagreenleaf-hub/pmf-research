# PMF-MCR Platform — Description, User Guide & Technical Reference

> Conrad Katakweba | DIT ME24MM | April 2026
> Platform Version: 1.0

---

## Table of Contents

1. [Platform Overview](#1-platform-overview)
2. [Website User Guide](#2-website-user-guide)
3. [Mobile App User Guide](#3-mobile-app-user-guide)
4. [Offline Usage Guide](#4-offline-usage-guide)
5. [Camera and GPS Guide](#5-camera-and-gps-guide)
6. [Analysis Dashboard Guide](#6-analysis-dashboard-guide)
7. [Admin Panel Guide](#7-admin-panel-guide)
8. [Google Sheets Integration](#8-google-sheets-integration)
9. [Key Files Reference](#9-key-files-reference)
10. [Key Functions Reference](#10-key-functions-reference)

---

## 1. Platform Overview

The PMF-MCR Research Platform collects, stores, and analyses data for a Master of Engineering study on **generator maintenance cost reduction** at TTCL's 21 NICTBB sites across Tanzania.

### Three Ways to Access

| Method | How to Open | Best For |
|--------|------------|---------|
| **Website** | Open `https://taarifagreenleaf-hub.github.io/pmf-research/` in any browser | Office-based data entry, admin tasks, analysis |
| **Mobile App (installed)** | Tap the PMF-MCR icon on your phone's home screen | Field work, site visits, offline use |
| **Mobile App (browser)** | Open the URL in Chrome or Safari on your phone | First-time access, sharing with new respondents |

### Data Flow

```
Website / Mobile App / Offline
        ↓
  localStorage (device)
        ↓  (when online)
  Google Sheets (central database)
        ↓
  Analysis Dashboard / CSV Export / SPSS
```

---

## 2. Website User Guide

### Logging In

1. Open the platform URL in your browser
2. Enter your **User ID** and **Password**
3. Press **Enter** or click **Sign In**
4. The dashboard shows all 7 forms and current response counts

### Filling a Form

1. Click any form card on the dashboard, or click the form name in the left sidebar
2. Fill in all required fields (marked with a red asterisk `*`)
3. For site selection: choose from the dropdown **or** type a custom site name in the text box next to it
4. Click **Submit Response** — a green confirmation message appears
5. To fill another response for a different site, click the form again (data clears automatically)
6. To discard your current entries, click **Clear Form**

### Navigating

- **Left sidebar** — click any item to go directly to that form or section
- **Home** — returns to the main dashboard
- **Esc key** — returns to dashboard from any page
- **← Back button** — returns to dashboard from inside a form

### Signing Out

Click **Sign Out** in the top-right corner of the header.

---

## 3. Mobile App User Guide

### Installing the App (Android — Chrome)

1. Open `https://taarifagreenleaf-hub.github.io/pmf-research/` in **Chrome** on your Android phone
2. A banner appears at the bottom of the screen: **"Install PMF-MCR as an app"**
3. Tap **Install** — the app is added to your home screen
4. Tap the **PMF-MCR** icon on your home screen to open it

> If the banner does not appear: tap the three-dot menu (⋮) in Chrome → **Add to Home Screen**

### Installing the App (iPhone — Safari)

1. Open the URL in **Safari** (must be Safari, not Chrome, on iPhone)
2. Tap the **Share** button (box with an arrow pointing up) at the bottom of the screen
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add** in the top-right corner
5. The PMF-MCR icon appears on your home screen

### Using the Mobile App

- The mobile app works exactly like the website
- The screen adjusts automatically to fit your phone screen
- Tap any form card to open the form
- Use the sidebar by scrolling left — the menu is accessible from all screens
- Forms are touch-friendly with large tap targets

---

## 4. Offline Usage Guide

The platform works **fully offline** once it has been opened at least once with internet connection.

### How Offline Works

1. Open the app once with internet — the service worker downloads and caches everything
2. You can now use the app with no internet connection
3. An **orange banner** appears at the top when you are offline:
   > "You are offline — responses are saved locally and will sync when reconnected"
4. Fill in and submit forms normally — responses are saved to your device
5. A counter in the top header shows how many responses are waiting to sync (e.g. "⏳ 3 pending")
6. When internet returns, a **green banner** appears and all queued responses sync to Google Sheets automatically

### Important Notes for Offline Use

- All 7 forms are available offline
- Photos taken offline are stored on the device
- GPS capture works offline (uses device GPS, not internet)
- Analysis charts require previously-submitted data to display
- If you clear your browser data while offline, queued responses will be lost — submit when you have signal if possible

---

## 5. Camera and GPS Guide

Camera and GPS features are available on the **Site Observation Checklist (Appendix VII)** form.

### Capturing GPS Location

1. Open the **Site Observation Checklist** form
2. Scroll to the **GPS Location** section
3. Tap **Get My Location**
4. If prompted, tap **Allow** to give location permission
5. The coordinates appear in the format:
   > `Lat: -8.123456  |  Lng: 32.654321`
   > `Accuracy: ±8m  |  Captured: 14:32:05`
6. GPS coordinates are automatically saved with the form submission

**If GPS fails:**
- **Permission denied** — go to phone Settings → Browser → Location → Allow
- **GPS unavailable** — move outside or to an open area and try again
- **Timed out** — tap the button again; GPS may take longer indoors

### Taking Photos

1. On the **Site Observation Checklist** form, scroll to **Site Photos**
2. Tap **Take Photo** — your phone's rear camera opens
3. Take the photo — it appears as a thumbnail immediately
4. The GPS tag is shown on the thumbnail (coordinates captured at time of photo)
5. Tap **From Gallery** to attach an existing photo from your phone
6. To remove a photo, tap the **✕** button on the thumbnail
7. Multiple photos can be added per form submission

**Photos are stored:**
- In browser localStorage on your device
- Metadata (GPS, timestamp) is saved with the form response in Google Sheets

---

## 6. Analysis Dashboard Guide

Access: **Sidebar → Analysis Dashboard** (admin and authorised users)

### Switching Between Forms

Click the tab buttons at the top of the analysis page to switch between:
- Questionnaire A | Questionnaire B | Questionnaire C
- Site Observation | Supervisor Form | MTI Calibration | Model Validation

### What Each Tab Shows

**Questionnaire A (SO1)**
- Total response count
- Overall mean score across all 14 factors
- Bar chart: mean score per factor (grouped by category)
- Doughnut chart: respondent role distribution
- Bar chart: Q16 responses (3-month standard — Yes/No/Unsure)

**Questionnaire B (SO2/SO3)**
- Mean score across 6 MTI model validation statements
- Average expected cost reduction (%)
- Bar chart: MTI model statement scores
- Bar chart: mean TZS cost estimates per component (C_trip, C_oil, etc.)

**Questionnaire C (SO4)**
- Framework mean score with PASS/FAIL indicator (target ≥ 4.0)
- Average projected cost reduction (%)
- Bar chart: framework validation scores per statement
- Doughnut chart: implementation barrier distribution

**Site Observation (App VII)**
- Total site visits and unique sites
- Doughnut: PMF-MCR category distribution (A/B/C)
- Doughnut: NMS connectivity status
- Doughnut: generator condition distribution

**Supervisor Form (App VIII)**
- Average trip cost (TZS)
- Bar chart: trip cost per site (latest submission)

**MTI Calibration (App IX)**
- Average MTI_adj across all sites
- Bar chart: MTI_adj per site vs 250hr standard benchmark

**Model Validation (App X)**
- p-value with pass/fail colour indicator (target < 0.05)
- Expert Likert mean with pass/fail indicator (target ≥ 4.0)
- TMC reduction % with pass/fail indicator (target ≥ 25%)
- Overall PASSED/FAILED result
- Bar chart: predicted vs observed MTI interval per site

### Exporting Data for SPSS

1. Go to **Admin Panel → Data Export**
2. Click **Export [Form Name] CSV**
3. Open the downloaded `.csv` file in SPSS: **File → Import Data → CSV**
4. For paired t-test: use Questionnaire C responses and Model Validation data

---

## 7. Admin Panel Guide

Access: Log in as `admin` → **Sidebar → Admin Panel**

### Site Management

**Add a new NICTBB site:**
1. Type the site name in the input box (e.g. `MPANDA NICTBB`)
2. Click **Add**
3. The site immediately appears in all form dropdowns

**Remove a custom site:**
- Click the **✕** button next to any custom site
- The 21 default sites cannot be removed

### User Management

**Add a new user:**
1. Fill in Full Name, User ID, Password, Role
2. Click **Save User**
3. The user can log in immediately

**Edit a user:**
1. Click **Edit** next to the user
2. Change name, password, or role
3. Click **Save User**

**Remove a user:**
1. Click **Remove** next to the user
2. Confirm the prompt

### Data Export

| Button | Output |
|--------|--------|
| Export [Form] CSV | One `.csv` file for that form's responses |
| Export All Data | Downloads one CSV per form sequentially |
| Clear All Response Data | Permanently deletes all stored responses (use with caution) |

### Google Sheets Integration

1. Paste your Google Apps Script Web App URL in the input box
2. Click **Save URL**
3. Click **Sync All Data to Sheets Now** to push all existing local responses
4. Future submissions will sync automatically when online

---

## 8. Google Sheets Integration

### Setup Steps

1. Go to [script.google.com](https://script.google.com) → **New Project**
2. Name the project: `PMF-MCR Forms`
3. Paste the Apps Script code from the deployment guide
4. Click **Run → createAllForms()** — approve permissions when prompted
5. Check **View → Logs** for the form links
6. Go to **Deploy → New Deployment → Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** — copy the Web App URL
8. In the platform: Admin Panel → Google Sheets Integration → paste URL → Save

### Google Sheet Structure

One spreadsheet named `PMF-MCR Research Data` is created with one tab per form:

| Sheet Tab | Source Form |
|-----------|------------|
| Questionnaire A | Questionnaire A (SO1) |
| Questionnaire B | Questionnaire B (SO2/SO3) |
| Questionnaire C | Questionnaire C (SO4) |
| Observation Checklist | Site Observation (App VII) |
| Supervisor Form | Regional Supervisor (App VIII) |

Each row = one form submission. Each column = one field.

---

## 9. Key Files Reference

### `index.html`
The entire platform in a single file. Contains HTML structure, CSS styles, and JavaScript logic. Key sections within the file:

| Section | Description |
|---------|-------------|
| `<head>` | PWA meta tags, manifest link, Chart.js CDN |
| `<style>` | All CSS: layout, forms, tables, charts, offline/camera UI |
| `#loginPage` | Login screen HTML |
| `#app` | Main app shell: header, sidebar, main content area |
| `#sidebar` | Navigation menu with all page links |
| `#page-dashboard` | Dashboard: stats cards and form cards |
| `#page-formA` through `#page-formVal` | Seven form pages |
| `#page-analysis` | Analysis dashboard with chart tabs |
| `#page-admin` | Admin panel: sites, users, export, Sheets |
| `<script>` | All JavaScript (see Section 10) |

### `manifest.json`
PWA web app manifest. Defines the app name, icons, theme colour, start URL, and display mode (`standalone` — no browser chrome). Required for the "Install App" prompt on mobile.

### `sw.js`
Service worker for offline support. Handles:
- **Install event** — caches all core assets on first load
- **Activate event** — clears old caches when a new version is deployed
- **Fetch event** — serves cached assets when offline; updates cache when online
- **Sync event** — notifies the app to flush the offline queue when back online

### `icon-192.png`
App icon displayed on the Android home screen and in the app switcher. 192×192 pixels PNG.

### `icon-512.png`
App icon used for the splash screen when the PWA launches. 512×512 pixels PNG.

---

## 10. Key Functions Reference

### Authentication

| Function | Description |
|----------|-------------|
| `doLogin()` | Validates User ID and password against `getAllUsers()`, sets `currentUser`, shows app |
| `doLogout()` | Clears `currentUser`, shows login screen |
| `getAllUsers()` | Returns merged array of `ADMIN_USER` + localStorage users |
| `getUsers()` | Returns custom users from localStorage (`pmfUsers`) |
| `saveUsers(arr)` | Saves user array to localStorage |

### User CRUD (Admin)

| Function | Description |
|----------|-------------|
| `renderUserTable()` | Renders the user list table in Admin Panel |
| `saveUser()` | Adds a new user or updates existing (from Admin Panel form) |
| `editUser(id)` | Pre-fills Admin Panel form for editing a user |
| `deleteUser(id)` | Removes a user from localStorage after confirmation |
| `cancelUserEdit()` | Resets the Admin Panel user form |

### Site Management

| Function | Description |
|----------|-------------|
| `getSites()` | Returns merged array of 21 default sites + custom sites from localStorage |
| `saveSite(name)` | Adds a new site to localStorage (`pmfSites`) |
| `removeSite(name)` | Removes a custom site from localStorage |
| `buildSiteDropdowns()` | Rebuilds all site dropdowns across all forms with current site list |

### Form Building

| Function | Description |
|----------|-------------|
| `buildForms()` | Master function — calls all form-building functions on login |
| `buildLikertTable(tbodyId, groups, hasCats, prefix)` | Generates Likert scale rows dynamically for Q A, B, C |
| `buildCostFields()` | Generates the TZS cost input fields for Questionnaire B |
| `buildObsTable()` | Generates the 12-row Site Observation checklist table |
| `buildSupTable()` | Generates one row per site for the Supervisor form |
| `buildMTITable()` | Generates one row per site for the MTI Calibration form |
| `buildValTable()` | Generates one row per site for the Model Validation form |

### Form Submission & Data

| Function | Description |
|----------|-------------|
| `submitForm(form)` | Validates and submits a form (`'A'`, `'B'`, `'C'`, `'Obs'`, `'Sup'`, `'MTI'`, `'Val'`) |
| `clearForm(form)` | Resets all fields in a given form |
| `getLikertValues(prefix, totalQ)` | Reads all radio button values for a Likert block |
| `getResponses(form)` | Returns stored response array for a form from localStorage |
| `saveResponse(form, obj)` | Appends a response to localStorage with timestamp and user |
| `getSiteVal(prefix)` | Gets the effective site name (typed text or dropdown selection) |
| `flattenObj(obj, prefix)` | Recursively flattens a nested object for CSV export |

### Analysis & Charts

| Function | Description |
|----------|-------------|
| `renderAnalysis()` | Renders the analysis page tabs and active tab content |
| `switchAnalysisTab(key)` | Switches the active analysis tab |
| `renderAnalysisContent(key)` | Renders charts and stats for the selected form |
| `newChart(id, type, labels, datasets, opts)` | Creates or replaces a Chart.js chart instance |
| `avg(arr)` | Calculates the arithmetic mean of an array |

### Navigation & UI

| Function | Description |
|----------|-------------|
| `showPage(id)` | Shows the specified page, hides all others, updates sidebar active state |
| `renderDashboard()` | Refreshes dashboard stats cards and form cards with current response counts |
| `renderAdmin()` | Renders/refreshes the Admin Panel (sites, users, Sheets URL) |

### PWA — Offline & Sync

| Function | Description |
|----------|-------------|
| `getQueue()` | Returns the offline submission queue from localStorage (`pmfOfflineQueue`) |
| `saveQueue(q)` | Saves the queue array to localStorage |
| `enqueue(form, data)` | Adds a response to the offline queue and updates the header badge |
| `flushQueue()` | Sends all queued responses to Google Sheets and clears the queue |
| `updateQueueBadge()` | Updates the pending count badge in the app header |

### PWA — Camera & GPS

| Function | Description |
|----------|-------------|
| `captureGPS()` | Calls `navigator.geolocation.getCurrentPosition()` and populates hidden GPS fields |
| `handlePhoto(event)` | Reads a selected image file, attaches current GPS coordinates, stores base64 and renders thumbnail |
| `renderPhotoGrid()` | Re-renders the photo thumbnail grid from the `obsPhotos` array |
| `installApp()` | Triggers the deferred PWA install prompt |
| `dismissInstall()` | Hides the install banner and stores dismissal in localStorage |

### Export

| Function | Description |
|----------|-------------|
| `exportCSV(form)` | Exports all responses for one form as a `.csv` file download |
| `exportAllCSV()` | Calls `exportCSV()` for every form that has data |
| `downloadCSV(csv, filename)` | Creates a Blob URL and triggers browser file download |
| `sendToSheets(form, data)` | POSTs a single response to the Google Apps Script Web App URL |
| `syncToSheets()` | Sends all locally stored responses to Google Sheets (Admin Panel button) |

---

## Data Constants Reference

| Constant | Description |
|----------|-------------|
| `ADMIN_USER` | Fixed admin account object (not stored in localStorage) |
| `DEFAULT_USERS` | Array of 4 default role accounts restored if localStorage is cleared |
| `DEFAULT_SITES` | Array of 21 NICTBB site names |
| `QA_ITEMS` | Questionnaire A factor groups and item text (4 categories, 14 items) |
| `QB_ITEMS` | Questionnaire B MTI model statements (6 items) |
| `QB_COSTS` | Questionnaire B cost component field definitions (6 components) |
| `QC_ITEMS` | Questionnaire C framework validation statements (2 categories, 9 items) |
| `OBS_ITEMS` | Site Observation checklist rows (12 items with status options) |
| `FORM_META` | Array of form metadata objects: key, title, description, page, colour |

---

## localStorage Keys Reference

| Key | Content |
|-----|---------|
| `pmfUsers` | JSON array of custom user accounts added through Admin Panel |
| `pmfSites` | JSON array of custom sites added beyond the 21 defaults |
| `pmfResp_A` | JSON array of Questionnaire A responses |
| `pmfResp_B` | JSON array of Questionnaire B responses |
| `pmfResp_C` | JSON array of Questionnaire C responses |
| `pmfResp_Obs` | JSON array of Site Observation responses |
| `pmfResp_Sup` | JSON array of Supervisor Form responses |
| `pmfResp_MTI` | JSON array of MTI Calibration responses |
| `pmfResp_Val` | JSON array of Model Validation responses |
| `pmfOfflineQueue` | JSON array of responses queued while offline |
| `pmfSheetsURL` | Google Apps Script Web App URL |
| `pmfInstallDismissed` | Flag — set to `'1'` if user dismissed the install banner |
