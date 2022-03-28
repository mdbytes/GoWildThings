const preparePost = post => {
  console.log(post)
  const postIdString = "post-" + post.id
  const content = post.content.rendered
  const galleryBeginningIndex = content.indexOf(
    '<figure class="wp-block-image '
  )
  const mainContent = content
    .slice(0, galleryBeginningIndex)
    .replace("[", "")
    .replace("]", "")
  const galleryContent = content.slice(galleryBeginningIndex)
  let beginningIndex = 0
  let startsWithUrl = ""
  let url = ""
  let remainingGallery = galleryContent
  let portfolioDetails = {}
  let images = []
  let elements = []

  let portfolioImage = {}
  let portfolioElement = {}
  let morePhotos = true
  let slideLocation = 0

  while (morePhotos) {
    if (remainingGallery.indexOf("src=") === -1) {
      morePhotos = false
      continue
    }
    beginningIndex = remainingGallery.indexOf("src=") + 5
    startsWithUrl = remainingGallery.slice(beginningIndex)
    url = startsWithUrl.slice(0, startsWithUrl.indexOf('"'))
    remainingGallery = startsWithUrl.slice(startsWithUrl.indexOf('"'))
    portfolioImage = {
      image: url,
      slideLocation: slideLocation,
    }

    portfolioElement = {
      href: url,
      type: "image",
    }

    images.push(portfolioImage)
    elements.push(portfolioElement)
    slideLocation += 1
  }

  portfolioDetails.post = post
  portfolioDetails.images = images
  portfolioDetails.elements = elements
  portfolioDetails.postIdString = postIdString
  portfolioDetails.mainContent = mainContent

  console.log("portfoliodet", portfolioDetails)

  return portfolioDetails
}

export default preparePost
