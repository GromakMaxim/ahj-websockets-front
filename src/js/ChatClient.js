export default class ChatClient {

    wsClient = null;

    constructor(user, actionsController) {
        if (user === null || user === undefined || actionsController === null || actionsController === undefined) throw new Error('unknown user');
        this.actionsController = actionsController;
        this.user = user;
        this.wsClient = new WebSocket('ws://localhost:9999');

        this.wsClient.onopen = function (wsClient) {
            console.log('подключился');

        };
        this.wsClient.onmessage = (message) => {
            message = JSON.parse(message.data);
            switch (message.action) {
                case 'WHOAREYOU':
                    let obj = {
                        "oper": "new_user",
                        "who": user.getNickname()
                    }
                    obj = JSON.stringify(obj);

                    this.wsClient.send(JSON.stringify({action: 'IAMNEW', data: obj}));

                    break;

                case 'WELCOME':
                    const receivedData = JSON.parse(message.data);
                    console.log(receivedData)
                    //in case: {status: 'ok', oper: 'new_user', who: 'енренрне'}
                    if (receivedData.status === 'ok' && receivedData.oper === 'new_user') {
                        console.log('successfully registered as \'' + receivedData.who + '\' ')
                        this.actionsController.allowEnter();
                    }

                    break;
                case 'IDNYOU':
                    console.log(message)
                    break;
                case 'MSG':
                    console.log(message);
                    break;
            }
        };
    }

    sendMsg(msg) {
        console.log('worked')
        msg = JSON.stringify(msg);
        this.wsClient.send(JSON.stringify({action: 'MSG', data: msg}));
    }


}
