module.exports = function(source, map) {
	if (this.cacheable) {
		this.cacheable();
	}
	var processed = source;
	var imgReg = /(\/\/gtms\d{2})/igm;
	var webpReg = /(.png|.jpg)/igm
	//去掉协议头，tms复制默认是http，所以不处理https了
	processed=processed.replace('http:','');
	//域名收敛到img
	processed=processed.replace(imgReg, '//img');
	//格式改为webp
	processed=processed.replace(webpReg, '$1'+'_.webp');
	//就是这么easy，红红火火恍恍惚惚好

	this.callback(null, processed, map);
};