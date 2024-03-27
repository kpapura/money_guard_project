import currency_desk2x from '../../img/images/currency_desk@2x.webp';
import line_desc_2x from '../../img/images/line_desc_2x.webp';

import currency_tablet2x from '../../img/images/currency_tablet@2x.webp';
import line_desc_tab_2x from '../../img/images/line_desc_tab_2x.webp';

import currency_mobile2x from '../../img/images/currency_mobile@2x.webp';
import line_desc_mob_2x from '../../img/images/line_desc_mob_2x.webp';

import currency_desk from '../../img/images/currency_desk.webp';
import line_desc_1x from '../../img/images/line_desc_1x.webp';

import currency_tablet from '../../img/images/currency_tablet.webp';
import line_desc_tab_1x from '../../img/images/line_desc_tab_1x.webp';

import currency_mobile from '../../img/images/currency_mobile.webp';
import line_desc_mob_1x from '../../img/images/line_desc_mob_1x.webp';

function currencyImages(isRetina, isBigScreen, isTabletOrMobile) {
  let imageSrc = '';
  let secondImageSrc = '';

  if (isRetina) {
    if (isBigScreen) {
      imageSrc = currency_desk2x;
      secondImageSrc = line_desc_2x;
    } else if (isTabletOrMobile) {
      imageSrc = currency_tablet2x;
      secondImageSrc = line_desc_tab_2x;
    } else {
      imageSrc = currency_mobile2x;
      secondImageSrc = line_desc_mob_2x;
    }
  } else {
    if (isBigScreen) {
      imageSrc = currency_desk;
      secondImageSrc = line_desc_1x;
    } else if (isTabletOrMobile) {
      imageSrc = currency_tablet;
      secondImageSrc = line_desc_tab_1x;
    } else {
      imageSrc = currency_mobile;
      secondImageSrc = line_desc_mob_1x;
    }
  }

  return { imageSrc, secondImageSrc };
}

export default currencyImages;
