var page = {
    init: function(){
        var actions = {
            goTop: function(){
                $('html, body').animate({'scrollTop': 0}, 500);
            }
        };
        $('.goTop').click(actions.goTop);
    }
};

/*******************************
 * homepage
 */
page.home = (function(){
    //最多4屏幕
    var curScrNum = 1,
        canScroll = true;
    return {
        scroll: function(){
            var tag_num = 1;

            var actions = {
                scrollTo: function(num){
                    var top = 0;
                    switch(num){
                        case 1:
                            top = 0;
                            $('html, body').animate({'scrollTop': top}, 500);
                            break;
                        case 2:
                            top = $('.m-compare').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            break;
                        case 3:
                            top = $('.m-materials').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            break;
                        case 4:
                            top = $('.m-serve').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            break;
                        default:
                            break;
                    }
                    canScroll = true;
                },
                mousewheel: function(event, delta) {
                    if(! canScroll){
                        return false;
                    }
                    tag_num++;
                    if (tag_num > 5) {
                        setTimeout(function() {
                            canScroll = false;
                            tag_num = 0;
                            curScrNum -=delta;
                            if(curScrNum<1){
                                curScrNum = 1;
                            }else if(curScrNum > 4){
                                curScrNum = 4;
                            }
                            actions.scrollTo(curScrNum);
                        }, 0);
                    }
                    return false;
                    setTimeout(function() {
                        tag_num = 0;
                    }, 100);
                }
            };
            $('html').on('mousewheel', actions.mousewheel);
        },
        init: function(){
            this.scroll();
            var actions = {
                compare: function(index){
                    $(this).click(function(){
                        $('.cp-content .tab,.cp-content .u-nav li').removeClass('active');
                        $('.cp-content .tab').eq(index).addClass('active');
                        $('.cp-content .u-nav li').eq(index).addClass('active');
                    });
                }
            };
            $('.cp-content .u-nav li').each(actions.compare);
        }
    };
}());

/*******************************
 * taocan
 */
page.taocan = (function(){

    var curScrNum = 1,
        canScroll = true;
    return {
        scroll: function(){
            var tag_num = 1;

            var actions = {
                scrollTo: function(num){
                    var top = 0;
                    switch(num){
                        case 1:
                            top = 0;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            break;
                        case 2:
                            top = $('.m-od').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(0).addClass('active');
                            break;
                        case 3:
                            top = $('.m-bom').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(1).addClass('active');
                            break;
                        case 4:
                            top = $('.m-ap').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(2).addClass('active');
                            break;
                        case 5:
                            top = $('.m-ap .group2').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(2).addClass('active');
                            break;
                        case 6:
                            top = $('.m-ap .group3').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(2).addClass('active');
                            break;
                        case 7:
                            top = $('.m-ap .group4').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(2).addClass('active');
                            break;
                        default:
                            break;
                    }
                    canScroll = true;
                },
                goScroll: function(index){
                    $(this).click(function(){
                        curScrNum = index +2 ;
                        actions.scrollTo(curScrNum);
                    });
                },
                mousewheel: function(event, delta) {
                    if(! canScroll){
                        return false;
                    }
                    tag_num++;
                    if (tag_num > 3) {
                        setTimeout(function() {
                            canScroll = false;
                            tag_num = 0;
                            curScrNum -=delta;
                            if(curScrNum<1){
                                curScrNum = 1;
                            }else if(curScrNum > 7){
                                curScrNum = 7;
                            }
                            actions.scrollTo(curScrNum);
                        }, 0);
                    }
                    return false;
                    setTimeout(function() {
                        tag_num = 0;
                    }, 100);
                }
            };
            $('html').on('mousewheel', actions.mousewheel);
            $('.g-scroll .u-list li').each(actions.goScroll);
        },
        init: function(){
            this.scroll();
            var actions = {
                goTop: function(){
                    $('.g-scroll .u-list li').removeClass('active');
                    curScrNum = 1
                },
                tab: function(){
                    var index = $(this).index();
                    $('.m-od .u-nav li,.m-od .tab').removeClass('active');
                    $('.m-od .u-nav li').eq(index).addClass('active');
                    $('.m-od .tab').eq(index).addClass('active');
                }
            };
            $('.goTop').click(actions.goTop);
            $('.m-od .u-nav li').click(actions.tab);
        }
    };
}());

/*******************************
 * shejibao
 */
page.shejibao = (function(){

    var curScrNum = 1,
        canScroll = true;
    return {
        scroll: function(){
            var tag_num = 1;

            var actions = {
                scrollTo: function(num){
                    var top = 0;
                    switch(num){
                        case 1:
                            top = 0;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-sjb-scroll .u-list li').removeClass('active');
                            break;
                        case 2:
                            top = $('.m-fhr').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-sjb-scroll .u-list li').removeClass('active');
                            $('.g-sjb-scroll .u-list li').eq(0).addClass('active');
                            break;
                        case 3:
                            top = $('.m-fdp').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-sjb-scroll .u-list li').removeClass('active');
                            $('.g-sjb-scroll .u-list li').eq(1).addClass('active');
                            break;
                        case 4:
                            top = $('.m-tdp').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-sjb-scroll .u-list li').removeClass('active');
                            $('.g-sjb-scroll .u-list li').eq(2).addClass('active');
                            break;
                        case 5:
                            top = $('.m-tcs').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-sjb-scroll .u-list li').removeClass('active');
                            $('.g-sjb-scroll .u-list li').eq(3).addClass('active');
                            break;
                        case 6:
                            top = $('.m-pk').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-sjb-scroll .u-list li').removeClass('active');
                            break;
                        default:
                            break;
                    }
                    canScroll = true;
                },
                goScroll: function(index){
                    $(this).click(function(){
                        curScrNum = index +2 ;
                        actions.scrollTo(curScrNum);
                    });
                },
                mousewheel: function(event, delta) {
                    if(! canScroll){
                        return false;
                    }
                    tag_num++;
                    if (tag_num > 5) {
                        setTimeout(function() {
                            canScroll = false;
                            tag_num = 0;
                            curScrNum -=delta;
                            if(curScrNum<1){
                                curScrNum = 1;
                            }else if(curScrNum > 6){
                                curScrNum = 6;
                            }
                            actions.scrollTo(curScrNum);
                        }, 0);
                    }
                    return false;
                    setTimeout(function() {
                        tag_num = 0;
                    }, 100);
                }
            };
            $('html').on('mousewheel', actions.mousewheel);
            $('.g-sjb-scroll .u-list li').each(actions.goScroll);
        },
        pluginInit: function(){
            jQuery(".slideTxtBox").slide({
                mainCell: ".bd ul",
                effect: "left",
                autoPlay: false
            });
            jQuery(".tcs-slide").slide({
                mainCell: ".bd ul",
                effect: "left",
                autoPlay: true
            });
        },
        init: function(){
            this.pluginInit();
            this.scroll();
            var actions = {
                goTop: function(){
                    $('.g-sjb-scroll .u-list li').removeClass('active');
                    curScrNum = 1
                }
            };
            $('.goTop').click(actions.goTop);
        }
    };
}());


/*******************************
 * serve
 */
page.serve = (function(){
    //最多4屏幕
    var curScrNum = 1,
        canScroll = true;
    return {
        svScroll: function(){
            var tag_num = 1;

            var actions = {
                scrollTo: function(num){
                    var top = 0;
                    switch(num){
                        case 1:
                            top = 0;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            break;
                        case 2:
                            top = $('.m-ss').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(0).addClass('active');
                            break;
                        case 3:
                            top = $('.m-cpc').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(1).addClass('active');
                            break;
                        case 4:
                            top = $('.m-pa').offset().top;
                            $('html, body').animate({'scrollTop': top}, 500);
                            $('.g-scroll .u-list li').removeClass('active');
                            $('.g-scroll .u-list li').eq(2).addClass('active');
                            break;
                        default:
                            break;
                    }
                    canScroll = true;
                },
                goScroll: function(index){
                    $(this).click(function(){
                        curScrNum = index +2 ;
                        actions.scrollTo(curScrNum);
                    });
                },
                mousewheel: function(event, delta) {
                    if(! canScroll){
                        return false;
                    }
                    tag_num++;
                    if (tag_num > 5) {
                        setTimeout(function() {
                            canScroll = false;
                            tag_num = 0;
                            curScrNum -=delta;
                            if(curScrNum<1){
                                curScrNum = 1;
                            }else if(curScrNum > 4){
                                curScrNum = 4;
                            }
                            actions.scrollTo(curScrNum);
                        }, 0);
                    }
                    return false;
                    setTimeout(function() {
                        tag_num = 0;
                    }, 100);
                }
            };
            $('html').on('mousewheel', actions.mousewheel);
            $('.g-scroll .u-list li').each(actions.goScroll);
        },
        init: function(){
            this.svScroll();
            var actions = {
                goStep: function(index){
                    $(this).hover(function(){
                        $('.m-cpc .progress1 .step, .m-cpc .progress2 .step').removeClass('active');
                        $('.m-cpc .progress1 .step').eq(index).addClass('active');
                        $('.m-cpc .progress2 .step').eq(index).addClass('active');
                    });
                },
                goTop: function(){
                    $('.g-scroll .u-list li').removeClass('active');
                    curScrNum = 1
                }
            };
            $('.m-cpc .progress1 .step').each(actions.goStep);
            $('.m-cpc .progress2 .step').each(actions.goStep);
            $('.goTop').click(actions.goTop);
        }
    };
}());



