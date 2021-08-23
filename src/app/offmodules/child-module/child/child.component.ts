import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildComponentService } from './child.component.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  providers: [ChildComponentService],
  styleUrls: ['./child.component.css', '../../../app.component.css'],
})
export class ChildComponent implements OnInit {
  @Output('childEmit') childEmit = new EventEmitter<string>();
  @Input('tochild') tochild;
  constructor(private childService: ChildComponentService) {
    console.log(this.childService);
  }

  ngOnChanges() {
    console.log('child页面：', 'ngOnChanges');
  }
  ngOnInit() {
    console.log('child页面：', 'ngOnInit');
  }
  ngDoCheck() {
    console.log('child页面：', 'ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('child页面：', 'ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('child页面：', 'ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('child页面：', 'ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('child页面：', 'ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('child页面：', 'ngOnDestroy');
  }
}
