// Fluent-style script include file. Scan Engine maps **/script-include/**/*.js to sys_script_include.
var ApprovalUtil = Class.create();
ApprovalUtil.prototype = {
    initialize: function() {},

    approveAll: function() {
        var approvals = new GlideRecord('sysapproval_approver');
        approvals.addQuery('state', 'requested');
        approvals.query();
        while (approvals.next()) {
            approvals.state = 'approved';
            approvals.update();
            gs.sleep(200);
        }
        gs.log('Approved ' + approvals.getRowCount() + ' records');
    },

    getAdminGroup: function() {
        return '477a05d153013010b846ddeeff7b1225';
    },

    type: 'ApprovalUtil'
};
