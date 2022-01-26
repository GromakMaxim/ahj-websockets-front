import AvatarReceiver from "./AvatarReceiver";

export default class ActionsController {
    index = 0;

    constructor() {
        this.setBtnLeft();
        this.setBtnRight();
    }

    setBtnLeft() {
        const btnElement = document.getElementsByClassName('window-login-avatar-selection-arr-left')[0];
        btnElement.addEventListener('click', (event) => {
            event.preventDefault();

            if (this.index === 0) this.index = AvatarReceiver.avatars.length-1;
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

            if (this.index === AvatarReceiver.avatars.length-1) this.index = 0;
            else this.index++;
            const avatarElement = document.getElementsByClassName('window-login-avatar-selection')[0];
            avatarElement.style.backgroundImage = "url('data:image/png;base64, " + AvatarReceiver.avatars[this.index].content + "')";

            console.log(this.index)
        })
    }

    getIndex() {
        return this.index;
    }
}
