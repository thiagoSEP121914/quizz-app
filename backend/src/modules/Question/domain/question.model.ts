export type Question = {
  id?: string;

  question: string;

  questionType: string;

  multipleCorrect: boolean;

  options: {
    id: number;
    text: string;
  }[];

  correctAnswers: number[];

  explanation?: string;

  category: string;

  services: string[];

  difficulty: string;

  exam: string;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
};
