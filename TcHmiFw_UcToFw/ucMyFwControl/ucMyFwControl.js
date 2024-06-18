/*
 * Generated 6/14/2024 11:58:24 AM
 * Copyright (C) 2024
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let TcHmiFw_UcToFw;
        (function (TcHmiFw_UcToFw) {
            class ucMyFwControl extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set in the class definition, so they have the value 'undefined'.
                - During compilation, the Framework sets the value that is specified in the HTML or in the theme (possibly 'null') via normal setters.
                - Because of the "changed detection" in the setter, the value is only processed once during compilation.
                - Attention: If we have a Server Binding on an Attribute, the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                setMyTypeParameter(val) {
                    this.__myType = val;
                }
                getMyTypeParameter() {
                    return this.__myType;
                }
                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiFw_UcToFw_ucMyFwControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialization after the attribute setters have been called.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    const id = this.getId();
                    // Get paths for bindings
                    let basePath = this.__attrs["data-tchmi-mytypeparameter"].value;
                    let boolSymbol = this.buildBindingPath(basePath, "myBool");
                    let numSymbol = this.buildBindingPath(basePath, "myNumber", true);
                    let stringSymbol = this.buildBindingPath(basePath, "myString", true);
                    // Set up bindings for controls
                    let btnCtr = TcHmi.Controls.get(`tbtn_myButton_${id}`);
                    btnCtr?.setStateSymbol(boolSymbol);
                    let btnDisplay = TcHmi.Controls.get(`tbtn_Display_${id}`);
                    btnDisplay?.setStateSymbol(boolSymbol);
                    let strCtr = TcHmi.Controls.get(`tb_myText_${id}`);
                    if (strCtr !== undefined) {
                        TcHmi.Binding.createEx2(stringSymbol.getExpression().toString(), "Text", strCtr);
                    }
                    let strDisplay = TcHmi.Controls.get(`tbl_DisplayString_${id}`);
                    if (strDisplay !== undefined) {
                        TcHmi.Binding.createEx2(stringSymbol.getExpression().toString(), "Text", strDisplay);
                    }
                    let numCtr = TcHmi.Controls.get(`nin_myNumber_${id}`);
                    if (numCtr !== undefined) {
                        TcHmi.Binding.createEx2(numSymbol.getExpression().toString(), "Value", numCtr);
                    }
                    let numDisplay = TcHmi.Controls.get(`tbl_DisplayNumber_${id}`);
                    if (numDisplay !== undefined) {
                        TcHmi.Binding.createEx2(numSymbol.getExpression().toString(), "Text", numDisplay);
                    }
                }
                buildBindingPath(basePath, attributeName, twoWay = false) {
                    let expr = new TcHmi.SymbolExpression(basePath);
                    let tag = expr.getTag();
                    let rootPath = expr.getFullName();
                    return new TcHmi.Symbol(`%${tag}%${rootPath}::${attributeName}${twoWay ? "|BindingMode=TwoWay" : ""}%/${tag}%`);
                }
                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything that is not needed while the control is not part of the active DOM.
                     * For example, there is usually no need to listen for events!
                     */
                }
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if system destroys control!
                 */
                destroy() {
                    /**
                     * Ignore while __keepAlive is set to true.
                     */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                     * Free resources like child controls etc.
                     */
                }
            }
            TcHmiFw_UcToFw.ucMyFwControl = ucMyFwControl;
        })(TcHmiFw_UcToFw = Controls.TcHmiFw_UcToFw || (Controls.TcHmiFw_UcToFw = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
 * Register Control
 */
TcHmi.Controls.registerEx('ucMyFwControl', 'TcHmi.Controls.TcHmiFw_UcToFw', TcHmi.Controls.TcHmiFw_UcToFw.ucMyFwControl);
//# sourceMappingURL=ucMyFwControl.js.map