<?php
namespace Recras;

class Settings
{
    public const OPTION_PAGE = 'recras';
    private const OPTION_SECTION = 'recras';
    public const PAGE_CACHE = 'recras-clear-cache';
    public const PAGE_DOCS = 'recras-documentation';
    public const PAGE_SHORTCODES = 'recras-shortcodes';


    public static function addInputAnalytics(array $args): void
    {
        self::addInputCheckbox($args);
        self::infoText(
            __('Enabling this will send events from <strong>online booking of packages</strong> and <strong>voucher sales</strong> to Google Analytics.', Plugin::TEXT_DOMAIN) .
            '<br>' .
            __('This option is <strong>not needed when using book processes</strong>. GA is integrated automatically for them.', Plugin::TEXT_DOMAIN)
        );
    }


    /**
     * Add a currency input field
     */
    public static function addInputCurrency(array $args): void
    {
        $field = $args['field'];
        $value = get_option($field);
        if (!$value) {
            $value = '€';
        }

        printf('<input type="text" name="%s" id="%s" value="%s">', $field, $field, $value);
    }


    /**
     * Add a checkbox option
     */
    public static function addInputCheckbox(array $args): void
    {
        $field = $args['field'];
        $value = get_option($field);

        printf('<input type="checkbox" name="%s" id="%s" value="1"%s>', $field, $field, ($value ? ' checked' : ''));
    }

    public static function addInputDatepicker(array $args): void
    {
        self::addInputCheckbox($args);
        self::infoText(__('Not all browsers have a built-in date picker. Enable this to use a custom widget.', Plugin::TEXT_DOMAIN));
    }

    public static function addInputFixDatepicker(array $args): void
    {
        self::addInputCheckbox($args);
        self::infoText(__('On some websites, the date picker in a book process has a tiny font. Enable this to fix this.', Plugin::TEXT_DOMAIN));
    }


    /**
     * Add a decimal separator input field
     */
    public static function addInputDecimal(array $args): void
    {
        $field = $args['field'];
        $value = get_option($field);
        if (!$value) {
            $value = '.';
        }

        printf('<input type="text" name="%s" id="%s" value="%s" size="2" maxlength="1">', $field, $field, $value);
        self::infoText(__('Used in prices, such as 100,00.', Plugin::TEXT_DOMAIN));
    }


    /**
     * Add a subdomain input field
     */
    public static function addInputSubdomain(array $args): void
    {
        $field = $args['field'];
        $value = get_option($field);
        if (!$value) {
            $value = 'demo';
        }

        printf('<input type="text" name="%s" id="%s" value="%s">.recras.nl', $field, $field, $value);
    }


    public static function addInputTheme(array $args): void
    {
        $themes = self::getThemes();

        $field = $args['field'];
        $value = get_option($field);
        if (!$value) {
            $value = 'none';
        }

        $html = '<select name="' . $field . '" id="' . $field . '">';
        foreach ($themes as $key => $theme) {
            $selText = '';
            if ($value === $key) {
                $selText = ' selected';
            }
            $html .= '<option value="' . $key . '"' . $selText . '>' . $theme['name'];
        }
        $html .= '</select>';
        echo $html;
    }


    public static function clearCache(): void
    {
        if (!current_user_can('edit_pages')) {
            wp_die(__('You do not have sufficient permissions to access this page.'));
        }
        require_once(__DIR__ . '/admin/cache.php');
    }


    public static function documentation(): void
    {
        if (!current_user_can('edit_pages')) {
            wp_die(__('You do not have sufficient permissions to access this page.'));
        }
        require_once(__DIR__ . '/admin/documentation.php');
    }


    public static function shortcodes(): void
    {
        if (!current_user_can('edit_pages')) {
            wp_die(__('You do not have sufficient permissions to access this page.'));
        }
        require_once(__DIR__ . '/admin/shortcodes.php');
    }


    /**
     * Load the admin options page
     */
    public static function editSettings(): void
    {
        if (!current_user_can('manage_options')) {
            wp_die(__('You do not have sufficient permissions to access this page.'));
        }
        require_once(__DIR__ . '/admin/settings.php');
    }


    public static function errorNoRecrasName(): void
    {
        echo '<p class="recrasInfoText">';
        $settingsLink = admin_url('admin.php?page=' . self::OPTION_PAGE);
        printf(
            __('Please enter your Recras name in the %s before adding widgets.', Plugin::TEXT_DOMAIN),
            '<a href="' . $settingsLink . '" target="_blank">' . __('Recras → Settings menu', Plugin::TEXT_DOMAIN) . '</a>'
        );
        echo '</p>';
    }

    /**
     * This returns a valid locale, based on the locale set for WordPress, to use in "external" Recras scripts
     */
    public static function externalLocale(): string
    {
        $localeShort = substr(get_locale(), 0, 2);
        switch ($localeShort) {
            case 'de':
                return 'de_DE';
            case 'fy':
            case 'nl':
                return 'nl_NL';
            default:
                return 'en_GB';
        }
    }


    /**
     * Get the Recras subdomain, which can be set in the shortcode attributes or as global setting
     */
    public static function getSubdomain(array $attributes): string
    {
        if (isset($attributes['recrasname'])) {
            return $attributes['recrasname'];
        }
        return get_option('recras_subdomain');
    }


    public static function getThemes(): array
    {
        return [
            'none' => [
                'name' => __('No theme', Plugin::TEXT_DOMAIN),
                'version' => null,
            ],
            'basic' => [
                'name' => __('Basic theme', Plugin::TEXT_DOMAIN),
                'version' => '5.5.0',
            ],
            'bpgreen' => [
                'name' => __('BP Green', Plugin::TEXT_DOMAIN),
                'version' => '5.5.0',
            ],
            'reasonablyred' => [
                'name' => __('Reasonably Red', Plugin::TEXT_DOMAIN),
                'version' => '5.5.0',
            ],
            'recrasblue' => [
                'name' => __('Recras Blue', Plugin::TEXT_DOMAIN),
                'version' => '5.5.0',
            ],
        ];
    }


    private static function infoText($text): void
    {
        echo '<p class="description">' . $text . '</p>';
    }


    /**
     * Parse a boolean value
     * @param bool|string $value
     */
    public static function parseBoolean($value): bool
    {
        $falseValues = [false, 'false', 0, '0', 'no'];
        if (isset($value) && in_array($value, $falseValues, true)) {
            // Without strict=true, in_array(true, $falseValues) is true!
            return false;
        }
        return true;
    }

    private static function registerSetting(string $name, $default, string $type = 'string', callable $sanitizeCallback = null): void
    {
        $options = [
            'default' => $default,
            'type' => $type,
        ];
        if ($sanitizeCallback) {
            $options['sanitize_callback'] = $sanitizeCallback;
        }
        register_setting('recras', $name, $options);
    }

    private static function addField(string $name, string $title, callable $inputFn): void
    {
        add_settings_field($name, $title, $inputFn, self::OPTION_PAGE, self::OPTION_SECTION, [
            'field' => $name,
            'label_for' => $name,
        ]);
    }

    /**
     * Register plugin settings
     */
    public static function registerSettings(): void
    {
        self::registerSetting('recras_subdomain', 'demo', 'string', [__CLASS__, 'sanitizeSubdomain']);
        self::registerSetting('recras_currency', '€');
        self::registerSetting('recras_decimal', ',');
        self::registerSetting('recras_datetimepicker', false, 'boolean');
        self::registerSetting('recras_fix_react_datepicker', false, 'boolean');
        self::registerSetting('recras_theme', 'basic');
        self::registerSetting('recras_enable_analytics', false, 'boolean');
    }


    public static function registerSettingsPage(): void
    {
        \add_settings_section(
            self::OPTION_SECTION,
            __('Recras settings', Plugin::TEXT_DOMAIN),
            [__CLASS__, 'settingsHelp'],
            self::OPTION_PAGE
        );
        self::registerSettings();

        self::addField('recras_subdomain', __('Recras name', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputSubdomain']);
        self::addField('recras_currency', __('Currency symbol', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputCurrency']);
        self::addField('recras_decimal', __('Decimal separator', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputDecimal']);
        self::addField('recras_datetimepicker', __('Use calendar widget for contact forms', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputDatepicker']);
        self::addField('recras_fix_react_datepicker', __('Fix book process datepicker styling', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputFixDatepicker']);
        self::addField('recras_theme', __('Theme for Recras integrations', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputTheme']);
        self::addField('recras_enable_analytics', __('Enable Google Analytics integration?', Plugin::TEXT_DOMAIN), [__CLASS__, 'addInputAnalytics']);
    }



    /**
     * Sanitize user inputted subdomain
     *
     * @return string|false
     */
    public static function sanitizeSubdomain(string $subdomain)
    {
        // RFC 1034 section 3.5 - http://tools.ietf.org/html/rfc1034#section-3.5
        if (strlen($subdomain) > 63) {
            return false;
        }
        if (!preg_match('/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?$/', $subdomain)) {
            return false;
        }
        return $subdomain;
    }


    /**
     * Echo settings helper text
     */
    public static function settingsHelp(): void
    {
        printf(
            __('For more information on these options, please see the %s page.', Plugin::TEXT_DOMAIN),
            '<a href="' . admin_url('admin.php?page=' . self::PAGE_DOCS) . '">' . __('Documentation', Plugin::TEXT_DOMAIN) . '</a>'
        );
    }
}
