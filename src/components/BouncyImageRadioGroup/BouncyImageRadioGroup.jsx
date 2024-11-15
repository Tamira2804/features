import React, { useState } from 'react';
import './BouncyImageRadioGroup.css';

const BouncyImageRadioGroup = () => {
  const [selectedImage, setSelectedImage] = useState('Monstera');

  const handleChange = event => {
    setSelectedImage(event.target.value);
  };

  return (
    <div className="demo">
      <fieldset className="bouncy-image-radio-group">
        <label
          style={{
            '--_img': `url(${process.env.PUBLIC_URL}/images/image1.jpg)`,
          }}
        >
          <input
            type="radio"
            name="images"
            value="image1"
            checked={selectedImage === 'image1'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': `url(${process.env.PUBLIC_URL}/images/image2.jpg)`,
          }}
        >
          <input
            type="radio"
            name="images"
            value="image2"
            checked={selectedImage === 'image2'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': `url(${process.env.PUBLIC_URL}/images/image6.jpg)`,
          }}
        >
          <input
            type="radio"
            name="images"
            value="image6"
            checked={selectedImage === 'image6'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': `url(${process.env.PUBLIC_URL}/images/image4.jpg)`,
          }}
        >
          <input
            type="radio"
            name="images"
            value="image4"
            checked={selectedImage === 'image4'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': `url(${process.env.PUBLIC_URL}/images/image3.jpg)`,
          }}
        >
          <input
            type="radio"
            name="images"
            value="image3"
            checked={selectedImage === 'image3'}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default BouncyImageRadioGroup;
