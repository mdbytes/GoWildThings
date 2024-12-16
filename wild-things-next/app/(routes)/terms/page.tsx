import React from 'react';
import TermsPage from '../../_assets/components/terms/TermsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy | Wild Things Nature Photography',
};

export default function Terms() {
    return <TermsPage />;
}
