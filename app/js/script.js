$("document").ready(function () {
    $(".opener").click(toggleOpen)
    $(".menu__title ").click(toggleOpen)
    $(".--select").click(toggleSelect)
    $(".setting.--dropDown").find(".setting__header").click(toggleSettingsDrop)
    $(".table.--dropDown").find(".table__head").click(toggleTableDrop)
})

toggleOpen = function() {
    $(this).toggleClass("c")
    $(this).next().toggleClass("--opened")
}

toggleSelect = function(event) {
    let selectValue = $(this).find(".select_value")
    let selectList = $(this).find(".select_list")

    selectValue.toggleClass("c")
    selectList.toggleClass("--opened")
    if($(event.target).parent().hasClass("select_list")) {
        selectValue.text($(event.target).text())
    }
}

toggleSettingsDrop = function() {
    let header = $(this).find(".text")
    let list = $(this).parent().find(".setting__content")

    header.toggleClass("c")
    list.toggleClass("--opened")
}

toggleTableDrop = function() {
    let list = $(this).parent().parent().find("tbody")

    list.toggleClass("--opened")
}

toggleModal = function() {
    
}