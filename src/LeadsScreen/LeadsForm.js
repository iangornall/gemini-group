import React from 'react';
export default class LeadsForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      file: '',
      slybroadcast: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendToPodio = this.sendToPodio.bind(this);
    this.createSlybroadcast = this.createSlybroadcast.bind(this);
    this.triggerSlybroadcast = this.triggerSlybroadcast.bind(this);
    this.fileInput = React.createRef();
  }
  sendToPodio(json){
    return fetch('https://secure.globiflow.com/catch/5618hd399hkt2d8', 
    {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
      },
      referrer: "no-referrer",
      body: json
    });
  }
  CSVtoJSON(csv){
    let insideQuotes = false;
    let escaped = false;
    let csvArr = csv.split('');
    for (let i = 0; i < csvArr.length; i++){
      if (!escaped && !insideQuotes && csvArr[i] === ','){
        csvArr[i] = '|||';
      }
      if (!escaped && csvArr[i] === '"'){
        insideQuotes = !insideQuotes;
        csvArr[i] = "~~~"
      }
      if (csvArr[i] === '\\' && !escaped){
        escaped = true;
      } else {
        escaped = false;
      }
    }
    csv = csvArr.join('');
    csv = csv.replace(/~~~/g, '');
    let lines = csv.split("\n");
    let keys = lines[0].split("|||");
    let jsonData = [];
    for(let i = 1; i < lines.length; i++){
      let row = {};
      let values = lines[i].split("|||");
      for(let j = 0; j < keys.length; j++){
        if (keys[j] === "Contact Phone"){
          row.rawPhoneNumber = values[j];
          let phoneNumberArr = values[j].split('');
          phoneNumberArr = [...phoneNumberArr.slice(0,3), '-', ...phoneNumberArr.slice(3,6), '-', ...phoneNumberArr.slice(6)];
          values[j] = phoneNumberArr.join('');
        }
        row[keys[j]] = values[j];
      }
      row.slybroadcast = this.state.slybroadcast;
      jsonData.push(row);
    }
    return jsonData;
  }
  createSlybroadcast(){
    if (this.state.slybroadcast){
      return fetch('https://secure.globiflow.com/catch/5s2h3vaq3g1k6j4',
      {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        referrer: "no-referrer",
        body: `{"createSlybroadcast": "true"}`
      });
    } else {
      return new Promise ((resolve) => resolve("No Slybroadcast"));
    }
  }
  triggerSlybroadcast(){
    if (this.state.slybroadcast){
      return fetch('https://secure.globiflow.com/catch/ol4z6fs122y85cz',
      {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        referrer: "no-referrer",
        body: `{"triggerSlybroadcast": "true"}`
      });
    }
    else {
      return new Promise ((resolve) => resolve("No Slybroadcast"));
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    let fr = new FileReader();
    fr.onload = (e) => {
      let jsonData = this.CSVtoJSON(e.target.result);
      this.createSlybroadcast()
      .then((result) => {
        console.log("created slybroadcast", result);
        (async () => {
          for (let row of jsonData){
            let response = (await this.sendToPodio(JSON.stringify(row)));
            console.log("sent item", response);
          }
          // test
          // let response = await this.sendToPodio(JSON.stringify(jsonData[1]));
          // console.log("sent item", response);
          // end test
          let response2 = await this.triggerSlybroadcast()
          console.log("triggered slybroadcast", response2);
          console.log('all done');
        })()
      })
    };
    fr.readAsText(this.fileInput.current.files[0]);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value === "true"
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" name="data" ref={this.fileInput} />
        <div>Send Slybroadcast</div>
        <input type="radio" name="slybroadcast" value="true" checked={this.state.slybroadcast} onChange={this.handleInputChange} />yes
        <input type="radio" name="slybroadcast" value="false" checked={!this.state.slybroadcast} onChange={this.handleInputChange} />no
        <input type="submit" />
      </form>
    )
  }
}