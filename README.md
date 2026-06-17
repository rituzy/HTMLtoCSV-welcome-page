# HTMLtoCSV Welcome Page

Welcome page for HTMLtoCSV Chrome Extension.

## Structure
- index.html - Main page
- welcome/index.html - Post-install welcome page
- contact-us/index.html - Contact page
- uninstall/index.html - Uninstall feedback page
- styles.css - Styles  
- script.js - JavaScript
- images/ - Images and screenshots

## Deployment
Static HTML page, can be hosted on any web server.

## Uninstall Page
The `uninstall/index.html` page contains a Google Form iframe for collecting feedback from users who removed the extension.

Before deploying:
1. Replace the `src` of the iframe in `uninstall/index.html` with your actual Google Form embed URL.
2. Update `UNINSTALL_URL` in `src/background/index.ts` to point to the hosted uninstall page.
