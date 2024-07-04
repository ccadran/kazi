export interface Category {
  id: number;
  title: string;
  cover: string;
  video?: string;
  short_description: string;
  long_description: string[];
}

export interface Subtheme {
  id: number;
  category_id: number;
  title: string;
  cover: string;
  video?: string;
  shortDescription: string;
  longDescription: string[];
  UsefulLinks: string[];
}

export interface Quiz {
  id: number;
  subtheme_id: number;
  content: {
    question: string;
    answers: {
      answer: string;
      isCorrect: boolean;
    };
    explication: string;
  };
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export interface UserQuiz {
  id: number;
  user_id: number;
  name: string;
  results: number;
  description: string;
  content: {
    question: string;
    answers: {
      answer: string;
      isCorrect: boolean;
    };
    explication: string;
  }[];
  last_played_at: string;
  created_at: string;
  is_saved: boolean;
}
