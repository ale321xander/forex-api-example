var interval = setInterval(function(){
 $.ajax({
 	url: 'https://forex.1forge.com/1.0.1/quotes?pairs=AUDUSD,GBPUSD,JPYUSD',
 	type: 'GET',
 	 })
 .done(function(data) {

    
  	$('#timeaudusd').text(getTime(data,0));
  	$('#priceaudusd').text(data[0].price);
  	$('#symbolaudusd').text(data[0].symbol);

  	$('#timegbpusd').text(getTime(data,1));
  	$('#pricegbpusd').text(data[1].price);
  	$('#symbolgbpusd').text(data[1].symbol);

  	$('#timejpyusd').text(getTime(data,2));
  	$('#pricejpyusd').text(data[2].price);
  	$('#symboljpyusd').text(data[2].symbol);

  	})
 
 .fail(function() {
 	console.log("error");
 })
 .always(function() {
 	console.log("complete");
 })}, 5000);
$('button').click( function(e) {
  $('.form_container').css('display','block');
});

function getTime(data,index) { 
  var time = new Date(data[index].timestamp*1000);
  return time.getHours() + '\:' + time.getMinutes() + '\:' + time.getSeconds();

}

$('form').submit( function(e) {
  e.preventDefault();
  var quantity = $('input[type=number]').val();
  var pair = $('select').val();
  $.ajax({
    url: 'https://forex.1forge.com/1.0.1/convert' + '?' + $.param({///check this!!!
      'from': pair.split("|")[0],
        'to': pair.split("|")[1],
        'quantity': quantity}),
    type: 'GET',
    })
  .done(function(data) {
    $('output').val((data.value).toFixed(2));
  })
  .fail(function() {
    console.log("error");
  })

 $('input[type=number]').val(0);
  
  })
    