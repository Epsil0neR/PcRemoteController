import { Component, OnInit, HostListener } from '@angular/core';
import { WebSocketService } from 'src/app/services/_exports';

@Component({
  selector: 'rc-key-control',
  templateUrl: './key-control.component.html',
  styleUrls: ['./key-control.component.css']
})
export class KeyControlComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
  }

  @HostListener('click') onClick(){
    console.log('key-control: click');
  }
}
