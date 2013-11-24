goog.provide('{name}.lib');

// Generate a random number between 0 and num-1.
{name}.lib.random = function(num) {
    return Math.floor(Math.random()*num);
};

// Centers a sprite on the screen.  Requires:
// *  {name}.kWidth
// *  {name}.kHeight
// @param item lime.Sprite sprite to center
{name}.lib.center = function(item) {
    var itemSize = item.getSize();
    var posX = ({name}.kWidth - itemSize.width)/2;
    var posY = ({name}.kHeight - itemSize.height)/2;
    item.setPosition(posX, posY);
};

// Create a label.  Requires:
// *  kFontSize
// *  kFontColor
// *  kFontFamily
{name}.lib.label = function(text) {
    var lbl = new lime.Label().setText(text).setFontSize(kFontSize)
        .setFontColor(lava.kFontColor)
        .setFontFamily(kFontFamily).setMultiline(true);
    lbl.createDomElement();
    goog.style.setStyle(lbl.domElement, {cursor: 'default'});
    return lbl;
};
