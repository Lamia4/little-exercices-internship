'use strict';
/**
Beispiel für eine eigene React Button Klasse
Die kann noch nicht sehr viel, außer event binding
*/
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    //alert ('constructed');
  }
  render() {
      return (
        <button onClick={this.props.onClickBinding}>
          {this.props.text}
        </button>
      );
    }
}
