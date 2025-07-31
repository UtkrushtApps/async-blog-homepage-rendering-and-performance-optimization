# Async Blog Homepage Rendering and Performance Optimization

## Task Overview
You are improving the homepage for a blog-owned by a small media company. Currently, the homepage displays 'undefined' values, has incomplete type safety, and loads post data inefficiently. The company also wants to log a simple notification every time the homepage is loaded, without delaying the user experience. Modernizing this workflow will help ensure reliable performance, robust typing, and better user analytics.

## Guidance
- Focus on the `pages/index.tsx` for the homepage rendering and `pages/api/posts.ts` for mock data.
- Use and improve the provided `types/post.ts` for proper TypeScript typing.
- Notification logging (not user visible) should be handled asynchronously via `pages/api/notify.ts`.

## Objectives
- Asynchronously fetch recent blog post data in a way that avoids race conditions, handles slow responses, and displays proper loading and error states.
- Ensure posts render correctly once fetched, with all fields typed.
- Send a background notification to `/api/notify` when the homepage loads, and ensure this does not block rendering or cause re-renders.
- Resolve all TypeScript errors and ensure consistent typing throughout components and API routes.

## How to Verify
- Run the app and verify the homepage lists posts with all data fields (no 'undefined' values).
- Simulate slow or failing APIs to confirm loading and error messaging work.
- Confirm that all TypeScript errors are fixed (check your IDE for errors).
- Verify that when the homepage loads, a background request is sent to `/api/notify` (use your browser's network panel).
- Confirm user interaction and performance are not blocked by notification logging.
