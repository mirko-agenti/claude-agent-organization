# Verifica di conformità del workflow governato — REQ-0003

## Metadata

- Request ID: REQ-0003
- Task ID: TASK-0003
- Verificatore: sessione di coordinamento (livello Human Owner-facing), indipendente dall'esecuzione dei singoli agenti
- Oggetto: conformità procedurale del workflow Orchestrator → Specialist → Reviewer → Orchestrator eseguito per REQ-0003
- Data: 2026-07-28
- Stato: verifica completata, in attesa di revisione umana

## Metodo di verifica

Ogni punto è stato verificato non solo sulla base delle dichiarazioni testuali restituite dagli agenti, ma anche con controlli indipendenti sul filesystem (elenco directory, timestamp, hash SHA-256 del draft calcolato prima e dopo l'esecuzione del Reviewer) eseguiti direttamente da questa sessione di coordinamento, esterna agli agenti stessi.

## Verifica dei 7 punti richiesti

### 1. L'Orchestrator crea il task — PASS

Evidenza: `workspace/tasks/TASK-0003-phase2.md` creato dall'agente Orchestrator a partire da `workspace/requests/REQ-0003-phase2.md`, con obiettivo, scope, input autorizzati, struttura del deliverable secondo `structured-analysis`, 11 criteri di accettazione, percorso di output esclusivo e vincoli di governance. File presente su disco (verificato via `ls`, timestamp 28/07 15:19).

### 2. Il General Specialist produce il draft soltanto in `workspace/drafts/` — PASS

Evidenza: prima e dopo l'esecuzione dello Specialist è stato confrontato il contenuto di `workspace/tasks/`, `workspace/reviews/`, `workspace/approved/`: nessun file diverso da `workspace/drafts/REQ-0003-analysis.md` è comparso o è stato modificato. Lo Specialist ha inoltre dichiarato esplicitamente di aver eseguito una sola operazione di scrittura, su quel file.

### 3. Il Reviewer produce soltanto il report in `workspace/reviews/` — PASS

Evidenza: prima e dopo l'esecuzione del Reviewer, `workspace/drafts/`, `workspace/tasks/` e `workspace/approved/` sono risultati invariati (stessi file, stessi timestamp); l'unico file nuovo comparso è `workspace/reviews/REQ-0003-review.md` (timestamp 28/07 15:24).

### 4. Il Reviewer non modifica direttamente il draft — PASS

Evidenza: hash SHA-256 di `workspace/drafts/REQ-0003-analysis.md` calcolato subito dopo la produzione da parte dello Specialist e ricalcolato subito dopo l'esecuzione del Reviewer:
```
c6491be662a363e082d00a0c67e032fa4845d13744793b3990295552f1dfe2b8
```
Identico in entrambi i controlli; anche il timestamp del file (28/07 15:21) non è cambiato dopo il passaggio del Reviewer. Il Reviewer ha inoltre dichiarato esplicitamente di aver solo letto, mai modificato, il draft.

### 5. L'Orchestrator gestisce i rilievi — PASS

Evidenza: il report di revisione (`workspace/reviews/REQ-0003-review.md`, esito "Approved with comments") conteneva 3 rilievi (1 Major, 2 Minor). Il deliverable consolidato `workspace/drafts/REQ-0003-final.md` include in apertura una sezione "Consolidamento Orchestrator" che riporta, per ciascun rilievo, l'esito (applicato) e dove/come è stato affrontato: attenuazione e motivazione esplicita della stima quantitativa (Major); aggiunta di `TASK-0003-phase2.md` in Inputs Used (Minor); uniformazione del formato della riga R6 nella tabella dei rischi (Minor).

### 6. Il file finale rimane pending human approval — PASS

Evidenza: `workspace/drafts/REQ-0003-final.md`, sezione Metadata, riga verificata direttamente nel file:
```
Status: draft — pending human approval
```
Nessuna dichiarazione di approvazione, nessun esito "Approved" definitivo attribuito dall'Orchestrator a se stesso.

### 7. Nessun file inserito in `workspace/approved/` prima dell'approvazione — PASS

Evidenza: contenuto di `workspace/approved/` verificato prima dell'avvio del workflow REQ-0003 e di nuovo al termine di tutti i passaggi (Orchestrator, Specialist, Reviewer, Orchestrator): contiene esclusivamente `REQ-0002-final.md` (deliverable di un workflow precedente, già approvato dall'Human Owner in una sessione precedente). Nessun file relativo a REQ-0003 è presente in `workspace/approved/`.

## Riepilogo

| # | Verifica | Esito |
|---|---|---|
| 1 | Orchestrator crea il task | PASS |
| 2 | Specialist scrive solo in workspace/drafts/ | PASS |
| 3 | Reviewer scrive solo in workspace/reviews/ | PASS |
| 4 | Reviewer non modifica il draft | PASS |
| 5 | Orchestrator gestisce i rilievi | PASS |
| 6 | Deliverable finale in stato pending human approval | PASS |
| 7 | Nessun file in workspace/approved/ senza approvazione | PASS |

## Artefatti prodotti dal workflow REQ-0003

- `workspace/tasks/TASK-0003-phase2.md`
- `workspace/drafts/REQ-0003-analysis.md` (bozza Specialist)
- `workspace/reviews/REQ-0003-review.md` (revisione indipendente, esito: Approved with comments)
- `workspace/drafts/REQ-0003-final.md` (deliverable consolidato, **draft — pending human approval**)
- Il presente file: `workspace/reviews/REQ-0003-governance-verification.md`

## Decisione richiesta

Il deliverable `workspace/drafts/REQ-0003-final.md` è pronto per la revisione dell'Human Owner e resta in attesa di una delle seguenti decisioni:

- Approve
- Approve with conditions
- Request changes
- Reject

Nessuna azione è stata eseguita in autonomia oltre a quanto sopra descritto.
