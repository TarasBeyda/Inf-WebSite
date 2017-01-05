angular.module('Factory', [])

    .factory('mainPageFact', mainPageFact)

function mainPageFact() {

    var recommendMessageMe = {
        recommendName: '',
        recommendEmail: '',
        recommendSubject: '',
        recommendMessage: ''
    };
    
    return { 
        recommendMessageMe: recommendMessageMe
    };
    
};