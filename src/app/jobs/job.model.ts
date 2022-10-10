/*sets params of the job */

export class Job {
  public name: string;
  public description: string;
  public imagePath: string;
  public company: string;
  public skills: string;

  constructor(name: string, desc: string, imagePath: string, company: string, skills: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.company = company;
    this.skills = skills;
  }
}
