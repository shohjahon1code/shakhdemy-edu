export interface PageModel {
  _id: string;
  alias: string;
  title: string;
  tags: string[];
  description: string;
  hh: HHData;
  advantages: AdvantageData[];
}

export interface HHData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export interface AdvantageData {
  title: string;
  description: string;
  id: string;
}

export enum PageCategory {
  Courses,
  Books,
}
