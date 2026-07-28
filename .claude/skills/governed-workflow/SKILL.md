---
name: governed-workflow
description: Executes the complete governed multi-agent workflow, from request intake and task decomposition through specialist execution, independent review, consolidation and explicit Human Owner approval.
disable-model-invocation: true
---

# Governed Workflow

## Purpose

This skill defines the mandatory governed workflow for processing a request through the multi-agent organization.

Its purpose is to ensure that every governed request is:

- traceable;
- assigned to an appropriate agent;
- executed using a structured method;
- independently reviewed;
- consolidated before delivery;
- approved by the Human Owner before becoming official.

This skill governs the process.

It does not replace the analytical methods defined by specialist skills such as `structured-analysis`.

---

# Mandatory Workflow

Every governed request must follow this sequence:

1. Read the request.
2. Create the structured task.
3. Classify the risk.
4. Select the appropriate Specialist.
5. Delegate execution.
6. Store the Specialist draft.
7. Delegate independent review.
8. Store the review.
9. Return required corrections to the Orchestrator.
10. Produce the consolidated final draft.
11. Request Human Owner approval.
12. Move the final deliverable only after explicit approval.
13. Preserve the workflow evidence.

No phase may be skipped.

---

# Roles

## Human Owner

The Human Owner:

- submits the request;
- provides clarifications when required;
- evaluates the consolidated deliverable;
- approves, rejects or requests changes;
- is the only authority that can provide final approval.

No agent may approve a deliverable on behalf of the Human Owner.

---

## Orchestrator

The Orchestrator:

- reads and interprets the request;
- verifies that the request is sufficiently clear;
- creates the structured task;
- classifies priority and risk;
- selects the most appropriate Specialist;
- records the assignment rationale;
- coordinates the workflow through repository artifacts;
- sends the Specialist draft to the Reviewer;
- evaluates the Reviewer’s findings;
- coordinates required corrections;
- produces the consolidated final draft;
- requests Human Owner approval;
- moves the deliverable to the approved directory only after explicit approval.

The Orchestrator must not replace the Specialist by performing the complete domain analysis itself.

The Orchestrator must not replace the Reviewer by approving the quality of its own consolidated deliverable.

---

## Specialist

The Specialist:

- reads the assigned task and authorized inputs;
- applies the required analytical or operational skill;
- distinguishes facts, assumptions, interpretations and recommendations;
- documents missing information and limitations;
- produces the requested draft;
- saves the draft only in the authorized draft directory;
- responds to revision requests coordinated by the Orchestrator.

The Specialist must not:

- approve its own work;
- modify review reports;
- write directly to the approved directory;
- bypass the Reviewer;
- fabricate missing evidence.

---

## Reviewer

The Reviewer:

- independently examines the Specialist draft;
- verifies compliance with the request and acceptance criteria;
- checks evidence, assumptions, consistency, completeness and risks;
- classifies findings by severity;
- recommends corrections or improvements;
- produces a separate review report.

The Reviewer must not:

- directly modify the Specialist draft;
- rewrite the final deliverable;
- approve the deliverable on behalf of the Human Owner;
- modify task records;
- write to the approved directory.

All Reviewer findings must be returned to the Orchestrator through the review report.

---

# Repository Paths

Use the following directories unless the project governance defines more specific paths.

## Requests

`requests/`

Contains the original requests submitted by the Human Owner.

Request files must not be altered during execution unless the Human Owner explicitly asks for a correction.

---

## Tasks

`workspace/tasks/`

Contains structured task records created by the Orchestrator.

Each governed request must have at least one corresponding task record.

---

## Drafts

`workspace/drafts/`

Contains:

- Specialist drafts;
- revised drafts;
- consolidated final drafts awaiting approval.

Files in this directory are not official approved deliverables.

---

## Reviews

`workspace/reviews/`

Contains independent Reviewer reports.

The Reviewer may write only within this directory.

---

## Approved Deliverables

`workspace/approved/`

Contains only deliverables explicitly approved by the Human Owner.

A file must not be created, moved or overwritten in this directory before explicit approval.

Approved files must not be edited directly.

Any later modification requires a new draft, review and approval cycle.

---

## Rejected Deliverables

`workspace/rejected/`

Contains deliverables rejected or formally closed without approval when required by the project governance.

---

## Logs

`workspace/logs/`

Contains workflow summaries, validation results and execution records when required.

Logs do not replace task, draft or review artifacts.

---

# Step 1 — Read the Request

The Orchestrator must read the complete request and identify:

- request identifier;
- objective;
- expected deliverable;
- scope;
- exclusions;
- available inputs;
- constraints;
- acceptance criteria;
- expected decision or outcome;
- required language and format;
- approval requirements.

The Orchestrator must verify whether the request is actionable.

If essential information is missing and the task cannot be completed responsibly, the workflow must pause and request clarification from the Human Owner.

Non-essential missing information may be handled through explicit assumptions, provided that:

- the assumption is documented;
- its impact is assessed;
- its confidence level is declared.

---

# Step 2 — Create the Structured Task

The Orchestrator must create a task record in:

`workspace/tasks/`

The task must include, where applicable:

- task identifier;
- parent request identifier;
- title;
- objective;
- description;
- owner;
- assigned agent;
- assignment rationale;
- priority;
- risk level;
- status;
- authorized inputs;
- expected output;
- acceptance criteria;
- assumptions;
- constraints;
- dependencies;
- review requirement;
- Human Owner approval requirement;
- creation date;
- last update date.

If the project uses a JSON task schema, the task must comply with:

`schemas/task.schema.json`

A non-conforming structured task must be corrected before Specialist execution begins.

---

# Step 3 — Classify the Risk

The Orchestrator must classify the request before delegation.

Use the risk levels defined in project governance.

## Low Risk

Typical characteristics:

- internal exploratory analysis;
- reversible output;
- no sensitive decision;
- limited operational impact;
- no direct external action.

## Medium Risk

Typical characteristics:

- decision-support deliverable;
- business or financial implications;
- use of assumptions;
- possible organizational impact;
- output intended for internal stakeholders.

## High Risk

Typical characteristics:

- legal, regulatory or contractual implications;
- material financial consequences;
- sensitive or confidential information;
- external publication;
- irreversible or difficult-to-reverse action;
- significant reputational impact.

## Critical Risk

Typical characteristics:

- immediate safety implications;
- severe compliance exposure;
- irreversible external execution;
- consequences outside the authorized scope of the project.

For each classification, record:

- assigned risk level;
- reasons;
- identified risk factors;
- mitigation requirements;
- approval requirements.

If the request exceeds the authorized risk level of the current workflow, stop and escalate to the Human Owner.

---

# Step 4 — Select the Appropriate Specialist

The Orchestrator must select the Specialist according to the dominant objective of the task.

The selection must be based on:

- subject matter;
- requested deliverable;
- required methodology;
- authorized tools;
- available evidence;
- risk level;
- task complexity.

Use a dedicated Specialist when one is available and appropriate.

Use `general-specialist` only when:

- no dedicated Specialist exists;
- the task is genuinely general-purpose;
- the request falls within its authorized scope.

For multidisciplinary requests, the Orchestrator may create separate, non-overlapping subtasks.

Each subtask must specify:

- assigned Specialist;
- assignment rationale;
- inputs;
- expected output;
- dependencies;
- integration point.

The Orchestrator must not assign the same undivided task to multiple Specialists without defining their separate responsibilities.

---

# Step 5 — Delegate Execution

The Orchestrator must provide the selected Specialist with:

- the structured task;
- the original request;
- authorized input files;
- applicable governance rules;
- required skills;
- expected output path;
- acceptance criteria;
- known assumptions;
- constraints;
- deadline, when applicable.

The delegation must explicitly state that:

- the Specialist must use only authorized inputs;
- missing information must not be fabricated;
- analytical tasks must apply the relevant analytical skill;
- the output must remain a draft;
- the deliverable must be saved in `workspace/drafts/`;
- the Specialist cannot approve or publish the deliverable.

---

# Step 6 — Store the Specialist Draft

The Specialist must create the draft in:

`workspace/drafts/`

The draft must be clearly identified as non-approved.

The filename should make the related request identifiable.

Recommended structure:

`REQ-XXXX-specialist-draft-v1.md`

The draft should include, where applicable:

- objective;
- context;
- scope;
- inputs used;
- assumptions;
- evidence;
- analysis;
- alternatives;
- findings;
- risks;
- recommendations;
- confidence level;
- limitations;
- open questions.

The Specialist must notify the Orchestrator when the draft is ready for review.

The draft status must then be updated to indicate that it is awaiting independent review.

---

# Step 7 — Delegate Independent Review

The Orchestrator must assign the completed draft to the Reviewer.

The Reviewer must receive:

- the original request;
- the structured task;
- the Specialist draft;
- acceptance criteria;
- applicable governance rules;
- authorized inputs where verification is required.

The Reviewer must perform an independent assessment.

The Reviewer must not rely only on the Specialist’s conclusions.

---

# Step 8 — Store the Review

The Reviewer must save the review report in:

`workspace/reviews/`

Recommended structure:

`REQ-XXXX-review-v1.md`

The review must include:

- review identifier;
- request identifier;
- task identifier;
- reviewed file;
- review scope;
- overall result;
- findings;
- severity;
- required corrections;
- optional improvements;
- unresolved issues;
- recommendation to the Orchestrator.

Each finding should contain:

- finding identifier;
- severity;
- description;
- supporting evidence;
- impact;
- required or suggested action.

Use the following severity levels.

## Critical

The deliverable cannot proceed.

Examples include:

- violation of governance;
- use of unauthorized evidence;
- severe logical failure;
- material risk not addressed;
- deliverable outside the approved scope.

## Major

A substantial correction is required before approval.

Examples include:

- unsupported conclusion;
- missing required section;
- inconsistent analysis;
- important assumption not disclosed;
- acceptance criterion not satisfied.

## Minor

A limited correction is required.

Examples include:

- unclear wording;
- local inconsistency;
- incomplete explanation;
- imprecise classification.

## Suggestion

An optional improvement that does not prevent progression.

The Reviewer must not directly apply corrections to the Specialist draft.

---

# Step 9 — Return Corrections to the Orchestrator

The Reviewer returns the completed review report to the Orchestrator.

The Orchestrator must evaluate every finding and record one of the following decisions:

- accepted;
- partially accepted;
- rejected with justification;
- clarification required;
- escalated to the Human Owner.

Critical and Major findings must be resolved before the deliverable can be submitted for approval.

Minor findings should normally be resolved unless the Orchestrator documents a valid reason not to apply them.

Suggestions may be accepted or rejected.

No finding may be silently ignored.

The Orchestrator must assign required corrections to the appropriate Specialist or integrate only those corrections that fall within the Orchestrator’s consolidation role.

---

# Step 10 — Produce the Consolidated Final Draft

After all blocking findings have been addressed, the Orchestrator must produce a consolidated final draft in:

`workspace/drafts/`

Recommended structure:

`REQ-XXXX-final-pending-approval.md`

The consolidated draft must:

- satisfy the original request;
- comply with the acceptance criteria;
- incorporate accepted review findings;
- preserve explicit assumptions and limitations;
- distinguish facts, assumptions, interpretations and recommendations;
- include a confidence level where applicable;
- remain clearly marked as pending Human Owner approval.

The Orchestrator must include a review-resolution section or a separate traceability record containing:

- finding identifier;
- severity;
- Reviewer recommendation;
- Orchestrator decision;
- action taken;
- affected section;
- justification for any rejected or partially accepted finding.

The consolidated draft is not yet an approved deliverable.

---

# Step 11 — Request Human Owner Approval

The Orchestrator must present the consolidated final draft to the Human Owner.

The approval request must summarize:

- request objective;
- assigned Specialist;
- files produced;
- Reviewer outcome;
- Critical or Major findings resolved;
- findings not applied and related justification;
- residual risks;
- limitations;
- current status;
- action requested from the Human Owner.

The Human Owner may respond with:

- approved;
- approved with conditions;
- revision required;
- rejected;
- clarification requested.

Ambiguous statements must not be interpreted as approval.

Approval must be explicit.

Examples of explicit approval include:

- “Approved.”
- “I approve the final document.”
- “Move the document to the approved directory.”

Silence, absence of objections or generic positive feedback does not constitute approval.

---

# Step 12 — Move the Deliverable Only After Explicit Approval

Only after explicit Human Owner approval may the Orchestrator move or copy the final deliverable to:

`workspace/approved/`

The approved filename should be stable, identifiable and versioned when appropriate.

Recommended structure:

`REQ-XXXX-approved-v1.md`

After approval, the Orchestrator must:

- preserve the approved content;
- update the task status;
- record the approval decision;
- record the approval date;
- record any conditions attached to the approval;
- ensure that the approved document is not edited directly.

If the Human Owner requests revisions:

1. retain the existing draft and review evidence;
2. create a new draft version;
3. apply the required changes;
4. perform another review when required;
5. request approval again.

If the deliverable is rejected, move it to `workspace/rejected/` only when required by project governance.

---

# Step 13 — Preserve Workflow Evidence

The workflow must preserve sufficient evidence to reconstruct:

- what was requested;
- how the request was interpreted;
- which task was created;
- how risk was classified;
- why the Specialist was selected;
- which inputs were used;
- what the Specialist produced;
- what the Reviewer identified;
- how each finding was handled;
- what the Human Owner decided;
- which file became the approved deliverable.

At minimum, preserve:

- original request;
- structured task;
- Specialist draft;
- review report;
- consolidated final draft;
- approval decision;
- approved deliverable, when applicable.

Do not delete previous drafts or review reports merely because a final version has been approved.

Audit evidence must remain separate from the approved deliverable.

---

# Status Lifecycle

Use the project status vocabulary where available.

A typical governed lifecycle is:

- `draft`
- `ready`
- `in_progress`
- `blocked`
- `submitted_for_review`
- `revision_required`
- `pending_human_approval`
- `approved`
- `completed`
- `rejected`
- `cancelled`

A deliverable must never move directly from Specialist execution to `approved`.

---

# Escalation Rules

Stop the workflow and escalate to the Human Owner when:

- the objective is materially ambiguous;
- essential inputs are missing;
- authorized evidence is insufficient;
- the request exceeds the permitted scope;
- risk is higher than the workflow authorization;
- governance rules conflict;
- a Critical finding cannot be resolved;
- agents disagree on a material issue that cannot be reconciled;
- approval requirements are unclear;
- an external action would be required;
- confidential or sensitive data appears outside its authorized location.

The escalation must include:

- issue;
- impact;
- available alternatives;
- recommended decision;
- action required from the Human Owner.

---

# Prohibited Actions

No agent may:

- skip mandatory workflow phases;
- fabricate evidence or missing information;
- approve its own work;
- treat a draft as an approved deliverable;
- move a file to `workspace/approved/` without explicit approval;
- directly modify an approved deliverable;
- silently ignore Reviewer findings;
- use unauthorized files or sources;
- conceal assumptions or limitations;
- perform external actions not explicitly authorized;
- alter the original request to make execution easier;
- represent automated output as a Human Owner decision.

---

# Failure Handling

If a workflow phase fails:

1. preserve all existing artifacts;
2. record the failure;
3. identify the affected phase;
4. avoid moving the workflow to the next phase;
5. determine whether the issue is correctable;
6. assign corrective action;
7. escalate when required.

A failed validation, unresolved Major finding or missing explicit approval must block completion.

---

# Completion Criteria

The governed workflow is complete only when:

- the request has been processed;
- the structured task has been created;
- risk has been classified;
- the Specialist selection has been justified;
- the Specialist draft has been produced;
- an independent review has been completed;
- all blocking findings have been resolved;
- the consolidated final draft has been produced;
- the Human Owner has made an explicit decision;
- the approved deliverable has been stored correctly, when approved;
- audit evidence has been preserved;
- the final task status has been updated.

If Human Owner approval is still pending, the workflow is not complete.

---

# Final Workflow Summary

At the end of each execution, the Orchestrator must provide a concise workflow summary containing:

## Request

- Request ID:
- Objective:

## Task

- Task ID:
- Risk level:
- Priority:

## Assignment

- Specialist:
- Assignment rationale:
- Applied skills:

## Deliverables

- Specialist draft:
- Review report:
- Consolidated draft:
- Approved deliverable:

## Review

- Critical findings:
- Major findings:
- Minor findings:
- Suggestions:
- Blocking findings resolved:

## Human Decision

- Status:
- Approval date:
- Approval conditions:

## Final Status

- Workflow status:
- Residual risks:
- Open actions: