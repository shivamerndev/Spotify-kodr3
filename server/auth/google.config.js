import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from "passport";
import envConfig from '../src/config/env.config';

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
    clientID: envConfig.GOOGLE_CLIENT_ID,
    clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    // Here, you would typically find or create a user in your database
    // For this example, we'll just return the profile
    return done(null, profile);
}));

export default passport;