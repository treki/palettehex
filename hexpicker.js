

if(!window.paletteHex_com)var paletteHex_com={};
if(!window.paletteHex_com)var paletteHex_com=new Object();
var paletteHex_com_funcs=new Object();
var paletteHex_com=new Object();
var standardObjectsCreated=false;
paletteHex_com.eventEls=[];
var depCache=new Object();
paletteHex_com.discardElement=function(element){
	element=paletteHex_com.commonObj.getEl(element);
	var gBin=document.getElementById('IELeakGBin');
	if(!gBin){
		gBin=document.createElement('DIV');
	gBin.id='IELeakGBin';
	gBin.style.display='none';
	document.body.appendChild(gBin);
}
;
	gBin.appendChild(element);
	gBin.innerHTML='';
}
;
paletteHex_com.createStandardObjects=function(){
	paletteHex_com.clientInfoObj=new paletteHex_com.clientInfo();
		paletteHex_com.clientInfoObj.init();if(!paletteHex_com.configObj){paletteHex_com.configObj=new paletteHex_com.config();
			paletteHex_com.configObj.init();};
		paletteHex_com.commonObj=new paletteHex_com.common();
		paletteHex_com.variableStorage=new paletteHex_com.globalVariableStorage();;
		paletteHex_com.commonObj.init();paletteHex_com.commonObj.addEvent(window,'unload',function(){paletteHex_com.commonObj.__clearMemoryGarbage();});
		standardObjectsCreated=true;};
		paletteHex_com.config=function(){var imagePath;
			var cssPath;
			var defaultCssPath;
			var defaultImagePath;};
			paletteHex_com.config.prototype={init:function(){this.imagePath='/images/';this.cssPath='/css/';
			this.defaultCssPath=this.cssPath;this.defaultImagePath=this.imagePath;}};
			paletteHex_com.globalVariableStorage=function(){
				var menuBar_highlightedItems;this.menuBar_highlightedItems=[];
				var arrayDSObjects;
				var arrayOfpaletteHex_comObjects;this.arrayDSObjects=[];
				this.arrayOfpaletteHex_comObjects=this.arrayDSObjects;
				var ajaxObjects;this.ajaxObjects=[];};
				paletteHex_com.globalVariableStorage.prototype={};
				paletteHex_com.common=function(){
					var loadedCSSFiles;
					var cssCacheStatus;
					var eventEls;
					var isOkToSelect;
					this.okToSelect=true;
					this.cssCacheStatus=true;
					this.eventEls=[];};
					paletteHex_com.common.prototype={
						init:function(){
							this.loadedCSSFiles=[];
						},
						__setTextSelOk:function(okToSelect){
							this.okToSelect=okToSelect;
						},
							__isTextSelOk:function(){
								return this.okToSelect;
							},
								getLeftPos:function(el){
									if(document.getBoxObjectFor){
										if(el.tagName!='INPUT'&&el.tagName!='SELECT'&&el.tagName!='TEXTAREA')
return document.getBoxObjectFor(el).x}
var ret=el.offsetLeft;
while((el=el.offsetParent)!=null){
	if(el.tagName!='HTML'){ret+=el.offsetLeft;
		if(document.all)
ret+=el.clientLeft;
}}
return ret;},
getTopPos:function(el){
	if(document.getBoxObjectFor){
		if(el.tagName!='INPUT'&&el.tagName!='SELECT'&&el.tagName!='TEXTAREA')
return document.getBoxObjectFor(el).y
}
var ret=el.offsetTop;
while((el=el.offsetParent)!=null){if(el.tagName!='HTML'){ret+=(el.offsetTop-el.scrollTop);
	if(document.all)
ret+=el.clientTop;}}return ret;},cancelEvent:function(){
	return false;},addEvent:function(obj,type,fn,suffix){
		if(!suffix)
suffix='';if(obj.attachEvent){
	if(typeof paletteHex_com_funcs[type+fn+suffix]!='function'){paletteHex_com_funcs[type+fn+suffix]=function(){fn.apply(window.event.srcElement);};obj.attachEvent('on'+type,paletteHex_com_funcs[type+fn+suffix]);}obj=null;}else{obj.addEventListener(type,fn,false);}
this.__addEventEl(obj);},removeEvent:function(obj,type,fn,suffix){
	if(obj.detachEvent){obj.detachEvent('on'+type,paletteHex_com_funcs[type+fn+suffix]);paletteHex_com_funcs[type+fn+suffix]=null;obj=null;}else{obj.removeEventListener(type,fn,false);}},__clearMemoryGarbage:function(){if(!paletteHex_com.clientInfoObj.isMSIE)return;for(var no=0;no<paletteHex_com.eventEls.length;no++){try{var el=paletteHex_com.eventEls[no];el.onclick=null;el.onmousedown=null;el.onmousemove=null;el.onmouseout=null;el.onmouseover=null;el.onmouseup=null;el.onfocus=null;el.onblur=null;el.onkeydown=null;el.onkeypress=null;el.onkeyup=null;el.onselectstart=null;el.ondragstart=null;el.oncontextmenu=null;el.onscroll=null;el=null;}catch(e){}}for(var no in paletteHex_com.variableStorage.arrayDSObjects){paletteHex_com.variableStorage.arrayDSObjects[no]=null;}
window.onbeforeunload=null;
window.onunload=null;
paletteHex_com=null;},
__addEventEl:function(el){paletteHex_com.eventEls[paletteHex_com.eventEls.length]=el;},
getUniqueId:function(){var no=Math.random()+'';no=no.replace('.','');
var no2=Math.random()+'';
no2=no2.replace('.','');
return no+no2;},
correctPng:function(el){el=paletteHex_com.commonObj.getEl(el);
	var img=el;
	var width=img.width;
	var height=img.height;
	var html=/*'<span style="display:inline-block;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader*/'(src=\''+img.src+'\',sizingMethod=\'scale\');width:'+width+';height:'+height+'"></span>';
	img.outerHTML=html;
}
}
paletteHex_com.clientInfo=function(){
	var browser;
	var isOpera;
	var isMSIE;
	var isOldMSIE;
	var isFirefox;
	var navigatorVersion;
	var isOldMSIE;
}
paletteHex_com.clientInfo.prototype={
	init:function(){
		this.browser=navigator.userAgent;
		this.isOpera=(this.browser.toLowerCase().indexOf('opera')>=0)?true:false;this.isFirefox=(this.browser.toLowerCase().indexOf('firefox')>=0)?true:false;
		this.isMSIE=(this.browser.toLowerCase().indexOf('msie')>=0)?true:false;this.isOldMSIE=(this.browser.toLowerCase().match(/msie\s[0-6]/gi))?true:false;
		this.isSafari=(this.browser.toLowerCase().indexOf('safari')>=0)?true:false;this.navigatorVersion=navigator.appVersion.replace(/.*?MSIE\s(\d\.\d).*/g,'$1')/1;
		this.isOldMSIE=(this.isMSIE&&this.navigatorVersion<7)?true:false;}}
paletteHex_com.colorUtil=new Class({baseConverter:function(numberToConvert,oldBase,newBase){
	if(newBase==10){return parseInt(numberToConvert,16);}
if(newBase==16){return parseInt(numberToConvert).toString(16);}numberToConvert=numberToConvert+"";
numberToConvert=numberToConvert.toUpperCase();
var listOfCharacters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var dec=0;
for(var i=0;i<=numberToConvert.length;i++){
	dec+=(listOfCharacters.indexOf(numberToConvert.charAt(i)))*(Math.pow(oldBase,(numberToConvert.length-i-1)));
}
numberToConvert="";
var magnitude=Math.floor((Math.log(dec))/(Math.log(newBase)));
for(var i=magnitude;i>=0;i--){
	var amount=Math.floor(dec/Math.pow(newBase,i));
	numberToConvert=numberToConvert+listOfCharacters.charAt(amount);
	dec-=amount*(Math.pow(newBase,i));
}
if(numberToConvert.length==0)numberToConvertToConvert=0;
if(!numberToConvert)numberToConvert=0;
return numberToConvert;
},
getHsvByRgbCode:function(rgbColor){
	rgbColor=rgbColor.replace('#','');
	red=this.baseConverter(rgbColor.substr(0,2),16,10);
	green=this.baseConverter(rgbColor.substr(2,2),16,10);
	blue=this.baseConverter(rgbColor.substr(4,2),16,10);
	if(red==0&&green==0&&blue==0){
		var returnArray={};
	returnArray.hue=0;
	returnArray.saturation=0;
	returnArray.brightness=0;
	return returnArray;}
red=red/255;
green=green/255;
blue=blue/255;
maxValue=Math.max(red,green,blue);
minValue=Math.min(red,green,blue);
var hue=0;
if(maxValue==minValue){
	hue=0;saturation=0;
}else{
	if(red==maxValue){
		hue=(green-blue)/(maxValue-minValue)/1;
	}else
if(green==maxValue){
	hue=2+(blue-red)/1/(maxValue-minValue)/1;
}else if(blue==maxValue){
	hue=4+(red-green)/(maxValue-minValue)/1;}
saturation=(maxValue-minValue)/maxValue;
}
hue=hue*60;
valueBrightness=maxValue;
if(hue<0)hue+=360;
var returnArray={};returnArray.hue=hue;returnArray.saturation=saturation;returnArray.brightness=valueBrightness;return returnArray;},
getContrastColorByRgb:function(rgbCode){
	var hsv=this.getHsvByRgbCode(rgbCode);
	hsv.hue+=180;if(hsv.hue>=360)
hsv.hue-=360;return this.getRgbCodeByHsv(hsv.hue,hsv.saturation,hsv.brightness);},
getTriadeColorsByRgb:function(rgbCode){
	var hsv=this.getHsvByRgbCode(rgbCode);
	var colors=new Array();
	for(var no=120;
		no<360;
		no+=120){
		colors[colors.length]=this.getRgbCodeByHsv(hsv.hue+no,hsv.saturation,hsv.brightness)
}
return colors;
},
getTetradeColorsByRgb:function(rgbCode){
	var hsv=this.getHsvByRgbCode(rgbCode);
	var colors=new Array();for(var no=90;no<360;no+=90){colors[colors.length]=this.getRgbCodeByHsv(hsv.hue+no,hsv.saturation,hsv.brightness)
	}
return colors;},
getAnalogicColors:function(rgbCode,degrees){degrees=degrees+'';if(!degrees)degrees=25;if(!degrees.match(/^[0-9]{2}$/)){degrees=25;}if(degrees<15)degrees=15;if(degrees>30)degrees=30;degrees/=1;
var hsv=this.getHsvByRgbCode(rgbCode);
var colors=new Array();for(var no=1;no<=2;no++){colors[colors.length]=this.getRgbCodeByHsv(hsv.hue+(no*degrees),hsv.saturation,hsv.brightness)}
for(var no=-1;no>=-2;no--){
	colors[colors.length]=this.getRgbCodeByHsv(hsv.hue+(no*degrees),hsv.saturation,hsv.brightness)
}
return colors;},
getRgbCodeByRgbColors:function(red,green,blue){
	red=this.baseConverter(red,10,16);green=this.baseConverter(green,10,16);blue=this.baseConverter(blue,10,16);
	red=red+"";
	green=green+"";
	blue=blue+"";
	while(red.length<2){red="0"+red;
}
while(green.length<2){
	green="0"+green;
}
while(blue.length<2){blue="0"+""+blue;
}
rgbColor=red+""+green+""+blue;
return rgbColor.toUpperCase();},
getRgbColorsByRgbCode:function(rgbCode){var retArray={};retArray.red=this.baseConverter(rgbCode.substr(0,2),16,10);retArray.green=this.baseConverter(rgbCode.substr(2,2),16,10);retArray.blue=this.baseConverter(rgbCode.substr(4,2),16,10);return retArray;},getRgbColorsByHsv:function(hue,saturation,valueBrightness){Hi=Math.floor(hue/60);if(hue==360)
hue=0;f=hue/60-Hi;if(saturation>1)saturation/=100;if(valueBrightness>1)valueBrightness/=100;p=(valueBrightness*(1-saturation));q=(valueBrightness*(1-(f*saturation)));t=(valueBrightness*(1-((1-f)*saturation)));switch(Hi){case 0:red=valueBrightness;green=t;blue=p;break;case 1:red=q;green=valueBrightness;blue=p;break;case 2:red=p;green=valueBrightness;blue=t;break;case 3:red=p;green=q;blue=valueBrightness;break;case 4:red=t;green=p;blue=valueBrightness;break;default:red=valueBrightness;green=p;blue=q;break;}
if(saturation==0){red=valueBrightness;green=valueBrightness;blue=valueBrightness;}red*=255;green*=255;blue*=255;red=Math.round(red);green=Math.round(green);blue=Math.round(blue);return{red:red,green:green,blue:blue}},getRgbCodeByHsv:function(hue,saturation,valueBrightness){while(hue>=360)
hue-=360;
var colors=this.getRgbColorsByHsv(hue,saturation,valueBrightness);
return this.getRgbCodeByRgbColors(colors.red,colors.green,colors.blue);
}
}
);
//invisible box for Adding colors to 10 Buttons
paletteHex_com.colorWidget=new Class({Extends:Events,displayRgb:true,displayHsv:true,displayRgbCode:true,updateFormDuringMoveOnPalette:true,posdivElPalette:{},
	circleOffsetBecauseOfWinWidget:0,circleOffsetSize:7,hueSliderPosition:'vertical',layoutCSS:'color-widget.css',currentHue:0,
	currentBrightness:100,currentSaturation:100,paletteSize:256,currentRgbCode:'FF0000',imagePath:'',maxCustomColors:8,
	customColorIndex:0,customColors:[],customColorsButtonText:'ADD TO\nLIST',customColorsClearButtonText:'Clear',customColorsBgColorOfEmptyBoxes:'#524B50',
	customColorsCookieName:'colorwidget_custom_color_cookie_new',
	initialize:function(propertyArray){
		this.colorHelper=new paletteHex_com.colorUtil();if(!standardObjectsCreated)
paletteHex_com.createStandardObjects();
this.objectIndex=paletteHex_com.variableStorage.arrayDSObjects.length;paletteHex_com.variableStorage.arrayDSObjects[this.objectIndex]=this;this.__setInitProps(propertyArray);},__setInitProps:function(propertyArray){if(!propertyArray)
return;if(propertyArray.hueSliderPosition)this.hueSliderPosition=propertyArray.hueSliderPosition;if(propertyArray.callbackOnChangeRgb)this.callbackOnChangeRgb=propertyArray.callbackOnChangeRgb;if(propertyArray.displayHsv||propertyArray.displayHsv===false)this.displayHsv=propertyArray.displayHsv;if(propertyArray.displayRgb||propertyArray.displayRgb===false)this.displayRgb=propertyArray.displayRgb;if(propertyArray.displayRgbCode||propertyArray.displayRgbCode===false)this.displayRgbCode=propertyArray.displayRgbCode;if(propertyArray.updateFormDuringMoveOnPalette||propertyArray.updateFormDuringMoveOnPalette===false)this.updateFormDuringMoveOnPalette=propertyArray.updateFormDuringMoveOnPalette;if(propertyArray.parentRef)
this.parentRef=$(propertyArray.parentRef);},setHueSliderPosition:function(hueSliderPosition){this.hueSliderPosition=hueSliderPosition;if(hueSliderPosition=='vertical'){this.sliderDivHorMain.style.display='none';this.sliderDivMain.style.display='block';var ind=this.objectIndex;setTimeout('paletteHex_com.variableStorage.arrayDSObjects['+ind+'].sliderDiv.style.marginTop=(2 -Math.floor(paletteHex_com.variableStorage.arrayDSObjects['+ind+'].sliderDiv.offsetHeight/2))+"px"',100);}
if(hueSliderPosition=='horizontal'){if(this.sliderDivMain){this.sliderDivHorMain.style.display='block';this.sliderDivMain.style.display='none';}}},setCallbackOnChangeRgb:function(functionName){this.callbackOnChangeRgb=functionName;},setRgbColor:function(rgbColor){var hsv=this.colorHelper.getHsvByRgbCode(rgbColor);this.currentHue=(hsv.hue);this.currentBrightness=(hsv.brightness*100);this.currentSaturation=(hsv.saturation*100);this.__changeViewAfterColorChange();},setHue:function(hue){hue=hue+'';if(hue.match(/^[0-9]+$/)){while(hue>=360)
hue-=360;this.currentHue=hue;this.__changeViewAfterColorChange();}},setSaturation:function(saturation){saturation=saturation+'';if(saturation.match(/^[0-9]+$/)){while(saturation>100)
saturation-=100;this.currentSaturation=saturation;this.__changeViewAfterColorChange();}},setBrightness:function(brightness){brightness=brightness+'';if(brightness.match(/^[0-9]+$/)){while(brightness>100)
brightness-=100;this.currentBrightness=brightness;this.__changeViewAfterColorChange();}},getDivElement:function(){return this.divElement;},init:function(){this.__createMainDivEl();this.__createdivElPalette();this.__createHueBar();this.__createFormDiv();this.__createHueBarHorizontal();this.__createCustomColorBar();this.__addEvents();this.__setPaletteBgColor();this.__updateHsvInForm();this.__setBgColorPreviewDiv();this.__updateRgbInForm();},



__clearCustomColors:function(){this.customColorIndex=0;this.customColors=[];var els=$$('.customColorBox');for(var i=0;i<els.length;i++){els[i].setStyle('background-color',this.customColorsBgColorOfEmptyBoxes);els[i].removeClass('activeCustomColorBox');}this.__setCustomColorCookie();},__addCustomColor:function(){if(this.customColorIndex==this.maxCustomColors){this.customColorIndex=0;}
var color=this.getColor();this.customColors[this.customColorIndex]=color.rgb;this.__colorizeCustomColorBox(color.rgb);this.customColorIndex++;this.__setCustomColorCookie();},

__colorizeCustomColorBox:function(rgb,colorBox){
	if(!colorBox){var colorBox=$('customColorBox'+this.customColorIndex);}
colorBox.setStyle('background-color',rgb);colorBox.setProperty('rgb',rgb);
colorBox.setStyle('cursor','pointer');
},
__setCustomColorCookie:function(){
	Cookie.write(this.customColorsCookieName,this.customColors.join(';'),{duration:900});},

	__getCustomColorBoxesFromCookie:function(){
		var colorString=Cookie.read(this.customColorsCookieName);
		if(colorString){
			return colorString.split(/;/g);}
			else{
				return[];
			}},
			__getClearColors:function(){return[];},
			getColor:function(){return{hue:this.currentHue,brightness:this.currentBrightness,saturation:this.currentSaturation,rgb:''+this.currentRgbCode}},__customColorBoxClick:function(e){if(e.target.getProperty('rgb')){var rgb=e.target.getProperty('rgb');this.fireEvent('selectcustomcolor',e.target.getProperty('rgb'));this.setRgbColor(rgb);}
this.__removeHighlightFromCustomColorBoxes();$(e.target).addClass('activeCustomColorBox');this.customColorIndex=e.target.getProperty('index');},

__createCustomColorBoxes:function(){
	var div=new Element('DIV');
	div.addClass('customColorBoxContainer');
	this.customColorDiv.adopt(div);
	this.customColors=this.__getCustomColorBoxesFromCookie();
	for(var i=0;i<this.maxCustomColors;i++){
		var colorDiv=new Element('DIV');
		colorDiv.id='customColorBox'+i;
		colorDiv.addClass('customColorBox');
		colorDiv.setProperty('index',i);
		colorDiv.addEvent('click',this.__customColorBoxClick.bind(this));
		colorDiv.setStyle('background-color',this.customColorsBgColorOfEmptyBoxes);
		this.customColorDiv.adopt(colorDiv);
		if(this.customColors[i]){this.__colorizeCustomColorBox(this.customColors[i],colorDiv);
			this.customColorIndex++;
		}}
var clearButton=new Element('IMG');
clearButton.addClass('customColorButtonClear');
clearButton.src=this.imagePath+'images/eraser.png';
clearButton.set('value',this.customColorsClearButtonText);
this.customColorDiv.adopt(clearButton);clearButton.addEvent('click',this.__clearCustomColors.bind(this));},

__createCustomColorBar:function(){
	var ind=this.objectIndex;this.customColorDiv=new Element('DIV');
	this.customColorDiv.addClass('customColorBoxContainer');
	this.divElement.appendChild(this.customColorDiv);
var button=new Element('input');
button.type='button';
button.set('value',this.customColorsButtonText);
button.addClass('customColorButton');
button.addEvent('click',this.__addCustomColor.bind(this));
this.customColorDiv.adopt(button);this.__createCustomColorBoxes();},

__changeViewAfterColorChange:function(){
	this.__setCurrentRgbCode();
	this.__setPaletteBgColor();this.__setBgColorPreviewDiv();
	this.__setSliderPos();
	this.__updateRgbInForm();
	this.__updateHsvInForm();this.__setSmallCirclePosition();},
	__updateHsvInForm:function(){
		if(!this.displayHsv){
		return;}
this.fieldHue.value=Math.round(this.currentHue);
this.fieldSaturation.value=Math.round(this.currentSaturation);
this.fieldBrightness.value=Math.round(this.currentBrightness);},
__updateRgbInForm:function(){
	var rgbColors=this.colorHelper.getRgbColorsByRgbCode(this.currentRgbCode);
	if(this.displayRgb){
		this.fieldBlue.value=rgbColors.blue;this.fieldRed.value=rgbColors.red;this.fieldGreen.value=rgbColors.green;}
if(this.displayRgbCode){
	this.fieldRgbCode.value=this.currentRgbCode;}this.fireEvent('changergb',this.getColor());},
	__setSliderPos:function(){
		var topPos=Math.round(this.paletteSize-((this.currentHue/360)*this.paletteSize))-3;
		this.sliderDiv.style.top=topPos;this.sliderDivHor.style.left=(this.currentHue-4)+'px';},
__setBgColorPreviewDiv:
function(){this.divElPreviewDiv.style.backgroundColor='#'+this.currentRgbCode;
this.fieldRgbCode.style.color='#'+this.currentRgbCode;},
__setPaletteBgColor:function(){try{this.divElPalette.style.backgroundColor='#'+this.colorHelper.getRgbCodeByHsv(this.currentHue,1,1);}
catch(e){}},__createFormDiv:function(){
	var ind=this.objectIndex;
	this.divElForm=new Element('DIV');
	this.divElForm.addClass('paletteHex_com_colorSliderFormDiv');
	this.divElement.adopt(this.divElForm);
	this.divElPreviewDiv=new Element('DIV');
	this.divElPreviewDiv.addClass('paletteHex_com_colorSlider_colorPreview');
	this.divElPreviewDiv.style.position='absolute';
	this.divElPreviewDiv.style.left='264px';
	this.divElPreviewDiv.style.top='10px';
	this.divElForm.adopt(this.divElPreviewDiv);
	var table=new Element('TABLE');
	table.cellpadding=0;
	table.cellspacing=0;
	table.addClass('paletteHex_com_colorSliderFormTable');

	var form=new Element('FORM');
	table.appendChild(form);
	this.divElForm.appendChild(table);
	if(this.displayHsv){
		var row=table.insertRow(-1);
		var cell=row.insertCell(-1);
		cell.innerHTML='Hue:';
		cell.style.position='absolute';
		cell.style.left='322px';
		cell.style.top='69px';

		var cell=row.insertCell(-1);
		this.fieldHue=new Element('INPUT');
		this.fieldHue.type='text';
		this.fieldHue.maxLength=3;
		this.fieldHue.addEvent('change',this.__receiveHueFromForm.bind(this));
		this.fieldHue.style.position='absolute';
		this.fieldHue.style.left='352px';
		this.fieldHue.style.top='69px';
		paletteHex_com.commonObj.__addEventEl(this.fieldHue);
		cell.appendChild(this.fieldHue);
		var row=table.insertRow(-1);
		var cell=row.insertCell(-1);

		cell.innerHTML='Sat:';
		cell.style.position='absolute';
		cell.style.left='322px';
		cell.style.top='95px';
		var cell=row.insertCell(-1);
		this.fieldSaturation=new Element('INPUT');
		this.fieldSaturation.type='text';
		this.fieldSaturation.maxLength=3;
		this.fieldSaturation.addEvent('change',this.__receiveSatFromForm.bind(this));
		this.fieldSaturation.style.position='absolute';
		this.fieldSaturation.style.left='352px';
		this.fieldSaturation.style.top='95px';
		paletteHex_com.commonObj.__addEventEl(this.fieldSaturation);
		cell.appendChild(this.fieldSaturation);
		var row=table.insertRow(-1);
		var cell=row.insertCell(-1);

		cell.innerHTML='Bri:';
		cell.style.position='absolute';
		cell.style.left='322px';
		cell.style.top='121px';
		var cell=row.insertCell(-1);
		this.fieldBrightness=new Element('INPUT');
		this.fieldBrightness.type='text';
		this.fieldBrightness.addEvent('change',this.__receiveBriFromForm.bind(this));
		this.fieldBrightness.style.position='absolute';
		this.fieldBrightness.style.left='352px';
		this.fieldBrightness.style.top='121px';
		paletteHex_com.commonObj.__addEventEl(this.fieldBrightness);
		this.fieldBrightness.maxLength=3;
		cell.appendChild(this.fieldBrightness);}
if(this.displayRgb){var row=table.insertRow(-1);
	var cell=row.insertCell(-1);

	cell.innerHTML='R:';
	cell.style.position='absolute';
	cell.style.color='#FA0000'
	cell.style.left='322px';
	cell.style.top='147px';var cell=row.insertCell(-1);
	this.fieldRed=new Element('INPUT');
	this.fieldRed.type='text';
	this.fieldRed.addEvent('change',this.__setRedColorFromForm.bind(this));
	this.fieldRed.style.position='absolute';this.fieldRed.style.left='352px';
	this.fieldRed.style.top='147px';
	paletteHex_com.commonObj.__addEventEl(this.fieldRed);
	this.fieldRed.maxLength=3;
	cell.appendChild(this.fieldRed);
	var row=table.insertRow(-1);var cell=row.insertCell(-1);

	cell.innerHTML='G:';
	cell.style.position='absolute';
	cell.style.color='#179C13'
	cell.style.left='322px';
	cell.style.top='173px';
	var cell=row.insertCell(-1);
	this.fieldGreen=new Element('INPUT');
	this.fieldGreen.type='text';
	this.fieldGreen.addEvent('change',this.__setGreenColorFromForm.bind(this));
	this.fieldGreen.style.position='absolute';
	this.fieldGreen.style.left='352px';
	this.fieldGreen.style.top='173px';
	paletteHex_com.commonObj.__addEventEl(this.fieldGreen);
	this.fieldGreen.maxLength=3;
	cell.appendChild(this.fieldGreen);
	var row=table.insertRow(-1);
	var cell=row.insertCell(-1);

	cell.innerHTML='B:';
	cell.style.position='absolute';
	cell.style.color='#033DFF'
	cell.style.left='323px';
	cell.style.top='199px';
	var cell=row.insertCell(-1);
	this.fieldBlue=new Element('INPUT');
	this.fieldBlue.type='text';
	this.fieldBlue.addEvent('change',this.__setBlueColorFromForm.bind(this));
	this.fieldBlue.style.position='absolute';
	this.fieldBlue.style.left='352px';
	this.fieldBlue.style.top='199px';
	paletteHex_com.commonObj.__addEventEl(this.fieldBlue);
	this.fieldBlue.maxLength=3;
	cell.appendChild(this.fieldBlue);
}
if(this.displayRgbCode){

var row=table.insertRow(-1);
var cell=row.insertCell(-1);
cell.innerHTML='HEX CODE  #';
cell.style.color='#FFFFFF'
cell.style.position='absolute';
cell.style.top='-30px';
cell.style.left='2px';



var cell=row.insertCell(-1);
this.fieldRgbCode=new Element('INPUT');
this.fieldRgbCode.type='text';
this.fieldRgbCode.maxLength=6;
this.fieldRgbCode.style.position='absolute';
this.fieldRgbCode.style.top='-29px';
this.fieldRgbCode.style.left='105px';
this.fieldRgbCode.addClass('ColcolorSlider_rgbCode');
this.fieldRgbCode.addEvent('change',this.__receiveRgbCodeFromForm.bind(this));
paletteHex_com.commonObj.__addEventEl(this.fieldRgbCode);
cell.appendChild(this.fieldRgbCode);
}
}
,__createMainDivEl:function(){
	this.divElement=new Element('DIV');
	this.divElement.addClass('paletteHex_com_colorSlider');
	if(this.parentRef)
$(this.parentRef).adopt(this.divElement);},
__correctPng:function(id){
	try{
		var img=$(id);
		var html='<span style="display:inline-block;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\''+img.src+'\',sizingMethod=\'scale\');width:'+this.paletteSize+';height:'+this.paletteSize+'"></span>';
		img.outerHTML=html;
	}
		catch(e){
			var ind=this.objectIndex;
			setTimeout('paletteHex_com.variableStorage.arrayDSObjects['+ind+'].__correctPng("'+id+'")',20);}},
			__createdivElPalette:function(){
	var ind=this.objectIndex;
	var div=new Element('DIV');
	div.addClass('paletteHex_com_colorSlider_palette_border');
	div.setStyle('position','relative');
	this.divElement.appendChild(div);
	this.divElPaletteBorder=div;
	this.divElPalette=new Element('DIV');
	this.divElPalette.addClass('paletteHex_com_colorSlider_palette');
	this.divElPalette.setStyle('position','relative');
	paletteHex_com.commonObj.__addEventEl(this.divElPalette);
	var img=new Element('IMG');
	img.src=this.imagePath+'';
	img.setAttribute('width',this.paletteSize);
	img.setAttribute('height',this.paletteSize);
	img.ondragstart=function(){return false;};
	img.onselectstart=function(){return false;};
	img.onmousedown=function(){return false;};
	img.id=''+paletteHex_com.commonObj.getUniqueId();
	this.divElPalette.appendChild(img);paletteHex_com.commonObj.__addEventEl(img);
	if((paletteHex_com.clientInfoObj.isMSIE&&paletteHex_com.clientInfoObj.navigatorVersion<7)||paletteHex_com.clientInfoObj.isOpera){this.__correctPng(img.id);
	}
div.appendChild(this.divElPalette);
this.divElPaletteCircle=new Element('DIV');
this.divElPaletteCircle.addClass('paletteHex_com_colorSlider_palette_circle');
this.divElPalette.adopt(this.divElPaletteCircle);
this.divElPaletteCircle.display='block';
this.divElPaletteCircle.style.top='-'+this.circleOffsetSize+'px';this.divElPaletteCircle.style.left=(this.paletteSize-this.circleOffsetSize)+'px';},
__setSmallCirclePosition:function(){
	var leftPos=Math.round(this.currentSaturation*(this.paletteSize/100))-this.circleOffsetSize;var topPos=this.paletteSize-Math.round(this.currentBrightness*(this.paletteSize/100))-this.circleOffsetSize;this.divElPaletteCircle.style.left=leftPos+'px';this.divElPaletteCircle.style.top=topPos+'px';this.divElPaletteCircle.className=this.divElPaletteCircle.className.replace(' paletteHex_com_colorSlider_palette_circleBlack','');if(this.currentBrightness>80){this.divElPaletteCircle.className=this.divElPaletteCircle.className+' paletteHex_com_colorSlider_palette_circleBlack';}},__createHueBar:function(){var ind=this.objectIndex;var mainDiv=new Element('DIV');mainDiv.className='paletteHex_com_colorSlider_hue';this.sliderDivMain=mainDiv;this.divElement.appendChild(mainDiv);this.sliderDiv=new Element('DIV');
this.sliderDiv.addClass('paletteHex_com_colorSlider_sliderHandle');
mainDiv.appendChild(this.sliderDiv);
this.sliderDiv.innerHTML='<div><span></span></div>';
setTimeout('paletteHex_com.variableStorage.arrayDSObjects['+ind+'].sliderDiv.style.marginTop=(2 -Math.floor(paletteHex_com.variableStorage.arrayDSObjects['+ind+'].sliderDiv.offsetHeight/2))+"px"',100);
var div=new Element('DIV');
div.addClass('paletteHex_com_colorSlider_hueBar_border');
mainDiv.appendChild(div);
this.divElHueBar=new Element('DIV');
this.divElHueBar.addClass('paletteHex_com_colorSlider_hueBar');
div.appendChild(this.divElHueBar);
if(this.hueSliderPosition=='horizontal')
mainDiv.style.display='none';},
__createHueBarHorizontal:function(){
	var ind=this.objectIndex;this.sliderDivHorMain=new Element('DIV');this.sliderDivHorMain.addClass('paletteHex_com_colorSlider_hueHorizontal');
	this.divElement.appendChild(this.sliderDivHorMain);this.sliderDivHor=new Element('DIV');
this.sliderDivHor.addClass('paletteHex_com_colorSlider_sliderHandleHorizontal');
this.sliderDivHorMain.appendChild(this.sliderDivHor);this.sliderDivHor.innerHTML='<div><span></span></div>';
setTimeout('paletteHex_com.variableStorage.arrayDSObjects['+ind+'].sliderDiv.style.marginTop=(2 -Math.floor(paletteHex_com.variableStorage.arrayDSObjects['+ind+'].sliderDiv.offsetHeight/2))+"px"',100);
var div=new Element('DIV');div.className='paletteHex_com_colorSlider_hueBarHorizontal_border';
this.sliderDivHorMain.appendChild(div);this.divElHueBarHorizontal=new Element('DIV');
this.divElHueBarHorizontal.addClass('paletteHex_com_colorSlider_hueBarHorizontal');
div.appendChild(this.divElHueBarHorizontal);if(this.hueSliderPosition=='vertical')
this.sliderDivHorMain.style.display='none';},

__setHueFromHorizontalSlider:function(e){
	if(document.all)
e=event;var hue=this.sliderDivHor.offsetLeft+4;
if(hue>359||hue<0)hue=0;
this.currentHue=hue;
this.__setPaletteBgColor();
this.__setBgColorPreviewDiv();
this.__updateRgbInForm();
this.__updateHsvInForm();},

__setHueFromSlider:function(e){if(document.all)
e=event;var hue=360-Math.round((this.sliderDiv.offsetTop+4)*(360/this.paletteSize))
if(hue>359||hue<0)hue=0;this.currentHue=hue;this.__setPaletteBgColor();this.__setBgColorPreviewDiv();this.__updateHsvInForm();this.__updateRgbInForm();},

__addEvents:function(){var ind=this.objectIndex;paletteHex_com.commonObj.addEvent(this.sliderDivHorMain,'mousedown',function(e){
	return paletteHex_com.variableStorage.arrayDSObjects[ind].__initHorHueMove(e);});paletteHex_com.commonObj.addEvent(this.sliderDivMain,'mousedown',function(e){
		return paletteHex_com.variableStorage.arrayDSObjects[ind].__initHueMove(e);});paletteHex_com.commonObj.addEvent(this.divElPalette,'mousedown',function(e){
			return paletteHex_com.variableStorage.arrayDSObjects[ind].__initPaletteMove(e);});paletteHex_com.commonObj.addEvent(document.documentElement,'mousemove',function(e){paletteHex_com.variableStorage.arrayDSObjects[ind].__moveOnPalette(e);});paletteHex_com.commonObj.addEvent(document.documentElement,'mousemove',function(e){paletteHex_com.variableStorage.arrayDSObjects[ind].__moveOnHorizHueBar(e);});paletteHex_com.commonObj.addEvent(document.documentElement,'mousemove',function(e){paletteHex_com.variableStorage.arrayDSObjects[ind].__moveOnHueBar(e);});paletteHex_com.commonObj.addEvent(document.documentElement,'mouseup',function(e){paletteHex_com.variableStorage.arrayDSObjects[ind].__endDrag(e);});paletteHex_com.commonObj.addEvent(this.divElHueBar,'mousedown',function(e){paletteHex_com.variableStorage.arrayDSObjects[ind].__moveOnHueBar(e);});if(!document.documentElement.onselectstart){document.documentElement.onselectstart=function(){return paletteHex_com.commonObj.__isTextSelOk();};paletteHex_com.commonObj.__addEventEl(document.documentElement);}},__moveOnHueBar:function(e){if(this.hueStatus!=1)
return;if(document.all)e=event;var topPos=this.poxYHue;var diff=e.clientY+document.documentElement.scrollTop-topPos;if(diff>this.paletteSize)diff=this.paletteSize;
if(diff<0)diff=0;this.sliderDiv.style.top=diff+'px';var hue=Math.round(((this.paletteSize-diff)*(360/this.paletteSize)));if(hue==360)
hue=0;this.currentHue=hue;this.__setCurrentRgbCode();this.__setPaletteBgColor();this.__setBgColorPreviewDiv();this.__updateHsvInForm();this.__updateRgbInForm();},__moveOnHorizHueBar:function(e){if(this.hueHorStatus!=1)
return;if(document.all)e=event;var leftPos=this.posXHorHue;var diff=e.clientX-leftPos-this.circleOffsetBecauseOfWinWidget;if(diff<0)
diff=0;if(diff>362)diff=362;this.sliderDivHor.style.left=(diff-4)+'px';var hue=diff;if(hue>=360)
hue=0;this.currentHue=hue;this.__setCurrentRgbCode();this.__setPaletteBgColor();this.__setBgColorPreviewDiv();this.__updateHsvInForm();this.__updateRgbInForm();},__setHueFromRgbColorsInForm:function(){var color=this.colorHelper.getRgbCodeByRgbColors(this.fieldRed.value,this.fieldGreen.value,this.fieldBlue.value);var hsv=this.colorHelper.getHsvByRgbCode(color);this.currentHue=hsv.hue;this.currentSaturation=hsv.saturation*100;this.currentBrightness=hsv.brightness*100;this.__changeViewAfterColorChange();},__setRedColorFromForm:function(e){var src=e.target;var red=src.value;if(red.match(/^[0-9]+$/)){if(red/1>255)
red=255;}else{red=0;}src.value=red;this.__setHueFromRgbColorsInForm();this.__changeViewAfterColorChange();},__setGreenColorFromForm:function(e){var src=e.target;var green=src.value;var green=src.value;if(green.match(/^[0-9]+$/)){if(green/1>255)
green=255;}else{green=0;}src.value=green;this.__setHueFromRgbColorsInForm();this.__changeViewAfterColorChange();},__setBlueColorFromForm:function(e){var src=e.target;var blue=src.value;var blue=src.value;if(blue.match(/^[0-9]+$/)){if(blue/1>255)
blue=255;}else{blue=0;}src.value=blue;this.__setHueFromRgbColorsInForm();},__receiveRgbCodeFromForm:function(e){var src=e.target;var rgbCode=src.value;if(!rgbCode.match(/^[0-9A-F][0-9A-F][0-9A-F][0-9A-F][0-9A-F][0-9A-F]$/i)){rgbCode='FF0000';}
var hsv=this.colorHelper.getHsvByRgbCode(rgbCode);this.currentHue=hsv.hue;this.currentSaturation=hsv.saturation*100;this.currentBrightness=hsv.brightness*100;this.__changeViewAfterColorChange();},__receiveHueFromForm:function(e){var src=e.target;var hue=src.value;hue=hue+'';if(hue.match(/^[0-9]+$/)){if(hue/1>360)
hue=360;}else{hue=0;}if(hue==360)hue=0;this.currentHue=hue;src.value=hue;this.__changeViewAfterColorChange();},__receiveBriFromForm:function(e){var src=e.target;var brightness=src.value;brightness=brightness+'';if(brightness.match(/^[0-9]+$/)){if(brightness/1>100)
brightness=100;}else{brightness=0;}this.currentBrightness=brightness;src.value=brightness;this.__changeViewAfterColorChange();},__receiveSatFromForm:function(e){var src=e.target;var saturation=src.value;saturation=saturation+'';if(saturation.match(/^[0-9]+$/)){if(saturation/1>100)saturation=100;}else{saturation=0;}this.currentSaturation=saturation;src.value=saturation;this.__changeViewAfterColorChange();},__ffHackWinWidget:function(){if(this.divElement.parentNode.className&&this.divElement.parentNode.className.indexOf('windowContent')>=0&&!document.all){this.circleOffsetBecauseOfWinWidget=0;}},__initHorHueMove:function(e){this.hueHorStatus=1;this.__ffHackWinWidget();this.posXHorHue=paletteHex_com.commonObj.getLeftPos(this.divElHueBarHorizontal);paletteHex_com.commonObj.__setTextSelOk(false);this.__moveOnHorizHueBar(e);return false;},__initHueMove:function(e){this.hueStatus=1;this.poxYHue=paletteHex_com.commonObj.getTopPos(this.divElHueBar);paletteHex_com.commonObj.__setTextSelOk(false);this.__moveOnHueBar(e);return false;},__initPaletteMove:function(e){if(document.all)
e=event;this.__ffHackWinWidget();this.posdivElPalette.x=paletteHex_com.commonObj.getLeftPos(this.divElPalette)+this.circleOffsetBecauseOfWinWidget;this.posdivElPalette.y=paletteHex_com.commonObj.getTopPos(this.divElPalette)+this.circleOffsetBecauseOfWinWidget;this.dragStatus=1;this.paletteMaxX=(this.divElPalette.clientWidth-this.circleOffsetSize);this.paletteMaxY=(this.divElPalette.clientHeight-this.circleOffsetSize);this.__moveOnPalette(e);paletteHex_com.commonObj.__setTextSelOk(false);return false;},__setCurrentRgbCode:function(){this.currentRgbCode=this.colorHelper.getRgbCodeByHsv(this.currentHue,this.currentSaturation/100,this.currentBrightness/100);},__endDrag:function(){if(this.dragStatus==1){this.__updateHsvInForm();this.__updateRgbInForm();}
this.dragStatus=0;this.hueHorStatus=0;this.hueStatus=0;paletteHex_com.commonObj.__setTextSelOk(true);},__moveOnPalette:function(e){if(this.dragStatus!=1)
return;if(this.clickOnPaletteInProgress)return;this.clickOnPaletteInProgress=true;if(document.all)
e=event;var leftEl=this.posdivElPalette.x;var topEl=this.posdivElPalette.y;var left=e.clientX+document.documentElement.scrollLeft-leftEl-this.circleOffsetSize;var top=e.clientY+document.documentElement.scrollTop-topEl-this.circleOffsetSize;if(left<this.circleOffsetSize*-1)
left=this.circleOffsetSize*-1;if(top<this.circleOffsetSize*-1)top=this.circleOffsetSize*-1;if(left>this.paletteMaxX)left=this.paletteMaxX;if(top>this.paletteMaxY)
top=this.paletteMaxY;this.divElPaletteCircle.style.left=left+'px';this.divElPaletteCircle.style.top=top+'px';this.currentSaturation=Math.round(((left+this.circleOffsetSize)/this.paletteSize)*100);this.currentBrightness=100-Math.round(((top+this.circleOffsetSize)/this.paletteSize)*100);this.__setCurrentRgbCode();this.__setBgColorPreviewDiv();if(this.updateFormDuringMoveOnPalette){this.__updateHsvInForm();this.__updateRgbInForm();}
this.clickOnPaletteInProgress=false;}});var colorUtil=new paletteHex_com.colorUtil();var currentFunc='';



function deleteWindow(obj){obj.purge();}
function setColorFromPallette(color){colorWidget.setRgbColor(color.rgb);setColor(color);}


function setColor(color){
	color=color.rgb?color.rgb:color;
	var obj=document.getElementById('colorDiv');
	obj.style.backgroundColor=color;
	currentPreviewColor=color;
	if(currentFunc)eval(currentFunc);
	if(color.name)obj.innerHTML=color.name;
	else obj.innerHTML='';

}

var currentPreviewColor;var colorWidget;window.addEvent('domready',function(){colorWidget=new paletteHex_com.colorWidget({hueSliderPosition:'vertical',parentRef:$('colorWidgetDiv')});colorWidget.addEvent('changergb',setColor);colorWidget.addEvent('selectcustomcolor',setColor);colorWidget.init();


function getQueryString(){
	var result={},queryString=location.pathname,re=/([^&=]+)=([^&]*)/g,m;while (m = re.exec(queryString)){result[decodeURIComponent(m[1])]=decodeURIComponent(m[2]);
	}
	return result;
}

var split = location.pathname.split('/');

var cpcolorcode = split[1]; 

var countcode = cpcolorcode.length;

var checkn = /^[a-fA-F0-9]*$/.test(cpcolorcode);



if (countcode<6 || countcode>6){colorWidget.setRgbColor('#'+defaultCol);}else{

if (checkn){colorWidget.setRgbColor('#'+cpcolorcode);}else{colorWidget.setRgbColor('#'+$defaultCol);}}

createDefaultColorBoxes();});

window.addEvent('domready', function() {
Element.implement({show: function() {
	this.setStyle('display','');},hide:
 function() {
 	this.setStyle('display','none');}});$$('input[type=text]').addEvents({ 'focus': function() { 
 		this.select(); } });$$('input[type=text]').addEvents({ 'mouseup': function(event) { 
 			event.preventDefault(); } });$$('input[type=textarea]').addEvents({ 'focus': function() { 
 				this.select(); } });$$('input[type=textarea]').addEvents({ 'mouseup': function(event) { 
 					event.preventDefault(); } });});

function changeBG(color){
document.bgColor = color;
}
window.addEvent('domready', function() {
getTetradeColors()
});











