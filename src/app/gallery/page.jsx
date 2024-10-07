import Image from 'next/image';
import React from 'react';

const ImagePage = () => {
    return (
        <div>
            <h6 className="text-2xl mb-12">Gallery Page</h6>
          <div>
            {
                [1,2,3,4,5]?.map((img) => (
                    <Image key={img} src={`/images/${img}.jpg`} alt="image" height="1080" width="1920" />
                ))
            }
          </div>
        </div>
    );
};

export default ImagePage;