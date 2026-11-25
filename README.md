# Scan Engine repository scan sample

A small ServiceNow app source tree with **deliberate best-practice violations**, used to try out Scan Engine repository scanning.

| File | Format | What it contains |
|---|---|---|
| `update/sys_script_include_*.xml` | Update XML | Hard-coded sys_id, `getRowCount()`, `gs.sleep`, `eval`, `gs.log`. The commented-out line must **not** be reported. |
| `update/sys_script_*.xml` | Update XML | Before business rule calling `current.update()`, `gs.log` |
| `update/sys_script_client_*.xml` | Update XML | `GlideRecord` in a client script, synchronous `g_form.getReference`, `alert` |
| `src/fluent/server-development/script-include/ApprovalUtil.server.js` | Fluent script | `update()` and `gs.sleep` in a loop, `gs.log`, hard-coded sys_id |
| `src/fluent/server-development/business-rule/close-children.server.js` | Fluent script | `current.update()`, `update()` in a loop |
| `update/sys_ui_action_*.xml` | Update XML | Hard-coded instance URL and sys_id, `current.update()`, `gs.log` |
| `update/sysauto_script_*.xml` | Update XML | `deleteRecord()` in a loop, `gs.print`, `gs.sleep` |
| `src/fluent/client-development/client-script/set-category.client.js` | Fluent script | `GlideRecord` in a client script, DOM access with `document.getElementById`, `alert` |
| `src/fluent/client-development/ui-script/helpers.js` | Fluent script | `eval`, synchronous `g_form.getReference` |

| `update/sys_properties_*.xml` (8 files) | Update XML | Insecure or poor property values, checked by **System Property** definitions with the same property name: `glide.ui.escape_text=false`, `glide.ui.escape_all_script=false`, `glide.script.use.sandbox=false`, `glide.security.use_csrf_token=false`, `glide.cookies.http_only=false`, `glide.login.no_blank_password=false`, `glide.script.secure.ajaxgliderecord=false`, `glide.ui.session_timeout=480` |

Which findings appear depends on the active `sn_se_definition` records on your instance. A property file only produces a finding when an active System Property definition has the same **Property name** and the value breaks its operator.

## Scan it

1. In ServiceNow: **Scan Engine › Repositories › New**
2. Name: `Scan sample`, Repository URL: the URL of this repository, Authentication: **Public repository** (or a credential with a personal access token if the repository is private)
3. Save, then **Test connection**, then **Scan now**
4. Open the scan record and refresh until the status is Complete. Findings are in the **Repository Findings** related list and the **Scan Engine › Repository Findings** module.
