import { Component }                from '@angular/core';
interface ContactForm{
    name: string;
    email: string;
    tele?: number;
    thema: string;
    title: string;
    content: string;
}

@Component({
    selector: 'my-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
    private options = ['申请加入','赞助合作','交流访问','其他'];

    private submitted = false;

    private model:ContactForm = {
        name: '',
        email: '',
        tele: null,
        thema: '',
        title: '',
        content: ''
    }

    onsubmit() { this.submitted = true;}
}