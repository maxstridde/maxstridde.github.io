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
        },{id: "nav-projekte",
          title: "Projekte",
          description: "Eine wachsende Sammlung verschiedener Ideen von mir.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bücher",
          title: "Bücher",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
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
            },{id: "post-wie-ich-mailand-beschreiben-würden-wenn-ich-keine-worte-benutzen-dürfte",
        
          title: "Wie ich Mailand beschreiben würden, wenn ich keine Worte benutzen dürfte.",
        
        description: "Ein Bild sagt mehr als tausend Worte, heißt es. Dann müssten neun Bilder ja bei weitem reichen, um meinen Eindruck von Mailand zu vermitteln.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Mailand-in-neun-Bildern/";
          
        },
      },{id: "post-warum-mailand-solch-eine-lebenswerte-stadt-ist",
        
          title: "Warum Mailand solch eine Lebenswerte Stadt ist",
        
        description: "Gute Stadtplanung ist keine Raketenwissenschaft. Es gelten nur die selben Anforderungen wie für Siedlungen auf dem Mars.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Was-macht-Mailand-so-lebenswert/";
          
        },
      },{id: "post-das-a-b-c-der-keyboard-shortcuts",
        
          title: "Das A-B-C der Keyboard Shortcuts",
        
        description: "Wer Tastaturkürzel kennt, spart täglich ein paar Minuten. Hier sind die grundlegenden Shortcuts, die auf jedem Laptop funktionieren.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/projects/Das-ABC-der-Keyboard-Shortcuts/";
          
        },
      },{id: "post-mobilität-in-mailand",
        
          title: "Mobilität in Mailand",
        
        description: "Ein Überblick über die verschiedenen Verkehrsmittel und Fortbewegungsmöglichkeiten in Mailand.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Mobilit%C3%A4t-in-Mailand/";
          
        },
      },{id: "post-wie-optimiert-man-seine-waschkosten-eine-mathematische-analyse",
        
          title: "Wie optimiert man seine Waschkosten? Eine mathematische Analyse",
        
        description: "Die Waschmaschinen in meinem Studentenwohnheim werben mit einem Abomodell. Ich habe die mögliche Kostenersparnis durchgerechnet und stieß auf die unangenehme Wahrheit...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Wie-optimiert-man-Waschkosten/";
          
        },
      },{id: "post-die-top-12-sehenswürdigkeiten-in-mailand",
        
          title: "Die Top-12-Sehenswürdigkeiten in Mailand",
        
        description: "Das schönste an Mailand? Alles drumherum. Meine Tipps für Sehenswürdigkeiten in der Stadt und Ausflüge ins Umland :).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Die-Top-12-Sehensw%C3%BCrdigkeiten-in-Mailand/";
          
        },
      },{id: "post-was-macht-ein-erasmusstudent-alles-in-mailand",
        
          title: "Was macht ein Erasmusstudent alles in Mailand?",
        
        description: "In Mailand gibt es so einiges zu tun. In diesem Blopost berichte ich von einigen kuriosen Erlebnissen, mit denen ich vor meiner Ankunft nicht gerechnet hätte.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Erasmusstudent-in-Mailand/";
          
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
      },{id: "books-briefe-vom-weihnachtsmann",
          title: 'Briefe vom Weihnachtsmann',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/briefe_vom_weihnachtsmann/";
            },},{id: "books-über-die-heiterkeit-in-schwierigen-zeiten",
          title: 'Über die Heiterkeit in schwierigen Zeiten',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ueber_die_heiterkeit/";
            },},{id: "books-der-kelch-der-götter",
          title: 'Der Kelch der Götter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/der_kelch_der_goetter/";
            },},{id: "books-die-vermessung-der-welt",
          title: 'Die Vermessung der Welt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/die_vermessung_der_welt/";
            },},{id: "books-die-burg",
          title: 'Die Burg',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/die_burg/";
            },},{id: "books-small-things-like-these",
          title: 'Small Things Like These',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/small_things_like_these/";
            },},{id: "books-vom-ende-der-einsamkeit",
          title: 'Vom Ende der Einsamkeit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/vom_ende_der_einsamkeit/";
            },},{id: "books-siddhartha",
          title: 'Siddhartha',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/siddhartha/";
            },},{id: "books-pi-mal-daumen",
          title: 'Pi mal Daumen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/pi_mal_daumen/";
            },},{id: "books-adressat-unbekannt",
          title: 'Adressat unbekannt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/adressat_unbekannt/";
            },},{id: "books-moralische-ambition",
          title: 'Moralische Ambition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/moralische_ambition/";
            },},{id: "books-the-gospel-of-wealth",
          title: 'The Gospel of Wealth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_gospel_of_wealth/";
            },},{id: "books-ordinary-monsters",
          title: 'Ordinary Monsters',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ordinary_monsters/";
            },},{id: "books-round-ireland-with-a-fridge",
          title: 'Round Ireland with a Fridge',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/round_ireland_with_a_fridge/";
            },},{id: "books-homers-letzter-satz",
          title: 'Homers letzter Satz',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/homers_letzter_satz/";
            },},{id: "books-lichtungen",
          title: 'Lichtungen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lichtungen/";
            },},{id: "books-25-letzte-sommer",
          title: '25 letzte Sommer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/25_letzte_sommer/";
            },},{id: "books-il-piccolo-principe",
          title: 'Il Piccolo Principe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/il_piccolo_principe/";
            },},{id: "projects-das-a-b-c-der-keyboard-shortcuts",
          title: 'Das A-B-C der Keyboard Shortcuts',
          description: "Wer Tastaturkürzel kennt, spart täglich ein paar Minuten. Hier sind die grundlegenden Shortcuts, die auf jedem Laptop funktionieren.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Das-ABC-der-Keyboard-Shortcuts/";
            },},{id: "projects-kämpfen-für-die-liebe",
          title: 'Kämpfen für die Liebe',
          description: "Über die Verflechtungenen zwischen Kampfsport und Beziehungen.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kaempfen/";
            },},{id: "projects-der-panther-in-dir",
          title: 'Der Panther in dir',
          description: "Mein Versuch, ein Gedicht umzuschreiben, ist gescheitert. Inzwischen freue ich mich sogar darüber.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/panther/";
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
