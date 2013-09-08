$(document).ready(function(){
    var el = $('#img');
    var piece = 3;
    var time = 1000;
    var time_per_item = parseInt(time/piece);
    var src = el.attr('src');
    var id = el.attr('id');
    var full_height = parseInt(el.css('height'));
    var height = parseInt(el.css('height'))/piece;
    var width = parseInt(el.css('width'));
    var html = '';
    html+='<div id="'+id+'" style="width:'+width+'px;height:'+ height+'px; overflow:hidden; display:block;position:relative;">\n';
            var b_height = full_height-height;
            for(i=0;i<piece;i++){
                html+='<div style="background:url('+src+');background-position: 0px -'+b_height+'px;width:'+width+'px;height:'+ height+'px; overflow:hidden; display:block;position:absolute;top:0px;left:0px;" alt="image_name" ></div>\n';
                b_height-=height;
            }
    html+='</div>';
    var new_el = $(html).insertAfter(el);
    //console.log(new_el);
    el.remove();
    new_el.mouseenter(function(){
        var time = 0;
        var items = new_el.find('div');
        jQuery.fn.reverse = [].reverse;
        items.reverse().each(function(index,element){
            if(index!=items.length-1){
                var el = this;
                setTimeout(function(){
                    $(el).animate({opacity:0},time_per_item);
                },time);
                time+=time_per_item;
            }
        });
    });
    new_el.mouseleave(function(){
        var time = 0;
        var items = new_el.find('div');
        items.each(function(index,element){
            if(index!=0){
                var el = this;
                setTimeout(function(){
                    $(el).animate({opacity:1},time_per_item);
                },time);
                time+=time_per_item;
            }
        });
    });

});