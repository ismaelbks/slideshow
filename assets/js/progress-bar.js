var progressBar = $('#progressBarWrapper .progress-bar'),
    slidesCount = $('.slide').length;

function UpdateValueOfProgressBar () {
  var completion = Math.floor( (currentSlide.attr('position') / slidesCount) * 100),
      completionWithPercent = `${completion}%`;
  progressBar.css('width', `${completion}%`);
  progressBar.attr('aria-valuenow', completion);
}
