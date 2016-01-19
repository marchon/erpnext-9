frappe.ui.form.on("Sales Invoice", "customer",
    function(frm) {
        frappe.call({
            "method": "frappe.client.get",
            args: {
                doctype: "Sales Invoice",
                name: frm.doc.tax_id
            },
            callback: function (data) {
                if (data.message.tax_id != "") {
                    frappe.model.set_value(frm.doctype, frm.docname, "sales_type", "Factura de Venta");
                    frappe.model.set_value(frm.doctype, frm.docname, "naming_series", "FV-004-");
                }
                else {
                    frappe.model.set_value(frm.doctype, frm.docname, "sales_type", "Boletaa de Venta");
                    frappe.model.set_value(frm.doctype, frm.docname, "naming_series", "BV-004-");
                }
            }
        })
    });