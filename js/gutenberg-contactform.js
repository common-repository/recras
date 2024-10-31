registerGutenbergBlock('recras/contactform', {
    title: wp.i18n.__('Contact form', TEXT_DOMAIN),
    icon: 'email',
    category: 'recras',
    example: {
        attributes: {
            id: null,
            showtitle: false,
            showlabels: true,
            showplaceholders: true,
            arrangement: null,
            element: 'dl',
            single_choice_element: 'select',
            submittext: wp.i18n.__('Send', TEXT_DOMAIN),
            redirect: '',
        },
    },

    attributes: {
        id: recrasHelper.typeString(),
        showtitle: recrasHelper.typeBoolean(true),
        showlabels: recrasHelper.typeBoolean(true),
        showplaceholders: recrasHelper.typeBoolean(true),
        arrangement: recrasHelper.typeString(),
        element: recrasHelper.typeString('dl'),
        single_choice_element: recrasHelper.typeString('select'),
        submittext: recrasHelper.typeString(wp.i18n.__('Send', TEXT_DOMAIN)),
        redirect: recrasHelper.typeString(),
    },

    edit: withSelect((select) => {
        return {
            contactForms: select('recras/store').fetchContactForms(),
            pagesPosts: select('recras/store').fetchPagesPosts(),
        }
    })(props => {
        if (!recrasOptions.subdomain) {
            return recrasHelper.elementNoRecrasName();
        }

        const {
            id,
            showtitle,
            showlabels,
            showplaceholders,
            arrangement,
            element,
            single_choice_element,
            submittext,
            redirect,
        } = props.attributes;
        const {
            contactForms,
            pagesPosts,
        } = props;
        let packages = [];

        if (pagesPosts === undefined || !pagesPosts.length) {
            return [
                recrasHelper.elementText(wp.i18n.__('Loading data...', TEXT_DOMAIN))
            ];
        }

        const cfMapped = Object.entries(contactForms).map(mapContactForm);
        let retval = [];
        const optionsIDControl = {
            value: id,
            onChange: function(newVal) {
                packages = mapCFPackages(contactForms[newVal].Arrangementen);
                recrasHelper.lockSave('contactFormID', !newVal);
                props.setAttributes({
                    id: newVal,
                });
            },
            options: cfMapped,
            label: wp.i18n.__('Contact form', TEXT_DOMAIN),
        };
        if (cfMapped.length === 1) {
            props.setAttributes({
                id: cfMapped[0].value,
            });
        }
        if (id) {
            packages = mapCFPackages(contactForms[id].Arrangementen);
            if (packages.length === 0) {
                props.setAttributes({
                    arrangement: null,
                });
            }
        }
        const optionsShowTitleControl = {
            checked: showtitle,
            onChange: function(newVal) {
                props.setAttributes({
                    showtitle: newVal,
                });
            },
            label: wp.i18n.__('Show title?', TEXT_DOMAIN),
        };
        const optionsShowLabelsControl = {
            checked: showlabels,
            onChange: function(newVal) {
                props.setAttributes({
                    showlabels: newVal,
                });
            },
            label: wp.i18n.__('Show labels?', TEXT_DOMAIN),
        };
        const optionsShowPlaceholdersControl = {
            checked: showplaceholders,
            onChange: function(newVal) {
                props.setAttributes({
                    showplaceholders: newVal,
                });
            },
            label: wp.i18n.__('Show placeholders?', TEXT_DOMAIN),
        };
        const optionsPackageControl = {
            value: arrangement,
            onChange: function(newVal) {
                props.setAttributes({
                    arrangement: newVal,
                });
            },
            options: packages,
            label: wp.i18n.__('Package (optional)', TEXT_DOMAIN),
        };
        const optionsElementControl = {
            value: element,
            onChange: function(newVal) {
                props.setAttributes({
                    element: newVal
                });
            },
            options: [
                {
                    value: 'dl',
                    label: wp.i18n.__('Definition list', TEXT_DOMAIN),
                },
                {
                    value: 'ol',
                    label: wp.i18n.__('Ordered list', TEXT_DOMAIN),
                },
                {
                    value: 'table',
                    label: wp.i18n.__('Table', TEXT_DOMAIN),
                },
            ],
            label: wp.i18n.__('HTML element', TEXT_DOMAIN),
        };
        const optionsSingleChoiceControl = {
            value: single_choice_element,
            onChange: function(newVal) {
                props.setAttributes({
                    single_choice_element: newVal
                });
            },
            options: [
                {
                    value: 'select',
                    label: wp.i18n.__('Drop-down list (Select)', TEXT_DOMAIN),
                },
                {
                    value: 'radio',
                    label: wp.i18n.__('Radio buttons', TEXT_DOMAIN),
                },
            ],
            label: wp.i18n.__('Element for single choices', TEXT_DOMAIN),
        };
        const optionsSubmitTextControl = {
            value: submittext,
            onChange: function(newVal) {
                props.setAttributes({
                    submittext: newVal
                });
            },
            placeholder: wp.i18n.__('Submit button text', TEXT_DOMAIN),
            label: wp.i18n.__('Submit button text', TEXT_DOMAIN),
        };
        const optionsRedirectControl = {
            value: redirect,
            onChange: function(newVal) {
                props.setAttributes({
                    redirect: newVal
                });
            },
            children: pagesPosts,
            placeholder: wp.i18n.__('i.e. https://www.recras.com/thanks/', TEXT_DOMAIN),
            label: wp.i18n.__('Thank-you page (optional, leave empty to not redirect)', TEXT_DOMAIN),
            type: 'url',
        };

        retval.push(recrasHelper.elementText('Recras - ' + wp.i18n.__('Contact form', TEXT_DOMAIN)));

        retval.push(createEl(compSelectControl, optionsIDControl));
        retval.push(createEl(compToggleControl, optionsShowTitleControl));
        retval.push(createEl(compToggleControl, optionsShowLabelsControl));
        retval.push(createEl(compToggleControl, optionsShowPlaceholdersControl));

        if (packages.length) {
            retval.push(createEl(compSelectControl, optionsPackageControl));
            retval.push(recrasHelper.elementInfo(wp.i18n.__('Some packages may not be available for all contact forms. You can change this by editing your contact forms in Recras.', TEXT_DOMAIN)));
            retval.push(recrasHelper.elementInfo(wp.i18n.__('If you are still missing packages, make sure in Recras "May be presented on a website (via API)" is enabled on the tab "Extra settings" of the package.', TEXT_DOMAIN)));
        }

        retval.push(createEl(compSelectControl, optionsElementControl));
        retval.push(createEl(compSelectControl, optionsSingleChoiceControl));
        retval.push(createEl(compTextControl, optionsSubmitTextControl));
        retval.push(createEl(compSelectControl, optionsRedirectControl));
        return retval;
    }),

    save: recrasHelper.serverSideRender,
});
