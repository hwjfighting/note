function createElementWithTxt(TagName,Text) {
    var node=document.createElement(TagName);
    var OText=document.createTextNode(Text);
    node.appendChild(OText);
    return node;

}