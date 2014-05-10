'use strict';

angular.module('TimeSheet.services', []).
    value('version', '0.1');

angular.module('TimeSheet.websocket', ['TimeSheet.django']).service('WebSocket', function (websocket_uri, ws4redis_heartbeat) {
    this.receive = function (receiveMessage) {
        return new WS4Redis({
            uri: websocket_uri + 'foobar?subscribe-broadcast&publish-broadcast',
            receive_message: receiveMessage,
            heartbeat_msg: ws4redis_heartbeat
        });
    }
});