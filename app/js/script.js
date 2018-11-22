$("document").ready(function () {
    $(".opener").click(toggleOpen)
    $(".menu__title ").click(toggleOpen)
    $(".--select").click(toggleSelect)
    $(".setting.--dropDown").find(".setting__header").click(toggleSettingsDrop)
    $(".table.--dropDown").find(".table__head").click(toggleTableDrop)
    $(".header__log_in").click(function(){toggleModal("--login")})
    $(".order").click(function(){toggleModal("--order")})
    $(".order_design").click(function(){toggleModal("--orderDesign")})
    $(".header__registration_link").click(function(){toggleModal("--registration")})
    $(".change_data").click(function(){toggleModal("--changeData")})
    $(".modal").click(function(){toggleModal(currentModalType)})
    slider()
})

toggleOpen = function() {
    $(this).toggleClass("c")
    $(this).next().toggleClass("--opened")
}

toggleSelect = function() {
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

var currentModalType

toggleModal = function(type) {
    if(!$(event.target).closest(".modal__window").length) {
        $(".modal").toggleClass("--opened")
        $("." + type).toggleClass("--opened")
        currentModalType = type
    }
}

var currentCircleIndex = 0 
var sliderLegth = 0

slider = function() {
    [...$(".slider__circle")].forEach(function(item, i, arr) {
        $(item).click(function() {
            circleClick(i)
        })
    })
    
    sliderLegth = $(".slider__circle").length

    $(".slider__arrow").click(function() {
        if($(this).hasClass("slider__arrow--left")) {
            if (currentCircleIndex < 1) {
                circleClick(sliderLegth - 1)
            } else {
                circleClick(currentCircleIndex - 1)
            }
        } else {
            if (currentCircleIndex > sliderLegth - 2) {
                circleClick(0)
            } else {
                circleClick(currentCircleIndex + 1)
            }
        }
    })
}

circleClick = function (i) {
    changeContent(i)
    $(".slider__circle").eq(currentCircleIndex).toggleClass("bgc s3")
    $(".slider__circle").eq(i).toggleClass("bgc s3")
    currentCircleIndex = i
}

changeContent = function(index) {
    console.log($(".slider__content").eq(index)[0].scrollWidth)
    $('.slider').animate({
        scrollLeft: $(".slider__content").eq(index)[0].scrollWidth * index
    }, 200);
}