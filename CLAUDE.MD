# Project purpose

This repository contains a governed multi-agent system built with Claude Code.

The system will include:
- one orchestrator;
- specialized agents;
- approved skills;
- shared task tracking;
- independent review;
- mandatory human approval for sensitive actions.

# Current project stage

The project is currently in the initial setup stage.

Do not create autonomous external integrations unless explicitly requested and approved by the human owner.

# Human owner

The human user is the sole final approver.

Claude and all subagents must treat the human user as:
- request owner;
- decision owner;
- approval authority;
- final reviewer for sensitive actions.

# General operating rules

1. Never invent data.
2. Distinguish facts, assumptions, estimates and recommendations.
3. Do not perform irreversible actions.
4. Do not publish or send content externally.
5. Do not merge directly into the main branch.
6. Do not delete files unless explicitly authorized.
7. Do not expose secrets, credentials or personal data.
8. Do not place API keys or passwords in repository files.
9. Record meaningful changes.
10. Ask for human approval before any external or high-risk action.

# Data rules

During the initial setup:
- use only synthetic or non-confidential data;
- do not process client data;
- do not process personal data;
- do not access external business systems.

# File locations

- Agent definitions: `.claude/agents/`
- Skills: `.claude/skills/`
- Configuration: `config/`
- Requests: `workspace/requests/`
- Tasks: `workspace/tasks/`
- Drafts: `workspace/drafts/`
- Reviews: `workspace/reviews/`
- Approved deliverables: `workspace/approved/`
- Rejected deliverables: `workspace/rejected/`
- Organizational memory: `memory/organization/`
- Project memory: `memory/projects/`
- Decisions: `memory/decisions/`

# Definition of done

A task is not complete unless:
- the requested output exists;
- assumptions are explicit;
- sources or inputs are identified;
- risks are reported;
- the result has been reviewed;
- required human approval has been obtained.