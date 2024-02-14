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
            '--_img': 'url(https://assets.codepen.io/2585/fiddle-leaf.jpeg)',
          }}
        >
          <input
            type="radio"
            name="images"
            value="Fiddle Leaf"
            checked={selectedImage === 'Fiddle Leaf'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': 'url(https://assets.codepen.io/2585/pink-princess.jpeg)',
          }}
        >
          <input
            type="radio"
            name="images"
            value="Pink Princess"
            checked={selectedImage === 'Pink Princess'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img':
              'url(https://assets.codepen.io/2585/kara-eads-zcVArTF8Frs-unsplash.jpg)',
          }}
        >
          <input
            type="radio"
            name="images"
            value="Monstera"
            checked={selectedImage === 'Monstera'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': 'url(https://assets.codepen.io/2585/pothos.jpeg)',
          }}
        >
          <input
            type="radio"
            name="images"
            value="Pothos"
            checked={selectedImage === 'Pothos'}
            onChange={handleChange}
          />
        </label>
        <label
          style={{
            '--_img': 'url(https://assets.codepen.io/2585/rubber-tree.webp)',
          }}
        >
          <input
            type="radio"
            name="images"
            value="Rubber Tree"
            checked={selectedImage === 'Rubber Tree'}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </div>
  );
};

export default BouncyImageRadioGroup;
