$(function(){
    var elemId=$(".Id");
    var textRole = $(".TextRole");
    var changeRole = $(".ChangeRole");
    var legthElem = elemId.length;
    for (let i=0; i<legthElem; i++){
    var changeRole = $(".ChangeRole");
    attachment(elemId[i], textRole[i], changeRole[i]);
    }
});
function attachment(elemId, textRole, changeRole){
$(changeRole).change(function(){
$.post('changeUserRole.php', {
    'Id': $(elemId).text(),
    'Role': $(changeRole).val()
}, function(data, status){
   $(textRole).text(data);
    })
})
}




// $('#Role').click(function(){
//     $.post('changeUserRole.php',{
//     Id: $('TextRole').text,
//     Role: $('Role').val()
//     },

// function(data, status){
//    console.log(data)
// })
// })