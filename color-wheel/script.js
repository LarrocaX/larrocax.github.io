var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 320,
    // Set the initial color to pure red
    color: "#f00"
  });
  
  colorPicker.on('color:change', function(color) {
    var hex = colorPicker.color.hexString;
    document.getElementById("hexd").innerHTML =  hex;
    var rgb = colorPicker.color.rgbString;
    document.getElementById("rgb").innerHTML =  rgb;
    var rgba = colorPicker.color.rgbaString;
    document.getElementById("rgba").innerHTML =  rgba;
    hexcolor = document.getElementById("hexa").innerHTML;
    document.getElementById('hexshow').style.backgroundColor = hex;
  
  });
   
    
  
  
  
  
  