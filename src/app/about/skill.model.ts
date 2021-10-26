export class Skill {
  constructor(public name: string, public tooltip: string, public skillLevel: number, public titleColor: string, public barColor: string) {
  }

  static skills: Array<Skill> = [
    new Skill('Java', 'Liferay, Spring Boot, JSP, JavaFX, Android ', 80, '#27ae60', '#2ecc71'),
    new Skill('SQL', 'Hibernate, SQLite, ORMLite, MySql', 60, '#2980b9', '#3498db'),
    new Skill('Testing', 'jUnit, Selenium, Mockito', 40, '#46465e', '#5a68a5'),
    new Skill('HTML5 CSS3', 'Bootstrap 5, FreeMarker', 65, '#d35400', '#e67e22'),
    new Skill('JavaScript', 'jQuery, Angular, TS', 35, '#FFA000', '#FFC107'),
    new Skill('Construct', 'Construct', 60, '#7B1FA2', '#9C27B0')
  ];

}




















































