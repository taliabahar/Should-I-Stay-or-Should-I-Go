let api = "https://api.spoonacular.com";
//let token = "39e15ea3fbe04194b88509f19335fbcd";
//let token = "81a08d66a9574015aa7f1f56f3457f5e";
let token = "f55bd8ceba144ee2a5e8e076bf69c684";

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
//const HTTP_CREATED = 201;

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
  "Content-Type": "application/json"
};

// METHOD #1
const queryGET = resource => {
  // const url = urlFor(resource);
  return fetch(`${urlFor(resource)}`, {
    method: "GET",
    headers: headers
  })
    .then(okCheck, emitNativeError)
    .then(response => response.json());
};

//https://api.spoonacular.com/recipes/search?query=cheese&number=2
const searchRecipe = foodEntry => {
  const url = `/recipes/search?query=${foodEntry}&apiKey=${token}`;
  const query_url = queryGET(url);
  return query_url;
};

const nutritionResults = id => {
  const url = `/recipes/${id}/nutritionWidget.json?&apiKey=${token}`;
  const query_url = queryGET(url);
  return query_url;
};

//api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=f7deaa757e034458bb5c8a8b911c82eb

const menuItemSearch = foodEntry => {
  const url = `/food/menuItems/search?query=${foodEntry}&number=2&apiKey=39e15ea3fbe04194b88509f19335fbcd`;
  const query_url = queryGET(url);
  return query_url;
};

const menuItemId = id => {
  const url = `/food/menuItems/${id}?&apiKey=${token}`;
  const query_url = queryGET(url);
  return query_url;
};

export { apiHost, searchRecipe, nutritionResults, menuItemSearch, menuItemId };
