fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => 
      {
        if(!response.ok){
            throw new Error ('netwrk'+response.statusText);
        }
        return response.json();
      })
      .then(data => console.log(data))
      
      

 

 