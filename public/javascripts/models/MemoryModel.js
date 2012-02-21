define([], function() {
	return Backbone.Model.extend({
		defaults: function() {
			return {
				name: 'A friend'	
			};
		},

		urlRoot: 'https://api.mongolab.com/api/1/databases/emilytest/collections/birthdaywishes?apiKey=4f2cd22be4b024f14205b60e'
	});
});