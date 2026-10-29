export interface ExamConfig {
  subjectId: string;
  chapterIds: string[];
  questionCount: number;
  durationMinutes: number;
  scale: 10 | 100;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  allowBackNavigation: boolean;
  allowSkip: boolean;
  showCountdown: boolean;
  autoSubmitOnTimeout: boolean;
  showExplanationAfterSubmit: boolean;
  layoutMode: 'single' | 'all';
  verifiedOnly: boolean;
}

export interface ActiveExamItem {
  questionId: string;
  optionOrder: string[];
  selectedOptionId: string | null;
  flagged: boolean;
  isCorrect?: boolean;
}

export interface ActiveExamSession {
  id: string;
  title: string;
  config: ExamConfig;
  startedAtMs: number;
  startedAtIso: string;
  endTimestampMs: number;
  durationSeconds: number;
  currentIndex: number;
  items: ActiveExamItem[];
  submitted: boolean;
  submittedAtIso: string | null;
  timeUsedSeconds: number;
}
