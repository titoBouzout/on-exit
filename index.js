let exiting = false

function onExit(who) {
	if (!exiting) {
		exiting = true
		if (who == 'SIGHUP' || who == 'SIGBREAK' || who == 'SHUTDOWN') {
			process.exit(0)
		} else {
			return Promise.all(promises).then(function () {
				process.exit(0)
			})
		}
	}
}

process.on('SIGTERM', () => onExit('SIGTERM'))
process.on('SIGINT', () => onExit('SIGINT'))
process.on('SIGUSR2', () => onExit('SIGUSR2'))
process.on('SIGBREAK', () => onExit('SIGBREAK'))
process.on('SIGHUP', () => onExit('SIGHUP'))

//process.on('SIGKILL', () => onExit('SIGKILL')) THIS MAKE IT CRASH ON LINUX! eehh
//process.on('exit', () => onExit('exit'))

process.on('message', m => {
	if (m && (m == 'RESTART' || m == 'SHUTDOWN')) {
		onExit(m)
	}
})

let promises = []
module.exports = function (promise) {
	promises.push(promise)
}
