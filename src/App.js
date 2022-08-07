import ColorChangeBox from './ColorChangeBox';

function App() {

  function randomColor() {
    const num = Math.floor(Math.random() * 7);
    let color = "black"
    switch(num){
      case 0:
        color = "LightSalmon";
      break;
      case 1:
        color = "LemonChiffon";
      break;
      case 2:
        color = "AliceBlue";
      break;
      case 3:
        color = "Lavender";
      break;
      case 4:
        color = "LightCoral";
      break;
      case 5:
        color = "Turquoise";
      break;
      case 6:
        color = "LightPink";
      break;
    }
    return {
      'backgroundColor': color
    }
  }

  const style = {
    "textAlign": "center"
  }

  return (
    <div style={{...style}}>
      <h1>Color Changer</h1>
      <ColorChangeBox colorChanger={randomColor} currentBackground={randomColor()}/>
    </div>
  );
}

export default App;