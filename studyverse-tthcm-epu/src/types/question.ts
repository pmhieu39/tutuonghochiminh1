export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type DifficultyCode = 'DE' | 'TB' | 'KH';

export interface QuestionOption {
  id: string;
  originalLabel: string;
  text: string;
}

export interface QuestionExplanation {
  correctSummary: string;
  essence: string;
  optionAnalysis: Record<string, string>;
  keyTakeaway: string;
  memoryTip: string;
  verificationNote: string;
}

export interface Question {
  id: string;
  seq: number;
  subjectId: string;
  chapterId: string;
  sourceNumber: string;
  sourceReference: string;
  question: string;
  options: QuestionOption[];
  correctOptionIds: string[];
  explanation: QuestionExplanation;
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  difficultyCode: DifficultyCode;
  tags: string[];
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChapterMeta {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  topicSummary: string;
}
