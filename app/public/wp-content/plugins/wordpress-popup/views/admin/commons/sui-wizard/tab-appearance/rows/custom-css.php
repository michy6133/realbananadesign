<?php
/**
 * Custom CSS options.
 * Used only in desktop settings.
 *
 * @package Hustle
 * @since 4.3.0
 */

$content_class = '.hustle-layout-content';
// For Stacked Layout.
if ( ! empty( $settings['style'] ) && 'cabriolet' === $settings['style'] ) {
	$content_class = '.hustle-content';
}

$selectors = array(
	'modal_selectors'      => array(
		array(
			'name'     => __( 'Layout', 'hustle' ),
			'selector' => ".hustle-layout $content_class ",
		),
		array(
			'name'     => __( 'Title', 'hustle' ),
			'selector' => '.hustle-layout .hustle-title',
		),
		array(
			'name'     => __( 'Subtitle', 'hustle' ),
			'selector' => '.hustle-layout .hustle-subtitle ',
		),
		array(
			'name'     => __( 'Feat. Image', 'hustle' ),
			'selector' => ".hustle-layout $content_class .hustle-image img ",
		),
		array(
			'name'     => __( 'Main Content', 'hustle' ),
			'selector' => ".hustle-layout $content_class .hustle-group-content p ",
		),
		array(
			'name'     => __( 'CTA Button', 'hustle' ),
			'selector' => '.hustle-layout .hustle-button-cta ',
		),
	),

	'form_selectors'       => array(
		array(
			'name'     => __( 'Form Container', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-layout-form ',
		),
		array(
			'name'     => __( 'Input', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-layout-form .hustle-input ',
		),
		array(
			'name'     => __( 'Submit', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-layout-form .hustle-button-submit ',
		),
		array(
			'name'     => __( 'Success Container', 'hustle' ),
			'selector' => '.hustle-success ',
		),
		array(
			'name'     => __( 'Success Message', 'hustle' ),
			'selector' => '.hustle-success .hustle-success-content p ',
		),
	),

	'form_extra_selectors' => array(
		array(
			'name'     => __( 'Container', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-form-options ',
		),
		array(
			'name'     => __( 'Title', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-form-options .hustle-group-title ',
		),
		array(
			'name'     => __( 'Radio', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-radio span[aria-hidden]',
		),
		array(
			'name'     => __( 'Radio (Label)', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-radio span:not([aria-hidden])',
		),
		array(
			'name'     => __( 'Checkbox', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-checkbox span[aria-hidden]',
		),
		array(
			'name'     => __( 'Checkbox (Label)', 'hustle' ),
			'selector' => '.hustle-layout .hustle-layout-body .hustle-checkbox span:not([aria-hidden])',
		),
	),
);

if ( Hustle_Module_Model::EMBEDDED_MODULE !== $module_type ) {
	$selectors['modal_selectors'][] = array(
		'name'     => __( 'Close Button', 'hustle' ),
		'selector' => '.hustle-button-close',
	);
}
?>
<div class="sui-box-settings-row">

	<div class="sui-box-settings-col-1">
		<span class="sui-settings-label"><?php esc_html_e( 'Custom CSS', 'hustle' ); ?></span>
		<span class="sui-description"><?php esc_html_e( 'For more advanced customization options use custom CSS.', 'hustle' ); ?></span>
	</div>

	<div class="sui-box-settings-col-2">

		<label
			for="hustle-customize-css"
			class="sui-toggle hustle-toggle-with-container"
			data-toggle-on="customize-css"
		>
			<input
				type="checkbox"
				id="hustle-customize-css"
				data-attribute="customize_css"
				<?php checked( $settings['customize_css'], '1' ); ?>
			/>
			<span class="sui-toggle-slider" aria-hidden="true"></span>
			<span id="hustle-customize-label" class="sui-toggle-label"><?php esc_html_e( 'Enable custom CSS', 'hustle' ); ?></span>
		</label>


		<div class="sui-background-frame" data-toggle-content="customize-css">

			<label class="sui-label"><?php esc_html_e( 'Modal selectors', 'hustle' ); ?></label>

			<div class="sui-ace-selectors">

				<?php foreach ( $selectors['modal_selectors'] as $data ) : ?>
					<a href="#" class="sui-selector hustle-css-stylable" data-stylable="<?php echo esc_attr( $data['selector'] ); ?>" >
						<?php echo esc_html( $data['name'] ); ?>
					</a>
				<?php endforeach; ?>

			</div>

			<?php if ( $is_optin ) { ?>

				<label class="sui-label"><?php esc_html_e( 'Form selectors', 'hustle' ); ?></label>

				<div class="sui-ace-selectors">

					<?php foreach ( $selectors['form_selectors'] as $data ) : ?>
						<a href="#" class="sui-selector hustle-css-stylable" data-stylable="<?php echo esc_attr( $data['selector'] ); ?>" >
							<?php echo esc_html( $data['name'] ); ?>
						</a>
					<?php endforeach; ?>

				</div>

				<label class="sui-label"><?php esc_html_e( 'Form options selectors', 'hustle' ); ?></label>
				<label class="sui-label" style="font-weight: 400;"><?php esc_html_e( 'These are added through "Integrations" like Mailchimp that allow extra fields for users to select custom information requested.', 'hustle' ); ?></label>

				<div class="sui-ace-selectors">

					<?php foreach ( $selectors['form_extra_selectors'] as $data ) : ?>
						<a href="#" class="sui-selector hustle-css-stylable" data-stylable="<?php echo esc_attr( $data['selector'] ); ?>" >
							<?php echo esc_html( $data['name'] ); ?>
						</a>
					<?php endforeach; ?>

				</div>

			<?php } ?>

			<div id="hustle_custom_css" style="height: 210px;"><?php echo wp_kses_post( wp_strip_all_tags( $settings['custom_css'] ) ); ?></div>

		</div>

	</div>

</div>
