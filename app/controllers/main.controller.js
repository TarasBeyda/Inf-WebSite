var app = angular.module('Controllers', ['ui.bootstrap'])

    .controller('mainPageCtrl', mainPageCtrl)
    .controller('admPageCtrl', admPageCtrl)
    mainPageCtrl.$inject = ['$scope', 'mainPageFact', '$http', "PaginationsService"]
    admPageCtrl.$inject = ['mainPageFact', '$http']

function mainPageCtrl($scope, mainPageFact, $http, PaginationsService) {

    $('.opacity-loader').show();
    
    /*Small menu*/
    this.showSmallMenu = function() {
        
        $('#smallMenuBtn').addClass('active');
        
            if ($('#smallMenuBtn').hasClass('active')) {
                $('#smallMenuBtn:hover').css('cursor', 'default');
                $('.small__menu').animate({
                    height: '200px'
                }, 1000);
                $('#smallMenuBtn').animate({
                    opacity: '0'
                }, 1000);
            };
        
    };  
    
    this.hideSmallMenu = function() {
        
        $('#smallMenuBtnBottom').addClass('active');
        
        if ($('#smallMenuBtn').hasClass('active')) {
            $('.small__menu').animate({
                height: '40px'
            }, 1000);
            $('#smallMenuBtn').animate({
                opacity: '1'
            }, 1000);
            $('#smallMenuBtn').removeAttr('style');
            $('#smallMenuBtn').removeClass('active');
        };
        
    };
    
    $(document).click(function(e) {
                
        var smallMenu = $('.small__menu');
        var smallMenuBtn = $('#smallMenuBtn');   
        if(e.target!=smallMenu[0]&&!smallMenu.has(e.target).length&&e.target!=smallMenuBtn[0]&&!smallMenuBtn.has(e.target).length&&smallMenuBtn.hasClass('active')) { 
            $('.small__menu').animate({
                height: '40px'
            }, 1000);
            $('#smallMenuBtn').animate({
                opacity: '1'
            }, 1000);
            $('#smallMenuBtn').removeAttr('style');
            smallMenuBtn.removeClass('active');
        }
                
    });
    
    
    /*Slider*/
    this.slider = function(width_li,margin_right_li,margin_left_li,col_view_img,step_to) {
        var step=width_li+margin_right_li+100,
            slider_box_with=col_view_img*step-margin_right_li,
            $col_img=$(".slider_box>nav>section").length,
            col_main_left=0,
            max_col_main_left=$col_img*step;
        $(".left_nav").click(function(){
            if(col_main_left==0){
                col_main_left=step_to;
            } else{
                col_main_left=col_main_left+step;
            }
            $(".slider_box>nav").css("margin-left",col_main_left+"px");
        });
        $(".right_nav").click(function(){
            if(col_main_left === step_to){
                col_main_left=0;
            } else{
                col_main_left=col_main_left-step;
            }
            $(".slider_box>nav").css("margin-left",col_main_left+"px");
        });
//        setInterval(function(){
//            if(-col_main_left==max_col_main_left-col_view_img*step) {
//                col_main_left=0;  
//                $(".slider_box>nav").css("margin-left",col_main_left+"px");
//            } else {
//                col_main_left=col_main_left-step;
//                $(".slider_box>nav").css("margin-left",col_main_left+"px");
//            }
//        },6000);
    };
    var browserMaxWidth = parseInt($('.wrapper').css('max-width'), 10);
    if (browserMaxWidth === 767) {
        this.slider(400,100,100,1,-1200);
    } else if (browserMaxWidth === 991) {
        this.slider(500,100,100,1,-1400);
    } else if (browserMaxWidth === 10000) {
        this.slider(700,100,100,1,-1800);
    };
    
    
    /*recomendMessageMe*/
    this.recommendMessageMe = mainPageFact.recommendMessageMe;
    this.sendRecommendMessageMe = function() {
        this.recommendMessageMe = {
            recommendName: this.recommendName,
            recommendEmail: this.recommendEmail,
            recommendSubject: this.recommendSubject,
            recommendMessage: this.recommendMessage
        };
        $http.post('http://localhost:3000/sendRecommendMessageMe', this.recommendMessageMe)
            .then((res) => {
                console.log('Success sendRecommendMessageMe', res);
            }), function error(err) {
                console.log('Error sendRecommendMessageMe', err);
            }
    };
        
    
    /*Repeat post in slider*/
    this.postSlider = mainPageFact.postSlider;
    this.postInSlider = function() {
        $http.post('http://localhost:3000/postInSlider')
            .then((res) => {
                console.log('Success postInSlider', res);
                this.postSlider = res;
            }), function error(err) {
                console.log('Error postInSlider', err);
             }
    };
    this.postInSlider();
        
    
    /*Repeat post in mainPage*/
    /*Navigation page*/
    this.posts = mainPageFact.posts;
    this.navigationPage = function(e) {
        
        var elValues = parseInt($(e.target).val());
        var elPointValue = parseInt($('.navigation__buttonPage input:nth-child(3)').val());
        var elAdd = elValues-elPointValue;
        
        if (elValues > elPointValue) {
            elPointValue+=3;
            if (elAdd === 2) {
                for (var i=0; i<elAdd; i++) {
                    $('.navigation__buttonPage').append('<input type="button" value="'+elPointValue+'">');
                    elPointValue++;
                    $('.navigation__buttonPage input:first-child').remove();
                };
            } else {
                $('.navigation__buttonPage').append('<input type="button" value="'+elPointValue+'">');
                $('.navigation__buttonPage input:first-child').remove();
            };
        } else 
        if (elValues < elPointValue && elValues !== 1 && elValues !== 2) {
            elPointValue-=3; 
            if (elAdd === -2) {
                for (var i=0; i<elAdd+4; i++) {
                    $('.navigation__buttonPage').prepend('<input type="button" value="'+elPointValue+'">');
                    elPointValue--;
                    $('.navigation__buttonPage input:last-child').remove();
                };
            } else {
                $('.navigation__buttonPage').prepend('<input type="button" value="'+elPointValue+'">');
                $('.navigation__buttonPage input:last-child').remove();
            };
        } else if (elValues === 2 && parseInt($('.navigation__buttonPage input:first-child').val()) === 2) {
            $('.navigation__buttonPage').prepend('<input type="button" value="'+1+'">');
            $('.navigation__buttonPage input:last-child').remove();
        };
        
        $('.navigation__buttonPage input').removeClass('navigation__buttonActive');

        for (var i=1; i<5; i++) {
            if (parseInt($('.navigation__buttonPage input:nth-child('+i+')').val()) === elValues) {
                $('.navigation__buttonPage input:nth-child('+i+')').addClass('navigation__buttonActive');
            } 
        };

        this.posts = {
            buttonActiveStart: (elValues*9)-8,
            buttonActiveEnd: elValues*9
        };
        
        this.postInMainPage();
        
    };

    var vm = $scope;
    vm.paginations;

    PaginationsService.getPaginationsStart()
        .then(
            function (response) {
                setTimeout(function () {
                    $('.opacity-loader').hide();
                }, 1000);
                vm.paginations = response.Data;
            },
            function (errResponse) {
                console.log("Error get paginations service on paginationsCtrl");
            }
        )

    vm.totalItems = 64;
    vm.currentPage = 1;
    vm.itemsPerPage = 10;
    vm.maxSize = 5;

    vm.pageChanged = function(currentPage) {
        $('.opacity-loader').show();
        var data = ({
            currentPage: vm.currentPage
        });
        setTimeout(function () {
            PaginationsService.postPaginationsChange(data)
                .then(
                    function (response) {
                        // setTimeout(function () {
                        $('.opacity-loader').hide();
                        // }, 1000);
                        vm.paginations = response.Data;
                    },
                    function (errResponse) {
                        console.log("Error get paginations service on paginationsCtrl");
                    }
                );
        }, 1000);
    };
    
    this.postInMainPage = function() {
        $http.post('http://localhost:3000/navigationPage', this.posts)
            .then((res) => {
                console.log('Succeess navigationPage', res);
                this.posts = res;
            }), function(err) {
                console.log('Error navigationPage', err);
            };    
    };
    this.postInMainPage();
    
};


function admPageCtrl(mainPageFact, $http) {

    /*Sign In Adm panel*/
    this.adm = mainPageFact.adm;
    this.admSignIn = function() {
        this.adm = {
            login: this.admLogin,
            pass: this.admPass
        };
        $http.post('http://localhost:3000/admSignIn', this.adm)
            .then((res) => {
                console.log('Success admSingIn', res);
                this.admData = res;
                $('.admin__signIn').css('display', 'none');
                $('.admin__head').css('display', 'block');
                $('.admin__wrapper').css('display', 'block');
            }), function(err) {
                console.log('Error admSingIn', err);
            };
    };
    
    
    /*Show adm menu*/
    this.showAdmPanel = function(e) {
        
        var numberEl = $('.admin__wrapper h2').index(e.target)+1;
        var nthChild = $('.admin__wrapper div:nth-child('+numberEl+')');
        
        if (nthChild.hasClass('active')) {
            nthChild.stop(true).queue('fx', function() {
                nthChild.animate({
                    height: '30px'
                }, 1000);
                nthChild.removeClass('active');
            })
                .dequeue('fx');
        } else {
            nthChild.stop(true).queue('fx', function() {
                nthChild.animate({
                    height: '425px'
                }, 1000);
                nthChild.addClass('active');
            })
                .dequeue('fx');
        };
        
    };
    
    
    /*Send in mysql new post*/
    this.sendNewDemonstratePost = mainPageFact.sendNewDemonstratePost;
    this.sendNewPost = function() {
        this.sendNewDemonstratePost = {
            subject: this.demonstr__subject,
            category: this.demonstr__categore,
            short_description: this.demonstr__shortDescript,
            content_post: this.demonstr__contentPost
        };
        $http.post('http://localhost:3000/sendNewPost', this.sendNewDemonstratePost)
            .then((res) => {
                console.log('Success sendNewPost', res);
            }), function(err) {
                console.log('Error sendNewPost', err);        
            };
    };
    
    
    /*Show demonstrate new post*/
    this.showNewPost = function() {
        var heightDemonstr = parseInt($('.demonstrate__post').css('height'))+460+'px';
        $('.demonstrate__post').show();
        $('.admin__wrapper div:first-child').animate({
            height: heightDemonstr
        }, 1000);
    };
    
    
    /*All posts*/
    this.allposts = mainPageFact.allPosts;
    this.showAllPosts = function() {
        $http.post('http://localhost:3000/showAllPosts')
            .then((res) => {
                console.log('Success sendNewPost', res);
                this.allposts = res;
                console.log(this.allposts);
            }), function(err) {
                console.log('Error sendNewPost', err);        
            };  
    };
    this.showAllPosts();
    
    
    /*Search post in adm panel to edit*/
    this.searchEdit__post = mainPageFact.searchEdit__post;
    this.editPost = function() {
        for (var i=0; i<=this.allposts.data.length; i++) {
            if (this.searchEdit__post === this.allposts.data[i].title_post) {
                
            }
        }
    };
    
    
    /*Search post in adm panel to remove*/
    this.searchRemove__post = mainPageFact.searchRemove__post;
    this.demonstrateRemove__post = mainPageFact.demonstrateRemove__post;
    this.removePost = function() {
        for (var i=0; i<this.allposts.data.length; i++) {
            this.i = i;
            if (this.searchRemove__post === this.allposts.data[i].title_post) {
                this.demonstrateRemove__post = this.allposts.data[i];
                console.log(this.demonstrateRemove__post);
                $('.demonstrateRemove__post').show();
                $('.send__remove').show();
            }
        }
    };
    
    
    /*Send remove post*/
    this.sendRemovePost = function(e) {
        var elSend = $(e.target).val();
        if (elSend === 'Так') {   
            var idRemovePost = {
                id_post: this.demonstrateRemove__post.id_post
            };
            $http.post('http://localhost:3000/sendRemovePost', idRemovePost)
                .then((res) => {
                    console.log('Success sendRemovePost', res);
                    $('.demonstrateRemove__post').hide();
                    $('.send__remove').hide();
                }), function(err) {
                    console.log('Error sendRemove post', err);
                }
        } else if (elSend === 'Ні') {
            $('.demonstrateRemove__post').hide();
            $('.send__remove').hide();
        }
    };

};

