# Admin Console plan

The admin area is intentionally separated from the learner shell. Production authorization must come from Firebase Auth custom claims or an equivalent server-trusted role check.

Suggested CRUD modules:
- Users / role audit
- Subjects / chapters / topics
- Questions / PYQs
- Tests / sections / timings
- Notes / Google Drive resource links
- Formulas / important topics
- Announcements

The starter front-end route is `/admin` (hash `#admin`). Before deployment, put the admin app behind Firebase Hosting routing and enforce role checks in every server-side write path.
