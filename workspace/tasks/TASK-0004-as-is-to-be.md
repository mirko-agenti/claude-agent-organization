# Task: Analisi AS-IS e proposta TO-BE del processo di approvazione delle fatture

## Metadata

- Request ID: REQ-0004
- Task ID: TASK-0004
- Iteration: v1
- From: Orchestrator Agent
- To: Business Analyst Agent
- Priority: Normal
- Risk level: Medium (document generation, nessuna azione esterna, nessun dato reale) — vedi motivazione sotto
- Status: ready
- Date: 2026-07-28

## Riferimento alla richiesta

Questo task esegue quanto richiesto in `workspace/requests/REQ-0003-as-is-to-be.md`.

### Nota sulla collisione di identificativo

Il file sorgente della richiesta è nominato `REQ-0003-as-is-to-be.md`, ma l'identificativo REQ-0003 è già assegnato a un'altra richiesta, completata e approvata (adozione IA nei processi amministrativi — vedi `workspace/requests/REQ-0003-phase2.md` e `workspace/approved/REQ-0003-final.md`). In base alla regola "non riutilizzare identificativi già esistenti" (orchestrator.md §11), a questa richiesta viene assegnato l'identificativo **REQ-0004**. Il file `workspace/requests/REQ-0003-as-is-to-be.md` non è stato e non deve essere modificato o rinominato: resta la fonte autorizzata del contenuto della richiesta, ma va letto e trattato come REQ-0004 in tutti gli artefatti di workflow (task, draft, review, approvazione).

## Motivazione della scelta dell'agente

Il task richiede un'analisi AS-IS/TO-BE di un processo di business (approvazione delle fatture) e la proposta di una sua digitalizzazione. In base ai criteri di instradamento (orchestrator.md §7) e al proprio agent definition, il Business Analyst Agent è lo specialista designato per "processi di business, requisiti, analisi AS-IS/TO-BE, analisi funzionale, disegno organizzativo e trasformazione". Non si tratta né di un'analisi prevalentemente finanziaria (financial-analyst), né di raccolta/validazione di fonti esterne (research-specialist); non è necessario ricorrere al general-specialist essendo disponibile uno specialista dedicato e pertinente.

## Obiettivo

Produrre un'analisi strutturata del processo AS-IS di approvazione delle fatture e una proposta di processo TO-BE digitalizzato, applicando il framework definito dalla skill `structured-analysis`, distinguendo chiaramente fatti, assunzioni, stime, interpretazioni e raccomandazioni.

## Scope

### Incluso

- Descrizione del processo AS-IS di approvazione delle fatture (attori coinvolti, fasi, input/output di ciascuna fase, strumenti/supporti ipotizzati, punti di controllo), costruita esplicitamente come scenario sintetico/plausibile e non come descrizione di un'azienda reale.
- Identificazione delle criticità/inefficienze del processo AS-IS (es. tempi, colli di bottiglia, rischi di errore o frode, tracciabilità, duplicazioni di attività) come interpretazioni motivate, non come fatti verificati.
- Proposta di un processo TO-BE digitalizzato, coerente con l'AS-IS descritto, con indicazione delle fasi, degli attori, dei punti di automazione/digitalizzazione e dei controlli.
- Confronto AS-IS vs TO-BE con evidenza dei benefici attesi e delle differenze principali.
- Identificazione dei rischi connessi alla trasformazione proposta (organizzativi, operativi, di controllo) con probabilità, impatto e mitigazione.
- Indicazione di alto livello delle condizioni abilitanti e delle dipendenze per il passaggio da AS-IS a TO-BE (es. change management, formazione, eventuali strumenti), senza scendere nel dettaglio implementativo di soluzioni tecnologiche specifiche.
- Esplicitazione di tutte le assunzioni utilizzate, del relativo livello di confidenza e dell'impatto se risultassero errate.
- Dichiarazione del livello di confidenza complessivo dell'analisi.
- Sintesi esecutiva del rapporto.

### Escluso

- Ricerche esterne, benchmark di mercato, best practice di settore citate come fonti, dati di settore reali.
- Uso di dati reali, riservati o relativi a un'azienda, cliente o fornitore specifico e realmente esistente.
- Selezione o raccomandazione di uno specifico prodotto/fornitore software.
- Qualsiasi azione operativa (implementazione, configurazione, acquisto, contatti con fornitori, change reale sui sistemi).
- Decisioni finali di adozione del TO-BE: il rapporto è a supporto della decisione, non sostituisce l'approvazione dell'Human Owner.
- Qualsiasi modifica a file al di fuori di `workspace/`.
- Qualsiasi pubblicazione o comunicazione esterna del contenuto prodotto.
- Qualsiasi integrazione con sistemi esterni.

## Input autorizzati

Unico input autorizzato per questo task:

- `workspace/requests/REQ-0003-as-is-to-be.md` (contenuto integrale della richiesta, qui trattata come REQ-0004).

Non è autorizzata alcuna ricerca esterna (internet, documenti non presenti nel repository, conoscenza di dominio presentata come dato fattuale su un'azienda reale). Poiché la richiesta non specifica settore, dimensione aziendale, volumi di fatture, sistemi attualmente in uso né organigramma, lo Specialist deve costruire uno scenario AS-IS plausibile e generico, dichiarando esplicitamente come Assumption ogni elemento non derivabile dal testo della richiesta (es. tipologia di azienda, volumi, ruoli coinvolti, strumenti attualmente in uso), motivandone la necessità, il livello di confidenza e l'impatto sull'analisi in caso di scostamento dalla realtà.

## Skill da utilizzare

Applica la skill `structured-analysis` (vedi `.claude/skills/structured-analysis/SKILL.md`).

## Deliverable atteso

Un rapporto in Markdown, in lingua italiana, salvato ESCLUSIVAMENTE al percorso:

`workspace/drafts/REQ-0004-analysis.md`

Questo è l'UNICO percorso di output autorizzato per questo task. Lo Specialist non deve creare, modificare o scrivere alcun altro file, né all'interno né all'esterno di `workspace/`.

### Struttura obbligatoria

Segui la struttura richiesta dalla skill `structured-analysis`, integrando le sezioni di contenuto specificamente richieste da questo task:

```
# Deliverable Title

## Metadata
- Request ID (REQ-0004)
- Task ID (TASK-0004)
- Agent
- Version
- Status
- Date

## Executive Summary

## Objective

## Context

## Scope

## Inputs Used

## Evidence Quality

## Assumptions

## Analysis
  - deve includere in modo chiaramente identificabile:
    - Processo AS-IS (attori, fasi, input/output, strumenti, controlli)
    - Criticità/inefficienze dell'AS-IS
    - Processo TO-BE digitalizzato (attori, fasi, punti di automazione, controlli)
    - Confronto AS-IS vs TO-BE

## Alternatives Considered
  - se pertinente, eventuali alternative di digitalizzazione considerate e motivo della scelta proposta

## Findings

## Risks and Limitations
  - rischi della trasformazione (organizzativi, operativi, di controllo), con probabilità, impatto, mitigazione

## Recommendations
  - condizioni abilitanti e dipendenze indicative per il passaggio da AS-IS a TO-BE

## Confidence Level

## Open Questions

## Acceptance Criteria Verification
```

## Criteri di accettazione

1. Il file è salvato esattamente e unicamente in `workspace/drafts/REQ-0004-analysis.md`; nessun altro file è stato creato o modificato.
2. Tutte le sezioni richieste dalla skill `structured-analysis` sono presenti e compilate.
3. Il processo AS-IS è descritto in modo strutturato (attori, fasi, input/output, controlli) ed è chiaramente identificabile come scenario sintetico/ipotetico.
4. Le criticità dell'AS-IS sono identificate e motivate.
5. Il processo TO-BE digitalizzato è descritto in modo strutturato ed è coerente con l'AS-IS presentato.
6. È presente un confronto esplicito tra AS-IS e TO-BE con i benefici attesi.
7. Ogni informazione non direttamente derivabile dalla richiesta è etichettata come Assumption, Estimate o Interpretation e non come Fact.
8. Nessun dato è inventato spacciandolo per fatto verificato relativo a un'azienda reale; nessuna fonte esterna è citata o utilizzata.
9. I rischi materiali della trasformazione sono documentati con probabilità, impatto e mitigazione proposta.
10. Le raccomandazioni derivano in modo tracciabile dall'analisi presentata e non includono la selezione di uno specifico prodotto/fornitore.
11. Il livello di confidenza complessivo è dichiarato e motivato.
12. Le domande aperte e le limitazioni informative sono esplicitate.
13. Il documento non contiene azioni operative eseguite, richieste di pubblicazione o riferimenti a integrazioni esterne.
14. Il file `workspace/requests/REQ-0003-as-is-to-be.md` non è stato modificato o rinominato.

## Dipendenze

Nessuna dipendenza da altri task. Precondizione: `workspace/requests/REQ-0003-as-is-to-be.md` disponibile e non modificato.

## Vincoli di governance rilevanti

- Nessuna modifica a file al di fuori di `workspace/` (in particolare non modificare REQ-0003, REQ-0004, CLAUDE.MD, GOVERNANCE.MD, config/, .claude/).
- Nessuna scrittura in posizioni diverse da `workspace/drafts/REQ-0004-analysis.md`: nessun file aggiuntivo, nessuna sovrascrittura di altri deliverable.
- Nessuna pubblicazione, invio o comunicazione esterna del contenuto prodotto.
- Nessuna integrazione con sistemi esterni, nessuna ricerca su internet.
- Nessun uso di dati personali, riservati o relativi ad aziende, clienti o fornitori reali (solo scenario sintetico/ipotetico, dichiarato come tale).
- Il deliverable prodotto è una bozza (draft): non deve essere presentato come approvato. Lo stato corretto in consegna è `submitted_for_review`.
- Al termine, lo Specialist deve restituire all'Orchestrator il messaggio di consegna secondo il formato previsto dal proprio agent definition (file prodotto, sintesi, assunzioni, rischi, limitazioni, livello di confidenza, questioni aperte), senza comunicare direttamente con l'Human Owner.

## Livello di rischio — motivazione

Medium. Il deliverable è un documento di supporto decisionale su un processo di business (approvazione delle fatture) con possibile impatto organizzativo se il TO-BE proposto venisse successivamente adottato; non comporta tuttavia azioni esterne, irreversibili, dati reali/sensibili né pubblicazione. Coerente con GOVERNANCE.MD (Medium risk: generazione di documenti, revisione umana richiesta prima dell'adozione) e con la skill `governed-workflow` (Medium: decision-support deliverable, business implications, uso di assunzioni, possibile impatto organizzativo).

## Output atteso di consegna

- Deliverable: `workspace/drafts/REQ-0004-analysis.md` (unico file da produrre)
- Stato del task al termine: `submitted_for_review`
- Notifica di consegna all'Orchestrator secondo il formato "Task delivery" previsto per il Business Analyst Agent.
