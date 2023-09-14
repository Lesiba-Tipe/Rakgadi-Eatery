//ACCESS SERVER
//path = 'http://localhost:3000/data'// ||  './shared/data.json'  //for testing const PORT = process.env.PORT || 3000;
path = './shared/data.json'         //for Development


$(document).ready(function(){
  function menu_bar() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

  const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  function updateTime() {
      var now = new Date();

      document.getElementById("time").innerText =
              zeroPadding(now.getHours(), 2) + ":" +
              zeroPadding(now.getMinutes(), 2) + ":" +
              zeroPadding(now.getSeconds(), 2);

      document.getElementById("date").innerText =
              now.getFullYear() + "-" +
              zeroPadding(now.getMonth() + 1, 2) + "-" +
              zeroPadding(now.getDate(), 2) + " " +
              WEEK[now.getDay()];
  }

  updateTime();
  setInterval(updateTime, 1000);

  function zeroPadding(num, digit) {
      return String(num).padStart(digit, '0');
  }

})


fetch(path)
  .then(response => response.json())
  .then(data => {
    console.log('PATH: ', path)
    console.log('DATA: ',data)
    
    developer = data.developer
    physicaladdress = data.physicalAddress
    menu = data.menu

    div_starter = document.getElementById('starter')    
    div_kota = document.getElementById('kota')
    div_chips = document.getElementById('chips')
    div_sides = document.getElementById('sides')

    const footer = document.getElementById('footer')

    div_addressElement = document.createElement('div'); 
    div_dev_contentElement = document.createElement('div'); 

    console.log('Menu.STARTER: ',menu.starter)

    p_starterElement = '<p>'
    menu.starter.forEach(element => {p_starterElement += element + '<br>'});
    p_starterElement += '</p>'
    div_starter.innerHTML += p_starterElement
    
    p_kotaElement = '<p>'
    menu.kota.forEach(element => {p_kotaElement += element + '<br>'});
    p_kotaElement += '</p>'
    div_kota.innerHTML += p_kotaElement

    p_chipsElement = '<p>'
    menu.chips.forEach(element => {p_chipsElement += element + '<br>'});
    p_chipsElement += '</p>'
    div_chips.innerHTML += p_chipsElement

    p_sidesElement = '<p>'
    menu.sides.forEach(element => {p_sidesElement += element + '<br>'});
    p_sidesElement += '</p>'
    div_sides.innerHTML += p_sidesElement


    addressElement = '<address id="address"> <b>Physical Address</b> <br> ' + physicaladdress.street + '<br>' + physicaladdress.city +'<br>'+ physicaladdress.province +'<br>'+ physicaladdress.code + '</address>'
    dev_contentElement = '<p id="dev-content"> Developed by: <a style="color:#ffffff" href="https://www.tipegraphics.co.za/"> ' + developer.name + '</a>   | '+ new Date().getFullYear() + ' | &copy; Copyright reserved<p/>'

    div_addressElement.innerHTML += addressElement
    div_dev_contentElement.innerHTML += dev_contentElement

    footer.append(div_addressElement)
    footer.append(div_dev_contentElement)

  })
  .catch(error => {
    console.error('Error:', error);
    //alert('Make sure local server is running...\nERROR: '+ error)
  });

  