// var timer;
// attr 执行动画样式 left top width height
// speed 都是正值
// callback 在动画执行完毕执行
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));

    // 判断speed正负
    // 如果从0 到800，必须正值， 如果想按必须是负的
    if (current > target) {
        // 此时速度应该是负值
        speed = -speed;
    }

    obj.timer = setInterval(function () {

        var odl = parseInt(getStyle(obj, attr));
        var newValue = odl + speed;

        obj.style[attr] = newValue + 'px';

        // 向左移动，判断大于小于号
        if ((newValue < target && speed < 0) || (speed > 0 && newValue > target)) {
            newValue = target;
        }

        // 移动到800px就停止
        if (newValue == target) {
            clearInterval(obj.timer);

            // 调用callback,有就执行，没有就算了
            callback && callback();
        }
    }, 30)
}
function getStyle(obj, name) {
    // return getComputedStyle(obj, null)[name];
    // 如果只是getCOmputedStyle没有的话会报错，如果用window就变成属性，没有的话就是undefined
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

 // cn className
 function addClass(obj, cn){
    if(hasClass(obj, cn)){
        obj.className += ' ' + cn;
    };
}

// 哦按段一个元素是否含有指定class值
function hasClass(obj, cn){
    var reg = new RegExp('\\b'+cn+'\\b');
    return reg.test(obj.className);
}

function removeClass(obj, cn){
    var reg = new RegExp('\\b'+cn+'\\b');
    obj.className = obj.className.replace(reg, '');
}

// 切换一个类
// 如果元素中有，就删除，没有就加上
function toggleClass(obj, cn){
    if(hasClass(obj, cn)){
        removeClass(obj, cn);
    }else{
        addClass(obj, cn);
    }
}
