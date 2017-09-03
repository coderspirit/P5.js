var mic, recorder, soundFile,canvas,button,button1,button2,top,bottom;
var state = 0;
function preload(){
    loadImages();
}
function setup() {
    canvas=createCanvas(500,400);
    canvas.position(400,100);
    canvas.class("head");
     background(bg_rec);
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  soundFile = new p5.SoundFile();
    button=createButton("rec");
    button.mousePressed(record);
    button1=createButton("stop");
    button1.mousePressed(stop);
    button2=createButton("play");
    button2.mousePressed(play);
    button3=createButton("saveFile");
    button3.mousePressed(saveFile);
    button.position(530,500);
    button1.position(610,500);
    button2.position(690,500);
    button3.position(770,500);
    button.class("btn");
    button1.class("btn");
    button2.class("btn");
    button3.class("btn");

}
function draw(){
}
function record(){
    // make sure user enabled the mic
  if (state === 0 && mic.enabled) {

    // record to our p5.SoundFile
    recorder.record(soundFile);

    background(bg_rec);
    text('Recording!', 230, 350);
    state++;
  } 
}
function stop(){
   if (state === 1) {
    background(bg_stop);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Stopped', 230,350);
    state++;
  } 
}
function play(){
    if (state === 2) {
      background(bg_play);
    soundFile.play(); // play the result!
    text('play', 230,350);
    state++;
  }
}
function saveFile(){
  if(state===3){
      save(soundFile, 'mySound.wav');//save in the file
      state++;
  }  
}