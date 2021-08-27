import {modifyUser} from './roomModifiers';

/**
 * Sets "excluded" flag on user to false
 */
const includedInEstimationsEventHandler = (room, eventPayload) => {
  return modifyUser(room, eventPayload.userId, (user) => ({
    ...user,
    excluded: false
  }));
};

export default includedInEstimationsEventHandler;
