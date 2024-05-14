import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';
import { ReportReason } from '@/lib/report/report.interfaces';

export default function AccordionInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  reportReasons,
  position,
  summaryProps,
  detailProps,
}: {
  reportReasons: ReportReason[];
  position: number;
  summaryProps: {
    onClick: (position: number) => void;
  };
  detailProps: {
    controlProps: UseControllerProps<TFieldValues, TName>;
  };
}) {
  return (
    <div>
      {reportReasons.map((reason, index) => (
        <Accordion
          key={reason.reason}
          className="text-gray-300 text-sm md:text-base bg-dark-400"
        >
          <AccordionSummary
            className={
              position === index
                ? 'bg-red-800 font-semibold'
                : 'bg-dark-400 font-normal'
            }
            expandIcon={<ExpandMoreIcon />}
            onClick={() => summaryProps.onClick(index)}
            disabled={reason.disabled}
          >
            {reason.reason}
          </AccordionSummary>
          <AccordionDetails className="text-xs md:text-sm">
            {reason.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
