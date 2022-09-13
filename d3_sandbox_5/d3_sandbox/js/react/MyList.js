'use strict';



class MyList extends React.Component {
  
    constructor(props) {
      super(props); 
   
    }
    render() {
      const incomings = aa.tags.cI;
      const buttons =[];
      for (var i = 0; i < (incomings.length) && (incomings[i].length > 0); i++) {
        buttons.push(<MyButton key = {i} index = {i}/>);  
      }
    
    return (  
        <div>
        <h1>
          Die Button Liste:
        </h1> 
          {buttons}
        </div>
      );
    }
  }