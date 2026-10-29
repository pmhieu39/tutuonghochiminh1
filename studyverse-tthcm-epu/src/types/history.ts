export interface SessionQuestionDetail {
  questionId: string;
  selectedOptionId: string | null;
  isCorrect: boolean;
  optionOrder: string[];
}

export interface StudySessionRecord {
  id: string;
  type: 'practice' | 'exam' | 'focus';
  mode: string;
  title: string;
  chapterIds: string[];
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  score: number;
  scale: 10 | 100;
  accuracy: number;
  durationSeconds: number;
  startedAt: string;
  completedAt: string;
  details: SessionQuestionDetail[];
}
