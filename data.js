/* =================================================================
   DONNÉES DU PORTFOLIO — Tout ton contenu modifiable est ici.
   ================================================================= */

/* --- Tes infos générales --- */
const PROFIL = {
  nom: "ROSSI Rafael",
  formation: "BUT Réseaux & Télécommunications — IUT de Colmar (UHA)",
  email: "rafikirossi@icloud.com",
  linkedin: "https://www.linkedin.com/in/rafael-rossi-9201913b5/",
  github: "https://github.com/RafaelROSSI10",
  ville: "Colmar, France"
};

/* --- Les 3 compétences (intro officielle + apprentissages critiques CE) --- */
const COMPETENCES = {
  a: {
    cle: "a", lettre:"01", nom: "Administrer", sousTitre: "Administrer les réseaux et l'Internet",
    intro: "Concevoir, déployer, configurer et superviser les réseaux et services qui font fonctionner le système d'information d'une entreprise, en garantissant leur sécurité et la continuité de service. Cela implique de choisir les technologies adaptées, de diagnostiquer les pannes avec méthode, de respecter les règles métier et d'assurer une veille technologique permanente.",
    items: [
      { code:"CE1.01", statement:"en choisissant les solutions et technologies réseaux adaptées",
        preview:"Comparer puis sélectionner une technologie réseau pertinente selon le contexte et les contraintes.",
        desc:["Cet apprentissage consiste à analyser un besoin réseau puis à sélectionner les technologies et équipements les plus adaptés au contexte. Je l'ai développé lors des SAÉ 1.02 et 2.01, où j'ai dû mettre en place les éléments d'un réseau (VLAN, plan d'adressage, équipements de niveau 2 et 3) en fonction d'un cahier des charges et d'un schéma imposés."] },
      { code:"CE1.02", statement:"en respectant les principes fondamentaux de la sécurité informatique",
        preview:"Appliquer les bonnes pratiques de sécurité : pare-feu, accès, chiffrement, segmentation.",
        desc:["Il s'agit d'appliquer les principes fondamentaux de la sécurité dans la conception et l'administration d'un réseau. Je l'ai abordé d'abord de façon théorique avec la SAÉ 1.01 (sensibilisation aux ransomwares et aux bonnes pratiques de protection), puis de façon pratique avec la SAÉ 2.01, en mettant en place des ACL pour filtrer le trafic."] },
      { code:"CE1.03", statement:"en utilisant une approche rigoureuse pour la résolution des dysfonctionnements",
        preview:"Diagnostiquer une panne méthodiquement : observation, hypothèses, tests, résolution.",
        desc:["Cet apprentissage porte sur le diagnostic et la résolution méthodique des pannes réseau. Lors des SAÉ 1.02 et 2.01, j'ai appris à vérifier le bon fonctionnement d'un réseau étape par étape (tests de connectivité, ping) et à identifier l'origine d'un problème de configuration pour le corriger."] },
      { code:"CE1.04", statement:"en respectant les règles métiers",
        preview:"Se conformer aux normes et conventions du domaine : adressage, nommage, documentation.",
        desc:["Respecter les règles métiers, c'est suivre les conventions du domaine : plan d'adressage cohérent, nommage clair des VLAN et des équipements, configurations structurées. J'ai mis cela en pratique dans les SAÉ 1.02 et 2.01 en respectant les schémas et les conventions imposés."] },
      { code:"CE1.05", statement:"en assurant une veille technologique",
        preview:"Suivre les évolutions du domaine et explorer les technologies émergentes.",
        desc:["Assurer une veille, c'est se tenir informé des évolutions et des menaces du domaine. La SAÉ 1.01 m'a amené à me documenter sur une menace actuelle (les ransomwares) à partir de sources variées, et plus largement je suis par curiosité l'actualité de l'informatique et de la cybersécurité."] }
    ]
  },
  b: {
    cle: "b", lettre:"02", nom: "Connecter", sousTitre: "Connecter les entreprises et les usagers",
    intro: "Mettre en place et administrer les infrastructures de transmission qui acheminent les données entre les équipements et les usagers. Cela mobilise des connaissances en physique, en traitement du signal et en communications numériques, ainsi que la communication avec le client (parfois en anglais), une démarche scientifique et la prise en compte des enjeux environnementaux.",
    items: [
      { code:"CE2.01", statement:"en communiquant avec le client et les différents acteurs impliqués, parfois en anglais",
        preview:"Recueillir un besoin, présenter à l'oral, échanger techniquement, y compris en anglais.",
        desc:["Cet apprentissage concerne la communication avec le client et les différents acteurs d'un projet, y compris en anglais. Lors de la SAÉ 2.02 (radio ESP32), j'ai dû exploiter de la documentation technique en anglais (datasheets, bibliothèques) pour mener le projet à bien. Mon option anglais section européenne au lycée m'aide dans cet aspect."] },
      { code:"CE2.02", statement:"en faisant preuve d'une démarche scientifique",
        preview:"Analyser par l'expérimentation, la mesure et le raisonnement structuré.",
        desc:["Faire preuve d'une démarche scientifique, c'est s'appuyer sur la mesure, l'expérimentation et l'analyse des résultats. Je l'ai développé lors de la SAÉ 1.03, en réalisant des mesures de couverture Wi-Fi et des heatmaps pour analyser la qualité du réseau, et lors de la SAÉ 2.02 en m'appuyant sur les datasheets et des essais successifs."] },
      { code:"CE2.03", statement:"en choisissant les solutions et technologies adaptées",
        preview:"Justifier un choix technologique répondant au besoin : coût, performance, faisabilité.",
        desc:["Il s'agit de justifier le choix d'une solution technique au regard du besoin. Dans la SAÉ 2.02, j'ai utilisé des solutions adaptées à la réalisation d'une radio connectée (carte ESP32, protocole MQTT, application de pilotage) en tenant compte de leurs possibilités et de leurs contraintes."] },
      { code:"CE2.04", statement:"en proposant des solutions respectueuses de l'environnement",
        preview:"Intégrer une démarche éco-responsable : sobriété, optimisation, numérique responsable.",
        desc:["Cet apprentissage vise à intégrer les enjeux environnementaux dans les choix techniques : sobriété énergétique, optimisation des ressources, numérique responsable. C'est un aspect que je garde à l'esprit dans mes projets et que je continue à développer au fil de la formation."] }
    ]
  },
  c: {
    cle: "c", lettre:"03", nom: "Programmer", sousTitre: "Créer des outils et applications informatiques pour les R&T",
    intro: "Développer des outils et applications au service du réseau et de l'entreprise : scripts d'analyse d'équipements, sites web, gestion de données. Cela suppose d'écouter le besoin du client, de documenter son travail, d'utiliser les outils numériques à bon escient, de choisir les bons outils de développement et d'intégrer la sécurité dès la conception.",
    items: [
      { code:"CE3.01", statement:"en étant à l'écoute des besoins du client",
        preview:"Recueillir et formaliser un besoin avant de développer une solution sur mesure.",
        desc:["Être à l'écoute du besoin, c'est comprendre et formaliser une demande avant de développer. Dans les SAÉ 1.05 et 2.03, j'ai d'abord analysé le cahier des charges (outil de localisation de gros fichiers, gestionnaire de notes) pour cerner les fonctionnalités attendues avant de me lancer dans le code."] },
      { code:"CE3.02", statement:"en documentant le travail réalisé",
        preview:"Produire une documentation claire : README, commentaires, guides, diagrammes.",
        desc:["Documenter, c'est rendre son travail compréhensible et réutilisable. Au fil des SAÉ de programmation (1.04, 1.05, 2.03), j'ai pris l'habitude de structurer et de commenter mon code, et de décrire les fonctionnalités réalisées."] },
      { code:"CE3.03", statement:"en utilisant les outils numériques à bon escient",
        preview:"Maîtriser les outils (Git, IDE, conteneurs, CI/CD) au service de la qualité.",
        desc:["Cet apprentissage porte sur l'usage maîtrisé des outils numériques de développement. La SAÉ 1.04 (CV web) m'a fait utiliser les outils du développement web (éditeur, HTML/CSS) de manière adaptée à l'objectif visé."] },
      { code:"CE3.04", statement:"en choisissant les outils de développement adaptés",
        preview:"Justifier le choix d'un langage, framework ou bibliothèque selon le problème.",
        desc:["Choisir les bons outils de développement, c'est sélectionner le langage et les technologies adaptés au problème. J'ai fait ces choix dans les SAÉ 1.04 (HTML/CSS), 1.05 (Python et PowerShell) et 2.03 (Python, HTML, CSS), selon la nature de chaque projet."] },
      { code:"CE3.05", statement:"en intégrant les problématiques de sécurité",
        preview:"Penser la sécurité dès la conception : validation, secrets, authentification, données.",
        desc:["Intégrer la sécurité dès la conception, c'est anticiper les risques liés aux données et aux actions sensibles. Dans la SAÉ 1.05, mon programme demande une confirmation avant toute suppression de fichier ; dans la SAÉ 2.03, la gestion de données d'élèves implique une attention à leur traitement."] }
    ]
  }
};

/* --- Tes projets (SAÉ) --- */
const PROJETS = [

  /* ====================== ADMINISTRER ====================== */
  { id:"sae101", sae:"SAÉ 1.01", ue:"UE1.1 · Administrer", titre:"Sensibilisation à l'hygiène informatique et à la cybersécurité", comp:"a", ce:["CE1.02","CE1.05"], lien:"",
    resume:"Présentation orale sur les ransomwares : fonctionnement, prévention et réaction en cas d'attaque.",
    desc:["Cette SAÉ consistait à présenter un type de malware ou d'attaque et les moyens de s'en protéger. Avec mon groupe, nous avons choisi le sujet des ransomwares : qu'est-ce qu'un ransomware, comment les éviter et que faire si l'on en est victime.",
          "Il s'agissait d'un oral de prévention destiné à sensibiliser aux dangers de l'informatique."],
    tags:["Cybersécurité","Ransomware","Oral","Hygiène informatique"],
    preuves:[ { img:"", legende:"Emplacement vide — diapo ou support de présentation." } ] },

  { id:"sae102", sae:"SAÉ 1.02", ue:"UE1.1 · Administrer", titre:"S'initier aux réseaux informatiques", comp:"a", ce:["CE1.01","CE1.03","CE1.04"], lien:"",
    resume:"Création du réseau d'une succursale sous EVE-NG : VLAN, ACL, plan d'adressage et serveur DHCP.",
    desc:["Cette SAÉ consistait à créer un réseau dans l'environnement EVE-NG. Nous avons d'abord configuré une machine virtuelle pour accéder à la plateforme, puis construit un réseau respectant un schéma imposé par le professeur.",
          "Les tâches concrètes couvraient un grand nombre de fonctions de mise en place d'un réseau : configuration de VLAN et d'ACL, mise en place d'un plan d'adressage et d'un serveur DHCP."],
    tags:["EVE-NG","VLAN","ACL","DHCP","Plan d'adressage"],
    preuves:[ { img:"", legende:"Emplacement vide — schéma de l'architecture ou capture EVE-NG." },
              { img:"", legende:"Emplacement vide — test de ping / vérification." } ] },

  { id:"sae201", sae:"SAÉ 2.01", ue:"UE2.1 · Administrer", titre:"Construire un réseau informatique pour une petite structure", comp:"a", ce:["CE1.01","CE1.02","CE1.03","CE1.04"], lien:"",
    resume:"Construction d'un réseau d'entreprise sous GNS3 (niveaux 2 et 3) avec services et sécurité.",
    desc:["Cette SAÉ visait à renforcer nos connaissances et notre savoir-faire dans la construction de réseaux de niveau 2 et 3 (commutateurs et routeurs), principalement à l'aide du logiciel GNS3.",
          "Comme pour la SAÉ précédente, nous avons travaillé les VLAN, les ACL et l'adressage IP, ainsi que des serveurs FTP et Web. C'était une mise en œuvre de compétences déjà acquises, mais dans un schéma de plus haut niveau."],
    tags:["GNS3","VLAN","ACL","Adressage IP","FTP","Serveur Web"],
    preuves:[ { img:"", legende:"Emplacement vide — topologie GNS3." },
              { img:"", legende:"Emplacement vide — capture d'une configuration (ACL, VLAN…)." } ] },

  /* ====================== CONNECTER ====================== */
  { id:"sae103", sae:"SAÉ 1.03", ue:"UE1.2 · Connecter", titre:"Découvrir un dispositif de transmission", comp:"b", ce:["CE2.02"], lien:"",
    resume:"Étude de la couverture et de la qualité d'un réseau Wi-Fi dans un bâtiment, via des heatmaps.",
    desc:["Lors de cette SAÉ, nous devions mesurer la qualité du réseau à différents endroits d'un bâtiment de l'IUT.",
          "À l'aide du logiciel de heatmap Acrylic, nous avons cartographié la couverture du réseau dans le bâtiment et ses alentours, et analysé la qualité du signal selon le point de connexion. C'était donc une étude de la couverture et de la qualité réseau."],
    tags:["Wi-Fi","Heatmap","Acrylic","Mesures","Couverture réseau"],
    preuves:[ { img:"", legende:"Emplacement vide — heatmap de couverture." } ] },

  { id:"sae202", sae:"SAÉ 2.02", ue:"UE2.2 · Connecter", titre:"Mesurer et caractériser un signal ou un système", comp:"b", ce:["CE2.01","CE2.02","CE2.03"], lien:"",
    resume:"Radio internet sur carte ESP32, programmée sous Arduino IDE et pilotée depuis un smartphone via MQTT.",
    desc:["Dans cette SAÉ, nous devions programmer une carte ESP32 pour en faire une radio internet, à l'aide du logiciel Arduino IDE.",
          "Le pilotage à distance se faisait via l'application IoT MQTT Panel (sur iPhone) : nous avons codé pour qu'un simple appui sur un bouton de l'application permette par exemple de monter ou baisser le volume, ou de changer de station."],
    tags:["ESP32","Arduino IDE","MQTT","IoT MQTT Panel"],
    preuves:[ { img:"", legende:"Emplacement vide — montage de la carte ESP32." },
              { img:"", legende:"Emplacement vide — interface IoT MQTT Panel." } ] },

  /* ====================== PROGRAMMER ====================== */
  { id:"sae104", sae:"SAÉ 1.04", ue:"UE1.3 · Programmer", titre:"Se présenter sur Internet", comp:"c", ce:["CE3.02","CE3.03","CE3.04"], lien:"",
    resume:"Création d'un CV en ligne présentant mon parcours et mes expériences (HTML/CSS).",
    desc:["Première SAÉ réalisée en première année de BUT. Elle consistait à réaliser un CV au format HTML et CSS, présentant mes expériences passées, mon parcours scolaire, etc.",
          "C'était du développement HTML et CSS simple."],
    tags:["HTML","CSS","Web","CV"],
    preuves:[ { img:"", legende:"Emplacement vide — capture de la page de CV." } ] },

  { id:"sae105", sae:"SAÉ 1.05", ue:"UE1.3 · Programmer", titre:"Traiter des données", comp:"c", ce:["CE3.01","CE3.02","CE3.04","CE3.05"], lien:"",
    resume:"Programme Python/PowerShell localisant les plus gros fichiers d'un PC, avec camembert et suppression.",
    desc:["Le principe de cette SAÉ était de coder un programme en Python (avec un peu de PowerShell) pour trouver les fichiers les plus volumineux d'un ordinateur.",
          "Le programme génère un graphique en camembert montrant la répartition du volume entre les différents dossiers, fichiers et applications du PC, puis offre la possibilité de les supprimer après une confirmation."],
    tags:["Python","PowerShell","Camembert","Traitement de fichiers"],
    preuves:[ { img:"", legende:"Emplacement vide — capture du camembert." },
              { img:"", legende:"Emplacement vide — extrait de code." } ] },

  { id:"sae203", sae:"SAÉ 2.03", ue:"UE2.3 · Programmer", titre:"Mettre en place une solution informatique pour l'entreprise", comp:"c", ce:["CE3.01","CE3.02","CE3.04","CE3.05"], lien:"",
    resume:"Gestionnaire de notes (travail de groupe) — ma partie : import CSV et relevé de notes (HTML/Python).",
    desc:["Cette SAÉ était un travail de groupe ; mon sujet était un gestionnaire de notes permettant d'ajouter et de supprimer des élèves, professeurs, UE, matières, notes et examens.",
          "Ma partie consistait à coder l'import CSV et le relevé de notes du site, en HTML et Python : routage et redirection de pages, développement web et Python, avec une touche de CSS pour la mise en forme du relevé de notes."],
    tags:["Python","HTML","CSS","Import CSV","Web","Routage"],
    preuves:[ { img:"", legende:"Emplacement vide — capture de l'application." },
              { img:"", legende:"Emplacement vide — relevé de notes généré." } ] }
];

/* --- Parcours (page À propos) --- */
const PARCOURS = [
  { date:"2025 — Aujourd'hui", titre:"BUT Réseaux & Télécommunications — IUT de Colmar", desc:"1ère année du BUT R&T, où j'explore les multiples facettes de l'informatique : réseaux, systèmes, développement et cybersécurité." },
  { date:"2025", titre:"Baccalauréat général", desc:"Spécialités Mathématiques et NSI, option anglais section européenne." },
  { date:"2025", titre:"Stage — Conseil départemental de Vesoul", desc:"Stage au sein du service informatique." },
  { date:"2021", titre:"Stage de 3ème — OnlineFormaPro", desc:"Première immersion en entreprise dans le domaine du numérique." }
];

const accentVar = { a:"var(--rouge)", b:"var(--orange)", c:"var(--jaune)" };
const compNomComplet = { a:"Administrer · Administrer les réseaux et l'Internet",
                         b:"Connecter · Connecter les entreprises et les usagers",
                         c:"Programmer · Créer des outils et applications pour les R&T" };
