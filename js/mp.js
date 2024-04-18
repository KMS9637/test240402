document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // 기본 제출 동작 방지

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password = document.getElementById('email').value;

    // 아이디와 비밀번호가 빈 값인지 확인
    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
      alert('아이디, 비밀번호 혹은 이메일을 확인하세요.');
      return;
    }

    alert('제출 완료!');

  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    // 아이디와 비밀번호의 유효성 검사 
    // 아이디가 6자 이상 12자 이하인지 확인하고 싶으면 다음과 같이 추가할 수 있습니다.
    if (username.length < 6 || username.length > 12) {
      alert('아이디는 6자 이상 12자 이하이어야 합니다.');
      return;
    }

    alert('로그인 성공!');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Main 버튼 클릭 시 메인 페이지로 이동하는 이벤트 처리
  var mainButton = document.getElementById("main");
  if (mainButton) {
    mainButton.addEventListener("click", function () {
      window.location.href = 'mp_main.html'; // 메인 페이지로 이동
    });
  }

  // SignUp 버튼 클릭 시 회원가입 페이지로 이동하는 이벤트 처리
  var signupButton = document.getElementById("signup");
  if (signupButton) {
    signupButton.addEventListener("click", function () {
      window.location.href = 'mp_signup.html';
    });
  }

  // Login 버튼 클릭 시 로그인 페이지로 이동하는 이벤트 처리
  var loginButton = document.getElementById("login");
  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = 'mp_login.html';
    });
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 페이지 스크롤 이벤트를 감지하여 버튼을 표시 또는 숨김
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}