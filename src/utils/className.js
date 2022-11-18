const className = object => {
  let class_names = []

  for (const key in object) {
    if (object[key]) {
      class_names.push(key)
    }
  }

  return class_names.join(' ')
}

export default className
