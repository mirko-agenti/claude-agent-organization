# Estrazione — `.claude/agents/` e riferimenti correlati

File esaminati (nessuno modificato): `.claude/agents/orchestrator.md`, `.claude/agents/general-specialist.md`, `.claude/agents/reviewer.md`, `.claude/skills/structured-analysis/SKILL.md`, `CLAUDE.MD`, `GOVERNANCE.MD`.

## 1. Frontmatter YAML attuale

**`orchestrator.md`**
```yaml
---
name: orchestrator
description: >
  Coordina il sistema multi-agente. Analizza le richieste dell'utente,
  crea il piano di lavoro, genera e assegna i task, gestisce dipendenze,
  supervisiona l'avanzamento, richiede revisioni e sottopone il risultato
  finale all'approvazione umana.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
permissionMode: default
---
```

**`general-specialist.md`**
```yaml
---
name: general-specialist
description: >
  Esegue task di analisi generale e produce deliverable strutturati
  sulla base degli input ricevuti dall'Orchestrator. Utilizzalo nel
  prototipo locale governato per testare il workflow prima della
  creazione degli agenti specialistici verticali.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
skills:
  - structured-analysis
permissionMode: default
---
```

**`reviewer.md`**
```yaml
---
name: reviewer
description: >
  Revisiona in modo indipendente i deliverable prodotti dagli altri agenti.
  Verifica completezza, correttezza, coerenza, tracciabilità, rischi,
  assunzioni, conformità alla governance e rispetto dei criteri di
  accettazione. Non modifica direttamente il deliverable.
tools:
  - Read
  - Write
  - Glob
  - Grep
permissionMode: default
---
```

## 2. Strumenti assegnati

| Agente | Tools |
|---|---|
| `orchestrator` | Read, Write, Edit, Glob, Grep |
| `general-specialist` | Read, Write, Edit, Glob, Grep (+ campo `skills: structured-analysis`) |
| `reviewer` | Read, Write, Glob, Grep (nessun `Edit`) |

## 3. Description attuale

- **orchestrator**: "Coordina il sistema multi-agente. Analizza le richieste dell'utente, crea il piano di lavoro, genera e assegna i task, gestisce dipendenze, supervisiona l'avanzamento, richiede revisioni e sottopone il risultato finale all'approvazione umana."
- **general-specialist**: "Esegue task di analisi generale e produce deliverable strutturati sulla base degli input ricevuti dall'Orchestrator. Utilizzalo nel prototipo locale governato per testare il workflow prima della creazione degli agenti specialistici verticali."
- **reviewer**: "Revisiona in modo indipendente i deliverable prodotti dagli altri agenti. Verifica completezza, correttezza, coerenza, tracciabilità, rischi, assunzioni, conformità alla governance e rispetto dei criteri di accettazione. Non modifica direttamente il deliverable."

## 4. Riferimenti a CLAUDE.md e GOVERNANCE.md

**`orchestrator.md`**
- §4 "Fonti normative e operative" (righe 65-68): "Prima di avviare qualsiasi workflow devi leggere, quando presenti: `CLAUDE.md`; `GOVERNANCE.md`; ..."
- §4 (riga 80), ordine di priorità in caso di conflitto: "3. `CLAUDE.md`" (GOVERNANCE citata al punto 2 come "regole di governance", non nominata testualmente lì)

**`general-specialist.md`**
- §4 "Fonti normative e operative" (righe 63-66): "Prima di iniziare un task devi leggere, quando pertinenti: `CLAUDE.md`; `GOVERNANCE.md`; ..."
- §4 (riga 78), ordine di priorità: "3. `CLAUDE.md`"

**`reviewer.md`**
- §5 "Fonti normative e operative" (righe 91-94): "Prima di iniziare devi leggere: `CLAUDE.md`; `GOVERNANCE.md`; ..."
- §5 (riga 107), ordine di priorità: "3. `CLAUDE.md`"
- §9.H "Rischi e governance" (riga 300): "Il deliverable rispetta `GOVERNANCE.md`?"

Nota: in tutti e tre i file la citazione usa il case `CLAUDE.md` / `GOVERNANCE.md`, mentre i file reali nel repository sono `CLAUDE.MD` / `GOVERNANCE.MD`.

## 5. Percorsi di scrittura attribuiti agli agenti

**`orchestrator.md`**
- §5.11: "creare i file dei task nella cartella prevista"
- §11 Fase 2.6: "Crea i file dei task"
- §11 Fase 7.3: "sposta i deliverable nella cartella corretta"
- §16 "Percorsi dei file" (righe 410-419), elenco esplicito:
  ```
  workspace/requests/     richieste originali
  workspace/tasks/        task
  workspace/drafts/       deliverable in lavorazione
  workspace/reviews/      report di revisione
  workspace/approved/     deliverable approvati
  workspace/rejected/     deliverable rigettati
  memory/decisions/       decisioni approvate
  memory/projects/        memoria di progetto
  ```
  con la regola "Non salvare file in posizioni casuali."

**`general-specialist.md`**
- §5.12: "salvare il file nella posizione assegnata"
- §8: "Percorso di salvataggio definito" (tra i controlli preliminari)
- §9 Fase 5.1: "Salva il deliverable"
- §20 (Definition of Done): "il file è salvato nel percorso corretto"
- Nessun percorso esplicito è cablato nel file (es. `workspace/drafts/`): è sempre definito dal task assegnato, non dal file agente stesso.

**`reviewer.md`**
- §6.16: "salvare il report nella cartella prevista"
- §10 Fase 4.5: "Salva il report in `workspace/reviews/`" (unico percorso esplicito citato nel file)
- §18 (Definition of Done): "il report è salvato nel percorso corretto"

## 6. Riferimenti alla skill `structured-analysis`

**`general-specialist.md`**
- Frontmatter (righe 14-15): `skills: - structured-analysis`
- §2 "Missione" (riga 39): tra le risorse da usare, "le skill approvate"
- §4 "Fonti normative e operative" (riga 70): "le skill autorizzate" (generico, non nomina la skill)
- §7 "Input accettati" (riga 145): "le skill approvate"
- §9 Fase 2.3: "Individua la skill da applicare"
- §19 "Criteri di escalation" (riga 467): "è necessaria una skill non approvata"

Nessuno dei tre file `.claude/agents/*.md` cita il nome `structured-analysis` esplicitamente nel testo — solo il frontmatter di `general-specialist.md` la nomina direttamente. `orchestrator.md` e `reviewer.md` non menzionano mai la skill, né per nome né genericamente, salvo:
- `orchestrator.md` §4 (riga 83): "istruzioni delle skill" (nell'ordine di priorità dei conflitti, generico)
- `reviewer.md` §5 (righe 100, 110): "eventuali skill rilevanti" / "skill" (generico, nell'ordine di priorità)

**`.claude/skills/structured-analysis/SKILL.md`**
- Frontmatter: `name: structured-analysis`, `description: Standardize analytical work so that outputs are structured, evidence-based, traceable, transparent about assumptions and uncertainty, and useful for decision-making. Use for business, process, document, requirements, risk, technical, strategic, root-cause, alternatives, and decision-support analyses.`
- Non contiene riferimenti in senso inverso agli agenti (non nomina `general-specialist`, `orchestrator` o `reviewer`).
