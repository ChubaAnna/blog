$(function(){
    $('#saveComment').click(function(){
    // alert ($('#IdRecord').val());
    // alert($('#IdAutor').val());
    // alert($('#textComment').val());

        $.post('saveComment.php', {
            'IdRecord': $('#IdRecord').val(),
            'IdAutor': $('#IdAutor').val(),
            'text': $('#textComment').val()
    }, function(data, status){
        alert (data);
    //    $(textRole).text(data);
        })
    })
})
