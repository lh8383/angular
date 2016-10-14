void function () {
    angular.module('s1.data', [])
        .factory('DataService', function () {
            var dataObj = {};

            var guestList = [
                {name: '张三', tel: '13333333333', state: '未确认'}
            ];
            var currentGuest = null;

            // 获取全部列表
            dataObj.getList = function () {
                return guestList;
            };
            // 通过电话号码获取嘉宾信息
            dataObj.getGuestByTel = function (tel) {
                var newArray = guestList.filter(function (item) {
                    return item.tel == tel;
                });
                
                return newArray[0];
            };
            // 设置或者获取当前嘉宾
            dataObj.setCurrentGuest = function (guestInfo) {
                currentGuest = guestInfo;
            };
            dataObj.getCurrentGuest = function () {
                return currentGuest;
            };

            // //通过电话获取嘉宾信息
            // dataObj.getGuestByTel = function(tel){
            //     var newArr = guestList.filter(function(item){
            //         return item.tel === tel;
            //     })
            //     return newArr[0]
            // }
            return dataObj;
        })
}();