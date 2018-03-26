import { Component } from "@angular/core";

@Component({
    selector: 'app-warningAlert',
    template: `
        <h1>Dude, this is an warning</h1>
    `,
    styles:  [`
        h1 {
            color: red;
        }
    `]
})

export class WarningAlert{
    
}