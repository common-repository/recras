<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticIniteda2edcf35e3249484bbc681eb6321db
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'Recras\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Recras\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticIniteda2edcf35e3249484bbc681eb6321db::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticIniteda2edcf35e3249484bbc681eb6321db::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticIniteda2edcf35e3249484bbc681eb6321db::$classMap;

        }, null, ClassLoader::class);
    }
}
