'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { DivRef } from '../../../../types';

const CookiesApproval = () => {
    const [cookiesApproved, setCookiesApproved] = useState(false);
    const approvalRef: DivRef = useRef(null);

    const cookiesApproval = () => {
        if (window != null) {
            approvalRef.current.style.display = 'none';

            setCookiesApproved(true);
            sessionStorage.setItem('cookiesApproved', 'true');
        }
    };

    useEffect(() => {
        // Track the approval of cookies and privacy settings
        if (
            document &&
            !cookiesApproved &&
            sessionStorage.getItem('cookiesApproved') !== 'true'
        ) {
            setTimeout(() => {
                approvalRef.current.style.display = 'flex';
            }, 2000);
        } else {
            approvalRef.current.style.display = 'none';
            setCookiesApproved(true);
        }
    }, [cookiesApproved]);

    return (
        <div
            id="cookie-disclosure"
            className="animate__animated animate__zoomInDown"
            ref={approvalRef}
        >
            <p>
                The information provided herein is not intended to replace the
                advice or attention of health care professionals. Any changes in
                your nutrition or exercise should be made only with the advice
                and consent of your doctor.{' '}
            </p>
            <p>
                We use cookies to ensure you have the best browsing experience
                on our website. By using our site, you acknowledge that you have
                read and understood our&nbsp;
                <Link href="/terms" className="cookie-link">
                    Privacy Policy
                </Link>{' '}
                and&nbsp;
                <Link href="/terms" className="cookie-link">
                    Terms of Service.
                </Link>
            </p>
            {!cookiesApproved ? (
                <button onClick={cookiesApproval}>Proceed to Site</button>
            ) : null}
        </div>
    );
};

export default CookiesApproval;
