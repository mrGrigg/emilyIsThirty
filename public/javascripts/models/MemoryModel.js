define([], function() {
	return Backbone.Model.extend({
		defaults: function() {
			return {
				name: 'A friend'	
			};
		},

		urlRoot: 'https://api.mongolab.com/api/1/databases/emilybirthday/collections/memories?apiKey=4f431753e4b0c5f6ebb3155b'
	});
});