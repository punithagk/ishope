(function ($) {
Drupal.behaviors.actionTBHotel = {
  attach: function (context) {
	$(window).load(function(){
      jQuery('#subscribe').find('input[type="submit"]').val(Drupal.t("Go"));
      jQuery('.views-view-grid .grid > .grid-inner').matchHeights();
      jQuery('#sidebar-first-wrapper > .grid-inner, #sidebar-second-wrapper > .grid-inner, #main-content > .grid-inner').matchHeights();
      jQuery('#panel-first-wrapper .region > .block > .block-inner').matchHeights();
      jQuery('#panel-second-wrapper .panel-column > .grid-inner').matchHeights();
	});
	$(".change-skin-button").click(function() {
	  parts = this.href.split("/");
	  style = parts[parts.length - 1];
   	  $.cookie("nucleus_skin", style, {path: '/'});
      window.location.reload();
	  return false;
    });
	$('form.fivestar-widget div.fivestar-widget.clearfix').removeClass('clearfix');
	$('form.fivestar-widget div.fivestar-form-item.clearfix').removeClass('clearfix');
  }
};
})(jQuery);
