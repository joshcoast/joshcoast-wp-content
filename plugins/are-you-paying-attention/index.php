<?php

/*
 * Plugin Name: Are you paying attention quiz
 * Description: Give your readers a multiple choice question.
 * Version 1.0
 * Author: Josh
 * Author URI https://www.joshcoast.com/
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class AreYouPayingAttention {
	function __construct() {
		//
		add_action('init', array($this, 'adminAssets'));
	}

	function adminAssets() {
		wp_register_style('quizeditcss', plugin_dir_url(__FILE__) . 'build/index.css');
        wp_register_script('ourNewBlockType', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks'), 'wp-element', 'wp-editor');
		register_block_type('ourplugin/are-you-paying-attention', array(
			'editor_script' => 'ourNewBlockType',
            'editor_style' => 'quizeditcss',
            // This render_callback loads the json data from the database and turns it into an array
            // and passes it to the 'theHTML' function.
			'render_callback' => array($this, 'theHTML')
		));
	}

    // This theHTML function will only run if the block is being used.
    // The $attributes argument is the array that's passed in by our "dynamic block type" register_block_type().
	function theHTML($attributes) {
        if (!is_admin()) {
	        wp_enqueue_script('attentionFrontendScripts', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'), 1.0, true);
	        wp_enqueue_style('attentionFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
        }

        ob_start();
        // Hand the data off to javascript and let js do the work. No wp official way to do this, but this is one way to do it.
		?>
        <div class="paying-attention-update-me"> <pre style="display:none;"><?php echo wp_json_encode($attributes) ?></pre> </div>
		<?php return ob_get_clean();
	}
}

$areYouPayingAttention = new AreYouPayingAttention();