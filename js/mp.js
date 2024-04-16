// JavaScript 추가
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // 아이디와 비밀번호가 빈 값인지 확인
    if (username.trim() === '' || password.trim() === '') {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }
  
    // 아이디와 비밀번호의 유효성 검사 (이 부분은 필요에 따라서 추가해주세요)
    // 예: 아이디의 길이, 비밀번호의 복잡성 등
    // 예를 들어, 아이디가 6자 이상 12자 이하인지 확인하고 싶으면 다음과 같이 추가할 수 있습니다.
    if (username.length < 6 || username.length > 12) {
      alert('아이디는 6자 이상 12자 이하이어야 합니다.');
      return;
    }
  
    // 유효성 검사가 통과되었을 때 로그인 로직을 여기에 작성하세요.
    // 예를 들어, 서버로 아이디와 비밀번호를 전송하고 응답을 처리하는 등의 작업을 수행합니다.
  
    // 로그인에 성공했다면 다음 페이지로 이동하거나 사용자에게 환영 메시지를 표시할 수 있습니다.
    alert('로그인 성공!');
  
    // 여기서 다음 페이지로 이동하는 등의 작업을 수행합니다.
  });
  
  // Main 버튼 클릭 시 메인 페이지로 이동하는 이벤트 처리
  document.querySelector('button[type="button"]').addEventListener('click', function() {
    window.location.href = 'mp_main.html'; // 메인 페이지로 이동
  });
  