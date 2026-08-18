# Task: Analisi AS-IS del processo amministrativo (sottotask 1 di 2 - REQ-0005)

## Metadata

- Request ID: REQ-0005
- Task ID: TASK-0005A
- Iteration: v1
- From: Orchestrator Agent
- To: Business Analyst Agent
- Priority: Normal
- Risk level: Medium — vedi motivazione in fondo al documento
- Status: ready
- Date: 2026-07-28

## Riferimento alla richiesta

Questo task esegue una parte di quanto richiesto in `workspace/requests/REQ-0005-phase3.md` (REQ-0005): "Analizzare il processo amministrativo corrente e stimare l'impatto economico della sua automazione."

### Nota sulla scomposizione multidisciplinare

La richiesta REQ-0005 è genuinamente multidisciplinare: comprende (a) un'analisi di processo (AS-IS) e (b) una stima dell'impatto economico dell'automazione. In base a orchestrator.md §7 e allo Step 4 della skill `governed-workflow`, non viene assegnata indivisa a un solo specialista, ma scomposta in due sottotask non sovrapposti:

- **TASK-0005A** (questo task): analisi di processo AS-IS — assegnato a `business-analyst`.
- **TASK-0005B**: stima dell'impatto economico dell'automazione — assegnato a `financial-analyst`, dipendente dall'output di questo task.

## Motivazione della scelta dell'agente

Il task richiede l'analisi di un processo di business (il processo amministrativo corrente), inclusi attori, fasi, input/output, strumenti e criticità. In base ai criteri di instradamento (orchestrator.md §7: "Usa `business-analyst` per processi di business, requisiti, analisi AS-IS/TO-BE, analisi funzionale, disegno organizzativo e trasformazione") e al proprio agent definition ("Performs business, functional, process, requirements, AS-IS/TO-BE and gap analyses"), il Business Analyst Agent è lo specialista designato. Non si tratta di un'analisi economico-finanziaria (quella è oggetto del sottotask TASK-0005B, assegnato al `financial-analyst`), né di raccolta/validazione di fonti esterne (`research-specialist`); non è necessario ricorrere al `general-specialist` essendo disponibile uno specialista dedicato e pertinente.

## Obiettivo

Produrre un'analisi strutturata del processo amministrativo AS-IS (attori, fasi, input/output, strumenti, controlli, criticità) e identificare esplicitamente le opportunità di automazione presenti nel processo, applicando il framework definito dalla skill `structured-analysis`, distinguendo chiaramente fatti, assunzioni, stime, interpretazioni e raccomandazioni.

Le opportunità di automazione identificate in questo task costituiscono l'input primario per il sottotask TASK-0005B, che ne stimerà l'impatto economico: devono quindi essere descritte in modo sufficientemente concreto e granulare (es. singola fase o attività automatizzabile, natura dell'automazione ipotizzata, beneficio atteso in termini qualitativi) da poter essere quantificate a valle.

## Scope

### Incluso

- Descrizione del processo amministrativo AS-IS (attori coinvolti, fasi, input/output di ciascuna fase, strumenti/supporti ipotizzati, punti di controllo), costruita esplicitamente come scenario sintetico/plausibile e non come descrizione di un'azienda reale.
- Identificazione delle criticità/inefficienze del processo AS-IS (es. tempi, colli di bottiglia, attività manuali ripetitive, rischi di errore, duplicazioni), come interpretazioni motivate, non come fatti verificati.
- Identificazione esplicita e granulare delle opportunità di automazione: per ciascuna fase/attività automatizzabile, indicare la natura dell'automazione ipotizzata (es. eliminazione di un passaggio manuale, digitalizzazione di un controllo, automazione di una verifica) e il beneficio atteso in termini qualitativi (tempo, qualità, controllo), senza quantificazione economica (che è competenza del sottotask TASK-0005B).
- Esplicitazione di tutte le assunzioni utilizzate (es. settore, dimensione azienda, volumi, ruoli coinvolti, strumenti attualmente in uso), del relativo livello di confidenza e dell'impatto se risultassero errate.
- Dichiarazione del livello di confidenza complessivo dell'analisi.
- Sintesi esecutiva del rapporto.

### Escluso

- Qualsiasi quantificazione economica dell'impatto dell'automazione (costi, risparmi, ROI, payback): è competenza esclusiva del sottotask TASK-0005B.
- Ricerche esterne, benchmark di mercato, best practice di settore citate come fonti, dati di settore reali.
- Uso di dati reali, riservati o relativi a un'azienda, cliente o fornitore specifico e realmente esistente.
- Selezione o raccomandazione di uno specifico prodotto/fornitore software.
- Qualsiasi azione operativa (implementazione, configurazione, acquisto, contatti con fornitori, change reale sui sistemi).
- Decisioni finali di adozione: il rapporto è a supporto della decisione, non sostituisce l'approvazione dell'Human Owner.
- Qualsiasi modifica a file al di fuori di `workspace/`.
- Qualsiasi pubblicazione o comunicazione esterna del contenuto prodotto.
- Qualsiasi integrazione con sistemi esterni.

## Input autorizzati

Unico input autorizzato per questo task:

- `workspace/requests/REQ-0005-phase3.md` (contenuto integrale della richiesta REQ-0005).

Non è autorizzata alcuna ricerca esterna (internet, documenti non presenti nel repository, conoscenza di dominio presentata come dato fattuale su un'azienda reale). Poiché la richiesta non specifica settore, dimensione aziendale, tipo di processo amministrativo, volumi né organigramma, lo Specialist deve costruire uno scenario AS-IS plausibile e generico (a titolo di esempio, un processo amministrativo tipico come la gestione di note spese, fatturazione attiva/passiva o simili — la scelta specifica è a discrezione motivata dello Specialist), dichiarando esplicitamente come Assumption ogni elemento non derivabile dal testo della richiesta, motivandone la necessità, il livello di confidenza e l'impatto sull'analisi in caso di scostamento dalla realtà.

## Skill da utilizzare

Applica la skill `structured-analysis` (vedi `.claude/skills/structured-analysis/SKILL.md`).

## Deliverable atteso

Un rapporto in Markdown, in lingua italiana, salvato ESCLUSIVAMENTE al percorso:

`workspace/drafts/REQ-0005-process-analysis.md`

Questo è l'UNICO percorso di output autorizzato per questo task. Lo Specialist non deve creare, modificare o scrivere alcun altro file, né all'interno né all'esterno di `workspace/`.

### Struttura obbligatoria

Segui la struttura richiesta dalla skill `structured-analysis`, integrando le sezioni di contenuto specificamente richieste da questo task:

```
# Deliverable Title

## Metadata
- Request ID (REQ-0005)
- Task ID (TASK-0005A)
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
    - Opportunità di automazione identificate (elenco puntuale, per fase/attività, con natura dell'automazione ipotizzata e beneficio atteso qualitativo)

## Alternatives Considered

## Findings

## Risks and Limitations

## Recommendations

## Confidence Level

## Open Questions

## Acceptance Criteria Verification
```

## Criteri di accettazione

1. Il file è salvato esattamente e unicamente in `workspace/drafts/REQ-0005-process-analysis.md`; nessun altro file è stato creato o modificato.
2. Tutte le sezioni richieste dalla skill `structured-analysis` sono presenti e compilate.
3. Il processo AS-IS è descritto in modo strutturato (attori, fasi, input/output, controlli) ed è chiaramente identificabile come scenario sintetico/ipotetico.
4. Le criticità dell'AS-IS sono identificate e motivate.
5. Le opportunità di automazione sono identificate in modo esplicito, puntuale e granulare (per fase/attività), con natura dell'automazione ipotizzata e beneficio atteso qualitativo, in modo tale da poter essere utilizzate come base per la stima economica del sottotask TASK-0005B.
6. Nessuna quantificazione economica è presente in questo deliverable.
7. Ogni informazione non direttamente derivabile dalla richiesta è etichettata come Assumption, Estimate o Interpretation e non come Fact.
8. Nessun dato è inventato spacciandolo per fatto verificato relativo a un'azienda reale; nessuna fonte esterna è citata o utilizzata.
9. Le raccomandazioni derivano in modo tracciabile dall'analisi presentata e non includono la selezione di uno specifico prodotto/fornitore.
10. Il livello di confidenza complessivo è dichiarato e motivato.
11. Le domande aperte e le limitazioni informative sono esplicitate.
12. Il documento non contiene azioni operative eseguite, richieste di pubblicazione o riferimenti a integrazioni esterne.
13. Il file `workspace/requests/REQ-0005-phase3.md` non è stato modificato.

## Dipendenze

Nessuna dipendenza da altri task. Precondizione: `workspace/requests/REQ-0005-phase3.md` disponibile e non modificato.

Questo task è propedeutico a TASK-0005B: il suo output (`workspace/drafts/REQ-0005-process-analysis.md`) è input autorizzato del sottotask TASK-0005B.

## Punto di integrazione con TASK-0005B

L'elenco delle opportunità di automazione identificate nella sezione "Analysis" di questo deliverable costituisce la base esclusiva su cui il `financial-analyst` (TASK-0005B) dovrà costruire la stima dell'impatto economico. Il financial-analyst non è autorizzato a stimare l'impatto economico di un processo generico indipendente da questa analisi.

## Vincoli di governance rilevanti

- Nessuna modifica a file al di fuori di `workspace/` (in particolare non modificare REQ-0005, CLAUDE.MD, GOVERNANCE.MD, config/, .claude/).
- Nessuna scrittura in posizioni diverse da `workspace/drafts/REQ-0005-process-analysis.md`: nessun file aggiuntivo, nessuna sovrascrittura di altri deliverable.
- Nessuna pubblicazione, invio o comunicazione esterna del contenuto prodotto.
- Nessuna integrazione con sistemi esterni, nessuna ricerca su internet.
- Nessun uso di dati personali, riservati o relativi ad aziende, clienti o fornitori reali (solo scenario sintetico/ipotetico, dichiarato come tale).
- Il deliverable prodotto è una bozza (draft): non deve essere presentato come approvato. Lo stato corretto in consegna è `submitted_for_review`.
- Al termine, lo Specialist deve restituire all'Orchestrator il messaggio di consegna secondo il formato previsto dal proprio agent definition (file prodotto, sintesi, assunzioni, rischi, limitazioni, livello di confidenza, questioni aperte), senza comunicare direttamente con l'Human Owner.

## Livello di rischio — motivazione

Medium. Il deliverable è un documento di supporto decisionale su un processo di business (processo amministrativo) con possibile impatto organizzativo se l'automazione proposta venisse successivamente adottata; non comporta tuttavia azioni esterne, irreversibili, dati reali/sensibili né pubblicazione. Coerente con GOVERNANCE.MD (Medium risk: generazione di documenti, revisione umana richiesta prima dell'adozione) e con la skill `governed-workflow` (Medium: decision-support deliverable, business implications, uso di assunzioni, possibile impatto organizzativo).

## Output atteso di consegna

- Deliverable: `workspace/drafts/REQ-0005-process-analysis.md` (unico file da produrre)
- Stato del task al termine: `submitted_for_review`
- Notifica di consegna all'Orchestrator secondo il formato "Task delivery" previsto per il Business Analyst Agent.
