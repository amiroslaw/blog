import {PortfolioCard, PortfolioModal} from '../types/types';

const repository = 'https://github.com';

export let appsData: Array<PortfolioCard> = [];
appsData.push(new PortfolioCard(
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

appsData.push(new PortfolioCard(
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

appsData.push(new PortfolioCard(
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

appsData.push(new PortfolioCard(
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

appsData.push(new PortfolioCard(
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

appsData.push(new PortfolioCard(
  'Review',
  'Aplikacja RESTful do rewidowania postępów w osiąganiu swoich celów',
  'assets/img/portfolio/restful_small.png',
  new URL('amiroslaw/review', repository
  )));

// appsData.push(new PortfolioCard(
//   '',
//   '',
//   '',
//   new PortfolioModal(
//     {
//       description: '',
//       features: [
//       ],
//       technology: '',
//       repositoryUrl: new URL('amiroslaw/', repository)
//     }
//   )
// ))
