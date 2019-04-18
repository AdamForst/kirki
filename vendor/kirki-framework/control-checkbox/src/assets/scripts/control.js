wp.customize.controlConstructor['kirki-switch'] = wp.customize.kirkiDynamicControl.extend( {

	initKirkiControl: function( control ) {
		control = control || this;
		control.container.on( 'change', 'input', function() {
			control.setting.set( jQuery( this ).is( ':checked' ) );
		} );
	}
} );

wp.customize.controlConstructor['kirki-toggle'] = wp.customize.kirkiDynamicControl.extend( {

	initKirkiControl: function( control ) {
		control = control || this;
		control.container.on( 'change', 'input', function() {
			control.setting.set( jQuery( this ).is( ':checked' ) );
		} );
	}
} );
