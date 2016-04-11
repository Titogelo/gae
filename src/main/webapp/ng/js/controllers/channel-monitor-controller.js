angular.module('ARLearn').controller('ChannelMonitorController', function ($scope, $http, $rootScope) {

    var SocketHandler = function () {
        this.messageCallback = function () {
        };

        this.onMessage = function (callback) {
            var theCallback = function (message) {
                callback(JSON.parse(message.data));
            }

            if (this.channelSocket == undefined) {
                this.messageCallback = theCallback;
            } else {
                this.channelSocket.onmessage = theCallback;
            }
        }

        var context = this;
        this.socketCreationCallback = function (channelData) {
            var channel = new goog.appengine.Channel(channelData.token);
            context.channelId = channelData.channelId;
            var socket = channel.open();
            socket.onerror = function () {
                console.log("Channel error");
            };
            socket.onclose = function () {
                console.log("Channel closed, reopening");
                //We reopen the channel
                context.messageCallback = context.channelSocket.onmessage;
                context.channelSocket = undefined;
                $.getJSON("chats/channel", context.socketCreationCallback);
            };
            context.channelSocket = socket;
            console.log("Channel info received");
            console.log(channelData.channelId);
            context.channelSocket.onmessage = context.messageCallback;
        };
        $http.defaults.headers.common['Authorization'] = 'GoogleLogin auth=ya29.kQK7ma-ejSZk0e0BM_Kf21HZSmeNiCca7WxODi33BwmUdOR6S70cc1ybv_C9KU1qxegJ'; //Using $http we can set header also

        $http({url: "/rest/channelAPI/token", method: 'GET'}).success(this.socketCreationCallback);
        //$.getJSON("/rest/channelAPI/token", this.socketCreationCallback);
    }

    var socket = new SocketHandler();
    socket.onMessage(function (data) {
        $rootScope.$apply(function () {
            console.log(data);
            $scope.notifications.push({
                sort: new Date(),
                time: new Date().toISOString(),
                json: JSON.stringify(data,undefined,2)
            })

        });
        jQuery("time.timeago").timeago();
    });

    $scope.notifications = [];
    $scope.waitingForData = function(){
        $scope.notifications.length ==0;
    }

});