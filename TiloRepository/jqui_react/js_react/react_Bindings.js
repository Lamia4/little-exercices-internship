"use strict";
/**
 * Konstruktorenaufrufe für React Steuerelemente
 *
 */


   //hier wird der theme provider eingehängt
    ReactDOM.render(
        <ThemeProvider theme={theme}>
          <div id="react_mui_accordion"></div>
        </ThemeProvider>,
      document.getElementById('root'),
    );


   //hier wird der Konstruktur der React Instanz eines Buttons aufgerufen
   //Klassenname, die zu bindende Funktion an den Klick als Prop und Button Text als Child werden übergeben
   //zum schluss noch der id anker zum DOM-Element
   ReactDOM.render(
      <MyButton   text="Mein statischer Button Text"
                  onClickBinding = {HMI.onClickmyFirstButton}
      />,
      document.getElementById('react_button')
   );

   /**
   Das ist der Aufruf einer vorgefertigten react mui klasse für Accordion
*/

   ReactDOM.render(
      <div>
         <Accordion>
            <AccordionSummary>
               <Typography color="text.secondary">
                  <LightBulbIcon sx={{ mr: 1, verticalAlign: 'top' }} />
                  Accordion 1 Headline
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               Details Accordion 1
               <Button  variant="contained"
                        onClick={HMI.onClickmyFirstButton}>

               Text</Button>
            </AccordionDetails>
         </Accordion>
      </div>,
      document.getElementById('react_mui_accordion')
   );
