const RemoveNode = function () {

}

RemoveNode.prototype.removeField = function (elementId) {
    let node = document.querySelector(elementId);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

module.exports = RemoveNode;