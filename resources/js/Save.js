
Save = {

  //JSON
  
  _encodeJSON: function(form, obj) {
    if(obj) return Ext.JSON.encode(obj);
    else return Ext.JSON.encode(form.getValues());
  },
  
  _decodeJSON: encodeJSON: function(form, obj) {
  },
  
  
  createNewItem: function(form, obj) {
    var json = _encodeJSON(form, obj);
    
  },
  
  updateCurrentItem: function(form, obj) {
  
  },
}
