// Prevents the program from closing instantly
process.stdin.resume()

let callbacks = []
module.exports = function (cb) {
	callbacks.push(cb)
}

let exiting = false
function onExit() {
	if (!exiting) {
		exiting = true
		for (let cb of callbacks) cb()
	}
}

for (let m of [
	'exit',
	'RESTART',
	'SIGBREAK',
	'SIGHUP',
	'SIGINT',
	'SIGTERM',
	'SIGUSR1',
	'SIGUSR2',
]) {
	process.on(m, onExit)
}
