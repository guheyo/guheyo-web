import { validateCooldown } from '../date/validate-cooldown';
import { findTimeLeftUntilCooldownEnds } from '../date/find-time-left-until-cooldown-ends';

export const parseOfferBumpButtonName = (bumpedAt: Date) =>
  validateCooldown(bumpedAt)
    ? `끌어올리기`
    : `다음 끌올 : ${findTimeLeftUntilCooldownEnds(bumpedAt)}`;
