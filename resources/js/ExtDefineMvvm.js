//Tools Grab Object References Relative To Other Object References if in MVVM Mode

Ext.define('Mvvm', function (me) {
	'use strict';

 self.Mvvm = me; // global execution context alias
 
 function getViewPort() {
    return Ext.ComponentQuery.query('viewport')[0];
 }

 function getTopmostWindow() {
    var window = Ext.WindowManager.getActive(),
        xtypes = window.xtypes;
    if(!/messagebox/i.test(window)) return window;
 } 
 
  function getTopmostWindowViewModel() {
    var window = Ext.WindowManager.getActive(),
        xtypes = window.xtypes;
    if(!/messagebox/i.test(window)) return window.getViewModel();
 } 
		
 function _checkForParentViewModel(component) {
    var parent = component ? component.getViewModel().getParent() : this.getViewModel().getParent();
    if (parent) return true; 
    else return false;
  }
  
  function getParentViewModel(component) {
    if(_checkForParentViewModel(component)) return component ? component.getViewModel().getParent() : this.getViewModel().getParent();
    else return console.log('No Parent Model Is Accessable');
  }
  
  function getParentVMReferences(component) {
    var parentVM = getParentViewModel(component);
    if(parentVM) return parentVM.getData();
  }
  
  function getParentVMReferenceData(reference, component) {
    var parentVM = getParentViewModel(component);
    if(parentVM) return parentVM.getData()[reference];
  }
  
  function lookupParentReference(reference, component) {
    var parentView = getParentViewModel(component).getView();
    if(parentView) return parentView.lookupReference(reference);
  }

  function getParentReferenceValue(reference, component) {
    var reference = lookupParentReference(reference, component),
        value = reference.selection ? reference.selection :  reference.value;
      return value;
  }
  
  	return {
		statics: {
			//Relevant Searches
			getViewPort: getViewPort,

			getTopmostWindow: getTopmostWindow,
			
			getTopmostWindowViewModel: getTopmostWindowViewModel,
			
			//Reference Searches
			getParentViewModel: getParentViewModel,

			getParentVMReferences: getParentVMReferences,

			getParentVMReferenceData: getParentVMReferenceData,

			lookupParentReference: lookupParentReference,

			getParentReferenceValue: getParentReferenceValue
		}
	}	
});
