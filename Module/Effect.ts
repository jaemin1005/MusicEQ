import { AudioAnalyzer } from "./AudioAnalyzer";

const QValue = 350;

class Effect {

  static EqulizerMapping(arrFrequency : Array<Frequency>, audioAnalyzer : AudioAnalyzer) : Array<BiquadFilterNode> {
    
    const inputNode = audioAnalyzer.audioContext.createGain();


    let filters = arrFrequency.map((freq, idx) => {
      const filterNode : BiquadFilterNode = audioAnalyzer.audioContext.createBiquadFilter();
    
      //* Q 설정
      filterNode.Q.value = QValue;
  
      //* Gain 설정
      filterNode.gain.value = freq.gain !== undefined ? freq.gain : 0;
  
      filterNode.frequency.setValueAtTime(freq.band, audioAnalyzer.audioContext.currentTime);

      //* lowshelf: 지정한 주파수보다 낮은 주파수를 증폭/감소 시킨다.
      //* highshelf: 지정한 주파수보다 높은 주파수를 증폭/감소 시킨다.
      //* peaking: 지정한 주파수를 증폭/감소 시킨다.
      if(idx === 0){
        filterNode.type = "lowshelf";
      }
      else if(idx === filters.length-1){
        filterNode.type = "highshelf"
      }
      else{
        filterNode.type = "peaking";
      }

      filterNode.connect(audioAnalyzer.audioContext.destination);
      return filterNode;
    });
    
    filters.reduce((prev, current) => {
      prev.connect(current);
      return current;
    }, inputNode);

    const outputNode = audioAnalyzer.audioContext.createGain();
    filters[filters.length - 1].connect(outputNode);
    outputNode.connect(audioAnalyzer.audioContext.destination);
    return filters;
  }
}