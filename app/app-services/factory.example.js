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
    
    var sendNewDemonstratePost;
    var allposts;
    var searchEdit__post;
    var searchRemove__post;
    var demonstrateRemove__post;

    var contentActivePost;
    var titlePost;
    
    return { 
        recommendMessageMe: recommendMessageMe,
        
        posts: posts,
        postSlider: postSlider,
        
        adm: adm,
        
        sendNewDemonstratePost: sendNewDemonstratePost,
        allposts: allposts,
        searchEdit__post: searchEdit__post,
        searchRemove__post: searchRemove__post,
        demonstrateRemove__post: demonstrateRemove__post,

        contentActivePost: contentActivePost,
        titlePost: titlePost
    };
    
};