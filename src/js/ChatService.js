export default class ChatService {

    constructor(user) {
        this.user = user;
        this.addUserToPanel();
        this.setNewMessageSendFunction();
    }


    setNewMessageSendFunction() {
        const textArea = document.getElementsByClassName('chat-window-type-here')[0];
        textArea.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                console.log('enter pressed! ' + textArea.value);
                this.showMsgInChat();
            }
        })
    }

    async showMsgInChat() {
        const chatElem = document.getElementsByClassName('chat-window-log')[0];
        const newMsg = await this.buildNewMessage();
        console.log(newMsg)

        chatElem.children[0].before(newMsg);

        const textArea = document.getElementsByClassName('chat-window-type-here')[0];
        textArea.value = "";
    }

    async buildNewMessage() {
        const textArea = document.getElementsByClassName('chat-window-type-here')[0];

        const chatMessageElem = document.createElement('div');
        chatMessageElem.classList.add('chat-message');
        chatMessageElem.classList.add('owner');

        const messageInfoElem = document.createElement('div');
        messageInfoElem.classList.add('chat-message-info');
        const fromElem = document.createElement('div');
        fromElem.classList.add('message-from');
        fromElem.textContent = this.user.getNickname();
        messageInfoElem.appendChild(fromElem);
        const msgDateElem = document.createElement('div');
        msgDateElem.classList.add('message-date');
        messageInfoElem.appendChild(msgDateElem);

        chatMessageElem.appendChild(messageInfoElem);

        const msgContentElem = document.createElement('div');
        msgContentElem.classList.add('message-content');
        msgContentElem.textContent = textArea.value;

        chatMessageElem.appendChild(msgContentElem);

        return chatMessageElem;
    }

    async addUserToPanel() {
        const htmlUser = await this.buildNewUser(this.user);
        document.getElementsByClassName('contacts')[0].children[0].after(htmlUser);
    }


    async buildNewUser(user) {
        if (user.getNickname() === null || user.getNickname() === undefined) console.log('error has been occured while builind new user')
        if (user.getPicContent() === null || user.getPicContent() === undefined) console.log('error has been occured while builind new user')
        let contactElem = document.createElement('div');
        contactElem.classList.add('contact');

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

        statusElem.append(statusPicElem);
        statusElem.append(statusTextElem);

        contactData.append(statusElem);
        contactElem.append(contactData);

        return contactElem;
    }
}
