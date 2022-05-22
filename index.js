let callbacks = []
export default function (cb) {
	callbacks.push(cb)
}

let exiting = false
function onExit() {
	if (!exiting) {
		exiting = true
		for (let cb of callbacks)
			try {
				cb()
			} catch (e) {
				console.error(e)
			}
	}
}

for (let m of [
	'beforeExit',
	'disconnect',
	'exit',
	'RESTART',
	'shutdown',
	'SIGBREAK',
	'SIGHUP',
	'SIGINT',
	'SIGKILL',
	'SIGTERM',
	'SIGUSR1',
	'SIGUSR2',
]) {
	process.on(m, onExit)
}

process.on('message', console.log)
