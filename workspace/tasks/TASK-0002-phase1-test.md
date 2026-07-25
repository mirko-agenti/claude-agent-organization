# Task: Analisi di supporto alle decisioni - Adozione IA nei processi amministrativi

## Metadata

- Request ID: REQ-0002
- Task ID: TASK-0002
- Iteration: v1
- From: Orchestrator Agent
- To: General Specialist Agent
- Priority: Normal
- Risk level: Medium (document generation, nessuna azione esterna, nessun dato reale)
- Status: ready
- Date: 2026-07-24

## Riferimento alla richiesta

Questo task esegue quanto richiesto in `workspace/requests/REQ-0002-phase1-test.md` (REQ-0002).

## Obiettivo

Produrre un rapporto strutturato di supporto alle decisioni relativo all'introduzione dell'Intelligenza Artificiale nei processi amministrativi di un'azienda manifatturiera di medie dimensioni, applicando un processo di ragionamento analitico strutturato, tracciabile e verificabile.

## Scope

### Incluso

- Analisi della situazione attuale (as-is) dei processi amministrativi in un'azienda manifatturiera di medie dimensioni, basata esclusivamente su quanto ipotizzabile/dichiarabile a partire da REQ-0002 e su assunzioni esplicite laddove necessario.
- Identificazione delle opportunità di introduzione dell'IA in ambito amministrativo.
- Identificazione dei rischi connessi.
- Proposta di una roadmap di implementazione (fasi indicative).
- Stima dell'impatto aziendale atteso.
- Esplicitazione di tutte le assunzioni utilizzate.
- Dichiarazione del livello di confidenza complessivo dell'analisi.
- Sintesi esecutiva del rapporto.

### Escluso

- Ricerche esterne, benchmark di mercato, dati di settore reali o citazioni di fonti esterne.
- Uso di dati reali, riservati o relativi a clienti/aziende specifiche.
- Qualsiasi azione operativa (implementazione, configurazione, acquisto software, contatti fornitori).
- Decisioni finali di adozione: il rapporto è a supporto della decisione, non sostituisce l'approvazione dell'Human Owner.
- Modifiche a file al di fuori di `workspace/`.

## Input autorizzati

Unico input autorizzato per questo task:

- `workspace/requests/REQ-0002-phase1-test.md` (contenuto integrale della richiesta REQ-0002).

Non è autorizzata alcuna ricerca esterna (internet, documenti non presenti nel repository, conoscenza di dominio presentata come dato fattuale su un'azienda reale). Ogni informazione non derivabile direttamente da REQ-0002 deve essere dichiarata esplicitamente come assunzione (Assumption), stima (Estimate) o interpretazione (Interpretation), mai come fatto (Fact).

## Skill da utilizzare

Applica la skill `structured-analysis` (vedi `.claude/skills/structured-analysis/SKILL.md`).

## Deliverable atteso

Un rapporto in Markdown, in lingua italiana, salvato al percorso:

`workspace/drafts/REQ-0002-analysis.md`

### Struttura obbligatoria

Segui la struttura richiesta dalla skill `structured-analysis`, integrando le sezioni di contenuto specificamente richieste da REQ-0002:

```
# Deliverable Title

## Metadata
- Request ID
- Task ID
- Agent
- Version
- Status
- Date

## Executive Summary          (= sintesi esecutiva richiesta da REQ-0002)

## Objective

## Context

## Scope

## Inputs Used

## Evidence Quality

## Assumptions                (= assunzioni richieste da REQ-0002)

## Analysis
  - deve includere in modo chiaramente identificabile:
    - Analisi della situazione attuale
    - Opportunità
    - Impatto aziendale stimato

## Alternatives Considered

## Findings

## Risks and Limitations       (= rischi richiesti da REQ-0002)

## Recommendations
  - deve includere la Roadmap di implementazione richiesta da REQ-0002 (fasi, priorità indicativa, dipendenze)

## Confidence Level             (= livello di confidenza richiesto da REQ-0002)

## Open Questions

## Acceptance Criteria Verification
```

Tutte le otto componenti richieste esplicitamente da REQ-0002 (analisi situazione attuale, opportunità, rischi, roadmap di implementazione, impatto aziendale stimato, assunzioni, livello di confidenza, sintesi esecutiva) devono essere presenti e chiaramente rintracciabili all'interno di questa struttura.

## Criteri di accettazione

1. Il file è salvato esattamente in `workspace/drafts/REQ-0002-analysis.md`.
2. Tutte le sezioni richieste dalla skill `structured-analysis` sono presenti e compilate.
3. Tutte le otto componenti di contenuto richieste da REQ-0002 sono presenti e identificabili.
4. Ogni informazione non direttamente derivabile da REQ-0002 è etichettata come Assumption, Estimate o Interpretation e non come Fact.
5. Nessun dato è inventato spacciandolo per fatto verificato; nessuna fonte esterna è citata o utilizzata.
6. I rischi materiali sono documentati con probabilità, impatto e mitigazione proposta.
7. Le raccomandazioni/roadmap derivano in modo tracciabile dall'analisi presentata.
8. Il livello di confidenza complessivo è dichiarato e motivato.
9. Le domande aperte e le limitazioni informative sono esplicitate.
10. Il documento non contiene azioni operative eseguite, richieste di pubblicazione o riferimenti a integrazioni esterne.

## Dipendenze

Nessuna dipendenza da altri task. Precondizione: REQ-0002 disponibile e non modificata.

## Vincoli di governance rilevanti

- Nessuna modifica a file al di fuori di `workspace/` (in particolare non modificare REQ-0002, CLAUDE.MD, GOVERNANCE.MD, config/, .claude/).
- Nessuna pubblicazione, invio o comunicazione esterna del contenuto prodotto.
- Nessuna integrazione con sistemi esterni, nessuna ricerca su internet.
- Nessun uso di dati personali, riservati o relativi a clienti reali (solo dati sintetici/ipotetici, dichiarati come tali).
- Il deliverable prodotto è una bozza (draft): non deve essere presentato come approvato. Lo stato corretto in consegna è `submitted_for_review`.
- Al termine, lo Specialist deve restituire all'Orchestrator il messaggio di consegna secondo il formato previsto dal proprio agent definition (file prodotto, sintesi, assunzioni, rischi, limitazioni, livello di confidenza, questioni aperte), senza comunicare direttamente con l'Human Owner.

## Output atteso di consegna

- Deliverable: `workspace/drafts/REQ-0002-analysis.md`
- Stato del task al termine: `submitted_for_review`
- Notifica di consegna all'Orchestrator secondo il formato "Task delivery" previsto per il General Specialist Agent.
