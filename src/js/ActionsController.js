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
        this.setUserPanelBehaviour();
        this.setContactsPanelBehaviour();
    }

    removeUser(who) {
        for (let elem of Array.from(document.getElementsByClassName('contact'))) {
            const curNickname = elem.getElementsByClassName('contact-nickname')[0].textContent;
            if (curNickname === who) {
                document.getElementsByClassName('contacts')[0].removeChild(elem);
                break;
            }
        }
    }

    async setContactsPanelBehaviour() {
        let contacts = Array.from(document.getElementsByClassName('contact'));
        console.log(contacts)
        for (let contact of contacts) {
            contact.addEventListener('mouseenter', (event) => {
                console.log('hover!')
            })

            contact.addEventListener('mouseleave', (event) => {
                console.log('unhover')
            });
        }
    }

    async setUserPanelBehaviour() {
        const statusElem = document.getElementsByClassName('widget-input-status-msg')[0];
        const avatarDropdown = document.getElementsByClassName('avatar-dropdown')[0];

        document.addEventListener('click', (event) => {
            event.preventDefault();

            if (event.target === statusElem) {
                statusElem.removeAttribute("disabled");
                statusElem.focus();
            } else if (event.target === document.getElementsByClassName('widget-user-panel-avatar')[0]) {
                avatarDropdown.classList.toggle('hidden');
                if (!avatarDropdown.classList.contains('hidden')) {
                    this.fillAvatarsTable();
                }
            } else if (event.target.classList.contains('table-pic')) {
                this.chatServise.changeAvatar(event.target.style.backgroundImage);
            } else {
                statusElem.setAttribute("disabled", "true");
                avatarDropdown.classList.add('hidden');
                if (this.chatServise !== null && this.chatServise !== undefined) {
                    this.chatServise.changeStatus(statusElem.value);
                }
            }
        });
    }

    changeStatus(who, content) {
        if (who === this.user.getNickname()) {
            document.getElementsByClassName('widget-input-status-msg')[0].value = content;
        }

        Array.from(document.getElementsByClassName('contact')).forEach((elem) => {
            const curNickname = elem.getElementsByClassName('contact-nickname')[0].textContent;
            if (curNickname === who) {
                elem.setAttribute("data-status", content);
                elem.getElementsByClassName('contact-status-hover')[0].textContent = 'status: ' + content;
            }
        });
    }

    changeAvatar(who, content) {
        if (who === this.user.getNickname()) {
            document.getElementsByClassName('widget-user-panel-avatar')[0].style.backgroundImage = content;
        }

        Array.from(document.getElementsByClassName('contact')).forEach((elem) => {
            const curNickname = elem.getElementsByClassName('contact-nickname')[0].textContent;
            if (curNickname === who) elem.getElementsByClassName('contact-pic')[0].style.backgroundImage = content;
        })
    }

    async fillAvatarsTable() {
        const table = document.getElementsByClassName('avatar-dropdown-table')[0];

        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        let index = 0;
        let row;
        let rowLength = 5;
        for (let entry of AvatarReceiver.avatars) {
            if (index === 0) row = document.createElement('tr');
            if (index < rowLength + 1) {
                let cell = document.createElement('td');
                cell.classList.add('table-pic');
                cell.style.backgroundImage = "url('data:image/png;base64, " + entry.content + "')";
                row.append(cell);
            }
            if (index === rowLength + 1) {
                table.append(row);
                index = -1;
            }
            index++;
        }
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
                this.user = new User(userInput, avatarContent);
                this.chatServise = new ChatService(this.user, this);
            }
        })
    }

    async allowEnter(receivedData) {
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
