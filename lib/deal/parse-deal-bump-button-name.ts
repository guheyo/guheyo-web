import { validateBump } from './validate-bump';
import { findTimeLeftUntilBumpCooldownEnds } from './find-time-left-until-bump-cooldown-ends';

export const parseDealBumpButtonName = (bumpedAt: Date) =>
  validateBump(bumpedAt)
    ? `끌어올리기`
    : `다음 끌올 : ${findTimeLeftUntilBumpCooldownEnds(bumpedAt)}`;
