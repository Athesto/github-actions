function getEnv(varName) {
  const varValue = process.env[varName];

  if (varValue == undefined || varValue == null)
    throw new Error(`${varName} not found (${varValue})`);

  return varValue;
}

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

module.exports = { getEnv, wait };
