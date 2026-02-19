import { Pin } from './pin.js';

// Crea la mappa centrata sulla Lombardia
var map = L.map('map').setView([45.5, 9.5], 8); 

// Aggiungi il layer della mappa
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: 'Map tiles by Stamen Design | Data © OpenStreetMap contributors'
}).addTo(map);

// Crea la classe di icone personalizzate (senza shadow)
var LeafIcon = L.Icon.extend({
  options: {
     iconSize: [30, 40],
  iconAnchor: [20, 55],
  popupAnchor: [0, -50]
  }
});

// Crea le icone
var RenzoeLuciaIcon  = new LeafIcon({ iconUrl: 'images/renzoeluciamap-marker.png' });
var RenzoIcon   = new LeafIcon({ iconUrl: 'images/renzomap-marker.png' });
var LuciaIcon = new LeafIcon({ iconUrl: 'images/luciamap-marker.png' });



let array_pin = [

  new Pin("A casa di Don Abbondio - Il parroco viene intimorito", 
    "A casa di Don Abbondio, dopo una notte piena di paura, il parroco esita a celebrare il matrimonio tra Renzo e Lucia perché intimorito dalle minacce di Don Rodrigo. Renzo, sospettoso e deciso, lo affronta e scopre che Don Rodrigo ha vietato le nozze.", 
    45.861534, 9.403804, 
    RenzoIcon, 
    "Paese vicino al lago di Como e a Lecco",
    "Capitolo 1", 
    "references", 
    "#",
    "da solo"
    ),

  new Pin("Pescarenico, alla chiesa del convento", 
    "Lucia racconta a Renzo e ad Agnese di come Don Rodrigo l’abbia molestata; confessa anche la sua paura e il fatto di essersi già rivolta a padre Cristoforo nella chiesa del convento. Insieme parlano di vendetta e delle possibili soluzioni, tra cui chiedere aiuto all’avvocato Azzecca-garbugli a Lecco. A Pescarenico, all’alba, padre Cristoforo esce dalla chiesa del convento, attraversa il paese, osserva la povertà della gente e riflette sul suo dovere di proteggere Lucia.", 
    45.8617748999375, 9.40383838344044, 
    LuciaIcon, 
    "un paese vicino al lago di Como e a Lecco", 
    "references", 
    "#",
    "da sola"
  ), 

  new Pin("A casa di Lucia - Lucia racconta la verità", 
        "A casa di Lucia, Renzo e Lucia sono rimasti soli con Agnese. Lucia rivela tra le lacrime di essere perseguitata dalle attenzioni di don Rodrigo fin dal ritorno dalla filanda. Renzo reagisce con una furia impulsiva, stringendo il manico del coltello e meditando vendetta contro l'oppressore. Le donne cercano di calmarlo, proponendo di chiedere aiuto all’avvocato Azzecca-garbugli a Lecco, di affidarsi alla giustizia o all'aiuto di fra Cristoforo",
        45.862416, 9.404953, 
        RenzoeLuciaIcon, 
        "un paese vicino al lago di Como e a Lecco", 
        "Capitolo 3",
        "references", 
        "#",
        "insieme"
      ),

    new Pin("Nello studio dell'avvocato Azzecca-Garbugli a Lecco", 
        "Renzo si reca dall'avvocato Azzecca-Garbugli, a Lecco, portando in dono quattro capponi, sperando che la legge possa tutelare i poveri. Il dottore, inizialmente, lo scambia per un bravo e gli vanta la sua abilità nel maneggiare le gride a favore dei malfattori. Non appena Renzo pronuncia il nome di don Rodrigo, l'avvocato, terrorizzato dal potente signore, lo caccia via restituendogli i doni.",
        45.85259690097922, 9.398461763256407, 
        RenzoIcon, 
        "Studio dell'avvocato Azzecca-Garbugli a Lecco", 
        "Capitolo 3",
        "references", 
        "#",
        "da solo"
      ),
      
    new Pin("A casa di Lucia - Torna Renzo", 
        "Renzo torna sconfitto alla casa delle donne e racconta con amarezza il fallimento della sua spedizione a Lecco. Lucia chiede l'aiuto diretto di fra Cristoforo, considerato l'unico difensore possibile contro la violenza del signorotto, il quale decide di prendere l'impegno di affrontare direttamente don Rodrigo, sperando di smuovere la sua coscienza. Prima di partire, il frate esorta i giovani alla fede e alla pazienza, assicurando che Dio non li abbandonerà. Intanto, Agnese propone ai giovani il piano del 'matrimonio a sorpresa' per aggirare l'ostilità del curato. Renzo accoglie l'idea con entusiasmo, vedendovi una via d'uscita rapida, mentre Lucia resta molto dubbiosa sulla liceità morale dell'atto.",
        45.862416, 9.404953, 
        RenzoeLuciaIcon, 
        "A casa di Lucia", 
        "Capitolo 4, capitolo 5 e capitolo 6",
        "references", 
        "#",
        "insieme"
      ),


    new Pin("A casa di Tonio", 
      "Renzo si reca dall'amico Tonio e lo trova in una cucina poverissima, intento a cucinare una polenta per la famiglia affamata. Il giovane gli propone di fargli da testimone, offrendosi in cambio di saldare il suo debito di venticinque lire con don Abbondio. Tonio, spinto dal bisogno e dal desiderio di liberarsi del debito, accetta prontamente l'accordo.", 
      45.86098150465995, 9.401598366613605, 
      RenzoIcon, 
      "A casa di Tonio", 
      "Capitolo 6",
      "references", 
      "#",
      "da solo"
    
    ),

   new Pin("All’osteria del villaggio", 
    "All’osteria, Renzo cena con i testimoni sotto l'occhio vigile di tre bravi di don Rodrigo, mandati dal Griso per spiare le sue mosse. Il giovane nota gli sguardi sospetti dei malviventi ma sceglie di ignorarli per non compromettere il piano segreto. Dopo aver pagato il conto, Renzo si allontana nelle tenebre per ricongiungersi con Lucia e Agnese", 
    45.86144982540429, 9.402534572559901, 
    RenzoIcon, 
    "All’osteria del villaggio", 
    "Capitolo 7",
    "references", 
    "#",
    "da solo"
  
  ),

   new Pin("A casa di Lucia - Lucia accetta il 'matrimonio a sorpresa'", 
        "Il gruppo si riunisce e Lucia, vinta dalle insistenze di Renzo e dal terrore delle minacce, accetta di partecipare al tentativo di nozze. Agnese dà le ultime istruzioni per distrarre Perpetua, mentre l'ansia e i brutti presentimenti opprimono l'animo della fanciulla. Il terzetto esce di casa furtivamente per dirigersi verso la canonica.",
        45.862416, 9.404953, 
        RenzoeLuciaIcon, 
        "A casa di Lucia", 
        "Capitolo 7",
        "references", 
        "#",
        "insieme"
      ),

    new Pin("A casa di Don Abbondio - il 'matrimonio a sorpresa'", 
    "Il gruppo si muove silenziosamente e a passo misurato attraverso i campi per non essere visti dagli abitanti del villaggio. Renzo e Lucia rimangono nascosti dietro l'angolo della casa parrocchiale mentre Agnese si avvicina per chiamare Perpetua. Il silenzio della notte è rotto solo dal battito dei loro cuori in attesa del momento cruciale. Renzo e Lucia riescono poi ad entrare nello studio del curato, ma il tentativo di nozze fallisce nel caos totale mentre il curato scappa gridando aiuto e Ambrogio suona la campana a martello. I fuggiaschi sono costretti a una ritirata precipitosa per evitare la folla che accorre", 
    45.861534, 9.403804, 
    RenzoeLuciaIcon, 
    "A casa di Don Abbondio",
    "Capitolo 7 e capitolo 8", 
    "references", 
    "#",
    "insieme"
    ),

  new Pin("Pescarenico - Chiesa di Pescarenico", 
    "I tre profughi trovano rifugio nel convento, accolti da fra Cristoforo che li stava aspettando con ansia. Il frate rivela che il loro paese non è più sicuro e li esorta a partire immediatamente per Monza e Milano. Dopo una preghiera comune, il religioso consegna loro le lettere di raccomandazione e li benedice prima della partenza.", 
    45.8617748999375, 9.40383838344044, 
    RenzoeLuciaIcon, 
    "Chiesa di Pescarenico", 
    "Capitolo 8", 
    "references", 
    "#",
    "insieme"
  ), 

  new Pin("Sulla riva del fiume Adda", 
    "I tre salgono sul battello che li trasporta verso la riva opposta nel silenzio di una notte illuminata dalla luna. Lucia guarda con dolore le cime dei monti e la sua casa che si allontanano, pronunciando nel cuore il suo 'Addio monti'. Il viaggio segna il distacco definitivo dal loro mondo e l'inizio di una lunga odissea di separazione.", 
    45.84088475809621, 9.400585443486586, 
    RenzoeLuciaIcon, 
    "Sulla riva del fiume Adda", 
    "Capitolo 8", 
    "references", 
    "#",
    "insieme"
  ),

  new Pin("Sulla sponda bergamasca del lago", 
    "Sbarcati sulla riva bergamasca, i fuggiaschi proseguono in baroccio fino a Monza, arrivando poco dopo l'alba. Qui avviene la dolorosa separazione: Renzo deve proseguire da solo verso Milano come ordinato dal frate. I tre si scambiano un addio commosso e incerto, promettendo di rivedersi al più presto.", 
    45.840506319028776, 9.397878368217638, 
    RenzoeLuciaIcon, 
    "Sulla riva del fiume Adda", 
    "Capitolo 9", 
    "references", 
    "#",
    "insieme"
  ),

   new Pin("A Monza", 
    "Lucia e Agnese vengono condotte dal padre guardiano al monastero della 'Signora' Gertrude per trovare protezione. La giovane viene presentata a questa monaca singolare che la osserva con curiosità dietro le grate del parlatorio. Gertrude accetta di ospitarle nel quartiere della fattoressa, promettendo la sua valida assistenza.", 
    45.58458072637012, 9.27529928120986, 
    LuciaIcon, 
    "Monza", 
    "Capitolo 9",
    "references", 
    "#",
    "da sola"
  ),
  
  new Pin("Strada verso la città di Milano",
    "Renzo riprende il suo cammino solitario verso la città, tormentato dalla rabbia per don Rodrigo e dal dolore della separazione. Mentre s'avvicina a Milano, resta incantato dalla vista della gran mole del Duomo che svetta solitaria. Dopo aver ricevuto indicazioni da un viandante gentile, entra in città da Porta Orientale, ignaro del tumulto che lo attende.", 
    45.46896, 9.18562,
    RenzoIcon, 
    "Milano", 
    "Capitolo 9",
    "references", 
    "#",
    "da solo"
  ),

   new Pin("Al monastero della “Signora” a Monza", 
    "Lucia resta nel monastero sotto la protezione di Gertrude, la quale si compiace della sua ingenuità e le racconta parte della propria storia. La giovane trova conforto nel lavoro continuo al cucito, ma è turbata dai discorsi strani della monaca. Il narratore interrompe la scena per narrare la tragica infanzia e la monacazione forzata della Signora.", 
    45.58369752208143, 9.280246348215432, 
    LuciaIcon, 
    "Monza", 
    "Capitolo 10",
    "references", 
    "#",
    "da sola"
  ),

   new Pin("Milano",
    "Renzo entra in città e rimane sbalordito nel trovare strisce di farina e pani sparsi per terra senza che nessuno li raccolga. Credendo di essere in un paese di cuccagna, raccoglie i pani e si dirige verso il convento de' cappuccini. Trovando il portinaio che lo invita ad aspettare in chiesa, Renzo si lascia attrarre dal vortice della sommossa popolare.", 
    45.46896, 9.18562,
    RenzoIcon, 
    "Milano", 
    "Capitolo 11", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("Milano - Il forno delle Grucce",
    "Renzo arriva al forno delle grucce mentre la folla inferocita lo sta assaltando e saccheggiando per la carestia. Egli osserva con orrore la distruzione delle madie e dei frulloni, giudicando tale scempio un danno per tutti. Nonostante la sua disapprovazione, la curiosità lo spinge a seguire il flusso della moltitudine verso nuovi luoghi di rivolta.", 
    45.46503121125857, 9.192749596911586,
    RenzoIcon, 
    "Milano", 
    "Capitolo 12", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("Milano - La casa del Vicario",
    "Renzo si caccia nel pieno del tumulto davanti alla casa del vicario, intenzionato a difendere l'innocente dalla furia omicida. Qui si adopera attivamente per favorire l'arrivo della carrozza di Antonio Ferrer, aiutando a far largo tra la calca. Il giovane resta affascinato dalla figura del cancelliere e crede di aver trovato in lui un potente alleato.", 
    45.468622233019694, 9.183213755581257,
    RenzoIcon, 
    "Milano", 
    "Capitolo 13", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("Milano - Osteria della luna piena",
    "Dopo aver assistito al salvataggio del vicario, Renzo si reca all'osteria con uno sconosciuto che si rivelerà essere un poliziotto travestito. Qui beve oltre misura e, nel calore dell'ebbrezza, tiene un discorso sedizioso davanti agli avventori. Rifiuta di dare le sue generalità all'oste, ma finisce per svelare il proprio nome alla spia che lo accompagna.  Renzo viene svegliato all'alba dal notaio criminale e da due sbirri che lo intimano di seguirli al palazzo di giustizia. Ancora stordito dai fumi del vino, il giovane cerca di resistere e chiede l'aiuto dell'oste, ignaro di essere stato denunciato proprio da lui. Il notaio, intimorito dal ronzio della folla in strada, cerca di trattarlo con una finta gentilezza per condurlo via senza chiasso. Renzo viene condotto fuori dall'osteria con i 'manichini' ai polsi, ma accorgendosi della paura del notaio, inizia a studiare una via di fuga. Quando vede gruppi di cittadini che parlano del tumulto, attira la loro attenzione con segnali e grida, dichiarandosi un galantuomo perseguitato. La folla accorre in suo aiuto, mettendo in fuga gli sbirri e permettendogli di dileguarsi", 
    45.468622233019694, 9.183213755581257,
    RenzoIcon, 
    "Milano", 
    "Capitolo 14 e capitolo 15", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("Gorgonzola - Osteria di Gorgonzola",
    "In fuga verso il confine bergamasco, Renzo si ferma in un'osteria a Gorgonzola per rifocillarsi e ascoltare le notizie di Milano. Qui sente un mercante raccontare una versione distorta e calunniosa dei fatti di cui lui è stato protagonista, descrivendolo come un pericoloso capo-rivolta. Terrorizzato dal rischio di essere scoperto, paga in fretta il conto e scappa verso l'Adda.", 
    45.530871807996554, 9.404977324021587,
    RenzoIcon, 
    "Milano", 
    "Capitolo 16", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("fiume Adda - riva del fiume Adda",
    "Dopo una notte passata all'addiaccio nel bosco e una sosta in una capanna, Renzo raggiunge finalmente la riva del fiume. Un pescatore lo tragitta sull'altra sponda, permettendogli di calpestare finalmente la terra di San Marco e gridare 'viva San Marco!'. Il passaggio segna la fine del suo pericolo immediato e l'inizio della sua vita da esule.", 
    45.74596618627097, 9.45409048270693,
    RenzoIcon, 
    "Fiume Adda", 
    "Capitolo 17", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("Territorio Bergamasco",
    "Renzo raggiunge il filatoio del cugino Bortolo, il quale lo accoglie a braccia aperte nonostante la crisi economica generale. Il giovane racconta la sua dolorosa storia e ottiene la promessa di lavoro e protezione sotto il falso nome di Antonio Rivolta. Qui inizia a sperare in un futuro riavvicinamento con Lucia e la madre. Mentre Renzo è al sicuro lavorando nel filatoio, al suo paese la casa viene perquisita e saccheggiata dal podestà con gran treno di birri. L'autorità cerca prove della sua 'prava qualità' tra lo stupore dei vicini che lo sanno un giovane onesto. Don Rodrigo trionfa per la sciagura del rivale, vedendo in essa una spinta a proseguire i suoi infami disegni. Renzo vive la sua vita di rifugiato mentre don Rodrigo, incoraggiato dall'allontanamento di fra Cristoforo a Rimini, decide di agire con più forza. Il signorotto si risolve a chiedere il soccorso di un 'terribile uomo', l'innominato, per rapire finalmente la fanciulla. La distanza geografica separa Renzo dai nuovi gravi pericoli che incombono sulla sua promessa sposa.", 
    45.693344823843915, 9.671539933703617,
    RenzoIcon, 
    "Territorio Bergamasco", 
    "Capitolo 17, capitolo 18 e capitolo 19", 
    "references", 
    "#",
    "da solo"
  ),

  new Pin("Al monastero della “Signora” a Monza - Lucia e Agnese hanno notizie di Renzo", 
    "Lucia e Agnese apprendono con angoscia dalla fattoressa che Renzo è ricercato come uno dei capi del tumulto di Milano. La notizia le getta in un profondo sconforto, finché un messo di fra Cristoforo non le rassicura sull'arrivo di Renzo in salvo nel Bergamasco. Lucia trova un amaro sollievo nella vicinanza della madre e nel lavoro incessante. Agnese decide di tornare al paese per consultare fra Cristoforo, lasciando Lucia momentaneamente sola nel monastero. La giovane deve così affrontare la propria tristezza senza il sostegno materno, restando sotto la protezione di Gertrude. Non sa ancora che a Milano il conte zio sta tramando per far allontanare definitivamente il suo protettore cappuccino. Tradita da Gertrude che cede ai comandi di Egidio, Lucia esce dal monastero con il pretesto di un'ambasciata al padre guardiano. Lungo la strada solitaria viene attirata con l'inganno verso una carrozza e rapita con violenza dai bravi dell'innominato guidati dal Nibbio. Inizia per lei un viaggio di terrore attraverso luoghi selvaggi verso il castellaccio del potente signore.", 
    45.58369752208143, 9.280246348215432, 
    LuciaIcon, 
    "Monza", 
    "Capitolo 18, capitolo 19 e capitolo 20",
    "references", 
    "#",
    "da sola"
  ),

  new Pin("Castello dell'Innominato", 
    "Chiusa in una stanza sotto la custodia di una vecchia serva, Lucia vive una notte di agonia in cui supplica invano di essere liberata. Nel culmine della disperazione, rivolge una fervida preghiera alla Vergine e pronuncia il voto di verginità in cambio della salvezza. Al mattino s'addormenta stremata, mentre il suo atteggiamento umile inizia a scuotere la coscienza del suo feroce rapitore. Lucia riposa ancora nel suo cantuccio mentre l'innominato, tormentato da una crisi interiore e dalle parole della giovane, ordina che non sia disturbata. Il signore osserva dalla finestra il popolo che accorre festoso per l'arrivo del cardinale Federigo Borromeo. Spinto da una forza misteriosa, decide di scendere a parlare con quell'uomo di Dio che rende tutti così allegri. Lucia attende la propria sorte mentre l'innominato, dopo il colloquio liberatore col cardinale, torna al castello deciso a liberarla immediatamente. La giovane viene soccorsa da una donna del villaggio e dal curato don Abbondio, mandati appositamente dal cardinale. L'incubo del rapimento si chiude con la promessa di una nuova protezione e di un ritorno imminente alla madre.", 
    45.58369752208143, 9.280246348215432, 
    LuciaIcon, 
    "Monza", 
    "Capitolo 21, capitolo 22 e capitolo 23",
    "references", 
    "#",
    "da sola"
  ),
];




// Aggiungi i marker
let characterMarkers = [];

array_pin.forEach(element => {
  let html = `<h1>${element.title}</h1><p>${element.description}</p><b>${element.place}</b><br>`; 

  let marker = L.marker([element.lat, element.lon], { icon: element.icon }).bindPopup(html);

  marker.addTo(map);
  
  // assegna ruolo in automatico
  if (element.icon === RenzoIcon) marker.role = "renzo";
  else if (element.icon === LuciaIcon) marker.role = "lucia";
  else if (element.icon ===  RenzoeLuciaIcon) marker.role  = "together";

  characterMarkers.push(marker);
});

var PlaceholderIcon = new L.Icon({
  iconUrl: 'images/map-marker.png',
  iconSize: [30, 40],
  iconAnchor: [20, 55],
  popupAnchor: [0, -50]
});

// --- FILTRO PERSONAGGI ---
characterMarkers.forEach(marker => map.removeLayer(marker));

// EVENTO SELECT
let selectCharacters = document.getElementById("filterCharacters");
if (selectCharacters) {
  selectCharacters.addEventListener("change", function() {
    hideAllMarkers(); // nasconde tutto: luoghi, personaggi, capitoli

    let selected = this.value; // "0", "renzo", "lucia", "insieme", "all"

    if (selected === "0") return; // placeholder: non mostra nulla

    // Array per tenere traccia dei marker da mostrare
    let markersToShow = [];

    characterMarkers.forEach(marker => {
      if (selected === "all" || marker.role === selected) {
        map.addLayer(marker);
        markersToShow.push(marker);
      }
    });

    // Centra la mappa sui marker mostrati
    if (markersToShow.length === 1) {
      // Se c'è un solo marker, zoom diretto su di esso
      let m = markersToShow[0];
      map.setView(m.getLatLng(), 13);
      m.openPopup();
    } else if (markersToShow.length > 1) {
      // Se ci sono più marker, adatta la mappa per includerli tutti
      let group = new L.featureGroup(markersToShow);
      map.fitBounds(group.getBounds().pad(0.3));
    }
  });

  // All'apertura della pagina, tutto nascosto
  characterMarkers.forEach(marker => map.removeLayer(marker));
  selectCharacters.value = "0"; // placeholder di default
}







// === Mappa URL-safe → nome reale del luogo ===


let stores = [
  { 
    name: "Fiume_Adda",
    description: "Il fiume Adda, dove il lago di Como si restringe in un corso d’acqua, fa da sfondo alla fuga di Renzo e Lucia...",
    icon: PlaceholderIcon,
    location: { lat: 45.74725, lng: 9.45515 },
    url: "places.html",
    marker: null
  },
  { 
    name: "Lago_di_Como",
    description: "Il lago di Como apre il romanzo con il suo suggestivo ramo meridionale, incorniciato da due catene montuose e punteggiato da insenature e promontori...",
    icon: PlaceholderIcon,
    location: { lat: 46.01604, lng: 9.25716 },
    url: "places.html",
    marker: null
  },
  { 
    name: "Lecco",
    description: "Lecco sorge sulla riva del lago di Como, ai piedi delle montagne, arrivando talvolta a lambire l’acqua quando il livello del lago si alza...",
    icon: PlaceholderIcon,
    location: {lat: 45.85340054949823, lng: 9.394347094010552 },
    url: "places.html",
    marker: null
  },
  { 
    name: "Milano",
    description: "Milano, cuore della Lombardia sotto il dominio spagnolo, rappresenta nel romanzo un mondo di autorità, privilegi e corruzione...",
    icon: PlaceholderIcon,
    location: { lat: 45.46896, lng: 9.18562 },
    url: "places.html",
    marker: null
  },
  { 
    name: "Monza",
    description: "A Monza, Lucia e Agnese trovano rifugio dopo essere fuggite dalle minacce di Don Rodrigo...",
    icon: PlaceholderIcon,
    location: { lat: 45.58457, lng: 9.27529 },
    url: "places.html",
    marker: null
  },
  { 
    name: "Pescarenico",
    description: "Lucia arriva per prima al convento di padre Cristoforo a Pescarenico, un piccolo paese sulla sponda sinistra del fiume Adda, vicino al ponte e alla strada che da Lecco porta a Bergamo...",
    icon: PlaceholderIcon,
    location: { lat: 45.84383307849773, lng: 9.398959215722687 },
    url: "places.html",
    marker: null
  },
  {
    name: "Villaggio",
    description: "Il paese, situato sul ramo sud-orientale del lago di Como e vicino a Lecco, nel territorio lecchese, offre un tranquillo ambiente rurale...",
    icon: PlaceholderIcon,
    location: { lat: 45.86154, lng: 9.40307 },
    url: "places.html",
    marker: null
  },
 {
    name: "Gorgonzola",
    description: "Gorgonzola è un paese di passaggio, poco lontano da Milano, dove Renzo arriva nel tardo pomeriggio durante la fuga...",
    icon: PlaceholderIcon,
    location: { lat: 45.530774594490225, lng: 9.405287840299312 },
    url: "places.html",
    marker: null
  },
   {
    name: "Venezia",
    description: "Venezia, città d’acqua e di ponti, è il centro del commercio e della vita mercantile del Nord Italia...",
    icon: PlaceholderIcon,
    location: { lat: 45.4341673840859, lng: 12.338483389584686 },
    url: "places.html",
    marker: null
  },
   {
    name: "Bergamo",
    description: "Bergamo, vista dall’altra riva dell’Adda, emerge tra le colline con la sua gran macchia biancastra e i borghi sparsi...",
    icon: PlaceholderIcon,
    location: { lat: 45.693414756475434, lng: 9.670350344378267 },
    url: "places.html",
    marker: null
  },
   {
    name: "Madrid",
    description: "Madrid, capitale della Spagna, si stende maestosa tra ampi viali e piazze rumorose, dove il ritmo della città e l’autorità del potere si percepiscono in ogni angolo...",
    icon: PlaceholderIcon,
    location: { lat: 40.415361175981296, lng: -3.6898497492430953 } ,
    url: "places.html",
    marker: null
  },
  {
    name: "Castello_dell'_Innominato",
    description: "Il castello, arroccato su un’altura solitaria tra le valli lecchesi, domina il paesaggio circostante con la sua struttura imponente e isolata. La posizione elevata, lontana dai centri abitati, gli conferisce un’aria minacciosa e maestosa, immersa in un ambiente selvaggio e poco accessibile, che accentua la sensazione di mistero e potere che vi aleggia...",
    icon: PlaceholderIcon,
    location: { lat: 45.815446946964066, lng: 9.426555425766292 } ,
    url: "places.html",
    marker: null
  },
  {
    name: "Pavia",
    description: "Pavia, città lombarda attraversata dal Ticino, appare come un centro di studio e di formazione religiosa. È un luogo ordinato e raccolto, sede di collegi e istituzioni ecclesiastiche, dove prevalgono la riflessione, la disciplina e l’impegno intellettuale....",
    icon: PlaceholderIcon,
    location: { lat: 45.18047819301514, lng: 9.161447137775578 } ,
    url: "places.html",
    marker: null
  },
  {
    name: "Palazzotto_del_Cardinal_Federigo_Borromeo",
    description: "Il palazzo del cardinal Federigo, situato nel cuore di Milano, appare maestoso e raccolto, con un portone ampio che conduce a cortili luminosi e stanze ornate con sobria eleganza....",
    icon: PlaceholderIcon,
    location: {lat:45.870129690162116, lng:9.40600154002613} ,
    url: "places.html",
    marker: null
  },
  
];

// funzione per mostrare il nome “bello”


// crea i marker usando i nomi visibili corretti
stores.forEach(s => {
  s.slug = s.name.replace(/\s+/g, "_"); // Lago di Como → Lago_di_Como
  s.marker = L.marker([s.location.lat, s.location.lng], { icon: s.icon })
    .bindPopup(`
      <b>${s.name}</b><br>
      <p>${s.description}</p>
      <a href="places.html">Scopri di più →</a>
    `);
});

// funzione per mostrare il marker dal parametro URL
function showMarkerFromURL() {
  const params = new URLSearchParams(window.location.search);
const placeFromUrl = params.get("place"); // es. "Lago_di_Como"

if (placeFromUrl) {
  const store = stores.find(s => s.name === placeFromUrl); // MATCH ESATTO
  if (store) {
    hideAllMarkers();
    if (!map.hasLayer(store.marker)) map.addLayer(store.marker);
    map.setView([store.location.lat, store.location.lng], 13);
    store.marker.openPopup();
  }
}
}

// chiama la funzione DOPO che tutti i marker sono stati creati
showMarkerFromURL();

// FILTRO DAL SELECT
// --- LUOGHI ---
let selectPlace = document.getElementById("select-place");
if (selectPlace) {
  selectPlace.addEventListener("change", function() {
    hideAllMarkers();
    let selected = this.value.toLowerCase(); // es. "lago_como"
    stores.forEach(s => {
      if (selected === "all" || s.name.toLowerCase() === selected) {
        map.addLayer(s.marker);
        map.setView([s.location.lat, s.location.lng]);
        s.marker.openPopup();
      }
    });
  });
}

// APRI POPUP DAL PARAMETRO URL (opzionale)
const params = new URLSearchParams(window.location.search);
const placeFromUrl = params.get('place');
if (placeFromUrl) {
  const store = stores.find(s => s.slug.toLowerCase() === placeFromUrl.toLowerCase());
  if (store) {
    if (!map.hasLayer(store.marker)) map.addLayer(store.marker);
    map.setView([store.location.lat, store.location.lng], 13);
    store.marker.openPopup();
  }
}




// --- FILTRO CAPITOLI ---

// --- ICONA CAPITOLI ---
var ChapterIconClass = L.Icon.extend({
  options: {
    iconSize: [30, 30],
    iconAnchor: [20, 55],
    popupAnchor: [0, -50]
  }
});

var ChapterIcon = new ChapterIconClass({ iconUrl: 'images/bookmark.png' });

// === CAPITOLI ===

let chapters = [
  { 
    name: "Capitolo 1a", 
    description: "Quel ramo del lago di Como, che volge a mezzogiorno...",
    icon: ChapterIcon, 
    location: { lat: 46.01604, lng: 9.25716 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 1b", 
    description: "alché non è chi, al primo vederlo, purché sia di fronte, come per esempio di su le mura di Milano che guardano a settentrione...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 2", 
    description: "Si racconta che il principe di Condé dormì profondamente la notte avanti la giornata di Rocroi...",
    icon: ChapterIcon, 
    location: { lat: 45.86154, lng: 9.40307 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 3", 
    description: "Lucia entrò nella stanza terrena, mentre Renzo stava angosciosamente informando Agnese...",
    icon: ChapterIcon, 
    location: {lat: 45.85340054949823, lng: 9.394347094010552 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 4", 
    description: "Il sole non era ancor tutto apparso sull’orizzonte, quando il padre Cristoforo uscì dal suo convento di Pescarenico...",
    icon: ChapterIcon, 
    location: { lat: 45.84383307849773, lng: 9.398959215722687 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 5", 
    description: "Il qual padre Cristoforo si fermò ritto sulla soglia, e, appena ebbe data un’occhiata alle donne...",
    icon: ChapterIcon, 
    location: { lat: 45.86492357833069, lng: 9.407822798103059 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 6", 
    description: "«In che posso ubbidirla?» disse don Rodrigo, piantandosi in piedi nel mezzo della sala...",
    icon: ChapterIcon, 
    location: { lat: 46.01604, lng: 9.25716 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 7", 
    description: "Il padre Cristoforo arrivava nell'attitudine d'un buon capitano che, perduta, senza sua colpa...",
    icon: ChapterIcon, 
    location: { lat: 45.86154, lng: 9.40307 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 8", 
    description: "- Carneade! Chi era costui? - ruminava tra sé don Abbondio seduto sul suo seggiolone...",
    icon: ChapterIcon, 
    location: { lat: 45.84383, lng: 9.39918 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 9", 
    description: "L'urtar che fece la barca contro la proda, scosse Lucia, la quale, dopo aver asciugate in segreto le lacrime...",
    icon: ChapterIcon, 
    location: { lat: 45.58457, lng: 9.27529 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 10", 
    description: "Vi son de' momenti in cui l'animo particolarmente de' giovani, è disposto in maniera che...",
    icon: ChapterIcon, 
    location: { lat: 45.58457, lng: 9.27529 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 11", 
    description: "Come un branco di segugi, dopo aver inseguita invano una lepre, tornano mortificati verso il padrone...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 12", 
    description: "Era quello il second'anno di raccolta scarsa...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 13", 
    description: "Lo sventurato vicario stava, in quel momento, facendo un chilo agro e stentato d'un desinare biascicato senza appetito...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
   { 
    name: "Capitolo 14", 
    description: "La folla rimasta indietro cominciò a sbandarsi, a diramarsi a destra e a sinistra, per questa e per quella strada...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
   { 
    name: "Capitolo 15", 
    description: "L'oste, vedendo che il gioco andava in lungo, s'era accostato a Renzo; e pregando, con buona grazia...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
   { 
    name: "Capitolo 16a", 
    description: "«Scappa, scappa, galantuomo: lì c'è un convento, ecco là una chiesa; di qui, di là,» si grida a Renzo da ogni parte...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 }, 
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 16b", 
    description: "«Gorgonzola, volete dire,» rispose la vecchia. «Gorgonzola!» ripeté Renzo, quasi per mettersi meglio in mente la parola...",
    icon: ChapterIcon, 
    location: { lat: 45.530774594490225, lng: 9.405287840299312 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
    { 
    name: "Capitolo 17a", 
    description: "Basta spesso una voglia, per non lasciar ben avere un uomo; pensate poi due alla volta, l'una in guerra coll'altra...",
    icon: ChapterIcon, 
    location: { lat: 45.74725, lng: 9.45515 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
   { 
    name: "Capitolo 17b", 
    description: "La città ha comprate duemila some di grano da un mercante che sta a Venezia...",
    icon: ChapterIcon, 
    location: { lat: 45.4341673840859, lng: 12.338483389584686 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
   { 
    name: "Capitolo 17c", 
    description: "Alzando poi lo sguardo, vide il vasto piano dell'altra riva, sparso di paesi, e al di là i colli, e sur uno di quelli una gran macchia biancastra, che gli parve dover essere una città, Bergamo sicuramente....",
    icon: ChapterIcon, 
    location: { lat: 45.693414756475434, lng: 9.670350344378267 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
   { 
    name: "Capitolo 18a", 
    description: "Quello stesso giorno, 13 di novembre, arriva un espresso al signor podestà di Lecco...",
    icon: ChapterIcon, 
    location: {lat: 45.85340054949823, lng: 9.394347094010552 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 18b", 
    description: "Appena partito Attilio, arrivò il Griso da Monza sano e salvo, e riferì al suo padrone ciò che aveva potuto raccogliere: che Lucia era ricoverata nel tal monastero...",
    icon: ChapterIcon, 
    location: { lat: 45.58457, lng: 9.27529 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 18c", 
    description: "Poco dopo il baleno, scoppiò il tuono; vale a dire che, una bella mattina, si sentì che il padre Cristoforo era partito dal convento di Pescarenico...",
    icon: ChapterIcon, 
    location: { lat: 45.84383, lng: 9.39918 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 18d", 
    description: "Quello del conte zio, che, da gran tempo, era sempre andato crescendo a lentissimi gradi, ultimamente aveva fatto in una volta un passo, come si dice, di gigante, per un'occasione straordinaria, un viaggio a Madrid, con una missione alla corte; dove, che accoglienza gli fosse fatta, bisognava sentirlo raccontar da lui...",
    icon: ChapterIcon, 
    location: { lat: 40.415361175981296, lng: -3.6898497492430953 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 18e", 
    description: "A poco a poco, si viene a sapere che Renzo è scappato dalla giustizia, nel bel mezzo di Milano...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 19a", 
    description: "Ma la fama di questo nostro era già da gran tempo diffusa in ogni parte del milanese: per tutto, la sua vita era un soggetto di racconti popolari; e il suo nome significava qualcosa d'irresistibile...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 19b", 
    description: "Mi dica: nel loro convento di Pescarenico c'è un padre Cristoforo da ***?» Il provinciale fece cenno di sì...",
    icon: ChapterIcon, 
    location: { lat: 45.84383, lng: 9.39918 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 20", 
    description: "E, con aria risoluta, gli comandò che montasse subito a cavallo, andasse diritto a Monza, informasse Egidio dell'impegno contratto, e richiedesse il suo aiuto per adempirlo...",
    icon: ChapterIcon, 
    location: { lat: 45.58457, lng: 9.27529 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 21", 
    description: "Intanto l'innominato, ritto sulla porta del castello, guardava in giù; e vedeva la bussola venir passo passo, come prima la carrozza, e avanti, a una distanza che cresceva ogni momento, salir di corsa il Nibbio...",
    icon: ChapterIcon, 
    location: { lat: 45.815446946964066, lng: 9.426555425766292 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 22a", 
    description: "Entrò poco dopo nel collegio fondato da questo in Pavia, e che porta ancora il nome del loro casato; e lì, applicandosi assiduamente alle occupazioni che trovò prescritte, due altre ne assunse di sua volontà...",
    icon: ChapterIcon, 
    location: { lat: 45.18047819301514, lng: 9.161447137775578 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 22b", 
    description: "Poco dopo, il bravo venne a riferire che, il giorno avanti, il cardinal Federigo Borromeo, acivescovo di Milano, era arrivato a ***...",
    icon: ChapterIcon, 
    location: { lat: 45.46896, lng: 9.18562 },
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  { 
    name: "Capitolo 23", 
    description: "Il cardinal Federigo, intanto che aspettava l'ora d'andar in chiesa a celebrar gli ufizi divini, stava studiando, com'era solito di fare in tutti i ritagli di tempo...",
    icon: ChapterIcon, 
    location: {lat:45.870129690162116, lng:9.40600154002613},
    url: "https://projects.dharc.unibo.it/leggomanzoni/confronta",
    marker: null 
  },
  
];

// crea marker senza aggiungerli subito alla mappa
chapters.forEach(ch => {
  ch.marker = L.marker([ch.location.lat, ch.location.lng], { icon: ch.icon });
  ch.marker.bindPopup(`
  <b>${ch.name}</b><br>
  <p>${ch.description}</p>
  <a href="${ch.url}" target="_blank">Leggi il capitolo intero sul sito Leggo Manzoni →</a>
`);
  // NON aggiungere .addTo(map) qui
});

// --- FILTRO CAPITOLI ---

// --- FILTRO CAPITOLI ---
let selectChapter = document.getElementById("filterChapter");

if (selectChapter) {

  // Nascondi tutti i marker dei capitoli all'avvio
  chapters.forEach(c => map.removeLayer(c.marker));

  // Imposta placeholder di default
  selectChapter.value = "0";

  selectChapter.addEventListener("change", function() {
    let selected = this.value; // "0", "all", "1", ...

    // Nascondi tutti i marker di tutte le categorie
    stores.forEach(s => map.removeLayer(s.marker));
    characterMarkers.forEach(m => map.removeLayer(m));
    chapters.forEach(c => map.removeLayer(c.marker));

    if (selected === "0") return; // placeholder: non mostra nulla

    if (selected === "all") {
      // mostra tutti i capitoli
      chapters.forEach(c => map.addLayer(c.marker));
      return;
    }

    // Mostra solo il capitolo selezionato
    let cap = chapters.find(c => c.name.split(" ")[1] === selected);
    if (cap) {
      map.addLayer(cap.marker);
      map.setView([cap.location.lat, cap.location.lng], 13);
      cap.marker.openPopup();
    }
  });
}


// Non aggiungere alcun capitolo di default alla mappa
// Rimuovere questa riga se c'è: map.addLayer(chapters[0].marker);




// --- FILTRI E INIZIALIZZAZIONE ---
function hideAllMarkers() {
  stores.forEach(s => map.removeLayer(s.marker));
  characterMarkers.forEach(m => map.removeLayer(m));
  chapters.forEach(c => map.removeLayer(c.marker));
}

// --- INIZIALIZZAZIONE ---
// mostra tutti i luoghi di default
hideAllMarkers();
stores.forEach(s => map.addLayer(s.marker));
selectPlace.value = "all";
selectCharacters.value = "0";
selectChapter.value = "0"; // mostra primo capitolo





 // --- NASCONDI DI DEFAULT CHARACTERS & CHAPTERS ---
characterMarkers.forEach(marker => {
  if (map.hasLayer(marker)) map.removeLayer(marker);
});

chapters.forEach(ch => {
  if (map.hasLayer(ch.marker)) map.removeLayer(ch.marker);
});

// Imposta select default corretti
document.getElementById("select-place").value = "all";
document.getElementById("filterCharacters").value = "0";
document.getElementById("filterChapter").value = "0";



function hideAllGroups() {
  // nascondi tutti i places
  stores.forEach(store => {
    if (map.hasLayer(store.marker)) map.removeLayer(store.marker);
  });

  // nascondi tutti i characters
  characterMarkers.forEach(marker => {
    if (map.hasLayer(marker)) map.removeLayer(marker);
  });

  // nascondi tutti i chapters
  chapters.forEach(ch => {
    if (map.hasLayer(ch.marker)) map.removeLayer(ch.marker);
  });
}




// ---COLLEGAMENTO TESTO-MAPPA --
// Collega testo e mappa
document.querySelectorAll('.place').forEach(span => {
  span.addEventListener('click', function() {
    const placeName = this.dataset.place;
    const store = stores.find(s => s.name === placeName);
    if (store) {
      map.setView([store.location.lat, store.location.lng], 14);
      store.marker.openPopup();
    }
  });
});

// === Leggi query string ===
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const placeParam = getQueryParam('place'); // es. "Lago_di_Como"

const initialStore = stores.find(
  s => s.slug.toLowerCase() === placeParam?.toLowerCase()
);


// --- Mostra solo il luogo selezionato ---
if (initialStore) {
  hideAllMarkers();
  map.addLayer(initialStore.marker);
  map.setView(
    [initialStore.location.lat, initialStore.location.lng],
    13
  );
  initialStore.marker.openPopup();
}

// --- Aggiorna select ---
selectPlace = document.querySelector('#select-place');
if (selectPlace) {
  selectPlace.addEventListener('change', function() {
    hideAllGroups(); // nasconde tutto

    let selected = this.value;

    stores.forEach(store => {
      if (selected === "all" || store.name === selected) {
        map.addLayer(store.marker);
        if (store.name === selected && selected !== "all") {
          map.setView([store.location.lat, store.location.lng], 13);
          store.marker.openPopup();
        }
      }
    });
  });
}



var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
 
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
 
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
 
$(document).ready(function() {
 
  var place = getUrlParameter('place');
  var filterChapter = getUrlParameter('filterChapter');
  var filterCharacters = getUrlParameter('filterCharacters');
 
  if(place.length>0){
    $("#select-place").val(place);
  }
  if(filterChapter.length>0){
    $("#filterChapter").val(filterChapter);
  }
  if(filterCharacters.length>0){
    $("#filterCharacters").val(filterCharacters);
  }
 
});
 


  //timeline legend

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle-legend');
  const legend = document.getElementById('map-legend');

  if (btn && legend) {
    btn.addEventListener('click', () => {
      legend.classList.toggle('hidden');
    });
  }
});





