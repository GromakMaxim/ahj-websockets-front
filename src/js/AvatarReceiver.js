export default class AvatarReceiver {

    constructor() {
        this.baseUrl = "https://api.github.com/repos/GromakMaxim/pics_front_source/";
    }

    async getLastSha() {
        const endpoint = "commits";
        let url = this.baseUrl + endpoint;
        console.log(url)
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            console.log(json)
            return json[0].sha;
        } else {
            throw new Error('smth wrong with github!');
        }

    }

    async getPicsUrlList() {
        const endpoint = await this.getLastSha();
        let url = this.baseUrl + "commits/" + endpoint;
        console.log(url)
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json.files;
        } else {
            throw new Error('smth wrong with github!');
        }
    }
}
