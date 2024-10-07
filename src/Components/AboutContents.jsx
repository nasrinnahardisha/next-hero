import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div className='gap-4'>
            <Link href="/about/History">History</Link>
            <Link href="/about/Mission">Mission</Link>
        </div>
    );
};

export default AboutContents;