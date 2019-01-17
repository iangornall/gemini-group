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
    this.fileInput = React.createRef();
  }
  sendToPodio(json){
    console.log(json);
    fetch('https://secure.globiflow.com/catch/d7jiwnu6vssp1f0', 
    {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
      },      
      body: json
    })
    // .then(response => response.json())
    // .then(data => console.log(data));
  }
  CSVtoJSON(csv){
    let lines = csv.split("\n");
    let keys = lines[0].split(",");
    let jsonData = [];
    for(let i = 1; i < lines.length; i++){
      let row = {};
      let values = lines[i].split(",");
      for(let j = 0; j < keys.length; j++){
        row[keys[j]] = values[j];
      }
      jsonData.push(row);
    }
    return JSON.stringify(jsonData);
  }
  handleSubmit(event) {
    event.preventDefault();
    let fr = new FileReader();
    fr.onload = (e) => {
      let json = this.CSVtoJSON(e.target.result);
      this.sendToPodio(json);
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