# Task: Stima dell'impatto economico dell'automazione (sottotask 2 di 2 - REQ-0005)

## Metadata

- Request ID: REQ-0005
- Task ID: TASK-0005B
- Iteration: v1
- From: Orchestrator Agent
- To: Financial Analyst Agent
- Priority: Normal
- Risk level: Medium — vedi motivazione in fondo al documento
- Status: blocked (in attesa del completamento di TASK-0005A)
- Date: 2026-07-28

## Riferimento alla richiesta

Questo task esegue una parte di quanto richiesto in `workspace/requests/REQ-0005-phase3.md` (REQ-0005): "Analizzare il processo amministrativo corrente e stimare l'impatto economico della sua automazione."

### Nota sulla scomposizione multidisciplinare

La richiesta REQ-0005 è genuinamente multidisciplinare: comprende (a) un'analisi di processo (AS-IS) e (b) una stima dell'impatto economico dell'automazione. In base a orchestrator.md §7 e allo Step 4 della skill `governed-workflow`, non viene assegnata indivisa a un solo specialista, ma scomposta in due sottotask non sovrapposti:

- **TASK-0005A**: analisi di processo AS-IS — assegnato a `business-analyst`. Deve essere completato e disponibile come draft prima dell'avvio di questo task.
- **TASK-0005B** (questo task): stima dell'impatto economico dell'automazione — assegnato a `financial-analyst`.

## Motivazione della scelta dell'agente

Il task richiede la stima dell'impatto economico (costi/benefici, risparmi attesi, eventuale indicazione di ordine di grandezza di ROI/payback) derivante dall'automazione di un processo di business. In base ai criteri di instradamento (orchestrator.md §7: "Usa `financial-analyst` per budgeting, redditività, cash flow, impatto economico, controllo di gestione, previsioni e scenari finanziari") e al proprio agent definition ("Performs financial, management-control, budgeting, profitability, cash-flow, variance and business-case analyses. Use when the task involves economic or financial data, assumptions, forecasts, KPIs or investment evaluation"), il Financial Analyst Agent è lo specialista designato. Non si tratta di un'analisi di processo come oggetto principale (quella è oggetto del sottotask TASK-0005A, assegnato al `business-analyst`), né di raccolta/validazione di fonti esterne (`research-specialist`); non è necessario ricorrere al `general-specialist` essendo disponibile uno specialista dedicato e pertinente.

## Obiettivo

Produrre una stima strutturata dell'impatto economico dell'automazione del processo amministrativo, basata esclusivamente sulle opportunità di automazione identificate nel deliverable prodotto da TASK-0005A (`workspace/drafts/REQ-0005-process-analysis.md`), applicando il framework definito dalla skill `structured-analysis` e dichiarando per ogni valore quantitativo il metodo di stima utilizzato, distinguendo chiaramente fatti, assunzioni, stime, interpretazioni e raccomandazioni.

## Punto di integrazione con TASK-0005A (vincolante)

Questo task NON deve stimare l'impatto economico di un processo di automazione generico o autonomamente ipotizzato. La stima economica deve basarsi esplicitamente e in modo tracciabile sulle opportunità di automazione identificate nella sezione "Analysis" del deliverable di TASK-0005A (`workspace/drafts/REQ-0005-process-analysis.md`). Per ciascuna opportunità di automazione ivi identificata, questo task deve:

- richiamarla esplicitamente (per nome/riferimento alla fase o attività);
- stimarne l'impatto economico atteso (es. riduzione di ore/uomo, riduzione di errori con relativo costo evitato, altri risparmi quantificabili), dichiarando il metodo di calcolo e le assunzioni sottostanti;
- aggregare le stime puntuali in una vista di impatto economico complessivo del processo.

Se il deliverable di TASK-0005A non è ancora disponibile al percorso indicato, questo task rimane in stato `blocked` e non deve essere avviato.

## Scope

### Incluso

- Lettura e utilizzo del testo della richiesta REQ-0005 e del deliverable di TASK-0005A come unica base per l'identificazione delle opportunità di automazione da quantificare.
- Stima dei costi indicativi correlati al processo AS-IS (es. costo del tempo dedicato alle attività manuali identificate come critiche/automatizzabili in TASK-0005A), con dichiarazione esplicita del metodo di stima e delle assunzioni (es. costo orario medio, volumi, frequenza).
- Stima dei benefici economici attesi dall'automazione di ciascuna opportunità identificata in TASK-0005A (risparmio di tempo, riduzione errori/rilavorazioni, altri benefici quantificabili), con metodo di calcolo dichiarato.
- Indicazione di ordine di grandezza di eventuali costi di implementazione dell'automazione (a livello di stima indicativa, non di business case dettagliato né di scelta di soluzione/fornitore), se necessaria per fornire un quadro minimamente completo di impatto netto.
- Sintesi dell'impatto economico complessivo atteso (es. risparmio annuo stimato, eventuale indicazione di massima di periodo di ripristino dell'investimento), sempre come Estimate con metodo dichiarato, non come previsione garantita.
- Esplicitazione di tutte le assunzioni utilizzate, del relativo livello di confidenza e dell'impatto se risultassero errate.
- Dichiarazione del livello di confidenza complessivo dell'analisi (che non può essere "High" in assenza di dati finanziari reali, come da agent definition del Financial Analyst).
- Sintesi esecutiva del rapporto.

### Escluso

- Qualsiasi ridefinizione o rianalisi del processo AS-IS: il processo e le opportunità di automazione sono un dato di input fornito da TASK-0005A e non vanno rielaborati nel merito organizzativo/di processo.
- Ricerche esterne, benchmark di mercato, dati di settore reali o citazioni di fonti esterne.
- Uso di dati economico-finanziari reali, riservati o relativi a un'azienda, cliente o fornitore specifico e realmente esistente.
- Selezione o raccomandazione di uno specifico prodotto/fornitore software.
- Consulenza fiscale, contabile o legale vincolante.
- Qualsiasi azione operativa (implementazione, configurazione, acquisto, contatti con fornitori, transazioni finanziarie reali).
- Decisioni finali di investimento o di adozione: il rapporto è a supporto della decisione, non sostituisce l'approvazione dell'Human Owner.
- Qualsiasi modifica a file al di fuori di `workspace/`.
- Qualsiasi pubblicazione o comunicazione esterna del contenuto prodotto.
- Qualsiasi integrazione con sistemi esterni.

## Input autorizzati

Input autorizzati per questo task, esclusivamente:

- `workspace/requests/REQ-0005-phase3.md` (contenuto integrale della richiesta REQ-0005);
- `workspace/drafts/REQ-0005-process-analysis.md` (deliverable prodotto da TASK-0005A, una volta disponibile) — fonte esclusiva delle opportunità di automazione da quantificare.

Non è autorizzata alcuna ricerca esterna (internet, documenti non presenti nel repository, conoscenza di dominio presentata come dato fattuale su un'azienda reale). Ogni informazione economico-finanziaria non derivabile direttamente dagli input autorizzati deve essere dichiarata esplicitamente come Assumption o Estimate (con metodo di calcolo dichiarato), mai come Fact.

## Skill da utilizzare

Applica la skill `structured-analysis` (vedi `.claude/skills/structured-analysis/SKILL.md`).

## Deliverable atteso

Un rapporto in Markdown, in lingua italiana, salvato ESCLUSIVAMENTE al percorso:

`workspace/drafts/REQ-0005-economic-impact.md`

Questo è l'UNICO percorso di output autorizzato per questo task. Lo Specialist non deve creare, modificare o scrivere alcun altro file, né all'interno né all'esterno di `workspace/`, e in particolare non deve modificare `workspace/drafts/REQ-0005-process-analysis.md`.

### Struttura obbligatoria

Segui la struttura richiesta dalla skill `structured-analysis`, integrando le sezioni di contenuto specificamente richieste da questo task:

```
# Deliverable Title

## Metadata
- Request ID (REQ-0005)
- Task ID (TASK-0005B)
- Agent
- Version
- Status
- Date

## Executive Summary

## Objective

## Context
  - richiamo esplicito al processo AS-IS e alle opportunità di automazione identificate in TASK-0005A (workspace/drafts/REQ-0005-process-analysis.md)

## Scope

## Inputs Used
  - deve elencare esplicitamente workspace/requests/REQ-0005-phase3.md e workspace/drafts/REQ-0005-process-analysis.md

## Evidence Quality

## Assumptions

## Analysis
  - deve includere, per ciascuna opportunità di automazione identificata in TASK-0005A:
    - richiamo alla fase/attività di origine
    - stima del costo attuale (AS-IS) della fase/attività, con metodo dichiarato
    - stima del beneficio economico atteso dall'automazione, con metodo dichiarato
  - deve includere una vista di impatto economico complessivo aggregato

## Alternatives Considered

## Findings

## Risks and Limitations

## Recommendations

## Confidence Level

## Open Questions

## Acceptance Criteria Verification
```

## Criteri di accettazione

1. Il file è salvato esattamente e unicamente in `workspace/drafts/REQ-0005-economic-impact.md`; nessun altro file è stato creato o modificato (in particolare non è stato modificato `workspace/drafts/REQ-0005-process-analysis.md`).
2. Tutte le sezioni richieste dalla skill `structured-analysis` sono presenti e compilate.
3. La stima economica è esplicitamente e tracciabilmente collegata alle opportunità di automazione identificate in TASK-0005A: ogni opportunità quantificata richiama la fase/attività di origine descritta nel deliverable di TASK-0005A.
4. Nessuna stima economica si basa su un processo di automazione generico o indipendente dall'analisi di TASK-0005A.
5. Ogni valore quantitativo (importi, percentuali, ore, tassi) riporta il metodo di calcolo/stima utilizzato e le assunzioni da cui dipende.
6. Ogni informazione non direttamente derivabile dagli input autorizzati è etichettata come Assumption o Estimate e non come Fact.
7. Nessun dato è inventato spacciandolo per fatto verificato relativo a un'azienda reale; nessuna fonte esterna è citata o utilizzata.
8. I rischi materiali della stima e dell'automazione proposta sono documentati con probabilità, impatto e mitigazione proposta.
9. Le raccomandazioni derivano in modo tracciabile dall'analisi presentata e non includono la selezione di uno specifico prodotto/fornitore né decisioni di investimento definitive.
10. Il livello di confidenza complessivo è dichiarato, motivato e coerente con l'assenza di dati finanziari reali (non "High").
11. Le domande aperte e le limitazioni informative sono esplicitate.
12. Il documento non contiene azioni operative eseguite, transazioni finanziarie reali, richieste di pubblicazione o riferimenti a integrazioni esterne.
13. I file `workspace/requests/REQ-0005-phase3.md` e `workspace/drafts/REQ-0005-process-analysis.md` non sono stati modificati.

## Dipendenze

Dipendenza obbligatoria da: **TASK-0005A**.

Questo task non può essere avviato finché `workspace/drafts/REQ-0005-process-analysis.md` non è disponibile come output completato di TASK-0005A. Fino a quel momento lo stato di questo task resta `blocked`. L'Orchestrator aggiornerà lo stato a `ready` non appena TASK-0005A risulterà completato e il relativo draft disponibile.

## Vincoli di governance rilevanti

- Nessuna modifica a file al di fuori di `workspace/` (in particolare non modificare REQ-0005, CLAUDE.MD, GOVERNANCE.MD, config/, .claude/).
- Nessuna scrittura in posizioni diverse da `workspace/drafts/REQ-0005-economic-impact.md`: nessun file aggiuntivo, nessuna sovrascrittura di altri deliverable (in particolare non sovrascrivere il draft di TASK-0005A).
- Nessuna pubblicazione, invio o comunicazione esterna del contenuto prodotto.
- Nessuna integrazione con sistemi esterni, nessuna ricerca su internet.
- Nessun uso di dati personali, riservati o relativi ad aziende, clienti o fornitori reali (solo scenario sintetico/ipotetico, dichiarato come tale).
- Nessuna transazione finanziaria reale, nessuna consulenza fiscale/contabile/legale vincolante.
- Il deliverable prodotto è una bozza (draft): non deve essere presentato come approvato. Lo stato corretto in consegna è `submitted_for_review`.
- Al termine, lo Specialist deve restituire all'Orchestrator il messaggio di consegna secondo il formato previsto dal proprio agent definition (file prodotto, sintesi, assunzioni, rischi, limitazioni, livello di confidenza, questioni aperte), senza comunicare direttamente con l'Human Owner.

## Livello di rischio — motivazione

Medium. Il deliverable è un documento di supporto decisionale con stime economiche (impatto atteso dell'automazione di un processo amministrativo) destinato a informare un'eventuale decisione organizzativa/di investimento futura; non comporta tuttavia transazioni finanziarie reali, azioni esterne, irreversibili, dati reali/sensibili né pubblicazione. Coerente con GOVERNANCE.MD (Medium risk: generazione di documenti, revisione umana richiesta prima dell'adozione) e con la skill `governed-workflow` (Medium: decision-support deliverable, implicazioni economico-finanziarie, uso di assunzioni, possibile impatto organizzativo). Qualora dall'analisi emergesse un impatto finanziario rilevante tale da configurare una decisione di investimento, il Financial Analyst deve segnalarlo all'Orchestrator per un'eventuale rivalutazione del rischio, come previsto dal proprio agent definition.

## Output atteso di consegna

- Deliverable: `workspace/drafts/REQ-0005-economic-impact.md` (unico file da produrre)
- Stato del task al termine: `submitted_for_review`
- Notifica di consegna all'Orchestrator secondo il formato "Task delivery" previsto per il Financial Analyst Agent.
