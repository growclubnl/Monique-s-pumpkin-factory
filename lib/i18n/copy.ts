import type { FaqItem, Locale } from "./types";

export type UiCopy = {
  topNotice: string;
  contact: string;
  route: string;
  languageFlagsAria: string;
  heroTitle: string;
  heroLine1: string;
  heroLine2: string;
  heroPumpkinAlt: string;
  heroCountdownTitle: string;
  heroCountdownSub: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  heroSaveCalendar: string;
  openingCalendarSummary: string;
  openingCalendarDescription: string;
  howItWorksTitle: string;
  howItWorksP1: string;
  howItWorksP2: string;
  photoTopAlt: string;
  photoBottomAlt: string;
  faqTitle: string;
  recipesTitle: string;
  recipesIntroStart: string;
  recipesIntroEnd: string;
  recipesShowWord: string;
  instagramTitle: string;
  instagramGridAria: string;
  footerLine1: string;
  footerLine2: string;
  recipe: {
    servings: string;
    time: string;
    ingredients: string;
    method: string;
    showRecipe: string;
    hideRecipe: string;
    downloadRecipe: string;
    busy: string;
    downloadHint: string;
    htmlServings: string;
    htmlTime: string;
    htmlIngredients: string;
    htmlMethod: string;
    htmlFooter: string;
  };
};

export const UI: Record<Locale, UiCopy> = {
  nl: {
    topNotice: "Wij zijn vandaag geopend tot 20:00",
    contact: "CONTACT",
    route: "ROUTE",
    languageFlagsAria: "Kies een taal",
    heroTitle: "Wij zijn open!",
    heroLine1: "Maandag tot en met zondag",
    heroLine2: "van 08:00 tot 20:00",
    heroPumpkinAlt: "Vrolijke pompoen",
    heroCountdownTitle: "Nog even geduld!",
    heroCountdownSub: "Maandag 14 september 2026 om 08:00 gaan we open.",
    countdownDays: "Dagen",
    countdownHours: "Uren",
    countdownMinutes: "Minuten",
    countdownSeconds: "Seconden",
    heroSaveCalendar: "IN JE AGENDA",
    openingCalendarSummary: "Opening Monique’s Pumpkin Factory",
    openingCalendarDescription:
      "We gaan open. Kom langs tussen de pompoenen — contant of Tikkie. Openingstijden deze dag 08:00–20:00.",
    howItWorksTitle: "Zo werkt het",
    howItWorksP1:
      "Bij de Pumpkin Factory houden we het graag eenvoudig en gemoedelijk. Iedereen is welkom om rustig rond te lopen tussen de pompoenen, te kijken, te vergelijken en de mooiste exemplaren uit te zoeken. Of je nu komt voor decoratie, om te koken of gewoon voor de gezelligheid, neem mee wat je aanspreekt en geniet van de sfeer van het seizoen.",
    howItWorksP2:
      "Betalen kan contant of met een Tikkie, wat voor jou het makkelijkst is. Alles wat je ziet is door onszelf gekweekt, met aandacht, plezier en een flinke dosis liefde voor het vak. Elke pompoen is anders, met zijn eigen vorm, kleur en karakter. En zoals altijd bij ons: op is op.",
    photoTopAlt: "Pompoenen op het veld",
    photoBottomAlt: "Bezoekers tussen de pompoenen",
    faqTitle: "Veel gestelde vragen",
    recipesTitle: "Van soep tot taart",
    recipesIntroStart:
      "Pompoen is het meest veelzijdige seizoensingrediënt. Zes Nederlandse klassiekers om je te inspireren — klik op ",
    recipesIntroEnd:
      " om het recept te bekijken of download het direct met logo.",
    recipesShowWord: "TOON RECEPT",
    instagramTitle: "Volg ons op Instagram",
    instagramGridAria: "Bekijk @pumpkin.factory op Instagram",
    footerLine1: "Maandag tot en met zondag",
    footerLine2: "van 09:00 tot 20:00",
    recipe: {
      servings: "PERS",
      time: "TIJD",
      ingredients: "Ingrediënten",
      method: "Bereiding",
      showRecipe: "TOON RECEPT",
      hideRecipe: "VERBERG RECEPT",
      downloadRecipe: "DOWNLOAD RECEPT",
      busy: "BEZIG…",
      downloadHint:
        "HTML-bestand met logo — open en print desgewenst als PDF.",
      htmlServings: "Personen",
      htmlTime: "Bereidingstijd",
      htmlIngredients: "Ingrediënten",
      htmlMethod: "Bereiding",
      htmlFooter:
        "Recept van <strong>Monique&#39;s Pumpkin Factory</strong> — Akervoorderlaan 1, 2161 DP Lisse",
    },
  },
  en: {
    topNotice: "We’re open today until 8:00 PM",
    contact: "CONTACT",
    route: "DIRECTIONS",
    languageFlagsAria: "Choose a language",
    heroTitle: "We’re open!",
    heroLine1: "Monday through Sunday",
    heroLine2: "8:00 AM – 8:00 PM",
    heroPumpkinAlt: "Cheerful pumpkin character",
    heroCountdownTitle: "Opening soon!",
    heroCountdownSub: "We open Monday 14 September 2026 at 8:00 AM.",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    heroSaveCalendar: "ADD TO CALENDAR",
    openingCalendarSummary: "Monique’s Pumpkin Factory — opening day",
    openingCalendarDescription:
      "We’re open! Stroll among the pumpkins. Pay with cash or Tikkie. Hours today 8:00 AM – 8:00 PM.",
    howItWorksTitle: "How it works",
    howItWorksP1:
      "At the Pumpkin Factory we like to keep things simple and friendly. Everyone is welcome to stroll among the pumpkins, compare shapes and colours, and pick their favourites. Whether you’re here for décor, cooking, or just the autumn vibe, take what you like and enjoy the season with us.",
    howItWorksP2:
      "Pay with cash or via Tikkie (a Dutch payment request) — whatever is easiest. Everything you see is grown by us, with care, joy, and real love for the craft. Every pumpkin is unique in shape, colour, and character. And as always with us: when it’s gone, it’s gone.",
    photoTopAlt: "Pumpkins in the field",
    photoBottomAlt: "Visitors among the pumpkins",
    faqTitle: "Frequently asked questions",
    recipesTitle: "From soup to cake",
    recipesIntroStart:
      "Pumpkin is the most versatile seasonal ingredient. Six Dutch-inspired classics to spark your ideas — tap ",
    recipesIntroEnd: " to read it or download it with our logo.",
    recipesShowWord: "SHOW RECIPE",
    instagramTitle: "Follow us on Instagram",
    instagramGridAria: "Open @pumpkin.factory on Instagram",
    footerLine1: "Monday through Sunday",
    footerLine2: "9:00 AM – 8:00 PM",
    recipe: {
      servings: "SERVES",
      time: "TIME",
      ingredients: "Ingredients",
      method: "Method",
      showRecipe: "SHOW RECIPE",
      hideRecipe: "HIDE RECIPE",
      downloadRecipe: "DOWNLOAD RECIPE",
      busy: "WAIT…",
      downloadHint: "HTML file with logo — open and print as PDF if you like.",
      htmlServings: "Serves",
      htmlTime: "Time",
      htmlIngredients: "Ingredients",
      htmlMethod: "Method",
      htmlFooter:
        "Recipe from <strong>Monique&#39;s Pumpkin Factory</strong> — Akervoorderlaan 1, 2161 DP Lisse, Netherlands",
    },
  },
  de: {
    topNotice: "Heute sind wir bis 20:00 Uhr geöffnet",
    contact: "KONTAKT",
    route: "ROUTE",
    languageFlagsAria: "Sprache wählen",
    heroTitle: "Wir haben geöffnet!",
    heroLine1: "Montag bis Sonntag",
    heroLine2: "8:00 – 20:00 Uhr",
    heroPumpkinAlt: "Fröhlicher Kürbis",
    heroCountdownTitle: "Gleich geht’s los!",
    heroCountdownSub: "Am Montag, 14. September 2026, um 8:00 Uhr öffnen wir.",
    countdownDays: "Tage",
    countdownHours: "Stunden",
    countdownMinutes: "Minuten",
    countdownSeconds: "Sekunden",
    heroSaveCalendar: "IM KALENDER SPEICHERN",
    openingCalendarSummary: "Eröffnung Monique’s Pumpkin Factory",
    openingCalendarDescription:
      "Wir öffnen. Schau vorbei zwischen den Kürbissen. Bar oder Tikkie. Heute 8:00–20:00 Uhr.",
    howItWorksTitle: "So funktioniert’s",
    howItWorksP1:
      "Bei der Pumpkin Factory halten wir es gern einfach und herzlich. Alle sind willkommen, zwischen den Kürbissen zu schlendern, zu vergleichen und ihre Favoriten zu finden. Ob Deko, Kochen oder einfach Stimmung — nehmt mit, was euch gefällt, und genießt die Saison.",
    howItWorksP2:
      "Zahlen könnt ihr bar oder per Tikkie (holländische Zahlungsanfrage). Alles, was ihr seht, ziehen wir selbst mit Liebe und Sorgfalt hoch. Jeder Kürbis ist ein Unikat. Und wie immer: aus ist aus.",
    photoTopAlt: "Kürbisse auf dem Feld",
    photoBottomAlt: "Besucher zwischen Kürbissen",
    faqTitle: "Häufige Fragen",
    recipesTitle: "Von Suppe bis Kuchen",
    recipesIntroStart:
      "Kürbis ist das vielseitigste Saisongemüse. Sechs holland inspirierte Klassiker — tippe auf ",
    recipesIntroEnd: ", lies das Rezept oder lade es mit Logo herunter.",
    recipesShowWord: "REZEPT ZEIGEN",
    instagramTitle: "Folgt uns auf Instagram",
    instagramGridAria: "@pumpkin.factory auf Instagram öffnen",
    footerLine1: "Montag bis Sonntag",
    footerLine2: "9:00 – 20:00 Uhr",
    recipe: {
      servings: "PERS.",
      time: "ZEIT",
      ingredients: "Zutaten",
      method: "Zubereitung",
      showRecipe: "REZEPT ZEIGEN",
      hideRecipe: "AUSBLENDEN",
      downloadRecipe: "REZEPT LADEN",
      busy: "BITTE WARTEN…",
      downloadHint: "HTML-Datei mit Logo — zum Öffnen und Drucken als PDF.",
      htmlServings: "Portionen",
      htmlTime: "Zubereitungszeit",
      htmlIngredients: "Zutaten",
      htmlMethod: "Zubereitung",
      htmlFooter:
        "Rezept von <strong>Monique&#39;s Pumpkin Factory</strong> — Akervoorderlaan 1, 2161 DP Lisse, Niederlande",
    },
  },
  fr: {
    topNotice: "Ouvert aujourd’hui jusqu’à 20h",
    contact: "CONTACT",
    route: "ITINÉRAIRE",
    languageFlagsAria: "Choisir une langue",
    heroTitle: "Nous sommes ouverts !",
    heroLine1: "Du lundi au dimanche",
    heroLine2: "de 8h à 20h",
    heroPumpkinAlt: "Citrouille joyeuse",
    heroCountdownTitle: "L’ouverture approche !",
    heroCountdownSub: "Ouverture le lundi 14 septembre 2026 à 8h.",
    countdownDays: "Jours",
    countdownHours: "Heures",
    countdownMinutes: "Minutes",
    countdownSeconds: "Secondes",
    heroSaveCalendar: "AJOUTER AU CALENDRIER",
    openingCalendarSummary: "Ouverture Monique’s Pumpkin Factory",
    openingCalendarDescription:
      "Nous ouvrons. Venez voir les courges. Espèces ou Tikkie. Aujourd’hui 8h–20h.",
    howItWorksTitle: "Comment ça marche",
    howItWorksP1:
      "À la Pumpkin Factory, on aime la simplicité et la convivialité. Tout le monde peut se promener entre les courges, comparer et choisir ses préférées. Pour la déco, la cuisine ou juste l’ambiance d’automne — emportez ce qui vous plaît.",
    howItWorksP2:
      "Paiement en espèces ou via Tikkie (demande de paiement néerlandaise). Tout est cultivé chez nous, avec attention et passion. Chaque citrouille est unique. Et chez nous : quand il n’y en a plus, il n’y en a plus.",
    photoTopAlt: "Courges au champ",
    photoBottomAlt: "Visiteurs parmi les citrouilles",
    faqTitle: "Questions fréquentes",
    recipesTitle: "De la soupe au gâteau",
    recipesIntroStart:
      "La courge est l’ingrédient de saison le plus polyvalent. Six classiques inspirés des Pays-Bas — cliquez sur ",
    recipesIntroEnd: " pour lire la recette ou téléchargez-la avec le logo.",
    recipesShowWord: "AFFICHER LA RECETTE",
    instagramTitle: "Suivez-nous sur Instagram",
    instagramGridAria: "Voir @pumpkin.factory sur Instagram",
    footerLine1: "Du lundi au dimanche",
    footerLine2: "de 9h à 20h",
    recipe: {
      servings: "PERS.",
      time: "TEMPS",
      ingredients: "Ingrédients",
      method: "Préparation",
      showRecipe: "AFFICHER LA RECETTE",
      hideRecipe: "MASQUER",
      downloadRecipe: "TÉLÉCHARGER",
      busy: "PATIENTEZ…",
      downloadHint: "Fichier HTML avec logo — ouvrez-le et imprimez en PDF.",
      htmlServings: "Portions",
      htmlTime: "Temps",
      htmlIngredients: "Ingrédients",
      htmlMethod: "Préparation",
      htmlFooter:
        "Recette de <strong>Monique&#39;s Pumpkin Factory</strong> — Akervoorderlaan 1, 2161 DP Lisse, Pays-Bas",
    },
  },
  es: {
    topNotice: "Hoy abrimos hasta las 20:00",
    contact: "CONTACTO",
    route: "CÓMO LLEGAR",
    languageFlagsAria: "Elegir idioma",
    heroTitle: "¡Estamos abiertos!",
    heroLine1: "De lunes a domingo",
    heroLine2: "de 8:00 a 20:00",
    heroPumpkinAlt: "Calabaza sonriente",
    heroCountdownTitle: "¡La apertura está cerca!",
    heroCountdownSub: "Abrimos el lunes 14 de septiembre de 2026 a las 8:00.",
    countdownDays: "Días",
    countdownHours: "Horas",
    countdownMinutes: "Minutos",
    countdownSeconds: "Segundos",
    heroSaveCalendar: "AÑADIR AL CALENDARIO",
    openingCalendarSummary: "Apertura Monique’s Pumpkin Factory",
    openingCalendarDescription:
      "Abrimos. Ven a ver las calabazas. Efectivo o Tikkie. Hoy 8:00–20:00.",
    howItWorksTitle: "Cómo funciona",
    howItWorksP1:
      "En Pumpkin Factory nos gusta mantenerlo sencillo y acogedor. Todos pueden pasear entre las calabazas, comparar y elegir sus favoritas. Ya sea para decorar, cocinar o el ambiente otoñal — llévate lo que te guste.",
    howItWorksP2:
      "Pago en efectivo o con Tikkie (solicitud de pago neerlandesa). Todo lo que ves lo cultivamos nosotros con mimo. Cada calabaza es distinta. Y como siempre: hasta agotar existencias.",
    photoTopAlt: "Calabazas en el campo",
    photoBottomAlt: "Visitantes entre calabazas",
    faqTitle: "Preguntas frecuentes",
    recipesTitle: "De sopa a tarta",
    recipesIntroStart:
      "La calabaza es el ingrediente de temporada más versátil. Seis clásicos con inspiración holandesa — pulsa ",
    recipesIntroEnd: " para leerla o descárgala con el logo.",
    recipesShowWord: "VER RECETA",
    instagramTitle: "Síguenos en Instagram",
    instagramGridAria: "Ver @pumpkin.factory en Instagram",
    footerLine1: "De lunes a domingo",
    footerLine2: "de 9:00 a 20:00",
    recipe: {
      servings: "RAC.",
      time: "TIEMPO",
      ingredients: "Ingredientes",
      method: "Preparación",
      showRecipe: "VER RECETA",
      hideRecipe: "OCULTAR",
      downloadRecipe: "DESCARGAR RECETA",
      busy: "ESPERA…",
      downloadHint: "Archivo HTML con logo — ábrelo e imprime en PDF si quieres.",
      htmlServings: "Raciones",
      htmlTime: "Tiempo",
      htmlIngredients: "Ingredientes",
      htmlMethod: "Preparación",
      htmlFooter:
        "Receta de <strong>Monique&#39;s Pumpkin Factory</strong> — Akervoorderlaan 1, 2161 DP Lisse, Países Bajos",
    },
  },
  it: {
    topNotice: "Oggi siamo aperti fino alle 20:00",
    contact: "CONTATTI",
    route: "INDICAZIONI",
    languageFlagsAria: "Scegli la lingua",
    heroTitle: "Siamo aperti!",
    heroLine1: "Dal lunedì alla domenica",
    heroLine2: "dalle 8:00 alle 20:00",
    heroPumpkinAlt: "Zucca allegra",
    heroCountdownTitle: "L’apertura è vicina!",
    heroCountdownSub: "Apriamo lunedì 14 settembre 2026 alle 8:00.",
    countdownDays: "Giorni",
    countdownHours: "Ore",
    countdownMinutes: "Minuti",
    countdownSeconds: "Secondi",
    heroSaveCalendar: "AGGIUNGI AL CALENDARIO",
    openingCalendarSummary: "Apertura Monique’s Pumpkin Factory",
    openingCalendarDescription:
      "Apriamo. Vieni tra le zucche. Contanti o Tikkie. Oggi 8:00–20:00.",
    howItWorksTitle: "Come funziona",
    howItWorksP1:
      "Alla Pumpkin Factory teniamo a un’atmosfera semplice e accogliente. Tutti possono passeggiare tra le zucche, confrontarle e scegliere le preferite. Che sia per decorare, cucinare o solo per l’autunno — porta via ciò che ti piace.",
    howItWorksP2:
      "Pagamento in contanti o con Tikkie (richiesta di pagamento olandese). Tutto ciò che vedi lo coltiviamo noi con cura. Ogni zucca è unica. E da noi: fino a esaurimento scorte.",
    photoTopAlt: "Zucche nel campo",
    photoBottomAlt: "Visitatori tra le zucche",
    faqTitle: "Domande frequenti",
    recipesTitle: "Dalla zuppa alla torta",
    recipesIntroStart:
      "La zucca è l’ingrediente stagionale più versatile. Sei classici ispirati ai Paesi Bassi — clicca ",
    recipesIntroEnd: " per leggerla o scaricala con il logo.",
    recipesShowWord: "MOSTRA RICETTA",
    instagramTitle: "Seguici su Instagram",
    instagramGridAria: "Apri @pumpkin.factory su Instagram",
    footerLine1: "Dal lunedì alla domenica",
    footerLine2: "dalle 9:00 alle 20:00",
    recipe: {
      servings: "PERS.",
      time: "TEMPO",
      ingredients: "Ingredienti",
      method: "Preparazione",
      showRecipe: "MOSTRA RICETTA",
      hideRecipe: "NASCONDI",
      downloadRecipe: "SCARICA RICETTA",
      busy: "ATTENDI…",
      downloadHint: "File HTML con logo — aprilo e stampa in PDF se vuoi.",
      htmlServings: "Persone",
      htmlTime: "Tempo",
      htmlIngredients: "Ingredienti",
      htmlMethod: "Preparazione",
      htmlFooter:
        "Ricetta di <strong>Monique&#39;s Pumpkin Factory</strong> — Akervoorderlaan 1, 2161 DP Lisse, Paesi Bassi",
    },
  },
};

export const FAQ: Record<Locale, { colA: FaqItem[]; colB: FaqItem[] }> = {
  nl: {
    colA: [
      {
        id: "appt",
        q: "Heb ik een afspraak nodig om langs te komen?",
        a: "Nee, je hebt geen afspraak nodig om langs te komen! Wij zijn dagelijks geopend van 08:00 tot 20:00. Loop gerust binnen.",
      },
      {
        id: "park",
        q: "Waar kan ik parkeren?",
        a: "Parkeren kan gewoon voor de deur. Er zijn genoeg plekken voor iedereen en parkeren is gratis!",
      },
      {
        id: "do",
        q: "Wat kan je allemaal doen op de locatie?",
        a: "Op de locatie kan je kiezen uit maar liefst 50 soorten pompoenen! Daarnaast delen wij regelmatig in het weekend pompoengerechten uit. Gezellig!",
      },
      {
        id: "reserve",
        q: "Kan ik pompoenen reserveren?",
        a: "Helaas is het niet mogelijk om pompoenen te reserveren. Kom op tijd langs voor de beste keuze!",
      },
    ],
    colB: [
      {
        id: "when",
        q: "Vanaf welke datum is de Pumpkin Factory open?",
        a: "Monique's Pumpkin Factory is geopend vanaf maandag 14 september 2026 tot half oktober 2026.",
      },
      {
        id: "size",
        q: "Hoe groot is het terrein / hoeveel pompoenen zijn er?",
        a: "De tuin is ongeveer 100 m², maar er is genoeg voor iedereen! Wij vullen dagelijks onze voorraad aan, zodat ook grote of bijzondere pompoenen altijd beschikbaar zijn. Raakt de voorraad toch op? Dan kondigen wij dit ruim van tevoren aan op onze socials.",
      },
      {
        id: "pay",
        q: "Hoe kan ik betalen?",
        a: "Je kunt bij ons betalen met contant geld of via een Tikkie. Makkelijk en snel!",
      },
      {
        id: "edible",
        q: "Zijn alle pompoenen eetbaar?",
        a: "Alle pompoenen zijn eetbaar, maar sommige smaken gewoon niet lekker — dit zijn echte decoratiepompoenen. Dit staat duidelijk aangegeven bij de aankoop. Geen zorgen: ziek worden kan er niet van!",
      },
    ],
  },
  en: {
    colA: [
      {
        id: "appt",
        q: "Do I need an appointment to visit?",
        a: "No appointment needed. We’re open daily from 8:00 AM to 8:00 PM — just come by!",
      },
      {
        id: "park",
        q: "Where can I park?",
        a: "You can park right in front. There’s room for everyone and parking is free.",
      },
      {
        id: "do",
        q: "What can I do on site?",
        a: "Choose from up to 50 kinds of pumpkins! On weekends we often share pumpkin dishes — nice and cosy.",
      },
      {
        id: "reserve",
        q: "Can I reserve pumpkins?",
        a: "Sorry, reservations aren’t possible. Come early for the best pick.",
      },
    ],
    colB: [
      {
        id: "when",
        q: "When are you open?",
        a: "Monique’s Pumpkin Factory opens Monday 14 September 2026 through mid-October 2026.",
      },
      {
        id: "size",
        q: "How big is the site / how many pumpkins are there?",
        a: "The garden is about 100 m² — still plenty of room for everyone. We restock daily so large or unusual pumpkins are often available. If we do sell out, we’ll post well in advance on social media.",
      },
      {
        id: "pay",
        q: "How can I pay?",
        a: "Cash or Tikkie (Dutch payment request) — quick and easy.",
      },
      {
        id: "edible",
        q: "Are all pumpkins edible?",
        a: "All pumpkins are edible, but some aren’t tasty — those are decoration pumpkins, clearly labelled. Don’t worry: they won’t make you ill.",
      },
    ],
  },
  de: {
    colA: [
      {
        id: "appt",
        q: "Brauche ich einen Termin?",
        a: "Nein, ohne Termin. Täglich 8:00–20:00 Uhr — einfach vorbeikommen.",
      },
      {
        id: "park",
        q: "Wo kann ich parken?",
        a: "Direkt vor der Tür. Genug Platz und kostenlos.",
      },
      {
        id: "do",
        q: "Was kann man vor Ort machen?",
        a: "Bis zu 50 Kürbissorten! Am Wochenende gibt’s oft Kürbisspezialitäten zum Probieren.",
      },
      {
        id: "reserve",
        q: "Kann ich reservieren?",
        a: "Leider nein. Komm früh für die beste Auswahl.",
      },
    ],
    colB: [
      {
        id: "when",
        q: "Wann habt ihr geöffnet?",
        a: "Ab Montag, 14. September 2026 bis Mitte Oktober 2026.",
      },
      {
        id: "size",
        q: "Wie groß ist das Gelände?",
        a: "Ca. 100 m² — trotzdem Platz für alle. Wir füllen täglich nach. Bei Ausverkauf sagen wir’s früh auf Social Media.",
      },
      {
        id: "pay",
        q: "Wie zahle ich?",
        a: "Bar oder per Tikkie — schnell und unkompliziert.",
      },
      {
        id: "edible",
        q: "Sind alle Kürbisse essbar?",
        a: "Essbar ja, aber manche schmecken nicht — Dekokürbisse sind ausgewiesen. Unbedenklich für die Gesundheit.",
      },
    ],
  },
  fr: {
    colA: [
      {
        id: "appt",
        q: "Faut-il prendre rendez-vous ?",
        a: "Non, venez quand vous voulez. Ouvert tous les jours de 8h à 20h.",
      },
      {
        id: "park",
        q: "Où se garer ?",
        a: "Devant la boutique — assez de places et gratuit.",
      },
      {
        id: "do",
        q: "Que faire sur place ?",
        a: "Jusqu’à 50 types de courges ! Le week-end, petites dégustations.",
      },
      {
        id: "reserve",
        q: "Puis-je réserver ?",
        a: "Non — venez tôt pour le meilleur choix.",
      },
    ],
    colB: [
      {
        id: "when",
        q: "Dates d’ouverture ?",
        a: "Du lundi 14 septembre 2026 à mi-octobre 2026 environ.",
      },
      {
        id: "size",
        q: "Taille du terrain ?",
        a: "Environ 100 m², réassort quotidien. S rupture, annonce sur les réseaux.",
      },
      {
        id: "pay",
        q: "Paiement ?",
        a: "Espèces ou Tikkie (demande de paiement NL).",
      },
      {
        id: "edible",
        q: "Toutes les courges sont comestibles ?",
        a: "Oui, mais certaines sont décoratives — signalées. Sans risque pour la santé.",
      },
    ],
  },
  es: {
    colA: [
      {
        id: "appt",
        q: "¿Necesito cita?",
        a: "No. Abrimos todos los días de 8:00 a 20:00.",
      },
      {
        id: "park",
        q: "¿Dónde aparcar?",
        a: "Delante del local — hay sitio y es gratis.",
      },
      {
        id: "do",
        q: "¿Qué hay que hacer allí?",
        a: "¡Hasta 50 tipos de calabaza! Los fines de semana suele haber degustaciones.",
      },
      {
        id: "reserve",
        q: "¿Puedo reservar?",
        a: "No — ven pronto para elegir mejor.",
      },
    ],
    colB: [
      {
        id: "when",
        q: "¿Cuándo abrís?",
        a: "Desde el lunes 14 de septiembre de 2026 hasta mediados de octubre.",
      },
      {
        id: "size",
        q: "¿Qué tamaño tiene el sitio?",
        a: "Unos 100 m²; reponemos cada día. Si se agota, lo avisamos en redes.",
      },
      {
        id: "pay",
        q: "Formas de pago",
        a: "Efectivo o Tikkie (pago NL).",
      },
      {
        id: "edible",
        q: "¿Todas son comestibles?",
        a: "Sí, pero algunas son solo decorativas — está indicado. No son nocivas.",
      },
    ],
  },
  it: {
    colA: [
      {
        id: "appt",
        q: "Serve un appuntamento?",
        a: "No. Siamo aperti tutti i giorni dalle 8:00 alle 20:00.",
      },
      {
        id: "park",
        q: "Dove parcheggiare?",
        a: "Davanti al locale — posti sufficienti e parcheggio gratuito.",
      },
      {
        id: "do",
        q: "Cosa si fa in loco?",
        a: "Fino a 50 varietà di zucche! Nel weekend spesso assaggi.",
      },
      {
        id: "reserve",
        q: "Si può prenotare?",
        a: "No — arriva presto per la scelta migliore.",
      },
    ],
    colB: [
      {
        id: "when",
        q: "Periodo di apertura?",
        a: "Da lunedì 14 settembre 2026 a metà ottobre circa.",
      },
      {
        id: "size",
        q: "Quanto è grande?",
        a: "Circa 100 m²; riforniamo ogni giorno. Se finisce, avvisiamo sui social.",
      },
      {
        id: "pay",
        q: "Come si paga?",
        a: "Contanti o Tikkie (richiesta pagamento NL).",
      },
      {
        id: "edible",
        q: "Tutte le zucche si mangiano?",
        a: "Sì, ma alcune sono da decorazione — segnalato. Non sono dannose.",
      },
    ],
  },
};
