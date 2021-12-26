//注意 每次调用 $.get() 或 $.post() 或 $.ajax() 时会先调用  ajaxPrefilter这个函数
// 在这个函数中 可以拿到 Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url)
})