'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { MouseEventHandler, useState } from 'react';
import {
  ABSOLUTE_SUBMIT_BUTTON_STYLE,
  DEFAULT_LABEL_STYLE,
} from '@/lib/input/input.styles';
import {
  getInputTextFontSize,
  getInputTextMinWidth,
} from '@/lib/input/input.props';
import {
  DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
  DEFAULT_INPUT_TEXT_COLOR,
} from '@/lib/input/input.colors';
import { updateUser } from '@/lib/api/user';
import DiscordLoginDialog from '../auth/discord-login-dialog';
import { ProfileFormValues } from './setting.interfaces';
import TextInput from '../inputs/text-input';
import AlertDialog from '../base/alert-dialog';

export default function SettingProfileForm({
  prevFormValues,
}: {
  prevFormValues: ProfileFormValues;
}) {
  const device = useDeviceDetect();
  const [open, setOpen] = useState(false);

  const { handleSubmit, control } = useForm<ProfileFormValues>({
    defaultValues: {
      ...prevFormValues,
    },
  });

  const handleSubmitError: SubmitErrorHandler<ProfileFormValues> = (errors, event) => {
    // TODO
  };

  const handleAuthorization: MouseEventHandler = () => {
    // Do nothing
  };

  const handleOnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const handleSubmitValid: SubmitHandler<ProfileFormValues> = async (
    values,
  ) => {
    await updateUser({
      id: values.id,
      about: values.about,
    });
    setOpen(true);
  };

  const handleClose: MouseEventHandler = (e) => {
    setOpen(false);
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <TextInput
        name="about"
        control={control}
        rules={{ required: '소개를 작성해 주세요' }}
        textInputProps={{
          label: {
            name: '내 소개',
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '방문하는 멤버들에게 좋은 인상을 남겨주세요',
          InputProps: {
            sx: {
              color: DEFAULT_INPUT_TEXT_COLOR,
              borderRadius: 2,
              fontSize: getInputTextFontSize(device),
              backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
              fontWeight: 600,
              minWidth: getInputTextMinWidth(device),
            },
            multiline: true,
            minRows: 2,
            maxRows: 2,
          },
        }}
      />

      <div className={ABSOLUTE_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name="수정하기"
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleOnAuthorization}
        />
      </div>
      <AlertDialog open={open} text="수정되었어요!" handleClose={handleClose} />
    </form>
  );
}
