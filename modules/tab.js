import {event} from './event';

var tab=function(options){

    this.config={
        tabEle: 'a',
        tabWrap: '#tab'
    };

    this.init=function(){
        var selfConfig=this.config;
        selfConfig=$.extend(selfConfig, options);
        var coreFun= (index) => (this.core(index));
        event.on(selfConfig.tabEle, function(){
            coreFun($(this).index());
        }, $(selfConfig.tabWrap));
    };

    this.core=function(index){
        var selfConfig=this.config;
        $(selfConfig.tabWrap).find(selfConfig.tabEle).removeClass('active').eq(index).addClass('active');
        $(selfConfig.tabWrap).next().children().hide().eq(index).show()
    };

    this.init();

};

module.exports={
    tab
};