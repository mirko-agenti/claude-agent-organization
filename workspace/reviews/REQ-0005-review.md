# Review report

## Metadata

- Review ID: REV-0005-v1
- Request ID: REQ-0005
- Task ID: TASK-0005A, TASK-0005B
- Reviewer: Reviewer Agent (independent)
- Deliverable:
  - `workspace/drafts/REQ-0005-process-analysis.md` (TASK-0005A, Business Analyst Agent)
  - `workspace/drafts/REQ-0005-economic-impact.md` (TASK-0005B, Financial Analyst Agent)
- Deliverable version: v1 (entrambi)
- Date: 2026-07-28

## Review outcome

**Approved with comments** (esito complessivo su entrambi i deliverable).

## Executive assessment

Entrambi i draft sono strutturalmente conformi alla skill `structured-analysis`, rispettano il proprio scope, dichiarano correttamente fatti/assunzioni/stime/interpretazioni/raccomandazioni e non contengono dati reali, fonti esterne o azioni operative. Il punto di integrazione tra i due task è rispettato in modo puntuale e tracciabile: tutte e sole le opportunità OPP-01–OPP-10 identificate da TASK-0005A sono richiamate e quantificate da TASK-0005B, senza aggiunte né omissioni, con riferimento esplicito a fase/attività di origine.

La verifica indipendente dei calcoli del deliverable economico (rifatti a mano per tutte le 10 opportunità e per l'aggregato) conferma che la quasi totalità dei valori è aritmeticamente corretta e riproducibile dal metodo dichiarato. È stato tuttavia individuato un errore di trascrizione delle formule di payback per due dei tre scenari (ottimistico e prudenziale) in `REQ-0005-economic-impact.md`, che rende quelle due formule, così come scritte, non coerenti con il risultato numerico dichiarato (il risultato finale è corretto, ma la formula mostrata non lo riproduce). Si tratta di un rilievo Major perché incide sulla verificabilità di una cifra di sintesi presente nell'Executive Summary, ma non compromette la validità complessiva dell'analisi né la sua utilizzabilità come documento di supporto decisionale, condizionata comunque a successiva validazione con dati reali (già esplicitata da entrambi gli Specialist).

Nessun dato inventato spacciato per fatto reale è stato riscontrato in nessuno dei due documenti; nessuna violazione di governance è stata rilevata.

## Scope of review

Verificati integralmente:
- `CLAUDE.md`, `GOVERNANCE.md`, `config/governance.yaml`;
- `workspace/requests/REQ-0005-phase3.md`;
- `workspace/tasks/TASK-0005A-process-analysis.md` e `workspace/tasks/TASK-0005B-economic-impact.md` (obiettivo, scope, criteri di accettazione, punto di integrazione);
- `.claude/skills/structured-analysis/SKILL.md`;
- `workspace/drafts/REQ-0005-process-analysis.md` (integrale);
- `workspace/drafts/REQ-0005-economic-impact.md` (integrale), incluso il ricalcolo indipendente di tutti i valori monetari presenti nelle tabelle di Analysis §1–§3.

Esclusioni: non è stata verificata l'esistenza di eventuali revisioni precedenti (nessuna indicata); non sono stati letti altri task/richieste del repository non pertinenti a REQ-0005.

## Acceptance criteria assessment

### TASK-0005A — `REQ-0005-process-analysis.md`

| Criterion | Status | Evidence | Notes |
|---|---|---|---|
| 1. File unico in path corretto | Met | Percorso corretto, nessun altro file creato | |
| 2. Tutte le sezioni della skill presenti | Met | Struttura completa rispettata | |
| 3. AS-IS strutturato e dichiarato come scenario sintetico | Met | Sezione Analysis §1; dichiarazione esplicita in Executive Summary e Context | |
| 4. Criticità identificate e motivate | Met | C1–C7, etichettate Interpretation | |
| 5. Opportunità granulari con natura e beneficio qualitativo | Met | OPP-01–OPP-10, tabella con fase, natura, beneficio | |
| 6. Nessuna quantificazione economica | Met | Nessun valore monetario/percentuale di risparmio presente | |
| 7. Distinzione Fact/Assumption/Estimate/Interpretation | Met | Uso sistematico delle etichette | |
| 8. Nessun dato inventato spacciato per fatto reale; nessuna fonte esterna | Met | Inputs Used limitato al repository | |
| 9. Raccomandazioni tracciabili, nessuna selezione prodotto/fornitore | Met | REC-1–REC-4, REC-4 esclude esplicitamente scelta fornitore | |
| 10. Livello di confidenza dichiarato e motivato | Met | "Medio", motivazione articolata | |
| 11. Domande aperte e limitazioni esplicitate | Met | Sezioni dedicate presenti | |
| 12. Nessuna azione operativa/pubblicazione/integrazione esterna | Met | Confermato in Scope ed Executive Summary | |
| 13. REQ-0005 non modificato | Met (non verificabile in modo assoluto dal solo Reviewer, ma coerente con gli strumenti usati) | File letto, non modificato durante questa revisione | |

### TASK-0005B — `REQ-0005-economic-impact.md`

| Criterion | Status | Evidence | Notes |
|---|---|---|---|
| 1. File unico in path corretto | Met | Percorso corretto, nessun altro file creato/modificato | |
| 2. Tutte le sezioni della skill presenti | Met | Struttura completa rispettata | |
| 3. Stima collegata tracciabilmente a TASK-0005A | Met | Tabella Analysis §2, colonna "Fase/attività di origine" per ciascuna OPP | |
| 4. Nessuna stima su processo generico/indipendente | Met | Tutte le 10 stime derivano da OPP-01–OPP-10, nessuna aggiunta | |
| 5. Ogni valore quantitativo riporta metodo e assunzioni | **Partially met** | Vedi Finding 1: le formule di payback per gli scenari "ottimistico" e "prudenziale" (Analysis §3) sono trascritte in modo aritmeticamente inconsistente col risultato dichiarato | La maggioranza dei valori (tutte le 10 opportunità, l'aggregato, lo scenario centrale) è stata ricalcolata indipendentemente e risulta corretta |
| 6. Distinzione Fact/Assumption/Estimate | Met | FA1–FA7 esplicite, uso sistematico delle etichette | |
| 7. Nessun dato inventato spacciato per fatto reale; nessuna fonte esterna | Met | Inputs Used limitato al repository | |
| 8. Rischi con probabilità/impatto/mitigazione | Met | R1–R8, tabella completa | |
| 9. Raccomandazioni tracciabili, no prodotto/fornitore, no decisioni definitive | Met | REC-1–REC-5, REC-1/REC-4 escludono esplicitamente tali elementi | |
| 10. Confidenza dichiarata, motivata, non "High" | Met | "Low", motivazione articolata, con distinzione tra confidenza sui valori assoluti e sul ranking relativo | |
| 11. Domande aperte e limitazioni esplicitate | Met | Sezioni dedicate presenti | |
| 12. Nessuna azione operativa/transazione reale/pubblicazione | Met | Confermato in Scope e Recommendations | |
| 13. REQ-0005 e draft TASK-0005A non modificati | Met | File letti, non modificati durante questa revisione | |

## Findings

### Finding 1

- Severity: Major
- Section: `REQ-0005-economic-impact.md` — Analysis, §3 "Vista di impatto economico complessivo aggregato" (righe con "Scenario ottimistico" e "Scenario prudenziale")
- Description: Le formule di payback mostrate per gli scenari ottimistico e prudenziale non riproducono aritmeticamente il risultato dichiarato.
  - Scenario ottimistico: la formula scritta è `(€ 66.000 − € 6.000) / € 25.000`, che dà 2,4 anni, non 0,42 anni come dichiarato. Il calcolo che effettivamente produce 0,42 anni è `€ 25.000 / (€ 66.000 − € 6.000)` = € 25.000 / € 60.000 = 0,4167 anni (~5 mesi), cioè numeratore e denominatore risultano invertiti rispetto a quanto scritto.
  - Scenario prudenziale: la formula scritta è `(€ 46.000 − € 12.000) / € 45.000`, che dà 0,76 anni, non 1,32 anni come dichiarato. Il calcolo coerente con 1,32 anni è `€ 45.000 / (€ 46.000 − € 12.000)` = € 45.000 / € 34.000 = 1,3235 anni (~16 mesi).
  - Per confronto, lo scenario centrale è scritto correttamente: `€ 35.000 / € 47.000 ≈ 0,74 anni`, coerente con investimento / beneficio netto.
  - Ho ricalcolato indipendentemente tutte le altre cifre del documento (costo AS-IS e beneficio per ciascuna delle 10 opportunità, aggregati, range di incertezza): risultano tutte corrette e riproducibili dal metodo dichiarato. L'errore è confinato alla presentazione delle due formule di payback sopra indicate; i valori finali dichiarati (0,42 e 1,32 anni) sono peraltro numericamente corretti — è la formula mostrata a essere incoerente con essi.
- Impact: Un revisore o l'Human Owner che tenti di riprodurre il payback ottimistico/prudenziale a partire dalla formula scritta otterrebbe un risultato diverso da quello riportato (2,4 anni invece di 0,42; 0,76 anni invece di 1,32), compromettendo la verificabilità di una cifra di sintesi ripresa anche nell'Executive Summary ("payback... 5–16 mesi"). Ciò è in contrasto con il criterio di accettazione 5 di TASK-0005B ("ogni valore quantitativo riporta il metodo di calcolo/stima utilizzato") e con il principio di riproducibilità della skill `structured-analysis`.
- Required action: Correggere la formula scritta per i due scenari (ottimistico e prudenziale) in modo che numeratore e denominatore corrispondano effettivamente a "investimento / beneficio netto annuo dello scenario", coerentemente con lo scenario centrale già corretto. I valori numerici finali (0,42 e 1,32 anni) possono restare invariati; va corretta solo la formula mostrata.

### Finding 2

- Severity: Minor
- Section: `REQ-0005-economic-impact.md` — Confidence Level, nota "ranking relativa tra opportunità"
- Description: L'ordine dichiarato ("OPP-01, OPP-07, OPP-05, OPP-03, OPP-09, OPP-08, OPP-10, OPP-04, OPP-06, OPP-02") non corrisponde all'ordine decrescente effettivo dei benefici calcolati in Analysis §2. In base ai valori riportati nella stessa tabella (OPP-08 = € 5.418, OPP-09 = € 4.500, OPP-02 = € 1.650, OPP-06 = € 1.386), l'ordine corretto negli ultimi cinque elementi sarebbe: OPP-03, OPP-08, OPP-09, OPP-10, OPP-04, OPP-02, OPP-06 (OPP-08 deve precedere OPP-09; OPP-02 deve precedere OPP-06).
- Impact: Non influisce su alcun calcolo economico né su alcuna raccomandazione (nessuna raccomandazione si basa su questo specifico ordinamento), ma rappresenta un'incoerenza interna tra un'affermazione descrittiva e i dati che il documento stesso presenta poco sopra.
- Required action: Correggere l'ordine elencato nella nota sulla ranking relativa in Confidence Level in modo che rispecchi l'ordine decrescente dei valori "Beneficio annuo atteso" già calcolati in Analysis §2.

### Finding 3

- Severity: Minor / Suggestion
- Section: `REQ-0005-economic-impact.md` — Analysis §1, "Nota di coerenza interna (verifica di non sovrastima)"
- Description: Il documento riporta come verifica di coerenza un tempo AS-IS totale per il ruolo AMM di "≈ 23,8 min/nota", presentato come controllo che il beneficio aggregato attribuito ad AMM non ecceda il tempo disponibile. Ricostruendo il calcolo dalla tabella tempi (Analysis §1), il totale AMM dipende da come vengono ripartite tra DIP e AMM le due componenti di "overhead" (rework Fase 2 e Fase 5), ripartizione non esplicitata nel documento; a seconda dell'ipotesi di ripartizione (es. 50/50 oppure interamente ad AMM) si ottengono valori nell'intorno di 23,8–26,2 min, non un unico valore univocamente riproducibile dalla sola tabella fornita.
- Impact: Basso: la nota è esplicitamente etichettata come Interpretation/controllo di plausibilità, non come Estimate primaria del documento, e non è utilizzata in alcun calcolo economico a valle. Riduce tuttavia la piena riproducibilità di questa specifica verifica interna.
- Required action (facoltativa): Esplicitare, se si intende mantenere questa nota di coerenza, il criterio di ripartizione dei tempi di overhead tra DIP e AMM utilizzato per ottenere il valore di 23,8 min/nota.

### Finding 4

- Severity: Suggestion
- Section: `REQ-0005-process-analysis.md` — Findings, F4
- Description: F4 è etichettato "(Fact, relativo al presente documento)" — un'affermazione meta-documentale (numero di opportunità identificate in questo stesso rapporto) inserita in mezzo a Finding di tipo Interpretation relativi al contenuto dello scenario. La distinzione è corretta nella sostanza (è effettivamente un fatto verificabile leggendo il documento) ma può generare una lettura affrettata come se fosse un fatto sul processo reale.
- Impact: Minimo; nessun rischio di fraintendimento sostanziale dato il chiarimento tra parentesi.
- Required action (facoltativa): Considerare di spostare questo tipo di affermazione meta-documentale fuori dalla sezione Findings (es. in una nota metodologica), per mantenere Findings dedicata esclusivamente ai risultati dell'analisi di dominio.

## Assumptions review

- `REQ-0005-process-analysis.md`: le assunzioni A1–A6 sono esplicite, motivate, dotate di livello di confidenza e di impatto in caso di errore; nessuna è presentata come Fact. La scelta del processo "gestione note spese" (A1) è dichiarata come discrezionale e autorizzata dal task, con alternative valutate in "Alternatives Considered". Adeguato.
- `REQ-0005-economic-impact.md`: le assunzioni finanziarie FA1–FA7 sono esplicite, con perché-necessaria, confidenza (prevalentemente Bassa, coerente con l'assenza di dati reali) e impatto in caso di errore. FA5 (tassi di non conformità/errore) è correttamente auto-segnalata come la componente meno fondata del modello (~4% del beneficio totale) — buona pratica di trasparenza. Le assunzioni finanziarie sono chiaramente distinte da quelle di processo ereditate da TASK-0005A e non le sovrascrivono. Adeguato.

## Risk and governance review

- Nessun dato reale, riservato, personale o relativo ad aziende/clienti/fornitori esistenti è presente in nessuno dei due documenti; entrambi dichiarano esplicitamente lo scenario come sintetico.
- Nessuna fonte esterna citata o utilizzata; nessuna ricerca su internet dichiarata o rilevabile.
- Nessuna azione operativa, transazione finanziaria reale, pubblicazione o integrazione esterna presente in nessuno dei due documenti.
- Entrambi i documenti sono correttamente in stato `submitted_for_review` e non si autodichiarano approvati.
- Le raccomandazioni di entrambi i documenti rimandano esplicitamente all'Human Owner per qualunque decisione operativa, di adozione o di investimento, coerentemente con CLAUDE.md, GOVERNANCE.md e `config/governance.yaml` (financial_actions e decisioni operative richiedono approvazione umana esplicita).
- Il livello di rischio Medium assegnato a entrambi i task in fase di pianificazione risulta coerente con il contenuto effettivo dei deliverable (documenti di supporto decisionale, nessuna azione irreversibile o esterna).

## Consistency review

Verifica specifica di coerenza reciproca tra i due deliverable (punto di integrazione TASK-0005A → TASK-0005B):

- Tutte le 10 opportunità OPP-01–OPP-10 identificate in `REQ-0005-process-analysis.md` sono richiamate nominalmente in `REQ-0005-economic-impact.md`, con lo stesso identificativo e lo stesso riferimento di fase/attività di origine. **Nessuna opportunità è stata omessa.**
- **Nessuna opportunità aggiuntiva** non presente nel draft di TASK-0005A è stata introdotta nella stima economica.
- La natura dell'automazione ipotizzata per ciascuna OPP nel draft di TASK-0005A è coerente con il meccanismo di beneficio quantificato nel draft di TASK-0005B (es. OPP-07 "eliminazione doppio inserimento" → quantificata come riduzione dell'80% del tempo di data entry in Fase 6; OPP-05 "motore di regole automatico" → quantificata sia come riduzione di tempo sia come costo evitato da non conformità).
- Il Finding F5 di TASK-0005A (priorità qualitativa a OPP-05 e OPP-07) è correttamente ripreso e confrontato nel Finding F3 di TASK-0005B, con esplicita indicazione di dove la quantificazione economica conferma o arricchisce (aggiunta di OPP-01) la valutazione qualitativa originaria — buona pratica di tracciabilità.
- Il draft di TASK-0005B non ridiscute né ridefinisce fasi, attori o criticità del processo AS-IS descritto in TASK-0005A (rispetto del vincolo di scope "Escluso" di TASK-0005B).
- Ho ricalcolato indipendentemente il costo AS-IS indirizzabile e il beneficio atteso per tutte le 10 opportunità: i totali dichiarati (€ 91.545/anno di costo indirizzabile; € 66.222/anno arrotondato a € 66.000/anno di beneficio lordo) sono aritmeticamente corretti rispetto ai valori puntuali e al metodo dichiarato.

**Esito della verifica di coerenza reciproca: positivo**, con la sola riserva del Finding 1 (errore di trascrizione delle formule di payback), che è interno al solo draft di TASK-0005B e non incide sulla coerenza tra i due documenti.

## Missing information

- Entrambi i documenti segnalano correttamente, come Open Question ereditata, l'incertezza sul processo amministrativo realmente di interesse per l'Human Owner (nota spese vs. altri processi), che condiziona la rilevanza pratica di entrambe le analisi. Correttamente non trattata come motivo di blocco, ma come limitazione esplicita con raccomandazione di conferma (REC-1 di TASK-0005A, REC-3 di TASK-0005B).
- Nessuna informazione necessaria per la valutazione dei criteri di accettazione risulta mancante ai fini di questa revisione.

## Required revisions

1. **(Major — Finding 1)** Correggere le formule di payback per gli scenari ottimistico e prudenziale in `REQ-0005-economic-impact.md` (Analysis §3), allineandole al risultato numerico dichiarato (investimento / beneficio netto annuo dello scenario), come per lo scenario centrale già corretto.
2. **(Minor — Finding 2)** Correggere l'ordine della "ranking relativa tra opportunità" nella sezione Confidence Level di `REQ-0005-economic-impact.md`, allineandolo ai valori di beneficio annuo atteso già calcolati in Analysis §2.

## Optional improvements

- (Finding 3) Esplicitare il criterio di ripartizione dei tempi di overhead tra DIP e AMM usato nella nota di coerenza interna sul tempo totale AMM.
- (Finding 4) Valutare di separare le affermazioni meta-documentali (es. F4 di TASK-0005A) dai Finding di dominio.

## Final recommendation

Entrambi i deliverable sono sostanzialmente conformi ai rispettivi task, ai criteri di accettazione e alla governance, e sono reciprocamente coerenti nel punto di integrazione (opportunità OPP-01–OPP-10 quantificate in modo completo, tracciabile e senza aggiunte indebite). Raccomando **Approved with comments**: i deliverable possono essere sottoposti all'Human Owner, a condizione che le due correzioni indicate in "Required revisions" (in particolare la correzione Major delle formule di payback) siano integrate — prima o dopo la presentazione all'Human Owner, secondo la governance del progetto — e che l'Human Owner sia esplicitamente informato del rilievo Major relativo alla verificabilità del payback ottimistico/prudenziale prima di usare tali cifre a supporto di qualunque decisione.

## Human attention points

- Il payback stimato (5–16 mesi, centrale ~9 mesi) e l'intera quantificazione economica restano stime su scenario sintetico (confidenza dichiarata Low) e non devono essere usate come base di stanziamento budget senza validazione con dati reali, come esplicitamente raccomandato da entrambi gli Specialist (REC-1 di TASK-0005B).
- Prima di qualunque uso decisionale, resta aperta la domanda su quale processo amministrativo sia realmente di interesse (nota spese vs. altro), condizione che entrambi i documenti segnalano come prioritaria.
- Il rilievo Major (Finding 1) riguarda la presentazione di una formula, non la sostanza economica dell'analisi: i valori finali di payback dichiarati sono numericamente corretti, ma la loro derivazione così come scritta non è riproducibile; si raccomanda la correzione prima di un utilizzo esterno o formale del documento.
