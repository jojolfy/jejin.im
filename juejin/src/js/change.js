/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-28 14:50:29
 * @version $Id$
 */

;
(function(win, doc) {
	function changeSize() {
		doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 320 * 50 + 'px';
	}
	changeSize();
	win.addEventListener('resize', changeSize, false);
})(window, document);