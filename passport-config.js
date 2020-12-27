const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { User, getUserById } = require('./model/users');

const {
  GOOGLE_AUTH_CONSUMER_KEY,
  GOOGLE_AUTH_CONSUMER_SECRET,
  HOST,
  PORT,
} = process.env;

function initializePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_AUTH_CONSUMER_KEY,
        clientSecret: GOOGLE_AUTH_CONSUMER_SECRET,
        callbackURL: `${HOST}:${PORT}/auth/google/callback`,
      },
      async function (token, tokenSecret, profile, done) {
        const user = await getUserById(profile.id);

        if (!user.firstName) {
          const user = new User({
            id: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
          });
          await user.save();
          return done(null, user);
        }

        return done(null, user);
      }
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    done(null, findUserById(id));
  });
}

const passport = require('passport');

initializePassport(passport);

module.exports = passport;
