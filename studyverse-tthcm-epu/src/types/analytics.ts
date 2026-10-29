export interface ChapterStat {
  id: string;
  code: string;
  shortTitle: string;
  title: string;
  total: number;
  learned: number;
  unlearned: number;
  mastered: number;
  wrongActive: number;
  attempts: number;
  correctAttempts: number;
  accuracy: number;
}

export interface DailyStudyLogEntry {
  studySeconds: number;
  pomodoroCount: number;
  breakSeconds: number;
  questionsAnswered: number;
  correctAnswered: number;
}
