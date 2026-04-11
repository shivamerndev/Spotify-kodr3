import passport from "./google.config.js";

const initiate = () => () => passport.authenticate('google', { scope: ['profile', 'email'] })
const callback = () => () => passport.authenticate('google', { session: false })
export { initiate, callback }