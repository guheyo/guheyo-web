'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useGroup } from '@/hooks/use-group';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { findProductCategory } from '@/lib/group/find-product-category';
import { findDefaultProductCategory } from '@/lib/group/find-default-product-category';
import { findDealLabel } from '@/lib/deal/find-deal-label';
import { Deal } from '@/lib/deal/deal.types';
import { DEAL_OPTIONS } from '@/lib/deal/deal.constants';
import TextInput from '../inputs/text-input';
import ButtonInputs from '../inputs/button-inputs';

type FormValues = {
  name: string;
  dealType: Deal;
  categoryId: string;
  price: number;
  description: string;
};

export default function OfferForm() {
  const { group } = useGroup();
  const { handleSubmit, formState, control, watch, setValue } =
    useForm<FormValues>({
      defaultValues: {
        name: '',
        dealType: 'offer',
        categoryId: '',
        price: 0,
        description: '',
      },
    });
  const dealType = watch('dealType');
  const categoryId = watch('categoryId');
  const device = useDeviceDetect();

  useEffect(() => {
    setValue(
      'categoryId',
      findDefaultProductCategory(group?.productCategories)?.id || '',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group?.id]);

  if (!group) return <div />;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO
  };

  const onError: SubmitErrorHandler<FormValues> = (error) => {
    // TODO
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-8"
    >
      <TextInput
        control={control}
        name="name"
        textInputProps={{
          label: {
            name: '제목',
            style: 'text-base text-light-200 font-bold',
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '제목',
          InputProps: {
            sx: {
              color: '#f2f3ed',
              borderRadius: 2,
              fontSize: device === 'mobile' ? '16px' : '18px',
              backgroundColor: '#404146',
              fontWeight: 600,
              minWidth: device === 'mobile' ? 360 : 550,
            },
          },
        }}
      />

      <ButtonInputs
        control={control}
        name="dealType"
        buttonProps={{
          variant: 'contained',
          disableRipple: true,
        }}
        optionsProps={{
          options: DEAL_OPTIONS.map((option) => ({
            ...option,
            selected: dealType === option.value,
          })),
          label: {
            name: '거래 유형',
            style: 'text-base text-light-200 font-bold',
          },
          button: {
            defaultStyle:
              'text-light-200 bg-dark-400 hover:bg-dark-200 font-bold text-xs md:text-sm rounded-lg',
            selectedStyle:
              'text-dark-700 bg-light-200 hover:bg-light-200 font-bold text-xs md:text-sm rounded-lg',
          },
        }}
      />

      <ButtonInputs
        control={control}
        name="categoryId"
        buttonProps={{
          variant: 'contained',
          disableRipple: true,
        }}
        optionsProps={{
          options: group.productCategories.map((category) => ({
            value: category.id,
            label: category.name,
            selected: categoryId === category.id,
          })),
          label: {
            name: '카테고리',
            style: 'text-base text-light-200 font-bold',
          },
          button: {
            defaultStyle:
              'text-light-200 bg-dark-400 hover:bg-dark-200 font-bold text-xs md:text-sm rounded-lg',
            selectedStyle:
              'text-dark-700 bg-light-200 hover:bg-light-200 font-bold text-xs md:text-sm rounded-lg',
          },
        }}
      />

      <TextInput
        control={control}
        name="price"
        textInputProps={{
          label: {
            name: '가격',
            style: 'text-base text-light-200 font-bold',
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '가격',
          InputProps: {
            startAdornment: <div className="pr-2">₩</div>,
            sx: {
              color: '#f2f3ed',
              borderRadius: 2,
              fontSize: device === 'mobile' ? '16px' : '18px',
              backgroundColor: '#404146',
              fontWeight: 600,
              minWidth: device === 'mobile' ? 360 : 550,
            },
          },
        }}
      />

      <TextInput
        control={control}
        name="description"
        textInputProps={{
          label: {
            name: '제품 설명',
            style: 'text-base text-light-200 font-bold',
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: `${findDealLabel(dealType)}할 ${findProductCategory(
            group.productCategories,
            {
              id: categoryId,
            },
          )
            ?.name} 제품을 자세히 소개해 주세요.\n\n특이 사항이 있을 경우 근접 사진을 첨부해 주세요.`,
          InputProps: {
            sx: {
              color: '#f2f3ed',
              borderRadius: 2,
              fontSize: '16px',
              backgroundColor: '#404146',
              fontWeight: 600,
              minWidth: device === 'mobile' ? 360 : 550,
            },
          },
          multiline: true,
          minRows: 10,
        }}
      />

      <Button
        className="text-light-200 bg-star-500 hover:bg-star-400 text-lg font-bold"
        onClick={handleSubmit(onSubmit)}
      >
        작성 완료
      </Button>
    </form>
  );
}
