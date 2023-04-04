import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { About, Contact, Home, Post, Posts, Privacy } from '../pages';
import { Layout, NotFound } from '../components/layout';

// Creates the site router with a wrapper element called Layout
// Layout contains the navigation bar, footer, and metadata to
// be added to the head section of the website.
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="posts" element={<Posts />} />
      <Route path="post/:id" element={<Post />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
    </Route>
  )
);
