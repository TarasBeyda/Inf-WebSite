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
    
}