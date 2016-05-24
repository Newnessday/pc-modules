import {accordion} from '../modules/accordion';
new accordion({
    accOpenValue: 800,
    accCloseValue: 60
});
new accordion({
    accWrap: '#accordion1',
    accOpenValue: 360,
    accCloseValue: 60,
    accVertical: true,
    accType: 'mouseover'
});