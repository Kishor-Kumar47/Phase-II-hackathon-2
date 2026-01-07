<!-- SYNC IMPACT REPORT
Version change: N/A -> 1.0.0
Modified principles: N/A (new constitution)
Added sections: All sections (new constitution)
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/commands/*.md ⚠ pending review
Follow-up TODOs: None
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
JWT-based authentication is required; All API endpoints must validate JWT tokens; Users can only access their own data

### Modern Tech Stack Standards
Frontend: Next.js 16+ (App Router); Backend: Python FastAPI; ORM: SQLModel; Database: Neon Serverless PostgreSQL; Authentication: Better Auth with JWT

### Production-Oriented Development
This phase is standalone and production-oriented

## Architecture and Technology Constraints

Frontend: Next.js 16+ (App Router), Backend: Python FastAPI, ORM: SQLModel, Database: Neon Serverless PostgreSQL, Authentication: Better Auth with JWT. All API endpoints must validate JWT tokens. Users can only access their own data.

## Development Workflow

All code must be generated using Claude Code. Manual coding or patching is forbidden. Specs are the single source of truth. Agentic Dev Stack workflow is mandatory. All development follows the Spec-Driven Development process.

## Governance

Constitution supersedes all other practices. Amendments require documentation, approval, and migration plan. All PRs/reviews must verify compliance. Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2026-01-01 | **Last Amended**: 2026-01-01