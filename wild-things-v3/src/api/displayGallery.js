import GLightbox from "glightbox"

const displayGallery = evt => {
  console.dir(evt.target)

  let targetButtonClass = evt.target.className

  let startingSlide = 0

  startingSlide = Number.parseInt(
    targetButtonClass.replace("photo-", "").replace(" glightbox", "")
  )

  const myGallery = GLightbox({
    elements: this.props.elements,
    autoplayVideos: false,
    startAt: startingSlide,
    openEffect: "fade",
    closeEffect: "fade",
    zoomable: "true",
  })

  myGallery.on("close", () => {
    myGallery.close()
  })

  myGallery.open()
}

export default displayGallery
