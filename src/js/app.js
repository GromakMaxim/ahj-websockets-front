import AvatarReceiver from "./AvatarReceiver";
import ActionsController from "./ActionsController";

export default class Main{

    async f() {
        const receiver = new AvatarReceiver();
        let response = await receiver.showAvatars();
        const actionsController = new ActionsController();



    }

}

let main = new Main();
main.f();
