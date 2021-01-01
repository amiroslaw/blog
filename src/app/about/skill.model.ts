export class Skill {
  constructor(public name: string, public tooltip: string, public skillLevel: number, public titleColor: string, public barColor: string) {
  }

  static skills: Array<Skill> = [
    new Skill('Java', 'Android, Spring Boot, JavaFX', 75, '#27ae60', '#2ecc71'),
    new Skill('SQL', 'Hibernate, SQLite, ORMLite, MySql', 50, '#2980b9', '#3498db'),
    new Skill('Testing', 'jUnit, Mockito', 30, '#46465e', '#5a68a5'),
    new Skill('HTML5 CSS3', 'Bootstrap 4', 55, '#d35400', '#e67e22'),
    new Skill('Java Script', 'jQuery', 30, '#FFA000', '#FFC107'),
    new Skill('Construct', 'Construct', 60, '#7B1FA2', '#9C27B0')
  ];

}




















































