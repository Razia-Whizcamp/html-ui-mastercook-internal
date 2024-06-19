// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let form = event.target;
//     let isValid = true;

//     // Reset error messages
//     document.getElementById('usernameError').textContent = '';
//     document.getElementById('passwordError').textContent = '';

//     // Username validation
//     const username = form['exampleInputUsername'].value;
//     if (username.trim() === '') {
//         isValid = false;
//         document.getElementById('usernameError').textContent = 'Please enter a username.';
//     }

    
//     const password = form['exampleInputPassword1'].value;
//     if (password.trim() === '') {
//         isValid = false;
//         document.getElementById('passwordError').textContent = 'Please enter a password.';
//     }

//     if (isValid) {
    
//         window.location.href = './Home.html';
//     }

//     form.classList.add('was-validated');
// }, false);


$(".slick-slider").slick({
    slidesToShow: 3,
    infinite:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
      // dots: false, Boolean
     // arrows: false, Boolean
   });
 
 
 // Image Slider Demo:
 // https://codepen.io/vone8/pen/gOajmOo