import React from 'react';
import { Contact } from '../../_assets/components/contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact |  Wild Things Nature Photography',
};

const ContactPage = () => {
    return <Contact />;
};

export default ContactPage;
