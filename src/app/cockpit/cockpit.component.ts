import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; //accessing elements in template
  ;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {console.log(nameInput.value);
    //this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent });
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint() {console.log(this.newServerName);
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
