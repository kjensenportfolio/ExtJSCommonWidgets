Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {
    
    //Vtypes Test List
    alphanamespace = /^([a-zA-Z0-9_]+[a-zA-Z0-9_ ]+[a-zA-Z0-9_])$/;
    naturalnumber = /^\d+$/i;


    //VTypes = {};
    Ext.apply(Ext.form.field.VTypes, {
        image: function(v) {
            v = v.replace(/^\s|\s$/g, "");
            //trims string
            if (v.match(/([^\/\\]+)\.(gif|png|jpg|jpeg)$/i))  {
                return true;
            }
            else  {
                return false;
            }

        },
        ImageText: 'Must be a valid image: gif,jpg,png,jpeg'
    });
    Ext.apply(Ext.form.field.VTypes, {
        alphanumspace: function(v) {
            return alphanamespace.test(v);
        },
        alphanumspaceText: 'Only Letters, Numbers, Spaces and _ Are Allowed',
        alphanumspaceMask: /[a-z0-9_ ]/i
    });
    
    Ext.apply(Ext.form.field.VTypes, {
    natural: function(val, field) {
        return naturalnumber.test(val);
    },
    naturalText: 'Must Be a Natural Number',
    naturalMask: /^[0-9]/i
    
    Ext.apply(Ext.form.field.VTypes, {
    price: function(val, field) {
        return price.test(val);
    },
    priceText: 'Must Be a Natural Number',
    priceMask: /^[0-9]/i
});

});
