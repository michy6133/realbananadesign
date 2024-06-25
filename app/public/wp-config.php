<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'VRMm//y5UM40b*`L0&1#(%mTpy#4F<&GLnOFXI8Z,?dr13a^b[&@ULB=T9$x~^Uo' );
define( 'SECURE_AUTH_KEY',   'WQp|LaF[>F|.>BaLkBbx>LlO0V%`]cYY)%/t.6C}yy~rg~VRQyUw*p%-=DQ=-|aJ' );
define( 'LOGGED_IN_KEY',     'asj%Sh2TeyQ4nRh73grwFcI-+unZBATAj!k,+}6:!!C&I@]VJ$9PVLU!aw)A&ycy' );
define( 'NONCE_KEY',         'uBdaj|CRiweF/xM9exY$7b!akKbEOM!Zrdp8R,h)knH3oc9Hg$+X+W<{I=c8U80%' );
define( 'AUTH_SALT',         '3[F)o6bgrF7!N4|c`UQee|tl|xf(+QPQI4i6sJp6;KzP=bkx4w 0L2utGup/S<;y' );
define( 'SECURE_AUTH_SALT',  'g@H@rn_u.f51Z~:JV/h3yG@N{L2QD=k%R.^=&x77qZxBy?sB BG;ch@_Z!%JB1m+' );
define( 'LOGGED_IN_SALT',    'V+<Oxcg7{|0Z(X{0VF[,rY$R35^RgH%$/nK*1pBKlG 6ieNJn_.nQ9w7M*a&0tz9' );
define( 'NONCE_SALT',        '7=~h*75F#DDBiRQ3|Y9?f]%W47PM5d-C@Wb.64*~0P6^$-o5O#OA.Tw r[EgY5gi' );
define( 'WP_CACHE_KEY_SALT', '{eAimn+C<.1fY06*.[F.m?d]a6i1$c[UEp#M-<+*+/L|CGN<42);]4RTtw@x4m^0' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
