<?php 
if ( have_posts() ) {
	while ( have_posts() ) : the_post();
		get_template_part( 'templates/onecolumn/content', get_post_format() );
	endwhile;

	get_template_part( 'templates/content', 'pagination' );
	
}
else {
	get_template_part( 'templates/content', 'none' );
}
?>