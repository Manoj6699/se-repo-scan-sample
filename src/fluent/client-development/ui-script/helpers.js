// Fluent-style UI script file. Scan Engine maps **/ui-script/**/*.js to sys_ui_script.
var SampleHelpers = {
    runSnippet: function(code) {
        return eval(code);
    },
    lookupCaller: function() {
        var caller = g_form.getReference('caller_id');
        return caller.name;
    }
};
