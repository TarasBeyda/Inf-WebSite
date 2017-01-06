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
    var postSlider;
    
    return { 
        recommendMessageMe: recommendMessageMe,
        posts: posts,
        postSlider: postSlider
    };
    
};