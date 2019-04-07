let submitMessage = (url, history) => {
    return (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    event.currentTarget.reset();
    fetch(url, {
      method: "POST", 
      body: data,
      mode: "no-cors"
    })
    .then((response) => {
      console.log(response);
      console.log(history);
      history.push('/recieved');
    });
    }
}
export default submitMessage;