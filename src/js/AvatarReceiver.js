export default class AvatarReceiver {

    constructor() {
        this.baseUrl = "http://localhost:8888/?method=getPictures&content=avatars"; //test
    }


    async receivePics(){
        const response = await fetch(this.baseUrl);
        let json = await response.json();
        return json;
    }

    async showAvatars() {
        const avatars = await this.receivePics();
        const avatarElement = document.getElementsByClassName('window-login-avatar-selection')[0];
        console.log(avatarElement.style)
        avatarElement.style.backgroundImage = "url('data:image/png;base64, " + avatars[0].content + "')";
        // console.log(avatars[0].content)

    }
}
