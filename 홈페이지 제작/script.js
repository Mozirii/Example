document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 동작 방지
  
    var query = document.getElementById('search-input').value;
    var targetElement = document.querySelector(':contains(' + query + ')');
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      return; // 검색 결과가 없을 경우 아무 동작도 수행하지 않음
    }
  });
  