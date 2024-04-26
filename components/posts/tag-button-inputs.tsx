'use client';

import { UserReviewFormValues } from '@/lib/offer/offer.interfaces';
import { Control, Controller, useFieldArray } from 'react-hook-form';

export default function TagButtonInputs({
  control,
  name,
}: {
  control: Control<UserReviewFormValues>;
  name: 'mannerTagOptions' | 'badMannerTagOptions';
}) {
  const { fields } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="grid grid-cols-12 gap-2">
      {fields.map((tag, index) => (
        <Controller
          key={tag.id}
          control={control}
          name={`${name}.${index}.isSelected`}
          render={({ field }) => (
            <button
              type="button"
              onClick={() => field.onChange(!field.value)}
              className={
                field.value
                  ? `col-span-6 md:col-span-4 text-xs md:text-sm text-dark-700 bg-light-200 hover:bg-light-200 font-bold rounded-lg p-2`
                  : `col-span-6 md:col-span-4 text-xs md:text-sm text-light-200 bg-dark-400 hover:bg-dark-200 font-bold rounded-lg p-2`
              }
            >
              {tag.name}
            </button>
          )}
        />
      ))}
    </div>
  );
}
