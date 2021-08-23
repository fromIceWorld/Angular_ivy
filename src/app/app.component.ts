import { Component, ContentChild, Optional, ViewChild } from '@angular/core';
import { IndexService } from './services/index.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IndexService],
})
export class AppComponent {
  @ViewChild('dir') dir;
  @ContentChild('content') content;
  myContext = { $implicit: 'World', localSk: 'Svet' };
  title = 'debugger';
  constructor(@Optional() private ser: IndexService) {}
  directiveStyleOrClass: boolean = true;
  handleEvent($event) {
    console.log($event);
  }
  ngOnChanges() {
    console.log('主页面：', 'ngOnChanges');
  }
  ngOnInit() {
    console.log('模块依赖注入', this.ser);

    console.log('主页面：', 'ngOnInit');
  }
  ngDoCheck() {
    console.log('主页面：', 'ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('主页面：', 'ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('主页面：', 'ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('主页面：', 'ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('主页面：', 'ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('主页面：', 'ngOnDestroy');
  }
}
