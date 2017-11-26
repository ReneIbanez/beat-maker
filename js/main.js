// var activeBox = box1;
var metronome_beat = []
var tracks = [];
var resolution = 20;
// set my bpm threw the noteItems
var bpm = +$("#bpm").val();
var beat = 0;
var playing = false;
var metronome;
var beatInterval;
var note = 0;
var beginning = Date.now()
var currentBeatTime =(Date.now()- beginning)%16000;
// all this is doing setting the math
var getCurrentBeat = ()=>
  (Date.now()- beginning)%16000;

// set your bpm
// set the tempo
$("#bpm").on("input",function(){
  clearInterval(metronome);
  bpm = $("#bpm").val();
  console.log(bpm);
  //  setInterval(updateMetronome, (60000/bpm));
});

//this is the metronome bar
function updateMetronome(){
  // console.log("hi");
  $("#note"+ beat).toggleClass("metronomeActive");
   playSound("sounds/clap-hit:bings/hihat-808.wav");
  $("#metronome").css("background-color","null");
  playSound('sounds/'+metronome_beat[beat])
    beat++;
    if(beat ==16){
       beat = 0;
    }

}

function playBeats(){

  var time = getCurrentBeat()
  var beatsToPlay = metronome_beat.filter(beat => {
    return beat.time > time && beat.time < time + resolution;
  });
  beatsToPlay.forEach(beat =>{
    playSound("sounds/"+beat.filename)
  })
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
  // console.log("metronome",metronome)
      if(metronome){
        clearInterval(metronome)
        metronome = null;
        clearInterval(beatInterval)
      } else {
        metronome = setInterval(updateMetronome, 60000/bpm);
        beatInterval=setInterval(playBeats , resolution);
        beginning = Date.now();
        //in here we need to push sound or key to an array to hold that key
        console.log(bpm)

      }
    }
});


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
  M : 'fun-file/supsitry.mp3',
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
  var beat_obj = {
    filename: filename,
    time: getCurrentBeat(),
  }
  metronome_beat.push(beat_obj);

  //push to tracks
  let track_id = active_keyboard + " - " + filename


  push_to_track(track_id, beat_obj)


  // metronome_beat[beat]= filename;
  playSound("sounds/"+ filename);
});


function push_to_track(track_id, beat_obj){
  ensure_track(track_id).beats.push(beat_obj)
  console.log(tracks)
}

// ensure track takes a track id and always returns a refrence to that track
// if that track does not exist yet, it is created and a refrence is returned

function ensure_track(track_id){
  let track_ref = undefined
  if(tracks.length){
    for(var i = 0, l = tracks.length; i < l; i++){
      if(tracks[i].track_id == track_id)
        track_ref = tracks[i]
    }
  }//if not track length or if theirs no track on the line of code 324 -327 then its know tomake a new =one
  // if the tracks array is empty or if we didnt find a track with the desired track id in the loop above, we make a new one
  if(!tracks.length || !track_ref){
    let new_track = {
      track_id:track_id,
      beats:[]
    }
    tracks.push(new_track)
    track_ref = new_track
  }

  return track_ref

}

// initially set keys rec function
// $(document).keydown(function(e){
//   // rec button \\
//   if(e.which== 220){
//     console.log("clicked");
//     setInterval(function(){
//       playSound(n0[note])
//       note++;
//       if(note>n0.length){
//         console.log("finished");
//         note= 0;
//       }
//     },3000);
//   }
// });
