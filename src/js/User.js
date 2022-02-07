export default class User {
    constructor(nickname, picContent, status) {
        this._nickname = nickname;
        this._picContent = picContent;
        this._status = status;
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

    getStatus() {
        return this._status;
    }

    setStatus(value) {
        this._status = value;
    }
}
