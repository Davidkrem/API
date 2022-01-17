
// FACEBOOK API DOCUMENTATION - Graph API

// https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/

// Client Registration:
// https://developers.facebook.com/

// create an app and add the Facebook Login product, set valid OAuth redirect URIs in the settings of the product,  needs to be an exact match, watch out for trailing slashes etc. (e.g.: https://api-university.com/ != https://api-university.com)

// your redirect URI needs to have a slash / in the end, otherwise Facebook adds one!

// What you need:
// appId  / clientId = # from FB
// appSecret / clientSecret = also # from FB
// redirectURI = go to PRODUCTS+  => FB login => WEB =>  (My App Website URL with an /)
// URLENCODE(redirectURI) =  use urlencoder.org to encode redirectURI

// **Authorization Endpoint (Browser)**:

// Now FILL In steps from above(what you need section)

// https://www.facebook.com/v6.0/dialog/oauth?client_id=clientId&redirect_uri=URLENCODE(redirectURI)&state=987654321

// **For Production code. Need to keep track of the STATE**

// PASTE new URL now with new data swapped out with clientID and URLENCODED

// What you need to extract from the response( code= ) NOT STATE!
// code = save code here

// ---
// **Token Endpoint**:

// **non-standard: FB is a GET instead of a POST

// curl -ik "https://graph.facebook.com/v6.0/oauth/access_token?redirect_uri=URLENCODE(redirectURI)&client_id=clientId&client_secret=clientSecret&code=code"

// *Paste curl into Iterm2

// What you need from the response:
// access_token = 6589ys98suhfnskhsf7ty9fusdifhjsdfos8gs9h

// from…

// {
// “access_token”: “6589ys98suhfnskhsf7ty9fusdifhjsdfos8gs9h”

// }
// ---
// Resource Access:

// curl -H "Accept: application/json" -H "Authorization: Bearer access_token" "https://graph.facebook.com/me"

// **PASTE curl -H code into iterm2

// What you need from the response:
// name =
// Get back a json with my “name” and “id”

// Now I can make API calls!!!


