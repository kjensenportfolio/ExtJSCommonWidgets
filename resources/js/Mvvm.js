//Tools Grab Object References Relative To Other Object References if in MVVM Mode

Mvvm = {

  _checkForParentViewModel(component) {
    var parent = component ? component.getViewModel().getParent() ? this.getViewModel().getParent();
    if (parent) return true; 
    else return false;
  }
}
