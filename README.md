# Authentication practice
Your mission is to build the exact same app we did today in class. In case of emergency, a sample solution can be found here: https://github.com/SEI-SEA-1-25/intro-to-authentication-soln. Your app should have the following user stories:

## Core goals
1. Links to Log In and Sign Up are in the nav bar.
1. The Sign Up link takes me to a registration form with email and password fields.
1. When I submit the registration form, a user is created in the db, and the userId cookie is set to that user's id.
1. The Log In link takes me to a login form, also with email and password fields.
1. When I submit the login form, the server looks up the user with the inputted email, then compares the looked-up-user's password to the inputted password. If they match, the userId cookie is set to that user's id, and I'm redirected to the home page. If they don't match, re-render the login form.
1. On every request, look up a user from the db using the userId cookie. Attach this user to res.locals.user.
1. When no user is logged in, the nav bar remains Sign Up & Log In. When a user is signed in, the nav bar changes to Profile & Log Out.
1. When Log Out is clicked, the userId cookie is cleared and I get redirected to the home page.
1. When Profile is clicked, I see a page that says "Hello {email of the logged in user}!".

## Stretch goals
1. When a user signs up or logs in, before setting the userId cookie, encrypt it with a secret string. The secret string should be stored in a .env file.
1. When looking up the current user on every request, decrypt the incoming userId cookie using the same secret string.
1. When creating a user, before saving them to the db, hash their password and save the hash, not the plaintext.
1. When logging in a user, hash the password they are attempting to log in with before comparing it to the hashed password stored in the db.
