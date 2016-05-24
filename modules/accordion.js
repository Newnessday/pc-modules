import {event} from './event';

let accordion=function(options){

    this.config={
        accEle: 'li',
        accWrap: '#accordion',
        accType: 'click',
        accSpeed: 600,
        accOpenValue: 0,
        accCloseValue: 0,
        accVertical: false
    };

    this.core=function(self){
        var selfConfig=this.config;
        var accVerticalValue=Number(selfConfig.accVertical);
        if(/active/.test(self.attr('class'))) return;
        self.siblings().removeClass('active').stop().animate(
            selfConfig.accStyle[accVerticalValue][1],
            selfConfig.accSpeed
        ).end().stop().animate(
            selfConfig.accStyle[accVerticalValue][0],
            selfConfig.accSpeed
        ).addClass('active');
    };

    !(function(self){
        var selfConfig=self.config;
        selfConfig=$.extend(selfConfig, options);
        selfConfig.accStyle=[
            [
                {
                    width: selfConfig.accOpenValue
                },
                {
                    width: selfConfig.accCloseValue
                }
            ],
            [
                {
                    height: selfConfig.accOpenValue
                },
                {
                    height: selfConfig.accCloseValue
                }
            ]
        ];
        $(selfConfig.accWrap).children().eq(0).css(selfConfig.accStyle[Number(selfConfig.accVertical)][0]);
        event.on(selfConfig.accEle, function(){
            self.core($(this));
        }, $(selfConfig.accWrap), selfConfig.accType);
    })(this);

};

module.exports={
    accordion
};