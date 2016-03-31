const coderUtils={


 getTodayString() {
 	var weeks = ["日","一","二","三","四","五","六"];
	var today = new Date();
	return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}

}
module.exports = coderUtils