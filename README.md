# JEE by JNR

**JEE by JNR** is a production-oriented starter architecture for a JEE Main + JEE Advanced preparation ecosystem by **JNR Corporations**.

## What is included

- Android-first responsive dashboard with desktop sidebar + mobile bottom navigation
- Light/dark theme with local preference persistence
- Demo login flow so the UI works without Firebase credentials
- Learn/chapter hierarchy with sample syllabus content
- Subject dashboards
- Mock test catalog + a functional demo test runner
- PYQ browser with filtering/search
- Formula Hub
- Performance analytics dashboard
- Saved workspace shell
- Profile and settings
- Protected admin architecture shell
- Firebase Firestore/Storage Security Rules starter files
- Firestore schema, indexes and Cloud Functions recommendations
- PWA manifest and responsive CSS

## Important production note

Firebase cannot be safely “completed” without a real project. Add your project's client configuration in `js/services/firebase.js`, then wire Firebase Auth/Firestore/Storage/FCM using the schema and rules included here.

The browser bundle should contain only Firebase client configuration values intended for web clients. Never put private service-account credentials in the frontend.

## Run locally

Because this is an ES-module web app, serve it over HTTP rather than opening `index.html` directly.

Examples:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Suggested deployment order

1. Create Firebase project and enable Authentication providers.
2. Create Firestore and add rules/indexes from `firebase/`.
3. Add Firebase App Check.
4. Import subjects/chapters/topics/questions/tests/notes into Firestore.
5. Add server-side test finalization via Cloud Functions.
6. Configure FCM only after notification consent/preferences are implemented.
7. Deploy to Firebase Hosting.

## Architecture

```text
Learner UI
  ├── Dashboard
  ├── Learn → Subject → Chapter → Topic → Material
  ├── Tests → Runner → Result → Analytics
  ├── PYQs
  ├── Formulas
  ├── Saved
  └── Profile / Settings
          │
          ▼
      Services layer
          ├── Auth
          ├── Firestore
          ├── Storage
          ├── Analytics
          └── Functions / FCM
```

## Content principle

Educational content is modeled as data, not hardcoded into UI components, so a later admin panel can add or modify resources without rewriting the learner interface.
