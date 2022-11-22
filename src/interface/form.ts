export interface IForm {
  readonly id: number;
  readonly user_id: number;
  name: string;
  visible: boolean;
  priority: number;
  questions: unknown[];
}

export interface IQuestion {
  readonly id: number;
  readonly form_id: number;
  question: string;
  visible: boolean;
  priority: number;
  options: unknown[];
}

export interface IOption {
  readonly id: number;
  readonly question_id: number;
  name: string;
  visible: boolean;
  priority: number;
}
