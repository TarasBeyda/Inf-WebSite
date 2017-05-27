'use strict'

app.service("SelectPost", ["$http", "$q", function ($http, $q) {
    return {
        postSelectId: function (selectPost) {
            return $http.post("/api/select-post", selectPost)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error select post!");
                        return $q.reject(errRes);
                    }
                )
        },
        postSelectToTitle: function (selectPost) {
            return $http.post("/api/search/select-post", selectPost)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error select post!");
                        return $q.reject(errRes);
                    }
                )
        }
    }
}]);