var n0= [];
// var activeBox = box1;
var metronome_beat =[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",];
// set my bpm threw the noteItems
var bpm = +$("#bpm").val();
var count = 0;
var playing = false;
var tick;
var note = 0;



// set your bpm
// set the tempo
$("#bpm").on("input",function(){
  clearInterval(tick);
  bpm = $("#bpm").val();
  console.log(bpm);
  //  setInterval(updateMetronome, (60000/bpm));
});

//this is the metronome bar
function updateMetronome(){
  console.log("hi");
  $("#note"+ count).toggleClass("metronomeActive");
  playSound("sounds/clap-hit:bings/hihat-808.wav");
  $("#metronome").css("background-color","null");
  count++;
if(count ==16){
   count= 0;
  }
}
function playSound(fileName){
  var sound= new Howl({
    src:[fileName],
    loop: false,
  });
  sound.play();

}
  //if spacebar is pressed, start
  $(document).keydown(function(e){
    if(e.which== 32){
  console.log("tick",tick)
      if(tick){
        clearInterval(tick)
        tick = null;
      }else {
        tick = setInterval(updateMetronome, 60000/bpm);
        //in here we need to push sound or key to an array to hold that key
        console.log(bpm)

      }
    }
});
// initially set keys rec function
$(document).keydown(function(e){
  // rec button \\
  if(e.which== 220){
    console.log("clicked");
    setInterval(function(){
      playSound(n0[note])
      note++;
      if(note>n0.length){
        console.log("finished");
        note= 0;
      }
    },3000);
  }
});




// });
//lil_bit_keyboard['Q'] is equal to 'g_sp_125_19'
// this object is just storing the names of the audio files
// objects use key value pairs in the form of key:value
// in this case Q is they key and 'g_sp_125_19' is the value
// you can look up the value of any given key using lil_bit_keyboard['key']


//container
let keyboard_profiles = {}
//profile objects... q,w,e,ext properties
keyboard_profiles.lil_bit_keyboard = {
  Q : 'clap-hit:bings/Clap 001.wav',
  W : 'bass/bass0.wav',
  E : 'kick:snare/Kick 002 Knock.wav',
  R : 'piano/d-block-piano4-qbh.wav',
  T : 'piano/piano1.wav',
  Y : 'piano/d-block-string3-qbh.wav',
  U : 'kick:snare/Kick 001 Basic.wav',
  I : 'kick:snare/perc-tambo.wav',
  O : 'kick:snare/perc-weirdo.wav',
  P : 'kick:snare/shaker-shuffle.wav',
  A : 'kick:snare/snare 001.wav',
  S : 'kick:snare/snare-block.wav',
  D : 'kick:snare/snare-sumo.wav',
  F : 'kick:snare/tom-analog.wav',
  G : 'TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass A Deep.wav',
  H : 'TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass A Overdrive .wav',
  J : 'TriSamples - 808 Trapstep Pack Vol 1/808 Bass/808 Bass Lex.wav',
  K : 'TriSamples - 808 Trapstep Pack Vol 1/Kick/Kick 005 Deep.wav',
  L : 'TriSamples - 808 Trapstep Pack Vol 1/Kick/Kick 003 Sensible.wav',
  Z : 'TriSamples - 808 Trapstep Pack Vol 1/Snares & Claps/Clap 005.wav',
  X : 'TriSamples - 808 Trapstep Pack Vol 1/Snares & Claps/Clap 004.wav',
  C : 'piano/Gd pno A1 (R).wav',
  V : 'piano/Gd pno A2 (R).wav',
  B : 'piano/PF ST  G 4-L(R).wav',
  N : 'guitar/g_tdd_120_02.wav',
  M : 'fun-file/goodyear.mp3',
}
keyboard_profiles.bass_keyboard = {
  Q : 'bass/bass1.mp3',
  W : 'bass/bass2.wav',
  E : 'bass/bass3.wav',
  R : 'bass/bass4.wav',
  T : 'bass/bass5.wav',
  Y : 'bass/bass6.wav',
  U : 'bass/bass7.wav',
  I : 'bass/bass8.wav',
  O : 'bass/bass9.wav',
  P : 'bass/bass10.wav',
  A : 'bass/bass11.wav',
  S : 'bass/bass12.wav',
  D : 'bass/bass13.wav',
  F : 'bass/bass14.wav',
  G : 'bass/bass15.wav',
  H : 'bass/bass16.wav',
  J : 'bass/bass17.wav',
  K : 'bass/bass18.wav',
  L : 'bass/bass19.wav',
  Z : 'bass/bass20.wav',
  X : 'bass/bass21.wav',
  C : 'bass/bass22.wav',
  V : 'bass/bass23.wav',
  B : 'bass/bass24.wav',
  N : 'bass/Dirty Bass_G2.wav',
  M : 'bass/bass26.wav',
}
keyboard_profiles.piano_keyboard = {
  Q : 'piano/d-block-piano1-qbh.wav',
  W : 'piano/d-block-piano2-qbh.wav',
  E : 'piano/d-block-piano3-qbh.wav',
  R : 'piano/d-block-piano4-qbh.wav',
  T : 'piano/d-block-sound1-qbh.wav',
  Y : 'piano/d-block-sound2-qbh.wav',
  U : 'piano/d-block-sound3-qbh.wav',
  I : 'piano/d-block-sound4-qbh.wav',
  O : 'piano/d-block-string1-qbh.wav',
  P : 'piano/d-block-string2-qbh.wav',
  A : 'piano/d-block-string3-qbh.wav',
  S : 'piano/d-block-trumpet1-qbh.wav',
  D : 'piano/eb1hhard.wav',
  F : 'piano/eb1lsoft.wav',
  G : 'piano/eb1mmell.wav',
  H : 'piano/eb2lsoft.wav',
  J : 'piano/eb2hhard.wav',
  K : 'piano/eb2mmell.wav',
  L : 'piano/eb3hhard.wav',
  Z : 'piano/eb3lsoft.wav',
  X : 'piano/PIANO_lab1.wav',
  C : 'piano/PIANO_lab3.wav',
  V : 'piano/PIANO_lab4.wav',
  B : 'piano/piano29.wav',
  N : 'piano/piano30.wav',
  M : 'piano/piano31.wav',
}
keyboard_profiles.kick_keyboard = {
  Q : 'kick:snare/Kick 001 Basic.wav',
  W : 'kick:snare/Kick 002 Knock.wav',
  E : 'kick:snare/Kick 003 Sensible.wav',
  R : 'kick:snare/Kick 004 Blam.wav',
  T : 'kick:snare/Kick 005 Deep.wav',
  Y : 'kick:snare/Kick 006 Lexy.wav',
  U : 'kick:snare/Kick 007 Noisy.wav',
  I : 'kick:snare/Kick 008 Vinyl.wav',
  O : 'kick:snare/Kick 009 Crust.wav',
  P : 'kick:snare/kick-808.wav',
  A : 'kick:snare/Snare 001.wav',
  S : 'kick:snare/Snare 002.wav',
  D : 'kick:snare/Snare 003.wav',
  F : 'kick:snare/Snare 004.wav',
  G : 'kick:snare/Snare 005.wav',
  H : 'kick:snare/Snare 006.wav',
  J : 'kick:snare/Snare 007.wav',
  K : 'kick:snare/Snare 008.wav',
  L : 'kick:snare/snare-808.wav',
  Z : 'kick:snare/snare-big.wav',
  X : 'kick:snare/snare-block.wav',
  C : 'kick:snare/snare-tape.wav',
  V : 'kick:snare/snare-pinch.wav',
  B : 'kick:snare/kick-stomp.wav',
  N : 'kick:snare/kick-thump.wav',
  M : 'kick:snare/snare-punch.wav',
}
keyboard_profiles.gutiar_keyboard = {
  Q : 'guitar/60_Cool_Gtr_03.wav',
  W : 'guitar/60_Cool_Gtr_04.wav',
  E : 'guitar/bm_TBC_01.wav',
  R : 'guitar/bm_TBC2_10.wav',
  T : 'guitar/Buzzy_b_07.wav',
  Y : 'guitar/E_Gallop_Riff_1a.wav',
  U : 'guitar/e_gtr_tv_03.wav',
  I : 'guitar/Em_lick_ascending_2.wav',
  O : 'guitar/g_sp_125_19.wav',
  P : 'guitar/g_sp_125_25.wav',
  A : 'guitar/g_t_120_30.wav',
  S : 'guitar/g_t_120_32.wav',
  D : 'guitar/g_tdd_120_01.wav',
  F : 'guitar/g_tdd_120_02.wav',
  G : 'guitar/g_tdd_120_04.wav',
  H : 'guitar/g_tdd_120_05.wav',
  J : 'guitar/g_tdd_120_09.wav',
  K : 'guitar/g_tdd_120_10.wav',
  L : 'guitar/g_tdd_120_22.wav',
  Z : 'guitar/g_tdd_120_30.wav',
  X : 'guitar/g_tdd_120_46.wav',
  C : 'guitar/ga_sx_138_21.wav',
  V : 'guitar/H_n_S_Licks_05.wav',
  B : 'guitar/H_n_S_Licks_17.wav',
  N : 'guitar/Kool_Comp_11.wav',
  M : 'guitar/gtr-jazz.wav',
}
keyboard_profiles.clap_keyboard = {
  Q : 'clap-hit:bings/Clap 001.wav',
  W : 'clap-hit:bings/Clap 002.wav',
  E : 'clap-hit:bings/Clap 003.wav',
  R : 'clap-hit:bings/Clap 004.wav',
  T : 'clap-hit:bings/Clap 005.wav',
  Y : 'clap-hit:bings/Clap 006.wav',
  U : 'clap-hit:bings/Clap 007.wav',
  I : 'clap-hit:bings/Clap 008.wav',
  O : 'clap-hit:bings/Clap 009.wav',
  P : 'clap-hit:bings/Clap 010.wav',
  A : 'clap-hit:bings/Clap 011.wav',
  S : 'clap-hit:bings/Clap 012.wav',
  D : 'clap-hit:bings/Clap 013.wav',
  F : 'clap-hit:bings/Clap 014.wav',
  G : 'clap-hit:bings/HiHat Closed 001 Widened.wav',
  H : 'clap-hit:bings/HiHat Closed 002 Ozone.wav',
  J : 'clap-hit:bings/HiHat Closed 003 909x.wav',
  K : 'clap-hit:bings/HiHat Open 001.wav',
  L : 'clap-hit:bings/HiHat Open 002.wav',
  Z : 'clap-hit:bings/HiHat Open 003.wav',
  X : 'clap-hit:bings/hihat-808.wav',
  C : 'clap-hit:bings/hihat-plain.wav',
  V : 'clap-hit:bings/hihat-reso.wav',
  B : 'clap-hit:bings/hihat-reso.wav',
  N : 'clap-hit:bings/HiHat Closed 010 Class.wav',
  M : 'clap-hit:bings/HiHat Closed 013 Trash.wav',
}
keyboard_profiles.Funfile_keyboard = {
  Q : 'fun-file/pitt.mp3',
  W : 'fun-file/vehicle104.wav',
  E : 'fun-file/scumbag.mp3',
  R : 'fun-file/stopitpi.mp3',
  T : 'fun-file/way2die.mp3',
  Y : 'fun-file/whosaid.mp3',
  U : 'fun-file/prepare.mp3',
  I : 'fun-file/quotes004.wav',
  O : 'fun-file/numnuts.mp3',
  P : 'fun-file/negro.mp3',
  A : 'fun-file/musical001.wav',
  S : 'fun-file/quotes007.wav',
  D : 'fun-file/miracle.mp3',
  F : 'fun-file/dns.mp3',
  G : 'fun-file/Chant Ho 001.wav',
  H : 'fun-file/Chant Who 001.wav',
  J : 'fun-file/Chant What 002.wav',
  K : 'fun-file/battle021.wav',
  L : 'fun-file/marvin.mp3',
  Z : 'fun-file/way2die.mp3',
  X : 'fun-file/horney.mp3',
  C : 'fun-file/jodi.mp3',
  V : 'fun-file/intpoint.mp3',
  B : 'fun-file/coffee.mp3',
  N : 'fun-file/comic012.wav',
  M : 'fun-file/excessiv.mp3',
}

var active_keyboard = 'lil_bit_keyboard';
//profile for my keyboard. so the catagory you select is what plays
$(".keyboard-selector").on("click",function(e){
  // gets the value of the keyboard attribute from the html of the button clicked
  // and stores it inn keyboard_profile
  let keyboard_profile = $(this).attr('keyboard')
  // update the value of active_keyboard with the value of keyboard_profile
  active_keyboard = keyboard_profile;
});

//setting up an event litiner on a keydown event
$(document).keydown(function(e) {
  //e.which is charictor code and we turn it into string, and it gets stored in a veriable key
  var key = String.fromCharCode(e.which)
  //getting the file name, ....[] is being used to find the correct file
  var filename = keyboard_profiles[active_keyboard][key]
  metronome_beat[count]= filename;
  playSound("sounds/"+ filename);
});
    // $(document).keydown(function(e) {
    //   if (e.which== 81) { //key id Q
    //     playSound("sounds/g_sp_125_19.wav");
    //     $("#key-q").css("background-color","red");
    //   }
    //   else if (e.which== 87) { // key id W
    //     playSound("sounds/shaker-analog.wav");
    //     $("#key-w").css("background-color","red");
    //   }
    //   else if (e.which== 65 ) { // key id A
    //     playSound("sounds/clap-analog.wav");
    //     $("#key-a").css("background-color","red");
    //   }
    //   else if(e.which== 90){ // key Z
    //     playSound("sounds/clap-fat.wav");
    //     $("#key-z").css("background-color","red");
    //   }
    //   else if(e.which== 83){// key id s
    //     playSound("sounds/clap-808.wav");
    //     $("#key-s").css("background-color","red");
    //   }
    //   else if(e.which== 88){// key id X
    //     playSound("sounds/clap-crushed.wav");
    //     $("#key-x").css("background-color","red");
    //   }
    //   else if(e.which== 69){//key id E
    //     playSound("sounds/shaker-suckup.wav");
    //     $("#key-e").css("background-color","red");
    //   }
    //   else if(e.which== 68){ //key id D
    //     playSound("sounds/clap-tape.wav");
    //     $("#key-d").css("background-color","red");
    //   }
    //   else if(e.which== 82){// key id R
    //     playSound("sounds/crash-noise.wav");
    //     $("#key-r").css("background-color","red");
    //   }
    //   else if(e.which== 86){ //key id V
    //     playSound("sounds/crash-808.wav");
    //     $("#key-v").css("background-color","red");
    //   }
    //   else if(e.which== 66){ // key id B
    //     playSound("sounds/hihat-ring.wav");
    //     $("#key-b").css("background-color","red");
    //   }
    //   else if(e.which== 67){// key id C
    //     playSound("sounds/d-block-sound1-qbh.wav");
    //     $("#key-c").css("background-color","red");
    //   }
    //   else if(e.which== 77){// key id M
    //     playSound("sounds/ride-acoustic01.wav");
    //     $("#key-m").css("background-color","red");
    //   }
    //   else if(e.which== 72){//key id H
    //     playSound("sounds/kick-big.wav");
    //     $("#key-h").css("background-color","red");
    //   }
    //   else  if(e.which== 85){// key id U
    //     playSound("sounds/PIANO_do5.wav");
    //     $("#key-u").css("background-color","red");
    //   }
    //   else if(e.which== 78){// key id N
    //     playSound("sounds/kick-floppy.wav");
    //     $("#key-n").css("background-color","red");
    //   }
    //   else if(e.which== 74){//Key id J
    //     playSound("sounds/kick-floppy.wav");
    //     $("#key-j").css("background-color","red");
    //   }
    //   else  if(e.which== 73){// key id I
    //     playSound("sounds/PIANO_lab3.wav");
    //     $("#key-i").css("background-color","red");
    //   }
    //   else if(e.which== 75){// key id K
    //     playSound("sounds/PIANO_lab4.wav");
    //     $("#key-k").css("background-color","red");
    //   }
    //   else  if(e.which== 79){// key od O
    //     playSound("sounds/PIANO_Mi0.wav");
    //     $("#key-o").css("background-color","red");
    //   }
    //   else  if(e.which== 76){// key id L
    //     playSound("sounds/PIANO_Mib4.wav");
    //     $("#key-l").css("background-color","red");
    //   }
    //   else  if(e.which== 71){// key id G
    //     playSound("sounds/kick-oldschool.wav");
    //     $("#key-g").css("background-color","red");
    //   }
    //   else  if(e.which== 84){// key id T
    //     playSound("sounds/259[kb]fukubass2.aif.mp3");
    //     $("#key-t").css("background-color","red");
    //   }
    //   else  if(e.which== 89){// key is Y
    //     playSound("sounds/PIANO_re2.wav");
    //     $("#key-y").css("background-color","red");
    //   }
    //   else  if(e.which== 80){// key P
    //     playSound("sounds/Gd pno A1 (R).wav");
    //     $("#key-p").css("background-color","red");
    //   }
    //   else  if(e.which== 70){//key id F
    //     playSound("sounds/423[kb]bass-rolly-down-up.wav.mp3");
    //     $("#key-f").css("background-color","red");
    //   }
    //   else  if(e.which== 89){ //key is Y
    //     playSound("sounds/.wav");
    //     $("#key-y").css("background-color","red");
    //   }
    //
    // });


//set up an onclick so when get click the is all Base
 // $("base").on("click", function(){
 //
 // });



// rember your key map is gana have a function that connects your key down function
// }else{
    // $(document).keydown(function(e) {
    //   if (e.which== 81) { //key id Q
    //     playSound("sounds/perc-808.wav");
    //     $(keymap).css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/perc-808.wav");
    //     }
    //   }
    //   else if (e.which== 87) { // key id W
    //     playSound("sounds/shaker-analog.wav");
    //     $("#key-w").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/shaker-analog.wav");
    //     }
    //   }
    //   else if (e.which== 65 ) { // key id A
    //     playSound("sounds/snare-pinch.wav");
    //     $("#key-a").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/clap-fat.wav");
    //     }
    //
    //   }
    //   else if(e.which== 90){ // key Z
    //     playSound("sounds/clap-tape.wav");
    //     $("#key-z").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/clap-tape.wav");
    //     }
    //   }
    //   else if(e.which== 83){// key id s
    //     playSound("sounds/clap-808.wav");
    //     $("#key-s").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/clap-808.wav");
    //     }
    //   }
    //   else if(e.which== 88){// key id X
    //     playSound("sounds/d-block-trumpet1-qbh.wav");
    //     $("#key-x").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/d-block-trumpet1-qbh.wav");
    //     }
    //   }
    //   else if(e.which== 69){//key id E
    //     playSound("sounds/kick-tron.wav");
    //     $("#key-e").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/kick-tron.wav");
    //     }
    //   }
    //   else if(e.which== 68){ //key id D
    //     playSound("sounds/snare-block.wav");
    //     $("#key-d").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/clap-slappper.wav");
    //     }
    //   }
    //   else if(e.which== 82){// key id R
    //     playSound("sounds/crash-noise.wav");
    //     $("#key-r").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/crash-noise.wav");
    //     }
    //   }
    //   else if(e.which== 86){ //key id V
    //     playSound("sounds/g_tdd_120_10.wav");
    //     $("#key-v").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/crash-808.wav");
    //     }
    //   }
    //   else if(e.which== 66){ // key id B
    //     playSound("sounds/hihat-ring.wav");
    //     $("#key-b").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/hihat-ring.wav");
    //     }
    //   }
    //   else if(e.which== 67){// key id C
    //     playSound("sounds/hihat-digital.wav");
    //     $("#key-c").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/hihat-digital.wav");
    //     }
    //   }
    //   else if(e.which== 77){// key id M
    //     playSound("sounds/my_face.mp3");
    //     $("#key-m").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/my_face.mp3");
    //     }
    //   }
    //   else if(e.which== 72){//key id H
    //     playSound("sounds/kick-big.wav");
    //     $("#key-h").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/kick-big.wav");
    //     }
    //   }
    //   else  if(e.which== 85){// key id U
    //     playSound("sounds/PIANO_do5.wav");
    //     $("#key-u").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/PIANO_do5.wav");
    //     }
    //   }
    //   else if(e.which== 78){// key id N
    //     playSound("sounds/kick-floppy.wav");
    //     $("#key-n").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/kick-floppy.wav");
    //     }
    //   }
    //   else if(e.which== 74){//Key id J
    //     playSound("sounds/kick-gritty.wav");
    //     $("#key-j").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/kick-gritty.wav");
    //     }
    //   }
    //   else  if(e.which== 73){// key id I
    //     playSound("sounds/PIANO_lab3.wav");
    //     $("#key-i").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/PIANO_lab3.wav");
    //     }
    //   }
    //   else if(e.which== 75){// key id K
    //     playSound("sounds/PIANO_lab4.wav");
    //     $("#key-k").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/PIANO_lab4.wav");
    //     }
    //   }
    //   else  if(e.which== 79){// key od O
    //     playSound("sounds/PIANO_Mi0.wav");
    //     $("#key-o").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/PIANO_Mi0.wav");
    //     }
    //   }
    //   else  if(e.which== 76){// key id L
    //     playSound("sounds/PIANO_Mib4.wav");
    //     $("#key-l").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/PIANO_Mib4.wav");
    //     }
    //   }
    //   else  if(e.which== 71){// key id G
    //     playSound("sounds/kick-stomp.wav");
    //     $("#key-g").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/kick-stomp.wav");
    //     }
    //   }
    //   else  if(e.which== 84){// key id T
    //     playSound("sounds/259[kb]fukubass2.aif.mp3");
    //     $("#key-t").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/259[kb]fukubass2.aif.mp3");
    //     }
    //   }
    //   else  if(e.which== 89){// key is Y
    //     playSound("sounds/PIANO_re2.wav");
    //     $("#key-y").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/PIANO_re2.wav");
    //     }
    //   }
    //   else  if(e.which== 80){ //key is p
    //     playSound("sounds/d-block-piano1-qbh.wav");
    //     $("#key-p").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/d-block-piano1-qbh.wav");
    //     }
    //
    //   }
    //   else  if(e.which== 70){//key id F
    //     playSound("sounds/423[kb]bass-rolly-down-up.wav.mp3");
    //     $("#key-f").css("background-color","red");
    //     if($("#record").hasClass("recordToggle")){
    //       n0.push("sounds/423[kb]bass-rolly-down-up.wav.mp3");
    //     }
    //   }else if (e.which==13) {
    //     $('#record').toggleClass("recordToggle");
    //   }
    //
    // });
