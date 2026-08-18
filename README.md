# claude-agent-organization

Governed multi-agent system built with Claude Code and GitHub.

## Panoramica

Questo repository contiene un sistema multi-agente controllato e governato che utilizza Claude Code per orchestrare agenti specializzati, task tracking, revisione indipendente e approvazione umana obbligatoria per azioni sensibili.

## Caratteristiche principali

- **Orchestrator**: Coordina il sistema multi-agente, analizza le richieste, gestisce le dipendenze e supervisiona l'avanzamento
- **Agenti specializzati**: Agenti verticali dedicati a domini specifici per task specializzati
- **Flusso di lavoro governato**: Processo obbligatorio con approvazione umana per azioni critiche
- **Task tracking**: Sistema centralizzato di tracciamento dei task e dell'avanzamento
- **Revisione indipendente**: Verifica di completezza, correttezza e conformità della governance
- **Autorità umana**: L'utente umano è l'approvatore finale per azioni sensibili

## Architettura del sistema

```
Human Owner (Request → Decision → Approval)
     ↓
Orchestrator (Analyze → Plan → Delegate)
     ↓
Specialist Agent (Execute → Deliver)
     ↓
Reviewer (Verify → Report)
     ↓
Orchestrator (Consolidate)
     ↓
Human Owner (Final Review & Approval)
```

## Struttura delle directory

```
.claude/
  ├── agents/           # Definizioni degli agenti
  └── skills/           # Skills approvate

config/                 # Configurazioni del progetto

docs/                   # Documentazione

memory/
  ├── organization/     # Memoria organizzativa
  ├── projects/         # Memoria dei progetti
  └── decisions/        # Decisioni registrate

workspace/
  ├── requests/         # Richieste degli utenti
  ├── tasks/            # Task tracciati
  ├── drafts/           # Bozze di lavoro
  ├── reviews/          # Risultati delle revisioni
  ├── approved/         # Deliverable approvati
  ├── rejected/         # Deliverable respinti
  └── logs/             # Log del sistema

schemas/                # Schemi di validazione

scripts/                # Script di automazione

tests/                  # Test del sistema
```

## Regole di governance

### Livelli di rischio

**Basso rischio** (non richiede approvazione umana)
- Brainstorming
- Riassunti
- Bozze interne
- Analisi di dati sintetici

**Rischio medio** (richiede revisione umana)
- Modifiche al codice
- Generazione di documenti
- Modifiche di configurazione
- Creazione di pull request

**Alto rischio** (richiede approvazione esplicita)
- Invio di messaggi
- Pubblicazione di contenuti
- Merge in branch principale
- Deployment
- Eliminazione di dati
- Modifiche a sistemi esterni
- Transazioni finanziarie
- Decisioni legali o contrattuali

### Azioni proibite agli agenti

Gli agenti non devono mai autonomamente:
- Inviare email
- Eseguire pagamenti
- Firmare accordi
- Pubblicare contenuti
- Deployare sistemi di produzione
- Eliminare dati esterni
- Cambiare permessi
- Installare software di terze parti non approvato
- Esporre informazioni confidenziali

## Flusso di lavoro obbligatorio

Per richieste governate, seguire questo flusso:

1. **Human Owner** → Sottomette richiesta
2. **Orchestrator** → Analizza, pianifica, delega
3. **Specialist** → Esegue il task
4. **Reviewer** → Verifica completezza e conformità
5. **Orchestrator** → Consolida i risultati
6. **Human Owner** → Revisione finale e approvazione

**Nessuna fase può essere saltata.**

## Come iniziare

### Prerequisiti

- Node.js
- Claude Code CLI
- Autenticazione GitHub (per pull request)

### Installazione

```bash
npm install
```

### Autenticazione Claude Code

```bash
claude auth status
```

### Eseguire il sistema

Per sottomettere una richiesta governata, utilizza la skill `governed-workflow`:

```bash
claude governed-workflow
```

## Regole operative generali

1. Non inventare dati o informazioni mancanti
2. Distinguere chiaramente fatti, ipotesi, stime, interpretazioni e raccomandazioni
3. Non eseguire azioni irreversibili senza approvazione
4. Non pubblicare o inviare contenuti esternamente
5. Non mergare direttamente nel branch principale
6. Non eliminare file senza autorizzazione esplicita
7. Non esporre secret, credenziali o dati personali
8. Non inserire API key o password nei file del repository
9. Registrare le modifiche significative
10. Richiedere approvazione umana prima di azioni esterne o ad alto rischio

## Approvazione e immutabilità

- I deliverable non possono essere spostati in `workspace/approved/` senza approvazione esplicita dell'utente
- I file in `workspace/approved/` non devono essere modificati direttamente
- Una modifica richiede un nuovo ciclo di bozza, revisione e approvazione

## Regole sui dati

Durante la fase di setup iniziale:
- Utilizzare solo dati sintetici o non confidenziali
- Non processare dati client
- Non processare dati personali
- Non accedere a sistemi business esterni

## Documentazione

- [CLAUDE.md](./CLAUDE.md) - Istruzioni di progetto governate
- [GOVERNANCE.md](./GOVERNANCE.md) - Politica di governance
- [docs/](./docs/) - Documentazione aggiuntiva

## Supporto

Per assistenza con Claude Code:
- `/help` - Aiuto su Claude Code
- GitHub Issues - Segnala problemi su https://github.com/anthropics/claude-code/issues

## Proprietario del progetto

Utente umano: mirkosaracino98@gmail.com

---

*Ultimo aggiornamento: 2026-08-18*
