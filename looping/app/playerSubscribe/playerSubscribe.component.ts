import { Component } from '@angular/core';

@Component({
    selector: "player-subscribe",
    template: "<subscription-form [interests]='players'></subscription-form>"
})

export class PlayerSubscribe {
    players = ["LeBron James", "Lionel Messi", "Manny Pacquiao"]
}

