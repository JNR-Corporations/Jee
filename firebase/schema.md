# Firestore architecture

Global education content lives in top-level collections: `subjects`, `chapters`, `topics`, `questions`, `tests`, `notes`, `importantTopics`, and `announcements`.

User data is scoped to the authenticated account where possible: `users/{uid}`, `progress`, `bookmarks`, `studySessions`, and `dailyGoals`. Test attempts are separate documents keyed by `userId` for indexed history queries.

Google Drive resources are represented as explicit URLs/IDs in note metadata. The client never scrapes Drive.

For production, finalize test attempts with trusted server logic instead of accepting arbitrary client-computed scores.
