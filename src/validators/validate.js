export function emailValidator(target) {
	if (!target) {
		return false;
	}
	let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let emailPattern = target.match(regex);
	if (emailPattern) {
		return true;
	}
	return false;
}

export function adharNumberVerify(target) {
	if (!target) {
		return false;
	}
	let regex = /^[0-9]{12}$/;
	let pattern = target.match(regex);
	if (pattern) {
		return true;
	}
	return false;
}

export function otpVerify(target) {
	if (!target) {
		return false;
	}
	let regex = /^[0-9]{6}$/;
	let pattern = target.match(regex);
	if (pattern) {
		return true;
	}
	return false;
}