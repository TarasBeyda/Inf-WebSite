'use strict';

app.service("CommentsPostService", ["$http", "$q", function ($http, $q) {
    return {
        postCommentsPost: function (currentPage) {
            return $http.post("/api/post/comments", currentPage)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error comments post!");
                        return $q.reject(errRes);
                    }
                )
        },
        postSendNewComments: function (currentPage) {
            return $http.post("/api/post/add/comment", currentPage)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error comments post!");
                        return $q.reject(errRes);
                    }
                )
        }
    }
}]);