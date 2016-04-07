(function() {

    'use strict';

    angular
        .module('zipcourse')
        .controller('zipcourseController', zipcourseController);


    function zipcourseController($scope) {

        console.log('Hello from the other side');

         $scope.herotext = {
            Title: 'zip course!',
            Overview: 'Beautiful Design at breakneck speed',
            Description: 'We know that sometimes you need an elearning course Lorem ipsum dolor sit amet, consectetuer adipiscing elit suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit' 
            
        };
    }

})();