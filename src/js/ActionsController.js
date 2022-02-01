import AvatarReceiver from "./AvatarReceiver";
import User from "./User";
import ChatService from "./ChatService";

export default class ActionsController {
    index = 0;
    LOGIN_MIN_LENGTH = 5;
    LOGIN_MAX_LENGTH = 13;

    constructor() {
        this.setBtnLeft();
        this.setBtnRight();
        this.setLoginInputInteraction();
        this.setEnterBtn();
    }

    async setEnterBtn() {
        const loginBtn = document.getElementsByClassName('window-login-confirm')[0];
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const inputElem = document.getElementsByClassName('window-input-login')[0];
            let userInput = inputElem.value;

            if (userInput.length > this.LOGIN_MIN_LENGTH && userInput.length < this.LOGIN_MAX_LENGTH && !userInput.includes(" ")) {
                const avatarElement = document.getElementsByClassName('window-login-avatar-selection')[0];
                const avatarContent = avatarElement.style.backgroundImage;
                const user = new User(userInput, avatarContent);
                this.chatServise = new ChatService(user, this);
            }
        })

    }

    async allowEnter(receivedData){
        const loginWindow = document.getElementsByClassName('window-login')[0];
        const widget = document.getElementsByClassName('widget')[0];
        loginWindow.classList.add('hidden');
        widget.classList.remove('hidden');
        await this.chatServise.addUserToPanel();
        await this.chatServise.addOtherUsers(receivedData);
        this.chatServise.setNewMessageSendFunction();
    }

    setBtnLeft() {
        const btnElement = document.getElementsByClassName('window-login-avatar-selection-arr-left')[0];
        btnElement.addEventListener('click', (event) => {
            event.preventDefault();

            if (this.index === 0) this.index = AvatarReceiver.avatars.length - 1;
            else this.index--;

            const avatarElement = document.getElementsByClassName('window-login-avatar-selection')[0];
            avatarElement.style.backgroundImage = "url('data:image/png;base64, " + AvatarReceiver.avatars[this.index].content + "')";
            console.log(this.index)
        })
    }

    setBtnRight() {
        const btnElement = document.getElementsByClassName('window-login-avatar-selection-arr-right')[0];
        btnElement.addEventListener('click', (event) => {
            event.preventDefault();

            if (this.index === AvatarReceiver.avatars.length - 1) this.index = 0;
            else this.index++;
            const avatarElement = document.getElementsByClassName('window-login-avatar-selection')[0];
            avatarElement.style.backgroundImage = "url('data:image/png;base64, " + AvatarReceiver.avatars[this.index].content + "')";

            console.log(this.index)
        })
    }

    setLoginInputInteraction() {
        const inputElem = document.getElementsByClassName('window-input-login')[0];
        inputElem.addEventListener('input', (event) => {
            event.preventDefault();

            const acceptBtn = document.getElementsByClassName('window-login-confirm')[0];
            let userInput = inputElem.value;
            if (userInput.length > this.LOGIN_MIN_LENGTH && userInput.length < this.LOGIN_MAX_LENGTH && !userInput.includes(" ")) {
                acceptBtn.classList.remove('off');
                acceptBtn.classList.add('on');
            } else {
                acceptBtn.classList.remove('on');
                acceptBtn.classList.add('off');
            }
        })
    }
}
