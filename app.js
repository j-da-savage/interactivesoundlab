var piano = document.getElementById("piano");
var interactive = document.getElementById("interactive");
var intro = document.getElementById('intro');
var pic = document.getElementById('pic')

const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
const synth = new Tone.Synth().connect(chorus);

var color = "yellow";

intro.addEventListener('click', () => {
  intro.style.display = "none";
});

document.body.addEventListener('keydown', (event) => {
  if (event.key == 'f'){
    synth.triggerAttackRelease("B1", "4n");
    document.body.style.backgroundColor = "orange";
    pic.src = "pic.jpg";
  }
  else if (event.key == 'g')
  {
    synth.triggerAttackRelease("G4", "4n");
    document.body.style.backgroundColor = "salmon";
  }
  else if (event.key == 'h')
  {
    synth.triggerAttackRelease("F4", "4n");
    document.body.style.backgroundColor = "aqua";
  }
})

interactive.addEventListener('mouseenter', () => {
  piano.play();
  document.body.style.backgroundColor = color;
});

interactive.addEventListener('mouseleave', () => {
  piano.pause();
  document.body.style.backgroundColor = "white";
});



piano.addEventListener('timeupdate', (event) => {
  console.log("updated:", event.target.currentTime);
  if(event.target.currentTime > 0.1)
  {
    color = "blue"
  }
  else{
    color = "yellow"
  }

})
