angular.module('Controllers', [])

    .controller('mainPageCtrl', mainPageCtrl)
    mainPageCtrl.$inject = ['mainPageFact']
    mainPageCtrl.$inject = ['$http']

function mainPageCtrl(mainPageFact, $http) {

    this.showLeftMenu = function() {
        
        $('#btnSmallMenuLeft').toggleClass('active');
        
        if ($('#btnSmallMenuLeft').hasClass('active')) {
//            $('.small__menu__left').animate({
//                display: 'block'
//            })
            $('.small__menu__left').css('display', 'block');
        } else {
//            $('.small__menu__left').animate({
//                display: 'none'
//            })
            $('.small__menu__left').css('display', 'none');
        }
        
    };
    
    this.showRightMenu = function() {
        
        $('#btnSmallMenuRight').toggleClass('active');
        
        if ($('#btnSmallMenuRight').hasClass('active')) {
//            $('.small__menu__left').animate({
//                display: 'block'
//            })
            $('.small__menu__right').css('display', 'block');
        } else {
//            $('.small__menu__left').animate({
//                display: 'none'
//            })
            $('.small__menu__right').css('display', 'none');
        }
        
    };
    
    $(document).click(function(e) {
        
        var smallMenuLeft = $('.small__menu__left');
        var btnSmallMenuLeft = $('#btnSmallMenuLeft');   
        if(e.target!=smallMenuLeft[0]&&!smallMenuLeft.has(e.target).length&&e.target!=btnSmallMenuLeft[0]&&!btnSmallMenuLeft.has(e.target).length&&btnSmallMenuLeft.hasClass('active')) { 
            $('.small__menu__left').css('display', 'none');
            btnSmallMenuLeft.removeClass('active');
        }
        
        var smallMenuRight = $('.small__menu__right');
        var btnSmallMenuRight = $('#btnSmallMenuRight'); 
        if(e.target!=smallMenuRight[0]&&!smallMenuRight.has(e.target).length&&e.target!=btnSmallMenuRight[0]&&!btnSmallMenuRight.has(e.target).length&&btnSmallMenuRight.hasClass('active')) { 
            $('.small__menu__right').css('display', 'none');
            btnSmallMenuRight.removeClass('active');
        }
        
    });
    
    this.slider = function(width_li,margin_right_li,margin_left_li,col_view_img) {
        var step=width_li+margin_right_li+100,
            slider_box_with=col_view_img*step-margin_right_li,
            $col_img=$(".slider_box>nav>div").length,
            col_main_left=0,
            max_col_main_left=$col_img*step;
        $(".slider_box").width(slider_box_with+50);
        $(".slider_box>nav>div").width(width_li).css("margin-right",margin_right_li);
        $(".slider_box>nav>div").width(width_li).css("margin-left",margin_left_li);
        $(".left_nav").click(function(){
            if(col_main_left==0){
                col_main_left=-max_col_main_left+col_view_img*step;
            } else{
                col_main_left=col_main_left+step;
            }
            $(".slider_box>nav").css("margin-left",col_main_left+"px");
        });
        $(".right_nav").click(function(){
            if(-col_main_left==max_col_main_left-col_view_img*step){
                col_main_left=0;
            } else{
                col_main_left=col_main_left-step;
            }
            $(".slider_box>nav").css("margin-left",col_main_left+"px");
        });
        setInterval(function(){
            if(-col_main_left==max_col_main_left-col_view_img*step) {
                col_main_left=0;
            } else {
                col_main_left=col_main_left-step;
                $(".slider_box>nav").css("margin-left",col_main_left+"px");
            }
        },4000);
    };
    this.slider(300,100,100,1);
    
}