import { Question } from '../types/question';

export function validateQuestionImport(raw: unknown): Question[] {
  if (!Array.isArray(raw)) {
    throw new Error('Dữ liệu nhập vào phải là một mảng JSON các câu hỏi.');
  }
  return raw.filter((item): item is Question => {
    return Boolean(
      item &&
      typeof item === 'object' &&
      typeof (item as Question).question === 'string' &&
      Array.isArray((item as Question).options) &&
      (item as Question).options.length >= 2
    );
  });
}
