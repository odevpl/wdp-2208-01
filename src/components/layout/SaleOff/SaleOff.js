import React from 'react';
import { useSelector } from 'react-redux';
import { getGalleryData } from '../../../redux/galleryRedux';
import GalleryPanel from '../../common/CompareBox/GalleryPanel/GalleryPanel';

const SaleOff = () => {
  const saleOffData = useSelector(state => getGalleryData(state).saleOff);
  console.log(saleOffData);
  return (
    <div>
      <GalleryPanel data={saleOffData} />
    </div>
  );
};

export default SaleOff;
