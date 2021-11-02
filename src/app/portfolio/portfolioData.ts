import {PortfolioCard, PortfolioModal} from '../types/types';

const repository = 'https://github.com';

export let portfolioData: Array<PortfolioCard> = [];
portfolioData.push(new PortfolioCard(
  'Languide', 'Aplikacja do nauki języków obcych.',
  'assets/img/portfolio/languide_small.png',
  new PortfolioModal(
    {
      description: 'The web application for learning foreign languages. The application easily compares the texts from two languages sentence by sentence. This note could have tags and can be saved in a notebook. You can create a dictionary from select words. \n This app won\'t have translation option.',
      features: [
        'Authentication a user',
        'Comparing two texts ',
        'Creating notebook with user articles',
        'Adding words to a dictionary ',
        'Managing user articles and notebooks',
        'Saving to database '
      ],
      technology: 'Spring Boot, Spring MVC, Spring Security, Java 8, Hibernate, H2 database, JUnit, Mockito, Project Lombok, thymeleaf, Bootstrap 4, wordnik API',
      repositoryUrl: new URL('amiroslaw/language', repository),
      projectUrl: new URL('https://languide.herokuapp.com')
    }
  )
));

portfolioData.push(new PortfolioCard(
  'Investing CLI',
  'Aplikacjia CLI pozwalająca monitorować aktywa finansowe.',
  'assets/img/portfolio/investing-small.png',
  new PortfolioModal(
    {
      description: 'The terminal application for tracking financial assets. Motivation for making this application was to try the new java features (java 16), graalVM and fluent process and the framework picocli.  The program supports cryptocurrencies and stock market assets from the YahooFinanceAPI (some Crypto - Crypto trade data are not accessible).',
      features: [
        'tracking financial assets',
        'creating a portfolio with holdings',
        'calculating profit',
        'adding alerts',
        'support cryptocurrency and GPW'
      ],
      technology: 'Java 16, graalVM, jsoup, picocli, unirest java, fluent process.',
      repositoryUrl: new URL('amiroslaw/investing-cli', repository)
    }
  )
));

portfolioData.push(new PortfolioCard(
  'ePortfel',
  'Elektroniczy portfel do zarządzania budżetem domowym.',
  'assets/img/portfolio/chart_eportfel_small.png',
  new PortfolioModal(
    {
      description: 'The electronic wallet was created using javaFX technology. Use it to manage your personal accounts. The application implements a <a href="https://en.wikipedia.org/wiki/Double-entry_bookkeeping_system" target="_blank" rel="nofollow">Double-entry bookkeeping system</a>. The program is cross-platform software, built in Java 8',
      features: [
        'creating a wallet',
        'creating a user profile',
        'logging in to a user profile',
        'managing wallets',
        'saving in to a database',
        'creating reports',
      ],
      technology: 'Java 8, JavaFX, Scene Builder, SQLite, JDBC. The application was written in MVC pattern.',
      repositoryUrl: new URL('amiroslaw/ePortfel', repository)
    }
  )
));

portfolioData.push(new PortfolioCard(
  'Gamification for Android',
  'Aplikacja motywacyjna, która używa metody "grywalizacji".',
  'assets/img/portfolio/android_small.jpg',
  new PortfolioModal(
    {
      description: 'The motivational application uses the "<a href="https://en.wikipedia.org/wiki/Gamification" rel="nofollow">gamification</a>" method. The program was written in Android.',
      features: [
        'creating a deck of cards',
        'managing decks',
        'saving to database',
        'editing cards',
        'help',
      ],
      technology: 'SQLite, ORMLite, butterknife, junit, espresso test, picasso. The application was written in the MVP pattern.',
      repositoryUrl: new URL('amiroslaw/Gamification-android', repository)
    }
  )
));

portfolioData.push(new PortfolioCard(
  'Grywalizacja', 'Aplikacja motywacyjna. Wersja na komputery stacjonarne.',
  'assets/img/portfolio/draw_grywalizacja_small.png',
  new PortfolioModal(
    {
      description: 'The motivational application uses the "<a href="https://en.wikipedia.org/wiki/Gamification" target="_blank" rel="nofollow">gamification</a>" method. The program was written in Java 8 and JavaFX technology.',
      features: [
        'creating a deck of cards',
        'editing cards',
        'managing decks',
        'saving to database'
      ],
      technology: 'Java 8, JavaFX, Scene Builder, SQLite, ORMLite, JDBC, The application was written in the MVC pattern.',
      repositoryUrl: new URL('amiroslaw/grywalizacja', repository)
    }
  )
));

portfolioData.push(new PortfolioCard(
  'Review',
  'Aplikacja RESTful do rewidowania postępów w osiąganiu swoich celów',
  'assets/img/portfolio/restful_small.png',
  new URL('amiroslaw/review', repository
  )));

// WEBSITES
portfolioData.push(new PortfolioCard(
    'Uprawnienia budowlane',
    'Strona oparta na Materialize CSS framework',
    'assets/img/portfolio/budowlanka-small.png',
    new URL('http://miroslawdm.cluster021.hosting.ovh.net/uprawnienia-budowlane/')
  )
)

portfolioData.push(new PortfolioCard(
    'Philipa Dalton',
    'Strona dla nauczyciela',
    'assets/img/portfolio/philippa_site_small.png',
    new URL('http://miroslawdm.cluster021.hosting.ovh.net/pdalton/')
// new URL('http://philippadalton.uk/')
  )
);

portfolioData.push(new PortfolioCard(
  'Myasthenia',
  'Strona promująca aplikację mobilną',
  'assets/img/portfolio/myasthenia-small.png',
  new URL('http://miroslawdm.cluster021.hosting.ovh.net/myasthenia/')
  )
)

portfolioData.push(new PortfolioCard(
    'NoStress',
    'Strona CMS dla zespołu muzycznego opartego na Wordpress',
    'assets/img/portfolio/nostress_small.jpg',
    new URL('http://zespol-nostress.pl/')
  )
);

portfolioData.push(new PortfolioCard(
  'Landing page',
  'Platformy edukacyjnej',
  'assets/img/portfolio/elearning_small.png',
  new PortfolioModal(
    {
      description: 'Landing page dla platformy edukacyjnej. Nieaktualna już strona platformy edukacyjnej <a href="https://zdobywcywiedzy.pl/">Zdobywcy wiedzy</a>. Niestety nie mogę pokazać funkcjonalności strony.',
      screenshotsPath: [
        'assets/img/portfolio/zdobywcy_all.png'
      ]
    }
  )
));

// GRY
const gameDescription = 'Aplikacja dla platformy edukacyjnej <a href="https://zdobywcywiedzy.pl/" target="_blank">Zdobywcy wiedzy</a>';

portfolioData.push(new PortfolioCard(
  'Type Fast',
  'Gra edukacyjna na pisanie słówek',
  'assets/img/portfolio/games/wpisz_animal_small.png',
  new PortfolioModal(
    {
      description: 'Gra edukacyja ćwicząca pisanie słówek. ' + gameDescription,
      screenshotsPath: [
        'assets/img/portfolio/games/wpisz_game.png',
        'assets/img/portfolio/games/wpisz_animal_full.png'
      ]
    }
  )
));

portfolioData.push(new PortfolioCard(
  'Zgadywanka',
  'Gra edukacyjna - wisielec',
  'assets/img/portfolio/games/wisielec_food_small.png',
  new PortfolioModal(
    {
      description: gameDescription,
      screenshotsPath: [
        'assets/img/portfolio/games/wisielec_menu.png',
        'assets/img/portfolio/games/wisielec_food_full.png'
      ]
    }
  )
));

portfolioData.push(new PortfolioCard(
  'Alien',
  'Platformowa gra edukacyjna',
  'assets/img/portfolio/games/platforma_small.png',
  new PortfolioModal(
    {
      description: 'Platformowa gra edukacyjna. ' + gameDescription,
      screenshotsPath: [
        'assets/img/portfolio/games/platforma_menu.png',
        'assets/img/portfolio/games/platforma_game.png'
      ]
    }
  )
));
