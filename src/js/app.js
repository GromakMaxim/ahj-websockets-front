import AvatarReceiver from "./AvatarReceiver";

export default class Main{

    async f() {
        const receiver = new AvatarReceiver();
        let response = await receiver.showAvatars();




    }

}

let main = new Main();
main.f();
