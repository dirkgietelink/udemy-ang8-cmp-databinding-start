import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:  string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:  string, serverContent: string}>();
  // newServerName = 'New Server';
  // newServerContent = 'A new Server!';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
    // Part of component lifecycle.
    // Other parts of the lifecycle:
    // ngOnChanges
    // ngOnInit
    // ngDoCheck
    // ngAfterContentInit
    // ngAfterContentChecked
    // ngAfterViewInit
    // ngAfterViewChecked
    // ngOnDestroy
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName:  nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:  nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
