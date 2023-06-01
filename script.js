document.addEventListener('DOMContentLoaded', function() {
    var readMoreLink = document.getElementById('readMoreLink');
    var readMoreText = document.querySelector('.read-more');
  
    readMoreLink.addEventListener('click', function(event) {
      event.preventDefault();  /* 阻止默认链接行为 */
      readMoreText.classList.toggle('expand');  /* 切换展开/收起状态 */
    });
  });
  
 
