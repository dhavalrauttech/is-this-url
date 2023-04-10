#  is-this-url

### Description
- Check whether a string is a URL.
- If string can be used as a URL by returning a Boolean value

### Installation
 

    npm install is-this-url

### Code
  
```javascript
const ValidateUrl = require("is-this-url"); 

// The below URL are valid URL
ValidateUrl("https://www.youtube.com/"); // true
ValidateUrl("www.youtube.com"); // true
ValidateUrl("youtube.com"); // true
ValidateUrl("https://www.youtube.com/watch?v=w3jLJU7DT5E"); // true

// The below URL are invalid URL
ValidateUrl("youtube"); // false
ValidateUrl("124"); // false 
``` 

CodeSandbox Example [ Click here](https://codesandbox.io/s/validate-url-bgweiz " Click here")
