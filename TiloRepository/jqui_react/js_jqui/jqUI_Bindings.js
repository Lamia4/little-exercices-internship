/**
 * Konstruktorenaufrufe für jQuery UI Steuerelemente
 * Siehe JQuery UI API
 */
 HMI.makeControlElementBindings = function(){
    $('#myAccodion').accordion({
     heightStyle: "content", active: false, collapsible: true
    });
    $("#myButtonToToggle").button().click(function(){$("#myButtonJustAlerting").toggle( "slow", null);});
    $("#myButtonJustAlerting").button().click(function(){$("#myAlertDialog" ).dialog("open");});
    $("#myButtonJustCrying").button().click(HMI.justCrying);
    $("#myButtonOpenModal").button().click(function(){$("#myModalDialog" ).dialog("open");});
    $("#myButtonIncBar").button().click(HMI.incBar);
    $("#myButtonDecBar").button().click(HMI.decBar);
    $("#myModalDialog").dialog({autoOpen: false, modal:true, height: 400, width:600});
    $("#myAlertDialog" ).dialog({dialogClass: "alert", autoOpen: false});
    $("#myProgressbar" ).progressbar({max: 100, value:0});

}
