<?php
/**
 * Plugin Name:    Footer ExpC
 * Description:    Hace el Footer de ExpC
 * Author:         Fede Santana y Victor Salaberry
 * Domain Path:    /languages
 * Text Domain:    simple-facebook-widget
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @version     0.0.1
 */

// First register resources with init 
function footerExpC_init() {
    $path = "/frontend/dist/assets";
    if(getenv('WP_ENV')=="development") {
        $path = "/frontend/dist/assets";
    }
    wp_register_script("footerExpC_js", plugins_url($path."/index.js", __FILE__), array(), "1.0", false);
    wp_register_style("footerExpC_css", plugins_url($path."/index.css", __FILE__), array(), "1.0", "all");
}

add_action( 'init', 'footerExpC_init' );

// Function for the short code that call React app
function footerExpC() {
    wp_enqueue_script("footerExpC_js", '1.0', true);
    wp_enqueue_style("footerExpC_css");
    return "<div id=\"footerExpC\"></div>";
}

add_shortcode('footerExpC', 'footerExpC');
