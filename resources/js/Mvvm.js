//Tools Grab Object References Relative To Other Object References if in MVVM Mode

Mvvm = {
  _checkForParentViewModel - function(component) {
    var parent = component ? component.getViewModel().getParent() : this.getViewModel().getParent();
    if (parent) return true; 
    else return false;
  },
  
  getParentViewModel: function(component) {
    if(_checkForParentViewModel(component)) return component ? component.getViewModel().getParent() : this.getViewModel().getParent();
    else return console.log('No Parent Model Is Accessable');
  },
  
  getParentVMReferences: function(component) {
    var parentVM = getParentViewModel(component);
    if(parentVM) return parentVM.getData();
  },
  
  lookupParentVMReference: function(reference, component) {
    var parentVM = getParentViewModel(component);
    if(parentVM) return parentVM.getData()[reference];
  },

  getParentVMReferenceValue: function(reference, component) {
    var reference = lookupParentVMReference(reference, component),
        value = reference.selection ? reference.selection :  reference.value;
      return value;
  }
}
