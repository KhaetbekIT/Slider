window.addEventListener("DOMContentLoaded", () => {
    console.clear()

    const sliderWrapper = document.querySelector("#slider")
    const slideItems = sliderWrapper.querySelectorAll(".slider__label")

    const hideSlideItems = () => {
        slideItems.forEach((item) => {
            item.classList.remove("active")
        })
    }

    hideSlideItems()

    const showSlideItems = (items) => {
        
        items?.forEach((item, index) => {
            if (index == 0) {
                item.classList.add("active")
            }

            item.addEventListener("click", () => {
                hideSlideItems()
                item.classList.add("active")
                // const pathImage = item.dataset.imagePath

                sliderWrapper.style.backgroundImage = `url(${item.dataset.imagePath})`
            })
        })
    }

    showSlideItems(slideItems)
})