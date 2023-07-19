export default () => {
  const marqueeText = $('[data-marquee] p').clone();
  console.log(marqueeText);
  $('[data-marquee] > div').append(new Array(+5).join(marqueeText[0].outerHTML));
};
