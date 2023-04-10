#  is-this-url

### Description
- Check whether a string is a URL.
- The string will return a Boolean value as a response

### Installation
 

    npm install custom-url-check

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
