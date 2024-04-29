src/
|-- app/
|   |-- core/
|   |   |-- authentication/        // Modulo per gestire l'autenticazione
|   |   |   |-- auth.service.ts    // Servizio di autenticazione
|   |   |   |-- auth.guard.ts      // Guardia di autenticazione
|   |   |
|   |   |-- services/              // Servizi condivisi
|   |   |   |-- user.service.ts    // Servizio per gestire i dati degli utenti
|   |   |   |-- post.service.ts    // Servizio per gestire i post di viaggio
|   |   |
|   |-- features/
|   |   |-- profile/               // Modulo per il profilo utente
|   |   |   |-- profile.component.html
|   |   |   |-- profile.component.ts
|   |   |   |-- profile.module.ts
|   |   |
|   |   |-- experiences/           // Modulo per gestire le esperienze di viaggio
|   |   |   |-- experience-list/   // Componente per visualizzare elenco esperienze
|   |   |   |   |-- experience-list.component.html
|   |   |   |   |-- experience-list.component.ts
|   |   |   |
|   |   |   |-- experience-detail/ // Componente per dettagli esperienza
|   |   |   |   |-- experience-detail.component.html
|   |   |   |   |-- experience-detail.component.ts
|   |   |   |
|   |   |   |-- experiences.module.ts
|   |   |
|   |   |-- shared/                // Componenti e servizi condivisi
|   |       |-- header/            // Componente per l'intestazione
|   |       |   |-- header.component.html
|   |       |   |-- header.component.ts
|   |       |
|   |       |-- footer/            // Componente per il piè di pagina
|   |           |-- footer.component.html
|   |           |-- footer.component.ts
|   |
|   |-- app.component.html         // Template principale dell'app
|   |-- app.component.ts           // Componente principale dell'app
|   |-- app.module.ts              // Modulo principale dell'app
|   |-- app-routing.module.ts      // Modulo di routing dell'app
|
|-- assets/
    |-- images/                    // Risorse multimediali (foto, icone, ecc.)
