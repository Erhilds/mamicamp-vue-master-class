import { objectPropertiesCounter } from "@/helpers/objectPropertiesCounter";

export default {
  authenticatedUser(state) {
    return state.authId ? state.users[state.authId] : null;
  },

  userThreadsCount: state => id =>
    objectPropertiesCounter(state.users[id].threads),
  userPostsCount: state => id => objectPropertiesCounter(state.users[id].posts),
  threadRepliesCount: state => id =>
    objectPropertiesCounter(state.threads[id].posts) - 1
};
