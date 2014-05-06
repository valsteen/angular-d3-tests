'use strict';

angular.module('TimeSheet.services', []).
  value('version', '0.1');

angular.module('TimeSheet.websocket', ['TimeSheet.django']).service('WebSocket', function (websocket_uri, ws4redis_heartbeat) {

    function receiveMessage(msg) {
        console.log(msg)
    }

    angular.extend(this, WS4Redis({
        uri: websocket_uri + 'foobar?subscribe-user',
        receive_message: receiveMessage,
        heartbeat_msg: ws4redis_heartbeat
    }));
});