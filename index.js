var recipes = {key : "value"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({recipes}, object, {[key] : value})
}

function destructivelyUpdateObjectWithAndValue(object, key, value){
  object[key] = "value"
}
