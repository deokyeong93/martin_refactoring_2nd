function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(aPhoto) {
  return ["<div>", emitPhotoData(aPhoto), "</div>"].join("\n");
}

function emitPhotoData(aPhoto) {
  return [
    `<p>제목 : ${aPhoto.title}`,
    `<p>위치 : ${aPhoto.location}`,
    `<p>날짜 : ${aPhoto.data.toDateString()}`,
  ].join(`\n`);
}
