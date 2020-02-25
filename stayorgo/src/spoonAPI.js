let api = "https://api.spoonacular.com";
let token = "f7deaa757e034458bb5c8a8b911c82eb";

// GET https://api.spoonacular.com/recipes/search -gets ID to feed into next call
// GET https://api.spoonacular.com/recipes/{id}/nutritionWidget.json
// GET https://api.spoonacular.com/food/menuItems/search -gets ID to feed into next call
// GET https://api.spoonacular.com/food/menuItems/{id}


const queryStringify = (obj, prefix) => {
    var pairs = [];
    for (var key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue;
      }
  
      var value = obj[key];
      var enkey = encodeURIComponent(key);
      var pair;
      if (typeof value === "object") {
        pair = queryStringify(value, prefix ? prefix + "[" + enkey + "]" : enkey);
      } else {
        pair =
          (prefix ? prefix + "[" + enkey + "]" : enkey) +
          "=" +
          encodeURIComponent(value);
      }
      pairs.push(pair);
    }
    return pairs.join("&");
  };
  
  const apiHost = host => {
    api = host;
  };
  
  const urlFor = resource => `${api}${resource}`;
  
  const HTTP_OK = 200;
  const HTTP_CREATED = 201;
  
  const throwResponseError = response => {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  };
  
  const emitNativeError = error => {
    throw error;
  };
  
  const statusCheck = successStatuses => response => {
    if (successStatuses.includes(response.status)) {
      return response;
    } else {
      throwResponseError(response);
    }
  };
  
  const okCheck = statusCheck([HTTP_OK]);
  
  const headers = {
    'Content-Type': 'application/json'
  }

  const searchParams = params => {
    const result = new URLSearchParams(params)
    return result
  }

// METHOD #2
  const query = (resource, params) => fetch(`${urlFor(resource)}?${"apiKey="+token}&${searchParams(params)}`, {
    headers
  }).then(okCheck, emitNativeError)
    .then(response => response.json())
    
  const searchRecipe = params => query('/recipe/search', params)
  const nutritionResults = params => query(`/recipes/${id}/nutritionWidget.json`, params)
  const menuItemSearch = params => query('/food/menuItems/search', params)
  const menuItemId = params => query(`/food/menuItems/${id}`, params)

  export {
    apiHost,
    searchRecipie,
    nutritionResults,
    menuItemSearch,
    menuItemId
  }
// METHOD #1
  const queryGET = resource => {
    const url = urlFor(resource);
    return fetch(`${urlFor(resource)}`, {
      method: "GET",
      headers: GETheaders
    })
      .then(okCheck, emitNativeError)
      .then(response => response.json());
  };
  
  const searchRecipe = (foodEntry) => {
    const url = `/recipe/search/query=${foodEntry}&apikey=${token}`;
    const query_url = queryGET(url);
    return query_url;
  };
  
  const nutritionResults = (foodEntry) => {
    const url = `/recipes/${id}/nutritionWidget.json?apikey=${token}`;
    const query_url = queryGET(url);
    return query_url;
  };
  
  const menuItemSearch = (foodEntry) => {
    const url = `/food/menuItems/search?apikey=${token}&query=${foodEntry}`;
    const query_url = queryGET(url);
    return query_url;
  };

  const menuItemSearch = (foodEntry) => {
    const url = `/food/menuItems/search?apikey=${token}&query=${foodEntry}`;
    const query_url = queryGET(url);
    return query_url;
  };

  const menuItemId = (foodEntry) => {
    const url = `/food/menuItems/${id}?apikey=${token}`;
    const query_url = queryGET(url);
    return query_url;
  };

  export {
    apiHost,
    searchRecipie,
    nutritionResults,
    menuItemSearch,
    menuItemId
  }






  
  
