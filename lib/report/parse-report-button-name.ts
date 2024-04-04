import { findTimeLeftUntilCooldownEnds } from '../date/find-time-left-until-cooldown-ends';
import { validateCooldown } from '../date/validate-cooldown';

export const parseReportButtonName = (createdAt: Date) =>
  validateCooldown(createdAt)
    ? `신고하기`
    : `다음 신고 : ${findTimeLeftUntilCooldownEnds(createdAt)}`;
