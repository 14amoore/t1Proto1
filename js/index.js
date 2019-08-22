window.onload = function firstTone() {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease('C4', '8n');
};
