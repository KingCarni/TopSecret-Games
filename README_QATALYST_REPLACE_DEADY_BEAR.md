# QAtalyst replacement

This commit replaces the public Top Secret Games project slot previously used for Deady Bear's Nightmare with QAtalyst.

Changed scope:
- `lib/topsecret/site-data.ts`

What changed:
- Replaced the `deady-bears-nightmare` project object with a new `qatalyst` AI Product object.
- Added QAtalystStudio.com as the external product link.
- Added copy for QAt triage, Jira, TestRail, Playwright, ticket generation, test case generation, and QA workflow systems.
- Replaced the Now Building entry for Deady Bear's Nightmare with QAtalyst.

Testing checklist:
- Pull latest `main`.
- Run `npm install` if dependencies are stale.
- Run `npm run build`.
- Verify `/projects` shows QAtalyst instead of Deady Bear's Nightmare.
- Verify `/projects/qatalyst` renders correctly.
- Verify the external button points to `https://qatalyststudio.com`.
- Verify `/now-building` shows QAtalyst instead of Deady Bear's Nightmare.

Note:
- `/projects/deady-bears-nightmare` should no longer be linked publicly and will 404 because the project has moved to backlog.
