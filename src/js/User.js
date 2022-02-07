export default class User {
    constructor(nickname, picContent, status) {
        this._nickname = nickname;
        this._picContent = picContent;
        if (status !== null && status !== undefined) {
            this._status = status;
        } else {
            this._status = "";
        }

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
