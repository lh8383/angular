(function () {
    angular.module('s1.list', ['s1.data'])
        .controller('listController', function ($scope, DataService) {
            var data = $scope.data =  {};
            data.list = DataService.getList();
            //定义一个新对象
            data.newGuest = {
                name: '',
                tel: ''
            }
            var actions = $scope.actions = {}
            actions.invite = function () {
                if (data.newGuest.name && data.newGuest.tel) {
                    data.list.push({
                        name: data.newGuest.name,
                        tel: data.newGuest.tel,
                        state: '未确认'
                    })
                }
                data.newGuest = {};
            }
            //设置嘉宾的状态
            actions.setGuestState = function(guest,state){
                guest.state = state;
            }
            //删除嘉宾信息
            actions.removeGuest = function(guest){
                var index = data.list.indexOf(guest);
                data.list.splice(index,1);
            }
        })
})()
