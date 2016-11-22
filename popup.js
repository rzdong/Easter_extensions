chrome.tabs.getSelected(function(tab){
  	console.log(tab.url)
  	$('#code').qrcode(tab.url);
  	$('#text').html('这是测试文本')
});
