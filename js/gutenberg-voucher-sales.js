registerGutenbergBlock('recras/voucher-sales', {
    title: wp.i18n.__('Voucher sales', TEXT_DOMAIN),
    icon: 'money',
    category: 'recras',
    example: {
        attributes: {
            id: null,
            redirect: '',
            showquantity: true,
        },
    },

    attributes: {
        id: recrasHelper.typeString(),
        redirect: recrasHelper.typeString(),
        showquantity: recrasHelper.typeBoolean(true),
    },

    edit: withSelect((select) => {
        return {
            pagesPosts: select('recras/store').fetchPagesPosts(),
            voucherTemplates: select('recras/store').fetchVoucherTemplates(true),
        }
    })(props => {
        if (!recrasOptions.subdomain) {
            return recrasHelper.elementNoRecrasName();
        }

        const {
            id,
            redirect,
            showquantity,
        } = props.attributes;
        const {
            pagesPosts,
            voucherTemplates,
        } = props;

        if (pagesPosts === undefined || !pagesPosts.length) {
            return [
                recrasHelper.elementText(wp.i18n.__('Loading data...', TEXT_DOMAIN))
            ];
        }

        let retval = [];
        const optionsIDControl = {
            value: id,
            onChange: function(newVal) {
                recrasHelper.lockSave('voucherID', !newVal);
                props.setAttributes({
                    id: newVal,
                });
            },
            options: voucherTemplates,
            label: wp.i18n.__('Voucher template', TEXT_DOMAIN),
        };
        if (voucherTemplates.length === 1) {
            props.setAttributes({
                id: voucherTemplates[0].value,
            });
        }

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
        };

        const optionsShowQuantityControl = {
            checked: showquantity,
            onChange: function(newVal) {
                props.setAttributes({
                    showquantity: newVal,
                });
            },
            label: wp.i18n.__('Show quantity input (will be set to 1 if not shown)', TEXT_DOMAIN),
        };

        retval.push(recrasHelper.elementText('Recras - ' + wp.i18n.__('Voucher sales', TEXT_DOMAIN)));
        retval.push(createEl(compSelectControl, optionsIDControl));
        retval.push(createEl(compSelectControl, optionsRedirectControl));
        retval.push(createEl(compToggleControl, optionsShowQuantityControl));

        return retval;
    }),

    save: recrasHelper.serverSideRender,
});
