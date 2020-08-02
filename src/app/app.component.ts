import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IFbpNode, stateBasic } from '@scaljeri/fbp-core';
import { IFbpMainReady } from '@scaljeri/fbp-ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  state = stateBasic;

  @ViewChild('fbp') fbp: ElementRef;

  ngOnInit(): void {
    // flowManager(this.element)

  }

  ngAfterViewInit(): void {
      this.fbp.nativeElement.addEventListener('fbp-ready', ({detail}: { detail: IFbpMainReady}) => {

        // detail.init(this.state as any); // TODO
    });
  }

  getRoodChildNodes(): IFbpNode[] {
    return this.getChildNodes();
  }

  getChildNodes(node: IFbpNode = {}): IFbpNode[] | null {
    if (node.type) {
      return null;
    }

    return Object.values(this.state.nodes).filter(child => child.parentId === node.id);
  }
}
