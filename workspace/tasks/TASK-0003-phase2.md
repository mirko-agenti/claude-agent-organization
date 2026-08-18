# Task: Analisi di supporto alle decisioni - Adozione IA nei processi amministrativi

## Metadata

- Request ID: REQ-0003
- Task ID: TASK-0003
- Iteration: v1
- From: Orchestrator Agent
- To: General Specialist Agent
- Priority: Normal
- Risk level: Medium (document generation, nessuna azione esterna, nessun dato reale)
- Status: ready
- Date: 2026-07-28

## Riferimento alla richiesta

Questo task esegue quanto richiesto in `workspace/requests/REQ-0003-phase2.md` (REQ-0003).

## Motivazione della scelta dell'agente

Il task richiede un'analisi generalista di supporto alle decisioni, applicando la skill `structured-analysis`, in un dominio (adozione IA nei processi amministrativi di un'azienda manifatturiera) per cui non è disponibile nel repository uno specialista verticale dedicato. In base al proprio agent definition, il General Specialist Agent è l'agente designato per questo tipo di task, in via residuale rispetto a eventuali specialisti verticali non presenti.

## Obiettivo

Produrre un rapporto strutturato di supporto alle decisioni relativo all'introduzione dell'Intelligenza Artificiale nei processi amministrativi di un'azienda manifatturiera di medie dimensioni, applicando un processo di ragionamento analitico strutturato, tracciabile e verificabile, secondo il framework definito dalla skill `structured-analysis`.

## Scope

### Incluso

- Analisi della situazione attuale (as-is) dei processi amministrativi in un'azienda manifatturiera di medie dimensioni, basata esclusivamente su quanto ipotizzabile/dichiarabile a partire da REQ-0003 e su assunzioni esplicite laddove necessario.
- Identificazione delle opportunità di introduzione dell'IA in ambito amministrativo.
- Identificazione dei rischi connessi.
- Proposta di una roadmap di implementazione (fasi indicative, priorità, dipendenze).
- Stima dell'impatto aziendale atteso.
- Esplicitazione di tutte le assunzioni utilizzate.
- Dichiarazione del livello di confidenza complessivo dell'analisi.
- Sintesi esecutiva del rapporto.

### Escluso

- Ricerche esterne, benchmark di mercato, dati di settore reali o citazioni di fonti esterne.
- Uso di dati reali, riservati o relativi a clienti/aziende specifiche.
- Qualsiasi azione operativa (implementazione, configurazione, acquisto software, contatti fornitori).
- Decisioni finali di adozione: il rapporto è a supporto della decisione, non sostituisce l'approvazione dell'Human Owner.
- Qualsiasi modifica a file al di fuori di `workspace/`.
- Qualsiasi pubblicazione o comunicazione esterna del contenuto prodotto.
- Qualsiasi integrazione con sistemi esterni.

## Input autorizzati

Unico input autorizzato per questo task:

- `workspace/requests/REQ-0003-phase2.md` (contenuto integrale della richiesta REQ-0003).

Non è autorizzata alcuna ricerca esterna (internet, documenti non presenti nel repository, conoscenza di dominio presentata come dato fattuale su un'azienda reale). Ogni informazione non derivabile direttamente da REQ-0003 deve essere dichiarata esplicitamente come assunzione (Assumption), stima (Estimate) o interpretazione (Interpretation), mai come fatto (Fact).

## Skill da utilizzare

Applica la skill `structured-analysis` (vedi `.claude/skills/structured-analysis/SKILL.md`).

## Deliverable atteso

Un rapporto in Markdown, in lingua italiana, salvato ESCLUSIVAMENTE al percorso:

`workspace/drafts/REQ-0003-analysis.md`

Questo è l'UNICO percorso di output autorizzato per questo task. Lo Specialist non deve creare, modificare o scrivere alcun altro file, né all'interno né all'esterno di `workspace/`.

### Struttura obbligatoria

Segui la struttura richiesta dalla skill `structured-analysis`, integrando le sezioni di contenuto specificamente richieste da REQ-0003:

```
# Deliverable Title

## Metadata
- Request ID
- Task ID
- Agent
- Version
- Status
- Date

## Executive Summary          (= sintesi esecutiva richiesta da REQ-0003)

## Objective

## Context

## Scope

## Inputs Used

## Evidence Quality

## Assumptions                (= assunzioni richieste da REQ-0003)

## Analysis
  - deve includere in modo chiaramente identificabile:
    - Analisi della situazione attuale
    - Opportunità
    - Impatto aziendale stimato

## Alternatives Considered

## Findings

## Risks and Limitations       (= rischi richiesti da REQ-0003)

## Recommendations
  - deve includere la Roadmap di implementazione richiesta da REQ-0003 (fasi, priorità indicativa, dipendenze)

## Confidence Level             (= livello di confidenza richiesto da REQ-0003)

## Open Questions

## Acceptance Criteria Verification
```

Tutte le otto componenti richieste esplicitamente da REQ-0003 (analisi situazione attuale, opportunità, rischi, roadmap di implementazione, impatto aziendale stimato, assunzioni, livello di confidenza, sintesi esecutiva) devono essere presenti e chiaramente rintracciabili all'interno di questa struttura.

## Criteri di accettazione

1. Il file è salvato esattamente e unicamente in `workspace/drafts/REQ-0003-analysis.md`; nessun altro file è stato creato o modificato.
2. Tutte le sezioni richieste dalla skill `structured-analysis` sono presenti e compilate.
3. Tutte le otto componenti di contenuto richieste da REQ-0003 sono presenti e identificabili.
4. Ogni informazione non direttamente derivabile da REQ-0003 è etichettata come Assumption, Estimate o Interpretation e non come Fact.
5. Nessun dato è inventato spacciandolo per fatto verificato; nessuna fonte esterna è citata o utilizzata.
6. I rischi materiali sono documentati con probabilità, impatto e mitigazione proposta.
7. Le raccomandazioni/roadmap derivano in modo tracciabile dall'analisi presentata.
8. Il livello di confidenza complessivo è dichiarato e motivato.
9. Le domande aperte e le limitazioni informative sono esplicitate.
10. Il documento non contiene azioni operative eseguite, richieste di pubblicazione o riferimenti a integrazioni esterne.
11. Il file `workspace/requests/REQ-0003-phase2.md` non è stato modificato.

## Dipendenze

Nessuna dipendenza da altri task. Precondizione: REQ-0003 disponibile e non modificata.

## Vincoli di governance rilevanti

- Nessuna modifica a file al di fuori di `workspace/` (in particolare non modificare REQ-0003, CLAUDE.MD, GOVERNANCE.MD, config/, .claude/).
- Nessuna scrittura in posizioni diverse da `workspace/drafts/REQ-0003-analysis.md`: nessun file aggiuntivo, nessuna sovrascrittura di altri deliverable.
- Nessuna pubblicazione, invio o comunicazione esterna del contenuto prodotto.
- Nessuna integrazione con sistemi esterni, nessuna ricerca su internet.
- Nessun uso di dati personali, riservati o relativi a clienti reali (solo dati sintetici/ipotetici, dichiarati come tali).
- Il deliverable prodotto è una bozza (draft): non deve essere presentato come approvato. Lo stato corretto in consegna è `submitted_for_review`.
- Al termine, lo Specialist deve restituire all'Orchestrator il messaggio di consegna secondo il formato previsto dal proprio agent definition (file prodotto, sintesi, assunzioni, rischi, limitazioni, livello di confidenza, questioni aperte), senza comunicare direttamente con l'Human Owner.

## Output atteso di consegna

- Deliverable: `workspace/drafts/REQ-0003-analysis.md` (unico file da produrre)
- Stato del task al termine: `submitted_for_review`
- Notifica di consegna all'Orchestrator secondo il formato "Task delivery" previsto per il General Specialist Agent.
