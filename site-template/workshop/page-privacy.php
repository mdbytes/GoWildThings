<?php
    /* Template Name: Privacy Page */
    require('header-site.php');
?>

  <main class="container">
    <div class="row">
        <div class="site-body col-lg-9">
            <?php
            while ( have_posts() ) : the_post(); 

                
            
            
                $image = wp_get_attachment_image_src( get_post_thumbnail_id(),'single_post_thumbnail'); 
                echo '<div>';
                echo '<img src="'.$image[0].'" alt="image">';
                echo '</div><br>';
                echo '<h2><br>'.get_the_title().'</h2>';
                echo '<h3>'.get_the_date().'</h3>';
            
            /* This section for categories and tags */
            echo "<section>";
            echo "Location: ";
            the_category(', ');
            echo "<br>Sites: ";
            the_tags(', ');
            echo "<br></section><br>";
        endwhile;
            
		    // Start the loop for displaying content
		    if(have_posts()): 
                while ( have_posts() ) : the_post();
                   the_content();
		        endwhile;
            endif;
            
            comments_template();
            
		?>
        </div>
    
        <div class="site-sidebar col-lg-3">
            
            <?php get_sidebar(); ?>
        </div>
    </div>
</main>
<?php
  get_footer();

?>