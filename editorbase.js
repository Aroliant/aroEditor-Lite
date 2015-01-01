var ae = {
	initializeEditor:function(){
	aro_Editor.document.designMode = 'On';
	},
	loadLocalData : function(){
	if(localStorage.getItem("data")!=null){
		$("#aro_Editor").contents().find('body').append(localStorage.getItem("data"));
		}
	},
	undo : 	function(){
	aro_Editor.document.execCommand('Undo'); 
	},
	redo: 	function(){
	aro_Editor.document.execCommand('Redo'); 
	},
	makeBold: 	function(){
	aro_Editor.document.execCommand('bold',false,null); 
	},
	makeUline:	function(){
	aro_Editor.document.execCommand('underline',false,null);
	},
	makeItalic:	function(){
	aro_Editor.document.execCommand('italic',false,null); 
	},
	textFormat:	function(size){
	aro_Editor.document.execCommand('FormatBlock',false,size);
	$('.fmenu').delay(50).fadeToggle(200);
	},
	changefColorPop:	function (){
	$('.colorpicker').delay(50).fadeToggle(200);
	},
	changefColor:	function(color){
	aro_Editor.document.execCommand('ForeColor',false,color);
	$('.colorpicker').delay(50).fadeToggle(200);
	},
	createUL:	function (){
	aro_Editor.document.execCommand("InsertOrderedList", false,"newOL");
	},
	createOL:	function (){
		aro_Editor.document.execCommand("InsertUnorderedList", false,"newUL");
	},
	createLinkPop:	function (){
		$('.loader').delay(50).fadeIn(200);
		$('.linkPop').delay(50).fadeIn(200);
	},
	closePopLink:	function (){
		$('.loader').delay(50).fadeOut(200);
		$('.linkPop').delay(50).fadeOut(200);
	},
	createLink:	function (){
		var data = linker.elements["link"].value;
		var linkURL = "http://" + data;
		aro_Editor.document.execCommand("CreateLink", false, linkURL);
		$('.linkPop').delay(50).fadeOut(200);
		$('.loader').delay(50).fadeOut(200);
	},
	removeLink:	function (){
		aro_Editor.document.execCommand("Unlink", false, null);
	},
	alignLeft:	function (){
		aro_Editor.document.execCommand("JustifyLeft");
	},
	alignCenter:	function (){
		aro_Editor.document.execCommand("JustifyCenter");
	},
	alignRight:		function (){
		aro_Editor.document.execCommand("JustifyRight");
	},
	justify:	function (){
		aro_Editor.document.execCommand("JustifyFull");
	},
	function showImageExplorer(){
		$('.loader').delay(50).show(50);
		$('.imgExplorer').delay(50).fadeIn(200);
	}
	function insertImage(){
		var data = imgUploader.elements["link"].value;
		if(data != null){
	        aro_Editor.document.execCommand('insertimage', false, data); 
	        $('.imgExplorer').delay(50).fadeOut(200);
	        $('.loader').delay(50).fadeOut(200);
	    }
	    else{
	    	alert('Enter a image');
	    }
	}
	function removeFormatting(){
		 aro_Editor.document.execCommand('RemoveFormat'); 
	}

	function toggleFontMenu(){
		var get=document.getElementsByClassName("fmenu");
		$('.fmenu').delay(50).fadeToggle(150);
	}
	function closePopUload(){
		$('.imgExplorer').delay(50).fadeOut(200);
		$('.loader').delay(50).fadeOut(200);
	}
	//On Broser Saver Button.
	function saveOnBrowser(){
		var data = $("#aro_Editor").contents().find('body').html();
		localStorage.setItem("data", data);
		$('.btn_browser-saver').removeClass('redder').addClass('greener');
		$('#digiDisplay').show().html('Saved on Broswer').delay(2500).fadeOut(100);
	}

	function releaseSavers(){
		$('.btn_browser-saver').removeClass('greener').addClass('redder');
		$('.btn_saver').removeClass('greener').addClass('redder');
		
	}

	$(document).ready(function(){
	$("#aro_Editor").contents().find('body').keyup(function(){
		var data1=localStorage.getItem("data");
		var data2=$("#aro_Editor").contents().find('body').html();
	if(data1!==data2)
	{
		releaseSavers(); // Changes the color when the user starts editing it
	}
	});
	});

	function preview(){
		var data = $("#aro_Editor").contents().find('body').html();
		$('.previewShower').show();
		$('.previewShower div').html(data);
		$('.closePrev').show();
	}
	function hidePreview(){
		$('.previewShower').hide();
		$('.closePrev').hide();
	}

};





var colors = ["#FFFFFF","#C0C0C0","#808080","#b00b00","#de1e7e","#e1e100","#BADA55","#F0FEAF","#ac1d1c","#facade","#ABACA5","#ABA5ED","#ABBE55","#ABE1E5","#AB0DED","#AB011A","#ACCEDE","#ACCE55","#ACCE55","#A1D015","#A1D05E","#A11E6E","#A11E1E","#A110D5","#A55E55","#BABB1E","#BABE15","#BADA55","#BA6A55","#BA6E15","#BA66ED","#BA15A5","#BA5505","#BEAD1E","#BEEFED","#BEF1EA","#BE6A11","#BE66ED","#BE16A5","#B1ADE5","#B1EED5","#807B7B","#696868","#525151","#302F2F","#161616","#000000","#3603FF","#5739CC","#08BDAE","#27726C","#0056F0","#268A52","#26728A","#61610E","#E606B0","#6D5F3A","#0BBD2E","#B568CE","red"];
var colorDataHTML = "";
for(var i=0;i<colors.length;i++){
	colorDataHTML	+=	'<div type="button" style="background:'+ colors[i] +';" onClick="changefColor(\''+ colors[i] +'\')" class="picBoxColor">&nbsp;</div>';
};

$("#colorPicker").html(colorDataHTML);

/* Auto Saver */
window.setInterval(function(){
  if(document.getElementById("autosavebox").checked==true){
   		var date = new Date();
		var time = date.toTimeString();
   		$('#digiDisplay').html('Saved on browser automatically at ' + time);
   }
   else{

   }
}, 5000);