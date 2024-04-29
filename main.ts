const $audioUpload : HTMLInputElement | HTMLElement | null = document.getElementById("audio-uploader");
$audioUpload?.addEventListener("input", (event) => {InputAudioFile(event)})

function InputAudioFile(event : Event)
{
  
  const target = event.currentTarget as HTMLInputElement;
  
  if(target.files != null)
  {
    let file = target.files[0];
    const reader = new FileReader();
    
    reader.onload = e => console.log(e.target?.result);
    reader.readAsArrayBuffer(file);
  }
}