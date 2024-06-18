# Converting a TwinCAT HMI USer Control to a Framework Control

The advantage of Framework Controls within the TwinCAT HMI is quite extensive. Some additional features include:
- Complex coding freedom
- Precise lifetime management
- Library creation with help of Nuget packages. This also enables version control and dependency management.

However, the ease of making controls using the WYSIWYG editor is also a very useful design feature of the base HMI software. Unfortunately this visual editor is not available in a Framework Project. But we can use the visual editor to build the basic features of a control and then port the relevant parts to a Framework Control.

This repository is just an example of how this conversion *can* be done. Mostly meant as an educational example of how the interaction between User Controls and the Frameowrk can be set up. In all cases, this should be tested extensively, and very likely a better solution will exist for your specific use case.