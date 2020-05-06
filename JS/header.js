$(function(){
    $("#userLogin").click(function(){
        $.post('userLogin.php',{
            'Email': $('#Email').val(),
            'Password': $('#Password').val()
        }, function(data, status){

                if (data == true){
                    $('#container-nav').load('conteiner_nav.php #nav');
                    alert ('Користувача авторизовано');
                } else {
                    alert ('Невірний логін або пароль');
                }
                $('#LoginModal').modal('hide');
        })
    })
    $("#logOut").click(function(){
        $.get('logOut.php', function(){

            var locationUrl = location.href;
            locationUrl = locationUrl.split('/');
            if (locationUrl[locationUrl.length-1] !='index.php'){
                locationUrl[locationUrl.length-1] = 'index.php';
                window.location.href = locationUrl.join('/');
            }
           
            $('#container-nav').load('conteiner_nav.php #nav');
        })
    })
})