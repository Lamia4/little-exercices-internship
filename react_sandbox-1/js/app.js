$( document ).ready(function() {
    const dataLabels = [];
    dataLabels.push('Temperatur');
    dataLabels.push('Druck');
    dataLabels.push('pH');
    dataLabels.push('Füllstand');
    
    $('#id1').append('<button>per JQ eingefügt</button>');
    $('#id2').button({label: "JQ UI Button"});

    class ButtonGenerator {
        
        static ButtonsCreated=0;
        
        constructor(node){
            ButtonGenerator.ButtonsCreated++;
            this.targetNode=node;
            this.clickCounter=0;
            $(node).button({
                label: "JQ UI Button aus Klasse"
            });
        }

        internalClickHandler(){
            console.log();
            alert ('Button ' + this.targetNode + ' wurde ' + this.clickCounter + ' mal gedrückt' );
            this.clickCounter++;
        }
    }

    var Button3 = new ButtonGenerator('#id3'); //konstruktion
    $('#id3').button().click(function(){Button3.internalClickHandler()}); //binding des clicks
    
    var Button4 = new ButtonGenerator('#id4'); //konstruktion
    $('#id4').button().click(function(){Button4.internalClickHandler()}); //binding des clicks
    console.log(ButtonGenerator.ButtonsCreated);
    console.log(dataLabels);
    const array = [];
    dataLabels.map((element, i) => {
        $('#id5').append(<button></button>);
        $('button').append()
        array.push(new ButtonGenerator(element));

    })

});
