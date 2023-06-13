import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { get } from '~/libs/api';
import { type Choice, type QuestionFormType } from '~/remotes/question';

interface DefaultFeedback {
  feedback_id: number;
  created_at: string;
  is_read: boolean;
  reviewer: ReviewerWithId;
}

interface ChoiceFeedback extends DefaultFeedback {
  choice_id: number[];
}

interface ShortFeedback extends DefaultFeedback {
  reply: string[];
}

interface DefaultQuestionFeedback {
  question_id: number;
  order: number;
  form_type: QuestionFormType;
  title: string;
}

interface ChoiceQuestionFeedback extends DefaultQuestionFeedback {
  type: 'choice';
  choices: Choice[];
  feedbacks: ChoiceFeedback[];
}

interface ShortQuestionFeedback extends DefaultQuestionFeedback {
  type: 'short';
  feedbacks: ShortFeedback[];
}

interface Response {
  question_feedback: (ChoiceQuestionFeedback | ShortQuestionFeedback)[];
}

const useGetAllFeedbacksBySurveyId = (surveyId: string, options?: UseQueryOptions<Response>) => {
  return useQuery<Response>({
    queryKey: ['feedbacks', surveyId],
    queryFn: () => get<Response>(`/feedbacks?survey-id=${surveyId}`),
    ...options,
  });
};

export default useGetAllFeedbacksBySurveyId;
