# ADR-0001 — Initial architecture

## Status

Approved.

## Decision

The initial system will use:
- Claude Code as the local agent runtime;
- Claude Desktop as the interaction and supervision surface;
- GitHub as the versioning and governance platform;
- a private repository;
- human approval for all external or high-risk actions.

## Initial constraints

- No external business integrations.
- No client data.
- No autonomous publishing.
- No direct merge into main.
- No unreviewed third-party skills.
- No Anthropic API usage during kickoff.

## Rationale

The project must first validate governance, agent roles and task structure before introducing autonomy or external systems.

## Approved by

Human owner.

## Date

2026-07-19