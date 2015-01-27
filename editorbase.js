var ae = {
	initializeEditor:function(){
	aro_Editor.document.designMode = 'On';
	this.loadLocalData();
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
	$(".ic-bold").addClass('selectHighlight');
	},

	makeUline:	function(){
	aro_Editor.document.execCommand('underline',false,null);
	$(".ic-underline").addClass('selectHighlight');
	},

	makeItalic:	function(){
	aro_Editor.document.execCommand('italic',false,null); 
	$(".ic-italic").addClass('selectHighlight');
	},

	textFormat:	function(size){
	aro_Editor.document.execCommand('FormatBlock',false,size);
	$('.fmenu').fadeToggle(100);
	ext.setStyle(size.toUpperCase());
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

	showImageExplorer:function(){
		$('.loader').delay(50).show(50);
		$('.imgExplorer').delay(50).fadeIn(200);
	},

	insertImage:function (){
		var data = imgUploader.elements["link"].value;
		if(data != null){
	        aro_Editor.document.execCommand('insertimage', false, data); 
	        $('.imgExplorer').delay(50).fadeOut(200);
	        $('.loader').delay(50).fadeOut(200);
	    }
	    else{
	    	alert('Enter a image');
	    }
	},
	insert64Image:function (){
		var data = localStorage.getItem('imgData');
		if(data != null){
	        aro_Editor.document.execCommand('insertimage', false, data); 
	        $('.imgExplorer').delay(50).fadeOut(200);
	        $('.loader').delay(50).fadeOut(200);
	    }
	    else{
	    	alert('Select a image');
	    }
	},
	removeFormatting:function (){
		 aro_Editor.document.execCommand('RemoveFormat'); 
	},

	toggleFontMenu: function (){
		var get=document.getElementsByClassName("fmenu");
		$('.fmenu').fadeToggle(100);
	},

	closePopUload: function (){
		$('.imgExplorer').delay(50).fadeOut(200);
		$('.loader').delay(50).fadeOut(200);
	},

	//On Broser Saver Button.
	saveOnBrowser : function (){
		var data = $("#aro_Editor").contents().find('body').html();
		localStorage.setItem("data", data);
		$('.btn_browser-saver').removeClass('redder').addClass('greener');
		$('#digiDisplay').show().html('Saved on Broswer').delay(2500).fadeOut(100);
	},
	saveOnAsHTML:function(){
		var fileData = $("#aro_Editor").contents().find('body').html();
		var u = "data:application/octet-stream;base64,"+btoa(fileData);
		document.location = u;
	},
	releaseSavers:	function (){
		$('.btn_browser-saver').removeClass('greener').addClass('redder');
		$('.btn_saver').removeClass('greener').addClass('redder');
		
	},

	preview:	function(){
		var data = $("#aro_Editor").contents().find('body').html();
		$('.previewShower').show();
		$('.previewShower div').html(data);
		$('.loader').fadeIn(50);
	},

	hidePreview:	function (){
		$('.previewShower').hide();
		$('.closePrev').hide();
		$('.loader').fadeOut(50);
	},
	codeView : function(){
		this.cvdata = $("#aro_Editor").contents().find('body').html();
		$('#codePrev').show();
		$('#codePrev').val(this.cvdata);	
		$('.codeViewShow').hide();
		$('.codeViewClose').show();

	},
	codeViewClose : function(){
		this.cvsdata = $("#codePrev").val();
		$('#codePrev').hide();
		$("#aro_Editor").contents().find('body').html(this.cvsdata);
		$('.codeViewShow').show();
		$('.codeViewClose').hide();
	},
	el : function(data){
		return document.getElementById(data);
	}

};

var innerFrameData = '<link rel="stylesheet" type="text/css" href="innerEditor.css">';


$("#aro_Editor").contents().find('head').html(innerFrameData);

$(document).ready(function(){
	$("#aro_Editor").contents().find('body').keyup(function(){
		var data1=localStorage.getItem("data");
		var data2=$("#aro_Editor").contents().find('body').html();
			if(data1!==data2)
			{
				ae.releaseSavers(); // Changes the color when the user starts editing it
			}
	});
});


var colors = ["#FFFFFF","#C0C0C0","#808080","#b00b00","#de1e7e","#e1e100","#BADA55","#F0FEAF","#ac1d1c","#facade","#ABACA5","#ABA5ED","#ABBE55","#ABE1E5","#AB0DED","#AB011A","#ACCEDE","#ACCE55","#ACCE55","#A1D015","#A1D05E","#A11E6E","#A11E1E","#A110D5","#A55E55","#BABB1E","#BABE15","#BADA55","#BA6A55","#BA6E15","#BA66ED","#BA15A5","#BA5505","#BEAD1E","#BEEFED","#BEF1EA","#BE6A11","#BE66ED","#BE16A5","#B1ADE5","#B1EED5","#807B7B","#696868","#525151","#302F2F","#161616","#000000","#3603FF","#5739CC","#08BDAE","#27726C","#0056F0","#268A52","#26728A","#61610E","#E606B0","#6D5F3A","#0BBD2E","#B568CE","red"];
var colorDataHTML = "";
for(var i=0;i<colors.length;i++){
	colorDataHTML	+=	'<div type="button" style="background:'+ colors[i] +';" onClick="ae.changefColor(\''+ colors[i] +'\')" class="picBoxColor">&nbsp;</div>';
};

$("#colorPicker").html(colorDataHTML);

/* Auto Saver */
window.setInterval(function(){
  if(document.getElementById("autosavebox").checked==true){
   		var date = new Date();
		var time = date.toTimeString();
   		$('#digiDisplay').html('Saved on browser automatically at ' + time).fadeIn(200).delay(2000).fadeOut(200);
   		var data = $("#aro_Editor").contents().find('body').html();
		localStorage.setItem("data", data);
		$('.btn_browser-saver').removeClass('redder').addClass('greener');
   }
}, 5000);

var ext ={
	setStyle : function(data,e){
/** For FONT Filteration	*/
		if(data=='FONT'||data=='SPAN')
		{
			data = e.target.parentNode.tagName;
		}
/* Find Main Tag */


		console.log(data);
		$('.sdf').removeClass('selectHighlight');
		switch (data){
			case 'H1' 			: this.set('Header 1'); break;
			case 'H2' 			: this.set('Header 2'); break;
			case 'H3' 			: this.set('Header 3'); break;
			case 'H4' 			: this.set('Header 4'); break;
			case 'H5' 			: this.set('Header 5'); break;
			case 'H6' 			: this.set('Header 6'); break;
			case 'PRE' 			: this.set('Code'); break;
			case 'P' 			: this.set('Normal'); break;
			case 'B' 			: $(".ic-bold").addClass('selectHighlight'); break;
			case 'U' 			: $(".ic-underline").addClass('selectHighlight'); break;
			case 'I' 			: $(".ic-italic").addClass('selectHighlight'); break;
			case 'BLOCKQUOTE' 	: this.set('Quote'); break;
			default 			: this.set('No Style');
		}
	},
	set : function (toSet){  // default set for style
		$("#setStyle span strong").html(toSet);
	}
}

$("#aro_Editor").contents().find('body').click(function(event){
	ext.setStyle(event.target.tagName,event);
})

function readImage() {
    if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
             console.log(e.target.result);
             localStorage.setItem('imgData',e.target.result)
        };       
        FR.readAsDataURL( this.files[0] );
    }
}

document.getElementById("b64upload").addEventListener("change", readImage, false);

