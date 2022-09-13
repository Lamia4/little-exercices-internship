'use strict';
/**
Beispiel für eine eigene React Button Klasse
Die kann noch nicht sehr viel, außer event binding
*/
class MyButton extends React.Component {
  constructor(props) {
    super(props);
   // This binding is necessary to make `this` work in the callback
    this.clickMessage = this.clickMessage.bind(this);
  }
  
  clickMessage(){
    alert(aa.tags.cI[this.props.index] + " wurde geklickt");
  }
  
  
  //echt fieses workaround um den index aus props instanzattribut zu bekommen
  render() {

      return (
        <div style={{background: "pink", display: "flex", flexWrap: "wrap", width: "700px", margin: "30px"}}>
        <button style={{ background: "red" , margin: "10px", width: "200px", height: "30px" }} onClick={this.clickMessage}>
          {aa.tags.cI[this.props.index]} 
        </button>
        </div>

      );
    }
}
