/* =================================================================
   DONNÉES DU PORTFOLIO — Tout ton contenu modifiable est ici.
   Modifie ce fichier pour personnaliser le site, sans toucher au reste.
   ================================================================= */

/* --- Tes infos générales --- */
const PROFIL = {
  nom: "ROSSI Rafael",
  formation: "BUT Réseaux & Télécommunications — IUT de Colmar (UHA)",
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

/* --- Tes projets (SAÉ) ---
   sae     : numéro et nom de la SAÉ (ex: "SAÉ 1.02")
   ue      : UE de rattachement (compétence officielle d'après le relevé)
   comp    : "a" Administrer / "b" Connecter / "c" Programmer
   ce      : apprentissages critiques validés (ex: ["CE1.01","CE1.03"])
   lien    : URL du projet/dépôt ("" si aucun)
   resume  : phrase courte affichée sur la carte
   desc    : description complète (tableau de paragraphes) — À PERSONNALISER
   tags    : technologies / mots-clés
   preuves : photos justificatives { img:"images/...", legende:"..." }
             (laisse img:"" pour un emplacement vide à remplir plus tard)
*/
const PROJETS = [

  /* ====================== ADMINISTRER ====================== */
  { id:"sae101", sae:"SAÉ 1.01", ue:"UE1.1 · Administrer", titre:"Sensibilisation à l'hygiène informatique et à la cybersécurité", comp:"a", ce:["CE1.02","CE1.05"], lien:"",
    resume:"Présentation orale sur les ransomwares : fonctionnement, propagation et moyens de prévention.",
    desc:["Contexte : sensibilisation à l'hygiène informatique et à la cybersécurité, sous la forme d'un oral consacré aux ransomwares.",
          "Le sujet abordait le fonctionnement d'un rançongiciel, ses modes de propagation et les bonnes pratiques de protection (sauvegardes, mises à jour, sensibilisation des utilisateurs).",
          "À personnaliser : décris ce que TU as présenté, tes sources, et ce que tu en as retenu."],
    tags:["Cybersécurité","Ransomware","Oral","Hygiène informatique"],
    preuves:[ { img:"", legende:"Emplacement vide — diapo ou support de présentation." } ] },

  { id:"sae102", sae:"SAÉ 1.02", ue:"UE1.1 · Administrer", titre:"S'initier aux réseaux informatiques", comp:"a", ce:["CE1.01","CE1.03","CE1.04"], lien:"",
    resume:"Mise en place du réseau d'une succursale sous EVE-NG : VLANs, plan d'adressage, DHCP et routage inter-VLAN.",
    desc:["Contexte : en tant que technicien réseau, préparer et configurer le réseau local d'une succursale d'entreprise (société RTC) à l'aide du simulateur EVE-NG.",
          "Travaux réalisés : choix des équipements (commutateurs Cisco 2960, routeurs 2800), découpage en VLANs (Direction, Utilisateurs, Serveurs, Administrateur), plan d'adressage IP avec masques variables, mise en place du DHCP et du routage inter-VLAN, puis tests de connectivité.",
          "À personnaliser : détaille ta configuration, tes choix et les difficultés rencontrées."],
    tags:["EVE-NG","VLAN","DHCP","Cisco","Routage inter-VLAN","Plan d'adressage"],
    preuves:[ { img:"", legende:"Emplacement vide — schéma de l'architecture ou capture EVE-NG." },
              { img:"", legende:"Emplacement vide — test de ping / vérification." } ] },

  { id:"sae201", sae:"SAÉ 2.01", ue:"UE2.1 · Administrer", titre:"Construire un réseau informatique pour une petite structure", comp:"a", ce:["CE1.01","CE1.02","CE1.03","CE1.04"], lien:"",
    resume:"Réseau d'entreprise complet sous GNS3, avec services et règles de sécurité.",
    desc:["Contexte : consolidation du savoir-faire sur le matériel de niveau 2 et 3, en construisant un réseau local complet sous GNS3 (réseau 192.168.32.0/20 partagé).",
          "Travaux réalisés : création des VLANs (administration, développeur, administrateur), VLAN natif déplacé et tagué, routage inter-VLAN, équilibrage de charge avec Spanning-tree, routage RIP v2, services (FTP, Apache, rsync), et sécurité (port-security, ACL sur les routeurs).",
          "À personnaliser : précise ton rôle, tes configurations et tes tests."],
    tags:["GNS3","VLAN","RIP v2","Spanning-tree","ACL","Port-security","FTP","Apache"],
    preuves:[ { img:"", legende:"Emplacement vide — topologie GNS3." },
              { img:"", legende:"Emplacement vide — capture d'une configuration (ACL, VLAN…)." } ] },

  /* ====================== CONNECTER ====================== */
  { id:"sae103", sae:"SAÉ 1.03", ue:"UE1.2 · Connecter", titre:"Découvrir un dispositif de transmission", comp:"b", ce:["CE2.02"], lien:"",
    resume:"Étude et caractérisation d'un dispositif de transmission du signal.",
    desc:["Contexte : découverte d'un dispositif de transmission (rattaché à la compétence Connecter dans le relevé).",
          "À personnaliser : décris le dispositif étudié, les mesures réalisées et tes conclusions. (Ajoute le sujet exact si tu l'as.)"],
    tags:["Transmission","Signal","Mesures"],
    preuves:[ { img:"", legende:"Emplacement vide — mesure ou montage." } ] },

  { id:"sae202", sae:"SAÉ 2.02", ue:"UE2.2 · Connecter", titre:"Web Radio portable (ESP32 + VS1053)", comp:"b", ce:["CE2.01","CE2.02","CE2.03"], lien:"",
    resume:"Lecteur de radio internet portable sur ESP32, contrôlé depuis un smartphone via MQTT.",
    desc:["Contexte : concevoir une web radio portable permettant d'écouter des stations internet (MP3/AAC) en stéréo, et de contrôler stations, volume, tonalité et spatialisation depuis un téléphone.",
          "Travaux réalisés : prise en main de la carte Adafruit HUZZAH32 (ESP32) et du codec VS1053 via le bus SPI, programmation sous l'IDE Arduino (bibliothèques Baldram, ESP32_VS1053_Stream), gestion du WiFi (WiFiManager) et pilotage à distance via le protocole MQTT et l'application IoT MQTT Panel.",
          "À personnaliser : explique ta démarche, l'étude du datasheet et les fonctionnalités que tu as implémentées."],
    tags:["ESP32","VS1053","Arduino","SPI","MQTT","WiFiManager","Anglais technique"],
    preuves:[ { img:"", legende:"Emplacement vide — montage des cartes." },
              { img:"", legende:"Emplacement vide — interface IoT MQTT Panel." } ] },

  /* ====================== PROGRAMMER ====================== */
  { id:"sae104", sae:"SAÉ 1.04", ue:"UE1.3 · Programmer", titre:"Se présenter sur Internet (CV web)", comp:"c", ce:["CE3.02","CE3.03","CE3.04"], lien:"",
    resume:"Création d'une page web de CV avec pages liées par ancres (HTML/CSS, flexbox).",
    desc:["Contexte : créer une page web présentant son curriculum vitae, accompagnée d'au moins deux pages détaillant des parties du CV, le tout mis en page par un seul fichier CSS.",
          "Travaux réalisés : structure HTML sémantique (header, sections), présentation des compétences en flexbox, liens à ancre vers les pages de détail (formations, diplômes, expériences).",
          "À personnaliser : décris tes choix de mise en page et ce que tu as appris en HTML/CSS."],
    tags:["HTML","CSS","Flexbox","Web","Responsive"],
    preuves:[ { img:"", legende:"Emplacement vide — capture de la page de CV." } ] },

  { id:"sae105", sae:"SAÉ 1.05", ue:"UE1.3 · Programmer", titre:"Traiter des données (outil de reporting)", comp:"c", ce:["CE3.01","CE3.02","CE3.04","CE3.05"], lien:"",
    resume:"Outil Python/PyQt5 localisant les plus gros fichiers d'un disque, avec graphique et script de suppression.",
    desc:["Contexte : développer un outil de « reporting » pour aider un administrateur système à localiser les gros fichiers d'une arborescence et libérer de l'espace disque.",
          "Travaux réalisés : scripts Python (parcours récursif avec pathlib, tri par taille, export JSON), interface graphique PyQt5 (fenêtre à onglets, camembert des tailles, légendes avec cases à cocher), et génération d'un script PowerShell de suppression des fichiers sélectionnés.",
          "À personnaliser : explique l'architecture de ton code et les précautions de sécurité prises."],
    tags:["Python","PyQt5","pathlib","JSON","PowerShell","Camembert"],
    preuves:[ { img:"", legende:"Emplacement vide — capture de l'interface (camembert + légendes)." },
              { img:"", legende:"Emplacement vide — extrait de code ou du fichier JSON." } ] },

  { id:"sae203", sae:"SAÉ 2.03", ue:"UE2.3 · Programmer", titre:"Mettre en place une solution informatique (gestionnaire de notes)", comp:"c", ce:["CE3.01","CE3.02","CE3.04","CE3.05"], lien:"",
    resume:"Application web de gestion des notes étudiants : CRUD complet et base de données.",
    desc:["Contexte : fournir une interface de gestion des notes des étudiants, avec une base de données (étudiants, UE, ressources, enseignants, examens, notes).",
          "Travaux réalisés : conception de la base, implémentation d'un CRUD pour chaque type de données, saisie des notes manuelle ou par import de fichier, et génération d'un relevé de notes pour un étudiant.",
          "À personnaliser : précise les technologies utilisées, la structure de ta base et les fonctionnalités développées."],
    tags:["CRUD","Base de données","Web","Import de fichier"],
    preuves:[ { img:"", legende:"Emplacement vide — capture de l'application." },
              { img:"", legende:"Emplacement vide — schéma de la base de données." } ] }
];

/* --- Parcours (page À propos) --- */
const PARCOURS = [
  { date:"2025 — Aujourd'hui", titre:"BUT Réseaux & Télécommunications — IUT de Colmar", desc:"Texte d'exemple. Décris ta formation : modules clés, ce qui te passionne, ce que tu vises (alternance, poursuite d'études…)." },
  { date:"À compléter", titre:"Baccalauréat", desc:"Texte d'exemple. Mentionne ton bac, ta spécialité, tes mentions éventuelles." },
  { date:"À compléter", titre:"Stage / Expérience", desc:"Texte d'exemple. Ajoute ici tes stages, jobs ou expériences marquantes." }
];

const accentVar = { a:"var(--rouge)", b:"var(--orange)", c:"var(--jaune)" };
const compNomComplet = { a:"Administrer · Administrer les réseaux et l'Internet",
                         b:"Connecter · Connecter les entreprises et les usagers",
                         c:"Programmer · Créer des outils et applications pour les R&T" };
