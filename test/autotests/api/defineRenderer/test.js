exports.check = function(marko, markoCompiler, expect, done) {

    var defineRenderer = require('marko/defineRenderer');
    var renderer = defineRenderer({
        template: require('./template.marko'),
        getTemplateData: function(input) {
            return {
                fullName: input.firstName + ' ' + input.lastName
            };
        }
    });

    var renderResult = renderer.render({ firstName: 'John', lastName: 'Doe' });
    expect(renderResult.getOutput()).to.equal('<div>Hello John Doe!</div>');
    done();
};
