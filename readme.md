# Introduzione

## Cosa è Vue.JS
Vue.JS è un framework JavaScript che facilita la scrittura del codice e lo sviluppo di interfacce utente.

## Peculiarità di Vue.JS
- Rendering dichiarativo: Vue.JS estende l'HTML standard con una sintassi di modello che ci consente di descrivere in modo dichiarativo l'output HTML basato sullo stato JavaScript.
        Cosa vuol dire? Penso significhi che, come abbiamo visto con Gianluca questa mattina, è possibile lavorare sul file HTML senza effettivamente metterci mano.
        
- Reattività: Vue traccia automaticamente i cambiamenti dello stato JavaScript e aggiorna efficientemente il DOM quando avvengono modifiche. 
        Cosa vuol dire? Il contenuto del DOM cambia dinamicamente quando a cambiare è JS. Anche in questo caso, non è necessario che il web developer lavori sul file HTML.

## Potenzialià di Vue.JS
Vue.JS è un framework potente e flessibile che consente allo sviluppatore web di approcciarsi a molti contesti lavorativi (lato Front-End).
Con Vue.JS è possibile gestire sia l'HTML, sia il CSS e sia JavaScript con i ''Single-File Component'', semplificando il lavoro dello sviluppatore web.

## Options API VS Composition API
Gianluca ci ha suggerito di lavorare con gli Options API, più accessibili in un primo momento, quello dedicato allo studio. Se la nostra carriera di sviluppatori web dovesse proseguire con successo e dovessimo interfacciarci con VUE, sarà nostra premura studiare e focalizzarci sulle Composition API.

Sul sito di Vue.JS la guida ufficiale dà spunti interessanti su quale dei due approcci seguire: non ho né le competenze tecniche né tantomeno l'esperienza che mi consente di propendere per l'uno o per l'altro, inoltre mi fido di Gianluca.

# Fine Introduzione

# Template Syntax

## Importante
Vue.JS utilizza una sintassi simile all'HTML per definire come devono apparire i componenti sullo schermo. Questa sintassi permette di collegare facilmente parti dell'interfaccia grafica ai dati che cambiano nel componente. Vue converte questi template in codice JavaScript molto efficiente. Vue.JS riesce a rilevare quando i dati cambiano e a modificare solo le parti necessarie dello schermo, evitando operazioni inutili.

- Se ho ben capito, dunque, per il browser è più semlice, nonché più rapido, interpretare il codice JavaScript anziché ''limitarsi'' a scaricare e renderizzare il contenuto HTML e CSS. Se così è, è molto interessante.

## Direttive
Il compito di una direttiva è applicare reattivamente gli aggiornamenti al DOM quando il valore della sua espressione cambia.
Questa mattina, a lezione, abbiamo visto alcuni casi di utilizzo. 

## Cosa sono le ''direttive'', secondo Chat GPT?
Le direttive sono speciali attributi con il prefisso "v-" che forniscono funzionalità aggiuntive ai tag HTML. 
Ad esempio, la direttiva "v-if" viene utilizzata per condizionalmente renderizzare un elemento basato su una espressione booleana, mentre la direttiva "v-for" viene utilizzata per iterare su un array e renderizzare dinamicamente elementi basati sugli elementi dell'array. Vue.js fornisce diverse direttive integrate come "v-bind", "v-on", "v-model" e molte altre, oltre alla possibilità di definire direttive personalizzate per adattare il comportamento di Vue alle esigenze specifiche dell'applicazione. 

Ringraziamo il nostro amato Chat GPT per la chiarezza espositiva e la concisione.

# Riflessione personale
Come già accennato in precedenza, sarebbe sbagliato avventurarsi in considerazioni personali dopo mezza giornata di utilizzo di Vue.JS.
Tuttavia ci sono alcune considerazioni che posso ritenere già valide:

1. Il codice non cambia. A cambiare è il modo in cui lo scriviamo.
2. Mi sento a mio ''agio'' con la sintassi di Vue.JS, che tra l'altro è molto più rapida da scrivere (''getElementById'', docet).
3. È tutto ''concatenato'': lavorando con Vue.JS, lo sviluppatore si concentra su quello e il contenuto della pagina cambia dinamicamente, cosa che velocizza il lavoro e lo rende dinamico, reattivo.
4. Rendere Vue.JS open-source aumenta la sicurezza del codice, garantisce maggiori diritti agli utenti e lo slega da dinamiche di nature economico-imprenditoriale.
