import { Component }                from '@angular/core';


@Component({
  selector: 'my-footer',
  template: `
    <div class="footer-grey container">
        <span class="pull-left">©2016-2017 VCWSS All Rights Reserved.</span>
        <span class="pull-left"><a href="./user/privacy.html#privacy">隐私政策</a></span>
        <span class="pull-left"><a href="./user/privacy.html#terms">服务条款</a></span>
        <span class="pull-left"><a href="./sitemap/sitemap.html">网站地图</a></span>
    </div>
  `,
  styles:[`
    .footer-grey {
        padding-top: 0.875rem;
        padding-bottom:1rem;
        margin-bottom:1rem;
        border-top: 1px dashed #dcdcdc;
        color: #aaa;
        font-size: 0.875rem;
    }
    .footer-grey span a {
        padding-left: 10px;
        padding-right: 10px;
        color: #37a;
        text-decoration: none;
        cursor: pointer;
    }
    .footer-light {
        padding-top: 14px;
        padding-bottom: 20px;
        border-top: 1px dashed #dcdcdc;
        color: #aaa;
    }
    .footer-light span a {
        padding-left: 10px;
        padding-right: 10px;
        color: #37a;
        text-decoration: none;
        cursor: pointer;
    }
  `]
})
export class FooterComponent{

}