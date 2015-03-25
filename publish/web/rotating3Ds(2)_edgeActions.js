
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text4}","click",function(sym,e){sym.play("start");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_project_classroom_need}","click",function(sym,e){sym.play("classroom_need");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_project_strategic_initiative}","click",function(sym,e){sym.play("strategic_initiative");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_project_faculty_grant}","click",function(sym,e){sym.play("faculty_grant");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_project_ppe_request}","click",function(sym,e){sym.play("ppe_request");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-93899376");