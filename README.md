zm-long-click
=============

AngularJS directive. This directive allows you to call method after pressing element for 1sec! 

Usage
----------
Include zm-long-click.js file in your HTML page.
```html
<script language="JavaScript" src="js/zm-long-click.js"></script>
```

Include zm-long-click directive in your angularJS app.
```javascript
var app = angular.module('yourAppName', ['zm-long-click']);
```

Add zm-long-click attribute on your element!
```html
<button zm-long-click="methodYouLoveToCall()">Call method after long click</button>
```
