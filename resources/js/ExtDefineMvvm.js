//Tools Grab Object References Relative To Other Object References if in MVVM Mode

Ext.define('Mvvm', function (me) {
	'use strict';

 self.Mvvm = me; // global execution context alias
		
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

  function getParentVMReferenceValue(reference, component) {
    var reference = lookupParentVMReference(reference, component),
        value = reference.selection ? reference.selection :  reference.value;
      return value;
  }
  
  	return {
		statics: {

			getParentViewModel: getParentViewModel,

			getParentVMReferences: getParentVMReferences,

			getParentVMReferenceData: getParentVMReferenceData,

			lookupParentReference: lookupParentReference,

			getParentVMReferenceValue: getParentVMReferenceValue
		}
	}	
});
