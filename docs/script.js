//ACCESS SERVER

path = 'http://localhost:3000/data'   //for testing
//path = './shared/data.json'         //for Development

fetch(path)
  .then(response => response.json())
  .then(data => {
    console.log('DATA: ',data)
    
    developer = data.developer
    physicaladdress = data.physicalAddress

    const footer = document.getElementById('footer')
    //const dev_content = document.getElementById('dev-content')

    div_addressElement = document.createElement('div'); 
    div_dev_contentElement = document.createElement('div'); 

    //p_dev_content.setAttribute('id','dev-content')

    //devElement = document.getElementById('dev-content') <p><a href="html_images.asp">HTML Images</a></p>

    //addressElement = '<address>' + physicaladdress.street + '<br>' + physicaladdress.city +'<br>'+ physicaladdress.province +'<br>'+ physicaladdress.code + '</address>'
    addressElement = '<address id="address">' + physicaladdress.street + '<br>' + physicaladdress.city +'<br>'+ physicaladdress.province +'<br>'+ physicaladdress.code + '</address>'
    dev_contentElement = '<p id="dev-content"> Developed by: <a style="color:#ffffff" href="https://www.tipegraphics.co.za/"> ' + developer.name + '</a>   | '+ new Date().getFullYear() + ' | &copy; Copyright reserved<p/>'

    //div_addressElement.append(addressElement)
    div_addressElement.innerHTML += addressElement
    div_dev_contentElement.innerHTML += dev_contentElement

    footer.append(div_addressElement)
    footer.append(div_dev_contentElement)

  })
  .catch(error => {
    alert('Make sure local server is running...\nERROR: '+ error)
    console.error('Error:', error);
  });