document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowercase()

  //Conditionals go here
  if(day == 'Monday' && day == 'Wednesday' && 'Friday'){
    document.querySelector('#placeToSee').innerHTML = 'More Practice Days'
  } else if( day == 'Tuesday' || day == 'Thursday'){
    document.querySelector('#placeToSee').innerHTML = 'Class Day'
  } else if( day == 'Sunday' || day == 'Saturday'){
    document.querySelector('#placeToSee').innerHTML = 'The Weekend'
  }else{
    document.querySelector('#placeToSee').innerHTML = 'Please enter a valid day'
  }

}
