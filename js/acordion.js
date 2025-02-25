$(document).ready(function(){
  $(".acordion_tree").css("display","none");
  $(".trigger").click(function(){
    if($("+.acordion_tree",this).css("display")=="none"){
				$('.trigger').removeClass("active");
				$('.trigger a.menu').each(function(){
					var btnClass = $(this).attr("class");
					var classArr = btnClass.split(' ');
					if(classArr[0].substring(classArr[0].length-2,classArr[0].length) == "on")
					{
						$(this).attr("class",btnClass.replace(classArr[0],classArr[0].substring(0,classArr[0].length-2)));
					}
				});

				$(".acordion_tree").slideUp("normal");
				$(this).addClass("active");
				$("+.acordion_tree",this).slideDown("normal");

				var btnClass = $('a.menu',this).attr("class");
				var classArr = btnClass.split(' ');
				$('a.menu',this).attr("class",btnClass.replace(classArr[0],classArr[0]+"on"));
  }else{
				$(this).removeClass("active");
				$("+.acordion_tree",this).slideUp("normal");

				var btnClass = $('a.menu',this).attr("class");
				var classArr = btnClass.split(' ');
				$('a.menu',this).attr("class",btnClass.replace(classArr[0],classArr[0].substring(0,classArr[0].length-2)));
  }
  });
});