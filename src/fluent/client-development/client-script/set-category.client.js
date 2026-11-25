// Fluent-style client script file. Scan Engine maps **/client-script/**/*.js to sys_script_client.
function onLoad() {
    var gr = new GlideRecord('sys_user');
    gr.addQuery('sys_id', g_user.userID);
    gr.query();
    if (gr.next()) {
        g_form.setValue('category', gr.department);
    }
    document.getElementById('incident.short_description').focus();
    alert('Form loaded');
}
