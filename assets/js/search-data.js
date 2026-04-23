// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-prosa",
          title: "Prosa",
          description: "Eine wachsende Sammlung verschiedener Texte von mir.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/prosa/";
          },
        },{id: "dropdown-bücher",
              title: "Bücher",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-news",
              title: "News",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/news/";
              },
            },{id: "dropdown-wie-funktionierts",
              title: "Wie funktionierts?",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/wie-funktionierts/";
              },
            },{id: "dropdown-cv",
              title: "CV",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://www.linkedin.com/in/max-stridde/";
              },
            },{id: "post-zwei-abenteuer-nahe-mailand",
        
          title: "Zwei Abenteuer nahe Mailand",
        
        description: "Wie ich spontan meinen ersten Klettersteig absolvierte und mit zwei Freunden eine Fahrrartour in den Bergen unternahm.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Zwei-Abenteuer-nahe-Mailand/";
          
        },
      },{id: "post-warum-ich-nach-nur-1-woche-mein-zimmer-wechseln-musste-unfreiwillig",
        
          title: "Warum ich nach nur 1 Woche mein Zimmer wechseln musste - unfreiwillig",
        
        description: "Eine Reihe unvorhergesehener Ereignisse führte dazu, dass ich mein Zimmer unter höchst ungünstigen Umständen wechseln musste.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Zimmerwechsel/";
          
        },
      },{id: "post-hallo-mailand-meine-ersten-tage-in-italien",
        
          title: "Hallo Mailand - meine ersten Tage in Italien",
        
        description: "Meine Reise nach Italien und die ersten Eindrücke von Mailand.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Hallo-Mailand/";
          
        },
      },{id: "post-der-anfang-dieses-blogs",
        
          title: "Der Anfang dieses Blogs",
        
        description: "Warum schreibe ich einen Blog? Das ist eine gute Frage!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Der-Anfang-dieses-Blogs/";
          
        },
      },{id: "books-small-things-like-these",
          title: 'Small Things Like These',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/small_things_like_these/";
            },},{id: "news-milano-ich-komme-die-olympischen-winterspiele-sind-gerade-vorrüber-der-frühlling-kann-kommen-ein-spannendes-semester-liegt-vor-mir-um-6-uhr-ging-es-heute-morgen-los-von-köln-um-16-00-hat-mich-mailand-willkommen-geheißen-ich-freue-mich-auf-die-zeit-die-vor-mir-liegt",
          title: 'Milano, ich komme. Die Olympischen Winterspiele sind gerade vorrüber. Der Frühlling kann kommen....',
          description: "",
          section: "News",},{id: "news-heute-ist-ein-großer-tag-denn-ich-ziehe-in-mein-studentenwohnheim-vom-gemütlichen-familienleben-bei-carlo-gehts-jetzt-näher-an-meine-uni-dafür-werde-ich-ab-heute-mein-zimmer-teilen-müssen-ich-bin-gespannt-mit-wem-ich-bis-zum-sommer-in-einem-zimmer-schlafen-werde-und-freue-mich-darauf-mein-regal-und-meine-ecke-einzuräumen",
          title: 'Heute ist ein großer Tag, denn ich ziehe in mein Studentenwohnheim. Vom gemütlichen...',
          description: "",
          section: "News",},{id: "news-ich-wünsche-allen-frauen-auf-der-welt-einen-schönen-tag-und-besonders-viele-blumen-sowie-kreative-ich-übernehme-heute-mal-das-putzen-oder-ich-bring-dir-einmal-frühstück-ans-bett-geschenkgutscheine-heute-morgen-habe-ich-mich-zu-männer-sind-schweine-rasiert-gleich-gehts-mit-freunden-in-die-biblioteca-ambrosiana-wo-frauen-heute-gratis-eintritt-bekommen-heut-abend-gehe-ich-mit-meinem-vater-der-in-mailand-zu-besuch-ist-lecker-essen-was-für-ein-schöner-tag",
          title: 'Ich wünsche allen Frauen auf der Welt einen schönen Tag und besonders viele...',
          description: "",
          section: "News",},{id: "news-ich-halts-nicht-mehr-aus-in-italien-ich-brauche-eine-pause-in-deutschland-endlich-wieder-schwarzbrot-essen-endlich-wieder-regen-nein-spaß-für-ein-wissenschaftliches-kolleg-zum-thema-mathematische-optimierung-mache-ich-mich-auf-den-weg-in-die-schöne-stadt-weimar-die-uni-muss-eine-woche-lang-auf-mich-warten-ändern-lässt-sich-das-leider-nicht-ich-freue-mich-auf-die-arbeits-zeit-vor-ort-aber-auch-auf-die-rückkehr-nach-mailand-die-bahnreise-durch-die-diesmal-verschneite-schweiz-ist-für-mich-mal-wieder-mit-genüsslichen-blicken-aus-dem-fenster-verbunden",
          title: 'Ich halts nicht mehr aus in Italien, ich brauche eine Pause in Deutschland....',
          description: "",
          section: "News",},{id: "news-freut-euch-und-wartet-noch-ein-wenig-länger-auf-den-nächsten-post-das-heißt-natürlich-nicht-dass-es-aktuell-nichts-zu-berichten-gäbe-ich-würde-gerne-sagen-dass-mir-bei-all-den-vielen-erlebnissen-gar-keine-zeit-bleibt-um-am-blog-zu-schreiben-während-dies-an-manchen-tagen-stimmt-kommt-mir-auch-die-erste-klausurphase-dazwischen-in-italien-gibt-es-bereits-zur-hälfte-des-semesters-prüfungen-die-auch-zur-hälfte-in-die-endnote-einzählen-obendrein-schreibe-ich-gerade-an-mehreren-texten-gleichzeitig-bald-geht-es-also-weiter",
          title: 'Freut euch (und wartet) noch ein wenig länger auf den nächsten Post :)....',
          description: "",
          section: "News",},{id: "projects-kämpfen-für-die-liebe",
          title: 'Kämpfen für die Liebe',
          description: "Über die Verflechtungenen zwischen Kampfsport und Beziehungen.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kaempfen/";
            },},{id: "projects-der-panther-in-dir",
          title: 'Der Panther in dir',
          description: "Mein Versuch, ein Gedicht umzuschreiben, ist gescheitert. Inzwischen freue ich mich sogar darüber.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/panther/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%78%73%74%72%69%64%64%65@%75%6E%69-%62%6F%6E%6E.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/max-stridde", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
