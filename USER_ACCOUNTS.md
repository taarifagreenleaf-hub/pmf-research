# PMF-MCR Platform — Default User Accounts

> **Administrator use only** — keep this document confidential.
> Last updated: April 2026 | Platform: PMF-MCR v1.0

---

## Default Login Credentials

| User ID | Password | Full Name / Description | Role | Access Level |
|---------|----------|------------------------|------|-------------|
| `admin` | `pmf2026admin` | Conrad Katakweba (Admin) | Administrator | Full access — all forms, analysis dashboard, admin panel |
| `sup01` | `sup2026` | Regional Supervisor | Regional Supervisor | All forms (fill only) |
| `tech01` | `tech2026` | Maintenance Technician | Maintenance Technician | All forms (fill only) |
| `noc01` | `noc2026` | NOC Engineer | NOC Engineer | All forms (fill only) |
| `eng01` | `eng2026` | Power Systems Engineer | Power Systems Engineer | All forms (fill only) |

---

## Access Levels Explained

### Administrator (`admin`)
- Access to all 7 research forms (fill and view)
- Analysis dashboard with charts and statistics
- Admin panel:
  - Add and remove NICTBB sites
  - Add, edit, and remove user accounts
  - Export data as CSV (per form or all forms)
  - Configure Google Sheets integration
  - Clear all response data
- Can view all submitted responses

### Standard User (all other accounts)
- Access to all 7 research forms (fill and submit only)
- Cannot view analysis or other users' responses
- Cannot access the admin panel
- Can clear their own form before submitting

---

## Adding New Users

The admin can create new user accounts directly through the platform:

1. Log in as `admin`
2. Navigate to **Admin Panel** (bottom of left sidebar)
3. Under **User Management**, fill in:
   - Full Name
   - User ID (e.g. `sup02`, `tech03`)
   - Password
   - Role (Regional Supervisor / Maintenance Technician / NOC Engineer / Power Systems Engineer)
4. Click **Save User**

The new user can log in immediately.

---

## Editing Existing Users

1. Log in as `admin` → **Admin Panel → User Management**
2. Click **Edit** next to the user
3. Update the name, password, or role
4. Click **Save User**

> Note: The `admin` account cannot be edited or deleted through the interface. To change the admin password, it must be updated directly in the `index.html` source file (line containing `pmf2026admin`).

---

## Removing Users

1. Log in as `admin` → **Admin Panel → User Management**
2. Click **Remove** next to the user
3. Confirm the prompt

The removed user will be unable to log in immediately.

---

## Password Guidelines

- Passwords are stored in browser localStorage — they are not encrypted
- Share credentials with respondents individually via secure message (WhatsApp, email)
- Recommended: assign one account per respondent or one shared account per role group
- Change default passwords after first deployment if the platform is publicly accessible

---

## User Accounts Storage

User accounts added through the Admin Panel are stored in the browser's `localStorage` under the key `pmfUsers`. The built-in default accounts (`sup01`, `tech01`, `noc01`, `eng01`) are restored automatically if localStorage is cleared, but custom-added accounts will be lost.

> **Best practice:** Keep a record of all custom user accounts in this document.

---

## Custom User Accounts Log

Use this table to record any users added through the Admin Panel:

| User ID | Password | Full Name | Role | Date Added | Added By |
|---------|----------|-----------|------|-----------|----------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
