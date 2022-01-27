export default class User {
    constructor(nickname, picContent) {
        this._nickname = nickname;
        this._picContent = picContent;
    }


    getNickname() {
        return this._nickname;
    }

    setNickname(value) {
        this._nickname = value;
    }

    getPicContent() {
        return this._picContent;
    }

    setPicContent(value) {
        this._picContent = value;
    }
}
