$("#button").on("click", function(){
    let newFood = $("#inputFood").val()
    $.get(`/sanity/${newFood}`, function(foods){
        render(foods)
    })
})

const render= function(foods){
    let source = $('#arrayid-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template({players});
    $('.container').append(newHTML);
}
