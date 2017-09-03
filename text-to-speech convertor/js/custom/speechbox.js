  var myVoice = new p5.Speech();// new P5.Speech object   
	var menuLoaded = 0;
	var label, input, speakbutton, vslider, rslider; // UI
    var div;
    function preload(){
        loadImages();
    }
	function setup()
        {   
        createCanvas(1370,630);
		// input dialog:
		input = createInput("Write Something in the box");
        input.class('input');
  		input.position(130, 120);
            
		// button:
		speakbutton = createButton('Speak');
  		speakbutton.position(600, 250);
        speakbutton.class('btn');
  		speakbutton.mousePressed(doSpeak);
  		// sliders:
  		vslider = createSlider(0, 100, 100);
  		vslider.position(220, 210);
  		vslider.mouseReleased(setVolume);
  		rslider = createSlider(10, 200, 100);
  		rslider.position(220, 240);
  		rslider.mouseReleased(setRate);

  		// say hello:
		myVoice.speak(input.value());

	}

	function setVolume()
	{
		myVoice.setVolume(vslider.value()/100.);
	}
	function setRate()
	{
		myVoice.setRate(rslider.value()/100.);
	}

	function draw()
	{
        background(bg);
        textSize(32);
        fill('red');
        text("Text to Speech Convertor",520,50);
        textSize(16);
        fill('green');
        text("Volume:",140,220);
        text("Rate:",150,250);
		
	}

	function doSpeak()
	{  
		myVoice.speak(input.value()); // debug printer for voice options
	}