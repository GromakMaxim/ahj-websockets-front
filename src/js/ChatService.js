import DateHandler from "./DateHandler";
import ChatClient from "./ChatClient";
import User from "./User";

export default class ChatService {

    constructor(user, actionsController) {
        if (user === null || user === undefined || actionsController === null || actionsController === undefined) throw new Error('cant init Chat Service ')
        this.actionsController = actionsController;
        this.user = user;
        this.chatClient = new ChatClient(this.user, this.actionsController, this);
    }


    setNewMessageSendFunction() {
        const textArea = document.getElementsByClassName('chat-window-type-here')[0];
        textArea.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                let msg = textArea.value.trim();

                let obj = {
                    "from": this.user.getNickname(),
                    "msg": msg
                }
                this.chatClient.sendMsg(obj);
            }
        })

        const sendBtn = document.getElementsByClassName('chat-window-send')[0];
        sendBtn.addEventListener('click', (event)=>{
           event.preventDefault();

            let msg = textArea.value.trim();

            let obj = {
                "from": this.user.getNickname(),
                "msg": msg
            }
            this.chatClient.sendMsg(obj);
        });
    }

    async receiveMessage(msg) {
        // {from: 'керкерк', msg: 'крпкркр'}
        this.showMsgInChat(msg.from, msg.msg);

        console.log(msg)
    }

    async showMsgInChat(from, msg) {
        const chatElem = document.getElementsByClassName('chat-window-log')[0];
        const newMsg = await this.buildNewMessage(from, msg);
        console.log(newMsg)

        chatElem.children[0].before(newMsg);

        const textArea = document.getElementsByClassName('chat-window-type-here')[0];
        textArea.value = "";
    }

    async buildNewMessage(from, msg) {
        const chatMessageElem = document.createElement('div');
        chatMessageElem.classList.add('chat-message');
        if (from === this.user.getNickname()) {
            chatMessageElem.classList.add('owner');
        }

        const messageInfoElem = document.createElement('div');
        messageInfoElem.classList.add('chat-message-info');
        const fromElem = document.createElement('div');
        fromElem.classList.add('message-from');
        fromElem.textContent = from;
        messageInfoElem.appendChild(fromElem);
        const msgDateElem = document.createElement('div');
        msgDateElem.classList.add('message-date');
        msgDateElem.textContent = DateHandler.getCurrentDate('dd.MM.yyyy');
        messageInfoElem.appendChild(msgDateElem);

        chatMessageElem.appendChild(messageInfoElem);

        const msgContentElem = document.createElement('div');
        msgContentElem.classList.add('message-content');
        msgContentElem.textContent = msg;

        chatMessageElem.appendChild(msgContentElem);

        return chatMessageElem;
    }

    async addUserToPanel() {
        const htmlUser = await this.buildNewUser(this.user);
        document.getElementsByClassName('contacts')[0].children[0].after(htmlUser);

        const userPanelNickname = document.getElementsByClassName('widget-user-panel-data-nickname')[0];
        userPanelNickname.textContent = this.user.getNickname();
        const userPanelAvatar = document.getElementsByClassName('widget-user-panel-avatar')[0];
        userPanelAvatar.style.backgroundImage = this.user.getPicContent();

    }

    async addOtherUsers(receivedData) {
        let arr = JSON.parse(receivedData.payload);
        let usersArr = [];

        for (let item of arr) {
            let parsed = JSON.parse(item);
            usersArr.push(new User(parsed[0], parsed[1].pic, parsed[1].status));
        }

        let otherContacts = Array.from(document.getElementsByClassName('contacts')[0].children);
        otherContacts.forEach(elem => {
            if (!elem.classList.contains("room-title")) {
                elem.parentNode.removeChild(elem);
            }
        });

        for (let u of usersArr) {
            const htmlUser = await this.buildNewUser(u);
            document.getElementsByClassName('contacts')[0].children[0].after(htmlUser);
        }
    }

    async buildNewUser(user) {
        if (user.getNickname() === null || user.getNickname() === undefined) console.log('error has been occured while builind new user')
        if (user.getPicContent() === null || user.getPicContent() === undefined) console.log('error has been occured while builind new user')
        let contactElem = document.createElement('div');
        contactElem.classList.add('contact');
        contactElem.setAttribute("data-status", user.getStatus());

        let contactPicElem = document.createElement('div');
        contactPicElem.classList.add('contact-pic');
        contactPicElem.style.backgroundImage = user.getPicContent();

        contactElem.append(contactPicElem);

        let contactData = document.createElement('div');
        contactData.classList.add('contact-data');
        let nicknameElem = document.createElement('div');
        nicknameElem.classList.add('contact-nickname');
        nicknameElem.textContent = user.getNickname();
        contactData.append(nicknameElem);


        let statusElem = document.createElement('div');
        statusElem.classList.add('contact-status');

        let statusPicElem = document.createElement('div');
        statusPicElem.classList.add('contact-status-pic');

        let statusTextElem = document.createElement('div');
        statusTextElem.classList.add('contact-status-text');
        statusTextElem.textContent = 'Online';

        let statusHover = document.createElement('div');
        statusHover.classList.add('contact-status-hover');
        statusHover.classList.add('hidden');
        statusHover.textContent = 'status: ' + user.getStatus();

        statusElem.append(statusPicElem);
        statusElem.append(statusTextElem);

        contactData.append(statusElem);
        contactElem.append(contactData);
        contactElem.append(statusHover);

        contactElem.addEventListener('mouseenter', (event) => {
            if (contactElem.getAttribute("data-status") !== null && contactElem.getAttribute("data-status") !== undefined
                && contactElem.getAttribute("data-status").length !== 0) {
                statusHover.classList.remove('hidden');
            }
        });

        contactElem.addEventListener('mouseleave', (event) => {
            statusHover.classList.add('hidden');
        });

        return contactElem;
    }

    async changeAvatar(content) {
        this.chatClient.changeAvatar(content);
    }

    async changeStatus(status) {
        this.chatClient.changeStatus(status.trim());
    }
}
