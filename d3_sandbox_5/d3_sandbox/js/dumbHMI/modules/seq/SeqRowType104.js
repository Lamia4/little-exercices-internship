/**
 *  Seq Action 104
 warte auf eingangsdifferenz >= wert
 *
 *  *@author TK, 06/2021, version 1.0.1
 */
"use strict";
class SeqRowType104 extends SeqRowTypeX{

  constructor(seq,r,indexRow){
    super(r);
    this.name=seq.getInputName(r.parUINT[1]);
    this.unit=seq.getInputUnit(r.parUINT[1]);
    this.globalValue=seq.getGlobal(r.globalCon[0],indexRow + 1,this.unit);
    if (this.globalValue===false){
      this.value=BinaryBRStructFile.roundWithUnit(r.parReal[0],this.unit);
    }else {
      this.value = BinaryBRStructFile.roundWithUnit(this.globalValue.value,this.unit);
    }

    this.conditionStep="next";
    if (r.parUINT[4] > 0) this.cancelStep= String(r.parUINT[4]);

    this.useTimeout=r.parBOOL[0];

    this.timeoutStep="next";
    if (r.parUINT[5] > 0) this.timeoutStep= String(r.parUINT[5]);

    this.globalTimeout=seq.getGlobal(r.globalCon[1],indexRow + 1,"min");
    if (this.globalTimeout===false){
      this.timeout=r.parUDINT[0];
    }else {
      this.timeout = this.globalTimeout.value;
    }
    this.timeout+=r.parUINT[2];

    this.option="<br>Absolute value is compared, direction does not matter";
    if (r.parUINT[3]===1) this.option="<br>only rising value is accepted";
    if (r.parUINT[3]===2) this.option="<br>only falling value is accepted";
  }

  getActionDiv(){

    var back= '<div class="seqTransitionEntry">Wait for input channel <span class="seqInputValue">' + this.name + '</span>' +
              ' deviation &gt;= <span class="seqInputValue">' + this.value + " " + this.unit + '</span> ';
    if (this.globalValue!== false)
      back+=" " + this.globalValue.text;
    back+='<br> then jump to '+   this.conditionStep;
    back+=this.option;
    var timeouttext="<br> Timeout on " + this.timeout + ' min enabled, jumping to ' + this.timeoutStep;
    if (this.globalTimeout!== false)
      timeouttext+=" " + this.globalTimeout.text;
    if (this.useTimeout) back+=timeouttext;
    back+="</div>";
    return back;
  }

}
