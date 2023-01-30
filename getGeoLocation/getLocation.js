document.getElementById("myBtn")
  .addEventListener("click", () => {
    geoLocation()
    console.log('clicked');
  });


const geoLocation = () => {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      console.log(latitude, longitude);
      let el = document.getElementById('myLocation');
      el.innerHTML = `Location: ${latitude}, ${longitude}`;
      console.log(el);
    }, err => {
      console.error(err)
    })
  }
}