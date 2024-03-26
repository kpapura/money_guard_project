export function currencyImages(isRetina, isBigScreen, isTabletOrMobile) {
  let imageSrc = "";
  let secondImageSrc = "";

  if (isRetina) {
    if (isBigScreen) {
      imageSrc = "../../img/images/currency_desk@2x.webp";
      secondImageSrc = "../../img/images/line_desc_2x.webp";
    } else if (isTabletOrMobile) {
      imageSrc = "../../img/images/currency_tablet@2x.webp";
      secondImageSrc = "../../img/images/line_desc_tab_2x.webp";
    } else {
      imageSrc = "../../img/images/currency_mobile@2x.webp";
      secondImageSrc = "../../img/images/line_desc_mob_2x.webp";
    }
  } else {
    if (isBigScreen) {
      imageSrc = "../../img/images/currency_desk.webp";
      secondImageSrc = "../../img/images/line_desc_1x.webp";
    } else if (isTabletOrMobile) {
      imageSrc = "../../img/images/currency_tablet.webp";
      secondImageSrc = "../../img/images/line_desc_tab_1x.webp";
    } else {
      imageSrc = "../../img/images/currency_mobile.webp";
      secondImageSrc = "../../img/images/line_desc_mob_1x.webp";
    }
  }

  return { imageSrc, secondImageSrc };
}