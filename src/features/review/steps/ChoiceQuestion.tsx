import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { defaultFadeInVariants } from '~/constants/motions';
import { type Choice } from '~/hooks/api/surveys/useGetSurveyById';

import BottomNavigation from '../BottomNavigation';
import QuestionHeader from '../QuestionHeader';
import Checkbox from './choice/Checkbox';
import MaxSelectableSmall from './choice/MaxSelectableSmall';
import { type IsLastQuestion, type StepProps } from './type';

interface Props extends StepProps, IsLastQuestion {
  title: string;
  choices: Choice[];
  max_selectable_count: number;
}

const ChoiceQuestion = ({ prev, next, title, max_selectable_count, choices, isLastQuestion = false }: Props) => {
  return (
    <>
      <QuestionHeader title={title} subTitle="예진님이 직접 입력한 질문이에요." />
      <m.section css={sectionCss} variants={defaultFadeInVariants} initial="initial" animate="animate" exit="exit">
        <MaxSelectableSmall max={max_selectable_count} />

        <div css={choiceWrapperCss}>
          {choices.map((choice) => (
            <Checkbox key={choice.choice_id}>{choice.content}</Checkbox>
          ))}
        </div>
      </m.section>
      <BottomNavigation onBackClick={prev} onNextClick={next} isLastQuestion={isLastQuestion} />
    </>
  );
};

export default ChoiceQuestion;

const sectionCss = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding-bottom: 12px;
`;

const choiceWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;

  width: 100%;
  margin-top: 12px;
`;
