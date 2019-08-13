bindEvent(); //绑定事件  绑定2个事件  btn   input鼠标抬起发消息事件

function bindEvent(){
    $('.btn').on('click',function(){
    //   console.log('click');
    var val = $('.inp').val();
    if(val){
        getData(val);
        addDom('my',val);
    }
    });
    $('.inp').on('keyup',function(e){
        // console.log(e.keyCode);
        if(e.keyCode == 13 && this.value){
            $('.btn').trigger('click');
        }
    })
}
function getData(val){
 $.ajax({
      type:"GET",
      url:"http://temp.duyiedu.com/api/chat?text=",
      data:{text: val},
      success:function(data){
        //   console.log(typeof data);
          var list = typeof data == 'string' ? JSON.parse(data) : data;
        //   console.log(list);
          addDom('r',list.text);
      },
      error:function(){
        //   console.log("error");
      }
 })
}
function addDom(who,text){
if(who == 'my'){
    $('<div class="talk my">\
           <div class="user"></div>\
            <div class="text">' + text + '</div></div>')
            .appendTo($('.inner'));
    $('.inp').val('');
}else{
     $('<div class="talk rabit">\
           <div class="user"></div>\
            <div class="text">' + text + '</div></div>')
            .appendTo($('.inner'));
}
// 每次发完让滚到最下面
$('.chat-box').scrollTop($('.chat-box')[0].scrollHeight);
}

