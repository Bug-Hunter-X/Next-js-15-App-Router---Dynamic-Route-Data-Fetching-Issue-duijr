# Next.js 15 App Router - Dynamic Route Data Fetching Issue

This repository demonstrates a potential issue with data fetching in dynamic routes within the Next.js 15 App Router.  The issue involves inconsistencies in data availability during initial page load and subsequent navigations.

## Issue Description

When navigating to a dynamic route, data may not be correctly fetched on the initial load.  However, subsequent navigations (e.g., using client-side navigation) often resolve the issue, suggesting a possible race condition or improper lifecycle handling.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/dynamic/[id]` (replace `[id]` with any number).
5. Observe the initial data fetch (potentially missing or incomplete).
6. Navigate to a different `/[id]` route.  Observe the second data fetch (likely successful).

## Expected Behavior

Data should be fetched correctly on the initial load of any dynamic route. No inconsistencies should be observed between the first and subsequent requests.

## Actual Behavior

Data is missing or incorrectly fetched on the initial route navigation but works correctly on subsequent client-side navigations.