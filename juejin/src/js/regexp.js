const re1 = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
const re2 = /^1\d{10}$/;
export default function(s) {
	if (s.indexOf("@") > 0) {
		if (re1.test(s)) {
			return true;
		} else {
			return false;
		}
	} else {
		if (re2.test(s)) {
			return true;
		} else {
			return false;
		}
	}
	return true;
}