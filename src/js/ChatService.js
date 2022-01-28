export default class ChatService {

    constructor(user) {
        this.user = user;
        this.addUserToPanel();
    }


    setNewMessageSendFunction(){
        const inputFieldElem = document.getElementsByClassName('chat-window-type-here')[0];
    }

    async addUserToPanel(){
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
