
/**zentrale Interface Steuerung
* hier sind einzelen zu bindende methoden hinterlegt
 *
 *@author TK, 12/2021, version 1.0.1
 *
*/
"use strict";

var HMI = {

  /**

  */
  justCrying(){
    alert('hit me harder');
  },
  incBar(){
    var v = $( "#myProgressbar" ).progressbar( "value" );
    alert(v);
    $( "#myProgressbar" ).progressbar( "option", "value", v + 10 );
  },
  decBar(){
    var v = $( "#myProgressbar" ).progressbar( "value" );
    alert(v);
    $( "#myProgressbar" ).progressbar( "option", "value", v - 10 );
  },
  makeCheckboxes(){
    for (var i = 0; i < 4; i++) {
      $( '#genericControls' ).append(
        '<br><label for="checkbox_label_' + i +'">' + String(i) +
        '<input type="checkbox" name="checkbox_name_' + i + '" class="myCheckB" id="checkbox_id_' + i + '">' +
        '</label>'
      );
      $( "#checkbox_id_" + i ).checkboxradio();
      $( "#checkbox_id_" + i ).prop('checked',i % 2 == 1).checkboxradio('refresh');

    }
  },

}
