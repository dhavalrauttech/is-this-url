 function ValidateUrl(text) {
  const regex = RegExp(
    /^((http|HTTP)([sS]?)?:\/\/)?([wW]{3}\.)?((?:[-a-zA-Z0-9]{1,63}\.)+)([a-zA-Z]{2,})\b(((?:[-a-zA-Z0-9/]+\.)*)[-a-zA-Z0-9/]+)?([a-zA-Z0-9?!$&'()*+,;=:/?#[\]@%-._~"\\]*)$/
  );
  return text.match(regex) ? true : false;
}
module.exports = ValidateUrl