angular.module('Factory', [])

    .factory('mainPageFact', mainPageFact)

function mainPageFact() {

    var recommendMessageMe = {
        recommendName: '',
        recommendEmail: '',
        recommendSubject: '',
        recommendMessage: ''
    };
    
    var posts;
    
    return { 
        recommendMessageMe: recommendMessageMe,
        posts: posts
    };
    
};