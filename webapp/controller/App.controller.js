sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.sfc.customcss.controller.App", {
			onInit: function () {
          
                const buttonReject = this.byId("buttonReject");
                buttonReject.addStyleClass("myRejectButton");
                
			}
		});
	});
