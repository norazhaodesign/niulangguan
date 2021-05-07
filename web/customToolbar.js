// https://pdfjs.express/blog/how-to-use-pdf-js

let sheet = (function() {
  let style = document.createElement("style");
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
})();

function editToolBar(){
  removeGrowRules();

  // removeElement('sidebarToggle')
  // removeElement('viewFind')
  
  // removeElement('previous')
  // removeElement('next')
  // removeElement('pageNumber')
  removeElement('numPages')
  
  // removeElement('zoomIn')
  // removeElement('zoomOut')
  removeElement('scaleSelectContainer')
  removeElement('presentationMode')
  removeElement('openFile')
  removeElement('print')
  removeElement('download')
  removeElement('viewBookmark')
  removeElement('secondaryToolbarToggle')

  addElemFromSecondaryToPrimary('viewFind', 'toolbarViewerLeft')
  // addElemFromSecondaryToPrimary('zoomIn', 'toolbarViewerRight')
  // addElemFromSecondaryToPrimary('zoomOut', 'toolbarViewerRight')
  addElemFromSecondaryToPrimary('pageNumber', 'toolbarViewerRight')
  addElemFromSecondaryToPrimary('previous', 'toolbarViewerRight')
  addElemFromSecondaryToPrimary('next', 'toolbarViewerRight')
}

function changeIcon(elemID, iconUrl){
  let element = document.getElementById(elemID);
  let classNames = element.className;
  classNames = elemID.includes('Toggle')? 'toolbarButton#'+elemID :
  classNames.split(' ').join('.');
  classNames = elemID.includes('view')? '#'+elemID+'.toolbarButton' : '.'+classNames
  classNames+= "::before";
  addCSSRule(sheet, classNames, `content: url(${iconUrl}) !important`, 0)
 }
function addElemFromSecondaryToPrimary(elemID, parentID){
  let element = document.getElementById(elemID);
  let parent = document.getElementById(parentID);
  element.style.minWidth = "0px";
  element.innerHTML =''
  parent.append(element);
}
function removeElement(elemID){
  let element = document.getElementById(elemID);
  element.parentNode.removeChild(element);
}
function removeGrowRules(){
  // addCSSRule(sheet, '.hiddenSmallView *', 'display:block !important');
  // addCSSRule(sheet, '.hiddenMediumView', 'display:block !important');
  // addCSSRule(sheet, '.hiddenLargeView', 'display:block !important');
  // addCSSRule(sheet, '.visibleSmallView', 'display:block !important');
  // addCSSRule(sheet, '.visibleMediumView', 'display:block !important');
  // addCSSRule(sheet, '.visibleLargeView', 'display:block !important');
}
function addCSSRule(sheet, selector, rules, index) {
  if("insertRule" in sheet) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  }
  else if("addRule" in sheet) {
    sheet.addRule(selector, rules, index);
  }
}
window.onload = editToolBar