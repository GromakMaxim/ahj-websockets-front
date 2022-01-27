export default class ChatService {

    constructor(user) {
        this.user = user;
    }


    buildNewUser(user) {
        // let contactList = [];
        // Array.from(document.getElementsByClassName('contacts')[0].children)
        //     .forEach((contact) => {
        //         if (contact.classList.contains('contact')) contactList.push(contact);
        //     });
        // console.log(0)

        let contactElem = document.createElement('div');
        contactElem.classList.add('contact');

        let contactPicElem = document.createElement('div');
        contactPicElem.classList.add('contact-pic');
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

    }
}
