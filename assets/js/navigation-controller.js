function RemoveNavigationButtonWith ( currentControl ) {
  if ( currentControl == 'off' ) {
    btnPrev.attr('disabled', 'disabled');
    btnNext.attr('disabled', 'disabled');
  } else if ( currentControl == 'one' ) {
    btnPrev.removeAttr('disabled');
    btnNext.removeAttr('disabled');
  }
};

function UpdateSlideClasses () {
  $('.slide').removeClass('previousSlide currentSlide nextSlide');
  previousSlide = $('.slide:first');
  currentSlide = $('.slide:nth-child(2)');
  currentControl = currentSlide.attr('navigation');
  nextSlide = $('.slide:nth-child(3)');
  SetSlideClass();
  RemoveNavigationButtonWith(currentControl);
  UpdateValueOfProgressBar();
  DragActiveOrNot(currentControl);
};

function SetSlideClass () {
  previousSlide.addClass('previousSlide');
  currentSlide.addClass('currentSlide');
  nextSlide.addClass('nextSlide');
  currentPosition = parseInt(currentSlide.attr('position'));
};
