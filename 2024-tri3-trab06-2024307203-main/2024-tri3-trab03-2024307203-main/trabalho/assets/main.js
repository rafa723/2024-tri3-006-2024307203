document.querySelectorAll("[data-folder]").forEach(el => {
    const total = el.dataset.total
    const folder = el.dataset.folder
    let html = ''
    for (let i = 1; i <= total; i++) {
      html += `
        <div>
          <img src="imgs/${folder}/${folder} (${i}).jpg">
        </div>    
      `
    }
    el.innerHTML = html
  })
  
  const galleryImageModal = document.querySelector('.gallery-image-modal')
  const galleryBtClose = galleryImageModal.querySelector('.bt-close')
  const galleryContent = galleryImageModal.querySelector('.content')
  const imgs = document.querySelectorAll('.example img')
  
  galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close()
  })
  
  imgs.forEach(img => {
    img.addEventListener('click', () => {
      galleryContent.innerHTML = <img src="${img.src}">
      galleryImageModal.showModal()
    })
  })
  
    const galleryBtNext = galleryImageModal.querySelector('.bt-next')
    let nextImg = null

    const galleryBtPrev = galleryImageModal.querySelector('.bt-prev')
    let prevImg = null
  
    galleryBtNext.addEventListener('click', () => {
    galleryImageModal.close()
    nextImg.click()
 }) 

    galleryBtPrev.addEventListener('click', () => {
    galleryImageModal.close()
    prevImg.click()
 })  
   
    galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close()
 })
  
    imgs.forEach(img => {
    img.addEventListener('click', () => {
    nextImg = img.parentNode.nextElementSibling.querySelector('img') 
    galleryContent.innerHTML = <img src="${img.src}">
    galleryImageModal.showModal()
     })
 })

     imgs.forEach(img => {
    img.addEventListener('click', () => {
    prevImg = img.parentNode.previousElementSibling.querySelector('img') 
    galleryContent.innerHTML = <img src="${img.src}">
    galleryImageModal.showModal()
     })
 })