
const randomString = Math.random().toString(36).substring(2, 15) + 
                     Math.random().toString(36).substring(2, 15);

const logOutput = () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
  // Schedule next execution in 5 seconds
  setTimeout(logOutput, 5000);
};

logOutput();