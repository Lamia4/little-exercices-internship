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
        <button style = {{background: "red"}} onClick={this.props.onClickBinding}>
          {this.props.text}
        </button>
      );
    }
}

// function MyButton (i, item) {

//   return (

//     <div>
//       <button key={i} style = {{background: "red"}}>{item}</button>
//     </div>
//   )

// }