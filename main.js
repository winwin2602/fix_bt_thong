var slides=document.querySelector('.slides');
var slide=Array.from(document.querySelectorAll('.slide'));
var slidegr=document.querySelector('.slide-gr');
var num_page 
// dùng để đếm số trang tùy vào mình chia hiển thị
// bao nhiêu trên 1 trang
// mình làm function tạo slide trước
function makeslide(numberonetime) {
    // truyền vào số ô muốn hiển thị trên 1 slide
    var percentwidth_slide=100/numberonetime;
    // tính độ dài của từng slide
    num_page=Math.ceil(slide.length/numberonetime);
    // tính số lượng trang
    slide.forEach((el,index)=>{
        el.style.width=(slidegr.offsetWidth/100*percentwidth_slide)+'px';
        // set độ rộng của từng slide
    })
    
  //dùng nó sẽ bị sai số nên tránh sai số tớ dùng ở dưới
    slides.style.width=(slidegr.offsetWidth/100*percentwidth_slide)*slide.length+'px';
}
// gọi hàm thử nhé
makeslide(3);
var curpage=1;
// tạo 1 biến giữ vị trí trang
function showslide(pagenumber){
    slides.style.marginLeft=-(slidegr.offsetWidth*(pagenumber-1))+'px';
}
showslide(1);
// cho nó chạy lúc đầu là hiểu thị trang 1 
function changeslide(n){
    curpage=curpage+n;
    if(curpage<1)curpage=num_page;
    if(curpage>num_page)curpage=1;
    showslide(curpage);
}
