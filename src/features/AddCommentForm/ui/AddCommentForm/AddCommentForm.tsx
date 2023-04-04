import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './AddCommentForm.module.scss';
import { Button, Input } from '@/shared/ui';
import {
  useAppDispatch, useAppSelector, useLast, useLazyReducersLoader,
} from '@/shared/lib';
import { LazyReducers } from '@/app/providers';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice';
import { getAddCommentFormText } from '../../model/selectors';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const lazyReducers: LazyReducers = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const { className, onSendComment } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  useLazyReducersLoader(lazyReducers);
  const text = useAppSelector(getAddCommentFormText);
  const lastText = useLast(text);

  const handleChangeCommentText = useCallback((newText: string) => {
    dispatch(addCommentFormActions.setAddCommentFormText(newText));
  }, [dispatch]);

  const handleAddComment = useCallback(() => {
    onSendComment(lastText.current);
    handleChangeCommentText('');
  }, [handleChangeCommentText, lastText, onSendComment]);

  return (
    <div className={clsx([cls.addCommentForm, className])}>
      <Input
        className={cls.input}
        placeholder={t('inputComment')}
        value={text}
        onChange={handleChangeCommentText}
      />
      <Button onClick={handleAddComment}>
        {t('addComment')}
      </Button>
    </div>
  );
};
