angular.module('app', [])
	.directive('makeEditable', function() {
		return {
			restrict: 'A',
			templateUrl: 'edit-box.html',
			scope: true,
			transclude: true,
			link: function(scope, element, attrs) {
				scope.editMode = false;
				var button = element.find('button');
				var innerText;

				button.on('click', function(event) {
					event.preventDefault();
					event.stopPropagation();

					scope.$apply(function() {
						scope.editMode = !scope.editMode;
						element.toggleClass('red');
						element.attr('contenteditable', scope.editMode);
					});

					innerText = (scope.editMode) ? 'Save' : 'Edit' ;
					button[0].innerText = innerText;
				});
			}
		}
	})