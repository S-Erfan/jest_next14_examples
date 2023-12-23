function formChangeHandle(obj, name, value) {
  const pathSegments = name.split(".");
  let currentObj = obj;

  for (let i = 0; i < pathSegments.length - 1; i++) {
    const segment = pathSegments[i];
    if (!currentObj[segment] || typeof currentObj[segment] !== "object") {
      currentObj[segment] = {};
    }
    currentObj = currentObj[segment];
  }

  const lastSegment = pathSegments[pathSegments.length - 1];
  currentObj[lastSegment] = value;
}

module.exports = formChangeHandle;
