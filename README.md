# Reyneil Rodelas — IT Portfolio

A responsive single-page portfolio built with React, Vite, and regular CSS. It
features project case studies, technical notes, QA experience, and editable
portfolio data, and presents a candidate open to entry-level opportunities
across software engineering, testing, IT support, networking, and related IT
roles.

## Run locally

1. Install Node.js (20 or later).
2. In this folder, install dependencies:

   ```sh
   npm install
   ```

3. Start the local development server:

   ```sh
   npm run dev
   ```

4. Open the local URL printed by Vite.

To create and preview a production build, run `npm run build` followed by
`npm run preview`.

## Publish with GitHub Pages

1. Create a GitHub repository for this project. A public repository is simplest
   for a portfolio.
2. In VS Code, open this project folder, use **Source Control: Initialize
   Repository**, commit the project files, then choose **Publish to GitHub**.
   Push the branch named `main`.
3. In the GitHub repository, open **Settings → Pages** and select **GitHub
   Actions** as the build and deployment source.
4. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to
   finish. The workflow redeploys whenever you push changes to `main`.
5. Visit the URL shown under **Settings → Pages**. For a regular project
   repository it will look like `https://reyneilrodelas.github.io/repository-name/`.

The included workflow builds the Vite site and publishes its `dist` folder.
It also configures the correct base path for project pages and user pages.

## Update portfolio content

- Update personal details, skills, experience, education, project case studies,
  and engineering notes in `src/data.js`.
- Add only verified URLs to a project's `links` array or case-study section links.
- Set `contact.email` or `contact.linkedin` in `src/data.js` only when you are
  ready to publish those contact details. Empty values are not shown as links.
- Replace `public/profile-photo.jpeg` to update the profile image.

The Our-System repository is titled ScanWizard in its README, so the portfolio
shows them together as one project. Case-study details use native, keyboard
accessible disclosure controls.
