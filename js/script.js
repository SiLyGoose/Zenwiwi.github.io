var el = jQuery_3_4_1('svg path.el'), index = 0;
el.each(function() {
    jQuery_3_4_1(el[index]).attr('stroke-dasharray', el[index++].getTotalLength());
});