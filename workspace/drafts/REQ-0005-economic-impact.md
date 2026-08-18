# Stima dell'impatto economico dell'automazione del processo amministrativo di gestione note spese

## Metadata

- Request ID: REQ-0005
- Task ID: TASK-0005B
- Agent: Financial Analyst Agent
- Version: v1
- Status: submitted_for_review
- Date: 2026-07-28

## Executive Summary

Questo rapporto stima l'impatto economico atteso dell'automazione del processo amministrativo "gestione note spese", quantificando **singolarmente** le 10 opportunità di automazione (OPP-01–OPP-10) identificate dal Business Analyst Agent nel deliverable di TASK-0005A (`workspace/drafts/REQ-0005-process-analysis.md`). Nessuna opportunità è stata aggiunta, rimossa o ridefinita rispetto a tale documento; questo rapporto non ridiscute il processo AS-IS né le criticità, ma le assume come dato di input.

Per rendere quantificabili le opportunità qualitative del documento di origine, è stato costruito un modello sintetico di "unit economics" per singola nota spesa (tempi per fase/attore, costo orario per ruolo, volumi), interamente basato su **Assumption ed Estimate esplicite** (nessun dato aziendale reale disponibile). Applicando questo modello, la stima aggregata lorda del beneficio economico annuo dell'automazione delle 10 opportunità è dell'ordine di **€ 66.000/anno** (range indicativo € 46.000–66.000/anno considerando incertezza e possibili sovrapposizioni tra opportunità), a fronte di un costo di implementazione indicativo one-off di **€ 25.000–45.000** e di un costo ricorrente annuo di **€ 6.000–12.000**. Il periodo di ripristino dell'investimento (payback) stimato è dell'ordine di **5–16 mesi** a seconda dello scenario, con centrale indicativo di circa 9 mesi.

Tutti i valori sono **Estimate** con metodo di calcolo dichiarato, riferiti a uno scenario sintetico e non verificabile rispetto a un caso reale. Il livello di confidenza complessivo è **Low** (vedi sezione dedicata): la stima si fonda su un doppio strato di ipotesi (quelle di processo del deliverable TASK-0005A, più quelle finanziarie proprie di questo rapporto — volumi, costi orari, tassi di riduzione), nessuna delle quali verificabile con dati reali. La ranking relativa tra opportunità (quali generano il beneficio maggiore) è considerata più robusta (Medium) dei valori assoluti in euro.

## Objective

Produrre una stima strutturata dell'impatto economico dell'automazione del processo amministrativo "gestione note spese", basata esclusivamente e in modo tracciabile sulle 10 opportunità di automazione identificate in TASK-0005A, quantificando per ciascuna: il costo AS-IS della fase/attività di riferimento, il beneficio economico atteso dall'automazione, e un'aggregazione dell'impatto economico complessivo, con indicazione di ordine di grandezza dei costi di implementazione e del payback, applicando il framework `structured-analysis` e dichiarando per ogni valore quantitativo il metodo di stima e le assunzioni sottostanti.

## Context

TASK-0005A (Business Analyst Agent) ha prodotto un'analisi AS-IS di un processo sintetico di "gestione note spese" articolato in 8 fasi e 4 attori (Dipendente - DIP, Responsabile di funzione - RESP, Ufficio Amministrazione/Contabilità - AMM, Tesoreria - TES), identificando 7 criticità (C1–C7) e 10 opportunità di automazione (OPP-01–OPP-10), ciascuna riferita a una fase/attività specifica, con natura dell'automazione ipotizzata e beneficio atteso **qualitativo** (nessuna quantificazione economica, esclusa dallo scope di TASK-0005A per costruzione).

Questo task (TASK-0005B) riprende esplicitamente tali 10 opportunità, così come numerate nel documento di origine, e ne stima l'impatto economico. Il punto di integrazione è vincolante: nessuna opportunità aggiuntiva è stata introdotta e nessuna stima è indipendente dal contenuto di TASK-0005A. Per comodità del lettore, la tabella delle opportunità (fase di riferimento e natura dell'automazione) è richiamata nella sezione Analysis, ma il contenuto descrittivo integrale resta quello del documento di origine, che non viene qui ripetuto né modificato.

## Scope

### Incluso

- Costruzione di un modello sintetico di costo unitario (per singola nota spesa, per fase/attore) del processo AS-IS descritto in TASK-0005A, con dichiarazione esplicita di volumi e costi orari assunti.
- Stima del costo AS-IS annuo "indirizzabile" (cioè riconducibile all'attività manuale/inefficiente oggetto di automazione) per ciascuna delle 10 opportunità, con metodo dichiarato.
- Stima del beneficio economico annuo atteso da ciascuna opportunità, con metodo dichiarato (percentuale di riduzione tempo/errore applicata al relativo costo AS-IS).
- Aggregazione delle 10 stime puntuali in una vista di impatto economico complessivo, con range di incertezza.
- Indicazione di ordine di grandezza dei costi di implementazione (una tantum e ricorrenti), senza selezione di prodotto/fornitore.
- Indicazione di ordine di grandezza del payback, come Estimate non vincolante.
- Dichiarazione di tutte le assunzioni finanziarie utilizzate, confidenza e impatto se errate.
- Dichiarazione motivata del livello di confidenza complessivo (non "High").

### Escluso

- Qualsiasi ridefinizione del processo AS-IS o delle criticità/opportunità descritte in TASK-0005A: sono trattate come dato di input non modificabile.
- Ricerche esterne, benchmark di mercato, dati di settore reali, citazioni di fonti esterne.
- Uso di dati economico-finanziari reali, riservati o relativi ad aziende/clienti/fornitori realmente esistenti.
- Selezione o raccomandazione di uno specifico prodotto/fornitore software.
- Consulenza fiscale, contabile o legale vincolante.
- Business case dettagliato (analisi NPV/IRR multi-anno, analisi di sensitività completa, piano di implementazione): fornita solo una vista di ordine di grandezza come richiesto dal task.
- Qualsiasi azione operativa, transazione finanziaria reale, decisione finale di investimento o di adozione.
- Modifiche a qualsiasi file diverso da `workspace/drafts/REQ-0005-economic-impact.md`.

## Inputs Used

- `workspace/requests/REQ-0005-phase3.md` — Fact: contenuto letto integralmente; richiesta originale (due righe, nessun dettaglio di processo o dati finanziari).
- `workspace/drafts/REQ-0005-process-analysis.md` (TASK-0005A, Business Analyst Agent) — Fact: contenuto letto integralmente; fonte esclusiva e vincolante delle 10 opportunità di automazione (OPP-01–OPP-10), delle 8 fasi di processo, dei 4 attori e delle assunzioni di processo (A1–A6) su cui questo rapporto si innesta senza modificarle.
- `.claude/skills/structured-analysis/SKILL.md` — framework metodologico applicato per struttura e classificazione delle informazioni.
- `workspace/tasks/TASK-0005B-economic-impact.md` — task di assegnazione, che definisce scope, struttura del deliverable, punto di integrazione vincolante e criteri di accettazione.

Nessun'altra fonte è stata utilizzata. Nessuna ricerca esterna è stata condotta.

## Evidence Quality

- Contenuto di REQ-0005-phase3.md: qualità **alta** (letto integralmente), ma scarsa profondità informativa.
- Contenuto di TASK-0005A: qualità **alta** (letto integralmente); costituisce l'unica base autorizzata per le opportunità da quantificare, con etichettatura Fact/Assumption/Interpretation già applicata dal Business Analyst.
- Processo AS-IS e opportunità (ereditati da TASK-0005A): qualità **media**, poiché TASK-0005A stesso li dichiara come scenario sintetico costruito con Assumption a confidenza da bassa a media, non osservato su un caso reale.
- Volumi, costi orari, tempi per attività, tassi di riduzione attesi (introdotti in questo rapporto): qualità **bassa/non verificabile**, poiché nessun dato reale è disponibile; ogni valore è dichiarato come Assumption o Estimate con metodo esplicito.

In sintesi: la struttura del modello di calcolo è tracciabile e internamente coerente, ma i valori assoluti in euro poggiano su due livelli sovrapposti di ipotesi non verificate (di processo, ereditate da TASK-0005A, e finanziarie, proprie di questo rapporto).

## Assumptions

Le assunzioni seguenti sono proprie di questo task (prefisso FA = Financial Assumption) e si aggiungono, senza sostituirle, alle assunzioni di processo A1–A6 di TASK-0005A, che restano valide e non vengono qui rielaborate.

| ID | Assumption | Perché necessaria | Confidenza | Impatto se errata |
|----|------------|--------------------|------------|--------------------|
| FA1 | Volume di riferimento: 300 note spese/mese (3.600/anno), scelto come punto centrale dell'intervallo "alcune centinaia al mese" indicato in TASK-0005A (Assumption A5). | Necessario per convertire tempi unitari in costi annui; TASK-0005A non fornisce un valore puntuale per scelta esplicita di scope. | Bassa | I risultati monetari assoluti scalano in modo pressoché lineare col volume: a parità di tempi/tassi, un volume reale di 150/mese dimezzerebbe le stime, uno di 600/mese le raddoppierebbe. La ranking relativa tra opportunità non cambia. |
| FA2 | Costo orario medio fully-loaded per ruolo (stipendio + oneri, valori sintetici indicativi, non riferiti a un mercato o azienda reale): DIP € 25/h, RESP € 45/h, AMM € 30/h, TES € 30/h (TES trattata come stessa fascia di costo di AMM, coerente con A6 di TASK-0005A che la descrive come funzione interna all'Ufficio Amministrazione). | Necessario per monetizzare i tempi risparmiati; nessun dato reale disponibile. | Bassa | Un errore proporzionale sui tassi orari si traduce in un errore pressoché proporzionale su tutte le stime di beneficio basate sul tempo (non su quelle di costo evitato per errori). |
| FA3 | Tempi AS-IS per fase/attore (minuti per singola nota spesa), stimati per analogia con pattern generali di processi amministrativi manuali simili (nessun time-and-motion study reale disponibile): dettagliati nella sezione Analysis, punto 1. | Necessario per calcolare il costo AS-IS di ciascuna fase indicata in TASK-0005A e renderla quantificabile. | Bassa | Se i tempi reali differiscono sensibilmente (es. processo già parzialmente digitale), sia i costi AS-IS sia i benefici stimati risulterebbero sovra- o sotto-stimati in proporzione. |
| FA4 | Tassi di riduzione attesi per effetto dell'automazione (% di tempo risparmiato o % di riduzione di errori/rework), stimati per ciascuna opportunità in base alla natura dell'automazione descritta in TASK-0005A (es. automazione quasi completa per attività puramente meccaniche come il routing email; riduzione parziale per attività che mantengono una componente di giudizio umano, come l'approvazione). | Necessario per passare dal costo AS-IS al beneficio atteso; nessun dato reale di progetti di automazione analoghi è disponibile. | Bassa-Media | Un tasso di riduzione ottimistico sovrastimerebbe il beneficio; le percentuali usate sono state impostate in modo prudenziale (raramente superiori all'85-90%) proprio per mitigare questo rischio, ma restano non verificate. |
| FA5 | Tasso di non conformità/errore residuo AS-IS non intercettato dal controllo manuale a campione (Fase 5, OPP-05: 3% delle note con importo medio eccedente € 20; Fase 7, OPP-08: 2% delle note con errore di pagamento, costo di correzione € 15/caso). | Necessario per stimare il beneficio da riduzione del rischio di controllo (C3/C5 in TASK-0005A) e da riduzione degli errori di pagamento (C6), oltre al puro risparmio di tempo. | Bassa | Questi tassi sono i meno fondati dell'intero modello (nessuna base empirica anche indicativa); l'impatto economico di queste componenti (circa il 4% del beneficio totale) va quindi considerato la parte più fragile della stima. |
| FA6 | Possibile sovrapposizione parziale tra i benefici di OPP-03 (routing automatico), OPP-04 (promemoria automatici) e OPP-10 (cruscotto di monitoraggio), che intervengono tutte, con finalità diverse, sulla riduzione di attività di sollecito/verifica stato non a valore aggiunto. Per prudenza, al beneficio di OPP-10 è applicato uno sconto aggiuntivo del 10% rispetto al calcolo grezzo, a titolo di correzione per possibile doppio conteggio. | Necessaria per non sovrastimare il beneficio complessivo per effetto di interazioni tra opportunità tra loro complementari (come già segnalato in TASK-0005A, nota metodologica). | Media | Se la sovrapposizione reale fosse maggiore, il beneficio aggregato risulterebbe ancora sovrastimato nonostante lo sconto; se fosse assente, il beneficio aggregato sarebbe leggermente sottostimato. |
| FA7 | Costo di implementazione one-off indicativo (licenze/setup/integrazione di uno strumento di gestione spese non identificato, sforzo interno di configurazione e change management): € 25.000–45.000, punto centrale € 35.000. Costo ricorrente annuo indicativo (canone/manutenzione): € 6.000–12.000, punto centrale € 9.000. | Necessario per fornire un ordine di grandezza di payback come richiesto dallo scope del task, senza costituire un business case dettagliato né una scelta di fornitore. | Bassa | Sono ordini di grandezza puramente indicativi; il costo reale dipenderebbe da scelte implementative (soluzione SaaS vs. sviluppo custom, ampiezza del perimetro funzionale) non definite in questa fase. |

## Analysis

### 1. Modello di unit economics per singola nota spesa (metodo di calcolo)

Metodo generale (Estimate, applicato uniformemente a tutte le opportunità): per ciascuna opportunità OPP-*n*, si stima (a) il **costo AS-IS annuo indirizzabile**, calcolato come `tempo unitario (min) × costo orario del ruolo (€/min) × volume annuo (3.600 note spese, FA1)`, riferito unicamente all'attività/fase richiamata in TASK-0005A per quella opportunità; (b) una **percentuale di riduzione attesa** (FA4), motivata dalla natura dell'automazione descritta in TASK-0005A; (c) il **beneficio annuo atteso** = costo AS-IS annuo indirizzabile × percentuale di riduzione (più eventuale componente di costo evitato per errori, dove pertinente, cfr. FA5).

Costi orari per minuto (derivati da FA2): DIP € 0,4167/min; RESP € 0,75/min; AMM € 0,50/min; TES € 0,50/min.

Tempi AS-IS unitari assunti per fase/attore (FA3), coerenti con la sequenza di 8 fasi di TASK-0005A:

| Fase (TASK-0005A) | Attività | Attore | Tempo AS-IS (min/nota) |
|---|---|---|---|
| Fase 1-2 | Raccolta giustificativi e compilazione | DIP | 15 |
| Fase 2 (overhead) | Rework per discrepanze importo/giustificativo (15% delle note, 10 min combinati DIP+AMM) | DIP+AMM | 1,5 (atteso) |
| Fase 3 | Invio email e triage/inoltro | DIP (2) + AMM (1) + RESP (1) | 4 |
| Fase 4 (overhead) | Sollecito/gestione attesa approvazione | RESP | 1 |
| Fase 5 | Verifica conformità a policy | AMM | 8 |
| Fase 5 (overhead) | Rework per documentazione incompleta (10% delle note, 12 min combinati DIP+AMM) | DIP+AMM | 1,2 (atteso) |
| Fase 6 | Registrazione contabile (doppio data entry) | AMM | 10 |
| Fase 7 | Predisposizione pagamento | TES | 4 |
| Fase 8 | Archiviazione documentale | AMM | 3 |
| Trasversale (Fasi 3-8) | Solleciti informali di stato (DIP 0,5 + RESP 1 + AMM 1,5) | DIP+RESP+AMM | 3 |

Nota di coerenza interna (verifica di non sovrastima, Interpretation): per ciascun ruolo, la somma dei tempi risparmiati stimati per le diverse opportunità (sezione 2) è stata verificata come inferiore al tempo AS-IS totale assegnato a quel ruolo, in modo da non ipotizzare un risparmio di tempo superiore al tempo effettivamente disponibile nel modello (es. per AMM: tempo AS-IS totale ≈ 23,8 min/nota; tempo risparmiato aggregato stimato ≈ 18,5 min/nota, residuo ≈ 5,3 min/nota per attività di giudizio/eccezione non automatizzabili).

### 2. Quantificazione per singola opportunità (OPP-01–OPP-10)

| OPP | Fase/attività di origine (TASK-0005A) | Costo AS-IS annuo indirizzabile | Metodo costo AS-IS | Riduzione attesa (Estimate, FA4) | Beneficio annuo atteso | Metodo beneficio |
|---|---|---|---|---|---|---|
| OPP-01 | Fase 1-2, raccolta e compilazione (DIP) | **€ 22.500** | 15 min × € 0,4167/min × 3.600 note | 67% (15→5 min residui, acquisizione automatica dei dati dal giustificativo) | **€ 15.000** | Costo AS-IS × 67% |
| OPP-02 | Fase 2, controllo automatico di coerenza importo/giustificativo | **€ 2.475** | 15% note × 10 min combinati × € 0,4583/min (tasso medio DIP/AMM) × 3.600 | 67% (tasso di rework atteso 15%→5%) | **€ 1.650** | Costo AS-IS × 67% |
| OPP-03 | Fase 3, sostituzione email con workflow digitale strutturato | **€ 7.500** | 4 min combinati (DIP+AMM+RESP) × 3.600, pesati per costo orario di ciascun ruolo | 90% (attività quasi interamente meccanica di inoltro/smistamento) | **€ 6.750** | Costo AS-IS × 90% |
| OPP-04 | Fase 4, notifiche/promemoria automatici e approvazione digitale | **€ 2.700** | 1 min RESP (overhead di sollecito) × € 0,75/min × 3.600 | 70% (residua quota di escalation manuale nei casi eccezionali) | **€ 1.890** | Costo AS-IS × 70%. Beneficio aggiuntivo non monetizzato: riduzione del tempo di ciclo di rimborso (Interpretation, non quantificata per assenza di dati sul valore percepito dal dipendente). |
| OPP-05 | Fase 5, motore di regole di policy automatico | **€ 14.400** (tempo) + **€ 2.160** (costo evitato non conformità) = **€ 16.560** | Tempo: 8 min AMM × € 0,50/min × 3.600. Costo evitato: 3% note × € 20 × 3.600 (FA5) | Tempo: 62,5% (8→3 min). Costo evitato: da 3% a 0,5% di slittamento | **€ 10.800** (€ 9.000 tempo + € 1.800 costo evitato) | Componente tempo: costo AS-IS tempo × 62,5%. Componente rischio: € 2.160 × (1 − 0,5/3) |
| OPP-06 | Fase 5, digitalizzazione checklist documentale | **€ 1.980** | 10% note × 12 min combinati × € 0,4583/min × 3.600 | 70% (tasso di rework atteso 10%→3%) | **€ 1.386** | Costo AS-IS × 70% |
| OPP-07 | Fase 6, integrazione dati con applicativo di contabilità (eliminazione doppio data entry) | **€ 18.000** | 10 min AMM × € 0,50/min × 3.600 | 80% (10→2 min residui di controllo) | **€ 14.400** | Costo AS-IS × 80% |
| OPP-08 | Fase 7, generazione automatica distinta pagamento | **€ 7.200** (tempo) + **€ 1.080** (costo evitato errori pagamento) = **€ 8.280** | Tempo: 4 min TES × € 0,50/min × 3.600. Costo evitato: 2% note × € 15 × 3.600 (FA5) | Tempo: 62,5% (4→1,5 min). Costo evitato: da 2% a 0,3% | **€ 5.418** (€ 4.500 tempo + € 918 costo evitato) | Componente tempo: costo AS-IS tempo × 62,5%. Componente rischio: € 1.080 × (1 − 0,3/2) |
| OPP-09 | Fase 8, archiviazione digitale automatica strutturata | **€ 5.400** | 3 min AMM × € 0,50/min × 3.600 | 83% (3→0,5 min residui) | **€ 4.500** | Costo AS-IS × 83% |
| OPP-10 | Trasversale, cruscotto di monitoraggio stato note spese | **€ 6.150** | 3 min combinati (DIP+RESP+AMM) × 3.600, pesati per costo orario di ciascun ruolo | 80% lordo, ridotto al 72% netto per lo sconto prudenziale FA6 (sovrapposizione con OPP-03/OPP-04) | **€ 4.428** | Costo AS-IS × 72% netto |

Tutti i valori di questa tabella sono **Estimate**, non Fact: derivano dal modello descritto al punto 1, applicato ai dati qualitativi di TASK-0005A.

### 3. Vista di impatto economico complessivo aggregato

- **Costo AS-IS annuo indirizzabile totale** (somma delle colonne "Costo AS-IS", incluse le componenti di costo evitato per rischio/errore): € 22.500 + € 2.475 + € 7.500 + € 2.700 + € 16.560 + € 1.980 + € 18.000 + € 8.280 + € 5.400 + € 6.150 = **€ 91.545/anno** (Estimate). Rappresenta la quota di costo del processo attuale riconducibile alle attività manuali/inefficienti oggetto delle 10 opportunità, non il costo totale del processo (che include anche attività di giudizio non automatizzabili, es. la valutazione di merito dell'approvazione da parte di RESP).
- **Beneficio economico annuo lordo stimato** (somma dei benefici puntuali OPP-01–OPP-10): € 15.000 + € 1.650 + € 6.750 + € 1.890 + € 10.800 + € 1.386 + € 14.400 + € 5.418 + € 4.500 + € 4.428 = **€ 66.222/anno**, arrotondato a **≈ € 66.000/anno** (Estimate). Corrisponde a una cattura media del ≈ 72% del costo AS-IS indirizzabile, coerente con le percentuali di riduzione applicate.
- **Range di incertezza aggregato** (Estimate, Interpretation): applicando una riduzione prudenziale aggiuntiva del 10-30% per tenere conto dell'incertezza cumulata su volumi, tassi orari e tassi di riduzione (FA1-FA5), il beneficio annuo atteso è collocato in un intervallo indicativo di **€ 46.000 – € 66.000/anno**, con valore centrale indicativo di **≈ € 56.000/anno**.
- **Contributo relativo delle prime tre opportunità per beneficio**: OPP-01 (€ 15.000), OPP-07 (€ 14.400), OPP-05 (€ 10.800) sommano a € 40.200/anno, pari al ≈ 61% del beneficio lordo totale. Questo risultato è coerente con il Finding F5 del deliverable TASK-0005A, che individuava OPP-05 e OPP-07 come le opportunità a maggiore potenziale di impatto strutturale; il presente modello aggiunge OPP-01 come terza priorità in termini monetari, per effetto dell'elevata frequenza dell'attività (ogni singola nota spesa) più che della sua criticità di controllo.
- **Costo di implementazione indicativo** (FA7): one-off € 25.000–45.000 (centrale € 35.000); ricorrente € 6.000–12.000/anno (centrale € 9.000/anno).
- **Beneficio netto annuo (scenario centrale)**: € 56.000 − € 9.000 = **≈ € 47.000/anno** (Estimate).
- **Payback indicativo** (Estimate, ordine di grandezza, non un piano di investimento):
  - Scenario centrale: € 35.000 / € 47.000 ≈ **0,74 anni (≈ 9 mesi)**.
  - Scenario ottimistico: (€ 66.000 − € 6.000) / € 25.000 ≈ **0,42 anni (≈ 5 mesi)**.
  - Scenario prudenziale: (€ 46.000 − € 12.000) / € 45.000 ≈ **1,32 anni (≈ 16 mesi)**.
  - In tutti gli scenari considerati il payback resta indicativamente inferiore ai 18 mesi, ma il dato è puramente illustrativo dell'ordine di grandezza e non costituisce un business case validato né una previsione garantita.

## Alternatives Considered

- **Alternativa 1 — Quantificare solo il sottoinsieme di opportunità a maggiore impatto strutturale segnalato in TASK-0005A (OPP-05, OPP-07)**: scartata perché il punto di integrazione vincolante del task richiede di richiamare e quantificare singolarmente tutte le opportunità identificate in TASK-0005A, per garantire tracciabilità completa e non anticipare in questa fase una selezione che spetta a una successiva decisione dell'Human Owner.
- **Alternativa 2 — Approccio di stima top-down (es. percentuale indicativa di riduzione del budget complessivo della funzione Amministrazione)**: scartata perché non consente di collegare esplicitamente e tracciabilmente ciascuna opportunità alla fase/attività di origine, requisito vincolante del task (criterio di accettazione 3); l'approccio bottom-up per singola nota spesa, sebbene più oneroso, è l'unico che soddisfa questo requisito.
- **Alternativa 3 — Trattare i benefici delle 10 opportunità come pienamente indipendenti e sommabili senza correzioni**: scartata in favore dell'introduzione di uno sconto prudenziale (FA6) e di un range di incertezza aggregato, per riflettere il rischio di sovrapposizione segnalato anche nella nota metodologica di TASK-0005A (le opportunità sono presentate come complementari, non del tutto indipendenti).

Non sono state considerate alternative di prodotto/fornitore o di modalità implementativa (build vs. buy), in quanto esplicitamente escluse dallo scope del task.

## Findings

- **F1 (Estimate)**: il beneficio economico annuo lordo stimato dall'automazione delle 10 opportunità identificate in TASK-0005A è dell'ordine di € 66.000/anno (range € 46.000–66.000/anno), a fronte di un costo AS-IS indirizzabile stimato di € 91.545/anno.
- **F2 (Estimate/Interpretation)**: le tre opportunità a maggiore beneficio monetario stimato sono OPP-01 (raccolta/compilazione digitale), OPP-07 (integrazione dati con la contabilità) e OPP-05 (motore di regole di policy), che insieme spiegano circa il 61% del beneficio lordo totale.
- **F3 (Interpretation)**: il risultato conferma, con una quantificazione economica, la priorità qualitativa già indicata nel Finding F5 di TASK-0005A per OPP-05 e OPP-07, aggiungendo OPP-01 come terza priorità per effetto della sua elevata frequenza di occorrenza (ogni nota spesa, non solo i casi critici).
- **F4 (Estimate)**: il payback indicativo dell'investimento, in tutti gli scenari considerati (centrale, ottimistico, prudenziale), è inferiore a 18 mesi, suggerendo — a livello di solo ordine di grandezza e non di decisione — un profilo economico potenzialmente favorevole all'automazione, da validare con dati reali prima di qualunque impegno.
- **F5 (Interpretation)**: le componenti di beneficio legate a riduzione di rischio/errore (OPP-05, OPP-08, componenti FA5) rappresentano complessivamente circa il 4% del beneficio totale stimato (€ 2.718 su € 66.222); la parte preponderante del beneficio deriva da risparmio di tempo su attività ripetitive, non da riduzione del rischio di controllo, il che è rilevante per un'eventuale comunicazione interna del caso di automazione.

## Risks and Limitations

| ID | Rischio/Limitazione | Probabilità | Impatto | Mitigazione proposta |
|---|---|---|---|---|
| R1 | Il volume reale di note spese (FA1) potrebbe discostarsi sensibilmente da 300/mese, alterando proporzionalmente tutte le stime monetarie assolute. | Alta (nessun dato reale) | Alto | Validare il volume reale con dati dell'organizzazione prima di qualunque business case formale; i risultati relativi (ranking tra opportunità) restano validi indipendentemente dal volume. |
| R2 | I costi orari per ruolo (FA2) sono valori sintetici indicativi e non riflettono necessariamente la struttura retributiva reale dell'organizzazione. | Alta | Medio-Alto | Sostituire i tassi con dati reali (costo del lavoro fully-loaded) non appena disponibili e autorizzati. |
| R3 | I tempi unitari per fase (FA3) e i tassi di riduzione attesi (FA4) sono stime per analogia, non misurati; un errore sistematico in una direzione ottimistica sovrastimerebbe il beneficio complessivo. | Alta | Alto | Condurre, in una fase successiva e solo se autorizzata, una rilevazione tempi reale (time-and-motion) anche solo campionaria prima di impegnare budget. |
| R4 | I tassi di non conformità/errore (FA5, alla base di parte del beneficio di OPP-05 e OPP-08) sono le assunzioni meno fondate del modello, senza alcuna base anche indicativa nei documenti di input. | Media | Basso (la componente pesa ~4% del totale) | Trattare le componenti di costo evitato per rischio come informazione qualitativa di supporto, non come driver primario della decisione economica. |
| R5 | Le opportunità OPP-03, OPP-04 e OPP-10 intervengono su attività di sollecito/tracciamento tra loro correlate; nonostante lo sconto prudenziale applicato (FA6), il rischio di doppio conteggio residuo non è azzerato. | Media | Medio | In una successiva fase di implementazione, misurare il beneficio realizzato in modo aggregato per queste tre opportunità congiuntamente, non sommando linearmente le stime individuali. |
| R6 | I costi di implementazione (FA7) sono ordini di grandezza puramente indicativi, non basati su preventivi reali né su una soluzione tecnica definita; il payback stimato potrebbe variare significativamente. | Alta | Alto | Richiedere preventivi/valutazioni tecniche reali prima di qualunque decisione di investimento; questo rapporto non deve essere usato come base di stanziamento budget senza tale validazione. |
| R7 | Il modello eredita l'incertezza dello scenario di processo di TASK-0005A (confidenza Media, processo non verificato su un caso reale); se il processo reale di interesse fosse diverso dalla "gestione note spese" (cfr. Open Question di TASK-0005A), l'intera quantificazione economica risulterebbe non direttamente applicabile. | Media | Alto | Coerente con REC-1 di TASK-0005A: richiedere conferma dell'Human Owner sul processo reale di interesse prima di ogni uso decisionale di questo rapporto. |
| R8 | Rischio organizzativo generico di automazione (non economico): resistenza al cambiamento da parte di dipendenti e responsabili abituati al processo manuale, possibile sottoutilizzo dello strumento nella fase iniziale. | Media | Medio | Prevedere, in fase di eventuale implementazione, un piano di change management e formazione; non quantificato in questo rapporto (fuori scope). |

Limitazione generale: questo documento non utilizza alcuna fonte esterna né dato reale; tutti i valori monetari sono Estimate costruite su un doppio strato di assunzioni (di processo, ereditate da TASK-0005A, e finanziarie, proprie di questo rapporto), nessuna delle quali verificata.

## Recommendations

- **REC-1**: Non utilizzare questo rapporto come base per uno stanziamento di budget o una decisione di investimento formale: si tratta di una stima di ordine di grandezza su scenario sintetico, che richiede validazione con dati reali (volumi, costi orari, tempi effettivi) prima di qualunque impegno. Dipendenza: nessuna. Approvazione richiesta: Human Owner, prima di ogni fase operativa conseguente (coerente con la propria agent definition).
- **REC-2**: Qualora si intenda procedere a una fase esplorativa successiva, dare priorità alla validazione economica di OPP-01, OPP-05 e OPP-07 (le tre opportunità a maggiore beneficio stimato, F2), eventualmente tramite una raccolta reale e limitata di dati di tempo/volume, prima di estendere l'analisi alle restanti opportunità. Dipendenza: disponibilità di dati reali. Approvazione richiesta: Human Owner.
- **REC-3**: Prima di ogni decisione, richiedere conferma all'Human Owner sul processo amministrativo realmente di interesse (cfr. R7 e Open Question corrispondente in TASK-0005A), poiché l'intera quantificazione economica di questo rapporto è condizionata alla rilevanza dello scenario "gestione note spese". Dipendenza: nessuna. Approvazione richiesta: Human Owner.
- **REC-4**: Non procedere alla selezione di uno specifico prodotto/fornitore né alla richiesta di preventivi in questa fase: tali attività eccedono lo scope di questo task e richiedono una valutazione dedicata successiva, autorizzata dall'Human Owner. Dipendenza: nessuna. Approvazione richiesta: Human Owner.
- **REC-5**: Trattare le componenti di beneficio legate a riduzione del rischio di controllo/errore (OPP-05, OPP-08) come supporto qualitativo alla motivazione dell'automazione, non come driver quantitativo primario, data la loro bassa robustezza (R4, F5). Dipendenza: nessuna. Approvazione richiesta: nessuna (indicazione metodologica).

Nessuna delle raccomandazioni sopra costituisce un'azione operativa eseguita o autorizzata da questo documento; tutte richiedono validazione a valle secondo il workflow governato descritto in CLAUDE.md e GOVERNANCE.md.

## Confidence Level

**Low** (livello complessivo).

Motivazione: il modello di calcolo è internamente coerente, tracciabile e rigorosamente ancorato, per ciascuna opportunità, alla fase/attività corrispondente descritta in TASK-0005A (requisito vincolante del task). Tuttavia i valori monetari assoluti derivano da un doppio strato di assunzioni non verificabili: (a) le assunzioni di processo di TASK-0005A (già dichiarate a confidenza da bassa a media in quel documento), e (b) le assunzioni finanziarie proprie di questo rapporto (volumi, costi orari, tempi unitari, tassi di riduzione, tassi di errore — FA1-FA7), nessuna delle quali si basa su dati aziendali reali, come esplicitamente richiesto dallo scope. Il livello "Alto" non è assegnabile per esplicito vincolo del task e per assenza di qualunque dato osservato. Il livello "Medium" non è ritenuto appropriato data la numerosità e il peso delle assunzioni finanziarie non verificate che si sommano (non si sostituiscono) a quelle già presenti nel documento di origine.

Nota distintiva: la **ranking relativa** tra opportunità (quali generano il beneficio maggiore, in ordine: OPP-01, OPP-07, OPP-05, OPP-03, OPP-09, OPP-08, OPP-10, OPP-04, OPP-06, OPP-02) è considerata a confidenza **Medium**, poiché più robusta ai singoli valori assoluti in euro: dipende principalmente da frequenza dell'attività, tempo AS-IS assoluto e grado di automatizzabilità meccanica, elementi meno sensibili a un singolo parametro assunto rispetto al valore monetario puntuale.

## Open Questions

- Qual è il volume reale di note spese gestite nell'organizzazione di riferimento (se esistente), necessario per sostituire l'assunzione FA1 con un dato osservato?
- Quali sono i costi orari fully-loaded reali per i ruoli coinvolti (DIP, RESP, AMM, TES), necessari per sostituire l'assunzione FA2?
- I tempi unitari per fase (FA3) e i tassi di rework/errore (FA5) sono verificabili tramite una rilevazione anche solo campionaria sul processo reale?
- L'implementazione delle opportunità produrrebbe effetti di sinergia (superiori alla somma dei singoli benefici, come ipotizzato nella nota metodologica di TASK-0005A) o, al contrario, una sovrapposizione maggiore di quella già scontata in FA6?
- Quale sarebbe il costo di implementazione reale, una volta definita una soluzione tecnica (non oggetto di questo task)?
- Resta aperta, ereditata da TASK-0005A, la domanda su quale processo amministrativo sia effettivamente di interesse per l'Human Owner: la risposta condiziona la rilevanza diretta dell'intera quantificazione economica qui presentata.

## Acceptance Criteria Verification

| # | Criterio (da TASK-0005B) | Verifica |
|---|---|---|
| 1 | File salvato esattamente e unicamente in `workspace/drafts/REQ-0005-economic-impact.md`; nessun altro file creato o modificato. | Soddisfatto: unico file scritto è questo documento. |
| 2 | Tutte le sezioni richieste dalla skill `structured-analysis` presenti e compilate. | Soddisfatto: struttura completa applicata. |
| 3 | Stima economica esplicitamente e tracciabilmente collegata alle opportunità di TASK-0005A; ogni opportunità quantificata richiama la fase/attività di origine. | Soddisfatto: sezione Analysis, tabella punto 2, colonna "Fase/attività di origine" per ciascuna OPP-01–OPP-10. |
| 4 | Nessuna stima economica basata su un processo di automazione generico o indipendente da TASK-0005A. | Soddisfatto: tutte le stime derivano dalle 10 opportunità nominative di TASK-0005A, nessuna aggiunta. |
| 5 | Ogni valore quantitativo riporta il metodo di calcolo/stima e le assunzioni da cui dipende. | Soddisfatto: colonne "Metodo" nelle tabelle e riferimenti a FA1-FA7 per ogni valore. |
| 6 | Ogni informazione non direttamente derivabile dagli input autorizzati etichettata come Assumption o Estimate, non come Fact. | Soddisfatto: sezioni Assumptions ed etichettatura esplicita in Analysis/Findings. |
| 7 | Nessun dato inventato spacciato per fatto verificato relativo ad un'azienda reale; nessuna fonte esterna citata. | Soddisfatto: sezione Inputs Used limitata ai documenti di repository; nessuna fonte esterna. |
| 8 | Rischi materiali documentati con probabilità, impatto e mitigazione proposta. | Soddisfatto: sezione Risks and Limitations, tabella R1-R8. |
| 9 | Raccomandazioni derivano in modo tracciabile dall'analisi, non includono selezione di prodotto/fornitore né decisioni di investimento definitive. | Soddisfatto: sezione Recommendations, REC-1/REC-4 escludono esplicitamente tali elementi. |
| 10 | Livello di confidenza complessivo dichiarato, motivato e coerente con l'assenza di dati reali (non "High"). | Soddisfatto: sezione Confidence Level, dichiarato "Low". |
| 11 | Domande aperte e limitazioni informative esplicitate. | Soddisfatto: sezioni Open Questions e Risks and Limitations. |
| 12 | Documento privo di azioni operative eseguite, transazioni finanziarie reali, richieste di pubblicazione o riferimenti a integrazioni esterne. | Soddisfatto: nessuna azione operativa; scope esclude esplicitamente tali elementi. |
| 13 | I file `workspace/requests/REQ-0005-phase3.md` e `workspace/drafts/REQ-0005-process-analysis.md` non sono stati modificati. | Soddisfatto: entrambi i file sono stati solo letti, non modificati; unico file scritto è questo documento. |
