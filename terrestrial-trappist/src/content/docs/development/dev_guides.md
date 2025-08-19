---
title: Development Guides
description: How to create a database
---

## Application 

Clone the repo
git clone https://github.com/2663211/Clubs-Connect.git
cd Clubs-Connect
Install dependencies

npm install
Create a feature/fix branch

git checkout -b feature/
Code with VS Code

Auto-lint & format on save with ESLint + Prettier.
Run lint & format checks

npm run lint
npm run format:check
Commit using Conventional Commits

git add .
git commit -m "feat(auth): add login functionality"
Push branch & open Pull Request

git push origin feature/
Merge after approval and passing CI.
🌀 Git + PR Workflow Diagram graph LR

A[Clone Repo] --> B[Create feature branch] B --> C[Code & Format on Save] C --> D[Run npm run lint & format:check] D --> E[Commit using Conventional Commits] E --> F[Push branch & open PR] F --> G[CI runs & Review] G --> H[Merge to main after approval]

## Documentation

cd terrestrial-trappist

npm run dev