'use strict';

app.service("SearchPostsService", ["$http", "$q", function ($http, $q) {
    return {
        postSearch: function (currentPage) {
            return $http.post("/api/search/posts", currentPage)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error search posts!");
                        return $q.reject(errRes);
                    }
                )
        }
    }
}]);