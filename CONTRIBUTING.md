# Contributing to Clubs-Connect

Welcome! This document explains our Git workflow, coding standards, and development tools to keep the project clean and consistent.

---

## 1. Branching Strategy

We follow a **feature-branch workflow**:

| Branch Type        | Naming Convention         | Purpose                                 |
|-------------------|--------------------------|-----------------------------------------|
| Main               | `main`                   | Stable, production-ready code           |
| Feature            | `feature/<name>`         | New features                             |
| Bugfix             | `fix/<name>`             | Bug fixes                                |
| Hotfix             | `hotfix/<name>`          | Urgent fixes                             |
| Documentation      | `docs/<name>`            | Updates to documentation                 |

**Example:**
```bash
git checkout main
git pull origin main
git checkout -b feature/login-page
