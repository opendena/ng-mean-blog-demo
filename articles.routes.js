module.exports = function(angular,moduleName) {
    //Setting up route
    angular.module(moduleName).config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/articles', {
                templateUrl: 'build/opendena-ng-mean-blog-demo/public/views/articles/list.html'
            }).
            when('/articles/create', {
                templateUrl: 'build/opendena-ng-mean-blog-demo/public/views/articles/create.html'
            }).
            when('/articles/:articleId/edit', {
                templateUrl: 'build/opendena-ng-mean-blog-demo/public/views/articles/edit.html'
            }).
            when('/articles/:articleId', {
                templateUrl: 'build/opendena-ng-mean-blog-demo/public/views/articles/view.html'
            })
        }
    ]);
}


     

