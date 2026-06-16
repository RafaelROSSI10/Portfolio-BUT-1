/* =================================================================
   DONNÉES DU PORTFOLIO — Tout ton contenu modifiable est ici.
   Modifie ce fichier pour personnaliser le site, sans toucher au reste.
   ================================================================= */

/* --- Tes infos générales --- */
const PROFIL = {
  nom: "ROSSI Rafael",
  formation: "BUT Réseaux & Télécommunications",
  email: "ton.email@exemple.fr",
  linkedin: "https://www.linkedin.com/in/ton-profil",
  github: "https://github.com/ton-pseudo",
  ville: "Ta ville, France"
};

/* --- Les 3 compétences et leurs apprentissages critiques (CE) --- */
const COMPETENCES = {
  a: {
    cle: "a", lettre:"01", nom: "Administrer", sousTitre: "Administrer les réseaux et l'Internet",
    items: [
      { code:"CE1.01", statement:"en choisissant les solutions et technologies réseaux adaptées",
        preview:"Comparer puis sélectionner une technologie réseau pertinente selon le contexte et les contraintes.",
        desc:["Texte d'exemple. Explique ce que cet apprentissage critique signifie pour toi et comment tu l'as développé.","Tu peux détailler ta méthode : analyse des besoins, comparaison des solutions, critères de choix."] },
      { code:"CE1.02", statement:"en respectant les principes fondamentaux de la sécurité informatique",
        preview:"Appliquer les bonnes pratiques de sécurité : pare-feu, accès, chiffrement, segmentation.",
        desc:["Texte d'exemple. Décris ta compréhension des fondamentaux de la sécurité et comment tu les intègres."] },
      { code:"CE1.03", statement:"en utilisant une approche rigoureuse pour la résolution des dysfonctionnements",
        preview:"Diagnostiquer une panne méthodiquement : observation, hypothèses, tests, résolution.",
        desc:["Texte d'exemple. Décris ta démarche de dépannage structurée et les outils utilisés."] },
      { code:"CE1.04", statement:"en respectant les règles métiers",
        preview:"Se conformer aux normes et conventions du domaine : adressage, nommage, documentation.",
        desc:["Texte d'exemple. Montre ta connaissance et ton respect des standards professionnels."] },
      { code:"CE1.05", statement:"en assurant une veille technologique",
        preview:"Suivre les évolutions du domaine et explorer les technologies émergentes.",
        desc:["Texte d'exemple. Présente ta démarche de veille : sources, outils, sujets suivis."] }
    ]
  },
  b: {
    cle: "b", lettre:"02", nom: "Connecter", sousTitre: "Connecter les entreprises et les usagers",
    items: [
      { code:"CE2.01", statement:"en communiquant avec le client et les différents acteurs impliqués, parfois en anglais",
        preview:"Recueillir un besoin, présenter à l'oral, échanger techniquement, y compris en anglais.",
        desc:["Texte d'exemple. Décris tes situations de communication professionnelle et tes compétences relationnelles."] },
      { code:"CE2.02", statement:"en faisant preuve d'une démarche scientifique",
        preview:"Analyser par l'expérimentation, la mesure et le raisonnement structuré.",
        desc:["Texte d'exemple. Explique une démarche fondée sur le protocole et l'interprétation des résultats."] },
      { code:"CE2.03", statement:"en choisissant les solutions et technologies adaptées",
        preview:"Justifier un choix technologique répondant au besoin : coût, performance, faisabilité.",
        desc:["Texte d'exemple. Détaille ta capacité à choisir la bonne solution pour un besoin donné."] },
      { code:"CE2.04", statement:"en proposant des solutions respectueuses de l'environnement",
        preview:"Intégrer une démarche éco-responsable : sobriété, optimisation, numérique responsable.",
        desc:["Texte d'exemple. Mets en avant ta sensibilité aux enjeux environnementaux du numérique."] }
    ]
  },
  c: {
    cle: "c", lettre:"03", nom: "Programmer", sousTitre: "Créer des outils et applications informatiques pour les R&T",
    items: [
      { code:"CE3.01", statement:"en étant à l'écoute des besoins du client",
        preview:"Recueillir et formaliser un besoin avant de développer une solution sur mesure.",
        desc:["Texte d'exemple. Décris comment tu cernes un besoin client avant de coder."] },
      { code:"CE3.02", statement:"en documentant le travail réalisé",
        preview:"Produire une documentation claire : README, commentaires, guides, diagrammes.",
        desc:["Texte d'exemple. Montre l'importance que tu accordes à la documentation."] },
      { code:"CE3.03", statement:"en utilisant les outils numériques à bon escient",
        preview:"Maîtriser les outils (Git, IDE, conteneurs, CI/CD) au service de la qualité.",
        desc:["Texte d'exemple. Présente ta maîtrise de l'environnement de développement."] },
      { code:"CE3.04", statement:"en choisissant les outils de développement adaptés",
        preview:"Justifier le choix d'un langage, framework ou bibliothèque selon le problème.",
        desc:["Texte d'exemple. Explique tes critères de choix technique."] },
      { code:"CE3.05", statement:"en intégrant les problématiques de sécurité",
        preview:"Penser la sécurité dès la conception : validation, secrets, authentification, données.",
        desc:["Texte d'exemple. Décris ta démarche de développement sécurisé."] }
    ]
  }
};

/* --- Tes projets ---
   comp    : "a" (Administrer), "b" (Connecter) ou "c" (Programmer)
   ce      : liste des codes d'apprentissages validés (ex: ["CE1.01","CE1.03"])
   lien    : URL du projet/dépôt ("" si aucun)
   preuves : photos/captures justificatives. Chaque preuve = { img, legende }
             - img     : chemin de l'image, ex "images/p1-schema.jpg"
                         (place tes photos dans un dossier "images" à côté des pages)
             - legende : courte description de la preuve
             Laisse img:"" pour afficher un emplacement vide à remplir plus tard.
*/
const PROJETS = [
  { id:"p1", titre:"Conception d'une architecture réseau", comp:"a", ce:["CE1.01","CE1.04"], lien:"",
    resume:"Texte d'exemple. Présente brièvement le projet en une ou deux phrases.",
    desc:["Texte d'exemple. Décris le contexte, l'objectif et les technologies retenues.","Explique tes choix et ce que tu as appris."],
    tags:["VLAN","Routage","Cisco"],
    preuves:[
      { img:"images/p1-schema.jpg", legende:"Texte d'exemple : schéma de l'architecture (remplace par ta photo)." },
      { img:"", legende:"Emplacement vide — ajoute ici une capture ou une photo." }
    ] },
  { id:"p2", titre:"Mise en place d'un pare-feu", comp:"a", ce:["CE1.02"], lien:"",
    resume:"Texte d'exemple. Sécurisation d'un réseau via la configuration d'un pare-feu.",
    desc:["Texte d'exemple. Détaille la configuration, les règles définies et les tests réalisés."],
    tags:["Firewall","ACL","Sécurité"],
    preuves:[ { img:"", legende:"Emplacement vide — capture des règles de pare-feu." } ] },
  { id:"p3", titre:"Projet de communication client", comp:"b", ce:["CE2.01"], lien:"",
    resume:"Texte d'exemple. Recueil de besoin et présentation d'une solution à un client.",
    desc:["Texte d'exemple. Décris la situation, ton rôle et le résultat."],
    tags:["Oral","Anglais","Relation client"],
    preuves:[] },
  { id:"p4", titre:"Outil interne en Python", comp:"c", ce:["CE3.01","CE3.02","CE3.04"], lien:"",
    resume:"Texte d'exemple. Développement d'un petit outil pour automatiser une tâche.",
    desc:["Texte d'exemple. Présente le besoin, l'outil développé et la documentation produite."],
    tags:["Python","Automatisation","Git"],
    preuves:[ { img:"", legende:"Emplacement vide — capture du code ou de l'interface." } ] },
  { id:"p5", titre:"Application sécurisée", comp:"c", ce:["CE3.05","CE3.03"], lien:"",
    resume:"Texte d'exemple. Application intégrant les bonnes pratiques de sécurité.",
    desc:["Texte d'exemple. Décris l'application et les mesures de sécurité mises en place."],
    tags:["Sécurité","Authentification","Web"],
    preuves:[] },
  { id:"p6", titre:"Étude éco-responsable", comp:"b", ce:["CE2.02","CE2.04"], lien:"",
    resume:"Texte d'exemple. Analyse d'une solution sous l'angle environnemental.",
    desc:["Texte d'exemple. Présente ta démarche scientifique et tes recommandations."],
    tags:["Démarche scientifique","Green IT"],
    preuves:[] }
];

/* --- Parcours (page À propos) --- */
const PARCOURS = [
  { date:"2023 — Aujourd'hui", titre:"BUT Réseaux & Télécommunications", desc:"Texte d'exemple. Décris ta formation actuelle, les modules clés, ce qui te passionne." },
  { date:"2023", titre:"Baccalauréat", desc:"Texte d'exemple. Mentionne ton bac, ta spécialité, tes mentions éventuelles." },
  { date:"À compléter", titre:"Stage / Expérience", desc:"Texte d'exemple. Ajoute ici tes stages, jobs ou expériences marquantes." }
];

const accentVar = { a:"var(--rouge)", b:"var(--orange)", c:"var(--jaune)" };
const compNomComplet = { a:"Administrer · Administrer les réseaux et l'Internet",
                         b:"Connecter · Connecter les entreprises et les usagers",
                         c:"Programmer · Créer des outils et applications pour les R&T" };
