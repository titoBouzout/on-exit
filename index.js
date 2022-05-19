let exiting = false

function onExit() {
	if (!exiting) {
		exiting = true
		for (let cb of callbacks) cb()
	}
}

let callbacks = []
module.exports = function (cb) {
	callbacks.push(cb)
}

for (let m of ['RESTART', 'SIGINT', 'SIGTERM', 'SIGUSR2', 'SIGHUP', 'exit', 'SIGBREAK']) {
	process.on(m, onExit)
}
