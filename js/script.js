var el = $('svg path.el'), index = 0;
el.each(function() {
    $(el[index]).attr('stroke-dasharray', el[index++].getTotalLength());
});