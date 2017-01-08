angular.module('Factory', [])

    .factory('mainPageFact', mainPageFact)

function mainPageFact() {

    var recommendMessageMe = {
        recommendName: '',
        recommendEmail: '',
        recommendSubject: '',
        recommendMessage: ''
    };
    
    var posts = {
        buttonActiveStart: 1,
        buttonActiveEnd: 9
    };
    var postSlider;
    
    var adm = {
        login: '',
        pass: ''
    };
    
    return { 
        recommendMessageMe: recommendMessageMe,
        
        posts: posts,
        postSlider: postSlider,
        
        adm: adm
    };
    
};