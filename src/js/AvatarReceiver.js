export default class AvatarReceiver {
    static avatars = null;
    AVATARS_URL = "http://localhost:8888/?method=getPictures&content=avatars";
    BACKGROUND_URL = "http://localhost:8888/?method=getPictures&content=background";

    constructor() {
        this.showBackground();
        this.showAvatars();
    }


    async receivePics(url) {
        if (url === null || url === undefined) return null;

        const response = await fetch(url);
        let json = await response.json();
        return json;
    }

    async showAvatars() {
        const avatars = await this.receivePics(this.AVATARS_URL);
        const avatarElement = document.getElementsByClassName('window-login-avatar-selection')[0];
        avatarElement.style.backgroundImage = "url('data:image/png;base64, " + avatars[0].content + "')";
        AvatarReceiver.avatars = avatars;
        // console.log(avatars);
    }

    async showBackground() {
        const randomBgr = await this.receivePics(this.BACKGROUND_URL);
        const pageBody = document.getElementsByTagName('body')[0];
        pageBody.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url('data:image/png;base64, " + randomBgr.content + "')";
        pageBody.style.backgroundRepeat = 'no-repeat';
        pageBody.style.backgroundSize = 'cover';
        pageBody.style.backgroundAttachment = 'fixed';
        pageBody.style.backgroundPosition = 'top';
    }
}
