let runWorker: Worker;
let output = "";

function main() {
  if (runWorker) {
    runWorker.terminate();
  }

  runWorker = new Worker("run-worker.js");
  runWorker.onmessage = handleRunMessage;
  //   runWorker.postMessage(compiled);
}

function handleRunMessage(event: MessageEvent) {
  if (typeof event.data !== "string") {
    return;
  }
  console.debug(event.data);

  //   output.textContent += event.data + "\r\n";

  //   var exception = event.data.match(/^Exception thrown: (.+)/);
  //   if (exception) {
  //     lastException = exception[1];
  //     return;
  //   }

  //   var message = event.data.match(
  //     /^  \[\d+\] plugin\.(?:sma|sp)::[^,]+, line (\d+)/
  //   );
  //   if (!lastException || !message) {
  //     return;
  //   }

  //   var annotations = input.getSession().getAnnotations();

  //   annotations.push({
  //     column: 0,
  //     row: message[1] - 1,
  //     text: lastException,
  //     type: "error",
  //   });

  //   input.getSession().setAnnotations(annotations);

  //   // Only annotate the exit point from the plugin.
  //   lastException = null;
}

main();
