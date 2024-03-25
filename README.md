# google-docs-template-resetter

The script is intended to reset a Google Docs template and populate a table with data, applying specific styles and configurations. It starts by checking if the document is empty and resets it by clearing existing content and setting up a new table based on the provided dimensions and preferences. The table is populated with placeholders, which are later replaced with actual data. The script also includes functions for updating table cell styles, copying elements from one cell to another, handling data merge operations, and more. However, there's an issue where only the first grid object is populated correctly, and subsequent ones are not.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/google-docs-template-resetter.git
cd google-docs-template-resetter
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
