export function calculateExamScore(
  correctCount: number,
  totalQuestions: number,
  scale: 10 | 100 = 10
): { score: number; accuracy: number } {
  if (totalQuestions <= 0) return { score: 0, accuracy: 0 };
  const rawScore = (correctCount / totalQuestions) * scale;
  return {
    score: Number(rawScore.toFixed(2)),
    accuracy: Math.round((correctCount / totalQuestions) * 100),
  };
}
