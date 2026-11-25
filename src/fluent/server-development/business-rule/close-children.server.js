// Fluent-style business rule file. Scan Engine maps **/business-rule/**/*.js to sys_script.
(function executeRule(current, previous /*null when async*/) {
    var child = new GlideRecord('incident');
    child.addQuery('parent_incident', current.sys_id);
    child.query();
    while (child.next()) {
        child.state = current.state;
        child.update();
    }
    current.update();
})(current, previous);
