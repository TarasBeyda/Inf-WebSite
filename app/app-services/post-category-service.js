'use strict';

app.service("PostCategoryService", ["$http", "$q", function ($http, $q) {
    return {
        postCategory: function (currentPage) {
            return $http.post("/api/category/post", currentPage)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error post category!");
                        return $q.reject(errRes);
                    }
                )
        }
    }
}]);