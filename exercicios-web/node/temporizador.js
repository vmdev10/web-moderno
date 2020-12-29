// Agendamento de tarefas

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel() // Uma forma de cancelar o temporizador schedule
    console.log('Tarefa 1 cancelada!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})