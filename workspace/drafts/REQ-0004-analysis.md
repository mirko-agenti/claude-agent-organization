# Analisi AS-IS e proposta TO-BE del processo di approvazione delle fatture

## Metadata

- Request ID: REQ-0004 (file sorgente della richiesta: `workspace/requests/REQ-0003-as-is-to-be.md`, trattato come REQ-0004 ai fini del workflow — vedi nota su collisione di identificativo in `workspace/tasks/TASK-0004-as-is-to-be.md`)
- Task ID: TASK-0004
- Agent: Business Analyst Agent
- Version: v1
- Status: submitted_for_review
- Date: 2026-07-28

## Executive Summary

La richiesta originale ("Analizzare il processo AS-IS di approvazione delle fatture e proporre un TO-BE digitalizzato") non specifica settore, dimensione aziendale, volumi di fatture, sistemi in uso né organigramma. In assenza di dati reali, questa analisi costruisce uno scenario AS-IS **sintetico e plausibile**, tipico di un'organizzazione di medie dimensioni con processo di approvazione fatture prevalentemente manuale/cartaceo-email, e ne deriva un'ipotesi di processo TO-BE digitalizzato.

Il processo AS-IS ipotizzato presenta criticità tipiche di processi non digitalizzati: tempi di ciclo lunghi e variabili, tracciabilità debole, rischio di smarrimento/duplicazione documentale, controlli di conformità (three-way match, soglie di approvazione) eseguiti manualmente e in modo non sistematico, dipendenza da disponibilità fisica degli approvatori.

Il TO-BE proposto introduce: acquisizione digitale delle fatture (incluso, se applicabile, il canale di fatturazione elettronica), workflow di approvazione strutturato su matrice di soglie/deleghe, controlli automatici (three-way match, duplicati, coerenza anagrafica fornitore), tracciabilità end-to-end e integrazione con la registrazione contabile e la disposizione di pagamento. Non viene raccomandato alcun prodotto o fornitore specifico, coerentemente con lo scope del task.

I benefici attesi (stime, non misurazioni) riguardano riduzione dei tempi di ciclo, minore rischio di errore/frode, migliore tracciabilità e reportistica. I rischi principali della trasformazione sono di natura organizzativa (change management, resistenza al cambiamento), di controllo (segregazione dei compiti durante la transizione, qualità dei dati acquisiti digitalmente) e di progetto (dipendenza da sistemi esistenti non noti).

**Livello di confidenza complessivo: Low-Medium.** L'analisi è metodologicamente solida ma si basa quasi interamente su uno scenario ipotetico, in assenza di qualunque dato reale sull'organizzazione oggetto della richiesta; il documento è un supporto decisionale preliminare, non una fotografia di un processo reale, e richiede validazione con dati effettivi prima di qualsiasi decisione operativa.

## Objective

Produrre un'analisi strutturata del processo AS-IS di approvazione delle fatture e una proposta di processo TO-BE digitalizzato, applicando il framework definito dalla skill `structured-analysis`, distinguendo in modo esplicito fatti, assunzioni, stime, interpretazioni e raccomandazioni, così da fornire all'Human Owner un supporto decisionale preliminare in vista di un'eventuale digitalizzazione del processo.

## Context

La richiesta (REQ-0004, testo integrale: "Analizzare il processo AS-IS di approvazione delle fatture e proporre un TO-BE digitalizzato") non fornisce alcuna informazione su:

- il settore o la tipologia di organizzazione;
- la dimensione dell'azienda o i volumi di fatture trattati;
- i sistemi informativi attualmente in uso (ERP, contabilità, workflow, e-invoicing);
- l'organigramma o i ruoli coinvolti nell'approvazione;
- eventuali vincoli normativi/fiscali specifici (es. obblighi di fatturazione elettronica).

Come previsto dal task (`TASK-0004-as-is-to-be.md`, sezione "Input autorizzati") e dalla skill `structured-analysis` (sezione "Missing Information"), in assenza di questi dati non è stata effettuata alcuna ricerca esterna né è stato inventato alcun dato spacciandolo per reale. È stato invece costruito uno **scenario di riferimento sintetico e dichiaratamente ipotetico**, rappresentativo di un processo "tipico" di approvazione fatture (ricezione, verifica, approvazione, registrazione, pagamento) per un'organizzazione di medie dimensioni con processo prevalentemente manuale. Ogni elemento dello scenario non derivabile dal testo della richiesta è etichettato come Assumption (vedi sezione "Assumptions").

Questo documento è quindi da intendersi come un modello di riferimento generico e un esempio di metodo applicabile, non come la descrizione di un'azienda reale, e va validato con dati effettivi prima di qualunque decisione operativa.

## Scope

### Incluso

- Descrizione strutturata del processo AS-IS di approvazione delle fatture (attori, fasi, input/output, strumenti/supporti ipotizzati, punti di controllo), costruita come scenario sintetico/plausibile.
- Identificazione delle criticità/inefficienze dell'AS-IS, come interpretazioni motivate.
- Proposta di processo TO-BE digitalizzato coerente con l'AS-IS descritto, con fasi, attori, punti di automazione/digitalizzazione e controlli.
- Confronto esplicito AS-IS vs TO-BE con benefici attesi.
- Rischi della trasformazione proposta (organizzativi, operativi, di controllo) con probabilità, impatto e mitigazione.
- Condizioni abilitanti e dipendenze di alto livello per il passaggio da AS-IS a TO-BE, senza dettaglio implementativo di soluzioni tecnologiche specifiche.
- Esplicitazione delle assunzioni, del relativo livello di confidenza e dell'impatto in caso di scostamento dalla realtà.
- Dichiarazione del livello di confidenza complessivo dell'analisi.
- Sintesi esecutiva.

### Escluso

- Ricerche esterne, benchmark di mercato, best practice di settore citate come fonti, dati di settore reali.
- Uso di dati reali, riservati o relativi a un'azienda, cliente o fornitore specifico realmente esistente.
- Selezione o raccomandazione di uno specifico prodotto/fornitore software.
- Qualsiasi azione operativa (implementazione, configurazione, acquisto, contatti con fornitori, change reale sui sistemi).
- Decisioni finali di adozione del TO-BE: il rapporto è a supporto della decisione dell'Human Owner, non la sostituisce.
- Modifiche a file al di fuori di `workspace/`.
- Pubblicazione o comunicazione esterna del contenuto prodotto.
- Integrazione con sistemi esterni.

## Inputs Used

- `workspace/requests/REQ-0003-as-is-to-be.md` — testo integrale della richiesta originale (trattato come REQ-0004 nel workflow). Unico input di contenuto autorizzato per l'analisi.
- `workspace/tasks/TASK-0004-as-is-to-be.md` — task assegnato dall'Orchestrator, con scope, struttura richiesta e criteri di accettazione.
- `.claude/skills/structured-analysis/SKILL.md` — framework metodologico applicato per la struttura e il metodo dell'analisi.
- `CLAUDE.MD` e `GOVERNANCE.MD` — regole operative e di governance del repository (nessun dato reale, distinzione fatti/assunzioni, nessuna azione esterna, nessuna approvazione autonoma).

Nessun'altra fonte, documento, dataset o conoscenza di dominio presentata come dato fattuale su un'azienda reale è stata utilizzata. Non è stata effettuata alcuna ricerca esterna (internet o repository esterni).

## Evidence Quality

**Bassa (Low).** L'unico input di contenuto disponibile è una singola frase generica ("Analizzare il processo AS-IS di approvazione delle fatture e proporre un TO-BE digitalizzato"), priva di dati su azienda, settore, volumi, sistemi o organigramma. Di conseguenza:

- non esistono Fact relativi a un processo aziendale specifico;
- la quasi totalità del contenuto sostanziale dell'analisi è costituita da Assumption (premesse dichiarate necessarie per costruire uno scenario), Interpretation (ragionamenti su criticità e benefici) ed Estimate (indicazioni qualitative di impatto, non misurazioni);
- i pochi Fact presenti riguardano esclusivamente il contenuto testuale della richiesta e del task stesso.

Questa classificazione bassa è coerente con lo scope del task, che richiede esplicitamente la costruzione di uno scenario sintetico dichiarato come tale.

## Assumptions

Le assunzioni seguenti sono necessarie per costruire uno scenario AS-IS/TO-BE coerente e analizzabile, in assenza di dati reali. Ogni scostamento tra queste assunzioni e la realtà di un'eventuale organizzazione specifica invalida, in tutto o in parte, i dettagli (non il metodo) dell'analisi.

| # | Assumption | Motivazione | Confidenza | Impatto se errata |
|---|---|---|---|---|
| A1 | L'organizzazione di riferimento è di medie dimensioni, con un volume indicativo di alcune centinaia/migliaia di fatture passive al mese. | Necessaria per dimensionare criticità (colli di bottiglia, carico di lavoro) e benefici della digitalizzazione. | Bassa | Se l'azienda è molto piccola (poche fatture/mese) o molto grande (alti volumi, più sedi/paesi), priorità delle criticità e complessità del TO-BE cambiano sensibilmente. |
| A2 | Il processo AS-IS è oggi prevalentemente manuale: fatture ricevute via email/PEC o cartacee, verifiche e approvazioni gestite via email/firma cartacea, senza workflow strutturato in un sistema dedicato. | È lo scenario "tipico" più comune per un processo non ancora digitalizzato, coerente con la richiesta di proporre un TO-BE "digitalizzato" (che implica un AS-IS non pienamente digitale). | Media | Se il processo AS-IS reale è già parzialmente digitalizzato (es. workflow esistente ma non ottimizzato), molte criticità descritte non si applicano e il TO-BE andrebbe ridefinito come evoluzione, non come prima digitalizzazione. |
| A3 | Sono coinvolti quattro ruoli principali: Ufficio Ricezione/Segreteria (o Ufficio Acquisti), Responsabile di Budget/Approvatore (owner del costo), Ufficio Contabilità/Amministrazione Fornitori (AP), Direzione Finanziaria/CFO per soglie elevate. | Struttura organizzativa minima plausibile per un processo di approvazione fatture con separazione dei compiti. | Media | Un organigramma reale diverso (es. approvazione centralizzata, presenza di un ufficio acquisti separato, catena di approvazione più lunga/corta) richiede di ridisegnare attori e passaggi. |
| A4 | Gli strumenti attualmente in uso sono generici: posta elettronica, fogli di calcolo per il tracking, un sistema ERP/contabile di base non integrato con un workflow di approvazione dedicato. | Coerente con A2; necessaria per individuare i punti di digitalizzazione nel TO-BE. | Bassa | Se è già presente un ERP con moduli di workflow non utilizzati, il TO-BE potrebbe richiedere solo attivazione/configurazione anziché nuova soluzione. |
| A5 | Esiste una matrice di soglie di approvazione (es. per importo) anche se non formalizzata o non sistematicamente applicata. | Ipotesi standard in ambito controllo di gestione/contabilità fornitori, utile per descrivere il punto di controllo "approvazione". | Bassa | Se non esiste alcuna soglia (approvazione sempre allo stesso livello) o se esiste una policy formale già rispettata, la criticità "controllo non sistematico" andrebbe ridimensionata. |
| A6 | Non sono noti obblighi normativi specifici (es. fatturazione elettronica obbligatoria, conservazione digitale a norma) applicabili al contesto; se applicabili, sono trattati come Open Question e non come requisito dato. | La richiesta non menziona il paese/giurisdizione né il settore. | Bassa | La presenza di obblighi normativi specifici (es. fatturazione elettronica B2B obbligatoria) può rendere alcuni elementi del TO-BE non opzionali ma vincolanti, e va verificata. |
| A7 | Il processo riguarda fatture passive (fornitori verso l'azienda), non fatture attive (emesse dall'azienda verso clienti). | La dicitura "approvazione delle fatture" è tipica del ciclo passivo (Accounts Payable); il ciclo attivo non prevede tipicamente un'"approvazione" interna della fattura stessa. | Media | Se la richiesta riguardasse in realtà fatture attive, lo scope e gli attori del processo cambierebbero radicalmente. |

## Analysis

### Processo AS-IS (scenario sintetico/ipotetico)

*Nota: quanto segue è uno scenario costruito, non la descrizione di un processo reale osservato. Attori, strumenti e controlli sono Assumption/Interpretation, non Fact.*

**Attori coinvolti**

- Ufficio Ricezione/Segreteria (o Ufficio Acquisti): punto di ingresso delle fatture.
- Responsabile di Budget (Approvatore di linea): valida la congruità della fattura rispetto all'ordine/servizio ricevuto.
- Ufficio Contabilità/Amministrazione Fornitori (AP): registrazione contabile e predisposizione del pagamento.
- Direzione Finanziaria/CFO: approvazione per importi sopra soglia e/o eccezioni.
- Fornitore: emittente della fattura, esterno al processo interno ma punto di contatto per chiarimenti/contestazioni.

**Fasi del processo**

1. **Ricezione**
   - Input: fattura cartacea o file (PDF/email) inviata dal fornitore.
   - Attività: protocollazione/registrazione manuale in arrivo (es. su registro cartaceo o foglio Excel), smistamento all'ufficio/responsabile competente.
   - Output: fattura assegnata a un referente per la verifica.
   - Strumenti: email, stampa cartacea, registro/Excel.
   - Controllo: nessuno strutturato oltre alla presa in carico; rischio di smarrimento o assegnazione errata.

2. **Verifica**
   - Input: fattura assegnata, eventuale ordine di acquisto (PO) o contratto di riferimento, evidenza di ricezione beni/servizi.
   - Attività: controllo manuale di coerenza (three-way match: fattura–ordine–evidenza di ricezione), verifica dati fornitore e importi.
   - Output: fattura verificata (conforme) o segnalata per chiarimento/contestazione.
   - Strumenti: confronto manuale di documenti cartacei/email, eventuale consultazione ERP per l'ordine.
   - Controllo: dipendente dall'attenzione e disponibilità dell'incaricato; non sistematico, non tracciato centralmente.

3. **Approvazione**
   - Input: fattura verificata.
   - Attività: invio (fisico o via email) al Responsabile di Budget per validazione; se sopra soglia, ulteriore inoltro a Direzione Finanziaria.
   - Output: fattura approvata (con firma cartacea o conferma email) o respinta/da chiarire.
   - Strumenti: email, firma cartacea, eventuale catena di inoltro.
   - Controllo: soglie di approvazione presumibilmente esistenti ma applicate in modo non sistematico (A5); tracciabilità delle approvazioni debole (email disperse, nessun log centralizzato).

4. **Registrazione**
   - Input: fattura approvata.
   - Attività: inserimento manuale dei dati fattura nel sistema contabile/ERP da parte dell'Ufficio AP.
   - Output: fattura registrata in contabilità, pronta per la programmazione del pagamento.
   - Strumenti: ERP/sistema contabile di base, inserimento manuale.
   - Controllo: rischio di errore di trascrizione, possibile doppia registrazione in assenza di controllo automatico dei duplicati.

5. **Pagamento**
   - Input: fattura registrata, scadenza contrattuale.
   - Attività: programmazione ed esecuzione del pagamento secondo le scadenze; archiviazione del giustificativo.
   - Output: fattura pagata, documentazione archiviata (fisicamente o in cartelle condivise).
   - Strumenti: home banking/sistema di pagamento, archiviazione cartacea o su file condivisi non strutturati.
   - Controllo: verifica manuale delle scadenze; rischio di pagamenti duplicati o ritardati per mancanza di visibilità aggregata.

### Criticità/inefficienze dell'AS-IS (Interpretation)

Le seguenti criticità sono interpretazioni motivate basate sullo scenario descritto, non misurazioni:

- **Tempi di ciclo lunghi e variabili**: l'assenza di un workflow strutturato e la dipendenza da disponibilità fisica/email degli approvatori generano colli di bottiglia, specie in caso di assenze o importi sopra soglia.
- **Tracciabilità debole**: le approvazioni via email/firma cartacea non sono centralizzate; ricostruire lo stato di una fattura o un audit trail richiede ricerca manuale.
- **Controlli non sistematici**: il three-way match e le soglie di approvazione dipendono dall'attenzione dell'operatore, aumentando il rischio di errori, pagamenti non dovuti o, in casi estremi, frodi.
- **Rischio di duplicazione**: in assenza di controllo automatico, la stessa fattura può essere registrata o pagata due volte (es. da canali diversi, cartaceo ed email).
- **Rischio di smarrimento**: documenti cartacei o email disperse tra caselle personali aumentano il rischio di perdita o ritardo.
- **Scarsa visibilità gestionale**: mancanza di reportistica aggregata su fatture in attesa, tempi medi di approvazione, importi impegnati.
- **Carico di lavoro manuale elevato**: attività a basso valore aggiunto (protocollazione, inserimento dati, solleciti) assorbono tempo che potrebbe essere dedicato a controllo e analisi.
- **Segregazione dei compiti non formalizzata**: in assenza di un sistema che imponga i passaggi (verifica → approvazione → registrazione), è possibile che una stessa persona esegua più fasi senza controllo incrociato.

### Processo TO-BE digitalizzato (proposta)

*Anche il TO-BE è generico e non vincolato a uno specifico prodotto/fornitore, come richiesto dallo scope.*

**Attori** (invariati nella sostanza rispetto all'AS-IS, con ruoli più formalizzati):

- Sistema di acquisizione digitale (punto di ingresso automatizzato, non un attore umano).
- Ufficio Ricezione/Segreteria — supervisione delle eccezioni di acquisizione.
- Responsabile di Budget (Approvatore di linea) — approvazione via workflow digitale.
- Ufficio Contabilità/AP — controllo, registrazione assistita, gestione eccezioni.
- Direzione Finanziaria/CFO — approvazione per soglie elevate, via workflow.

**Fasi e punti di automazione**

1. **Ricezione digitale**
   - Le fatture arrivano tramite canale digitale unico (es. casella dedicata, portale, o canale di fatturazione elettronica se applicabile — da verificare, vedi Open Questions).
   - Automazione: acquisizione automatica e protocollazione digitale univoca (numero, data, fornitore), eliminando il registro manuale.
   - Controllo: verifica automatica di duplicati in ingresso (stesso numero fattura/fornitore).

2. **Verifica assistita**
   - Automazione: matching automatico (three-way match) tra fattura, ordine di acquisto ed evidenza di ricezione, ove questi dati siano disponibili in forma strutturata nel sistema.
   - Le eccezioni (mancata corrispondenza) sono segnalate automaticamente all'operatore competente per gestione manuale mirata.
   - Controllo: regole di conformità configurabili (es. tolleranza di scostamento importo) applicate sistematicamente.

3. **Approvazione tramite workflow**
   - Automazione: instradamento automatico della fattura all'approvatore corretto in base alla matrice di soglie/deleghe configurata nel sistema.
   - Notifiche e solleciti automatici; possibilità di approvazione anche da mobile.
   - Controllo: ogni passaggio di approvazione è tracciato (chi, quando, esito), con log immutabile ai fini di audit; enforcement automatico della segregazione dei compiti (chi verifica non può anche approvare sopra una certa soglia, salvo deroghe configurate).

4. **Registrazione integrata**
   - Automazione: al termine dell'approvazione, i dati fattura confluiscono automaticamente nel sistema contabile, riducendo l'inserimento manuale e il rischio di errore di trascrizione.
   - Controllo: blocco automatico della doppia registrazione.

5. **Pagamento pianificato e tracciato**
   - Automazione: proposta automatica di pagamento in base a scadenze, con dashboard di visibilità su fatture in attesa, approvate, scadute.
   - Archiviazione digitale automatica del ciclo documentale completo (fattura, ordine, evidenze, approvazioni) per finalità di audit e conservazione.
   - Controllo: riconciliazione automatica tra fatture pagate e registrazioni contabili.

### Confronto AS-IS vs TO-BE

| Dimensione | AS-IS (ipotizzato) | TO-BE (proposto) | Beneficio atteso (Estimate) |
|---|---|---|---|
| Ricezione | Manuale, multicanale non tracciato | Canale digitale unico, protocollazione automatica | Riduzione rischio smarrimento; tempi di presa in carico più brevi |
| Verifica | Three-way match manuale, non sistematico | Matching automatico con gestione eccezioni | Minore incidenza di errori; effort manuale concentrato sui casi critici |
| Approvazione | Email/firma cartacea, tracciabilità debole | Workflow digitale con soglie e log di audit | Tempi di ciclo più brevi e prevedibili; audit trail completo |
| Registrazione | Inserimento manuale, rischio duplicati | Integrazione automatica con la contabilità | Riduzione errori di trascrizione e duplicazioni |
| Pagamento | Programmazione manuale, visibilità limitata | Proposta automatica, dashboard aggregata | Migliore gestione della cassa; minor rischio di ritardi/duplicazioni |
| Controllo/audit | Frammentato, difficile da ricostruire | Centralizzato, tracciato end-to-end | Migliore compliance e capacità di audit |
| Segregazione dei compiti | Dipendente dalla disciplina individuale | Applicata (in parte) automaticamente dal sistema | Riduzione del rischio di controllo |

I benefici indicati sono stime qualitative basate sul ragionamento logico applicato allo scenario descritto: non essendo disponibili dati reali (volumi, tempi attuali), non è possibile fornire stime quantitative (es. "% di riduzione tempi") senza introdurre numeri non supportati da evidenza. Qualunque quantificazione richiederebbe una misurazione preliminare del processo AS-IS reale (baseline).

## Alternatives Considered

Poiché il task esclude la selezione di uno specifico prodotto/fornitore, le alternative considerate riguardano l'**approccio** di digitalizzazione, non soluzioni tecnologiche puntuali:

1. **Digitalizzazione end-to-end (proposta scelta)**: copre ricezione, verifica, approvazione, registrazione e pagamento con automazione e controlli in ogni fase.
   - Benefici: massimizza i benefici attesi (tracciabilità, riduzione errori, tempi); coerente con una visione di processo integrata.
   - Svantaggi: maggiore complessità di introduzione, maggiore impatto organizzativo, richiede change management più esteso.
   - Fattibilità: dipende da sistemi/risorse non noti (vedi Open Questions); presumibilmente realizzabile in modo incrementale (roadmap a fasi, vedi Recommendations).

2. **Digitalizzazione parziale — solo workflow di approvazione**: automatizzare unicamente la fase di approvazione (instradamento, soglie, log), lasciando ricezione/verifica/registrazione sostanzialmente manuali.
   - Benefici: implementazione più semplice e rapida, minor impatto organizzativo iniziale.
   - Svantaggi: benefici più limitati; permangono criticità su duplicati, tracciabilità della ricezione e reportistica end-to-end.
   - Fattibilità: alta, ma con beneficio complessivo minore.

3. **Esternalizzazione del ciclo passivo (outsourcing dell'ufficio AP)**: affidare a terzi la gestione operativa del ciclo fatture.
   - Benefici: riduzione del carico interno, possibile accesso a strumenti già digitalizzati del fornitore di servizio.
   - Svantaggi: perdita di controllo diretto sul processo, dipendenza da terzi, implicazioni contrattuali/legali (fuori scope di questo documento, che esclude azioni operative e decisioni legali/finanziarie), costi ricorrenti.
   - Fattibilità: non valutabile senza dati reali; comporta decisioni ad alto rischio (impegni contrattuali) che, per policy di governance, richiedono comunque approvazione umana esplicita e non sono trattate nel dettaglio in questo documento.

**Motivo della scelta**: l'alternativa 1 (digitalizzazione end-to-end) è proposta come riferimento concettuale perché massimizza la coerenza tra le fasi del processo e i benefici attesi complessivi (in linea con lo scope del task, che richiede un TO-BE "digitalizzato" e non una singola automazione puntuale); l'alternativa 2 viene comunque indicata come possibile prima fase di una roadmap incrementale (vedi Recommendations), per ridurre il rischio di un'implementazione "big bang".

## Findings

- **F1 (Interpretation)**: lo scenario AS-IS ipotizzato presenta le criticità tipiche di un processo di approvazione fatture non digitalizzato: bassa tracciabilità, controlli non sistematici, rischio di errore/duplicazione, tempi di ciclo variabili.
- **F2 (Interpretation)**: le criticità principali si concentrano nelle fasi di "verifica" e "approvazione", dove il processo dipende maggiormente dall'intervento manuale e dalla disponibilità di persone specifiche.
- **F3 (Recommendation-oriented finding)**: un TO-BE digitalizzato basato su workflow strutturato, matching automatico e tracciabilità end-to-end è coerente con l'AS-IS descritto e ne indirizza le criticità principali senza richiedere, a questo stadio, la selezione di una soluzione tecnologica specifica.
- **F4 (Estimate)**: i benefici attesi sono qualitativamente significativi (tempi, controllo, tracciabilità) ma non quantificabili in modo affidabile senza una misurazione reale del processo AS-IS effettivo (baseline).
- **F5 (Limitation)**: la validità pratica di questi finding è condizionata dalla verifica delle assunzioni A1–A7; in assenza di tale verifica, il documento ha valore metodologico/di riferimento più che descrittivo di una situazione reale.

## Risks and Limitations

### Rischi della trasformazione (organizzativi, operativi, di controllo)

| # | Rischio | Probabilità | Impatto | Mitigazione proposta | Rischio residuo |
|---|---|---|---|---|---|
| R1 | Resistenza al cambiamento da parte degli approvatori/utenti abituati al processo manuale | Media | Medio | Change management dedicato, formazione, coinvolgimento degli utenti chiave nella progettazione del workflow | Basso-Medio |
| R2 | Interruzione temporanea di continuità operativa durante la transizione (fatture "in volo" tra AS-IS e TO-BE) | Media | Medio | Piano di transizione a fasi, periodo di doppio binario controllato, criteri chiari su quali fatture seguono quale processo | Basso |
| R3 | Indebolimento temporaneo dei controlli durante la migrazione (es. dati anagrafici fornitori non ancora validati nel nuovo sistema) | Media | Alto | Validazione dati preliminare, test in ambiente controllato prima del go-live, controlli manuali di backup nella fase iniziale | Medio |
| R4 | Qualità insufficiente dei dati acquisiti digitalmente (es. errori di riconoscimento se si utilizzano tecnologie di acquisizione automatica del testo) | Media | Medio | Workflow di eccezione per i casi non riconosciuti correttamente, revisione umana a campione | Basso-Medio |
| R5 | Configurazione errata della matrice di soglie/deleghe di approvazione | Bassa-Media | Alto | Validazione formale della matrice con Direzione Finanziaria prima dell'attivazione; test end-to-end | Basso |
| R6 | Dipendenza da un unico sistema/fornitore per un processo critico (rischio di continuità operativa in caso di indisponibilità del sistema) | Bassa | Alto | Piano di continuità operativa, procedure manuali di emergenza documentate | Medio |
| R7 | Mancata conformità a eventuali obblighi normativi non noti (es. fatturazione elettronica, conservazione digitale) | Non valutabile (dato mancante) | Potenzialmente Alto | Verifica preliminare degli obblighi normativi applicabili prima della progettazione di dettaglio (vedi Open Questions) | Non valutabile allo stato attuale |
| R8 | Sovra/sotto-dimensionamento della soluzione rispetto ai volumi reali (non noti) | Non valutabile (dato mancante) | Medio | Raccolta di dati reali su volumi prima di definire requisiti di dettaglio | Non valutabile allo stato attuale |

### Limitazioni dell'analisi

- L'intero scenario AS-IS è ipotetico: non è la descrizione di un processo osservato, ma un modello plausibile costruito per rispondere alla richiesta in assenza di dati.
- Non sono stati utilizzati benchmark, ricerche esterne o dati di settore: ogni riferimento a "prassi tipiche" è un'Interpretation basata su ragionamento generale, non una fonte citata.
- Non è possibile fornire stime quantitative di beneficio (es. % riduzione tempi, ROI) senza una baseline reale.
- Il documento non affronta il dettaglio implementativo (scelta di soluzioni tecnologiche, costi, tempi di progetto), coerentemente con lo scope assegnato.
- Il documento non costituisce una decisione di adozione: è un supporto all'Human Owner, che mantiene la piena autorità decisionale.

## Recommendations

Le seguenti raccomandazioni derivano direttamente dall'analisi presentata e indicano condizioni abilitanti e dipendenze di alto livello, senza selezionare soluzioni tecnologiche specifiche:

1. **Raccogliere dati reali di baseline** (volumi di fatture, tempi medi di ciclo attuali, sistemi effettivamente in uso, organigramma reale) prima di procedere a una progettazione di dettaglio del TO-BE. Dipendenza: disponibilità di dati interni; approvazione dell'Human Owner per l'avvio di tale raccolta.
2. **Validare o correggere le assunzioni A1–A7** con gli stakeholder reali del processo (Ufficio AP, Direzione Finanziaria, Approvatori di budget), per trasformare lo scenario ipotetico in una descrizione affidabile del processo reale.
3. **Verificare eventuali obblighi normativi applicabili** (es. fatturazione elettronica, conservazione digitale a norma) prima di definire i requisiti del TO-BE, per assicurare che la soluzione non sia solo efficiente ma anche conforme.
4. **Adottare un approccio incrementale** (roadmap a fasi) piuttosto che una trasformazione "big bang": ad esempio, prima digitalizzare il workflow di approvazione (Alternativa 2), poi estendere a ricezione/verifica automatizzata e infine a registrazione/pagamento integrati, per contenere il rischio organizzativo e di controllo (R1, R2, R3).
5. **Formalizzare la matrice di soglie e deleghe di approvazione** con la Direzione Finanziaria come prerequisito organizzativo, indipendente dalla tecnologia scelta, prima di qualunque automazione del workflow.
6. **Predisporre un piano di change management e formazione** per gli utenti coinvolti, come condizione abilitante per l'adozione effettiva del TO-BE (mitigazione di R1).
7. **Definire un piano di continuità operativa** per le fasi critiche del processo, in modo da non introdurre un punto singolo di fallimento nel passaggio alla digitalizzazione (mitigazione di R6).
8. **Sottoporre l'intero documento a revisione e successiva approvazione dell'Human Owner** prima di qualunque passo operativo, in coerenza con il workflow governato previsto da `CLAUDE.MD` e `GOVERNANCE.MD` (nessuna azione operativa è stata né deve essere eseguita sulla base di questa sola analisi).

Nessuna raccomandazione di questo documento implica la selezione di un prodotto, fornitore o l'esecuzione di un'azione operativa, coerentemente con lo scope del task.

## Confidence Level

**Low-Medium.**

Motivazione:
- Il metodo applicato (framework `structured-analysis`) è stato seguito in modo completo e rigoroso, e la struttura logica AS-IS → criticità → TO-BE → confronto → rischi → raccomandazioni è internamente coerente: questo giustifica un livello non minimo.
- Tuttavia, l'evidenza a disposizione è bassa (un'unica frase di richiesta, priva di dati reali): la quasi totalità dei contenuti sostanziali è costituita da assunzioni non verificate, il che impedisce di assegnare un livello "Medium" pieno o "High".
- Il livello "Low-Medium" riflette quindi: alta affidabilità del metodo e della struttura, bassa affidabilità dei contenuti specifici rispetto a un'eventuale organizzazione reale, in attesa di validazione con dati effettivi.

## Open Questions

1. Qual è il settore, la dimensione e la localizzazione geografica/giurisdizione dell'organizzazione a cui si riferisce la richiesta?
2. Qual è il volume reale di fatture passive trattate (mensile/annuale)?
3. Quali sistemi sono attualmente in uso per contabilità, acquisti e pagamenti (ERP, altri strumenti)? Esiste già un qualche grado di digitalizzazione o workflow?
4. Qual è l'organigramma reale coinvolto nell'approvazione fatture (ruoli, soglie di approvazione, deleghe)?
5. Esistono obblighi normativi specifici applicabili (es. fatturazione elettronica obbligatoria, requisiti di conservazione digitale a norma) nella giurisdizione di riferimento?
6. Il processo riguarda esclusivamente fatture passive (fornitori), oppure la richiesta intende includere anche il ciclo attivo (fatture emesse)?
7. Esistono vincoli di budget, tempistiche o priorità aziendali che dovrebbero orientare la scelta tra un approccio incrementale e uno più ampio?
8. Chi sono gli stakeholder da coinvolgere per validare lo scenario AS-IS reale prima di procedere a una progettazione di dettaglio del TO-BE?

## Acceptance Criteria Verification

| # | Criterio (da `TASK-0004-as-is-to-be.md`) | Verifica |
|---|---|---|
| 1 | Il file è salvato esattamente e unicamente in `workspace/drafts/REQ-0004-analysis.md`; nessun altro file è stato creato o modificato. | Rispettato: questo è l'unico file scritto durante l'esecuzione del task. |
| 2 | Tutte le sezioni richieste dalla skill `structured-analysis` sono presenti e compilate. | Rispettato: tutte le sezioni previste (Metadata, Executive Summary, Objective, Context, Scope, Inputs Used, Evidence Quality, Assumptions, Analysis, Alternatives Considered, Findings, Risks and Limitations, Recommendations, Confidence Level, Open Questions, Acceptance Criteria Verification) sono presenti. |
| 3 | Il processo AS-IS è descritto in modo strutturato (attori, fasi, input/output, controlli) ed è chiaramente identificabile come scenario sintetico/ipotetico. | Rispettato: vedi sezione "Analysis — Processo AS-IS", esplicitamente introdotta come scenario ipotetico. |
| 4 | Le criticità dell'AS-IS sono identificate e motivate. | Rispettato: vedi sezione "Analysis — Criticità/inefficienze dell'AS-IS", etichettate come Interpretation. |
| 5 | Il processo TO-BE digitalizzato è descritto in modo strutturato ed è coerente con l'AS-IS presentato. | Rispettato: vedi sezione "Analysis — Processo TO-BE digitalizzato", costruita fase per fase in corrispondenza dell'AS-IS. |
| 6 | È presente un confronto esplicito tra AS-IS e TO-BE con i benefici attesi. | Rispettato: vedi tabella "Confronto AS-IS vs TO-BE". |
| 7 | Ogni informazione non direttamente derivabile dalla richiesta è etichettata come Assumption, Estimate o Interpretation e non come Fact. | Rispettato: le assunzioni sono in tabella dedicata; criticità e benefici sono etichettati come Interpretation/Estimate nel testo. |
| 8 | Nessun dato è inventato spacciandolo per fatto verificato relativo a un'azienda reale; nessuna fonte esterna è citata o utilizzata. | Rispettato: nessuna fonte esterna citata; lo scenario è dichiarato sintetico in Context, Scope e Analysis. |
| 9 | I rischi materiali della trasformazione sono documentati con probabilità, impatto e mitigazione proposta. | Rispettato: vedi tabella "Rischi della trasformazione". |
| 10 | Le raccomandazioni derivano in modo tracciabile dall'analisi presentata e non includono la selezione di uno specifico prodotto/fornitore. | Rispettato: vedi sezione "Recommendations", nessun prodotto/fornitore citato. |
| 11 | Il livello di confidenza complessivo è dichiarato e motivato. | Rispettato: vedi sezione "Confidence Level" (Low-Medium, motivato). |
| 12 | Le domande aperte e le limitazioni informative sono esplicitate. | Rispettato: vedi sezioni "Open Questions" e "Risks and Limitations — Limitazioni dell'analisi". |
| 13 | Il documento non contiene azioni operative eseguite, richieste di pubblicazione o riferimenti a integrazioni esterne. | Rispettato: nessuna azione operativa eseguita; il documento è esplicitamente qualificato come bozza a supporto decisionale. |
| 14 | Il file `workspace/requests/REQ-0003-as-is-to-be.md` non è stato modificato o rinominato. | Rispettato: il file è stato solo letto, non modificato né rinominato. |
