import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { stateBasic, IFbpNode } from '@scaljeri/fbp-core';
import { IFbpMainReady } from '@scaljeri/fbp-ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  state = stateBasic;

  @ViewChild('fbp') fbp: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      this.fbp.nativeElement.addEventListener('fbp-ready', ({detail}: { detail: IFbpMainReady}) => {
        detail.init(this.state);
    });
  }

  getChildNodes(node: IFbpNode): IFbpNode[] | null {
    if (node.type) {
      return null;
    }

    return Object.values(this.state.nodes).filter(childNode => childNode.parentId === node.parentId);
  }
}
