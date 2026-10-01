# Small React component library with Storybook

Three accessible components in React + TypeScript, documented in Storybook: `Button` (variants, sizes, loading), `TextField` (label, hint, error wiring) and `Tabs` (ARIA roles, arrow-key navigation). Styling uses a few CSS custom properties as tokens.

## Limits

No automated tests or axe pass yet; the Storybook Accessibility panel is installed but not reviewed. Three components only, not a full design system.

## Run

    npm install
    npm run storybook
    npm run build-storybook
