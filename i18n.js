/**
 * Portfolio — i18n (EN / FR)
 * Lightweight translation layer using data-i18n attributes.
 */

(function () {
  'use strict';

  const translations = {
    en: {
      // Nav index
      'nav.top': 'Top',
      'nav.work': 'Work',
      'nav.lab': 'Lab',
      'nav.approach': 'Approach',
      'nav.lessons': 'Lessons',
      'nav.me': 'Me',

      // Landing
      'landing.greeting': "Hi, I'm",
      'landing.tagline': 'I build things for the web and break them on purpose.',
      'landing.sub': 'Developer & QA Tester — I write code, then I make sure it actually works.',
      'landing.cv': 'Download CV',

      // Section: Work
      'work.title': "Things I've Built",

      // fingerWorkout
      'fw.label.problem': 'The Problem',
      'fw.problem': "Typing practice tools are boring and solo. You grind through exercises alone, with no reason to come back. There's no energy, no stakes.",
      'fw.label.thinking': 'The Thinking',
      'fw.thinking': 'What if typing practice felt like a race? Real-time, multiplayer, with live scores updating as you type. Make it competitive and people will actually practice.',
      'fw.label.built': 'What I Built',
      'fw.built': "A real-time multiplayer typing app with live rooms, instant score updates via WebSockets, and dynamic content pulled from the Wikipedia API so you're never typing the same thing twice. Redis handles caching, JWT handles auth.",
      'fw.label.tradeoffs': 'Tradeoffs',
      'fw.tradeoffs': 'Chose Redis over persistent storage for session data — speed mattered more than durability here. Used Socket.io instead of raw WebSockets for automatic reconnection and fallback support. Worth the extra bundle size.',
      'fw.label.change': "What I'd Change",
      'fw.change': "Better error handling on socket disconnects — users sometimes get stuck in ghost rooms. I'd also add persistent leaderboards instead of session-only rankings, and rethink the room cleanup logic.",

      // YouTube Stream Downloader
      'yt.label.problem': 'The Problem',
      'yt.problem': 'Every YouTube downloader I tried was either bloated with ads, sketchy, or gave you low-quality output. I just wanted the best quality without the noise.',
      'yt.label.thinking': 'The Thinking',
      'yt.thinking': 'YouTube serves audio and video as separate streams at the highest quality. If I download them separately and merge with FFmpeg, I get the best possible result with a simple pipeline.',
      'yt.label.built': 'What I Built',
      'yt.built': 'A lightweight desktop app that downloads the highest quality audio and video streams separately, merges them with FFmpeg, and gives you a clean output. No accounts, no ads, no bloat.',
      'yt.label.tradeoffs': 'Tradeoffs',
      'yt.tradeoffs': 'Used pytubefix over the original pytube — more reliable but less documented. Went with a desktop UI (pywebview) instead of a web app because this is a personal tool, not a product. Simplicity won.',
      'yt.label.change': "What I'd Change",
      'yt.change': "Add batch downloading, a more accurate progress bar (FFmpeg doesn't make this easy), and maybe a queue system for large downloads.",

      // YouTube Auto-Pauser
      'yp.label': 'Quick Experiment',
      'yp.text': "A browser extension that automatically pauses YouTube videos when you switch tabs. Small, useful, and scratched a personal itch. Built it in an afternoon, then spent another afternoon making it work on Firefox too.",

      // Section: Lab
      'lab.title': 'The Lab',
      'lab.subtitle': "Experiments, half-baked ideas, and things I'm poking at.",
      'lab.status.exploring': 'exploring',
      'lab.status.thinking': 'thinking',
      'lab.status.reading': 'reading',
      'lab.status.building': 'building',
      'lab.vrt.title': 'Visual Regression Testing',
      'lab.vrt.text': 'Using Playwright to catch UI drift between deployments. Comparing screenshots pixel-by-pixel is crude but surprisingly effective for catching CSS regressions that humans miss.',
      'lab.ws.title': 'WebSocket Reconnection',
      'lab.ws.text': 'Exponential backoff with jitter? Or just let Socket.io handle it? Digging into what happens when your multiplayer room loses connection mid-race and how to recover gracefully.',
      'lab.ca.title': 'Clean Architecture in Express',
      'lab.ca.text': 'Trying to separate concerns in Node.js backends without making it feel like enterprise Java. The sweet spot between "everything in one file" and "12 abstraction layers" is hard to find.',
      'lab.docker.title': 'Docker for Dev Environments',
      'lab.docker.text': 'Setting up reproducible development environments so "works on my machine" stops being an excuse. Basic Compose files for MongoDB + Redis + Node stacks.',

      // Section: Approach
      'approach.title': 'How I Work',
      'approach.good': "What I'm good at",
      'approach.good.1': 'Testing things until they break — and knowing why they broke',
      'approach.good.2': 'Building real-time features that actually feel responsive',
      'approach.good.3': 'Connecting frontend to backend cleanly, without over-engineering the glue',
      'approach.good.4': 'Automating the boring stuff so humans can focus on the interesting stuff',
      'approach.avoid': 'What I avoid',
      'approach.avoid.1': 'Over-engineering solutions before the problem is clear',
      'approach.avoid.2': "Premature abstraction — if it's used once, it doesn't need a factory",
      'approach.avoid.3': 'Frameworks for the sake of frameworks',
      'approach.avoid.4': 'Writing tests that test the testing framework, not the product',
      'approach.philosophy.title': 'How I think about building things',
      'approach.philosophy': "Start simple. Test early. Refactor when it hurts — not before. I'd rather ship something that works and improve it than architect something perfect that never launches. Code is meant to be changed; the first version is never the last.",
      'approach.tools': 'Current tools',

      // Section: Lessons
      'lessons.title': 'Lessons I Paid For',
      'lessons.deleted.title': 'The day I deleted a project folder',
      'lessons.deleted.text': "Accidentally wiped a project directory that had a <code>.git</code> repo — and no remote. Lost days of work. Now I push early and often, even on throwaway experiments. Backups aren't paranoia, they're professionalism.",
      'lessons.scope.title': 'Scope is the real enemy',
      'lessons.scope.text': "Spent weeks building an e-learning platform prototype — real-time classrooms, video streaming, the works. It was too much for one person. Learned that the hardest skill isn't building; it's deciding what not to build.",
      'lessons.tests.title': 'Fast tests that lie',
      'lessons.tests.text': 'Built a Playwright test suite that ran in 2 minutes flat. Felt great — until I realized half the tests were flaky and passing by accident. Speed without reliability is just noise. Rewrote them all with proper waits and assertions.',

      // Section: Personal
      'personal.title': 'A Bit More',
      'personal.tools.title': 'Tools I love',
      'personal.tools.text': "VS Code with a minimal setup, Linux for everything, Firefox DevTools for debugging, and the terminal for anything that doesn't need a GUI. I like tools that get out of the way.",
      'personal.focus.title': 'Current focus',
      'personal.focus.text': "Pursuing an engineering degree in Computer Science. Going deeper into architecture patterns, system design, and figuring out how to write code that future-me won't hate.",
      'personal.path.title': 'The path so far',
      'personal.timeline.2022': 'Started Digital Development diploma',
      'personal.timeline.2023': 'First internship — built WordPress sites at Albri Web',
      'personal.timeline.2024': "QA Tester at Involys · Bachelor's in CS",
      'personal.timeline.2025': 'Engineering degree — going deeper',

      // Footer
      'footer.note': 'Built by hand with vanilla HTML, CSS, and JS. No frameworks were harmed.',
    },

    fr: {
      // Nav index
      'nav.top': 'Haut',
      'nav.work': 'Projets',
      'nav.lab': 'Labo',
      'nav.approach': 'Approche',
      'nav.lessons': 'Leçons',
      'nav.me': 'Moi',

      // Landing
      'landing.greeting': 'Salut, je suis',
      'landing.tagline': 'Je construis des choses pour le web et je les casse exprès.',
      'landing.sub': 'Développeur & Testeur QA — J\'écris du code, puis je m\'assure qu\'il fonctionne vraiment.',
      'landing.cv': 'Télécharger le CV',

      // Section: Work
      'work.title': 'Ce que j\'ai construit',

      // fingerWorkout
      'fw.label.problem': 'Le Problème',
      'fw.problem': 'Les outils de pratique de frappe sont ennuyeux et solitaires. On s\'entraîne seul, sans raison de revenir. Pas d\'énergie, pas d\'enjeux.',
      'fw.label.thinking': 'La Réflexion',
      'fw.thinking': 'Et si la pratique de frappe ressemblait à une course ? En temps réel, multijoueur, avec des scores qui se mettent à jour en direct. Rendez-le compétitif et les gens s\'entraîneront vraiment.',
      'fw.label.built': 'Ce que j\'ai construit',
      'fw.built': 'Une application de frappe multijoueur en temps réel avec des salles en direct, des mises à jour de scores instantanées via WebSockets, et du contenu dynamique tiré de l\'API Wikipédia pour ne jamais taper la même chose deux fois. Redis gère le cache, JWT gère l\'authentification.',
      'fw.label.tradeoffs': 'Compromis',
      'fw.tradeoffs': 'Choix de Redis plutôt qu\'un stockage persistant pour les données de session — la vitesse comptait plus que la durabilité ici. Utilisation de Socket.io au lieu de WebSockets bruts pour la reconnexion automatique et le support de fallback. Le poids supplémentaire en vaut la peine.',
      'fw.label.change': 'Ce que je changerais',
      'fw.change': 'Meilleure gestion d\'erreurs sur les déconnexions de sockets — les utilisateurs se retrouvent parfois coincés dans des salles fantômes. J\'ajouterais aussi des classements persistants au lieu de classements par session, et repenser la logique de nettoyage des salles.',

      // YouTube Stream Downloader
      'yt.label.problem': 'Le Problème',
      'yt.problem': 'Chaque téléchargeur YouTube que j\'ai essayé était soit bourré de pubs, louche, ou donnait une qualité médiocre. Je voulais juste la meilleure qualité sans le bruit.',
      'yt.label.thinking': 'La Réflexion',
      'yt.thinking': 'YouTube sert l\'audio et la vidéo comme des flux séparés à la meilleure qualité. Si je les télécharge séparément et les fusionne avec FFmpeg, j\'obtiens le meilleur résultat possible avec un pipeline simple.',
      'yt.label.built': 'Ce que j\'ai construit',
      'yt.built': 'Une application de bureau légère qui télécharge les flux audio et vidéo de la meilleure qualité séparément, les fusionne avec FFmpeg, et donne un résultat propre. Pas de comptes, pas de pubs, pas de superflu.',
      'yt.label.tradeoffs': 'Compromis',
      'yt.tradeoffs': 'Utilisation de pytubefix plutôt que pytube original — plus fiable mais moins documenté. Choix d\'une interface de bureau (pywebview) au lieu d\'une application web car c\'est un outil personnel, pas un produit. La simplicité a gagné.',
      'yt.label.change': 'Ce que je changerais',
      'yt.change': 'Ajouter le téléchargement par lot, une barre de progression plus précise (FFmpeg ne rend pas ça facile), et peut-être un système de file d\'attente pour les gros téléchargements.',

      // YouTube Auto-Pauser
      'yp.label': 'Expérience rapide',
      'yp.text': 'Une extension de navigateur qui met automatiquement en pause les vidéos YouTube quand on change d\'onglet. Petit, utile, et ça répondait à un besoin personnel. Construit en un après-midi, puis un autre après-midi pour le faire marcher sur Firefox aussi.',

      // Section: Lab
      'lab.title': 'Le Labo',
      'lab.subtitle': 'Expériences, idées à moitié cuites, et trucs que j\'explore.',
      'lab.status.exploring': 'exploration',
      'lab.status.thinking': 'réflexion',
      'lab.status.reading': 'lecture',
      'lab.status.building': 'construction',
      'lab.vrt.title': 'Tests de régression visuelle',
      'lab.vrt.text': 'Utiliser Playwright pour détecter les dérives d\'interface entre les déploiements. Comparer des captures d\'écran pixel par pixel est rudimentaire mais étonnamment efficace pour attraper les régressions CSS que les humains ratent.',
      'lab.ws.title': 'Reconnexion WebSocket',
      'lab.ws.text': 'Backoff exponentiel avec jitter ? Ou juste laisser Socket.io gérer ? Creuser ce qui se passe quand une salle multijoueur perd la connexion en pleine course et comment récupérer gracieusement.',
      'lab.ca.title': 'Architecture propre en Express',
      'lab.ca.text': 'Essayer de séparer les responsabilités dans les backends Node.js sans que ça ressemble à du Java d\'entreprise. Le juste milieu entre "tout dans un fichier" et "12 couches d\'abstraction" est dur à trouver.',
      'lab.docker.title': 'Docker pour les environnements de dev',
      'lab.docker.text': 'Mettre en place des environnements de développement reproductibles pour que "ça marche sur ma machine" ne soit plus une excuse. Des fichiers Compose basiques pour des stacks MongoDB + Redis + Node.',

      // Section: Approach
      'approach.title': 'Comment je travaille',
      'approach.good': 'Ce que je fais bien',
      'approach.good.1': 'Tester les choses jusqu\'à ce qu\'elles cassent — et comprendre pourquoi',
      'approach.good.2': 'Construire des fonctionnalités temps réel qui semblent vraiment réactives',
      'approach.good.3': 'Connecter le frontend au backend proprement, sans sur-ingéniérer la colle',
      'approach.good.4': 'Automatiser les tâches ennuyeuses pour que les humains se concentrent sur l\'intéressant',
      'approach.avoid': 'Ce que j\'évite',
      'approach.avoid.1': 'Sur-ingéniérer des solutions avant que le problème soit clair',
      'approach.avoid.2': 'Abstraction prématurée — si c\'est utilisé une fois, ça n\'a pas besoin d\'une factory',
      'approach.avoid.3': 'Des frameworks pour le plaisir d\'utiliser des frameworks',
      'approach.avoid.4': 'Écrire des tests qui testent le framework de tests, pas le produit',
      'approach.philosophy.title': 'Comment je pense la construction',
      'approach.philosophy': 'Commencer simple. Tester tôt. Refactorer quand ça fait mal — pas avant. Je préfère livrer quelque chose qui marche et l\'améliorer plutôt qu\'architecturer quelque chose de parfait qui ne sort jamais. Le code est fait pour être changé ; la première version n\'est jamais la dernière.',
      'approach.tools': 'Outils actuels',

      // Section: Lessons
      'lessons.title': 'Leçons que j\'ai payées',
      'lessons.deleted.title': 'Le jour où j\'ai supprimé un dossier de projet',
      'lessons.deleted.text': 'Supprimé accidentellement un répertoire de projet qui avait un dépôt <code>.git</code> — et aucun remote. Des jours de travail perdus. Maintenant je push tôt et souvent, même sur les expériences jetables. Les sauvegardes ne sont pas de la paranoïa, c\'est du professionnalisme.',
      'lessons.scope.title': 'Le scope est le vrai ennemi',
      'lessons.scope.text': 'Des semaines passées à construire un prototype de plateforme e-learning — salles de cours en temps réel, streaming vidéo, tout le package. C\'était trop pour une seule personne. La compétence la plus difficile n\'est pas de construire ; c\'est de décider quoi ne pas construire.',
      'lessons.tests.title': 'Des tests rapides qui mentent',
      'lessons.tests.text': 'Construit une suite de tests Playwright qui tournait en 2 minutes chrono. Super sensation — jusqu\'à ce que je réalise que la moitié des tests étaient instables et passaient par accident. La vitesse sans la fiabilité n\'est que du bruit. Je les ai tous réécrits avec des attentes et assertions correctes.',

      // Section: Personal
      'personal.title': 'Un peu plus',
      'personal.tools.title': 'Outils que j\'adore',
      'personal.tools.text': 'VS Code avec une configuration minimale, Linux pour tout, Firefox DevTools pour le débogage, et le terminal pour tout ce qui n\'a pas besoin d\'une interface graphique. J\'aime les outils qui ne gênent pas.',
      'personal.focus.title': 'Focus actuel',
      'personal.focus.text': 'En cours d\'obtention d\'un diplôme d\'ingénieur en informatique. Approfondir les patterns d\'architecture, la conception de systèmes, et comprendre comment écrire du code que le moi du futur ne détestera pas.',
      'personal.path.title': 'Le parcours jusqu\'ici',
      'personal.timeline.2022': 'Début du diplôme de Technicien Spécialisé en Développement Digital',
      'personal.timeline.2023': 'Premier stage — création de sites WordPress chez Albri Web',
      'personal.timeline.2024': 'Testeur QA chez Involys · Licence en informatique',
      'personal.timeline.2025': 'Diplôme d\'ingénieur — aller plus loin',

      // Footer
      'footer.note': 'Construit à la main avec du HTML, CSS et JS vanilla. Aucun framework n\'a été maltraité.',
    },
  };

  // Elements with innerHTML (contain <code> tags)
  const htmlKeys = new Set([
    'lessons.deleted.text',
  ]);

  function setLanguage(lang) {
    const strings = translations[lang];
    if (!strings) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        if (htmlKeys.has(key)) {
          el.innerHTML = strings[key];
        } else {
          el.textContent = strings[key];
        }
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update toggle active state
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Persist choice
    localStorage.setItem('portfolio-lang', lang);
  }

  // Init on DOM ready
  function init() {
    const saved = localStorage.getItem('portfolio-lang') || 'en';

    // Bind toggle buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });

    // Apply saved language
    setLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
