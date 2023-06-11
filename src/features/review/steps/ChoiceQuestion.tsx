import { type ChangeEventHandler } from 'react';
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
  nickname: string;
  title: string;
  selectedChoicesId: number[];
  choices: Choice[];
  max_selectable_count: number;
  setChoices: (setStateAction: (prevState: number[]) => number[]) => void;
}

const ChoiceQuestion = ({
  nickname,
  prev,
  next,
  title,
  max_selectable_count,
  selectedChoicesId,
  choices,
  setChoices,
  isLastQuestion = false,
}: Props) => {
  const { onChange } = useChoices({ max_selectable_count, selectedChoicesId, setChoices });

  return (
    <>
      <QuestionHeader title={title} subTitle={`${nickname}님이 직접 입력한 질문이에요.`} />
      <m.section css={sectionCss} variants={defaultFadeInVariants} initial="initial" animate="animate" exit="exit">
        <MaxSelectableSmall max={max_selectable_count} />

        <div css={choiceWrapperCss}>
          {choices.map(({ choice_id, content }) => (
            <Checkbox
              key={choice_id}
              value={choice_id}
              onChange={onChange}
              checked={selectedChoicesId.some((checkedChoiceId) => checkedChoiceId === choice_id)}
            >
              {content}
            </Checkbox>
          ))}
        </div>
      </m.section>
      <BottomNavigation onBackClick={() => prev?.()} onNextClick={() => next?.()} isLastQuestion={isLastQuestion} />
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

type UseChoicesProps = Pick<Props, 'max_selectable_count' | 'selectedChoicesId' | 'setChoices'>;

const useChoices = ({ max_selectable_count, selectedChoicesId, setChoices }: UseChoicesProps) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const choiceId = Number(e.target.value);

    if (!e.target.checked) {
      setChoices((prev) => prev.filter((prevChoiceId) => prevChoiceId !== choiceId));

      return;
    }

    if (selectedChoicesId.length >= max_selectable_count) {
      setChoices((prev) => [...prev.slice(1), choiceId]);

      return;
    }

    setChoices((prev) => [...prev, choiceId]);
  };

  return { onChange };
};
