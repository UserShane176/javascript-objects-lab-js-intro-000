var recipes = {key : "value"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({recipes}, object, {[key] : value})
}

function destructivelyUpdateObjectWithAndValue(object, key, value){
  object[key] = "value"
}

function deleteFromObjectByKey(object, key){
   var newObject = Object.assign({}, object);
   delete newObject.key
  return newObject
}
