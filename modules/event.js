let event={

    //绑定事件
    on(eventEle, eventFun, eventWrap=$(document), eventType='click'){
        eventWrap.on(eventType, eventEle, eventFun);
    },

    //移除事件
    off(eventEle, eventType='click', eventWrap=$(document)){
        eventWrap.off(eventType, eventEle);
    }

};

module.exports={
    event
};
