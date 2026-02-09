<!-- SYNC IMPACT REPORT
Version change: 1.0.0 -> 1.1.0
Modified principles:
  - "Modern Tech Stack Standards" updated: Next.js 16+ with Tailwind CSS + Red/Black theme
  - "Security-First Architecture" updated: JWT auth for all task operations
  - Added "UI/UX Standards" principle: Modern, attractive, red/black theme
Added sections:
  - UI/UX Standards principle
  - Public Landing Page requirement
  - Simplicity Over Engineering principle
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ⚠ pending review
  - .specify/templates/spec-template.md ⚠ pending review
  - .specify/templates/tasks-template.md ⚠ pending review
  - .specify/templates/commands/*.md ⚠ pending review
Follow-up TODOs: Verify template updates for new principles
-->

# Phase II: a full-stack, multi-user Todo web application Constitution

## Core Principles

### Code Generation with Claude Code
All code must be generated using Claude Code; Manual coding or patching is forbidden

### Spec-Driven Development
Specs are the single source of truth; Agentic Dev Stack workflow is mandatory

### Test-First Development
TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced

### Security-First Architecture
Users must sign in before creating, updating, or deleting tasks; All API endpoints must validate authentication; Users can only access their own data

### Modern Tech Stack Standards
Frontend: React/Next.js + Tailwind CSS; Backend: Python FastAPI; Database: SQLite or PostgreSQL; Authentication: Simple JWT-based authentication

### UI/UX Standards
Application must have a modern, attractive, and user-friendly interface with a red and black color theme

### Public Access Requirement
A public landing page must exist for non-authenticated users to view application overview

### Simplicity Over Engineering
Prefer simplicity over over-engineering; All Phase-II requirements must be fulfilled with minimal complexity

### Production-Oriented Development
Code must be clean, modular, and production-oriented; Security should be reasonable but hackathon-appropriate

## Architecture and Technology Constraints

Frontend: React/Next.js + Tailwind CSS with red and black color theme, Backend: Python FastAPI, Database: SQLite or PostgreSQL, Authentication: Simple JWT-based authentication. All API endpoints must validate authentication. Users can only access their own data. A public landing page must exist for non-authenticated users.

## Development Workflow

All code must be generated using Claude Code. Manual coding or patching is forbidden. Specs are the single source of truth. Agentic Dev Stack workflow is mandatory. All development follows the Spec-Driven Development process. User must sign in before creating, updating, or deleting tasks. A public landing page must exist for non-authenticated users. UI must be modern, attractive, and user-friendly with red and black color theme.

## Governance

Constitution supersedes all other practices. Amendments require documentation, approval, and migration plan. All PRs/reviews must verify compliance. Complexity must be justified. Focus on usability, clarity, and developer experience.

**Version**: 1.1.0 | **Ratified**: 2026-01-01 | **Last Amended**: 2026-02-05