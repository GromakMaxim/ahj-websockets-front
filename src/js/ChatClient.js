export default class ChatClient {

    wsClient = null;

    constructor(user, actionsController, chatService) {
        if (user === null || user === undefined || actionsController === null || actionsController === undefined) throw new Error('unknown user');
        this.actionsController = actionsController;
        this.chatService = chatService;
        this.user = user;
        this.wsClient = new WebSocket('ws://localhost:9999');

        this.wsClient.onopen = function (wsClient) {
            console.log('подключился');

        };

        this.wsClient.onmessage = (message) => {
            message = JSON.parse(message.data);

            switch (message.action) {
                case 'GOODBYE':
                    let response = JSON.parse(message.data);
                    if (response.oper === 'user_left') {
                        this.actionsController.removeUser(response.who);
                    }

                    break;
                case 'AVATAR':
                    let temp = JSON.parse(message.data);
                    if (temp.status === 'ok' && temp.oper === 'avatar_changed') {
                        console.log(temp)
                        this.actionsController.changeAvatar(temp.who, JSON.parse(temp.changeTo));
                    }

                    break;
                case 'WHOAREYOU':
                    let obj = {
                        "oper": "new_user",
                        "who": user.getNickname(),
                        "payload": {
                            "pic": user.getPicContent(),
                            "status": "",
                        }
                    }
                    obj = JSON.stringify(obj);

                    this.wsClient.send(JSON.stringify({action: 'IAMNEW', data: obj}));

                    break;

                case 'WELCOME':
                    let receivedData = JSON.parse(message.data);
                    //in case: {status: 'ok', oper: 'new_user', who: 'testtest2', payload: {…}}
                    if (receivedData.status === 'ok' && receivedData.oper === 'new_user'
                        && receivedData.who === this.user.getNickname()) {

                        console.log('successfully registered as \'' + receivedData.who + '\' ')
                        console.log(receivedData)
                        this.actionsController.allowEnter(receivedData);
                    }

                    if (receivedData.status === 'ok' && receivedData.oper === 'new_user' && receivedData.who !== this.user.getNickname()) {
                        console.log('new user: \'' + receivedData.who + '\' ')
                        this.chatService.addOtherUsers(receivedData)
                    }
                    break;
                case 'IDNYOU':
                    console.log(message)
                    break;
                case 'MSG':
                    message = JSON.parse(message.data);
                    this.chatService.receiveMessage(message);
                    break;
            }
        };
    }

    sendMsg(msg) {
        console.log('worked')
        msg = JSON.stringify(msg);
        this.wsClient.send(JSON.stringify({action: 'MSG', data: msg}));
    }

    async changeAvatar(content) {
        content = JSON.stringify(content);
        let obj = {
            "oper": "avatar_changed",
            "who": this.user.getNickname(),
            "changeTo": content,
        }
        let msg = JSON.stringify(obj);
        this.wsClient.send(JSON.stringify({action: 'AVATAR', data: msg}))
    }

    async changeStatus(status) {
        let obj = {
            "oper": "status_changed",
            "who": this.user.getNickname(),
            "changedTo": status,
        }
        let msg = JSON.stringify(obj);
        this.wsClient.send(JSON.stringify({action: 'STATUS', data: msg}))
    }
}
