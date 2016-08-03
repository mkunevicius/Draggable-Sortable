import React, {Component} from 'react';
import Sortable from 'sortablejs';

export default class Container extends Component {

  constructor(props, context) {
    super(props, context);

    this.sortableGroupDecoratorBlocks = (component) => {
      if (component !== null) {
        let options = {
          draggable: '.listItem',
          group: 'planItems',
          sort: false,
          onStart: this.onClick.bind(this),
          onEnd: this.onRelease.bind(this)
        };
        this.sortList = Sortable.create(component, options);
      }
    };

    this.sortableGroupDecoratorMain = (component) => {
      if (component !== null) {
        let options = {
          draggable: '.listItem',
          group: 'planItems',
          animation: 200,
          dataIdAttr: 'data-sortid',
          pull: 'clone',
          onStart: this.onClick.bind(this),
          onEnd: this.saveTargetSortOrder.bind(this)
        };
        this.sortListMain = Sortable.create(component, options);
      }
    };

  }

  saveTargetSortOrder(){
    let elements = this.sortListMain.toArray();
    console.log('blocks reordered: ', elements);
  }

  onClick(){
    console.log('block taken...')
  }

  onRelease(){
    console.log('block released')
  }

  render() {
    return (
      <div className='wrapper'>

        <div className='blocks'>
          <h1>BLOCKS</h1>
          <div className="itemList" ref={this.sortableGroupDecoratorBlocks}>
            <div className="listItem text" data-sortid="1">
              <h4>Lorem ipsum</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pharetra urna, scelerisque aliquet ante congue non. Maecenas tempus volutpat dictum. Aliquam eu aliquet eros. In euismod sem lorem, egestas suscipit massa efficitur id. Cras ultrices metus eu urna posuere fermentum. Proin a dui at mi euismod ultricies molestie eu orci. Quisque vitae dolor vitae quam suscipit cursus in sed massa. Nullam elit ante, pellentesque id nisi et, aliquet tempus nisi. Aliquam in ligula quis nulla venenatis convallis. Pellentesque eu laoreet lorem. Nullam accumsan purus feugiat, aliquet justo ut, tempor felis. In at tempor turpis.</p>
            </div>
            <div className="listItem" data-sortid="2"><img src='../img/01-min.jpg'></img></div>
            <div className="listItem" data-sortid="3"><img src='../img/02-min.jpg'></img></div>
            <div className="listItem" data-sortid="4"><img src='../img/03-min.jpg'></img></div>
            <div className="listItem" data-sortid="5"><img src='../img/04-min.jpg'></img></div>
            <div className="listItem text" data-sortid="6"><h1>The Best Block Ever</h1></div>
            <div className="listItem text" data-sortid="7"><h1>Absolutely Useless Block</h1></div>
            <div className="listItem text" data-sortid="8"><h1>Her Favorite Block</h1></div>
          </div>
        </div>

        <div className='mainPage'>
          <h1>MAIN PAGE</h1>
          <div className="target" ref={this.sortableGroupDecoratorMain}><h2>Drag some blocks here</h2></div>
        </div>

      </div>
    );
  }
}
