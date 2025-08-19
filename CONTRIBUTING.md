This file explains how to contribute to the project, including setup, workflow, and coding standards.

Quick Start

Clone the repo:

git clone https://github.com/2663211/Clubs-Connect.git
cd Clubs-Connect


Install dependencies:

npm install


Create a feature/fix branch:

git checkout -b feature/<your-feature-name>


Code with VS Code

Auto-lint & format on save with ESLint + Prettier.

Run lint & format checks:

npm run lint
npm run format:check


Commit using Conventional Commits:

git add .
git commit -m "feat(auth): add login functionality"


Push branch & open Pull Request:

git push origin feature/<your-feature-name>


Merge after approval and passing CI

Git + PR Workflow Diagram
graph LR
  A[Clone Repo] --> B[Create feature branch]
  B --> C[Code & Format on Save]
  C --> D[Run npm run lint & format:check]
  D --> E[Commit using Conventional Commits]
  E --> F[Push branch & open PR]
  F --> G[CI runs & Review]
  G --> H[Merge to main after approval]

Step 9: Team Workflow Summary

Clone the repo.

Install dependencies (npm install).

Create a feature/fix branch (git checkout -b feature/<name>).

Code in VS Code with ESLint + Prettier auto-format.

Run npm run lint and npm run format:check before committing.

Commit with Conventional Commits.

Push branch and open Pull Request (CI runs automatically).

Merge into main after approval and passing CI.