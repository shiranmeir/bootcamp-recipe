$("#button").on("click", function(){
    let newFood = $("#inputFood").val()
    $.get(`/recipes/${newFood}`, function(data){
        renderIngredients(data)
    })
})

const renderIngredients=function(data) {
    $(".Ingredients").empty()
    let source = $("#food-template").html();
    let template = Handlebars.compile(source);
    let newHTML = template(data);
    $(".Ingredients").append(newHTML); 
}