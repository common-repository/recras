function removeElsWithClass(className)
{
    const els = document.querySelectorAll('.' + className);
    for (let i = 0; i < els.length; i++) {
        els[i].parentNode.removeChild(els[i]);
    }
}

function submitRecrasForm(formID, subdomain, basePath, redirect)
{
    removeElsWithClass('recras-error');

    const formEl = document.getElementById('recras-form' + formID);
    const formElements = formEl.querySelectorAll('input, textarea, select');
    let elements = {};
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'submit') {
            continue;
        }
        if (formElements[i].value === '' && formElements[i].required === false) {
            formElements[i].value = null;
        }
        if (formElements[i].type === 'radio') {
            const selected = document.querySelector('input[name="' + formElements[i].name + '"]:checked');
            elements[formElements[i].name] = selected.value;
        } else if (formElements[i].type === 'checkbox') {
            elements[formElements[i].name] = [];
            const checked = document.querySelectorAll('input[name="' + formElements[i].name + '"]:checked');
            if (checked.length === 0) {
                const isRequired = document.querySelector('input[name="' + formElements[i].name + '"][data-required="1"]');
                if (isRequired) {
                    formEl
                        .querySelector('[name="' + formElements[i].name + '"]')
                        .parentNode
                        .insertAdjacentHTML('beforeend', '<span class="recras-error">' + recras_l10n.checkboxRequired + '</span>');
                    return false;
                }
            }
            for (let j = 0; j < checked.length; j++) {
                elements[formElements[i].name].push(checked[j].value);
            }
        } else {
            elements[formElements[i].name] = formElements[i].value;
        }
    }
    if (elements['boeking.arrangement'] === '0') {
        delete elements['boeking.arrangement'];
    }

    let submitEl = formEl.querySelector('[type="submit"]');
    submitEl.parentNode.insertAdjacentHTML('beforeend', '<img src="' + basePath + 'editor/loading.gif" alt="' + recras_l10n.loading + '" class="recras-loading">');
    submitEl.disabled = true;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://' + subdomain + '.recras.nl/api2/contactformulieren/' + formEl.dataset.formid + '/opslaan');
    xhr.send(JSON.stringify(elements));
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            removeElsWithClass('recras-loading');
            submitEl.disabled = false;
            const response = JSON.parse(xhr.response);
            if (response.success) {
                if (redirect) {
                    window.location = redirect;
                } else {
                    formEl.reset();
                    formEl.querySelector('[type="submit"]').parentNode.insertAdjacentHTML('beforeend', '<p class="recras-success">' + recras_l10n.sent_success + '</p>');
                }
            } else if (response.error) {
                const errors = response.error.messages;
                for (let key in errors) {
                    if (errors.hasOwnProperty(key)) {
                        formEl.querySelector('[name="' + key + '"]').parentNode.insertAdjacentHTML('beforeend', '<span class="recras-error">' + errors[key] + '</span>');
                    }
                }
                formEl.querySelector('[type="submit"]').parentNode.insertAdjacentHTML('beforeend', '<p class="recras-error">' + recras_l10n.sent_error + '</p>');
            } else {
                console.log('Unknown response: ', response);
            }
        }
    };
    return false;
}

const dateToString = function(date) {
    const x = new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000)); // Fix off-by-1 errors
    return x.toISOString().substring(0, 10); // Format as 2018-03-13
};

const initPikaday = function(dateInput) {
    dateInput.setAttribute('type', 'text');

    let pikadayOptions = {
        firstDay: 1, // Monday
        numberOfMonths: 2,
        reposition: false,
        toString: function(date) {
            return dateToString(date);
        },
        field: dateInput,
        i18n: recras_l10n.pikaday,
    };
    if (dateInput.dataset.mindate) {
        pikadayOptions.minDate = new Date(dateInput.dataset.mindate);
    }

    new Pikaday(pikadayOptions);
};

document.addEventListener('DOMContentLoaded', function(){
    if (typeof Pikaday === 'function') {
        const dateEls = document.querySelectorAll('.recras-input-date');
        for (let i = 0; i < dateEls.length; i++) {
            initPikaday(dateEls[i]);
        }
    }
});
