var app;
app = angular.module('zm-long-click', []),
app.directive('zmLongClick', ['$parse', function($parse) {
	return {
		restrict: 'A',
		replace: true,
		link: function(scope, element, attrs) {
			var pressing = false;
			var timer;

			element.bind("mousedown",function(){
				pressing = true;
				timer = setTimeout(function(){if(pressing){eval("scope."+attrs.zmLongClick)}},1000);
			});
			element.bind("mouseup",function(){
				pressing = false;
				clearTimeout(timer);
			});
		}
	};
}]);
