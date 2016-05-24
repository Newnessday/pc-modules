/**
 * @fileOverview
 * @time 2016/5/23
 * @author liugang
 * */
import {event} from '../modules/event';
event.on('button', function(){
    alert('成功绑定事件11');
});
event.on('input', function(){
    event.off('button');
})
