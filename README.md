# PMF-MCR Research Platform
### Predictive Maintenance Framework for Maintenance Cost Reduction
**TTCL NICTBB Generator Maintenance | DIT Master of Engineering in Maintenance Management**

> Conrad Katakweba | Reg: 240165454411 | DIT ME24MM | April 2026

---

## Live Application

| Platform | URL |
|----------|-----|
| Website (browser) | https://taarifagreenleaf-hub.github.io/pmf-research/ |
| Mobile App (Android/iOS) | Same URL — install via browser prompt |

---

## Overview

The PMF-MCR Research Platform is a multi-channel data collection and analysis system built to support a Master of Engineering research study on reducing generator maintenance costs at TTCL's 21 NICTBB sites across Tanzania.

The platform collects data through **seven research instruments** (questionnaires, observation checklists, and calibration forms), stores all responses in a central Google Sheet, and provides an analysis dashboard with charts and CSV export for SPSS processing.

---

## Key Features

- **7 research forms** covering all appendices (II, III, IV, V, VII, VIII, IX, X)
- **Role-based login** — admin, supervisors, technicians, NOC engineers, power systems engineers
- **Admin panel** — add/remove users and NICTBB sites dynamically
- **Offline-first** — works with no internet connection; syncs automatically when reconnected
- **Camera + GPS** — take site photos with automatic geotag on the Site Observation form
- **Installable PWA** — installs on Android/iPhone home screen like a native app
- **Analysis dashboard** — mean Likert scores, role distributions, cost charts, MTI_adj vs benchmark
- **CSV export** — per form or all forms, ready for SPSS or Excel
- **Google Sheets sync** — all responses from all platforms flow into one spreadsheet

---

## Research Forms

| Appendix | Form | Research Objective |
|----------|------|--------------------|
| App II | NMS Data Extraction Form | Baseline data from TTCL NMS (DG, Mains, Battery) |
| App III | Questionnaire A | SO1 — Factors affecting generator maintenance costs |
| App IV | Questionnaire B | SO2/SO3 — MTI model calibration and cost validation |
| App V | Questionnaire C | SO4 — PMF-MCR framework validation |
| App VII | Site Observation Checklist | Physical site visit assessment with photos and GPS |
| App VIII | Regional Supervisor Form | Trip costs and quarterly visit data |
| App IX | MTI Calibration Form | MTI_adj calculation per site |
| App X | Model Validation Tracking | Predicted vs observed MTI and TMC comparison |

---

## NICTBB Sites (21 Default Sites)

HULIA · NAMTUMBO · WINO · RUNGWA · KIYOMBO · MALONGWE · BUKENE · MABUKI · NASSA · KASUMULO · MAKONGOLOSI · MICHIGA · MITOLE · TANDAHIMBA · MANGA · MKATA · MIANGALUA · KIMANZICHANA · BUHIGWE · UVINZA · KIZI

> Additional sites can be added by the admin at any time through the Admin Panel.

---

## Repository Structure

```
pmf-research/
├── index.html          # Complete platform (single-file web app)
├── manifest.json       # PWA manifest — makes the app installable
├── sw.js               # Service worker — offline caching and sync
├── icon-192.png        # App icon (home screen, notifications)
├── icon-512.png        # App icon (splash screen)
└── README.md           # This file
```

---

## Technology Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Frontend | HTML5 / CSS3 / Vanilla JavaScript | No build tools needed; easy to troubleshoot |
| Charts | Chart.js 4.4 (CDN) | Lightweight, well-documented |
| Storage | Browser localStorage | Works offline, no backend needed |
| Database | Google Sheets (via Apps Script) | Free, centralised, accessible by admin |
| Hosting | GitHub Pages | Free, permanent, HTTPS |
| Offline | Service Worker (PWA) | Caches app and queues responses |
| Camera/GPS | Web APIs (MediaDevices, Geolocation) | Native browser support on mobile |

---

## Google Sheets Integration

To connect all form submissions to a central Google Sheet:

1. Go to [script.google.com](https://script.google.com) → New Project
2. Paste the Google Apps Script code from `Katakweba_PMF_MCR_Platform_Deployment_Guide.docx`
3. Run `createAllForms()` once — this creates the spreadsheet and all form sheets
4. Deploy the script as a **Web App** (Execute as: Me, Access: Anyone)
5. Copy the Web App URL
6. In the platform: **Admin Panel → Google Sheets Integration → paste URL → Save**

All future submissions from the website, mobile app, and offline queue will automatically appear in the Google Sheet.

---

## Deployment

The platform is deployed on GitHub Pages and updates automatically when the `main` branch is pushed.

To update the platform:
1. Edit `index.html` locally
2. Push to GitHub — the live site updates within 2–5 minutes

---

## Default Login Credentials

See `USER_ACCOUNTS.md` for all default usernames and passwords.

> **Security note:** Change default passwords after initial deployment, especially for the admin account. Passwords are stored in browser localStorage and should be treated as access-control credentials, not high-security secrets.

---

## License

This platform was developed for academic research purposes at the Dar es Salaam Institute of Technology. All rights reserved — Conrad Katakweba, 2026.
