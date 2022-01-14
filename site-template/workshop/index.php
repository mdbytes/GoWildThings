<?php get_header(); ?>
<div class="container-fluid">
    <div id="first_row" class="row">
        <div id="headline" class="col">
            <h2>Featured Galleries</h2>
        </div>
    </div>
    <div id="second_row" class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <?php
                                $args = 1;
                                $queried_post = get_post($args);                
                                $title = $queried_post->post_title;
                                $post_excerpt = strip_tags(substr($queried_post->post_content,0,250));
                                $image = wp_get_attachment_image_src( get_post_thumbnail_id( $args ), 'single-post-thumbnail' ); 
                                echo '<h5 class="card-title">'.$title.'</h5>';
                                echo '<div class="post-thumbnail">';
                                echo '<p class="p-center-image"><img src="'.$image[0].'" alt="thumbnail image"></p>';
                                echo '</div>';
                                
                                echo '<br><p>'.$post_excerpt.'<a href="'.get_the_permalink($args).'">&nbsp;&nbsp;....  Read More</a></p>';
                        ?>



                    <br><a href="<?php echo get_the_permalink($args); ?>" class="btn btn-primary">View the gallery</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <?php
                                $args = 707;
                                      $queried_post = get_post($args);                
                                $title = $queried_post->post_title;
                                $post_excerpt = strip_tags(substr($queried_post->post_content,0,250));
                                $image = wp_get_attachment_image_src( get_post_thumbnail_id( $args ), 'single-post-thumbnail' ); 
                                echo '<h5 class="card-title">'.$title.'</h5>';
                                echo '<div class="post-thumbnail">';
                                echo '<p class="p-center-image"><img src="'.$image[0].'" alt="thumbnail image"></p>';
                                echo '</div>';
                                
                                echo '<br><p>'.$post_excerpt.'<a href="'.get_the_permalink($args).'">&nbsp;&nbsp;....  Read More</a></p>';
                        ?>



                    <br><a href="<?php echo get_the_permalink($args); ?>" class="btn btn-primary">View the gallery</a>
                </div>
            </div>
        </div>
    </div>
    <div id="third_row" class="row">
        <div id="carouselExampleFade" style="width:100%;" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="2000">
                    <img class="d-block w-100" src="<?php echo get_stylesheet_directory_uri(); ?>/images/slide1_1600x533.jpg" alt="First slide">
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img class="d-block w-100" src="<?php echo get_stylesheet_directory_uri(); ?>/images/slide2_1600x533.jpg" alt="Second slide">
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img class="d-block w-100" src="<?php echo get_stylesheet_directory_uri(); ?>/images/slide3_1600x533.jpg" alt="Third slide">
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img class="d-block w-100" src="<?php echo get_stylesheet_directory_uri(); ?>/images/slide4_1600x533.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <div id="fourth_row" class="row">
        <div class="col-lg-6">
            <div id="about_us" class="card">
                <div class="card-body">
                    <h3 class="card-title">About</h3>
                    <p class="card-text" style="font-size:110%;">Martin Dwyer's passion is for nature and wildlife, his occupation is website development. Over the years, the digital photography from his nature adventues has provided great contenct for web development. This site is both an example of Martin's development work and a look inside the sites of his nature adventure. This website shares stories and pictures from his wildlife adventures with his wife Rose. Together, they have visited some of the most exciting nature spots in North America.<br><br>For more information about Martin, Rose, or any place they have visited, please contact them at the form below.<br><br>If you are interested in more information about website development or web applications, please visit <a href="https://mdbytes.com" data-slimstat="5">MD Bytes</a> and contact Martin.</p>

                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div id="about_us_image" class="card">
                <div class="card-body">
                    <p class="p-center-image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/about_us_image_600x450.png" alt="about us image" height="300"></p>
                    <p class="p-center-image">State Forest State Park, Colorado.<br>Temperature 20 degrees.</p>
                </div>
            </div>
        </div>

    </div>
    <div id="feature_photo" class="row">
        <p class="p-full-image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/baby_bear_1600x533.jpg" alt="feature image"></p>

    </div>


    <div id="sixth_row" class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <p class="p-center-image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/moose_350x350.png" alt="about us image" height="300"></p>
                    <p class="p-center-image">State Forest State Park, Colorado</p>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <div class="contact_us card-body">
                    <h3 class="card-title">Contact Us</h3>
                    <form action="<?php echo get_stylesheet_directory_uri(); ?>/sending_message.php" method="post" id="contact-form">
                        <div class="form-group">
                            <label for="email_address">Email address</label>
                            <input type="text" class="email required form-control" id="email_address" name="email_address" placeholder="name@example.com">
                        </div>

                        <div class="form-group">
                            <label for="contact_message">Message</label>
                            <textarea class="form-control" id="contact_message" name="contact_message" rows="3"></textarea>
                        </div>
                        <button id="message_submit" name="submit-btn" type="submit" class="btn btn-primary mb-2">Send Message</button>
                    </form>

                </div>
            </div>

        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <p class="p-center-image"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/buffalo_350x350.png" alt="about us image" height="300"></p>
                    <p class="p-center-image">Yellowstone National Park, Wyoming</p>
                </div>
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>
