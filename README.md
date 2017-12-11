# Express backend // boilerplate

Created whiles following Grider's course for advance react + redux...

Uses passport and JSON Web Tokens for authetication. Routes are handeled in `router.js`.

In order to use, you'll need to create a `config.js` in the root folder and create an object with your own secret in the specified area:

```javascript
module.exports = {
  secret: <insert your secret here>
}
```
This is used when creating a JSON Web Token. 

I am using arrow functions with the exception of a couple places where I needed to preserve 'this'. You can find these two case in `user.js` from the `models` directory on line 18 and 34.

> I might look into these two cases at a later date, attempting to refactor to  still use arrow functions. If you have any advice feel free to make an issue or pr.
