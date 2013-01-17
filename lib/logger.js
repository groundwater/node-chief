var colors = require('colors')
var util   = require('util');

colors.setTheme({
    code: 'grey'
});

function colorize(string){
    return string.replace(/\#([^{]+){(.*?)}/g, function(match,color,value){
        return value[color]
    });
}

function Logger(pipe){
    this._pipe  = pipe;
    this.prefix = '';
}

Logger.prototype.append = function(type){
    var date   = new Date();
    var append = [
        date.toDateString().grey,
        date.toLocaleTimeString().grey,
        this.prefix,
        type,
        ': '
    ];
    return append.join(' ');
}

Logger.prototype.log = function(string){
    this._pipe.write( string + '\n');
}

Logger.prototype.done = function(){
    var fmt = util.format.apply(null,arguments);
    this.log( this.append('[DONE]'.blue) + colorize(fmt));
}

Logger.prototype.info = function(){
    var fmt = util.format.apply(null,arguments);
    this.log( this.append('[INFO]'.cyan) + colorize(fmt));
}

Logger.prototype.pipe = function(data){
    this._pipe.write( this.append('[DATA]'.grey) + data.toString() );
}

module.exports = {
    New: function(pipe){
        return new Logger(pipe);
    }
}
