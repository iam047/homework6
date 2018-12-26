Element.prototype.drag = function() {
    let elem = this;
    elem.onmousedown = function(e) {
        let offsetX = e.pageX - parseInt(elem.style.left);
        let offsetY = e.pageY - parseInt(elem.style.top);
        document.onmousemove = function(e) {
            elem.style.left = Math.max(Math.min(e.pageX - offsetX,elem.parentNode.clientWidth - elem.clientWidth), 0) + 'px';
            elem.style.top = Math.max(Math.min(e.pageY - offsetY,elem.parentNode.clientHeight - elem.clientHeight), 0) + 'px';
        };
        document.onmouseup = function(e) {
            document.onmousemove = elem.onmouseup = null;
        }
    };
    elem.ondragstart = function() { return 0 }
};
document.getElementById('elem').drag();
