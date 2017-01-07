angular.module('Controllers', [])

    .controller('mainPageCtrl', mainPageCtrl)
    mainPageCtrl.$inject = ['mainPageFact', '$http']

    function mainPageCtrl(mainPageFact, $http) {
    
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
        
    
    /*Repeat post in mainPage*/
    this.posts = mainPageFact.posts;
//    this.postInMainPage = function() {
//        $http.post('http://localhost:3000/postInMainPage')
//            .then((res) => {
//                console.log('Success postInMainPage', res);
//                this.posts = res;
//            }), function error(err) {
//                console.log('Error postInMainPage', err);
//            }
//    };
//    this.postInMainPage();
        
    
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
        
        
    /*Navigation page*/
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
            console.log(elAdd);
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
        };   
        
        var objCountButtonActive = {
            buttonActiveStart: (elValues*9)-8,
            buttonActiveEnd: elValues*9
        };
        console.log('start '+objCountButtonActive.buttonActiveStart+' end '+objCountButtonActive.buttonActiveEnd);
        $http.post('http://localhost:3000/navigationPage', objCountButtonActive)
            .then((res) => {
                console.log('Succeess navigationPage', res);
                this.posts = res;
            }), function(err) {
                console.log('Error navigationPage', err);
            }
    };
        
    
}