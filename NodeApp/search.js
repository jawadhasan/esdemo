var client = require('./connection');
client.search({  
    index: 'hcssdevicedata',
    // type: 'constituencies',
    body: {
    //   query: {
    //     match: { "name": "MockPrinter-1" }        
    //   },
    //   query: {  
    //     wildcard: { "constituencyname": "???wich" }
    //   }
    // query: {  
    //     regexp: { "constituencyname": ".+wich" }
    //   }
    // query: {
    //     "bool": {
    //       "must_not": {
    //         "exists": {
    //           "field": "name"
    //         }
    //       }
    //     }
    //   }
    "query": {
        "exists": {
          "field": "name"
        }
      }
    }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
  });