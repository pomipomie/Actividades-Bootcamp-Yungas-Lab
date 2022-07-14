const DateProp = new Date().toLocaleTimeString('en-GB');

function BuenosDias() {
    return <h1>Buenos días</h1>;
  }
  
function BuenasTardes() {
    return <h1>Buenas tardes</h1>;
}

function BuenasNoches() {
    return <h1>Buenas noches</h1>;
}

export default function Greeting() {
    const isAM = DateProp < "12" && DateProp > "4";
    const isPM = DateProp > "12" && DateProp < "18";
    //const isPM = DateProp > "12"; //TESTING PURPOSES
    if (isAM) {
        return <BuenosDias />;
    } else if (isPM) {
        return <BuenasTardes />
    } else {
        return <BuenasNoches />;
    }

}