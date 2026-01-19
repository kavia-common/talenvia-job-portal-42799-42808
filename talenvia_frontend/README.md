# Talenvia Frontend (React)

Talenvia is a multi-page job searching platform UI (Job Listings, Profile, Mock Tests, Challenges, Settings, About, How it Works) built with a lightweight React setup and minimal dependencies.

## Run

```bash
npm start
```

Build:

```bash
npm run build
```

## Configuration (Environment Variables)

This project uses CRA-style environment variables (`REACT_APP_*`). The app works even if no backend is configured by falling back to mock data.

Common variables used by the UI:

- `REACT_APP_API_BASE` — preferred API base URL (e.g. `https://api.example.com`)
- `REACT_APP_BACKEND_URL` — alternative base URL if `REACT_APP_API_BASE` is not set
- `REACT_APP_WS_URL` — optional websocket base URL (not required for this UI)
- `REACT_APP_FRONTEND_URL` — optional, used for link building (future)
- `REACT_APP_LOG_LEVEL` — optional (defaults to `debug` in dev, `warn` in prod)
- `REACT_APP_HEALTHCHECK_PATH` — optional (defaults to `/health`)

### Mock mode / graceful fallback

If neither `REACT_APP_API_BASE` nor `REACT_APP_BACKEND_URL` is set, Talenvia runs in **Mock mode**:
- Job listings, profile, tests, and challenges are backed by local mock data
- Pages include `TODO` notes for wiring real APIs later

## Feature Flags

`REACT_APP_FEATURE_FLAGS` controls optional UI sections.

Supported formats:

1) CSV list:
```txt
REACT_APP_FEATURE_FLAGS=challenges
```

2) JSON object:
```txt
REACT_APP_FEATURE_FLAGS={"challenges":true}
```

### Experiments toggle

`REACT_APP_EXPERIMENTS_ENABLED` can globally enable experimental features.

Accepted truthy values: `true`, `1`, `yes`, `on`

Example:
```txt
REACT_APP_EXPERIMENTS_ENABLED=true
```

In this UI, **Challenges** are shown if either:
- `REACT_APP_EXPERIMENTS_ENABLED` is truthy, OR
- `REACT_APP_FEATURE_FLAGS` contains `challenges`

## Project Structure

- `src/components/` — reusable UI and layout components
- `src/pages/` — route pages (Jobs, Profile, Tests, Challenges, Settings, About, How it Works)
- `src/routes/` — router configuration
- `src/config/` — env + feature flag parsing helpers
- `src/utils/` — API client helper (graceful fallback)
- `src/mock/` — mock data used when backend is not configured
- `src/App.css` — theme and component styling (Royal Purple, elegant rounded UI)

## TODO (Backend wiring)
- Replace mock job search with API endpoints (search/filter/details)
- Persist profile changes
- Load real tests and store results
- Persist challenge progress and add user leaderboards
- Add auth/session handling if/when backend supports it
