import {event} from './event';
let popup={

    config: {
        width: 420,
        height: 150,
        winWidth: $(window).width(),
        winHeight: $(window).height(),
        close: true,
        closeBeFun: null,
        html: null,
        btnOk: true,
        btnOkText: '确认',
        btnOkFun: null,
        btnCancel: false,
        btnCancelText: '取消',
        btnCancelFun: null
    },

    init(config){
        let selfConfig=this.config;
        selfConfig=$.extend(selfConfig, config);
        this.show();
        if(selfConfig.close){
            $('#J-popup').append('<a class="popup-close" id="J-popup-close"></a>');
        };
        this.bind(selfConfig);
    },

    show(){
        let selfConfig=this.config;
        let html=`
            <div class="popup" id="J-popup">
                ${selfConfig.html}
            </div>
            <div class="popup-mask" style="width: ${selfConfig.winWidth}px; height: ${selfConfig.winHeight}px"></div>
        `;
        $('body').append(html);
        this.animation({
            width: selfConfig.width,
            height: selfConfig.height,
            left: (selfConfig.winWidth-selfConfig.width)/2,
            top: (selfConfig.winHeight-selfConfig.height)/2,
            opacity: 1
        });
        this.appendBtn(selfConfig);
    },

    appendBtn(selfConfig){
        var btnHtml=`<div class="popup-btn">`;
        if(selfConfig.btnOk){
            btnHtml+=`<a id="J-popup-confirm">${selfConfig.btnOkText}</a>`;
        };
        if(selfConfig.btnCancel){
            btnHtml+=`<a id="J-popup-cancel">${selfConfig.btnCancelText}</a>`;
        };
        $('#J-popup').append(btnHtml+=`</div>`);
    },

    bind(selfConfig){
        let closeFun=() => (this.animation());
        let confirmFun= () => {
            if(selfConfig.btnOkFun){
                return selfConfig.btnOkFun;
            }else{
                return this.animation();
            };
        };
        let cancelFun= () => {
            if(selfConfig.btnCancelFun){
                return selfConfig.btnCancelFun;
            }else{
                return this.animation();
            };
        };
        event.on('#J-popup-close', closeFun);
        if(selfConfig.btnOk){
            event.on('#J-popup-confirm', confirmFun)
        };
        if(selfConfig.btnCancel){
            event.on('#J-popup-cancel', cancelFun);
        };
    },

    animation(options={
        width: 0,
        height: 0,
        left: '50%',
        top: '50%',
        opacity: 0
    }){
        $('#J-popup').animate({
            width: options.width,
            height: options.height,
            left: options.left,
            top: options.top,
            opacity: options.opacity
        }, 500, function(){
            if(options.width==0){
                $('#J-popup').next().remove().end().remove();
            }
        });
    }

};

module.exports={
    popup
};