# Contributing to Clubs-Connect

This file explains how to contribute to the project, including setup, workflow, and coding standards.

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/2663211/Clubs-Connect.git
cd Clubs-Connect
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a feature/fix branch
bash
Copy
Edit
git checkout -b feature/<your-feature-name>
4. Code with VS Code
Auto-lint & format on save with ESLint + Prettier.

5. Run lint & format checks
bash
Copy
Edit
npm run lint
npm run format:check
6. Commit using Conventional Commits
bash
Copy
Edit
git add .
git commit -m "feat(auth): add login functionality"
7. Push branch & open Pull Request
bash
Copy
Edit
git push origin feature/<your-feature-name>
Merge after approval and passing CI.

🌀 Git + PR Workflow Diagram
mermaid
Copy
Edit
graph LR
A[Clone Repo] --> B[Create feature branch]
B --> C[Code & Format on Save]
C --> D[Run npm run lint & format:check]
D --> E[Commit using Conventional Commits]
E --> F[Push branch & open PR]
F --> G[CI runs & Review]
G --> H[Merge to main after approval]
📋 Team Workflow Summary
Clone the repo.

Install dependencies:

bash
Copy
Edit
npm install
Create a feature/fix branch:

bash
Copy
Edit
git checkout -b feature/<name>
Code in VS Code with ESLint + Prettier auto-format.

Run lint & format checks before committing:

bash
Copy
Edit
npm run lint
npm run format:check
Commit with Conventional Commits.

Push branch and open Pull Request (CI runs automatically).

Merge into main after approval and passing CI.
