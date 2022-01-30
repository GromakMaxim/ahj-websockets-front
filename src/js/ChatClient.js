export default class ChatClient {

    wsClient = null;

    constructor() {
        this.wsClient = new WebSocket('ws://localhost:9999');

        this.wsClient.onopen = function () {
            console.log('подключился');
        };
        this.wsClient.onmessage = function (message) {
            console.log('Message: %s', message.data);
        };
    }

    sendMsg(msg){
        console.log('worked')
        console.log(msg)
        this.wsClient.send(JSON.stringify({action: 'MSG', data: msg}));
    }



}
