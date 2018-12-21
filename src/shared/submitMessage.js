let submitMessage = (url, history) => {
    return (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    event.currentTarget.reset();
    fetch(url, {
      method: "POST", 
      body: data
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      history.push('/recieved');
    });
    }
}
export default submitMessage;