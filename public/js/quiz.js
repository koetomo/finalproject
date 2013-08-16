$(document).ready(function(){
	var d =document.getElementById('removeme');
	$(d).hide();
	$(".filters").hide();
	var active = new Array();
	var activeFilters = new Array();
	var index = 0;
	var index2 = 0;
	var doNotDelete = new Array();
	var toDelete = true;
	var index3 = 0;
	$(':button').click(function(){
		var e1 = document.getElementsByClassName($(this).attr('id'));
		var at = $(this).attr('id');
		var displaybutton = "#button_" + at;
		activeFilters[index2] = at;
		index2++;
		$(displaybutton).show();
		for(var i =0; i<e1.length; i++){
			$(e1[i]).show();
			active[index] = $(e1[i]).attr('id');
			index ++;
		}

	});
	$(".filters").mouseenter(function(event){
		$(d).show();
	    d.style.left = event.pageX + 'px';
	    d.style.top = event.pageY + 'px';
	});
	$(".filters").mouseleave(function(){
		$(d).hide();
	});
	$(".filters").click(function(){
		$(this).hide();
		var at = $(this).attr('id');
		for(var k = 0; k<activeFilters.length; k++){
			if(activeFilters[k] == at.substring(7)){
				activeFilters[k] = "0";
			}
		}
		for(var i =0; i<$("." + at.substring(7)).length; i++){
			for(var j = 0; j<activeFilters.length; j++){
				if($($("."+at.substring(7))[i]).attr('class').indexOf(activeFilters[j]) != -1){
					doNotDelete[index3] = i;
					index3++;
					break;
				}
			}
			for(var l = 0; l<index3; l++){
				if (i == doNotDelete[l]){
					toDelete = false;
					break;
				}
			}
			if(toDelete){
				$($("."+at.substring(7))[i]).hide();
			}
			toDelete = true;
		}
		for(var i = 0; i<doNotDelete.length; i++){
			doNotDelete[i] = -1;
			index3 = 0;
		}

	})

});
