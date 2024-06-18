/*
 * Generated 6/14/2024 11:58:24 AM
 * Copyright (C) 2024
 */
module TcHmi {
    export module Controls {
        export module TcHmiFw_UcToFw {
            export class ucMyFwControl extends TcHmi.Controls.System.TcHmiControl {

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
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;

                // ATTRIBUTE GETTERS AND SETTERS
                protected __myType: myType | undefined;
                public setMyTypeParameter(val: typeof this.__myType) {
                    this.__myType = val;
                }
                public getMyTypeParameter() {
                    return this.__myType;
                }

                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 */
                public __previnit() {
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
                public __init() {
                    super.__init();
                }

                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    const id = this.getId()
                    // Get paths for bindings
                    let basePath = this.__attrs["data-tchmi-mytypeparameter"].value as string;
                    let boolSymbol = this.buildBindingPath(basePath, "myBool");
                    let numSymbol = this.buildBindingPath(basePath, "myNumber", true);
                    let stringSymbol = this.buildBindingPath(basePath, "myString", true);

                    // Set up bindings for controls
                    let btnCtr = TcHmi.Controls.get<TcHmi.Controls.Beckhoff.TcHmiToggleButton>(`tbtn_myButton_${id}`);
                    btnCtr?.setStateSymbol(boolSymbol);

                    let btnDisplay = TcHmi.Controls.get<TcHmi.Controls.Beckhoff.TcHmiToggleButton>(`tbtn_Display_${id}`);
                    btnDisplay?.setStateSymbol(boolSymbol);

                    let strCtr = TcHmi.Controls.get<TcHmi.Controls.Beckhoff.TcHmiTextbox>(`tb_myText_${id}`);
                    if (strCtr !== undefined) {
                        TcHmi.Binding.createEx2(stringSymbol.getExpression().toString(), "Text", strCtr);
                    }
                    
                    let strDisplay = TcHmi.Controls.get<TcHmi.Controls.Beckhoff.TcHmiTextblock>(`tbl_DisplayString_${id}`);
                    if (strDisplay !== undefined) {
                        TcHmi.Binding.createEx2(stringSymbol.getExpression().toString(), "Text", strDisplay);
                    }

                    let numCtr = TcHmi.Controls.get<TcHmi.Controls.Beckhoff.TcHmiNumericInput>(`nin_myNumber_${id}`);
                    if (numCtr !== undefined) {
                        TcHmi.Binding.createEx2(numSymbol.getExpression().toString(), "Value", numCtr);
                    }

                    let numDisplay = TcHmi.Controls.get<TcHmi.Controls.Beckhoff.TcHmiTextblock>(`tbl_DisplayNumber_${id}`);
                    if (numDisplay !== undefined) {
                        TcHmi.Binding.createEx2(numSymbol.getExpression().toString(), "Text", numDisplay);
                    }
                }

                private buildBindingPath(basePath: string, attributeName: string, twoWay: boolean = false): Symbol
                {
                    let expr = new SymbolExpression(basePath);
                    let tag = expr.getTag();
                    let rootPath = expr.getFullName();
                    return new Symbol(`%${tag}%${rootPath}::${attributeName}${twoWay ? "|BindingMode=TwoWay" : ""}%/${tag}%`);
                }

                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                public __detach() {
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
                public destroy() {
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
        }

        export namespace TcHmiFw_UcToFw {
            export interface myType {
                myBoolean: Boolean;
                myString: String;
                myNumber: Number;
            }
        }
    }
}

/**
 * Register Control
 */
TcHmi.Controls.registerEx('ucMyFwControl', 'TcHmi.Controls.TcHmiFw_UcToFw', TcHmi.Controls.TcHmiFw_UcToFw.ucMyFwControl);
