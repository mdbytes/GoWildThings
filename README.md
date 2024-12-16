#GoWildThings

GoWildThings is a WordPress blog front end which adapts our ReactSiteTemplate to use the WordPress REST API for post data. Features of the application include:

1.  The application populates post data either upon entering the galleries page or an individual gallery page.

2.  Users can choose to view one of four pages.

3.  An "About" page offers users background on the content originators and what they do.

4.  A "Galleries" page presents a summary for all of the posts, including post excerpts and feature photos.

5.  From the "Galleries" page, users can click on a button or the featured image to see the entire post and gallery portfolio.

6.  Each post presents a text summary and photo gallery for the subject at hand. Preview images are viewed at half the viewable area for large screens.

7.  Users can view a gallery of larger images by clicking on the preview images. The larger gallery is a slideshow gallery which utilizes GLightbox, a pure javascript lightbox library.

8.  A "Privacy" page offers users the ability to understand security issues such as cookies utilized, non-personal information gathered, etc.

9.  The "Contact Us" page offers a framework for users to contact the content creators. At the present time, the submit button offers a modal which directs users to contact the admin at mdbytes.com

10. This application offers WordPress content creators the ability to step away from preset theme frameworks. Future work will focus on expanding functionality for content creators to a) directly create post content online, b) edit or modify content directly, and c) manage users online.

This application is in process of being upgraded to React 18, React Router 6, and replacement of all class components (which were commonly used when this app was first developed) with functional components. Hooks will soon replace out-dated lifecycle methods.

This application is currently deployed using React.Js with Next.Js on a Vercel cloud server at the address gowildthings.com
