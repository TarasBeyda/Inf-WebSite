'use strict'

app.service("PaginationsService", ["$http", "$q", function ($http, $q) {
    return {
        getPaginationsStart: function () {
            return $http.get("/api/paginations/start")
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error start paginations!");
                        return $q.reject(errRes);
                    }
                )
        },
        getInfCategory: function () {
            return $http.get("/api/inf-category")
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error inf-category!");
                        return $q.reject(errRes);
                    }
                )
        },
        postPaginationsChange: function (currentPage) {
            return $http.post("/api/paginations/change", currentPage)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error paginations change!");
                        return $q.reject(errRes);
                    }
                )
        },
        postCategoryPaginationsChange: function (currentPage) {
            return $http.post("/api/category/paginations/change", currentPage)
                .then(
                    function (res) {
                        return res.data;
                    },
                    function (errRes) {
                        console.log("Error paginations change!");
                        return $q.reject(errRes);
                    }
                )
        }
    }
}]);