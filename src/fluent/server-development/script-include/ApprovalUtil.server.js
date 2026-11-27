// Fluent-style script include file. Scan Engine maps **/script-include/**/*.js to sys_script_include.
var ApprovalUtil = Class.create();
ApprovalUtil.prototype = {
    initialize: function() {},

    approveAll: function() {
        var approvals = new GlideRecord('sysapproval_approver');
        approvals.addQuery('state', 'requested');
        approvals.query();
        gs.log('Approving ' + approvals.getRowCount() + ' records');
        while (approvals.next()) {
            approvals.state = 'approved';
            approvals.update();
            gs.sleep(200);
        }
        gs.log('Approved ' + approvals.getRowCount() + ' records');
    },

    rejectAll: function() {
        var approvals = new GlideRecord('sysapproval_approver');
        approvals.addQuery('state', 'requested');
        approvals.query();
        while (approvals.next()) {
            approvals.state = 'rejected';
            approvals.update();
            gs.sleep(200);
        }
        gs.log('Rejected all pending approvals');
    },

    getAdminGroup: function() {
        return '477a05d153013010b846ddeeff7b1225';
    },

    getApproverGroup: function() {
        return '8a5055c9c61122780043563ef53438e3';
    },

    getDefaultApprover: function() {
        return '6816f79cc0a8016401c5a33be04be441';
    },

    type: 'ApprovalUtil'
};
